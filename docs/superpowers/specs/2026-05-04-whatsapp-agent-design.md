# Agente WhatsApp — Clínica Dental Cabello

**Fecha:** 2026-05-04
**Stack:** Node.js + Express + OpenAI GPT-4o-mini + Supabase + Google Calendar + Meta Cloud API
**Modelo:** Config-driven — un despliegue por cliente, reutilizable para cualquier negocio

---

## Objetivo

Agente de WhatsApp que:
1. Responde preguntas usando exclusivamente los datos del negocio configurado
2. Recuerda al usuario entre conversaciones (nombre, preferencias, intenciones, historial)
3. Consulta disponibilidad real en Google Calendar y crea citas confirmadas
4. Notifica a la clínica por WhatsApp cuando se agenda una cita
5. Responde en el idioma del usuario (multilingüe)
6. Es completamente reutilizable para otro negocio cambiando `config/business.js` y `.env`

---

## Arquitectura

```
[Usuario WhatsApp]
       ↓
[Meta Cloud API]  →  POST /webhook  →  [VPS: Node.js + Express]
                                              ↓
                                    ┌─────────────────────┐
                                    │   Agent Core        │
                                    │   OpenAI GPT-4o-mini│
                                    │   + 3 tools         │
                                    └─────────────────────┘
                                       ↓         ↓        ↓
                                 [Supabase] [Google ] [WhatsApp]
                                 [memoria ] [Calendar] [→ clínica]
```

### Capa 1 — Webhook receiver (Express)
- Recibe POST de Meta Cloud API en `/webhook`
- Valida firma HMAC `X-Hub-Signature-256` — rechaza cualquier request no firmado
- Responde `200 OK` inmediatamente (Meta exige respuesta en < 3s)
- Procesa el mensaje de forma asíncrona tras responder

### Capa 2 — Agent Core (OpenAI)
- Carga historial de conversación (últimos 20 mensajes) desde Supabase
- Carga perfil enriquecido del usuario desde Supabase
- Construye system prompt dinámico con datos del negocio + perfil del usuario
- Llama a GPT-4o-mini con las 3 tools definidas
- Si hay tool call → ejecuta → resultado vuelve a OpenAI → respuesta final
- Guarda respuesta en Supabase y envía por WhatsApp

### Capa 3 — Memoria (Supabase)
- Historial exacto de mensajes por número de teléfono
- Perfil enriquecido del usuario actualizado en tiempo real
- Tabla de citas con estado y referencia al evento de Calendar

### Capa 4 — Servicios externos
- **Google Calendar**: consultar huecos libres, crear eventos de cita
- **WhatsApp API**: enviar mensajes de respuesta y notificaciones a la clínica

