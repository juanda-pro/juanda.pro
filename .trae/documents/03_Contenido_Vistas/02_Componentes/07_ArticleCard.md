# ArticleCard.vue - Documentación del Componente

## 1. Información General

**Propósito**: Componente de tarjeta para mostrar artículos del blog de forma atractiva y navegable, con imagen, título, descripción y fecha de publicación.

**Ubicación**: `src/components/ArticleCard.vue`

**Tipo**: Componente de presentación/contenido

## 2. Objetivos

- **Presentación Atractiva**: Mostrar artículos de forma visualmente appealing
- **Navegación Intuitiva**: Facilitar acceso a artículos individuales
- **Responsive Design**: Adaptarse a diferentes tamaños de pantalla
- **Accesibilidad**: Cumplir con estándares de navegación accesible
- **Performance**: Carga eficiente de imágenes y contenido

## 3. API del Componente

### Props

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `article` | `Object` | ✅ | - | Objeto con datos del artículo |

### Estructura del Objeto Article

```typescript
interface Article {
  slug: string;           // Identificador único para la URL
  title: string;          // Título del artículo
  description: string;    // Descripción/resumen del artículo
  image_url: string;      // URL de la imagen destacada
  published_at: string;   // Fecha de publicación (ISO string)
}
```

### Slots

Ninguno.

### Eventos

Ninguno (navegación manejada por Vue Router).

## 4. Estructura Interna

### Template
- **RouterLink**: Enlace navegable a la página del artículo
- **Article**: Contenedor semántico del artículo
- **Imagen**: Imagen destacada con efectos hover
- **Contenido**: Título, descripción y fecha

### Lógica y Estado

```javascript
// Computed para formatear fecha
const formattedDate = computed(() => {
  if (!props.article.published_at) return '';
  const date = new Date(props.article.published_at);
  return date.toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
});
```

## 5. Estilos y Variantes

### Layout Principal
- `grid grid-cols-1 md:grid-cols-3`: Grid responsive
- `gap-6 md:gap-8`: Espaciado adaptativo
- `items-center`: Alineación vertical centrada

### Imagen
- `md:col-span-1`: Una columna en desktop
- `aspect-video`: Ratio 16:9 consistente
- `overflow-hidden rounded-lg`: Bordes redondeados
- `group-hover:scale-105`: Efecto zoom en hover
- `transition-transform duration-300`: Animación suave

### Contenido de Texto
- `md:col-span-2`: Dos columnas en desktop
- **Título**: `text-xl lg:text-2xl font-bold`
- **Descripción**: `text-lg text-secondary-light`
- **Fecha**: `text-base text-secondary-light`

### Estados Interactivos
- **Hover**: Zoom de imagen y cambio de color del título a `accent-primary-light/dark`
- **Focus**: Ring de enfoque con `accent-primary-light/dark`
- **Group effects**: Efectos coordinados en hover

### Paleta de Colores Actual
- **Texto principal**: `text-[#262626] dark:text-[#F4F4F4]`
- **Texto secundario**: `text-[#262626]/70 dark:text-[#F4F4F4]/70`
- **Hover del título**: `group-hover:text-[#206372] dark:group-hover:text-[#F5DF4D]`
- **Focus ring**: `focus-visible:ring-[#206372] dark:focus-visible:ring-[#F5DF4D]`

## 6. Responsive Design

### Mobile (< md)
- Layout vertical (1 columna)
- Imagen arriba, contenido abajo
- Espaciado reducido (`gap-6`)

### Desktop (>= md)
- Layout horizontal (3 columnas)
- Imagen izquierda (1 col), contenido derecha (2 cols)
- Espaciado amplio (`gap-8`)
- Tipografía más grande

## 7. Casos de Uso

### En Lista de Blog
```vue
<template>
  <div class="space-y-8">
    <ArticleCard 
      v-for="article in articles" 
      :key="article.slug"
      :article="article"
    />
  </div>
</template>
```

### Con Datos de Ejemplo
```javascript
const article = {
  slug: 'mi-primer-articulo',
  title: 'Cómo empezar con Vue 3',
  description: 'Una guía completa para comenzar...',
  image_url: '/images/vue3-guide.jpg',
  published_at: '2025-08-06T10:00:00Z'
};
```

## 8. Dependencias

- **Vue 3**: Composition API, computed
- **Vue Router**: RouterLink para navegación
- **Tailwind CSS**: Sistema de utilidades

## 9. Accesibilidad

### Navegación
- ✅ `focus-visible:ring-2` para indicadores de foco
- ✅ RouterLink semánticamente correcto
- ✅ Navegación por teclado funcional

### Contenido
- ✅ `<article>` para semántica correcta
- ✅ Alt text descriptivo para imágenes
- ✅ Jerarquía de headings apropiada (`<h3>`)

### Screen Readers
- ✅ Contenido estructurado lógicamente
- ✅ Enlaces descriptivos
- ✅ Información de fecha legible

