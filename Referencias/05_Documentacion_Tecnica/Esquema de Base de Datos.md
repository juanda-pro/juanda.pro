# Esquema de Base de Datos (Supabase)

Este documento es la fuente única de la verdad para la estructura de la base de datos del proyecto juanda.pro.

---

## Tabla: `articles`

Almacena todos los artículos del blog. **(Versión 1.1 - Sincronizada con el código)**

1.  `id` (PK)
    -   **Tipo:** `bigint`
    -   **Descripción:** Identificador único autoincremental.

2.  `created_at`
    -   **Tipo:** `timestampz`
    -   **Descripción:** Fecha y hora de creación del registro.

3.  `published_at`
    -   **Tipo:** `timestampz`
    -   **Descripción:** Fecha y hora de publicación. Usado para filtrar y mostrar solo los artículos cuya fecha es pasada.

4.  `title`
    -   **Tipo:** `text`
    -   **Descripción:** El título principal del artículo.

5.  `slug`
    -   **Tipo:** `text` (unique)
    -   **Descripción:** Versión del título para la URL (ej: `como-crear-un-blog`).

6.  `description`
    -   **Tipo:** `text`
    -   **Descripción:** Un resumen corto o entradilla para las tarjetas de vista previa.
    -   **Nota:** El componente `ArticleCard` espera este campo.

7.  `content`
    -   **Tipo:** `text`
    -   **Descripción:** El contenido completo del artículo, usualmente en HTML o Markdown.
    -   **Nota:** El componente `ArticleDetailView` espera este campo.

8.  `image_url`
    -   **Tipo:** `text`
    -   **Descripción:** URL de la imagen principal/de cabecera del artículo.

9.  `category`
    -   **Tipo:** `text`
    -   **Descripción:** La categoría principal del artículo (ej: `Productividad`, `IA`).

10. `is_published`
    -   **Tipo:** `boolean`
    -   **Por defecto:** `false`
    -   **Descripción:** Controla si un artículo es visible públicamente. Solo los artículos con este campo en `true` se mostrarán en el sitio web.
