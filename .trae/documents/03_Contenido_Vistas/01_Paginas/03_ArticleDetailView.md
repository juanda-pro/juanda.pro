# ArticleDetailView - Vista de Detalle de Artículo

## Información General
- **Archivo**: `ArticleDetailView.vue`
- **Ruta**: `/blog/:slug`
- **Tipo**: Vista de detalle
- **Propósito**: Mostrar el contenido completo de un artículo específico

## Objetivos
- Mostrar el contenido completo de un artículo basado en su slug
- Proporcionar navegación entre artículos (anterior/siguiente)
- Sugerir artículos relacionados
- Manejar estados de carga y error de manera elegante
- Optimizar la experiencia de lectura

## Estructura de Componentes

### Jerarquía de Componentes
```
ArticleDetailView
├── PageLayout (remove-padding-top="true")
│   ├── HeroSection (título y descripción del artículo)
│   ├── SectionWrapper
│   │   └── ArticleContent (contenido principal)
│   ├── ArticleNavigation (artículo sugerido)
│   └── SectionWrapper
│       └── ArticleNavButtons (navegación anterior/siguiente)
```

### Componentes Utilizados
- `PageLayout`: Layout principal sin padding superior
- `HeroSection`: Hero con título, descripción e imagen del artículo
- `SectionWrapper`: Contenedor con espaciado estándar
- `ArticleContent`: Renderizado del contenido del artículo
- `ArticleNavigation`: Sección de artículo sugerido
- `ArticleNavButtons`: Botones de navegación entre artículos

## Secciones de la Página

### 1. Estados Condicionales
- **Estado de Carga**: Spinner/mensaje mientras se carga el artículo
- **Estado de Error**: Mensaje de error con botón para volver al blog
- **Contenido**: Artículo completo cuando se carga exitosamente

### 2. Hero Section
- Título del artículo
- Descripción/resumen
- Imagen de fondo del artículo

### 3. Contenido Principal
- Renderizado completo del artículo
- Formato y estilos del contenido

### 4. Navegación Auxiliar
- Artículo sugerido (primer artículo disponible diferente al actual)
- Botones de navegación (artículo anterior/siguiente)

## Lógica de Datos

### Estado Reactivo
```javascript
const article = ref(null);           // Artículo actual
const isLoading = ref(true);         // Estado de carga
const errorMessage = ref('');        // Mensaje de error
const suggestedArticle = ref(null);  // Artículo sugerido
const adjacentArticles = ref({       // Artículos adyacentes
  previous: null, 
  next: null 
});
```

### Función Principal: `fetchArticleBySlug`
- **Propósito**: Cargar artículo por slug desde datos locales
- **Parámetros**: `slug` (string)
- **Proceso**:
  1. Activar estado de carga
  2. Limpiar errores previos
  3. Buscar artículo por slug usando `getArticleBySlug()`
  4. Si se encuentra:
     - Asignar artículo
     - Cargar artículo sugerido
     - Cargar artículos adyacentes
  5. Si no se encuentra: mostrar error
  6. Manejar errores y finalizar carga

### Watcher de Ruta
- **Observa**: `route.params.slug`
- **Acción**: Ejecuta `fetchArticleBySlug` cuando cambia el slug
- **Configuración**: `{ immediate: true }` para ejecutar al montar

### Fuente de Datos
- **Origen**: Datos locales (no Supabase)
- **Funciones utilizadas**:
  - `getArticleBySlug(slug)`: Obtener artículo específico
  - `getPublishedArticles()`: Obtener todos los artículos para sugerencias
  - `getAdjacentArticles(slug)`: Obtener artículos anterior/siguiente

## Ciclo de Vida
- **onMount**: No se usa explícitamente
- **Watcher**: Se ejecuta inmediatamente al montar y en cambios de slug

## Diseño y Estilos

### Layout
- `PageLayout` sin padding superior para hero full-width
- Secciones con `SectionWrapper` para espaciado consistente

### Estados Visuales
- **Carga**: Centrado con mensaje y padding vertical
- **Error**: Centrado con título, mensaje y botón de acción
- **Contenido**: Layout completo con hero y secciones

### Accesibilidad
- Botón de "Volver al Blog" con focus visible
- Estados de carga descriptivos
- Navegación semántica entre artículos

## Optimizaciones de Rendimiento
- Uso de datos locales (sin llamadas a API)
- Estados de carga para feedback inmediato
- Watcher eficiente que solo reacciona a cambios de slug

## Issues Identificados

### Menores
1. **Manejo de errores básico**: Solo muestra mensaje genérico
2. **Sin validación de slug**: No valida formato del slug
3. **Artículo sugerido simple**: Solo toma el primer artículo disponible
4. **Sin metadata SEO**: Falta meta tags dinámicos

## Mejoras Sugeridas

### Corto Plazo
1. Agregar meta tags dinámicos (título, descripción, OG tags)
2. Mejorar algoritmo de artículos sugeridos (por categoría/tags)
3. Agregar breadcrumbs de navegación
4. Implementar tiempo estimado de lectura

### Largo Plazo
1. Sistema de comentarios
2. Compartir en redes sociales
3. Tabla de contenidos automática
4. Artículos relacionados más inteligentes
5. Analytics de lectura

## Escenarios de Testing

### Casos de Uso
1. **Slug válido**: Debe cargar y mostrar artículo completo
2. **Slug inválido**: Debe mostrar error y botón de retorno
3. **Navegación entre artículos**: Debe actualizar contenido correctamente
4. **Artículos adyacentes**: Debe mostrar navegación cuando existan
5. **Primer/último artículo**: Debe manejar navegación limitada

### Estados
- Carga inicial
- Cambio de slug en misma vista
- Error de artículo no encontrado
- Navegación desde/hacia otras vistas

## Diseño Responsive
- Hero responsive con imagen de fondo
- Contenido del artículo optimizado para lectura
- Navegación adaptable en móviles
- Estados de error centrados y legibles

## Integración con Router
- Parámetro dinámico `:slug` en la ruta
- Navegación programática con `router-link`
- Scroll automático manejado por Vue Router

## Roadmap de Mejoras

### Fase 1: SEO y Metadata
- Meta tags dinámicos
- Structured data para artículos
- Breadcrumbs

### Fase 2: Experiencia de Usuario
- Tiempo de lectura estimado
- Progreso de lectura
- Tabla de contenidos

### Fase 3: Interactividad
- Sistema de comentarios
- Compartir social
- Bookmarks/favoritos

### Fase 4: Analytics
- Tracking de lectura
- Métricas de engagement
- A/B testing de layouts