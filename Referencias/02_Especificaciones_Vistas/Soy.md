# Especificaciones de Diseño y UX: Soy

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