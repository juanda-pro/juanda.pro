# RESPALDO - Catálogo de Componentes Original

**Fecha de Respaldo:** 27 de Enero 2025  
**Agente:** Jobs  
**Motivo:** Respaldo antes de actualización completa

---

> **ADVERTENCIA: Documento Desactualizado**
> Este catálogo no ha sido actualizado para reflejar los últimos cambios en el código fuente (ej. creación de `DecorativeLine.vue`, refactorización de `CtaCard.vue`, etc.). Se requiere una revisión y actualización manual completa para sincronizarlo con la versión de producción.

---

Este documento proporciona una visión general de todos los componentes de UI reutilizables del proyecto, su propósito y su ubicación.

---

## Componentes Base (Primitivos)

- **`BaseButton.vue`**: Botón estándar con estilos personalizables.
- **`BaseInput.vue`**: Campo de entrada de texto estándar.
- **`BaseTextarea.vue`**: Área de texto estándar.

## Componentes de Layout y Estructura

- **`Footer.vue`**: Pie de página global del sitio.
- **`Header.vue`**: Encabezado global con navegación.
- **`PageHeader.vue`**: Encabezado estándar para páginas interiores.
- **`PageLayout.vue`**: Estructura de layout para páginas de contenido.
- **`SectionWrapper.vue`**: Contenedor con padding estándar para secciones.
- **`WikiLayout.vue`**: Layout específico para las páginas de notas/wiki.
- **`WikiSidebar.vue`**: Barra lateral para la navegación en la wiki.

## Componentes de Contenido y Tarjetas

- **`ArticleCard.vue`**: Tarjeta para mostrar un resumen de un artículo en el blog.
- **`MiniArticleCard.vue`**: Versión compacta de la tarjeta de artículo.
- **`NoteCard.vue`**: Tarjeta para mostrar una nota o apunte.
- **`ResourceCard.vue`**: Tarjeta para mostrar un recurso externo.
- **`CtaCard.vue`**: Tarjeta de llamada a la acción.
  - **Propósito:** Muestra un banner visualmente atractivo para dirigir al usuario a una acción específica.
  - **API (Props):
    - `title: String` (Requerido): Texto principal de la tarjeta.
    - `description: String` (Requerido): Título grande y destacado.
    - `buttonText: String` (Requerido): Texto del botón de acción.
    - `buttonLink: String`: URL de destino del botón.
- **`FeatureCard.vue`**: Tarjeta para destacar una característica.
- **`WikiContent.vue`**: Contenedor para renderizar el contenido de una nota/wiki.

## Componentes Funcionales y de UI

- **`CookieManager.vue`**: Banner y gestor de consentimiento de cookies.
- **`FilterButton.vue`**: Botón utilizado para filtrar contenido.
- **`MetadataRenderer.vue`**: Componente para gestionar las metaetiquetas del `head`.
- **`Modal.vue`**: Componente base para ventanas modales.
- **`OnboardingHint.vue`**: Pequeña ayuda visual para nuevos usuarios.

---

**NOTA:** Este es el estado original del catálogo antes de la actualización del Agente Jobs.