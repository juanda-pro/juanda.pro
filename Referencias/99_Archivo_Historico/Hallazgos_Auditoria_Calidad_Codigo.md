# Hallazgos de la Auditoría de Calidad de Código

**Fecha:** 22 de Julio de 2025

Este documento registra todos los hallazgos, errores, malas prácticas y oportunidades de mejora identificadas durante la revisión exhaustiva del código fuente del proyecto `juanda.pro`.

---

### `HomeView.vue`

**`[HALLAZGO CRÍTICO]`**

*   **Enlace Muerto en CTA Principal:** El botón "Obtener" en la tarjeta de llamada a la acción principal (`CtaCard.vue`) apunta a `href="#"`, lo cual es un enlace no funcional que debe ser corregido o eliminado.

**`[HALLAZGOS MODERADOS]`**

*   **Contenido de Relleno (Placeholders):** Se utilizan imágenes de `placehold.co` para la sección "Quién Soy" y para los tres pilares temáticos. Estas deben ser reemplazadas por las imágenes finales.
*   **Interfaz `Article` Duplicada:** La interfaz `Article` se redefine localmente, a pesar de que ya existe una definición global en `articlesData.ts`. Esto crea duplicación de código y un riesgo de inconsistencia futura. La interfaz local debe ser eliminada y la global importada.

**`[HALLAZGOS MENORES]`**

*   **Datos Estáticos en la Vista:** El array `pilares` está codificado directamente en el componente. Extraerlo a un archivo de datos dedicado (ej. `src/data/homeViewData.ts`) mejoraría la separación de responsabilidades y la mantenibilidad.

### `ContactoViewV2.vue`

**`[HALLAZGO CRÍTICO]`**

*   **Ausencia de TypeScript:** El componente está escrito en JavaScript (`<script setup>`), rompiendo la estandarización de TypeScript (`lang="ts"`) del proyecto. Debe ser migrado a TypeScript para mantener la consistencia y seguridad del tipado.

**`[HALLAZGOS MODERADOS]`**

*   **Manipulación Directa del DOM:** La función `scrollToForm` utiliza `document.querySelector`. Debe refactorizarse para usar `template refs` de Vue, que es una práctica más segura y declarativa.
*   **Datos Estáticos en la Vista:** Los métodos de contacto (`contactMethods`) y otros textos están codificados en el componente. Deberían extraerse a un archivo de datos para mejorar la mantenibilidad.

**`[HALLAZGOS MENORES]`**

*   **Inconsistencia en Redes Sociales:** El texto final menciona handles y redes que no coinciden con los datos de contacto definidos en el script. Se debe unificar la información.
*   **Estilos en Línea para Animaciones:** Se usan estilos en línea para los retrasos de las animaciones. Sería más limpio gestionar esto a través de clases de CSS o una lógica de script.

### `BlogView.vue`

**`[HALLAZGO CRÍTICO]`**

*   **Ausencia de TypeScript:** El componente está escrito en JavaScript (`<script setup>`), rompiendo la estandarización de TypeScript (`lang="ts"`) del proyecto. Debe ser migrado a TypeScript.

**`[HALLAZGOS MENORES]`**

*   **Falta de Tipado en Datos:** Las variables reactivas como `allArticles` y `selectedCategories` carecen de un tipo explícito (`ref<Article[]>([])`). Añadir el tipado mejoraría la robustez y la legibilidad del código.

### `ArticleDetailView.vue`

**`[HALLAZGO CRÍTICO]`**

*   **Ausencia de TypeScript:** El componente está escrito en JavaScript, rompiendo la estandarización del proyecto. Debe ser migrado a TypeScript.
*   **Riesgo Potencial de XSS con `v-html`:** El uso de `v-html` para renderizar el contenido del artículo (línea 139) es un vector de ataque XSS. Es crítico asegurar que todo el contenido esté debidamente sanitizado antes de ser mostrado.

**`[HALLAZGO MODERADO]`**

*   **Manipulación Directa del Objeto `window`:** El botón "Volver arriba" usa `window.scrollTo` (línea 168). Es una manipulación directa del BOM que podría gestionarse de forma más abstracta.

**`[HALLAZGOS MENORES]`**

*   **Falta de Tipado en Datos:** Las variables reactivas como `article` y `suggestedArticle` carecen de tipos explícitos.
*   **SVGs en Línea:** El componente contiene múltiples SVGs codificados en la plantilla. Deberían ser extraídos a componentes dedicados.
*   **Lógica de Sugerencia Simplista:** El artículo sugerido es el primer artículo de la lista que no es el actual. La relevancia podría mejorarse (ej. por categoría).

### `SoyView.vue`

**`[HALLAZGO CRÍTICO]`**

*   **Ausencia de TypeScript:** El componente está escrito en JavaScript, rompiendo la estandarización del proyecto. Debe ser migrado a TypeScript.

**`[HALLAZGOS MODERADOS]`**

*   **Imagen de Perfil Placeholder:** La vista utiliza una imagen de `placehold.co` (línea 48) en lugar de una imagen real.
*   **Enlace Roto a "Recursos":** El texto final invita a visitar una sección de "Recursos" (línea 133) que no es accesible actualmente.

**`[HALLAZGOS MENORES]`**

*   **Código Muerto (`onMounted`):** El hook `onMounted` (líneas 12-18) está vacío o contiene código comentado y debe ser eliminado.
*   **SVGs en Línea:** El componente contiene tres SVGs codificados en la plantilla que deberían ser extraídos a componentes.
*   **CSS Duplicado:** Las animaciones `@keyframes` están duplicadas en este componente y deberían centralizarse en un archivo de estilos global.

### `PrivacyPolicyView.vue`

**`[HALLAZGO CRÍTICO]`**

*   **Ausencia de TypeScript:** El componente está escrito en JavaScript (`<script setup>`), rompiendo la estandarización de TypeScript del proyecto.

**`[HALLAZGO MODERADO]`**

*   **Contenido Estático en el Componente:** El texto legal está codificado directamente en la plantilla. Extraer este contenido a un archivo de datos dedicado podría facilitar futuras actualizaciones.

### `CookiesPolicyView.vue`

**`[HALLAZGO CRÍTICO]`**

*   **Ausencia de TypeScript:** El componente está escrito en JavaScript (`<script setup>`), rompiendo la estandarización de TypeScript del proyecto.

**`[HALLAZGO MODERADO]`**

*   **Contenido Estático en el Componente:** El texto legal está codificado directamente en la plantilla. Extraer este contenido a un archivo de datos dedicado facilitaría futuras actualizaciones.

### `TypographyShowcase.vue`

**`[HALLAZGO CRÍTICO]`**

*   **Manipulación Directa del DOM:** El componente manipula directamente `document.documentElement.classList` y `localStorage` para gestionar el modo oscuro. Debe refactorizarse para usar un composable `useTheme()` centralizado, como sugiere el propio `TODO` en el código.

**`[HALLAZGO MODERADO]`**

*   **Datos Estáticos en el Componente:** El array `typographyOptions` es una estructura de datos muy grande codificada en el componente. Debería ser extraída a un archivo de datos dedicado.

**`[HALLAZGOS MENORES]`**

*   **Lógica de `toggleDarkMode` Incompleta:** La función para cambiar de tema no persiste el estado, dejando la funcionalidad a medias.
*   **Interpolación de Strings para Código:** El bloque de código de ejemplo se construye con una interpolación de strings frágil y poco legible.

