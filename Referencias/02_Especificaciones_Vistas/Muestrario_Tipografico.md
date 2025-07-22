# Especificación de la Vista: Muestrario Tipográfico (`TypographyShowcase.vue`)

**Versión:** 1.0
**Ruta:** `/typography-showcase` (Normalmente para desarrollo)
**Estado:** Activa (Herramienta de desarrollo)

---

## 1. Propósito y Funcionalidad

Esta vista es una herramienta de desarrollo y no forma parte de la navegación principal del usuario. Su único propósito es mostrar todos los estilos tipográficos definidos en la configuración de TailwindCSS (`tailwind.config.js`) en un solo lugar.

Permite a los desarrolladores y diseñadores verificar rápidamente la consistencia visual de los encabezados, párrafos, listas y otros elementos de texto, tanto en modo claro como oscuro.

---

## 2. Estructura y Lógica

*   **Estructura Simple:** La vista consiste en una serie de elementos de texto (`h1`, `h2`, `p`, etc.) con las clases de tipografía correspondientes aplicadas directamente.
*   **Sin Lógica de Datos:** No hay carga de datos ni lógica compleja. Todo el contenido es estático y está definido en la plantilla.
*   **Uso de `prose`:** La vista también puede incluir una sección con la clase `prose` para mostrar cómo se renderiza el contenido de formato largo (como los artículos de blog) por defecto.

---

## 3. Auditoría de Calidad

*   **Interpolación Dinámica:** Se ha corregido un problema anterior donde se intentaba usar interpolación dinámica (`{{}}`) dentro de las clases de CSS, lo cual no es válido. Las clases ahora están aplicadas estáticamente.
*   **Herramienta Interna:** Se debe asegurar que esta ruta no esté enlazada desde ninguna parte pública del sitio y que no sea indexada por los motores de búsqueda (puede ser gestionado a través de `robots.txt` o metaetiquetas `noindex`).


**Ruta:** `/typography-showcase`
**Última Actualización:** 22/07/2025

## Descripción General

Esta vista es una herramienta de desarrollo y diseño, un "laboratorio" que no forma parte de la navegación principal del sitio. Su propósito es mostrar todos los estilos tipográficos (familias, tamaños, pesos) y la paleta de colores completa del sistema de diseño en un solo lugar, permitiendo una verificación visual rápida y consistente.

---

## Estructura y Componentes

La vista es una página autocontenida con una estructura clara para la visualización de los elementos de diseño:

1.  **Cabecera:** Incluye un título principal y un botón para alternar entre el modo claro y oscuro.

2.  **Sección de Familias de Fuentes:** Muestra ejemplos de texto para cada una de las familias de fuentes definidas en el proyecto (`font-sans`, `font-serif`, `font-mono`).

3.  **Sección de Tamaños de Fuente:** Itera a través de una lista predefinida de tamaños de fuente, mostrando un ejemplo para cada uno.

4.  **Paleta de Colores:** Renderiza una parrilla con muestras de todos los colores definidos en el sistema de diseño. Cada muestra de color muestra su nombre y es interactiva.

---

## Lógica y Datos

La lógica de esta vista está orientada a la demostración dinámica de los estilos.

*   **Script:** **Está implementado con `<script setup lang="ts">` (TypeScript)**, lo que lo alinea con las mejores prácticas del proyecto.
*   **Estado Reactivo:**
    *   `isDarkMode: ref(false)`: Controla el estado actual del tema (claro/oscuro).
*   **Datos Estáticos:**
    *   `fontFamilies`, `fontSizes`, `colors`: Arrays y objetos que definen los elementos de diseño a mostrar. Son la fuente de verdad para la generación del contenido de la página.
*   **Interactividad (Modo Oscuro):**
    *   La función `toggleDarkMode` cambia el estado de `isDarkMode`, añade o elimina la clase `dark` del `<html>` y guarda la preferencia en `localStorage`.
    *   En `onMounted`, el componente comprueba la preferencia del usuario en `localStorage` o la configuración del sistema operativo para establecer el tema inicial.
*   **Función `getColorClasses`**: 
    *   Una función clave que recibe un nombre de color y devuelve un objeto con las clases de TailwindCSS para el texto y el fondo (`text-primary-light`, `bg-brand-accent`, etc.).
    *   **Propósito:** Esta función es crucial para evitar que el proceso de purga de TailwindCSS elimine las clases de color que se usan de forma dinámica, garantizando que todos los colores se muestren correctamente en el build de producción.

**ID:** `Muestrario_Tipografico`
**Ruta del Fichero:** `app/src/views/TypographyShowcase.vue`

---

## 1. Propósito y Descripción General

Esta es una vista de desarrollo y referencia interna. Su propósito es mostrar todos los estilos tipográficos definidos en la `Guía de Estilo` y configurados en `tailwind.config.js`. Sirve para verificar que los estilos se aplican correctamente y para mantener la consistencia visual.

No está enlazada desde la navegación principal y solo es accesible a través de su ruta directa.

## 2. Fuente de Datos

No aplica. La vista contiene elementos de texto de ejemplo para cada estilo tipográfico.

## 3. Estructura y Componentes

- **`PageLayout`**: Componente principal que envuelve el contenido.
- **`PageHeader`**: Muestra el título de la página.
- **Elementos de Texto**: Múltiples etiquetas (`h1`, `h2`, `p`, `blockquote`, etc.) con las clases de Tailwind correspondientes para mostrar la jerarquía visual.
