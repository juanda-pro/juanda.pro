# Especificaciones: Página de Contacto

**Versión:** 1.1
**Componente Asociado:** `src/views/ContactView.vue`

---

## 1. Propósito y Funcionalidad

Esta vista proporciona un formulario de contacto para que los usuarios puedan enviar mensajes directamente desde el sitio web. El diseño se centra en la simplicidad y la claridad para facilitar la comunicación.

## 2. Fuente de Datos

Esta página es **completamente estática** y no está conectada a ninguna fuente de datos externa como Supabase.

- **Lógica del Formulario:** El formulario es una implementación puramente visual. Los atributos `action="#"` y `method="POST"` son placeholders. **No hay lógica de envío implementada**; al hacer clic en "Enviar Mensaje", la página simplemente se recargará sin enviar datos a ningún servidor.

## 3. Estructura y Componentes

La vista se organiza en una única sección principal que contiene el título y el formulario.

1.  **Cabecera:**
    - **Componentes:** No utiliza `PageHeader.vue`. El título y el subtítulo están definidos directamente en la plantilla.
    - **Contenido:** Un `<h1>` principal y un párrafo introductorio.

2.  **Formulario:**
    - **Contenedor:** El formulario se presenta dentro de una "tarjeta" visualmente diferenciada con fondo, borde y sombra para destacarlo.
    - **Componentes Base Utilizados:**
        - `SectionWrapper.vue`: Envuelve toda la vista.
        - `BaseInput.vue`: Para los campos de nombre, email y asunto.
        - `BaseTextarea.vue`: Para el campo del mensaje.
        - `BaseButton.vue`: Para el botón de envío.
    - **Campos:**
        - Nombre (texto)
        - Email (email)
        - Asunto (texto)
        - Mensaje (textarea)

## 4. Lógica Reactiva

- **Ninguna.** Este componente no utiliza `script setup` para lógica reactiva (estado, métodos, etc.), solo para la importación de componentes. Es una vista de presentación.