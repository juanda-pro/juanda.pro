# Especificaciones: Recursos

**Versión:** 1.3
**Componente Asociado:** `app/src/views/ResourcesView.vue`

---

## 1. Propósito y Funcionalidad

Esta vista presenta una galería curada de recursos digitales, como plantillas de código, flujos de trabajo de automatización y otros activos. Permite a los usuarios explorar y filtrar estos recursos de manera visual e interactiva.

## 2. Fuente de Datos

La página es **completamente estática**. Todos los recursos están **hardcodeados** en un array de objetos dentro del componente `ResourcesView.vue`.

- **Variable Clave:** `resources`.
- **Iconos como Componentes:** A diferencia de versiones anteriores, los iconos SVG no están hardcodeados como texto. Se importan como componentes de Vue (`@/components/icons/*.vue`) y se asignan dinámicamente a cada recurso. Esto mejora la reutilización y el mantenimiento del código.
- **No hay conexión a Supabase:** Los datos no se obtienen de una base de datos, lo que garantiza tiempos de carga mínimos y funcionamiento offline.

## 3. Estructura y Componentes

La vista `ResourcesView.vue` orquesta varios componentes para construir la página:

1.  **`PageHeader.vue`:**
    - Muestra el título "Recursos" y un párrafo descriptivo que introduce la sección.

2.  **`FilterButton.vue`:**
    - Se genera un botón de filtro por cada categoría única definida en `allCategories`.
    - Permiten al usuario alternar la visibilidad de las categorías de recursos.

3.  **Grid de `ResourceCard.vue`:**
    - Muestra los recursos en una cuadrícula responsive.
    - Cada tarjeta (`ResourceCard.vue`) visualiza un recurso individual, mostrando su icono, categoría, título y descripción.
    - Al hacer clic en una tarjeta, se emite un evento (`@open`) que activa el modal de detalles.

4.  **`ResourceModal.vue`:**
    - Un componente modal que permanece oculto hasta que se selecciona un recurso.
    - Muestra una vista detallada del recurso, incluyendo su descripción completa y el botón de acción principal (ej. "Obtener Plantilla").
    - Se puede cerrar haciendo clic fuera del modal o en un botón de cierre específico.

## 4. Lógica Reactiva (`ResourcesView.vue`)

La interactividad de la página se gestiona con el sistema de reactividad de Vue:

- **`resources` (ref):** Almacena el array estático de todos los objetos de recursos.
- **`selectedCategories` (ref):** Un array que guarda las categorías que el usuario ha seleccionado para filtrar.
- **`filteredResources` (computed):** Propiedad computada que devuelve una lista de recursos filtrada según las `selectedCategories`. Si no hay ninguna categoría seleccionada, devuelve todos los recursos.
- **`isModalOpen` y `selectedResource` (refs):** Gestionan el estado del modal. `isModalOpen` controla su visibilidad y `selectedResource` almacena los datos del recurso que se debe mostrar en él.