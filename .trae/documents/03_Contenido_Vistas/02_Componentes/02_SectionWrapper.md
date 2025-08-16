# SectionWrapper - Contenedor de Secciones

## Información General
- **Archivo**: `SectionWrapper.vue`
- **Tipo**: Componente de layout base
- **Propósito**: Proporcionar contenedor consistente con espaciado y ancho máximo para secciones
- **Categoría**: Componente Base

## Objetivos
- Establecer ancho máximo consistente para el contenido
- Manejar espaciado vertical configurable entre secciones
- Proporcionar padding horizontal responsive
- Mantener legibilidad óptima en diferentes dispositivos
- Simplificar la implementación de secciones de contenido

## API del Componente

### Props

| Prop | Tipo | Default | Opciones | Descripción |
|------|------|---------|----------|-------------|
| `spacing` | `String` | `'normal'` | `'none'`, `'tight'`, `'normal'`, `'loose'` | Controla el espaciado vertical de la sección |

### Events
- **Ninguno**: Este componente no emite eventos

### Slots

| Slot | Descripción |
|------|-------------|
| `default` | Contenido de la sección |

## Estructura Interna

### Template
```vue
<div :class="spacingClass">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <slot></slot>
  </div>
</div>
```

### Lógica de Espaciado
```javascript
const spacingClass = computed(() => {
  switch (props.spacing) {
    case 'none':   return 'py-0';           // Sin espaciado
    case 'tight':  return 'py-4 sm:py-6';  // Espaciado reducido
    case 'normal': return 'py-8 sm:py-12'; // Espaciado estándar
    case 'loose':  return 'py-12 sm:py-16'; // Espaciado amplio
  }
});
```

## Lógica y Estado

### Computed Properties
- **spacingClass**: Calcula la clase de espaciado basada en la prop `spacing`

### Reactividad
- **spacing**: Cambia dinámicamente el espaciado vertical
- **Responsive**: Padding se adapta automáticamente al tamaño de pantalla

### Comportamiento
1. **Contenedor exterior**: Maneja espaciado vertical
2. **Contenedor interior**: Controla ancho máximo y padding horizontal
3. **Responsive**: Ajusta espaciado y padding según viewport

## Estilos y Variantes

### Estructura de Layout
- **Ancho máximo**: `max-w-5xl` (1024px)
- **Centrado**: `mx-auto`
- **Padding horizontal**: `px-4 sm:px-6 lg:px-8` (responsive)

### Variantes de Espaciado

#### None - Sin Espaciado
```vue
<SectionWrapper spacing="none">
  <!-- py-0 - Sin padding vertical -->
</SectionWrapper>
```
- **Móvil**: 0px vertical
- **Desktop**: 0px vertical
- **Uso**: Secciones que necesitan estar pegadas

#### Tight - Espaciado Reducido
```vue
<SectionWrapper spacing="tight">
  <!-- py-4 sm:py-6 -->
</SectionWrapper>
```
- **Móvil**: 16px vertical (py-4)
- **Desktop**: 24px vertical (py-6)
- **Uso**: Elementos relacionados, subsecciones

#### Normal - Espaciado Estándar (Default)
```vue
<SectionWrapper spacing="normal">
  <!-- py-8 sm:py-12 -->
</SectionWrapper>
```
- **Móvil**: 32px vertical (py-8)
- **Desktop**: 48px vertical (py-12)
- **Uso**: Secciones principales, contenido general

#### Loose - Espaciado Amplio
```vue
<SectionWrapper spacing="loose">
  <!-- py-12 sm:py-16 -->
</SectionWrapper>
```
- **Móvil**: 48px vertical (py-12)
- **Desktop**: 64px vertical (py-16)
- **Uso**: Separación entre bloques importantes

### Padding Horizontal Responsive
- **Móvil**: `px-4` (16px)
- **Tablet**: `px-6` (24px)
- **Desktop**: `px-8` (32px)

