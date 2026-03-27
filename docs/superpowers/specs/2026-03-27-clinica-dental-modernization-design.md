# Diseño: Modernización Moderada - Clínica Dental Cabello

**Fecha:** 2026-03-27
**Proyecto:** Clínica Dental Cabello
**Enfoque:** Refresh equilibrado con componentes modernos de 21st.dev
**Estado:** Aprobado

---

## Resumen Ejecutivo

Modernizar la web actual de la Clínica Dental Cabello mediante un **refresh equilibrado** que mejore la percepción de profesionalismo y modernidad sin cambios disruptivos. Se rediseñarán selectivamente los componentes clave (Services, Testimonials, Contact), se mejorarán animaciones y microinteractions, y se añadirán detalles visuales premium.

**Resultado esperado:** Web que se sienta más moderna, pulida y profesional manteniendo la identidad actual.

---

## Estrategia General

### Pilares de la Modernización

1. **Componentes Clave Rediseñados**
   - Services: Cards modernizadas con mejor jerarquía visual
   - Testimonials: Cards con visual mejorado y animaciones
   - Contact: Cajas de info y formulario refinados

2. **Animaciones Sutiles pero Visibles**
   - Scroll animations con fade-in y slide-up
   - Hover states refinados con elevación ligera
   - Reveal animations al entrar en viewport
   - Transiciones suaves en inputs y formularios

3. **Detalles Premium**
   - Sombras sofisticadas con profundidad
   - Gradientes sutiles para dimensión
   - Mejor espaciado y ritmo visual
   - Iconografía refinada
   - Líneas decorativas en oro

### Filosofía de Diseño

- **Mantener identidad:** Conservar paleta de colores (forest, gold, cream) y estructura
- **No disruptivo:** Cambios visibles pero que no requieren reorganización de navegación
- **Profesional moderno:** Elevar calidad visual sin sacrificar sobriedad
- **Accesible:** Todas las animaciones deben ser suaves y no distraer del contenido

---

## Componentes Clave a Modernizar

### 1. Services (Servicios)

**Estado Actual:**
- Grid de 3 columnas
- Cards simples con nombre, descripción e ícono
- Minimal visual hierarchy

**Nuevo Diseño:**
- Cards con mejor jerarquía visual
  - Número grande del servicio (02, 03, etc.)
  - Ícono mejorado y más visible
  - Descripción clara con mejor espaciado
  - Badge de "Destacado" en servicios premium
- Hover effect:
  - Elevación ligera (box-shadow más pronunciada)
  - Fondo ligeramente más rico
  - Ícono con rotación sutil (5-10 grados)
- Mejor separación interna de contenido
- Transición suave en color y sombra (300ms)

**Componentes de 21st.dev:**
- Cards modernas con mejor visual
- Layout grid responsive mejorado

---

### 2. Testimonials (Testimonios)

**Estado Actual:**
- Cards con estrellas (rating)
- Nombre, especialidad y texto
- Carrusel simple funcional
- Grid de 3 columnas

**Nuevo Diseño:**
- Cards más refinadas
  - Borde sutil (stone/10)
  - Sombra sofisticada (shadow-md)
  - Mejor espaciado interno
  - Comilla decorativa en oro al inicio
- Visual del rating mejorado
  - Estrellas doradas más visibles
  - Texto de nombre en boldface
  - Especialidad en gris más sutil
- Animación del carrusel:
  - Fade-in en lugar de slide horizontal
  - Staggered reveal (cada card aparece escalonada)
  - Transición suave (400ms)
- Mejor separación entre cards

**Componentes de 21st.dev:**
- Cards modernas con testimonios
- Carrusel con mejor visual

---

### 3. Contact (Contacto)

**Estado Actual:**
- 3 cajas de info (Dirección, Teléfono, Horario)
- Formulario a la izquierda
- Mapa a la derecha
- Cajas con fondo cream-dark

**Nuevo Diseño:**

#### Cajas de Contacto
- Diseño moderno:
  - Ícono grande a la izquierda (forest/gold)
  - Contenido a la derecha con mejor espaciado
  - Borde sutil superior en gold
  - Sombra sofisticada
  - Hover: Elevación ligera, ícono color más vivo
- Mejor visual del contenido:
  - Teléfono con mejor formatting
  - WhatsApp con mejor visibilidad
  - Horario con mejor estructura de tabla

#### Formulario
- Inputs refinados:
  - Border color: stone/20 en estado normal
  - Border color: gold en focus (transición 200ms)
  - Sombra sutil en focus (gold/10)
  - Mejor padding interno (espaciado equilibrado)
  - Placeholder más sutil (stone/40)
- Labels mejores:
  - Más pequeños (text-xs)
  - Better color contrast
  - Mejor margin
- Botón de envío:
  - Texto más claro
  - Hover con elevación ligera
  - Transición suave (300ms)
- Checkbox mejorado:
  - Mejor visual del checkbox
  - Focus state visible (gold border)

#### Mapa
- Integración visual mejorada
- Borde suave
- Mejor integración con formulario

