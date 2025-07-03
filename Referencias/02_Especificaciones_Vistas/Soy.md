# Especificaciones de Diseño y UX: Soy

**Versión:** 1.1
**Componente Asociado:** `app/src/views/SoyView.vue`

---

## 1. Visión General

La página "Soy" es una presentación personal con un enfoque narrativo y visual. Su objetivo es transmitir la filosofía del autor de una manera directa y personal, combinando un titular potente, una imagen destacada y un texto de manifiesto.

---

## 2. Estructura de la Página (`SoyView.vue`)

La vista se construye en tres partes principales:

### 2.1. Cabecera Principal

- **Componente:** `SectionWrapper`
- **Propósito:** Captar la atención con una declaración de intenciones clara y directa.
- **Layout:** Un bloque de texto centrado.
- **Contenido:**
  - **Título (`<h1>`):** "Soy un explorador"
  - **Subtítulo (`<p>`):** "Y esta es la bitácora honesta de mi viaje."

### 2.2. Imagen Destacada

- **Componente:** No utiliza `SectionWrapper`. Es un `div` con un contenedor interno.
- **Propósito:** Crear un fuerte impacto visual y establecer un tono de "viaje" o "exploración".
- **Layout:** Una imagen ancha (`max-w-4xl`) centrada, superpuesta sobre un elemento de fondo decorativo.
- **Efectos Visuales:**
  - **Fondo Decorativo:** Un `div` con un color de acento y una ligera rotación (`-rotate-2`) que crea un marco dinámico detrás de la imagen principal.
  - **Imagen Principal:** Una imagen (placeholder) con esquinas redondeadas y una sombra pronunciada (`shadow-2xl`).

### 2.3. Manifiesto / Texto Narrativo

- **Componente:** `SectionWrapper`
- **Propósito:** Desarrollar la historia y la filosofía presentadas en la cabecera.
- **Layout:** Un único bloque de texto centrado (`max-w-3xl`) que utiliza las clases de Tailwind `prose` para un formato de artículo legible.
- **Contenido Estructurado:**
  - **Párrafo Principal (`lead`):** Un párrafo inicial con un tamaño de fuente mayor para enganchar al lector.
  - **Cuerpo del Texto:** Párrafos que desarrollan la historia detrás de `juanda.pro`.
  - **Lista de Valores:** Un título `<h2>` ("Los valores de este proyecto:") seguido de una lista no ordenada (`<ul>`) que detalla los tres valores clave: Dignificación, Pensamiento crítico y Humildad pragmática.
  - **Cierre:** Un párrafo final que sirve como agradecimiento e invitación a la comunidad.