## Casos de Uso

### 1. Sección de Contenido Estándar
```vue
<SectionWrapper>
  <h2>Título de Sección</h2>
  <p>Contenido de la sección...</p>
</SectionWrapper>
```

### 2. Secciones Relacionadas
```vue
<SectionWrapper spacing="loose">
  <h2>Sección Principal</h2>
</SectionWrapper>
<SectionWrapper spacing="tight">
  <h3>Subsección</h3>
</SectionWrapper>
```

### 3. Hero Seguido de Contenido
```vue
<HeroSection />
<SectionWrapper spacing="normal">
  <!-- Contenido después del hero -->
</SectionWrapper>
```

### 4. Secciones Sin Espaciado
```vue
<SectionWrapper spacing="none">
  <!-- Contenido que debe estar pegado -->
</SectionWrapper>
<SectionWrapper spacing="none">
  <!-- Otra sección pegada -->
</SectionWrapper>
```

## Dependencias

### Internas
- **Ninguna**: No depende de otros componentes

### Externas
- **Vue 3**: Composition API (`computed`)
- **Tailwind CSS**: Para todas las clases de estilo

### Relaciones
- **Usado por**: Prácticamente todas las vistas del sitio
- **Contenido típico**: Texto, cards, formularios, etc.
- **Complementa**: `PageLayout` para estructura completa

## Patrones de Uso

### En Vistas
Utilizado extensivamente en todas las vistas:
- `HomeView.vue`: Múltiples secciones con diferentes espaciados
- `BlogView.vue`: Secciones de filtros y contenido
- `ArticleDetailView.vue`: Contenido del artículo
- `SoyView.vue`: Secciones de información personal
- `ContactoViewV2.vue`: Formulario y información

### Patrón Común
```vue
<PageLayout>
  <SectionWrapper spacing="loose">
    <!-- Introducción -->
  </SectionWrapper>
  <SectionWrapper spacing="normal">
    <!-- Contenido principal -->
  </SectionWrapper>
  <SectionWrapper spacing="tight">
    <!-- Información adicional -->
  </SectionWrapper>
</PageLayout>
```

## Optimizaciones de Rendimiento

### CSS
- **Clases utilitarias**: Tailwind optimiza automáticamente
- **Computed property**: Solo recalcula cuando spacing cambia
- **Sin JavaScript pesado**: Lógica mínima

### Renderizado
- **Estructura simple**: Mínimo overhead de DOM
- **CSS Grid/Flexbox**: No interfiere con layouts hijos
- **Sin watchers**: No hay lógica reactiva compleja

## Responsive Design

### Breakpoints
- **Base**: Móvil (< 640px)
- **sm**: Tablet (≥ 640px)
- **lg**: Desktop (≥ 1024px)

### Comportamiento Responsive
```css
/* Espaciado normal */
py-8    /* 32px en móvil */
sm:py-12 /* 48px en tablet+ */

/* Padding horizontal */
px-4     /* 16px en móvil */
sm:px-6  /* 24px en tablet */
lg:px-8  /* 32px en desktop */
```

## Issues Identificados

### Menores
1. **Ancho fijo**: `max-w-5xl` podría ser configurable
2. **Breakpoints limitados**: Solo usa sm y lg
3. **Sin variantes de ancho**: Solo un ancho máximo

### Potenciales Mejoras
1. **Prop de ancho**: Control del ancho máximo
2. **Más breakpoints**: md, xl para control granular
3. **Padding configurable**: Control del padding horizontal
4. **Variantes semánticas**: `hero`, `content`, `footer`

## Mejoras Sugeridas

### Corto Plazo
1. **Documentación inline**: Comentarios en el código
2. **TypeScript**: Mejorar tipado de props
3. **Validación**: Validar valores de spacing

### Mediano Plazo
1. **Props adicionales**:
   - `maxWidth`: Control del ancho máximo
   - `noPadding`: Eliminar padding horizontal
   - `fullWidth`: Usar todo el ancho disponible
