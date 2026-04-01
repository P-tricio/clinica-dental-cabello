# Sistema de Colores - Clínica Dental Cabello

## 🎨 Restyling Basado en Materiales EGGER

Paleta de colores premium inspirada en los materiales seleccionados para la clínica:
- **Muestras neutrales** (Beiges, Grises)
- **Acentos dorados** (Sofisticación premium)
- **Tonos cálidos** para conexión humana

---

## 📊 Paleta Primaria

### Neutros - Beige/Crema
```
--color-beige-50:   #fdfbf9  (Casi blanco cálido)
--color-beige-100:  #f9f7f4  
--color-beige-200:  #f0ebe5  (Beige claro)
--color-beige-300:  #e8dfd3
--color-beige-400:  #d4c4b0  (Beige oscuro - referencia EGGER)
--color-beige-500:  #c0a87a
```

**Uso**: Fondos secundarios, acentos sutiles, elementos de transición

### Grises - BALANCE LIGHT GREY
```
--color-grey-50:    #fafaf8  (Fondo primario)
--color-grey-100:   #f5f5f3
--color-grey-200:   #f0f0ee
--color-grey-300:   #e8e8e8  (Bordes, divisores)
--color-grey-400:   #d0d0d0
--color-grey-500:   #b0b0b0
--color-grey-600:   #7a7a7a  (Texto secundario)
--color-grey-700:   #5a5a5a  (Texto regular)
--color-grey-800:   #3a3a3a
--color-grey-900:   #2c2c2c  (Encabezados, texto primario)
```

**Uso**: Texto, fondos, bordes, estructura

---

## ✨ Acentos Premium

### Dorado - Signature Color
```
--color-gold-50:    #fef9f4  (Fondo muy claro)
--color-gold-100:   #fdf3e8
--color-gold-200:   #f8e8d0
--color-gold-300:   #f0dcc0  (Hover states)
--color-gold-400:   #e8c8a0  (Light accent)
--color-gold-500:   #d4a574  ⭐ PRIMARY ACCENT
--color-gold-600:   #c9975f
--color-gold-700:   #b8935a  (Dark accent)
--color-gold-800:   #9d7a47
--color-gold-900:   #6b5237  (Muy oscuro)
```

**Uso**: Botones CTA, highlights, llamadas a acción, detalles premium

---

## 🎯 Colores Funcionales

### Estados
| Estado | Color | Hex | Uso |
|--------|-------|-----|-----|
| Success | Verde | #4a9d6f | Confirmaciones, completado |
| Warning | Ámbar | #d97706 | Advertencias |
| Error | Rojo | #dc2626 | Errores |
| Info | Cyan | #0891b2 | Información |

---

## 📐 Sistema de Tokens

### Texto
```
--color-text-primary:   #2c2c2c  (Encabezados, primario)
--color-text-secondary: #5a5a5a  (Cuerpo, regular)
--color-text-tertiary:  #7a7a7a  (Auxilar, dimmed)
```

### Fondos
```
--color-bg-primary:     #fafaf8  (Gris claro principal)
--color-bg-secondary:   #fdfbf9  (Beige claro)
--color-bg-tertiary:    #f5f5f3  (Gris alternativo)
```

### Bordes
```
--color-border-primary:   #e8e8e8  (Bordes normales)
--color-border-secondary: #f0f0ee  (Bordes sutiles)
```

### Acentos
```
--color-accent-primary:   #d4a574  (Dorado principal)
--color-accent-dark:      #b8935a  (Dorado oscuro)
--color-accent-light:     #e8c8a0  (Dorado claro)
```

---

## 🌙 Modo Oscuro

El sistema se adapta automáticamente en modo oscuro:
- **Textos**: Se invierten para mantener contraste
- **Dorados**: Más brillantes y saturados para presencia visual
- **Fondos**: Tonos oscuros naturales
- **Bordes**: Grises oscuros sutiles

---

## 💡 Directrices de Uso

### Combinaciones Recomendadas

**Botón Principal (CTA)**
```css
background: var(--color-accent-primary);      /* #d4a574 */
color: white;
```

**Card/Elemento Secundario**
```css
background: var(--color-bg-secondary);        /* #fdfbf9 */
border: 1px solid var(--color-border-primary); /* #e8e8e8 */
```

**Texto de Cuerpo**
```css
color: var(--color-text-secondary);           /* #5a5a5a */
```

**Highlight/Hover**
```css
background: var(--color-gold-100);            /* #fdf3e8 */
```

### Evitar
- ❌ Usar gris puro (#000000, #ffffff) - usar en su lugar los tonos de paleta
- ❌ Abusar de dorado - usar solo como acento primario
- ❌ Combinar múltiples colores de alerta - mantener claridad

---

## 📝 Variables CSS Globales

Las variables están disponibles en `src/index.css` y `src/styles/colors.css`:

```css
/* Uso global */
color: var(--text);
background: var(--bg);
border-color: var(--border);

/* Uso con precisión */
color: var(--color-text-primary);
background: var(--color-gold-500);
```

---

## 🔄 Referencia a Materiales EGGER

| Código EGGER | Descripción | Color Relacionado |
|--------------|-------------|------------------|
| H3757 ST19 | Madera cálida | Tonos beige oscuro |
| U7021 ST6 | Acabado premium | Gris claro |
| F662 ST76 | Piedra gris claro | Grey-300 |
| F681 ST70 | Acabado neutro | Beige-200 |
| BALANCE LIGHT GREY | Material de superficie | Grey-50/100 |

---

## 📦 Implementación

1. **Global**: Las variables se cargan en `src/index.css`
2. **Componentes**: Importar `src/styles/colors.css` para mayor detalle
3. **Uso**: Referenciar con `var(--color-*)` en cualquier propiedad CSS

---

**Última actualización**: 2026-03-31
**Diseñador**: Branding EGGER - Clínica Dental Cabello
