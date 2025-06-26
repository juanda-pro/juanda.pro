# Especificaciones de Diseño y UX: Contacto

Este documento detalla la estructura y los componentes de la página de Contacto (`/contacto`), implementada en `ContactView.vue`.

---

## 1. Visión General

La página de Contacto está diseñada para ser un punto de comunicación directo y sin fricciones. Se centra en un único formulario claro y accesible para que los usuarios puedan enviar sus consultas fácilmente.

---

## 2. Estructura de la Página (`ContactView.vue`)

La vista se compone de una única sección principal contenida dentro de un `SectionWrapper`.

- **Layout General:** La página utiliza un diseño de una sola columna, centrado vertical y horizontalmente para enfocar la atención del usuario en el formulario.

### 2.1. Cabecera

- **Contenido:** La cabecera está integrada directamente en la vista y no utiliza un componente `PageHeader` separado.
  - **Título:** Un `<h1>` con el texto "¿Tienes algo en mente?".
  - **Subtítulo:** Un párrafo introductorio que invita a la conversación: "Me encantaría escucharte. Ya sea una idea, un proyecto o simplemente para saludar, este es el lugar."

### 2.2. Formulario de Contacto

- **Contenedor:** El formulario se presenta dentro de un contenedor estilizado con un fondo (`bg-surface-light`/`dark:bg-surface-dark`), bordes redondeados, un borde sutil y una sombra (`shadow-lg`) para darle profundidad y destacarlo del fondo de la página.

- **Componentes Utilizados:**
  - `BaseInput`: Para los campos de texto estándar (Nombre, Email, Asunto).
  - `BaseTextarea`: Para el campo de mensaje de múltiples líneas.
  - `BaseButton`: Para el botón de envío.

- **Campos del Formulario:**
  - **Nombre:** Campo de texto.
  - **Email:** Campo de tipo `email` para validación básica.
  - **Asunto:** Campo de texto.
  - **Mensaje:** Área de texto con 6 filas de altura.

- **Botón de Envío:**
  - Un `BaseButton` con el texto "Enviar Mensaje" que ocupa todo el ancho (`w-full`) del contenedor del formulario.

- **Funcionalidad:** El formulario es actualmente una implementación visual (`action="#" method="POST"`). La lógica para procesar y enviar los datos no está conectada a ningún servicio de backend.