# PageLayout - Layout Principal de Páginas

## Información General
- **Archivo**: `PageLayout.vue`
- **Tipo**: Componente de layout base
- **Propósito**: Proporcionar estructura consistente para todas las páginas del sitio
- **Categoría**: Componente Base

## Objetivos
- Establecer estructura de layout consistente en todas las páginas
- Manejar espaciado vertical entre secciones de manera responsive
- Proporcionar flexibilidad para casos especiales (como heroes full-width)
- Mantener coherencia visual en todo el sitio
- Simplificar la implementación de nuevas páginas

## API del Componente

### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `removePaddingTop` | `Boolean` | `false` | Elimina el padding superior del layout |

### Events
- **Ninguno**: Este componente no emite eventos

### Slots

| Slot | Descripción |
|------|-------------|
| `default` | Contenido principal de la página |

## Estructura Interna

### Template
```vue
<main :class="layoutClasses">
  <slot></slot>
</main>
```

### Lógica de Clases
```javascript
const layoutClasses = computed(() => [
  'flex-grow',           // Ocupa espacio disponible
  'flex',                // Flexbox container
  'flex-col',            // Dirección vertical
  'gap-12 sm:gap-16 md:gap-20', // Espaciado responsive
  { 'pt-20': !props.removePaddingTop } // Padding condicional
]);
```

## Lógica y Estado

### Computed Properties
- **layoutClasses**: Calcula dinámicamente las clases CSS basado en props

### Reactividad
- **removePaddingTop**: Controla la aplicación del padding superior
- **Responsive**: Espaciado se adapta automáticamente al tamaño de pantalla

### Comportamiento
1. **Por defecto**: Aplica `pt-20` para compensar header fijo
2. **Con removePaddingTop**: Elimina padding para heroes full-width
3. **Espaciado**: Gap responsive entre elementos hijos

## Estilos y Variantes

### Clases Base
- `flex-grow`: Permite que el layout ocupe todo el espacio disponible
- `flex flex-col`: Establece layout vertical flexbox
- `gap-12 sm:gap-16 md:gap-20`: Espaciado responsive entre secciones

### Variantes

#### Variante Estándar
```vue
<PageLayout>
  <!-- Contenido con padding superior -->
</PageLayout>
```

#### Variante Sin Padding Superior
```vue
<PageLayout :remove-padding-top="true">
  <!-- Contenido sin padding (para heroes) -->
</PageLayout>
```

### Espaciado Responsive
- **Móvil**: `gap-12` (3rem / 48px)
- **Tablet**: `gap-16` (4rem / 64px)
- **Desktop**: `gap-20` (5rem / 80px)

## Casos de Uso

### 1. Página Estándar
```vue
<PageLayout>
  <SectionWrapper>
    <!-- Contenido de sección -->
  </SectionWrapper>
  <SectionWrapper>
    <!-- Otra sección -->
  </SectionWrapper>
</PageLayout>
```

### 2. Página con Hero Full-Width
```vue
<PageLayout :remove-padding-top="true">
  <HeroSection />
  <SectionWrapper>
    <!-- Contenido después del hero -->
  </SectionWrapper>
</PageLayout>
```

### 3. Página Simple
```vue
<PageLayout>
  <div class="container mx-auto px-4">
    <!-- Contenido directo -->
  </div>
</PageLayout>
```

## Dependencias

### Internas
- **Ninguna**: No depende de otros componentes

### Externas
- **Vue 3**: Composition API (`computed`)
- **Tailwind CSS**: Para todas las clases de estilo

### Relaciones
- **Usado por**: Todas las vistas principales del sitio
- **Contiene**: Típicamente `SectionWrapper`, `HeroSection`, etc.
- **Complementa**: Sistema de layout general del sitio

## Patrones de Uso

### En Vistas
Todas las vistas principales utilizan este componente:
- `HomeView.vue`
- `BlogView.vue`
- `ArticleDetailView.vue`
- `SoyView.vue`
- `ContactoViewV2.vue`
- `PrivacyPolicyView.vue` (a través de LegalPageLayout)
- `CookiesPolicyView.vue` (a través de LegalPageLayout)

### Patrón Común
```vue
<template>
  <PageLayout :remove-padding-top="hasHero">
    <HeroSection v-if="hasHero" />
    <SectionWrapper v-for="section in sections">
      <!-- Contenido de sección -->
    </SectionWrapper>
  </PageLayout>
</template>
```

