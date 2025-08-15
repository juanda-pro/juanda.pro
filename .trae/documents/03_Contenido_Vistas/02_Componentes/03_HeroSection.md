# HeroSection.vue - Documentación del Componente

## 1. Información General

**Propósito**: Componente de sección hero reutilizable que proporciona una presentación visual impactante con imagen de fondo, título prominente y contenido opcional.

**Ubicación**: `src/components/HeroSection.vue`

**Tipo**: Componente de presentación/UI

## 2. Objetivos

- **Impacto Visual**: Crear una primera impresión memorable con imágenes de fondo y tipografía prominente
- **Flexibilidad**: Permitir personalización del contenido mediante props y slots
- **Accesibilidad**: Mantener contraste adecuado y semántica correcta
- **Responsive**: Adaptarse a diferentes tamaños de pantalla
- **Animaciones**: Proporcionar transiciones suaves para mejorar la experiencia

## 3. API del Componente

### Props

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `title` | `string` | ✅ | - | Título principal del hero |
| `backgroundImage` | `string` | ✅ | - | URL de la imagen de fondo |
| `animatedText` | `string` | ❌ | - | Texto específico dentro del título para animar |
| `animatedTextClass` | `string` | ❌ | `'text-white animate-color-cycle'` | Clases CSS para el texto animado |

### Slots

| Slot | Descripción |
|------|-------------|
| `subtitle` | Contenido del subtítulo (opcional) |

### Eventos

Ninguno.

## 4. Estructura Interna

### Template
- **SectionWrapper**: Contenedor principal con espaciado
- **Imagen de fondo**: Con overlay para contraste
- **Contenido centrado**: Título y subtítulo en contenedor con backdrop-blur
- **Indicador de scroll**: Flecha animada en la parte inferior

### Lógica y Estado

```typescript
// Computed para procesar título con texto animado
const processedTitle = computed(() => {
  if (!props.animatedText) return null;
  
  const parts = props.title.split(props.animatedText);
  return {
    before: parts[0] || '',
    animated: props.animatedText,
    after: parts[1] || ''
  };
});
```

## 5. Estilos y Variantes

### Clases Base
- `min-h-[80vh]`: Altura mínima del 80% del viewport
- `relative`: Posicionamiento para overlays
- `text-white`: Texto blanco por defecto
- `overflow-hidden`: Previene desbordamiento

### Imagen de Fondo
- `object-cover object-center`: Ajuste de imagen responsivo
- `loading="eager"`: Carga prioritaria para hero

### Overlay
- **Claro**: `bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-black/10`
- **Oscuro**: `dark:from-black/80 dark:via-black/50`

### Contenedor de Contenido
- `bg-black/30 dark:bg-gray-900/40`: Fondo semitransparente
- `backdrop-blur-md`: Efecto de desenfoque
- `rounded-2xl`: Bordes redondeados
- `ring-1 ring-white/10`: Borde sutil

### Tipografía
- **Título**: `text-4xl md:text-6xl font-bold`
- **Subtítulo**: `text-lg md:text-xl leading-relaxed`
- **Sombra de texto**: Clase personalizada `text-shadow-md`

## 6. Animaciones

### Entrada del Título
```css
enter-from-class="opacity-0 scale-95"
enter-active-class="transition-all duration-700 ease-out"
```

### Entrada del Subtítulo
```css
enter-from-class="opacity-0 translate-y-4"
enter-active-class="transition-all duration-700 ease-out delay-300"
```

### Indicador de Scroll
- `animate-bounce`: Animación de rebote continua

### Animación de Texto (color-cycle)
```css
@keyframes color-cycle {
  0% { color: white; }
  50% { color: #F5DF4D; }
  100% { color: white; }
}

.animate-color-cycle {
  animation: color-cycle 2.5s ease-in-out infinite;
}
```
- Ciclo de colores entre blanco y amarillo de acento
- Duración de 2.5 segundos con repetición infinita

## 7. Casos de Uso

### Uso Básico
```vue
<HeroSection
  title="Bienvenido a mi sitio"
  background-image="/images/hero-bg.jpg"
>
  <template #subtitle>
    <p>Descubre contenido increíble</p>
  </template>
</HeroSection>
```

### Con Texto Animado
```vue
<HeroSection
  title="Soy Juan Desarrollador"
  background-image="/images/hero-bg.jpg"
  animated-text="Desarrollador"
  animated-text-class="text-white animate-color-cycle"
>
  <template #subtitle>
    <p>Creando experiencias digitales</p>
  </template>
</HeroSection>
```

### Con Animación Personalizada
```vue
<HeroSection
  title="Soy Juan Desarrollador"
  background-image="/images/hero-bg.jpg"
  animated-text="Desarrollador"
  animated-text-class="text-blue-400 animate-pulse"
>
  <template #subtitle>
    <p>Creando experiencias digitales</p>
  </template>
</HeroSection>
```

