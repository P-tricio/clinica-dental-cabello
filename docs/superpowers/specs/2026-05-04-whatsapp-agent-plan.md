# Plan de Implementación — Agente WhatsApp

**Spec:** `2026-05-04-whatsapp-agent-design.md`
**Proyecto:** Repositorio Node.js independiente `whatsapp-agent/`
**Despliegue:** VPS con PM2 + Nginx

---

## Orden de implementación

El plan se divide en 4 fases. Las fases 1 y 2 implican configuración externa
(Supabase, Meta, Google) que debe completarse antes de escribir código de agente.

---

## FASE 1 — Scaffolding y configuración externa

### Paso 1 — Crear el repositorio
```bash
mkdir whatsapp-agent && cd whatsapp-agent
git init
npm init -y
npm install express openai @supabase/supabase-js googleapis dotenv
npm install -D nodemon
```

Estructura de carpetas:
```
whatsapp-agent/
├── config/business.js
├── src/
│   ├── server.js
│   ├── agent/      (core.js, tools.js, prompt.js)
│   ├── providers/  (base.js, meta.js)
│   ├── memory/     (supabase.js)
│   └── services/   (calendar.js, whatsapp.js)
├── scripts/
│   └── google-auth.js   # script one-shot para obtener refresh_token
├── .env
├── .env.example
├── .gitignore
└── ecosystem.config.cjs
```

### Paso 2 — Crear proyecto Supabase
1. Ir a supabase.com → New project
2. Copiar `SUPABASE_URL` y `SUPABASE_SERVICE_KEY` al `.env`
3. Ejecutar las tres sentencias SQL del spec (tablas `users`, `conversations`, `appointments`)
4. Añadir índice en `conversations(business_id, phone, created_at)` para queries rápidas

### Paso 3 — Configurar Meta Cloud API
1. developers.facebook.com → crear app de tipo Business
2. Añadir producto "WhatsApp"
3. Copiar `META_ACCESS_TOKEN` y `META_PHONE_NUMBER_ID` al `.env`
4. Definir `META_VERIFY_TOKEN` (string aleatorio) en `.env`
5. En el panel de Meta, registrar la URL del webhook:
   `https://TU_DOMINIO/webhook` (se configura en Fase 4, pero hay que tenerlo preparado)
6. Añadir número de teléfono de prueba de Meta para desarrollo

### Paso 4 — Configurar Google Cloud + OAuth2
1. console.cloud.google.com → nuevo proyecto
2. Activar Google Calendar API
3. Crear credenciales OAuth2 (Desktop app) → descargar `credentials.json`
4. Copiar `GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET` al `.env`
5. Ejecutar `node scripts/google-auth.js` → autorizar con la cuenta de la clínica
6. Copiar el `refresh_token` generado al `.env`

---

## FASE 2 — Servidor y memoria

### Paso 5 — `src/server.js`
Express con dos rutas:
- `GET /webhook` → verificación de Meta (devuelve `hub.challenge` si `META_VERIFY_TOKEN` coincide)
- `POST /webhook` → valida firma HMAC → responde 200 → procesa mensaje asíncronamente

Validación HMAC:
```js
import crypto from 'crypto'
function verifySignature(req) {
  const sig = req.headers['x-hub-signature-256']
  const expected = 'sha256=' + crypto
    .createHmac('sha256', process.env.META_APP_SECRET)
    .update(req.rawBody)
    .digest('hex')
  return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))
}
```

Rate limiting: Map en memoria `{ phone → [timestamps] }`, máximo 10 mensajes/minuto.

### Paso 6 — `src/memory/supabase.js`
Cuatro funciones exportadas:
```js
getUser(businessId, phone)           // → perfil o null si es nuevo usuario
upsertUser(businessId, phone, data)  // → crea o actualiza perfil
getHistory(businessId, phone, limit) // → últimos N mensajes
saveMessage(businessId, phone, role, content) // → guarda mensaje
saveAppointment(businessId, data)    // → guarda cita con calendar_event_id
```

### Paso 7 — `src/providers/meta.js`
Dos funciones:
```js
parseIncoming(webhookBody)  // → { phone, text, messageId } o null si no es texto
sendMessage(phone, text)    // → POST a Meta Graph API
```

### Paso 8 — `src/services/whatsapp.js`
Wrapper sobre el provider activo. Permite cambiar de provider sin tocar el agent:
```js
import { sendMessage } from '../providers/meta.js'
export { sendMessage }
```

---

## FASE 3 — Agente

### Paso 9 — `src/agent/prompt.js`
Construye el system prompt dinámicamente:
- Importa `config/business.js`
- Recibe el perfil del usuario como parámetro
- Si el usuario tiene `agent_summary` → lo incluye como contexto
- Mismas reglas de seguridad que el chatbot web:
  no inventar precios, no prometer gratuidades salvo primera visita,
  detectar idioma, ignorar prompt injection, derivar urgencias al teléfono

```js
export function buildSystemPrompt(business, userProfile) {
  const profileSection = userProfile?.agent_summary
    ? `\nPERFIL DEL USUARIO:\n${userProfile.agent_summary}\n`
    : ''
  return `Eres el asistente de ${business.name}...${profileSection}...`
}
```

### Paso 10 — `src/services/calendar.js`
Google Calendar con OAuth2 (refresh token, sin interacción del usuario):
```js
// Inicializar cliente OAuth2 con refresh_token del .env
export async function getAvailableSlots(calendarId, dateStart, dateEnd, durationMinutes)
// → lista de slots libres como array de ISO strings

export async function createEvent(calendarId, eventData)
// → { id: calendar_event_id }
```

