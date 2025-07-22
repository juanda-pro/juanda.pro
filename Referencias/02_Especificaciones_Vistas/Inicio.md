# Especificación de la Vista: Inicio (`HomeView.vue`)

**Versión:** 2.0 (Post-Sprint 1)
**Ruta:** `/`
**Estado:** Activa y Refactorizada

---

## 1. Propósito y Funcionalidad

La página de inicio es la principal carta de presentación del sitio. Su objetivo es captar la atención del usuario, comunicar la propuesta de valor y guiarlo hacia las secciones clave. Está diseñada para ser visualmente impactante y altamente interactiva.

---

## 2. Estructura de Componentes

La vista se compone de una serie de secciones modulares, cada una con un propósito específico:

1.  **Hero Section:**
    *   **Componentes:** `SectionWrapper`, `HeaderBackground`.
    *   **Contenido:** Ocupa la mayor parte de la pantalla inicial (`min-h-[80vh]`). Presenta una imagen de fondo con un overlay degradado, un título principal (`H1`) con un subtítulo animado, y un párrafo descriptivo. El contenido textual tiene un efecto `backdrop-blur` para mejorar la legibilidad sobre la imagen.

2.  **Sección de Pilares (`ScrollingFeatures`):
    *   **Componente:** `ScrollingFeatures.vue`.
    *   **Contenido:** Presenta los tres pilares o servicios principales. Los títulos y descripciones están alineados a la izquierda para una mejor legibilidad, eliminando el subrayado decorativo anterior.

3.  **Sección de Texto Puente:**
    *   **Componente:** `SectionWrapper`.
    *   **Contenido:** Un bloque de texto que sirve como transición entre la sección de pilares y la llamada a la acción final. Anteriormente contenía una línea decorativa que fue extraída al componente `DecorativeLine.vue` y eliminada de la vista para simplificar el diseño.

4.  **Llamada a la Acción (`CtaCard`):
    *   **Componente:** `CtaCard.vue`.
    *   **Contenido:** Una tarjeta de llamada a la acción (CTA) centrada y simplificada. Contiene un título, una descripción y un botón principal. Se ha mejorado el espaciado, la jerarquía visual y el responsive design.

---

## 3. Decisiones de Diseño y Refactorización (Post-Sprint 1)

*   **Eliminación de Líneas Decorativas:** Se eliminó una línea vertical que conectaba secciones y una línea horizontal en la sección de texto puente para lograr un diseño más limpio y minimalista. El código de la línea horizontal se encapsuló en `DecorativeLine.vue` para su posible reutilización.
*   **Alineación de Contenido:** Se cambió la alineación de texto de `center` a `left` en la sección de pilares (`ScrollingFeatures`) para mejorar la estructura y la experiencia de lectura.
*   **Simplificación del CTA:** Se eliminó el icono de regalo y se centró todo el contenido del `CtaCard` para un mensaje más directo y claro.
*   **Reorientación de Flecha:** Se actualizó un icono de flecha para que apunte hacia abajo, mejorando la guía visual del usuario a través de la página.

---

## 4. Componentes Reutilizables Clave

*   **`SectionWrapper.vue`:** Proporciona un contenedor estandarizado que gestiona el padding y el ancho máximo para todas las secciones, garantizando la consistencia visual.
*   **`CtaCard.vue`:** Componente dedicado para la llamada a la acción, ahora más limpio y centrado.
*   **`ScrollingFeatures.vue`:** Muestra los pilares de valor de forma interactiva.
*   **`DecorativeLine.vue`:** Componente creado para encapsular líneas decorativas, aunque actualmente no se use en esta vista.

**Versión:** 2.1
**Componente Asociado:** `app/src/views/HomeView.vue`
**Última Actualización:** 22/07/2025

## Descripción General

La página de inicio (`HomeView.vue`) es la vista principal y la puerta de entrada a la aplicación. Su propósito es captar la atención del usuario, presentar la propuesta de valor, mostrar los pilares de contenido, ofrecer los artículos más recientes del blog y dirigir al usuario hacia una llamada a la acción (CTA) clara.

La vista está construida como una composición de varios componentes especializados, orquestados dentro de un `PageLayout`.

---

## Estructura y Componentes

La vista se organiza en las siguientes secciones, cada una gestionada por un componente específico:

