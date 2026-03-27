# Cabello | Clínica Dental

Sitio web profesional para Cabello | Clínica Dental en San Pedro Alcántara, Málaga.

## Características

- ✅ Diseño moderno y responsive
- ✅ 13 servicios dentales con páginas individuales
- ✅ Galería de fotos de la clínica
- ✅ Carrusel de testimonios
- ✅ Formulario de contacto funcional
- ✅ Botón de WhatsApp flotante
- ✅ SEO optimizado (meta tags, structured data, sitemap)
- ✅ Cookie banner
- ✅ Páginas legales (privacidad, cookies, aviso legal)
- ✅ Animaciones en scroll
- ✅ Accesibilidad (A11y)

## Tecnologías

- **Frontend**: React 18 + Vite
- **Estilos**: Tailwind CSS
- **Routing**: React Router v6
- **SEO**: react-helmet-async
- **Formularios**: EmailJS (requiere configuración)
- **Hosting**: Vercel (recomendado)

## Instalación

```bash
npm install
npm run dev
```

## Configuración

### EmailJS

1. Crea cuenta en https://www.emailjs.com/
2. Configura `.env.local` con tus credenciales
3. Descomenta código en `src/hooks/useContactForm.js`

## Próximos Pasos

1. **Imágenes**: Reemplazar placeholders con fotos reales de la clínica
2. **EmailJS**: Configurar para que funcione el formulario
3. **Deploy**: Pushear a GitHub y conectar con Vercel
4. **Dominio**: Apuntar clinicadentalcabello.es a Vercel
5. **Google Console**: Verificar sitio y enviar sitemap

## Deploy

```bash
npm run build  # Crear build
vercel        # Deploy a Vercel
```

---

Made with ❤️ for Cabello Clínica Dental
