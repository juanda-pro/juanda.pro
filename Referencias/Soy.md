# Especificaciones de Diseño y UX: Soy

Este documento detalla la estructura y los componentes de la página "Soy" (`/soy`), implementada en `SoyView.vue`.

---

## 1. Visión General

La página "Soy" es una presentación personal con un enfoque narrativo y visual. Su objetivo es transmitir la filosofía del autor de una manera directa y personal, combinando un titular potente, una imagen destacada y un texto de manifiesto.

---

## 2. Estructura de la Página (`SoyView.vue`)

La vista se construye en tres actos visuales principales dentro de un `SectionWrapper`.

### 2.1. Cabecera Principal

- **Propósito:** Captar la atención con una declaración de intenciones clara y directa.
- **Layout:** Un bloque de texto centrado con un padding vertical significativo.
- **Contenido:**
  - **Título (`<h1>`):** "No soy un gurú. Soy un explorador."
  - **Subtítulo (`<p>`):** "Y este es el mapa de mi viaje."

### 2.2. Imagen Destacada

- **Propósito:** Crear un fuerte impacto visual y establecer un tono de "viaje" o "exploración".
- **Layout:** Una imagen ancha (`max-w-4xl`) centrada, superpuesta sobre un elemento de fondo decorativo.
- **Efectos Visuales:**
  - **Fondo Decorativo:** Un `div` con un color de acento y una ligera rotación (`-rotate-2`) que crea un marco dinámico detrás de la imagen principal.
  - **Imagen Principal:** Una imagen (actualmente un placeholder) con esquinas redondeadas y una sombra pronunciada (`shadow-2xl`) que la hace destacar.

### 2.3. Manifiesto / Texto Narrativo

- **Propósito:** Desarrollar la historia y la filosofía presentadas en la cabecera.
- **Layout:** Un único bloque de texto centrado (`max-w-3xl`) que utiliza las clases de la tipografía de Tailwind (`prose`) para un formato de artículo legible y elegante.
- **Contenido Estructurado:**
  - **Párrafo Principal (`lead`):** Un párrafo inicial con un tamaño de fuente mayor para enganchar al lector.
  - **Cuerpo del Texto:** Varios párrafos que desarrollan la historia detrás de `juanda.pro`.
  - **Lista de Compromisos:** Un título `<h2>` ("Mi compromiso es simple:") seguido de una lista no ordenada (`<ul>`) que detalla los tres compromisos clave del autor.
  - **Cierre:** Un párrafo final que sirve como agradecimiento e invitación a la comunidad.