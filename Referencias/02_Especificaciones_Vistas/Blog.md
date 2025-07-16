# Especificaciones: Página de Blog

**Versión:** 1.2
**Componente Asociado:** `app/src/views/BlogView.vue`

---

## 1. Propósito y Funcionalidad

Esta vista actúa como la página principal del blog, mostrando un listado filtrable de todos los artículos publicados. Su objetivo es permitir a los usuarios descubrir y acceder fácilmente al contenido.

## 2. Fuente de Datos

La vista carga los artículos desde el módulo de datos centralizado, asegurando la consistencia con el resto del sitio.

- **Fuente Centralizada:** Utiliza la función `getPublishedArticles` del módulo `@/data/articlesData.ts`.
- **Función Clave:** `fetchArticles()`.
- **Lógica:** Esta función carga todos los artículos publicados, los ordena por fecha de publicación descendente y los almacena en la referencia reactiva `allArticles`.
- **Manejo de Estados:** La interfaz gestiona de forma robusta los siguientes estados:
    - `isLoading`: Se activa (`true`) antes de iniciar la petición y se desactiva (`false`) cuando la petición termina (ya sea con éxito o con error).
    - `errorMessage`: Almacena un mensaje de error si la petición a Supabase falla, que se muestra al usuario.
    - Estado Vacío: Muestra un mensaje si no hay artículos que coincidan con los filtros de categoría seleccionados.

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

- **`onMounted`:** Llama a la función `fetchArticles` para cargar los datos desde Supabase en cuanto el componente se monta en el DOM.
- **`allCategories` (Computed):** Extrae una lista de categorías únicas del array `allArticles` para generar los botones de filtro, evitando duplicados.
- **`filteredArticles` (Computed):** Devuelve la lista de artículos que coincide con las `selectedCategories`. Si no hay ninguna categoría seleccionada, devuelve todos los artículos.
- **`toggleCategory(category)` (Método):** Añade o elimina una categoría del array `selectedCategories` cada vez que el usuario hace clic en un `FilterButton`.
