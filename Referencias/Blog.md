# Especificaciones: Página de Blog

**Versión:** 1.1
**Componente Asociado:** `src/views/BlogView.vue`

---

## 1. Propósito y Funcionalidad

Esta vista actúa como la página principal del blog, mostrando un listado filtrable de todos los artículos publicados. Su objetivo es permitir a los usuarios descubrir y acceder fácilmente al contenido.

## 2. Fuente de Datos

Esta página está **conectada a Supabase** y obtiene los datos en tiempo real.

- **Tabla:** `articles`.
- **Consulta:** Se obtienen los artículos que cumplen las siguientes condiciones:
    1.  Su fecha `published_at` es anterior o igual a la fecha actual.
    2.  Se ordenan por `relevance` (ascendente) para mostrar primero los destacados, y luego por `published_at` (descendente) para mostrar los más recientes primero.
    3.  Se limita la consulta a 10 resultados.
- **Manejo de Estados:** La interfaz gestiona de forma explícita los siguientes estados:
    - `isLoading`: Muestra un mensaje de "Cargando..." mientras se realiza la petición.
    - `errorMessage`: Muestra un mensaje de error detallado si la petición a Supabase falla.
    - Estado Vacío: Muestra un mensaje si no hay artículos que coincidan con los filtros seleccionados.

## 3. Estructura y Componentes

1.  **Cabecera:**
    - **Componentes:** `SectionWrapper.vue`, `PageHeader.vue`.
    - **Contenido:** Título de la página y un párrafo introductorio.

2.  **Filtros de Categoría:**
    - **Componentes:** `FilterButton.vue`.
    - **Lógica:** Los botones se generan dinámicamente a partir de las categorías únicas de los artículos cargados. Permiten al usuario seleccionar una o varias categorías para filtrar la lista.

3.  **Grid de Artículos:**
    - **Componentes:** `ArticleCard.vue`.
    - **Lógica:** Muestra la lista de artículos filtrados. Cada tarjeta es un enlace a la vista de detalle del artículo (`ArticleDetailView.vue`).

## 4. Lógica Reactiva

- **`onMounted`:** Dispara la función `fetchArticles` para cargar los datos tan pronto como el componente se monta en el DOM.
- **`allCategories` (Computed):** Extrae una lista de categorías únicas del array de artículos para generar los botones de filtro, evitando duplicados.
- **`filteredArticles` (Computed):** Devuelve la lista de artículos que coincide con las `selectedCategories`. Si no hay ninguna categoría seleccionada, devuelve todos los artículos.
- **`toggleCategory(category)` (Método):** Añade o elimina una categoría del array `selectedCategories` cada vez que el usuario hace clic en un `FilterButton`.
