# Especificaciones: Página de Inicio

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
