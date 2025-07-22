# Especificación de la Vista: Contacto (`ContactoViewV2.vue`)

**Versión:** 2.0 (Post-Sprint 1)
**Ruta:** `/contacto`
**Estado:** Activa y Refactorizada

---

## 1. Propósito y Funcionalidad

Esta vista proporciona a los usuarios un medio directo para ponerse en contacto con Juan David. Incluye una introducción, un formulario de contacto interactivo y una sección final de llamada a la acción.

La funcionalidad clave es el formulario de contacto, que utiliza Supabase para el envío de datos y presenta una UX cuidada con estados de carga, éxito y error.

---

## 2. Estructura de Componentes

La vista está construida sobre `PageLayout` y se compone de las siguientes secciones principales, encapsuladas en `SectionWrapper` para mantener la consistencia del layout:

1.  **Hero Section (`IntroCard`):**
    *   **Componente:** `IntroCard`.
    *   **Contenido:** Un título principal (`H1`) "Hablemos" y un párrafo introductorio que invita al diálogo.

2.  **Introducción y H2 Semántico:**
    *   **Componente:** `SectionWrapper`.
    *   **Contenido:** Un título secundario (`H2`) "¡Hablemos!" seguido de un texto que explica los motivos para iniciar una conversación.

3.  **Formulario de Contacto (`ContactForm`):
    *   **Componente:** `ContactForm.vue`.
    *   **Lógica Clave:**
        *   El formulario está inicialmente oculto tras un botón "Escribir ahora".
        *   Al hacer clic, el formulario se expande con una animación y la página hace **scroll automático** (`nextTick`) para enfocarlo.
        *   Gestiona los estados de envío: `idle`, `loading`, `success`, `error`.
        *   Realiza la validación de campos antes del envío.
        *   Muestra notificaciones (`toast`) al usuario para confirmar el resultado de la operación.

4.  **Quote Final:**
    *   **Componente:** `SectionWrapper`.
    *   **Contenido:** Una cita inspiradora o de cierre, visualmente separada del resto del contenido con un fondo y estilo distintivos.

---

## 3. Comportamiento y Lógica de UI

*   **Scroll Automático:** La función `handleFormButton` en `ContactoViewV2.vue` asegura que cuando el usuario decide escribir un mensaje, la vista se desplaza suavemente hasta el formulario, mejorando la usabilidad.
*   **Gestión de Estado:** El componente `ContactForm` es completamente autocontenido y maneja su propio estado reactivo (`ref`) para los campos del formulario, el estado de envío y los mensajes de error.
*   **Diseño Responsivo:** Todos los componentes y contenedores utilizan clases de TailwindCSS para garantizar una visualización óptima en todos los dispositivos, desde móviles hasta ordenadores de escritorio.

---

## 4. Dependencias Externas

*   **`@supabase/supabase-js`:** Para la comunicación con el backend y el envío de los datos del formulario.
*   **`vue-sonner`:** Para mostrar notificaciones no intrusivas (toasts) al usuario.

**Versión:** 3.1
**Componente Asociado:** `app/src/views/ContactoViewV2.vue`
**Ruta:** `/contacto`
**Última Actualización:** 22/07/2025
## Descripción General

La página de contacto es el punto principal para que los usuarios inicien una conversación. Está diseñada para ser atractiva y funcional, guiando al usuario a través de un formulario interactivo para recopilar la información necesaria de manera progresiva.

## Estructura y Componentes

La vista se compone de las siguientes secciones principales, envueltas en un `PageLayout`:

1.  **`HeroSection`**: Una sección de cabecera que presenta el título de la página ("Contacto") y un subtítulo que invita a la acción.

2.  **H2 Semántico**: Un encabezado `<h2>` ("¡Hablemos!") que introduce la sección principal de contacto, mejorando la estructura semántica de la página.

3.  **Texto Introductorio**: Un párrafo que contextualiza el propósito del contacto.

4.  **Formulario Interactivo (`enhanced-form-container`)**: Es el corazón de la vista. 
    *   **Estado Inicial:** Se presenta como un bloque colapsado con un botón "Escribir ahora".
    *   **Estado Expandido:** Al hacer clic, el contenedor se expande para revelar un formulario de varios pasos con una barra de progreso.
    *   Utiliza `SectionWrapper` para mantener la consistencia del layout.