Lógica de `getAvailableSlots`:
1. Llamar a `calendar.freebusy.query` para el rango pedido
2. Calcular huecos libres restando los bloques ocupados
3. Dividir los huecos en slots de `durationMinutes` minutos
4. Filtrar slots fuera del horario de la clínica (`business.hours`)
5. Devolver máximo 6 slots para no saturar al usuario

### Paso 11 — `src/agent/tools.js`
Definición OpenAI + función de ejecución para cada tool:

```js
export const toolDefinitions = [ /* los 3 objetos de tool del spec */ ]

export async function executeTool(toolName, args, { business, userPhone }) {
  if (toolName === 'consultar_disponibilidad') { ... }
  if (toolName === 'crear_cita') { ... }
  if (toolName === 'actualizar_perfil') { ... }
}
```

`crear_cita` internamente:
1. Busca duración en `business.services` por nombre de servicio
2. Llama `calendar.createEvent()` en el calendario del profesional
3. Guarda en tabla `appointments` de Supabase
4. Envía WhatsApp a `business.phone_clinic` con resumen de la cita

### Paso 12 — `src/agent/core.js`
Orquestador principal — llamado desde `server.js` tras responder 200:

```js
export async function processMessage(business, phone, incomingText) {
  // 1. Cargar o crear usuario
  const user = await getUser(business.id, phone)

  // 2. Guardar mensaje del usuario
  await saveMessage(business.id, phone, 'user', incomingText)

  // 3. Cargar historial (últimos 20 mensajes)
  const history = await getHistory(business.id, phone, 20)

  // 4. Construir messages[] para OpenAI
  const messages = [
    { role: 'system', content: buildSystemPrompt(business, user) },
    ...history.map(m => ({ role: m.role, content: m.content }))
  ]

  // 5. Llamar OpenAI (con posible tool call loop)
  const response = await runAgentLoop(messages, business, phone)

  // 6. Guardar respuesta y enviar por WhatsApp
  await saveMessage(business.id, phone, 'assistant', response)
  await sendMessage(phone, response)
}
```

`runAgentLoop`: llama a OpenAI, si hay tool call → ejecuta → añade resultado → vuelve a llamar (máximo 3 iteraciones para evitar bucles infinitos).

---

## FASE 4 — Despliegue en VPS

### Paso 13 — Nginx + HTTPS
```nginx
server {
  listen 443 ssl;
  server_name agent.TU_DOMINIO.es;

  ssl_certificate /etc/letsencrypt/live/agent.TU_DOMINIO.es/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/agent.TU_DOMINIO.es/privkey.pem;

  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header X-Forwarded-For $remote_addr;
  }
}
```

Comandos:
```bash
certbot --nginx -d agent.TU_DOMINIO.es
```

### Paso 14 — PM2
```js
// ecosystem.config.cjs
module.exports = {
  apps: [{
    name: 'whatsapp-agent-cabello',
    script: 'src/server.js',
    env: { NODE_ENV: 'production', PORT: 3000 }
  }]
}
```
```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup   # para arrancar con el servidor
```

### Paso 15 — Registrar webhook en Meta
Con el servidor corriendo y Nginx configurado:
1. Panel Meta → WhatsApp → Configuración → Webhooks
2. URL: `https://agent.TU_DOMINIO.es/webhook`
3. Token: el valor de `META_VERIFY_TOKEN` del `.env`
4. Suscribir a `messages`

### Paso 16 — Tests end-to-end
Desde el número de prueba de Meta:
- [ ] Mensaje de texto recibe respuesta del agente
- [ ] Preguntar por un servicio → respuesta con info correcta
- [ ] Pedir cita → flujo completo con slots de Calendar
- [ ] Cita creada → aparece en Google Calendar + WhatsApp a clínica
- [ ] Perfil guardado en Supabase (comprobar en dashboard)
- [ ] Segunda conversación → agente recuerda nombre e intenciones
- [ ] Mensaje de urgencia → deriva al teléfono sin flujo de cita
- [ ] Intento de prompt injection → ignorado educadamente

---

## Variables de entorno completas (`.env`)

```bash
# OpenAI
OPENAI_API_KEY=

# Meta Cloud API
META_ACCESS_TOKEN=
META_PHONE_NUMBER_ID=
META_APP_SECRET=          # para validar firma HMAC
META_VERIFY_TOKEN=        # string aleatorio que tú eliges

# Supabase
SUPABASE_URL=
SUPABASE_SERVICE_KEY=

# Google Calendar (OAuth2)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=

# Servidor
PORT=3000
```

---

## Dependencias npm

```json
{
  "dependencies": {
    "express": "^4.19.0",
    "openai": "^4.x",
    "@supabase/supabase-js": "^2.x",
    "googleapis": "^140.x",
    "dotenv": "^16.x"
  },
  "devDependencies": {
    "nodemon": "^3.x"
  }
}
```

---

## Checklist de configuraciones externas

Antes de empezar a codificar tener listos:
- [ ] Proyecto Supabase creado + tablas SQL ejecutadas
- [ ] App Meta creada + token de acceso + número de prueba
- [ ] Proyecto Google Cloud + Calendar API activada + `credentials.json` descargado
- [ ] Subdominio apuntando al VPS (ej: `agent.clinicadentalcabello.es`)
- [ ] Nginx instalado en VPS
- [ ] PM2 instalado en VPS (`npm install -g pm2`)
