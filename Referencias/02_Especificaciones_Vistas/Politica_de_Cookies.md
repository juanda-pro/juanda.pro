# Especificación de la Vista: Política de Cookies (`CookiesPolicyView.vue`)

**Versión:** 1.0
**Ruta:** `/politica-de-cookies`
**Estado:** Activa

---

## 1. Propósito y Funcionalidad

Esta vista tiene como único propósito mostrar el contenido legal de la política de cookies del sitio. Es una página estática, informativa y de solo lectura.

---

## 2. Estructura de Componentes

La estructura es mínima para priorizar la legibilidad del contenido legal:

1.  **Contenedor Principal (`PageLayout`):**
    *   Envuelve la vista para mantener la cabecera y el pie de página consistentes con el resto del sitio.

2.  **Contenido Estático (`prose`):**
    *   El texto legal está contenido dentro de un `div` con las clases de `@tailwindcss/typography` (`prose dark:prose-invert`).
    *   Esto asegura que el texto tenga un formato limpio, legible y adaptable a los modos claro y oscuro sin necesidad de estilos adicionales.

---

## 3. Lógica de Datos

*   No existe lógica de datos. El contenido es completamente estático y está definido directamente en la plantilla del componente.

---

## 4. Auditoría de Calidad

*   El componente ha sido revisado para asegurar que no contiene lógica innecesaria ni malas prácticas. Su simplicidad es su principal característica.

**Versión:** 2.1
**Componente Asociado:** `app/src/views/CookiesPolicyView.vue`
**Ruta:** `/politica-de-cookies`
**Última Actualización:** 22/07/2025

## Descripción General

Esta vista muestra la página legal de la Política de Cookies del sitio. Al igual que la política de privacidad, es un componente puramente estático y presentacional.

---

## Estructura y Componentes

La arquitectura de la vista es idéntica a la de la Política de Privacidad, basándose en la reutilización del componente `LegalPageLayout`.

1.  **`LegalPageLayout`**: Es el único componente utilizado. Envuelve todo el contenido y proporciona una estructura y estilo consistentes.
    *   **Props Utilizadas:**
        *   `title`: "Política de Cookies"
        *   `subtitle`: "Este sitio usa cookies para mejorar tu experiencia. Aquí puedes saber más y gestionar tus preferencias."
        *   `last-updated`: "Última actualización: 1 de Julio de 2024"

2.  **Slot `#content`**: Todo el texto legal de la política de cookies está codificado directamente dentro del slot de contenido que provee el `LegalPageLayout`. El texto está estructurado con etiquetas semánticas HTML (`<h2>`, `<p>`, `<ul>`, `<li>`).

---

## Lógica y Datos

*   **Sin Lógica de Script:** Este componente **no tiene una sección `<script>`**. Es un componente de solo plantilla (`template-only`).
*   **Contenido Estático:** No hay carga de datos, estado reactivo, ni ninguna otra lógica de JavaScript. Todo el contenido está codificado directamente en el archivo `.vue`.

**Versión:** 2.0
**Componente Asociado:** `app/src/views/CookiesPolicyView.vue`
**Última Actualización:** 19/07/2025

---

## 1. Propósito y Descripción General

Esta vista muestra la política de cookies del sitio web juanda.pro. Es una página de contenido estático que informa a los usuarios sobre los tipos de cookies utilizadas, su propósito y cómo pueden gestionarlas, incluyendo un gestor de cookies interactivo.

## 2. Fuente de Datos

El contenido es completamente estático y está directamente incrustado en el componente:
- **Fecha de Actualización:** "1 de Julio de 2024"
- **Contenido Legal:** Texto hardcodeado con información sobre cookies
- **Secciones:** ¿Qué son las cookies?, ¿Cómo usamos las cookies?, Gestiona tus preferencias

## 3. Estructura y Componentes

### 3.1. Cabecera
- **Componentes:** `SectionWrapper` con `IntroCard` y `PageHeader`
- **Contenido:**
  - Título: "Política de Cookies"
  - Subtítulo: "Este sitio usa cookies para mejorar tu experiencia. Aquí puedes saber más y gestionar tus preferencias."
- **Configuración:** `spacing="normal"`

### 3.2. Contenido Legal
- **Componente:** `SectionWrapper` con `spacing="normal"`
- **Contenedor:** `max-w-3xl mx-auto prose prose-lg dark:prose-invert max-w-none`
- **Estructura:**
  - Fecha de última actualización
  - Párrafo introductorio sobre juanda.pro
  - Sección "¿Qué son las cookies?" con explicación detallada
  - Sección "¿Cómo usamos las cookies?" con tipos de cookies
  - Sección "Gestiona tus preferencias" con componente interactivo

### 3.3. Gestor de Cookies
- **Componente:** `CookieManager` integrado en el contenido
- **Propósito:** Permitir al usuario gestionar preferencias de cookies
- **Ubicación:** Al final de la sección de gestión de preferencias

## 4. Características Técnicas

### 4.1. Imports
- **Componentes:** `PageLayout`, `SectionWrapper`, `PageHeader`, `CookieManager`, `IntroCard`
- **Sin Lógica Reactiva:** Componente puramente estático

### 4.2. Estilo y Diseño
- **Tipografía:** Uso de clases `prose` de Tailwind para contenido legal
- **Responsive:** Contenedor con `max-w-3xl` para legibilidad óptima
- **Temas:** Soporte completo para modo claro/oscuro con `dark:prose-invert`
- **Consistencia:** Uso del componente `IntroCard` para unificación visual

### 4.3. Contenido Específico
- **Tipos de Cookies Explicados:**
  - Cookies esenciales (estrictamente necesarias)
  - Cookies de rendimiento y análisis (información anónima)
  - Cookies de funcionalidad (personalización y características mejoradas)
- **Información Educativa:** Explicación clara de qué son las cookies y cómo funcionan
- **Derechos del Usuario:** Información sobre gestión de preferencias y privacidad

## 5. Notas Técnicas

- **Accesibilidad:** Estructura semántica con headings apropiados
- **SEO:** Contenido bien estructurado para indexación
- **Mantenibilidad:** Contenido fácil de actualizar directamente en el template
- **Interactividad:** Integración del `CookieManager` para gestión de preferencias
- **Responsive:** Diseño adaptativo para todos los dispositivos
- **Cumplimiento Legal:** Contenido alineado con regulaciones de privacidad