5.  **Sección "A tener en cuenta"**: Una sección con tarjetas que ofrecen información adicional o consejos sobre el contacto (ej. tiempos de respuesta, tipos de consulta).

6.  **Sección "Otras formas de contactar"**: Presenta métodos de contacto alternativos (Email, LinkedIn, Twitter) con sus respectivos enlaces.

7.  **Sección de Cita Final**: Un bloque destacado con una cita inspiracional o relacionada con la temática del sitio.

---

## Lógica y Datos (Formulario Interactivo)

La lógica principal del componente se centra en la gestión del formulario de contacto.

*   **Script:** **Está implementado con `<script setup>` (JavaScript)**, no sigue el estándar de TypeScript del proyecto.
*   **Estado del Formulario:**
    *   `isFormExpanded: ref(false)`: Controla si el formulario está colapsado o expandido.
    *   `currentStep: ref(0)`: Rastrea el paso actual del formulario (nombre, email, mensaje).
    *   `formData: reactive({...})`: Almacena los datos introducidos por el usuario.
*   **Pasos del Formulario (`formSteps`)**: Un array de objetos que define la configuración de cada paso (etiqueta, placeholder, tipo, etc.).
*   **Funciones Clave:**
    *   `handleFormButton()`: Función principal que expande el formulario y hace scroll hacia él si está colapsado, o solo hace scroll si ya está abierto.
    *   `nextStep()` / `prevStep()`: Permiten la navegación entre los pasos del formulario.
    *   `handleSubmit()`: Gestiona la lógica de envío del formulario (actualmente simulado con un `setTimeout`).
    *   `isFormValid`: Propiedad computada que verifica si todos los campos requeridos están completos.
*   **Interactividad:**
    *   El progreso se visualiza en una barra (`formProgress`).
    *   La navegación se puede realizar con botones de "Siguiente/Anterior" o pulsando la tecla "Enter".

**Versión:** 3.0
**Componente Asociado:** `app/src/views/ContactoViewV2.vue` (Página principal activa)
**Ruta:** `/contacto`
**Componente de Respaldo:** `ContactoView.vue` (disponible en `/contacto-v1`)
**Última Actualización:** 19/07/2025

---

## 1. Propósito y Funcionalidad

ContactoViewV2 es la página principal de contacto optimizada con diseño minimalista, formulario multi-paso expandible, animaciones sutiles y consistencia visual completa con el sistema de diseño del sitio. Incluye secciones de ideas, expectativas y llamada a la acción final.

## 2. Lógica de Envío

Implementa un formulario multi-paso avanzado con las siguientes características:

- **Formulario Expandible:** Inicia contraído, se expande al hacer clic
- **Pasos Progresivos:** 3 campos (nombre, email, mensaje) con navegación secuencial
- **Estados Reactivos:** `isFormExpanded`, `currentStep`, `submitStatus`
- **Funciones Clave:**
  - `expandForm()`: Expande y enfoca el primer campo
  - `handleFormButton()`: Expande formulario o hace scroll si ya está activo
  - `nextStep()` / `prevStep()`: Navegación entre campos
  - `handleSubmit()`: Simulación de envío con estados de carga y éxito
- **Validación:** Campos requeridos con feedback visual
- **Micro-interacciones:** Animaciones suaves y feedback inmediato

## 3. Estructura y Componentes

### 3.1. Sección Hero
- **Componentes:** `SectionWrapper` con `IntroCard` y `PageHeader`
- **Contenido:**
  - Título: "Contacto" (sin subrayado, consistente con Blog/Soy)
  - Subtítulo: "¿Ideas para automatizar un proceso? ¿Preguntas sobre IA? Escríbeme sin compromiso."
- **Configuración:** `spacing="normal"`

### 3.2. Sección de Introducción
- **Layout:** `max-w-4xl mx-auto text-center space-y-6`
- **Contenido:** Dos párrafos explicativos sobre el propósito de la página
- **Tipografía:** `text-xl md:text-2xl` y `text-xl` con `leading-relaxed`
- **Configuración:** `spacing="normal"`

### 3.3. Sección "A tener en cuenta" 
- **Layout:** Una sola columna con ideas arriba
- **Título:** "A tener en cuenta" 
- **Contenido:** 4 cajas con animaciones fade-in-up escalonadas
- **Animaciones:** `fade-in-up` con delays progresivos (100ms, 200ms, 300ms, 400ms)
- **Efectos hover:** Transformación sutil en las cajas
- **Configuración:** `spacing="normal"`