## Optimizaciones de Rendimiento

### CSS
- **Clases utilitarias**: Tailwind optimiza automáticamente
- **Computed property**: Solo recalcula cuando props cambian
- **Sin JavaScript pesado**: Lógica mínima

### Renderizado
- **Estructura simple**: Mínimo overhead de DOM
- **Flexbox nativo**: Aprovecha optimizaciones del navegador
- **Sin watchers**: No hay lógica reactiva compleja

## Issues Identificados

### Menores
1. **Nombre de prop**: `removePaddingTop` podría ser más semántico
2. **Documentación**: Falta documentación inline
3. **Flexibilidad**: Solo controla padding superior

### Potenciales Mejoras
1. **Props adicionales**: Control de padding inferior, lateral
2. **Variantes**: Diferentes tipos de layout (sidebar, etc.)
3. **Breakpoints**: Control más granular del espaciado

## Mejoras Sugeridas

### Corto Plazo
1. **Renombrar prop**: `removePaddingTop` → `fullWidth` o `noTopPadding`
2. **Agregar comentarios**: Documentación inline del código
3. **TypeScript**: Mejorar tipado de props

### Mediano Plazo
1. **Props adicionales**: 
   - `noPadding`: Eliminar todo padding
   - `customGap`: Espaciado personalizado
   - `maxWidth`: Control de ancho máximo
2. **Variantes de layout**: Sidebar, grid, etc.
3. **Slots nombrados**: Header, footer, sidebar

### Largo Plazo
1. **Sistema de layout**: Integración con sistema de diseño más complejo
2. **Responsive avanzado**: Control por breakpoint
3. **Animaciones**: Transiciones entre layouts

## Testing

### Casos de Prueba

#### Funcionalidad
1. **Renderizado básico**: Se renderiza correctamente
2. **Prop removePaddingTop**: Aplica/remueve padding correctamente
3. **Slot default**: Renderiza contenido hijo
4. **Clases responsive**: Espaciado cambia según viewport

#### Visual
1. **Espaciado**: Gap correcto entre elementos
2. **Responsive**: Comportamiento en diferentes tamaños
3. **Padding**: Correcto con y sin removePaddingTop
4. **Flexbox**: Layout vertical funciona correctamente

### Escenarios de Testing
```vue
<!-- Test básico -->
<PageLayout>
  <div>Contenido 1</div>
  <div>Contenido 2</div>
</PageLayout>

<!-- Test sin padding -->
<PageLayout :remove-padding-top="true">
  <div>Hero Section</div>
  <div>Contenido</div>
</PageLayout>
```

## Accesibilidad

### Semántica
- **Elemento `<main>`**: Correcto para contenido principal
- **Estructura**: Clara jerarquía de contenido
- **Navegación**: Compatible con lectores de pantalla

### Consideraciones
- **Skip links**: Compatible con navegación por teclado
- **Landmarks**: `<main>` es un landmark semántico
- **Focus management**: No interfiere con el focus

## Roadmap de Mejoras

### Fase 1: Refinamiento
- Mejorar nombres de props
- Agregar documentación inline
- Optimizar TypeScript

### Fase 2: Funcionalidad
- Props adicionales para control de espaciado
- Variantes de layout
- Slots nombrados

### Fase 3: Sistema Avanzado
- Integración con design system
- Control responsive granular
- Animaciones y transiciones

### Fase 4: Optimización
- Performance avanzada
- Bundle size optimization
- Lazy loading de variantes

## Consideraciones de Diseño

### Filosofía
- **Simplicidad**: Hacer lo mínimo necesario bien
- **Consistencia**: Mismo comportamiento en todo el sitio
- **Flexibilidad**: Adaptable a diferentes necesidades
- **Performance**: Mínimo overhead

### Decisiones de Diseño
- **Flexbox**: Elegido por simplicidad y soporte
- **Gap**: Preferido sobre margin para espaciado
- **Computed**: Para reactividad eficiente
- **Prop boolean**: Simple y claro para caso de uso principal

## Mantenimiento

### Actualizaciones
- **Tailwind**: Verificar compatibilidad con nuevas versiones
- **Vue**: Mantener compatibilidad con Composition API
- **Breakpoints**: Sincronizar con sistema de diseño

### Monitoreo
- **Uso**: Tracking de patrones de uso en el sitio
- **Performance**: Métricas de renderizado
- **Feedback**: Experiencia de desarrolladores