1.  **`PageLayout`**: Componente raíz que envuelve toda la vista. Se configura con `remove-padding-top="true"` para que el `HeroSection` ocupe todo el espacio superior sin márgenes.

2.  **`HeroSection`**: La sección principal de bienvenida. Ocupa la parte superior de la página y contiene:
    *   Un título principal (`H1`) llamativo.
    *   Un subtítulo o párrafo descriptivo.
    *   Una imagen de fondo (`HeaderBackground`).
    *   Botones de llamada a la acción primarios.

3.  **Sección de Transición (Texto Puente)**:
    *   Un bloque de texto centrado que sirve como nexo entre el hero y el contenido principal.
    *   Utiliza `SectionWrapper` para mantener la consistencia en los espaciados.
    *   Incluye elementos decorativos sutiles (líneas y fondos con transparencia) para guiar la vista del usuario.

4.  **`ScrollingFeatures`**: Una sección interactiva que presenta los pilares o temas principales del sitio.
    *   Muestra una lista de "pilares" (ej. "Mentalidad", "Inteligencia Artificial", "Productividad").
    *   A medida que el usuario hace scroll, el contenido de texto de cada pilar se actualiza mientras una imagen destacada permanece fija.

5.  **`RecentArticles`**: Muestra una vista previa de los últimos artículos publicados en el blog.
    *   Utiliza `SectionWrapper` para el layout.
    *   Contiene un título de sección (`H2`).
    *   Renderiza una lista de `ArticleCard`, pasando los datos de los artículos recuperados.

6.  **`CtaCard`**: La sección final de llamada a la acción.
    *   Presenta un título y un párrafo persuasivo para animar al usuario a contactar o realizar una acción específica.
    *   Incluye un botón principal que destaca visualmente.

---

## Lógica y Datos

La lógica del componente se centra en la obtención y presentación de los artículos recientes.

*   **Script:** Utiliza `<script setup lang="ts">`, adhiriéndose al estándar de TypeScript del proyecto.
*   **Interface:** Define una interfaz local `Article` para tipar los datos de los artículos que se reciben.
*   **Estado Reactivo:** Se utiliza `recentArticles = ref<Article[]>([])` para almacenar la lista de artículos que se pasarán al componente `RecentArticles`.
*   **Función de Carga (`fetchRecentArticles`)**: Es una función asíncrona que:
    1.  Llama a `getPublishedArticles()` del módulo `articlesData` para obtener todos los artículos.
    2.  Ordena los artículos por fecha de publicación en orden descendente.
    3.  Toma los 3 primeros artículos del array ordenado.
    4.  Asigna el resultado al estado reactivo `recentArticles`.
*   **Ciclo de Vida:** La función `fetchRecentArticles()` se invoca dentro del hook `onMounted`, asegurando que los datos se cargan tan pronto como el componente se monta en el DOM.

**Versión:** 2.0
**Componente Asociado:** `app/src/views/HomeView.vue`
**Última Actualización:** 19/07/2025

---

## 1. Propósito y Funcionalidad

La página de inicio (`HomeView`) es la principal puerta de entrada al sitio. Su objetivo es presentar la propuesta de valor del proyecto de forma clara y atractiva, guiando al usuario a través de varias secciones temáticas que explican la misión, presentan al autor y muestran contenido relevante.

## 2. Fuente de Datos

La vista carga su contenido de forma mixta:

- **Contenido Estático:** Los datos para la sección de "Pilares Temáticos" (`pilares`) están definidos directamente en el script como un array estático con 3 elementos que incluyen título, texto descriptivo, imagen y clase de color.
- **Contenido Dinámico (Local):** Los artículos de la sección "Artículos Destacados" se cargan dinámicamente al montar el componente. La conexión a Supabase está desactivada y se usa datos locales.
    - Se utiliza la función `getPublishedArticles` del módulo `@/data/articlesData.ts` como fuente de datos.
    - La función `fetchRecentArticles` obtiene los artículos, los ordena por fecha de publicación (más reciente primero) y selecciona los 3 más recientes.
- **Imagen de Cabecera:** Se importa una imagen estática (`HeaderBackground`) desde `../assets/cabecera_inicio.jpeg`.

## 3. Estructura y Componentes

