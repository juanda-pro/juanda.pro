# Especificaciones de Diseño y UX: Página de Inicio

Este documento detalla la estructura y los componentes de la página de Inicio (`/`), implementada en `HomeView.vue`.

---

## 1. Visión General

La página de inicio sirve como una introducción completa a la filosofía del proyecto. Está diseñada para captar la atención con un mensaje audaz, explicar la misión del sitio a través de tres pilares fundamentales y mostrar el contenido más reciente.

---

## 2. Desglose de Secciones

La vista se construye a partir de varios componentes `SectionWrapper` que organizan el contenido en bloques temáticos.

### 2.1. Hero Section

- **Propósito:** Captar la atención del visitante de inmediato con un mensaje provocador y humorístico.
- **Layout:** Ocupa la altura completa de la pantalla (`min-h-screen`) y centra el contenido vertical y horizontalmente.
- **Contenido:**
  - **Título:** `<h1>` con el texto "¡Despierta, que te come la IA!".
  - **Subtítulo:** Un párrafo que suaviza el tono: "😂 Es broma, pero sí es importante empezar a usar estas 'máquinas inteligentes' para no quedarnos atrás."
- **Animación:** El contenido aparece con una transición suave de opacidad y traslación (`translate-y`) al cargar la página.

### 2.2. Texto Puente

- **Propósito:** Conectar la idea inicial del "Hero" con la estrategia concreta que propone el sitio.
- **Contenido:** Dos párrafos que explican la convicción detrás del proyecto y presentan la estrategia de los tres pilares.

### 2.3. Sección de Pilares Temáticos

- **Propósito:** Detallar la estrategia central del sitio.
- **Layout:** Una sección con fondo oscuro (`bg-surface-dark`) que contiene un título y una cuadrícula de tres columnas.
- **Componente:** `FeatureCard.vue` se utiliza para cada pilar.
- **Contenido:**
  - **Título de la sección:** `<h2>` con el texto "Una estrategia para navegar el presente".
  - **Pilares:** Tres tarjetas, cada una con un icono de Heroicons, un título y un texto descriptivo. Los datos de los pilares están hardcodeados en el script de la vista.
    1.  Conócete y gobiérnate.
    2.  Descubre el mapa.
    3.  Toma acción.

### 2.4. Call to Action: Diagnóstico Personalizado

- **Propósito:** Ofrecer un recurso interactivo y de alto valor para captar el interés del usuario y guiarlo hacia una solución concreta.
- **Layout:** Una tarjeta destacada con un fondo degradado y contenido centrado, diseñada para llamar la atención.
- **Componente:** `BaseButton` para la llamada a la acción.
- **Contenido:**
  - **Icono:** Un icono de `SparklesIcon` para dar un toque visual atractivo.
  - **Título:** `<h2>` con el texto "Descubre tu Potencial de Automatización".
  - **Descripción:** Un párrafo que explica el beneficio del diagnóstico.
  - **Llamada a la Acción (CTA):** Un `BaseButton` con el texto "Iniciar Diagnóstico" que enlaza a la página `/diagnostico`.

### 2.5. Sección Quién Soy

- **Propósito:** Presentar al autor (Juanda) de una manera cercana y personal, generando confianza.
- **Layout:** Una cuadrícula de dos columnas en escritorio que se apila en móvil.
- **Contenido:**
  - **Columna Izquierda (Texto):** Un título `<h2>` "¡Hola! Soy Juanda." y un párrafo que explica su rol como "explorador" y el propósito de la web.
  - **Columna Derecha (Imagen):** Una imagen del autor con un efecto visual de un fondo rotado que se anima al pasar el cursor.

### 2.6. Sección de Contenido Destacado

- **Propósito:** Mostrar contenido relevante y práctico para inspirar al usuario.
- **Layout:** Un título centrado seguido de una cuadrícula de tres columnas.
- **Componente:** `MiniArticleCard.vue` para cada artículo.
- **Contenido:**
  - **Título de la sección:** `<h2>` con el texto "Un lugar al que volver".
  - **Subtítulo:** Un párrafo descriptivo: "Aprendizajes, reflexiones y herramientas prácticas para inspirarte a experimentar."
  - **Artículos:** Muestra una lista de artículos hardcodeados.

*(Nota: La sección de Newsletter mencionada en versiones anteriores de la documentación no se encuentra implementada en el código actual.)*
