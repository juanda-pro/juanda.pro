# Especificaciones de Diseño y UX: Recursos

Este documento detalla el comportamiento y la maquetación de la página de Recursos (`/recursos`), implementada en `ResourcesView.vue`.

---

## 1. Estructura General

La página se organiza en tres áreas funcionales principales:

1.  **Cabecera:** Presenta el título, una descripción y una barra de búsqueda.
2.  **Controles de Filtro:** Permite al usuario filtrar los recursos por categoría.
3.  **Grid de Recursos:** Muestra los recursos filtrados en una cuadrícula responsive.

---

## 2. Desglose de Componentes y Comportamiento

### 2.1. Cabecera y Búsqueda

- **Cabecera (`PageHeader.vue`):** Un componente reutilizable que muestra el título "Recursos" y un párrafo descriptivo.
- **Barra de Búsqueda:** Debajo de la descripción, se muestra un campo de búsqueda. **Nota:** Actualmente, la funcionalidad de búsqueda no está implementada; es un elemento visual preparatorio.

### 2.2. Filtros (`FilterButton.vue`)

- Se muestra un conjunto de botones, uno por cada categoría disponible (`N8N`, `Make`, `Plantillas Web`).
- **Interacción:**
  - Al hacer clic en un botón, se activa o desactiva el filtro para esa categoría.
  - Se pueden seleccionar múltiples categorías a la vez.
  - Un botón activo tiene un estilo visual distintivo.
- **Lógica:** El grid de recursos se actualiza dinámicamente para mostrar solo aquellos que pertenecen a las categorías seleccionadas. Si no hay ninguna categoría seleccionada, se muestran todos.

### 2.3. Grid y Tarjeta de Recurso (`ResourceCard.vue`)

- **Layout del Grid:** Los recursos se muestran en una cuadrícula (`grid`) que se adapta al tamaño de la pantalla:
  - **Móvil:** Una columna.
  - **Tablet (`md`):** Dos columnas.
  - **Escritorio (`lg`):** Tres columnas.
- **Tarjeta de Recurso (`ResourceCard.vue`):
  - **Estructura:** Es una tarjeta vertical (`flex-col`) que ocupa toda la altura de su celda en el grid.
  - **Contenido:**
    - **Icono y Categoría:** En la parte superior, se muestra un icono representativo y el nombre de la categoría.
    - **Título y Descripción:** El cuerpo de la tarjeta contiene el título del recurso y una breve descripción.
    - **Botón de Acción:** En la parte inferior, un botón prominente con un texto de llamada a la acción (ej. "Obtener Plantilla", "Ver Workflow") enlaza a la URL del recurso.
  - **Interacción:** La tarjeta completa tiene un sutil efecto de `hover` que eleva su sombra, y el botón de acción cambia de brillo al pasar el cursor.