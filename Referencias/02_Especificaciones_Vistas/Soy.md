# Especificaciones de Diseño y UX: Soy

**Versión:** 2.0
**Componente Asociado:** `app/src/views/SoyView.vue`

---

## 1. Visión General

La página "Soy" es una presentación personal con un enfoque narrativo y visual. Su objetivo es transmitir la identidad y filosofía del autor de una manera directa y personal, combinando un titular claro, una imagen destacada y textos que comunican valores y propósito.

---

## 2. Estructura de la Página (`SoyView.vue`)

La vista se construye en cuatro partes principales:

### 2.1. Cabecera Principal

- **Componente:** `SectionWrapper`
- **Propósito:** Presentar al autor y su propósito de forma clara y directa.
- **Layout:** Un bloque de texto centrado.
- **Contenido:**
  - **Título (`<h1>`):** "Hola, soy Juanda."
  - **Subtítulo (`<p>`):** "Un explorador práctico de la tecnología que ayuda a personas como tú a automatizar procesos y ganar control en un mundo que cambia rápido."

### 2.2. Imagen Destacada

- **Componente:** `SectionWrapper` con un `div` interno.
- **Propósito:** Crear un impacto visual que refuerce la identidad del autor.
- **Layout:** Una imagen ancha (`max-w-4xl`) centrada, superpuesta sobre un elemento de fondo decorativo.
- **Efectos Visuales:**
  - **Fondo Decorativo:** Un `div` con un color de acento y una ligera rotación (`-rotate-2`) que crea un marco dinámico detrás de la imagen principal.
  - **Imagen Principal:** Una imagen con esquinas redondeadas y una sombra pronunciada (`shadow-2xl`).

### 2.3. Introducción Personal

- **Componente:** `SectionWrapper`
- **Propósito:** Presentar al autor de manera más personal y establecer su experiencia y enfoque.
- **Layout:** Un bloque de texto centrado (`max-w-3xl`) que utiliza las clases de Tailwind `prose` para un formato legible.
- **Contenido:**
  - **Párrafo Principal:** Presentación personal con nombre completo y descripción de intereses profesionales.
  - **Párrafo Secundario:** Explicación del propósito del sitio y el valor que ofrece a los visitantes.

### 2.4. Sección de Valores

- **Componente:** `SectionWrapper`
- **Propósito:** Comunicar los principios y valores que guían el trabajo del autor.
- **Layout:** Un bloque de texto centrado (`max-w-3xl`) con formato de artículo legible.
- **Contenido Estructurado:**
  - **Título (`<h2>`):** "Mi brújula"
  - **Párrafo Introductorio:** Descripción del enfoque general y filosofía de trabajo.
  - **Subtítulo:** "Lo que me mueve:"
  - **Lista de Valores:** Una lista no ordenada (`<ul>`) que detalla tres valores clave: Honestidad práctica, Colaboración abierta y Equilibrio sostenido.
  - **Cierre:** Un párrafo final que sirve como agradecimiento e invitación a explorar el sitio.