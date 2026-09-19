# Active Context: Clínica Dental Cabello

## Foco Actual
- Auditoría técnica Impeccable completada y aplicación de mejoras P1, P2 y P3.

## Decisiones Recientes
- **Impeccable Teach & Document**: Definidos PRODUCT.md (registro brand, principios estratégicos de diseño médico premium) y DESIGN.md (sistema visual basado en materiales EGGER, tokens de Google Stitch y sidecar .impeccable/design.json).
- **Accesibilidad Formulario (P1)**: Añadidos IDs únicos a los campos de contacto (contact-name, contact-phone, etc.) con atributos htmlFor, ria-invalid y ria-describedby.
- **Navegación entre Páginas (P1)**: Corregido el enlace a #contacto desde /servicios/:slug para navegar suavemente al formulario en la Home con useNavigate.
- **Accesibilidad FAQs (P2)**: Implementado soporte completo ria-controls y ria-labelledby en el acordeón de preguntas frecuentes de la página de servicio.
- **Alertas Limpias (P2)**: Sustituido el anti-patrón de bordes laterales (order-l-2) por cajas con bordes perimetrales suaves, icono de estado y ole="alert" con ria-live="polite".
- **Responsive Chatbot (P2)**: Flexibilizado el contenedor de ChatWindow con width: 'min(360px, calc(100vw - 2rem))' y maxHeight: 'min(520px, calc(100dvh - 6rem))'.
- **Rendimiento 3D (P3)**: Implementada precarga escalonada en ScrollAnimation3D.jsx: carga prioritaria inmediata de los primeros 24 frames y carga del resto en bloques en reposo mediante equestIdleCallback.

## Próximos Pasos Inmediatos
- Comitear y pushear las mejoras a GitHub (origin/main).
- Despliegue automático en Vercel.