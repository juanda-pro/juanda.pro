# Especificaciones: Página de Inicio

**Versión:** 1.2
**Componente Asociado:** `app/src/views/HomeView.vue`

---

## 1. Propósito y Funcionalidad

La página de inicio (`HomeView`) es la principal puerta de entrada al sitio. Su objetivo es presentar la propuesta de valor del proyecto de forma clara y atractiva, guiando al usuario a través de varias secciones temáticas que explican la misión, presentan al autor y muestran contenido relevante.

## 2. Fuente de Datos

La vista carga su contenido de forma mixta:

- **Contenido Estático:** Los datos para la sección de "Pilares Temáticos" (`pilares`) están definidos directamente en el script como un array estático.
- **Contenido Dinámico (Local):** Los artículos de la sección "Contenido Destacado" se cargan dinámicamente al montar el componente. Aunque la conexión a Supabase está actualmente desactivada, la lógica para obtener datos de una fuente externa está implementada.
    - Se utiliza la función `getPublishedArticles` del módulo `@/data/articlesData.ts` como fuente de datos temporal.
    - La función `fetchRecentArticles` se encarga de obtener los artículos, ordenarlos por fecha y seleccionar los 3 más recientes para mostrarlos.

## 3. Estructura y Componentes

La vista está construida como una secuencia de bloques, cada uno envuelto en un componente `SectionWrapper` para mantener la consistencia en el espaciado y el ancho. El orden correcto de las secciones es el siguiente:

1.  **Hero Section:**
    - **Propósito:** Captar la atención con un titular y subtítulo animados.
    - **Contenido:** Título y subtítulo principal.

2.  **Sección "Quién Soy":**
    - **Propósito:** Introducción personal del autor para generar confianza.
    - **Estructura:** Layout de dos columnas con una imagen a la izquierda y texto a la derecha.

3.  **Texto Puente:**
    - **Propósito:** Conectar la introducción con la estrategia de los tres pilares.

4.  **Sección de Pilares Temáticos:**
    - **Propósito:** Explicar la estrategia central del proyecto.
    - **Componente Clave:** `ScrollingFeatures.vue`.
    - **Lógica:** Recibe el array `pilares` y renderiza una sección interactiva con texto que se desplaza y una imagen fija que cambia.

5.  **Call to Action (CTA):**
    - **Propósito:** Dirigir al usuario a una acción de alto valor.
    - **Componente Clave:** `CtaCard.vue`.

6.  **Sección de Contenido Destacado:**
    - **Propósito:** Mostrar una selección de artículos para enganchar al lector.
    - **Componente Clave:** `MiniArticleCard.vue`.
    - **Lógica:** Itera sobre la referencia reactiva `recentArticles` para mostrar las tres tarjetas de artículos.

## 4. Lógica Reactiva

- **Carga de Artículos:** El componente utiliza la API de Composición de Vue para gestionar la carga de artículos:
    - `ref`: Se usa `recentArticles = ref<Article[]>([])` para crear una referencia reactiva que almacenará los artículos.
    - `onMounted`: Se utiliza para ejecutar la función `fetchRecentArticles()` una vez que el componente se ha montado en el DOM, poblando así la lista de artículos.
