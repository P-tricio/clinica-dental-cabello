# Active Context: Clínica Dental Cabello

## Foco Actual
- Preparación y validación final para despliegue y subida a producción / repositorio.

## Decisiones Recientes
- **Corrección de ESLint**: Ajuste de `eslint.config.js` para añadir globals de Node.js (`process`, `__dirname`) y reconocer el identificador `motion` en JSX de framer-motion.
- **Optimización de React Hooks**:
  - `CookieBanner.jsx`: inicialización perezosa de estado con `useState(() => ...)` evitando renders en cascada por `setState` en efectos.
  - `Hero.jsx`: eliminación del estado `isLoaded` redundante, permitiendo que framer-motion anime directamente en el montaje.
  - `Navbar.jsx`: sincronización durante render del reseteo de menús móviles al cambiar de ruta (`location.key`).
- **Enrutamiento Vercel (`vercel.json`)**: Configuración de `rewrites` para soportar navegación directa y recargas en rutas cliente de React Router (`/servicios/:slug`, etc.) preservando `/api/*` para serverless functions.

## Próximos Pasos Inmediatos
- Confirmar con el usuario el estado de Git (archivos borrados en `.claude/skills/brainstorming/` vs resto del código).
- Desplegar a Vercel / Pushear a GitHub (`origin/main`).
- Verificar que las variables de entorno en Vercel Dashboard estén configuradas (`OPENAI_API_KEY`, EmailJS, etc.).
