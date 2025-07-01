# Plan de Corrección: Sección Interactiva

Este documento describe las acciones específicas a tomar para alinear `ScrollingFeatures.vue` con la referencia de Guru, basándose en los hallazgos del informe de auditoría.

## 1. Correcciones en Layout de Escritorio (Desktop)

- **Acción 1.1 (Visual): Reemplazar iconos por imágenes.**
  - **Tarea:** Modificar el `v-for` que renderiza el `component :is="feature.icon"` para que en su lugar renderice una etiqueta `<img>`.
  - **Detalles:** La fuente de la imagen (`src`) provendrá de la propiedad `image_url` que ya existe en el objeto `pilares`.
  - **Nota:** Usaremos las URLs de `placehold.co` existentes como marcadores de posición temporales.

- **Acción 1.2 (Layout): Estilizar el contenedor de la imagen.**
  - **Tarea:** Añadir clases de Tailwind al `div` que envuelve la imagen para simular el estilo de la referencia.
  - **Clases propuestas:** `bg-surface-light dark:bg-surface-dark`, `rounded-2xl`, `shadow-lg`, `border border-border-light dark:border-border-dark`, `p-8` (o similar para el padding interno).

- **Acción 1.3 (Tipografía): Ajustar tamaño del título del pilar.**
  - **Tarea:** Cambiar la clase `text-5xl` en el `h3` del pilar por una más apropiada, como `text-3xl` o `text-4xl`.
  - **Objetivo:** Lograr una jerarquía visual más equilibrada y alineada con la referencia.

- **Acción 1.4 (Layout): Ajustar altura de los paneles de texto.**
  - **Tarea:** Reemplazar la clase `min-h-screen` por clases de padding vertical, como `py-32` o `py-48`.
  - **Objetivo:** Conseguir una longitud de scroll más natural y dependiente del contenido, no de la altura de la ventana.

## 2. Correcciones en Layout de Móvil (Mobile)

- **Acción 2.1 (Estructura): Reordenar elementos en el DOM.**
  - **Tarea:** En el bloque `md:hidden`, mover el `div` que contiene la imagen para que aparezca *antes* del `h3` (título).
  - **Objetivo:** Replicar la estructura `Imagen -> Título -> Párrafo` de la referencia.

- **Acción 2.2 (Visual): Ajustar el tamaño de la imagen.**
  - **Tarea:** Eliminar la clase `max-w-xs` del contenedor de la imagen en móvil y asegurar que la imagen ocupe el ancho completo (`w-full`).
  - **Detalles:** La imagen debe ser un elemento `<img>`, no un `component`. Se aplicará un `aspect-ratio` (ej. `aspect-video`) y `object-cover` para un ajuste correcto.
  - **Objetivo:** Dar a la imagen la prominencia visual que tiene en el diseño de referencia.