2. **Más opciones de spacing**: `xs`, `xl`, `2xl`
3. **Breakpoints adicionales**: Control más granular

### Largo Plazo
1. **Sistema de espaciado**: Integración con design tokens
2. **Variantes semánticas**: Presets para diferentes tipos de contenido
3. **Animaciones**: Transiciones suaves entre espaciados

## Testing

### Casos de Prueba

#### Funcionalidad
1. **Renderizado básico**: Se renderiza correctamente
2. **Prop spacing**: Aplica clases correctas para cada valor
3. **Slot default**: Renderiza contenido hijo
4. **Responsive**: Clases responsive funcionan

#### Visual
1. **Espaciado**: Correcto para cada variante
2. **Ancho máximo**: Respeta max-w-5xl
3. **Padding**: Horizontal responsive funciona
4. **Centrado**: Contenido se centra correctamente

### Escenarios de Testing
```vue
<!-- Test de espaciados -->
<SectionWrapper spacing="none">Contenido sin espaciado</SectionWrapper>
<SectionWrapper spacing="tight">Contenido con espaciado reducido</SectionWrapper>
<SectionWrapper spacing="normal">Contenido con espaciado normal</SectionWrapper>
<SectionWrapper spacing="loose">Contenido con espaciado amplio</SectionWrapper>

<!-- Test de contenido -->
<SectionWrapper>
  <h2>Título</h2>
  <p>Párrafo largo para probar el ancho máximo y la legibilidad...</p>
</SectionWrapper>
```

## Accesibilidad

### Semántica
- **Elemento neutro**: `<div>` no interfiere con semántica
- **Contenido**: Preserva estructura semántica del contenido hijo
- **Navegación**: No afecta navegación por teclado

### Consideraciones
- **Legibilidad**: Ancho máximo optimiza longitud de línea
- **Espaciado**: Mejora escaneo visual del contenido
- **Responsive**: Asegura usabilidad en todos los dispositivos

## Roadmap de Mejoras

### Fase 1: Refinamiento
- Mejorar documentación y tipado
- Validación de props
- Optimizaciones menores

### Fase 2: Flexibilidad
- Props adicionales para ancho y padding
- Más opciones de espaciado
- Breakpoints adicionales

### Fase 3: Sistema Avanzado
- Integración con design tokens
- Variantes semánticas
- Animaciones y transiciones

### Fase 4: Optimización
- Performance avanzada
- Bundle size optimization
- Lazy loading de variantes

## Consideraciones de Diseño

### Filosofía
- **Consistencia**: Mismo comportamiento en todo el sitio
- **Legibilidad**: Optimizar para lectura cómoda
- **Flexibilidad**: Adaptable a diferentes necesidades
- **Simplicidad**: API clara y fácil de usar

### Decisiones de Diseño
- **max-w-5xl**: Equilibrio entre legibilidad y uso del espacio
- **Espaciado responsive**: Mejor experiencia en móviles
- **Switch statement**: Claro y fácil de extender
- **Computed property**: Eficiencia y reactividad

### Métricas de Diseño
- **Ancho máximo**: 1024px (max-w-5xl)
- **Longitud de línea**: ~75-85 caracteres (óptimo para lectura)
- **Espaciado**: Progresión lógica (4, 8, 12 en móvil)

## Mantenimiento

### Actualizaciones
- **Tailwind**: Verificar compatibilidad con nuevas versiones
- **Design system**: Sincronizar con tokens de espaciado
- **Breakpoints**: Mantener consistencia con sistema global

### Monitoreo
- **Uso**: Tracking de patrones de spacing más utilizados
- **Performance**: Métricas de renderizado
- **UX**: Métricas de legibilidad y engagement

### Métricas
- **Uso por spacing**: Cuáles variantes se usan más
- **Performance**: Tiempo de renderizado
- **Responsive**: Comportamiento en diferentes dispositivos