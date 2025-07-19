# Especificaciones: Página de Blog

**Versión:** 2.1
**Componente Asociado:** `app/src/views/BlogView.vue` (Página principal activa)
**Ruta:** `/blog`
**Nota:** Versión V2 huérfana existe pero no está en uso
**Última Actualización:** 19/07/2025 - Tipografía estandarizada

---

## 1. Propósito y Funcionalidad

Esta vista actúa como la página principal del blog, mostrando un listado filtrable de todos los artículos publicados. Su objetivo es permitir a los usuarios descubrir y acceder fácilmente al contenido mediante un sistema de filtros por categoría.

## 2. Fuente de Datos

La vista carga los artículos desde el módulo de datos centralizado, con conexión a Supabase desactivada:

- **Fuente Centralizada:** Utiliza la función `getPublishedArticles` del módulo `@/data/articlesData.ts`.
- **Función Clave:** `fetchArticles()` que:
  - Establece estado de carga (`isLoading = true`)
  - Limpia mensajes de error previos
  - Obtiene artículos de datos locales
  - Ordena por fecha de publicación descendente (más reciente primero)
  - Almacena en `allArticles.value`
  - Maneja errores con try-catch
  - Finaliza estado de carga en bloque `finally`
- **Manejo de Estados Robusto:**
    - `isLoading`: Inicializado en `true`, controla la visualización del estado de carga
    - `errorMessage`: String que almacena mensajes de error específicos
    - Estado Vacío: Mensaje personalizado cuando no hay artículos que coincidan con filtros
    - Estado de Error: Mensaje de error amigable al usuario

## 3. Estructura y Componentes

1.  **Cabecera:**
    - **Componentes:** `SectionWrapper` con `IntroCard` y `PageHeader`
    - **Contenido:** 
      - Título: "Blog"
      - Subtítulo: "Noticias, experimentos documentados y reflexiones sobre la intersección entre tecnología y desarrollo humano."
    - **Configuración:** `spacing="normal"`

2.  **Sección de Filtros y Artículos:**
    - **Componente:** `SectionWrapper` con `spacing="normal"`
    - **Filtros de Categoría:**
      - **Componentes:** `FilterButton` generados dinámicamente
      - **Layout:** Flexbox centrado con gap responsive (`gap-3 sm:gap-4`)
      - **Lógica:** Botones basados en `allCategories` computed property
      - **Interacción:** Toggle de categorías con estado visual activo
    - **Estados Condicionales:**
      - **Loading:** Mensaje "Cargando artículos..." centrado
      - **Error:** Mensaje de error en color `accent-error`
      - **Sin Resultados:** Mensaje cuando no hay artículos que coincidan
    - **Grid de Artículos:**
      - **Componente:** `ArticleCard` en layout vertical
      - **Contenedor:** `max-w-4xl mx-auto` con espaciado `space-y-12 md:space-y-16`
      - **Renderizado:** Condicional basado en `filteredArticles.length`

## 4. Lógica Reactiva y Técnica

### 4.1. Estado Reactivo
- **`allArticles`:** `ref([])` - Array de todos los artículos cargados
- **`selectedCategories`:** `ref([])` - Array de categorías seleccionadas para filtrar
- **`isLoading`:** `ref(true)` - Estado de carga inicializado en true
- **`errorMessage`:** `ref('')` - String para mensajes de error

### 4.2. Computed Properties
- **`allCategories`:** Extrae categorías únicas de `allArticles` usando `Set` para evitar duplicados
- **`filteredArticles`:** Filtra artículos basado en `selectedCategories`. Si no hay categorías seleccionadas, devuelve todos los artículos

### 4.3. Métodos
- **`fetchArticles()`:** Función principal de carga de datos con manejo completo de estados
- **`toggleCategory(category)`:** Añade/elimina categorías del array `selectedCategories` usando `indexOf` y `splice`
- **`isSelected(category)`:** Verifica si una categoría está seleccionada para el estado visual del botón

### 4.4. Ciclo de Vida
- **`onMounted`:** Ejecuta `fetchArticles()` al montar el componente

### 4.5. Imports
- **Vue:** `ref`, `computed`, `onMounted`
- **Datos:** `getPublishedArticles` (Supabase comentado)
- **Componentes:** `SectionWrapper`, `PageHeader`, `ArticleCard`, `FilterButton`, `PageLayout`, `IntroCard`