La vista está construida como una secuencia de bloques, cada uno envuelto en un componente `SectionWrapper` para mantener la consistencia en el espaciado y el ancho. El orden de las secciones es:

1.  **Hero Section:**
    - **Propósito:** Captar la atención con un titular impactante y subtítulo explicativo.
    - **Contenido:** 
      - Título: "¡Despierta, que te come la iA!" (con "iA" animado con `animate-pulse`)
      - Subtítulo: "Vale, es broma... pero solo a medias. Las maquinas inteligentes evolucionan rápido, y lo mejor es empezar a aprovechar su potencial en lugar de dejar que nos convierta en sus esclavos."
    - **Características:** Imagen de fondo con overlay, contenido centrado en tarjeta con backdrop-blur, animaciones de entrada con Transition, flecha animada para indicar scroll.
    - **Configuración:** `spacing="none"`, altura mínima 80vh, texto blanco.

2.  **Sección "Quién Soy":**
    - **Propósito:** Introducción personal del autor para generar confianza.
    - **Estructura:** Grid de 2 columnas (1 en móvil) con imagen a la izquierda y texto a la derecha.
    - **Contenido:**
      - Título: "¡Hola! Soy Juanda." (con subrayado gradiente)
      - Texto: Presentación personal con negritas y cursivas específicas
      - Enlace: "Conoce más sobre mí" que dirige a `/soy`
    - **Imagen:** Placeholder con efectos hover, fondos decorativos rotativos y elementos adicionales.
    - **Decoración:** Elementos de fondo blur, elemento decorativo inferior de conexión.

3.  **Texto Puente:**
    - **Propósito:** Conectar la introducción con la estrategia de los tres pilares.
    - **Contenido:** Texto explicativo sobre la convicción del proyecto y la importancia de adaptarse.
    - **Diseño:** Tarjeta centrada con fondo semi-transparente, bordes suaves, decoraciones de fondo.
    - **Configuración:** `spacing="loose"`, centrado, con elementos decorativos.

4.  **Sección de Pilares Temáticos:**
    - **Propósito:** Explicar la estrategia central del proyecto.
    - **Título:** "Tres pilares simples para empezar" (con subrayado gradiente)
    - **Descripción:** Texto explicativo sobre los tres pasos personalizados.
    - **Componente Clave:** `ScrollingFeatures.vue` que recibe el array `pilares`.
    - **Decoración:** Elementos de fondo blur, elemento decorativo inferior.

5.  **Call to Action (CTA):**
    - **Propósito:** Dirigir al usuario a crear su mapa personalizado.
    - **Componente:** `CtaCard.vue` con:
      - Título: "Crea tu mapa"
      - Descripción: "Responde 15 preguntas y obtén un mapa inicial personalizado..." (con saltos de línea)
      - Botón: "Obtener" (enlace a "#")
    - **Efectos:** Hover scale, elementos decorativos de fondo, indicador visual superior.

6.  **Sección de Artículos Destacados:**
    - **Propósito:** Mostrar una selección de artículos para enganchar al lector.
    - **Título:** "Artículos destacados" (con subrayado gradiente)
    - **Descripción:** "Aprendizajes, herramientas y reflexiones honestas..."
    - **Componente:** `MiniArticleCard.vue` en grid de 3 columnas (1 en móvil)
    - **Enlace:** "Ver todos los artículos" que dirige a `/blog`
    - **Fondo:** `bg-surface-light dark:bg-surface-dark` con decoraciones.

## 4. Lógica Reactiva y Técnica

- **Imports:** Vue Composition API (`ref`, `onMounted`), componentes, iconos de Heroicons, imagen de cabecera.
- **Interface:** `Article` con propiedades slug, title, category, image_url, published_at, description opcional.
- **Estado Reactivo:** `recentArticles = ref<Article[]>([])` para almacenar los artículos.
- **Función de Carga:** `fetchRecentArticles()` que:
  - Obtiene artículos de `getPublishedArticles()`
  - Los ordena por fecha descendente
  - Toma los primeros 3
  - Maneja errores con console.error
- **Ciclo de Vida:** `onMounted()` ejecuta `fetchRecentArticles()`
- **Configuración de Layout:** `PageLayout` con `:remove-padding-top="true"`
