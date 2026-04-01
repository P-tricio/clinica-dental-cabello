# 🎨 Paleta de Colores - Referencia Rápida

## Restyling Clínica Dental Cabello - Materiales EGGER

### 📋 Copiar & Pegar - Variables CSS/Tailwind

```css
/* Texto */
color-grey-900      /* #2c2c2c - Encabezados, texto primario */
color-grey-700      /* #5a5a5a - Texto de cuerpo */
color-grey-600      /* #7a7a7a - Texto secundario */

/* Fondos */
color-grey-50       /* #fafaf8 - Fondo primario (casi blanco) */
color-beige-50      /* #fdfbf9 - Fondo cálido */
color-beige-200     /* #f0ebe5 - Fondo secundario beige */

/* Bordes */
color-grey-300      /* #e8e8e8 - Bordes normales */
color-grey-200      /* #f0f0ee - Bordes sutiles */

/* Dorado - ACENTOS */
color-gold-500      /* #d4a574 - ⭐ PRINCIPAL */
color-gold-400      /* #e8c8a0 - Light (hover) */
color-gold-700      /* #b8935a - Dark (active) */

/* Estados */
success: #4a9d6f
warning: #d97706
error: #dc2626
```

---

## 🎯 Ejemplos de Uso

### Botón Principal (CTA)
```css
class="bg-gold-500 text-white hover:bg-gold-600"
```
```html
<button class="bg-gold-500 text-white hover:bg-gold-600 font-semibold px-6 py-3 rounded">
  Agendar Cita
</button>
```

### Card/Elemento
```css
class="bg-beige-50 border border-grey-300"
```

### Texto
```css
/* Encabezado */
class="text-grey-900 font-bold"

/* Cuerpo */
class="text-grey-700"

/* Secundario */
class="text-grey-600"
```

### Hover States
```css
hover:bg-gold-100    /* #fdf3e8 */
hover:text-gold-700  /* #b8935a */
```

---

## 📊 Paleta Completa

### Grises (Neutrales)
| Clase | Hex | Uso |
|-------|-----|-----|
| grey-50 | #fafaf8 | Fondo principal |
| grey-100 | #f5f5f3 | Fondo alternativo |
| grey-200 | #f0f0ee | Fondo terciario |
| grey-300 | #e8e8e8 | Bordes |
| grey-600 | #7a7a7a | Texto secundario |
| grey-700 | #5a5a5a | Texto regular |
| grey-900 | #2c2c2c | Texto primario |

### Beiges (Cálidos)
| Clase | Hex | Uso |
|-------|-----|-----|
| beige-50 | #fdfbf9 | Fondo cálido claro |
| beige-200 | #f0ebe5 | Fondo cálido |
| beige-400 | #d4c4b0 | Acento sutil |

### Dorados (Premium)
| Clase | Hex | Uso |
|-------|-----|-----|
| gold-100 | #fdf3e8 | Hover backgrounds |
| gold-400 | #e8c8a0 | Light accents |
| gold-500 | #d4a574 | ⭐ **PRIMARY** |
| gold-700 | #b8935a | Dark accents |
| gold-900 | #6b5237 | Very dark |

---

## 🔨 Tailwind Utility Classes

```html
<!-- Backgrounds -->
<div class="bg-grey-50">...</div>
<div class="bg-gold-500">...</div>

<!-- Text Colors -->
<p class="text-grey-900">Heading</p>
<p class="text-grey-700">Body text</p>

<!-- Borders -->
<div class="border border-grey-300">...</div>

<!-- Hover States -->
<button class="hover:bg-gold-100 hover:text-gold-700">...</button>

<!-- Multiple utilities -->
<button class="
  bg-gold-500 
  text-white 
  hover:bg-gold-600 
  border border-gold-700
  rounded-lg
  px-4 py-2
">
  Acción
</button>
```

---

## 🌙 Dark Mode

El sistema ya incluye soporte para dark mode. Los colores se adaptan automáticamente:

```css
/* Automático en dark mode */
@media (prefers-color-scheme: dark) {
  /* Los colores dorados se vuelven más brillantes */
  /* Los grises se invierten */
}
```

---

## 📁 Archivos de Referencia

- **`DESIGN_COLORS.md`** - Guía completa de colores y filosofía
- **`src/styles/globals.css`** - Variables Tailwind definidas
- **`src/styles/colors.css`** - Variables CSS adicionales
- **`src/index.css`** - Sistema de tokens CSS

---

## 💡 Tips de Diseño

✅ **DO:**
- Usar dorado para CTAs y elementos importantes
- Mantener fondos en gris claro o beige para elegancia
- Usar grises oscuros para texto legible
- Aplicar bordes sutiles en gris-300

❌ **DON'T:**
- Usar múltiples acentos (solo dorado)
- Mezclar grises puros con la paleta (usar variables)
- Abusar del dorado (es acento, no fondo)

---

## 🎬 Implementación Actual

✅ Variables CSS configuradas en `src/index.css`
✅ Tailwind theme actualizado en `src/styles/globals.css`
✅ Scrollbar personalizado (dorado + beige)
✅ Selection personalizado
✅ Focus states consistentes

---

**Última actualización**: 31/03/2026
**Responsable**: Branding Digital
