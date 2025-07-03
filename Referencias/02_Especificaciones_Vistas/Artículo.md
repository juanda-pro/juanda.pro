# Especificaciones: Detalle de Artículo

**Versión:** 1.3
**Componente Asociado:** `app/src/views/ArticleDetailView.vue`

---

## 1. Propósito y Funcionalidad

Esta vista renderiza un artículo de blog completo a partir de un `slug` dinámico en la URL. Su objetivo es ofrecer una experiencia de lectura inmersiva con tipografía cuidada y una estructura clara.

## 2. Fuente de Datos y Estado Actual

Actualmente, la vista funciona con un **objeto de artículos hardcodeado** (`mockArticles`) que reside dentro del propio componente.

- **Lógica de Carga:** Una función `fetchMockArticle(slug)` busca el artículo correspondiente al `slug` de la URL dentro del objeto `mockArticles`.
- **Simulación de Red:** La carga se simula con un `setTimeout` para dar feedback visual al usuario (`isLoading`).
- **Preparado para Supabase:** La importación de Supabase y la lógica de `watch` sobre la ruta están implementadas pero comentadas, lo que indica que el plan es conectar esta vista a una base de datos.

### ¡ADVERTENCIA DE INCONSISTENCIA!

Existe una inconsistencia crítica en la gestión de datos del blog:

- **`ArticleDetailView.vue`** usa su propio objeto estático `mockArticles`.
- **`BlogView.vue`** (la lista de artículos) usa un array estático **diferente** en su función `loadMockData()`.

**Consecuencia:** Las dos vistas no comparten la misma fuente de datos. Un artículo puede existir en la lista pero no en la vista de detalle (o viceversa), lo que rompe la navegación y la integridad del blog. Este problema debe ser resuelto unificando la fuente de datos antes de pasar a producción.

## 3. Estructura y Estilizado

- **Bloques:** La página se compone de cabecera, imagen destacada, cuerpo del contenido y una sección de artículo sugerido.
- **Renderizado de Contenido:** El cuerpo del artículo (`article.content`), que contiene HTML, se renderiza de forma segura usando `v-html`.
- **Estilo de Prosa:** Se utiliza `@tailwindcss/typography` (clase `prose`) con múltiples personalizaciones para elementos como la letra capital, títulos `h2`/`h3`, citas `blockquote` y subrayados decorativos, creando una experiencia de lectura rica y de marca.
