# Especificación de la Vista: Detalle de Artículo (`ArticleDetailView.vue`)

**Versión:** 1.0
**Ruta:** `/blog/:slug` (Ruta dinámica)
**Estado:** Activa

---

## 1. Propósito y Funcionalidad

Esta vista es la plantilla para mostrar un único artículo del blog. Su función es obtener los datos de un artículo específico desde el backend (Supabase) basándose en el `slug` proporcionado en la URL, y renderizarlo de forma limpia, legible y bien estructurada.

---

## 2. Estructura de Componentes

1.  **Contenedor Principal (`PageLayout`):**
    *   La vista completa está envuelta en el `PageLayout` para mantener la consistencia con el resto del sitio.

2.  **Hero/Cabecera del Artículo:**
    *   **Contenido:** Muestra el título principal (`H1`) del artículo. También presenta metadatos importantes como la fecha de publicación.

3.  **Cuerpo del Artículo:**
    *   **Lógica:** El contenido del artículo, que está en formato HTML/Markdown, se obtiene de la base de datos.
    *   **Renderizado:** Se utiliza la directiva `v-html` de Vue para renderizar este contenido dinámico de forma segura.
    *   **Estilizado (`prose`):** El contenedor del contenido del artículo utiliza las clases del plugin `@tailwindcss/typography` (e.g., `prose dark:prose-invert`). Esto aplica automáticamente un estilo tipográfico de alta calidad a todos los elementos del artículo (párrafos, encabezados, listas, citas, bloques de código), garantizando una legibilidad y estética excelentes sin necesidad de estilos manuales.

---

## 3. Lógica de Datos

*   **Carga Dinámica:** Al montarse el componente, se utiliza el `slug` de la ruta (`useRoute().params.slug`) para realizar una consulta a la tabla `articles` de Supabase.
*   **Gestión de Estados:** La vista maneja un estado de carga mientras se obtienen los datos. También gestiona el caso de que un artículo no se encuentre (error 404), redirigiendo o mostrando un mensaje apropiado.

---

## 4. Auditoría de Calidad

*   **CSS:** Se ha verificado que no existen reglas CSS vacías. El uso de `@apply` se ha minimizado en favor de las clases de utilidad directamente en la plantilla, siguiendo las mejores prácticas de TailwindCSS.
*   **Buenas Prácticas:** El código sigue los estándares de Vue 3 con Composition API.

---

## Estructura y Componentes

La vista no utiliza un `PageLayout` estándar, sino que define su propia estructura para maximizar el espacio de lectura. Se compone de:

1.  **Contenedor Raíz:** Un `div` principal que gestiona los estados de la vista:
    *   **Estado de Carga:** Muestra un mensaje "Cargando artículo..." mientras se obtienen los datos.
    *   **Estado de Error:** Muestra un mensaje de error si el artículo no se encuentra.
    *   **Contenido Principal:** Se muestra una vez que el artículo se ha cargado correctamente.

2.  **Barra de Navegación Rápida (Sticky):**
    *   Una barra superior que se vuelve pegajosa (`sticky`) al hacer scroll.
    *   Contiene el título del artículo (truncado) y un botón para volver a la página principal del blog.

3.  **Cabecera del Artículo:**
    *   Muestra la imagen principal del artículo (`<img>`).
    *   Presenta la categoría, el título completo (`H1`) y la fecha de publicación.

4.  **Contenido del Artículo (`article-content`):
    *   Un `div` que utiliza la directiva `v-html="article.content"` para renderizar el contenido HTML del artículo proveniente de la base de datos.
    *   Está estilizado con clases de `prose` de TailwindCSS para formatear automáticamente el texto (párrafos, listas, etc.).

5.  **Artículos Relacionados:**
    *   Una sección que muestra una selección de otros artículos para fomentar la navegación continua.

6.  **Botón "Volver Arriba":**
    *   Un botón flotante (`fixed`) en la esquina inferior derecha que permite al usuario volver rápidamente al inicio de la página.

---

## Lógica y Datos

