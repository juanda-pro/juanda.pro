# Especificaciones de Diseño y UX: Blog

Este documento detalla el comportamiento y la maquetación de la página principal del Blog (`/blog`), que muestra el listado de artículos.

---

## 1. Lógica de Datos y Estados

La página del Blog es dinámica y obtiene su contenido directamente desde la base de datos de Supabase.

- **Fuente de Datos:** Los artículos se cargan desde la tabla `articles` de Supabase.
- **Consulta:** Se seleccionan todos los artículos cuya `published_at` sea anterior o igual a la fecha actual. Los resultados se ordenan por `relevance` (ascendente, para destacar los `featured`) y luego por `published_at` (descendente).
- **Gestión de Estados de la Interfaz:** El componente gestiona varios estados para ofrecer una experiencia de usuario robusta:
  - **Estado de Carga (`isLoading`):** Muestra un mensaje "Cargando artículos..." mientras se espera la respuesta de Supabase.
  - **Estado de Error (`errorMessage`):** Si la consulta a la base de datos falla, se muestra un mensaje de error claro.
  - **Estado Vacío:** Si no se encuentran artículos (ya sea inicialmente o después de aplicar filtros), se muestra el mensaje "No hay artículos que coincidan con tu búsqueda o aún no se han publicado."

---

## 2. Estructura de la Página (`BlogView.vue`)

- **Cabecera:** La página utiliza el componente `PageHeader` para mostrar el título "Blog", seguido de un párrafo introductorio que define el propósito de la sección.
- **Layout General:** La página presenta una lista de artículos en una única columna vertical.
- **Contenedor:** Los artículos se muestran dentro de un contenedor de ancho máximo (`max-w-4xl`) centrado, con un espaciado vertical consistente (`space-y-12` o `space-y-16`) entre cada tarjeta.
- **Filtros:** Debajo de la cabecera, se encuentran los botones de filtro por categorías, que permiten al usuario refinar la lista de artículos mostrados.

---

## 3. Comportamiento de la Tarjeta de Artículo (`ArticleCard.vue`)

El diseño de la tarjeta está inspirado en la simplicidad y claridad.

### 3.1. Diseño y Layout

- **Estructura:** La tarjeta es un componente `flex` que adapta su dirección según el tamaño de la pantalla.
  - **Escritorio (`md:` y superior):** Se muestra como una fila (`flex-row`), con la imagen a la izquierda y el contenido de texto a la derecha.
  - **Móvil:** Se apila verticalmente (`flex-col`), con la imagen en la parte superior y el texto debajo.

- **Contenido:**
  - **Imagen:** Mantiene una relación de aspecto de vídeo (`aspect-video`) y tiene un efecto de zoom sutil al pasar el cursor (`group-hover:scale-105`).
  - **Categoría:** Se muestra encima del título.
  - **Título:** Es el elemento principal. Cambia al color de acento de la marca al pasar el cursor.
  - **Descripción/Resumen:** Visible en escritorio, oculto en móvil para simplificar la interfaz.
  - **Fecha:** Se muestra en la parte inferior con un color de texto terciario.

### 3.2. Interacción

- **Cursor:** Toda la tarjeta es un área clicable que lleva al detalle del artículo.
- **Hover:** La interacción principal se centra en el `group-hover` de Tailwind:
  - La imagen se escala ligeramente.
  - El título cambia de color.