### 3.4. Formulario Multi-paso
- **Atributo:** `data-form-section` para scroll automático
- **Layout:** `max-w-2xl mx-auto` (una sola columna)
- **Estados:**
  - **Contraído:** Botón "Activar formulario" visible
  - **Expandido:** Formulario progresivo de 3 pasos
- **Campos:** Nombre → Email → Mensaje
- **Navegación:** Botones Anterior/Siguiente, Enter para avanzar
- **Barra de Progreso:** Indicador visual del paso actual
- **Placeholders:** Optimizados para modo oscuro

### 3.5. Sección de Expectativas
- **Título:** "¿Qué puedes esperar?"
- **Layout:** Una sola columna, texto centrado
- **Contenido:** Párrafo sobre el enfoque personal y la calidad de respuesta
- **Tipografía:** `text-lg` con estilo italic
- **Configuración:** `spacing="normal"`

### 3.6. Llamada a la Acción Final
- **Título:** "¿Listo para empezar?"
- **Layout:** Centrado con botones horizontales en desktop
- **Botones:**
  - **Principal:** "Escribir mensaje ahora" (siempre funcional)
  - **Secundario:** "Lee mi blog primero" (enlace a /blog)
- **Comportamiento:** Botón principal expande formulario o hace scroll si ya está activo
- **Contraste:** Texto oscuro sobre fondo amarillo para accesibilidad
- **Configuración:** `spacing="loose"`

## 4. Lógica Reactiva y Técnica

### 4.1. Estado Reactivo
- **`formData`:** `ref({ name: '', email: '', message: '' })` - Objeto que almacena los valores del formulario
- **Sin Estados de Carga:** No implementa `isLoading`, `isSuccess` o `errorMessage` actualmente

### 4.2. Métodos
- **`handleSubmit()`:** Función simple que:
  - Previene el comportamiento por defecto del formulario
  - Registra datos en consola para debugging
  - Muestra alert de confirmación
  - No resetea el formulario ni maneja estados

### 4.3. Animaciones
- **`onMounted`:** Inicializa animaciones de entrada para elementos con clase `fade-in-element`
- **Timing:** Delay escalonado de 100ms por elemento
- **Clases CSS:** Sistema de animaciones con opacidad y transform

### 4.4. Imports
- **Componentes:** `PageLayout`, `PageHeader`, `SectionWrapper`, `IntroCard`
- **Vue:** `ref`, `onMounted`
- **Sin Dependencias Externas:** No usa componentes base especializados

## 5. Contenido Específico

### 5.1. Sugerencias de Contacto
1. **Compartir ideas o feedback** - Experiencias con recomendaciones
2. **Preguntas específicas** - Scripts, iA, procesos administrativos
3. **Colaboraciones o servicios** - Automatizaciones personalizadas con diagnóstico gratuito
4. **Simplemente saludar** - Conversaciones sobre tecnología

### 5.2. Información Adicional (Grid de 3)
- **Tiempo de Respuesta** - Expectativas realistas
- **Tipo de Consultas** - Qué se puede y no se puede ayudar
- **Enfoque Personal** - Atención individualizada vs automatizada

## 6. Características de Diseño

- **Responsive:** Layout que se adapta de 2 columnas a 1 en móvil
- **Consistencia Visual:** Uso del componente `IntroCard` para unificación
- **Accesibilidad:** Labels apropiados, estados focus, estructura semántica
- **Animaciones:** Sistema de `fade-in-element` con delays escalonados
- **Temas:** Soporte completo para modo claro/oscuro

## 7. Notas Técnicas

- **Validación:** Solo validación HTML5 básica (`required`, `type="email"`)
- **Accesibilidad:** Labels asociados correctamente, estructura semántica
- **Responsive:** Grid adaptativo, mobile-first approach
- **Performance:** Animaciones optimizadas con CSS transforms
- **Mantenibilidad:** Código simple y directo, fácil de expandir
- **Limitaciones Actuales:** 
  - No hay validación avanzada del lado cliente
  - No hay manejo de estados de envío
  - No hay integración con backend
  - No hay reseteo automático del formulario