*   **Script:** **Está implementado con `<script setup>` (JavaScript)**, no sigue el estándar de TypeScript del proyecto.
*   **Enrutamiento:** Utiliza `useRoute()` para acceder a los parámetros de la ruta (específicamente `route.params.slug`) y `useRouter()` para la navegación.
*   **Estado Reactivo:**
    *   `article: ref(null)`: Almacena el objeto del artículo una vez cargado.
    *   `relatedArticles: ref([])`: Almacena los artículos relacionados.
    *   `isLoading: ref(true)`: Controla la visibilidad del estado de carga.
    *   `error: ref(null)`: Almacena el mensaje de error si ocurre un problema.
*   **Función de Carga (`fetchArticleBySlug`)**: Función asíncrona que recibe un `slug`:
    1.  Establece `isLoading` a `true`.
    2.  Llama a `getArticleBySlug(slug)` para obtener los datos del artículo.
    3.  Si tiene éxito, puebla `article` y busca artículos relacionados.
    4.  Si falla, establece el mensaje de `error`.
    5.  Finalmente, establece `isLoading` a `false`.
*   **Ciclo de Vida y Reactividad (`watch`)**: 
    *   Se utiliza un `watch`er que observa cambios en `route.params.slug`.
    *   Cuando el `slug` cambia (por ejemplo, al navegar de un artículo a otro desde la sección de relacionados), el `watch`er invoca de nuevo a `fetchArticleBySlug` con el nuevo `slug`, recargando el contenido de la vista sin necesidad de una recarga completa de la página.

**Versión:** 1.3
**Componente Asociado:** `app/src/views/ArticleDetailView.vue`

---

## 1. Propósito y Funcionalidad

Esta vista renderiza un artículo de blog completo a partir de un `slug` dinámico en la URL. Su objetivo es ofrecer una experiencia de lectura inmersiva con tipografía cuidada y una estructura clara.

## 2. Fuente de Datos y Lógica

La vista obtiene los datos de forma dinámica desde un módulo de datos centralizado, lo que asegura la consistencia en toda la aplicación.

- **Fuente Centralizada:** Utiliza el módulo `@/data/articlesData.ts` para acceder a los datos de los artículos. La función `getArticleBySlug(slug)` se importa y se usa para encontrar el artículo correspondiente.
- **Lógica de Carga Reactiva:**
    - La vista utiliza `useRoute` para acceder al `slug` del artículo desde la URL.
    - Un `watch` observa los cambios en `route.params.slug`. Si el slug cambia, se dispara la función `fetchArticleBySlug` para cargar los datos del nuevo artículo.
    - Esto permite una navegación fluida entre artículos (por ejemplo, desde la sección de "artículo sugerido") sin necesidad de recargar la página.
- **Gestión de Estado:** Se utilizan referencias reactivas (`ref`) para `article`, `isLoading`, `errorMessage` y `suggestedArticle`.
- **Lógica del Artículo Sugerido:**
  - Después de cargar con éxito el artículo principal, la vista busca automáticamente un artículo para sugerir.
  - El criterio de selección es tomar el primer artículo publicado que no sea el que se está visualizando en ese momento.
  - Este artículo se muestra al final de la página para fomentar que el usuario continúe navegando por el blog.

### Unificación de la Fuente de Datos

Anteriormente, existía una inconsistencia donde esta vista y `BlogView.vue` utilizaban fuentes de datos separadas. Este problema **ha sido resuelto**.

- **Solución Implementada:** Ambas vistas ahora consumen datos del mismo módulo central (`@/data/articlesData.ts`), garantizando que la lista de artículos y las páginas de detalle siempre estén sincronizadas.

## 3. Estructura y Estilizado

- **Bloques:** La página se compone de cabecera, imagen destacada, cuerpo del contenido y una sección de artículo sugerido.
- **Renderizado de Contenido:** El cuerpo del artículo (`article.content`), que contiene HTML, se renderiza de forma segura usando `v-html`.
- **Estilo de Prosa:** Se utiliza `@tailwindcss/typography` (clase `prose`) con múltiples personalizaciones para elementos como la letra capital, títulos `h2`/`h3`, citas `blockquote` y subrayados decorativos, creando una experiencia de lectura rica y de marca.
