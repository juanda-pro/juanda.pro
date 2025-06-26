# Especificaciones de Diseño y UX: Página de Artículo

Este documento detalla el comportamiento y la maquetación de la vista de un artículo individual (`/blog/:slug`), implementada en `ArticleDetailView.vue`.

---

## 1. Estructura General

La página se compone de cuatro bloques principales dispuestos verticalmente:

1.  **Cabecera:** Contiene los metadatos del artículo.
2.  **Imagen Destacada:** Una imagen estática que sirve como portada.
3.  **Cuerpo del Artículo:** El contenido principal del post.
4.  **Artículo Sugerido:** Una sección para fomentar la navegación a otro artículo.

---

## 2. Desglose de Secciones

### 2.1. Cabecera

- Se sitúa en la parte superior de la página.
- Muestra la **categoría** con el color de acento de la marca.
- El **título (H1)** es el elemento más prominente.
- Debajo del título, se muestran la **fecha de publicación** y el **tiempo de lectura** estimado.

### 2.2. Imagen Destacada

- Es una imagen estática, no interactiva.
- Se muestra a todo lo ancho del contenedor principal (`max-w-5xl`).
- Mantiene una relación de aspecto de vídeo (`aspect-video`) y tiene esquinas redondeadas y una sombra sutil.

### 2.3. Cuerpo del Artículo

- El contenido se renderiza directamente desde un campo HTML (`v-html="article.content"`).
- La maquetación y el estilo del texto (tipografía, espaciado, colores) se gestionan globalmente a través del plugin `@tailwindcss/typography` (clase `prose`).
- Se han definido estilos personalizados para elementos como:
  - **Capitular:** La primera letra del primer párrafo es grande y usa el color de acento.
  - **Títulos (H2, H3):** Tienen un borde lateral con el color de acento.
  - **Citas en bloque (`blockquote`):** Tienen un fondo y borde distintivos.
  - **Imágenes insertadas (`figure`):** Pueden ocupar un ancho mayor que el texto para un efecto visual impactante.
  - **Subrayados personalizados:** Se usan clases de utilidad (`underline-yellow`, `underline-blue`) para aplicar estilos de subrayado específicos.

### 2.4. Artículo Sugerido

- Al final de la página, se muestra una sección `<aside>`.
- Contiene un título y una única tarjeta de artículo (el componente `ArticleCard.vue`) para sugerir la siguiente lectura.
