# Especificaciones: Página de Contacto

**Versión:** 1.2
**Componente Asociado:** `app/src/views/ContactView.vue`

---

## 1. Propósito y Funcionalidad

Esta vista proporciona un formulario de contacto funcional para que los usuarios puedan enviar mensajes. Incluye manejo de estados de carga, éxito y error para ofrecer una experiencia de usuario completa.

## 2. Lógica de Envío

Actualmente, la lógica de envío a un backend **está simulada**, pero la estructura está preparada para una integración real con Supabase.

- **Función Clave:** `handleSubmit()`.
- **Simulación:** La función utiliza `setTimeout` para simular una llamada a la API. No envía datos reales, pero actualiza la UI para mostrar mensajes de éxito o error.
- **Preparado para Supabase:** La estructura del componente está lista para la integración con el cliente de Supabase del proyecto (ubicado en `@/supabaseClient.ts`), que sería el siguiente paso para habilitar el envío real de datos.

## 3. Estructura y Componentes

1.  **Cabecera:**
    - El título (`<h1>`) y el subtítulo están definidos directamente en la plantilla, dentro de un `SectionWrapper`.

2.  **Formulario:**
    - **Contenedor:** El formulario se presenta dentro de una "tarjeta" visualmente diferenciada con fondo, borde y sombra.
    - **Componentes Base Utilizados:**
        - `SectionWrapper.vue`: Envuelve toda la vista.
        - `BaseInput.vue`: Para los campos de nombre, email y asunto.
        - `BaseTextarea.vue`: Para el campo del mensaje.
        - `BaseButton.vue`: Para el botón de envío.
    - **Campos:** Nombre, Email, Asunto, Mensaje (todos requeridos).

## 4. Lógica Reactiva

El componente utiliza `<script setup>` para gestionar el estado del formulario de forma reactiva.

- **`form` (ref):** Un objeto que almacena los valores de todos los campos del formulario.
- **`isLoading` (ref):** Un booleano que controla el estado de "cargando" del botón de envío, desactivándolo para prevenir envíos múltiples.
- **`isSuccess` (ref):** Un booleano que controla la visibilidad del mensaje de éxito tras un envío correcto.
- **`errorMessage` (ref):** Una cadena de texto que muestra un mensaje de error si el envío (simulado) falla.