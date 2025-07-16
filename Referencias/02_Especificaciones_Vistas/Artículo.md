# Especificaciones: Detalle de Artículo

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