**Componentes de 21st.dev:**
- Formulario moderno
- Cards de contacto mejoradas
- Input components refinados

---

## Animaciones y Microinteractions

### Scroll Animations

**Services:**
- Fade-in + slide-up (30px) al entrar en viewport
- Staggered: cada card con delay de 60-80ms
- Duration: 400ms
- Easing: ease-out

**Testimonials:**
- Fade-in suave al entrar en viewport
- Slight scale increase (1.0 → 1.02)
- Duration: 400ms
- Staggered con 60ms delay entre cards

**Contact:**
- Cajas de info: fade-in + slide-right
- Formulario: fade-in + slide-left
- Staggered para cada elemento
- Duration: 400ms

### Hover States

**Botones:**
- Color transition: 200ms
- Scale transform: 1.0 → 1.02 (300ms)
- Sombra más pronunciada en hover

**Cards de Servicios:**
- Box-shadow: shadow-md → shadow-lg (300ms)
- Elevación: translateY(0 → -4px) (300ms)
- Ícono: rotate(0deg → 5deg) (300ms)

**Enlaces y CTAs:**
- Color change: 200ms ease-out
- Underline reveal (si aplica)

**Cajas de Contacto:**
- Elevación ligera (translateY -2px) (300ms)
- Ícono color más vivo (300ms)
- Box-shadow mejorada (300ms)

### Input/Form Feedback

**Focus State:**
- Border color: stone/20 → gold (200ms)
- Box-shadow: inset gold/10 (200ms)
- Label color más visible

**Validación:**
- Error: border-red-400, shadow-red/10
- Success: border-green/40, shadow-green/10
- Smooth transition (200ms)

### Transiciones Generales

| Tipo | Duration | Easing |
|------|----------|--------|
| Color | 150-200ms | ease-out |
| Transform (scale) | 300ms | ease-out |
| Transform (translate) | 400ms | ease-out |
| Opacity | 150ms | ease-out |
| Sombra | 200ms | ease-out |

---

## Detalles Visuales y Refinamientos

### Sombras

- **Cards normales:** `shadow-md` (0 4px 6px rgba(0,0,0,0.1))
- **Cards hover:** `shadow-lg` (0 10px 15px rgba(0,0,0,0.15))
- **Elementos flotantes:** Sombra sofisticada con blur mayor
- **Inputs focus:** Sombra interna sutil en gold

### Gradientes

- **Líneas decorativas:** Linear gradient (gold → transparent)
- **Fondos sutiles:** Muy ligero (casi imperceptible) para profundidad
- **Overlays:** Refinados sin oscurecer demasiado contenido

### Espaciado y Ritmo Visual

- **Cards internas:** Mejorar padding (p-6 → p-7/p-8)
- **Gaps entre elementos:** Más consistentes y generosos
- **Líneas separadoras:** Bordes finos (stone/10)
- **Secciones:** Mejor proporción vertical

### Iconografía

- **Tamaño consistente:** 20-24px para servicios
- **Weight mejorado:** Consistent stroke-width
- **Color:** Forest con accents en gold
- **Comillas en testimonios:** Decorativas, gold, 2.5rem size

### Números Grandes

- **Servicios:** Números grandes (5xl) en gold/50
- **Trust bar:** Ya optimizado, mantener
- **Contact:** Opcional en cajas (números de teléfono destacados)

---

## Implementación Técnica

### Herramientas y Librerías

- **21st.dev MCP:** Para componentes modernos (Cards, Formularios, layouts)
- **Tailwind CSS:** Clases existentes + mejoras de animación
- **Framer Motion (opcional):** Si se requieren animaciones complejas
- **CSS Animations:** Para scroll-triggered animations (Intersection Observer)

### Estructura de Cambios

1. **Fase 1:** Services + Testimonials (componentes visuales)
2. **Fase 2:** Contact (formulario + contacto info)
3. **Fase 3:** Animaciones globales (scroll + hover)
4. **Fase 4:** Detalles finales (sombras, espaciado, refinamientos)

### Archivos a Modificar

**Componentes:**
- `src/components/sections/Services.jsx`
- `src/components/sections/Testimonials.jsx`
- `src/components/sections/Contact.jsx`
- `src/components/ui/ServiceCard.jsx`
- `src/components/ui/TestimonialCard.jsx`

**Estilos:**
- `src/index.css` (animaciones globales)
- Tailwind config (si requiere extensiones)

---

## Criterios de Éxito

✅ Web modernizada pero manteniendo identidad actual
✅ Todas las animaciones suaves y no distractoras
✅ Mejor percepción de profesionalismo y calidad
✅ Componentes más refinados y premium
✅ UX mejorada con mejor feedback visual
✅ Sin cambios disruptivos en navegación o estructura

---

## Notas

- Mantener accesibilidad (WCAG 2.1 AA)
- Probar en móvil y desktop
- Transiciones deben ser configurable (respetar prefers-reduced-motion)
- Mantener performance (sin animaciones que ralenticen)
