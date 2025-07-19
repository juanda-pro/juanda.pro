# Especificaciones: Recursos

**Versión:** 2.0
**Componente Asociado:** `app/src/views/ResourcesView.vue`
**Última Actualización:** 19/07/2025

---

## 1. Propósito y Funcionalidad

Esta vista presenta una galería curada de recursos digitales, incluyendo workflows de N8N, escenarios de Make y plantillas web. Permite a los usuarios explorar y filtrar estos recursos mediante un sistema de categorías, con modal de detalles para cada recurso.

## 2. Fuente de Datos

La página es **completamente estática** con datos hardcodeados:

- **Variable Clave:** `resources` - Array de 5 recursos predefinidos
- **Categorías:** Array estático `allCategories` con ['N8N', 'Make', 'Plantillas Web']
- **Iconos como Componentes:** Importación de componentes Vue desde `@/components/icons/`:
  - `IconWorkflow` - Para workflows de N8N
  - `IconCode` - Para plantillas web
  - `IconSync` - Para escenarios de Make
- **Estructura de Recurso:** Cada recurso incluye title, category, description, icon, url, buttonText
- **Sin Backend:** No hay conexión a Supabase, garantizando carga instantánea

## 3. Estructura y Componentes

### 3.1. Cabecera
- **Componente:** `SectionWrapper` con `PageHeader`
- **Contenido:**
  - Título: "Recursos"
  - Subtítulo: "Herramientas que uso a diario, plantillas que me ahorran horas y automatizaciones que funcionan. Todo probado en las trincheras."
- **Configuración:** `spacing="normal"`

### 3.2. Sección de Filtros y Grid
- **Componente:** `SectionWrapper` con `spacing="normal"`
- **Filtros de Categoría:**
  - **Componentes:** `FilterButton` generados dinámicamente
  - **Layout:** Flexbox centrado con gaps responsive (`gap-2 sm:gap-4`)
  - **Categorías:** Basadas en array estático `allCategories`
  - **Interacción:** Toggle con estado visual activo
- **Grid de Recursos:**
  - **Componente:** `ResourceCard` en grid responsive
  - **Layout:** `grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
  - **Evento:** `@open` para activar modal de detalles

### 3.3. Modal de Detalles
- **Componente:** `ResourceModal` condicional (`v-if="selectedResource"`)
- **Props:** `:show="isModalOpen"`, `:resource="selectedResource"`
- **Evento:** `@close` para cerrar modal
- **Funcionalidad:** Vista detallada con botón de acción personalizado

## 4. Lógica Reactiva y Técnica

### 4.1. Estado Reactivo
- **`resources`:** `ref([])` - Array de 5 recursos hardcodeados con estructura completa
- **`selectedCategories`:** `ref([])` - Array de categorías seleccionadas para filtrado
- **`isModalOpen`:** `ref(false)` - Estado de visibilidad del modal
- **`selectedResource`:** `ref(null)` - Recurso actualmente seleccionado para el modal

### 4.2. Datos Estáticos
- **`allCategories`:** Array hardcodeado `['N8N', 'Make', 'Plantillas Web']`
- **Recursos Incluidos:**
  1. Onboarding Automatizado de Clientes (N8N)
  2. Landing Page Minimalista para Proyectos (Plantillas Web)
  3. Sincronización Trello-Calendar (Make)
  4. Dashboard de Métricas para Slack (N8N)
  5. Portfolio Personal de una Página (Plantillas Web)

### 4.3. Computed Properties
- **`filteredResources`:** Filtra recursos basado en `selectedCategories`. Si no hay categorías seleccionadas, devuelve todos los recursos

### 4.4. Métodos
- **`openResourceModal(resource)`:** Establece el recurso seleccionado y abre el modal
- **`closeResourceModal()`:** Cierra el modal
- **`toggleCategory(category)`:** Añade/elimina categorías usando `indexOf` y `splice`
- **`isSelected(category)`:** Verifica si una categoría está seleccionada para estado visual

### 4.5. Imports
- **Vue:** `ref`, `computed`
- **Componentes:** `SectionWrapper`, `PageHeader`, `ResourceCard`, `FilterButton`, `ResourceModal`
- **Iconos:** `IconWorkflow`, `IconCode`, `IconSync`

## 5. Características de Diseño

- **Layout Responsive:** Grid que se adapta de 3 columnas (lg) a 2 (md) a 1 (sm)
- **Filtros Interactivos:** Sistema de toggle con estados visuales claros
- **Modal Overlay:** Experiencia de usuario fluida para detalles de recursos
- **Iconografía Consistente:** Iconos temáticos para cada tipo de recurso
- **Espaciado Uniforme:** Sistema consistente con `SectionWrapper`

## 6. Notas Técnicas

- **Performance:** Datos estáticos para carga instantánea
- **Mantenibilidad:** Estructura modular con componentes reutilizables
- **Escalabilidad:** Fácil añadir nuevos recursos y categorías
- **Accesibilidad:** Estructura semántica, estados de focus apropiados
- **Responsive:** Mobile-first approach con breakpoints claros
- **Limitaciones:** URLs placeholder ("#") - requieren implementación de enlaces reales