## 10. Performance

### Optimizaciones
- **Computed properties**: Cálculo eficiente de fecha
- **CSS transitions**: Hardware-accelerated
- **Lazy loading**: Potencial para imágenes

### Consideraciones
- ⚠️ **Imágenes**: Sin lazy loading implementado
- ⚠️ **Bundle size**: Minimal overhead
- ✅ **Re-renders**: Optimizado con computed

## 11. Issues Identificados

### Funcionalidad
- ⚠️ **Validación**: Sin validación de props
- ⚠️ **Fallbacks**: Sin imagen de respaldo
- ⚠️ **Error handling**: Sin manejo de errores de imagen

### Performance
- ❌ **Lazy loading**: Imágenes cargan inmediatamente
- ❌ **Image optimization**: Sin optimización de tamaños
- ⚠️ **Prefetch**: Sin prefetch de artículos

### UX
- ⚠️ **Loading states**: Sin skeleton o placeholder
- ⚠️ **Truncation**: Descripción puede ser muy larga
- ⚠️ **Read time**: Sin estimación de tiempo de lectura

## 12. Mejoras Sugeridas

### Corto Plazo
1. **Validación de props**: PropTypes o TypeScript
2. **Imagen de fallback**: Placeholder por defecto
3. **Truncación**: Límite de caracteres en descripción
4. **Loading skeleton**: Placeholder durante carga

### Mediano Plazo
1. **Lazy loading**: Implementar para imágenes
2. **Image optimization**: Múltiples tamaños/formatos
3. **Read time**: Estimación de tiempo de lectura
4. **Tags/Categories**: Mostrar categorías del artículo

### Largo Plazo
1. **Prefetch**: Precargar artículos en hover
2. **Analytics**: Tracking de clicks
3. **Personalization**: Recomendaciones personalizadas
4. **Social sharing**: Botones de compartir

## 13. Casos y Escenarios de Testing

### Unitarios
- ✅ Renderizado con datos válidos
- ✅ Formateo de fecha correcto
- ✅ Navegación a artículo
- ✅ Props requeridas

### Integración
- ✅ Integración con Vue Router
- ✅ Responsive en diferentes dispositivos
- ✅ Estados hover y focus
- ✅ Temas claro/oscuro

### E2E
- ✅ Click navega correctamente
- ✅ Imagen se carga
- ✅ Contenido se muestra
- ✅ Accesibilidad por teclado

### Edge Cases
- ❌ **Imagen rota**: Sin manejo
- ❌ **Fecha inválida**: Sin validación
- ❌ **Contenido largo**: Sin truncación
- ❌ **Datos faltantes**: Sin fallbacks

## 14. Configuración y Personalización

### Formato de Fecha
```javascript
// Personalizable por locale
const formattedDate = computed(() => {
  const options = { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  };
  return date.toLocaleDateString('es-ES', options);
});
```

### Estilos Personalizables
- Colores a través del sistema de tokens
- Espaciado configurable
- Efectos hover ajustables
- Tipografía escalable

## 15. Variantes Futuras

### ArticleCard Variants
```vue
<!-- Compact variant -->
<ArticleCard :article="article" variant="compact" />

<!-- Featured variant -->
<ArticleCard :article="article" variant="featured" />

<!-- Grid variant -->
<ArticleCard :article="article" variant="grid" />
```

### Props Adicionales
```typescript
interface Props {
  article: Article;
  variant?: 'default' | 'compact' | 'featured' | 'grid';
  showDate?: boolean;
  showDescription?: boolean;
  lazyLoad?: boolean;
}
```

## 16. Roadmap de Mejoras

### Q3 2025
- [ ] Implementar lazy loading
- [ ] Añadir validación de props
- [ ] Crear imagen de fallback
- [ ] Implementar truncación

### Q4 2025
- [ ] Variantes de diseño
- [ ] Optimización de imágenes
- [ ] Tiempo de lectura
- [ ] Tags y categorías

### Q1 2026
- [ ] Analytics integrado
- [ ] Prefetch inteligente
- [ ] Personalización
- [ ] Social sharing

## 17. Consideraciones de Diseño

### Filosofía
- **Content-first**: El contenido es lo más importante
- **Scannable**: Fácil de escanear visualmente
- **Clickable**: Claramente navegable
- **Consistent**: Diseño consistente en toda la lista

### Decisiones Clave
- **Grid layout**: Mejor para responsive
- **Hover effects**: Feedback visual claro
- **Image aspect ratio**: Consistencia visual
- **Typography hierarchy**: Jerarquía clara

## 18. Mantenimiento

### Actualizaciones Regulares
- Testing de navegación
- Optimización de imágenes
- Revisión de accesibilidad
- Performance monitoring

### Monitoreo
- Click-through rates
- Image load times
- Error rates
- User engagement

### Métricas Clave
- Tiempo en hover
- Tasa de clicks
- Errores de carga
- Performance de imágenes