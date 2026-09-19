# Progress: Clínica Dental Cabello

## Estado General
- Proyecto web React + Vite + TailwindCSS + Framer Motion.
- Listo para producción y despliegue.

## Completado
- [x] Linter configurado y verificado (0 errores en `npm run lint`).
- [x] Build de producción validado con Vite (`npm run build`).
- [x] Corrección de reglas de hooks de React (evitar cascading renders en `CookieBanner`, `Hero`, `Navbar`).
- [x] Soporte de globals de Node en ESLint para funciones serverless en `/api/chat.js` y `vite.config.js`.
- [x] Configuración de reescrituras de Vercel en `vercel.json` para enrutamiento SPA y Serverless API.
- [x] Verificación de assets, catálogo de servicios (13 servicios con imágenes y slugs correspondientes), `sitemap.xml` y `robots.txt`.
- [x] `.env.example` sincronizado y documentado.
- [x] Inicialización de memoria viva en `docs/`.

## Pendiente
- [ ] Decisión del usuario sobre commits pendientes en Git (limpieza de `.claude/skills/brainstorming/` y nuevos cambios).
- [ ] Push a repositorio remoto (`origin/main`).
- [ ] Despliegue en producción en Vercel (`vercel --prod`).
- [ ] Configuración de variables de entorno en Vercel (`OPENAI_API_KEY`, etc.).