### Infraestructura VPS
- **PM2**: gestión del proceso Node.js (auto-restart, logs)
- **Nginx**: proxy inverso con HTTPS (Let's Encrypt) — Meta requiere HTTPS en el webhook

---

## Estructura de Archivos

```
whatsapp-agent/                      # Repositorio independiente del proyecto web
├── config/
│   └── business.js                  # TODO único del cliente — sin tocar el resto del código
├── src/
│   ├── server.js                    # Express server, /webhook GET (verificación) y POST
│   ├── agent/
│   │   ├── core.js                  # Orquestador: carga memoria → OpenAI → ejecuta tools → guarda
│   │   ├── tools.js                 # Definición y ejecución de las 3 tools
│   │   └── prompt.js                # Construye system prompt desde config/business.js + perfil usuario
│   ├── providers/
│   │   ├── base.js                  # Interfaz común: normalizar mensaje entrante, enviar mensaje
│   │   └── meta.js                  # Adaptador Meta Cloud API
│   ├── memory/
│   │   └── supabase.js              # CRUD: historial, perfil usuario, citas
│   └── services/
│       ├── calendar.js              # Google Calendar: OAuth2, listar huecos, crear evento
│       └── whatsapp.js              # Enviar mensaje por el proveedor activo
├── .env                             # Credenciales — nunca en git
├── .env.example
├── package.json
└── ecosystem.config.js              # Configuración PM2
```

### Para un cliente nuevo
1. Clonar el repo
2. Editar `config/business.js` con datos del negocio
3. Rellenar `.env` con credenciales del cliente
4. `pm2 start ecosystem.config.js` en el VPS

---

## Configuración del Negocio (`config/business.js`)

```js
export default {
  id: 'clinica-cabello',
  name: 'Cabello | Clínica Dental',
  phone_clinic: '+34665482102',    // número que recibe notificaciones de citas
  email: 'info@clinicadentalcabello.es',
  address: 'Av. de la Constitución 19, 7A, San Pedro Alcántara, Málaga',
  hours: 'Lunes a Viernes 9:00–21:00 | Sábados 11:00–13:00 | Domingos cerrado',
  free_first_visit: true,

  // Cada profesional tiene su propio calendario Google
  professionals: [
    {
      id: 'cabello',
      name: 'Dr. Francisco Cabello',
      title: 'Licenciado en Odontología',
      specialties: ['Implantología', 'Periodoncia', 'Ortodoncia', 'Estética Dental'],
      calendar_id: 'GOOGLE_CALENDAR_ID_CABELLO', // se rellena en .env o aquí
    },
    // Añadir más profesionales aquí cuando sea necesario
  ],

  // Duración específica por servicio — el agente la usa automáticamente
  services: [
    { name: 'Primera Visita',          desc: 'Evaluación inicial gratuita', duration_minutes: 30  },
    { name: 'Implantes Dentales',      desc: 'Implantes de titanio',        duration_minutes: 90  },
    { name: 'Ortodoncia',              desc: 'Ortodoncia tradicional',       duration_minutes: 45  },
    { name: 'Ortodoncia Invisible',    desc: 'Alineadores transparentes',    duration_minutes: 45  },
    { name: 'Estética Dental',         desc: 'Carillas y blanqueamiento',    duration_minutes: 60  },
    { name: 'Periodoncia',             desc: 'Salud de encías',              duration_minutes: 60  },
    { name: 'Prótesis Dentales',       desc: 'Prótesis removibles y fijas',  duration_minutes: 60  },
    { name: 'Endodoncia',              desc: 'Tratamiento de conductos',     duration_minutes: 75  },
    { name: 'Cirugía Bucal',           desc: 'Extracciones y cirugía',       duration_minutes: 60  },
    { name: 'Odontopediatría',         desc: 'Odontología infantil',         duration_minutes: 45  },
    { name: 'Odontología Conservadora',desc: 'Reparación de caries',         duration_minutes: 45  },
    { name: 'Prevención Dental',       desc: 'Limpiezas y revisiones',       duration_minutes: 45  },
    { name: 'ATM y Bruxismo',          desc: 'Trastornos mandibulares',      duration_minutes: 60  },
  ],

  // Duración por defecto si el servicio no especifica una
  default_duration_minutes: 60,
}
```

---

## Memoria de Usuario (Supabase)

### Tablas

```sql
-- Perfil enriquecido del usuario
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id text NOT NULL,
  phone text NOT NULL,
  name text,
  email text,
  services_interest text[],       -- servicios por los que ha preguntado
  preferences text,               -- "prefiere mañanas, martes o jueves"
  intentions text,                -- "valora implantes, le preocupa el precio,
                                  --  quiere consultarlo con su pareja"
  agent_summary text,             -- párrafo generado por GPT con todo lo relevante
  last_interaction timestamptz,
  created_at timestamptz DEFAULT now(),
  UNIQUE(business_id, phone)
);

-- Historial exacto de mensajes
CREATE TABLE conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id text NOT NULL,
  phone text NOT NULL,
  role text NOT NULL,             -- 'user' | 'assistant'
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Registro de citas
CREATE TABLE appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id text NOT NULL,
  phone text NOT NULL,
  name text,
  service text,
  datetime timestamptz,
  calendar_event_id text,
  status text DEFAULT 'confirmed', -- 'confirmed' | 'cancelled'
  notes text,
  created_at timestamptz DEFAULT now()
);
```

### Cómo se usa la memoria

Al inicio de cada conversación el system prompt incluye:

```
PERFIL DEL USUARIO:
Nombre: María García
Intereses: ortodoncia invisible, estética dental
Preferencias: mañanas, martes o jueves
Intenciones: está valorando la ortodoncia invisible, comparando precios,
             quiere empezar en septiembre cuando vuelva de vacaciones
Historial: consulta el 12/03/2026 sobre blanqueamiento (no agendó cita)
Resumen: usuaria interesada y bien informada, sensible al precio,
         mejor no presionarla y darle tiempo para decidir
```

El `actualizar_perfil` tool se llama activamente durante la conversación — cada vez que el usuario revela algo relevante (una preferencia, una duda, una intención, un dato personal), GPT actualiza el campo correspondiente en tiempo real.

---

## Tools del Agente

### Tool 1 — `consultar_disponibilidad`
```js
{
  name: 'consultar_disponibilidad',
  description: 'Consulta huecos libres en el calendario para un servicio y rango de fechas',
  parameters: {
    servicio: string,           // el agente deduce la duración automáticamente
    fecha_inicio: string,       // "2026-05-10"
    fecha_fin: string,          // "2026-05-14"
    profesional_id: string,     // opcional — si el usuario pide un profesional concreto
  }
  // Lógica interna:
  // 1. Busca en config el duration_minutes del servicio
  // 2. Si profesional_id → consulta solo ese calendario
  //    Si no → consulta todos los profesionales y une disponibilidad
  // Devuelve: array de { datetime, profesional } → GPT los presenta al usuario
}
```

### Tool 2 — `crear_cita`
```js
{
  name: 'crear_cita',
  description: 'Crea evento en Google Calendar y notifica a la clínica por WhatsApp',
  parameters: {
    nombre: string,
    telefono: string,
    email: string,              // opcional
    servicio: string,
    datetime: string,           // ISO 8601: "2026-05-10T10:00:00"
    profesional_id: string,     // el profesional confirmado en consultar_disponibilidad
    notas: string               // opcional
  }
  // Acción: crea evento en el calendario del profesional correcto
  //         + envía WhatsApp al número de la clínica con todos los datos
}
```

### Tool 3 — `actualizar_perfil`
```js
{
  name: 'actualizar_perfil',
  description: 'Actualiza el perfil del usuario cuando revela información relevante',
  parameters: {
    nombre: string,             // opcional
    email: string,              // opcional
    services_interest: string[], // opcional
    preferences: string,        // opcional — texto libre
    intentions: string,         // opcional — texto libre
    agent_summary: string       // opcional — resumen actualizado
  }
}
```

---

## Flujos de Conversación

### Flujo 1 — Primera vez
```
Usuario: "Hola"
GPT: "¡Hola! Soy el asistente de Cabello Clínica Dental.
      ¿Cómo te llamas?"
Usuario: "Soy Carlos"
GPT: llama actualizar_perfil({ nombre: "Carlos" })
GPT: "¡Hola, Carlos! ¿En qué puedo ayudarte hoy?"
```

### Flujo 2 — Usuario que vuelve
```
[Carlos escribe 3 semanas después]
GPT lee su perfil: interesado en implantes, le preocupa el precio
GPT: "¡Hola de nuevo, Carlos! La última vez hablamos sobre implantes.
      ¿Has podido pensarlo? ¿Te busco una primera visita gratuita
      para que el Dr. Cabello te explique las opciones sin compromiso?"
```

### Flujo 3 — Solicitud de cita con disponibilidad real
```
Usuario: "Quiero pedir cita para ortodoncia la semana que viene"
GPT: llama consultar_disponibilidad({ fecha_inicio: "2026-05-11",
                                      fecha_fin: "2026-05-15",
                                      duracion_minutos: 60 })
← Calendar devuelve slots libres
GPT: "Tengo disponibilidad el martes 13 a las 10:00 y a las 17:00,
      y el jueves 15 a las 11:00. ¿Cuál te viene mejor?"
Usuario: "El martes a las 10"
GPT: llama crear_cita({ nombre: "Carlos", datetime: "2026-05-13T10:00:00",
                        servicio: "Ortodoncia", ... })
← Evento creado + WhatsApp enviado a clínica
GPT: "¡Perfecto, Carlos! Cita confirmada:
      📅 Martes 13 de mayo a las 10:00
      🦷 Ortodoncia
      📍 Av. de la Constitución 19, 7A, San Pedro Alcántara
      ¡Hasta el martes!"
```

### Flujo 4 — Urgencia
```
Usuario: "Tengo un dolor muy fuerte"
GPT: "Entiendo que es urgente. Llama directamente a la clínica:
      📞 +34 952 78 30 87 | +34 665 482 102
      Te atenderán lo antes posible."
      [No inicia flujo de cita]
```

---

## Seguridad

- **HMAC validation**: cada webhook de Meta se verifica con `X-Hub-Signature-256`
- **Rate limiting**: máximo 10 mensajes por usuario por minuto
- **Input sanitization**: mensajes del usuario saneados antes de pasar a OpenAI
- **Prompt hardening**: instrucción explícita de ignorar intentos de prompt injection
- **Sin precios gratuitos**: igual que el chatbot web, nunca afirmar que algo es gratis salvo la primera visita
- **`.env` en `.gitignore`**: credenciales nunca en el repositorio

---

## Variables de Entorno (`.env`)

```bash
# OpenAI
OPENAI_API_KEY=

# Meta Cloud API
META_ACCESS_TOKEN=
META_PHONE_NUMBER_ID=
META_VERIFY_TOKEN=           # token que eliges tú para verificar el webhook

# Supabase
SUPABASE_URL=
SUPABASE_SERVICE_KEY=        # service role key (no la anon key)

# Google Calendar (OAuth2)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=        # generado una vez con el script de autorización

# Puerto del servidor
PORT=3000
```

---

## Despliegue en VPS

```
# ecosystem.config.js (PM2)
{
  name: 'whatsapp-agent-cabello',
  script: 'src/server.js',
  env: { NODE_ENV: 'production', PORT: 3000 }
}
```

```nginx
# Nginx (fragmento)
server {
  listen 443 ssl;
  server_name agent.clinicadentalcabello.es;

  location / {
    proxy_pass http://localhost:3000;
  }
}
```

Meta requiere HTTPS para el webhook. Let's Encrypt (certbot) gestiona el certificado.

---

## Lo que queda fuera de este sprint

- Agente Telegram → siguiente sprint (reutiliza todo excepto el provider)
- Panel de administración para ver conversaciones → sprint futuro
- Multi-tenant (un despliegue para varios clientes) → cuando haya >3 clientes
- Recordatorios automáticos de cita (WhatsApp 24h antes) → sprint futuro
- Cancelación/modificación de citas desde WhatsApp → sprint futuro
- Duraciones reales por servicio → pendiente de confirmación con la clínica
  (la estructura en config/business.js ya está lista, solo hay que ajustar los minutos)
- Preferencia de profesional por parte del usuario → la arquitectura multi-profesional
  ya está diseñada, se activa añadiendo más entradas en el array professionals[]

---

## Criterios de éxito

- El bot responde correctamente preguntas sobre servicios, horarios y ubicación
- El bot recuerda el nombre e intenciones del usuario entre sesiones
- `consultar_disponibilidad` devuelve slots reales del Google Calendar
- `crear_cita` crea el evento en Calendar y notifica a la clínica por WhatsApp
- `actualizar_perfil` enriquece el perfil en tiempo real durante la conversación
- La API key de OpenAI y las credenciales nunca están expuestas
- Cambiar de cliente requiere solo editar `config/business.js` y `.env`
