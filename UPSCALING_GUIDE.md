# Guía de Upscaling - Animación 3D

Tu animación se ve pixelada porque los fotogramas generados tienen baja resolución. Aquí hay opciones para mejorar:

## Opción 1: CSS Smoothing (✅ YA IMPLEMENTADO)

**Ventaja**: Inmediato, sin instalar nada
**Mejora**: ★★☆ (suavización ligera)

```javascript
// Ya incluido en ScrollAnimation3D.jsx
style={{
  imageRendering: 'smooth',
  filter: 'contrast(1.08) brightness(1.02)',  // Mejora calidad sin distorsión
}}
```

**Estado**: Activo ahora. Prueba en `npm run dev`

---

## Opción 2: Upscaling con Upscayl (RECOMENDADO)

**Mejor para**: Máxima calidad visual

1. Descarga **Upscayl** (gratuito): https://www.upscayl.org/
2. Abre la aplicación
3. **Input**: `public/images/3d-frames/`
4. **Output**: crea carpeta `3d-frames-upscaled/`
5. **Modelo**: Elige **RealESRGAN_x4** (4x upscaling)
6. Click en **Upscale** (toma ~45-90 min para 240 frames)

**Ventaja**: Mejora visual dramática (★★★★★)
**Desventaja**: Archivos más pesados (+300%), tarda tiempo

### Después de upscalear:
```javascript
// Reemplaza la línea 5 en ScrollAnimation3D.jsx:
const FRAMES_FOLDER = '3d-frames-upscaled'  // en lugar de '3d-frames'
```

---

## Opción 3: Regenerar el Video Original

**Mejor solución a largo plazo**:

Si tienes el modelo 3D original:
- Exporta a **2K (2560x1440)** o **4K (3840x2160)**
- Genera video nuevamente
- Extrae fotogramas en mayor resolución

---

## Comparativa Rápida

| Opción | Mejora | Tiempo | Instalación |
|--------|--------|--------|-------------|
| CSS Smoothing | ★★☆ | Ya hecho | Nada |
| **Upscayl** | ★★★★★ | 90 min | GUI download |
| Regenerar video | ★★★★★ | ~2h | Depende del 3D |

---

## Próximo Paso

**Ahora**: Prueba la página en `npm run dev` para ver el CSS smoothing

**Si necesita más**: Usa Upscayl siguiendo los pasos arriba

¿Necesitas ayuda con Upscayl?
