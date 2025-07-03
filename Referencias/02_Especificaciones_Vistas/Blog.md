# Especificaciones: Página de Blog

**Versión:** 1.2
**Componente Asociado:** `app/src/views/BlogView.vue`

---

## 1. Propósito y Funcionalidad

Esta vista actúa como la página principal del blog, mostrando un listado filtrable de todos los artículos publicados. Su objetivo es permitir a los usuarios descubrir y acceder fácilmente al contenido.

## 2. Fuente de Datos

Actualmente, esta página utiliza **datos de prueba hardcodeados** para simular el comportamiento dinámico. La conexión a Supabase está planificada pero no implementada.

- **Función Clave:** `loadMockData()`.
- **Lógica:** Esta función asigna un array de objetos de artículos directamente a la variable reactiva `allArticles`. Para simular una carga de red, utiliza un `setTimeout` de 500ms, durante el cual se muestra un estado de carga.
- **Manejo de Estados:** La interfaz gestiona los siguientes estados:
    - `isLoading`: (Simulado) Muestra "Cargando artículos..." durante el `setTimeout`.
    - `errorMessage`: Variable preparada, pero no se utiliza con datos hardcodeados.
    - Estado Vacío: Muestra un mensaje si no hay artículos que coincidan con los filtros seleccionados.

## 3. Estructura y Componentes

1.  **Cabecera:**
    - **Componentes:** `SectionWrapper`, `PageHeader`.
    - **Contenido:** Título de la página y un párrafo introductorio.

2.  **Filtros de Categoría:**
    - **Componentes:** `FilterButton`.
    - **Lógica:** Los botones se generan dinámicamente a partir de las categorías únicas de los artículos cargados. Permiten al usuario seleccionar una o varias categorías para filtrar la lista.

3.  **Grid de Artículos:**
    - **Componentes:** `ArticleCard`.
    - **Lógica:** Muestra la lista de artículos filtrados en un layout de una sola columna. Cada tarjeta es un enlace a la vista de detalle del artículo (aún por implementar).

## 4. Lógica Reactiva

- **`onMounted`:** Dispara la función `loadMockData` para cargar los datos de prueba tan pronto como el componente se monta en el DOM.
- **`allCategories` (Computed):** Extrae una lista de categorías únicas del array `allArticles` para generar los botones de filtro, evitando duplicados.
- **`filteredArticles` (Computed):** Devuelve la lista de artículos que coincide con las `selectedCategories`. Si no hay ninguna categoría seleccionada, devuelve todos los artículos.
- **`toggleCategory(category)` (Método):** Añade o elimina una categoría del array `selectedCategories` cada vez que el usuario hace clic en un `FilterButton`.
