# Esquema de Base de Datos (Supabase)

Este documento es la fuente única de la verdad para la estructura de la base de datos del proyecto juanda.pro.

---

## Tabla: `articles`

Almacena todos los artículos del blog.

1.  `id`
    -   **Tipo:** `bigint` (PK)
    -   **Descripción:** Identificador único autoincremental.
    -   **Notas:** Generado por Supabase.

2.  `created_at`
    -   **Tipo:** `timestampz`
    -   **Descripción:** Fecha y hora de creación del registro.
    -   **Notas:** Generado por Supabase.

3.  `updated_at`
    -   **Tipo:** `timestampz`
    -   **Descripción:** Fecha y hora de la última actualización.
    -   **Notas:** Actualizado automáticamente.

4.  `publish_date`
    -   **Tipo:** `date`
    -   **Descripción:** La fecha de publicación del artículo que se muestra al usuario.

5.  `title`
    -   **Tipo:** `text`
    -   **Descripción:** El título principal del artículo.
    -   **Notas:** No puede ser nulo.

6.  `slug`
    -   **Tipo:** `text`
    -   **Descripción:** Versión del título para la URL (ej: `como-crear-un-blog`).
    -   **Notas:** Debe ser único.

7.  `summary`
    -   **Tipo:** `text`
    -   **Descripción:** Un resumen corto o entradilla del artículo para las tarjetas de vista previa.

8.  `body`
    -   **Tipo:** `text`
    -   **Descripción:** El contenido completo del artículo en formato Markdown.
    -   **Notas:** Puede contener "shortcodes" para componentes complejos.

9.  `image_url`
    -   **Tipo:** `text`
    -   **Descripción:** URL de la imagen principal/de cabecera del artículo.

10. `category`
    -   **Tipo:** `text`
    -   **Descripción:** La categoría principal del artículo (ej: `Productividad`, `IA`).

11. `tags`
    -   **Tipo:** `array` de `text`
    -   **Descripción:** Una lista de etiquetas o palabras clave secundarias.
    -   **Notas:** Ejemplo: `['api', 'automation']`

12. `article_type`
    -   **Tipo:** `integer`
    -   **Descripción:** Tipo de artículo para la maquetación (1: Destacado, 2: Importante, 3: Normal).
    -   **Notas:** Usado para el grid del blog.
