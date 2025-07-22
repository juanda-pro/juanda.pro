# Especificación de la Vista: Soy (`SoyView.vue`)

**Versión:** 1.1 (Textos restaurados)
**Ruta:** `/soy`
**Estado:** Activa

---

## 1. Propósito y Funcionalidad

Esta vista es la sección "Sobre mí" del sitio. Su objetivo es presentar a Juan David, su filosofía de trabajo y su historia profesional de una manera personal y directa, conectando con el usuario a un nivel más profundo.

---

## 2. Estructura de Componentes

La vista utiliza un layout estándar basado en `PageLayout` y `SectionWrapper` para mantener la consistencia visual con el resto del sitio.

1.  **Hero Section (`IntroCard`):**
    *   **Componente:** `IntroCard`.
    *   **Contenido:** Un título principal (`H1`) "Soy Juan David" y un párrafo de introducción. Los textos de esta sección fueron restaurados a su versión original validada para asegurar la coherencia del mensaje.

2.  **Sección de Contenido Principal:**
    *   **Componente:** `SectionWrapper`.
    *   **Contenido:** El cuerpo principal de la página, donde se desarrolla la narrativa personal y profesional. Está compuesto por una serie de párrafos y posiblemente subtítulos (`H2`, `H3`) que estructuran la información.

3.  **Llamada a la Acción (`CtaCard`):
    *   **Componente:** `CtaCard.vue`.
    *   **Contenido:** Al final de la página, se reutiliza el componente `CtaCard` para invitar al usuario a dar el siguiente paso, como visitar la página de contacto o ver los proyectos.

---

## 3. Decisiones de Diseño y Contenido

*   **Restauración de Textos:** Se revirtieron los cambios en los textos del hero a la versión original solicitada por el usuario, asegurando que el mensaje clave de la página se mantenga intacto.
*   **Consistencia Visual:** La vista sigue los mismos patrones de diseño que el resto del sitio, utilizando `IntroCard` para el hero y `CtaCard` para la llamada a la acción, lo que refuerza la identidad de la marca.
*   **Enfoque en la Narrativa:** El diseño es minimalista para dar prioridad al contenido textual y a la historia que se cuenta.

---

## 4. Auditoría de Calidad

*   **Manipulación del DOM:** Se eliminó cualquier manipulación directa del DOM que pudiera existir en versiones anteriores, siguiendo las mejores prácticas de Vue.
*   **Buenas Prácticas:** El código ha sido revisado para cumplir con los estándares de calidad definidos para el proyecto.

**Versión:** 3.2
**Componente Asociado:** `app/src/views/SoyView.vue`
**Ruta:** `/soy`
**Última Actualización:** 22/07/2025
## Descripción General

La página "Soy" es la sección de presentación personal del sitio. Su objetivo es ofrecer al visitante una visión sobre quién está detrás del proyecto, sus motivaciones y su filosofía, de una manera directa y personal.

---

## Estructura y Componentes

La vista tiene una estructura limpia y centrada en el contenido, compuesta por:

1.  **`PageLayout`**: Componente raíz que envuelve toda la vista, configurado con `remove-padding-top="true"` para dar protagonismo a la sección Hero.

2.  **`HeroSection`**: La sección de bienvenida, que presenta un título conciso ("Soy.") y un subtítulo que resume la propuesta de valor del autor.

3.  **`SectionWrapper`**: Un único contenedor principal para el cuerpo del texto. 
    *   Contiene un elemento decorativo de conexión para unir visualmente la sección con el Hero.
    *   El contenido está estilizado con las clases `prose` de TailwindCSS para garantizar una tipografía de lectura cómoda y consistente.

4.  **Bloque de Contenido Principal:**
    *   Un encabezado `<h2>` ("Lo que me mueve") que introduce el texto principal.
    *   Varios párrafos que desarrollan la presentación personal.
    *   Un bloque de cita final, resaltado visualmente, que invita al usuario a seguir explorando el sitio.

---

## Lógica y Datos

La lógica de esta vista es muy sencilla y está enfocada en la presentación visual.

*   **Script:** **Está implementado con `<script setup>` (JavaScript)**. No contiene lógica de negocio compleja.
*   **Animaciones de Entrada:**
    *   Utiliza el hook `onMounted` y `nextTick` para aplicar clases que activan una animación de "fade in" y traslación a los elementos de contenido (`fade-in-element`).
    *   Esto crea un efecto de aparición suave a medida que el usuario ve la página, mejorando la experiencia visual.

**Versión:** 3.1
**Componente Asociado:** `app/src/views/SoyView.vue` (Página principal activa)
**Ruta:** `/soy`
**Nota:** Versión V2 huérfana existe pero no está en uso
**Última Actualización:** 19/07/2025 - Tipografía estandarizada

---

## 1. Visión General

La página "Soy" es una presentación personal con un enfoque narrativo y visual. Su objetivo es transmitir la identidad y filosofía del autor de una manera directa y personal, utilizando el componente `IntroCard` para mantener consistencia visual con el resto del sitio.

---

## 2. Estructura de la Página (`SoyView.vue`)

La vista se construye en tres partes principales:

### 2.1. Cabecera Principal

- **Componente:** `SectionWrapper` con `IntroCard` y `PageHeader`
- **Propósito:** Presentar al autor y su propósito de forma clara y directa.
- **Layout:** Tarjeta de introducción con estilo unificado del sitio.
- **Contenido:**
  - **Título:** "Soy."
  - **Subtítulo:** "Un apasionado de la tecnología que puede ayudarte a optimizar algunos procesos."
- **Configuración:** `spacing="normal"`

### 2.2. Imagen e Introducción Personal (Layout Combinado)

- **Componente:** `SectionWrapper` con layout flexible
- **Propósito:** Combinar impacto visual con presentación personal.
- **Layout:** Flexbox que se adapta de columnas (desktop) a filas (móvil)
- **Estructura:**
  - **Columna de Imagen (25% en desktop):**
    - Imagen placeholder con efectos hover
    - Fondos decorativos con rotación y efectos de transición
    - Elemento decorativo adicional (círculo con borde)
    - Efectos de grupo para animaciones coordinadas
  - **Columna de Texto (75% en desktop):**
    - Presentación personal con formato HTML (negritas y cursivas)
    - Texto actualizado: "Soy Juan David Ocampo, aunque la mayoría me llama **Juanda**..."
- **Decoración:** Elementos de fondo blur, espaciado responsive
- **Configuración:** `spacing="loose"`, `class="relative overflow-hidden"`

### 2.3. Sección de Valores

- **Componente:** `SectionWrapper` con elemento decorativo de conexión
- **Propósito:** Comunicar los principios y valores que guían el trabajo del autor.
- **Título:** "Lo que me mueve" (con subrayado decorativo)
- **Layout:** Párrafo introductorio + grid de 3 columnas + párrafo de cierre + invitación final
- **Contenido Estructurado:**
  - **Párrafo Introductorio:** Filosofía del pensamiento crítico con formato HTML
  - **Grid de Valores (`md:grid-cols-3`):** Tres elementos con:
    - Iconos SVG de Heroicons en círculos decorativos
    - Títulos: "Principal motivación", "Honestidad práctica", "Mindset general"
    - Párrafos descriptivos específicos
    - Animaciones escalonadas con delays
  - **Párrafo de Cierre:** "Estos valores se reflejan en lo que comparto aquí..."
  - **Elemento Decorativo:** Línea horizontal centrada
  - **Invitación Final:** Tarjeta destacada con borde y fondo, texto de agradecimiento
- **Configuración:** `spacing="loose"`, `class="relative"`