## 8. Dependencias

- **Vue 3**: Composition API, slots, computed
- **SectionWrapper**: Componente de layout
- **Tailwind CSS**: Sistema de utilidades

## 9. Patrones de Uso en Vistas

- **HomeView**: Hero principal del sitio
- **SoyView**: Presentación personal
- **ContactoViewV2**: Introducción a la página de contacto
- **Páginas legales**: Headers para políticas

## 10. Optimizaciones de Rendimiento

### Imágenes
- `loading="eager"` para carga prioritaria
- Uso de `object-cover` para optimización visual

### CSS
- Uso de utilidades de Tailwind
- Transiciones hardware-accelerated
- Backdrop-filter para efectos modernos

### JavaScript
- Computed properties para lógica reactiva
- Minimal JavaScript overhead

## 11. Responsive Design

### Breakpoints
- **Mobile**: `text-4xl`, `p-6`
- **Desktop**: `md:text-6xl`, `md:p-10`

### Adaptaciones
- Padding responsive
- Tamaños de fuente escalables
- Espaciado adaptativo

## 12. Issues Identificados

### Accesibilidad
- ❌ **Contraste**: Dependiente de la imagen de fondo
- ❌ **Alt text**: Genérico para imagen de fondo
- ❌ **Focus management**: Sin indicadores de foco

### Técnico
- ⚠️ **Performance**: Imágenes grandes sin optimización
- ⚠️ **Fallbacks**: Sin imagen de respaldo
- ⚠️ **Loading states**: Sin indicador de carga

### UX
- ⚠️ **Scroll indicator**: Solo visual, sin funcionalidad
- ⚠️ **Mobile**: Altura fija puede ser problemática

## 13. Mejoras Sugeridas

### Corto Plazo
1. **Lazy loading**: Implementar carga diferida para imágenes
2. **Alt text**: Prop dedicada para texto alternativo
3. **Fallback**: Imagen de respaldo por defecto
4. **Loading state**: Skeleton o placeholder

### Mediano Plazo
1. **Optimización de imágenes**: Integración con servicios de CDN
2. **Scroll functionality**: Hacer funcional el indicador
3. **Accessibility**: Mejorar contraste y navegación por teclado
4. **Variants**: Diferentes estilos de hero

### Largo Plazo
1. **Video backgrounds**: Soporte para videos
2. **Parallax**: Efectos de paralaje
3. **Interactive elements**: Botones y CTAs integrados
4. **Analytics**: Tracking de interacciones

## 14. Casos y Escenarios de Testing

### Unitarios
- ✅ Renderizado con props mínimas
- ✅ Procesamiento de texto animado
- ✅ Renderizado de slots
- ✅ Clases CSS aplicadas correctamente

### Integración
- ✅ Funcionamiento con SectionWrapper
- ✅ Responsive en diferentes dispositivos
- ✅ Animaciones de entrada
- ✅ Tema claro/oscuro

### E2E
- ✅ Carga de imagen de fondo
- ✅ Visibilidad del contenido
- ✅ Animaciones suaves
- ✅ Indicador de scroll visible

## 15. Consideraciones de Accesibilidad

### Semántica
- ✅ Uso correcto de `<h1>` para título principal
- ✅ Estructura jerárquica clara
- ⚠️ Contraste dependiente de imagen

### Navegación
- ❌ Sin skip links
- ❌ Sin indicadores de foco
- ❌ Scroll indicator no funcional

### Contenido
- ✅ Texto alternativo para imagen
- ⚠️ Dependencia de color para información

## 16. Roadmap de Mejoras

### Q3 2025
- [ ] Implementar lazy loading
- [ ] Mejorar accesibilidad básica
- [ ] Añadir fallbacks de imagen

### Q4 2025
- [ ] Optimización de performance
- [ ] Variantes de diseño
- [ ] Funcionalidad de scroll

### Q1 2026
- [ ] Soporte para video
- [ ] Efectos avanzados
- [ ] Analytics integrado

## 17. Consideraciones de Diseño

### Filosofía
- **Impact-first**: Priorizar impacto visual
- **Content-aware**: Adaptarse al contenido
- **Performance-conscious**: Mantener rendimiento

### Decisiones Clave
- **Altura fija**: 80vh para consistencia
- **Overlay gradiente**: Mejor legibilidad
- **Backdrop blur**: Efecto moderno
- **Animaciones suaves**: Mejor UX

## 18. Mantenimiento

### Actualizaciones Regulares
- Optimización de imágenes
- Revisión de accesibilidad
- Testing en nuevos dispositivos
- Actualización de animaciones

### Monitoreo
- Performance de carga
- Métricas de engagement
- Errores de renderizado
- Feedback de usuarios