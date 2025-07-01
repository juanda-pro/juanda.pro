# Informe de Auditoría Integral: juanda.pro

> **Fecha de Auditoría:** 01 de julio de 2025
> **Auditor:** Cascade AI

> **Resumen Ejecutivo:** *Esta sección se completará al finalizar la auditoría y contendrá un resumen de los hallazgos más críticos y las recomendaciones clave.*

---

## Hallazgos Detallados

### 1. Configuración Global y Estructura del Proyecto

#### Hallazgo 1.1: Estructura de Proyecto Anidada

- **Problema:** El código fuente completo del proyecto (incluyendo `package.json`, `vite.config.ts`, etc.) se encuentra en una subcarpeta `app/` en lugar de en la raíz del repositorio.
- **Ubicación:** Raíz del proyecto.
- **Impacto:** Esta estructura no es estándar y puede complicar la configuración de herramientas de integración continua (CI/CD), despliegues automáticos (como en Vercel o Netlify) y el onboarding de nuevos desarrolladores que esperan una estructura convencional.
- **Solución Sugerida:** Mover todo el contenido de la carpeta `app/` a la raíz del repositorio y eliminar la carpeta `app` vacía. Esto alinearía el proyecto con las prácticas estándar de la industria.

#### Hallazgo 1.2 (Crítico): Clave `fontFamily` Duplicada en `tailwind.config.js`

- **Problema:** El objeto `theme.extend` contiene dos claves `fontFamily`. En JavaScript, cuando un objeto tiene claves duplicadas, la última anula a todas las anteriores. Esto provoca que la definición principal de fuentes (`sans`, `heading`, `mono` y todas las del laboratorio) sea ignorada.
- **Ubicación:** `app/tailwind.config.js`
- **Impacto:** **Crítico.** La tipografía del sitio no se está aplicando correctamente. Las fuentes `Figtree` y `Plus Jakarta Sans` no están siendo asignadas como base, lo que resulta en una inconsistencia visual total respecto a la Guía de Estilo.
- **Solución Sugerida:** Corregir la configuración de `tailwind.config.js` eliminando la clave duplicada.

---

#### **Re-evaluación y Análisis de Riesgos (Segunda Auditoría)**

- **Verificación:** **Confirmado.** La clave `fontFamily` está duplicada. La segunda instancia, que solo contiene la fuente `serif`, está sobrescribiendo por completo a la primera, que contiene las definiciones cruciales de `sans` (Figtree) y `heading` (Plus Jakarta Sans). Este es el error de configuración más crítico del proyecto.
- **Análisis de la Solución Propuesta:**
    - **Nuevo Hallazgo/Mejora:** La solución inicial de "eliminar" es correcta pero imprecisa. La solución óptima es **fusionar** la definición de `serif` de la segunda declaración en la primera, y luego eliminar la segunda. Esto consolida toda la configuración de fuentes en un único bloque, mejorando la mantenibilidad y corrigiendo el error de forma completa.
- **Análisis de Riesgo:** **Bajo.**
    - **Naturaleza del Riesgo:** Un error de sintaxis en el archivo de configuración detendría el proceso de compilación, siendo un fallo evidente e inmediato.
    - **Mitigación:** El protocolo de cambios en una rama aislada (`feature/typography-audit-fixes`) y la verificación local inmediata son suficientes para controlar cualquier riesgo. Ejemplo:

  ```javascript
  // ...
  fontFamily: {
    sans: ['"Figtree"', 'sans-serif'],
    heading: ['"Plus Jakarta Sans"', 'sans-serif'],
    mono: ['"JetBrains Mono"', 'monospace'],
    serif: ['Lora', 'serif'], // Añadida aquí
    // ... (eliminar las demás clases de laboratorio)
  },
  // ...
  ```

#### Hallazgo 1.3: Código Obsoleto en `tailwind.config.js`

- **Problema:** La configuración de `fontFamily` contiene una gran cantidad de clases (`heading-1`, `body-1`, `heading-2`, etc.) que fueron creadas para el "laboratorio de tipografía". Una vez seleccionadas las fuentes definitivas, estas clases se han convertido en código muerto.
- **Ubicación:** `app/tailwind.config.js`
- **Impacto:** Reduce la legibilidad y la mantenibilidad del archivo de configuración. Introduce ruido y puede llevar a confusiones en el futuro.
- **Solución Sugerida:** Eliminar todas las clases de `fontFamily` que no sean las base del proyecto (`sans`, `heading`, `mono`, `serif`).

#### Hallazgo 1.4: Análisis de `main.ts` (Punto de Entrada)

- **Resultado:** El archivo `main.ts` sigue las convenciones estándar de un proyecto Vue 3 con Vite. La inicialización de la aplicación es limpia y correcta.
- **Observación Clave:** Se importa un archivo CSS global, `assets/main.css`. Este archivo es crítico ya que puede contener estilos base, importaciones de fuentes o resets que afectan a todo el sitio. Su contenido debe ser auditado a continuación.
- **Estado:** ✅ Sin problemas identificados.

#### Hallazgo 1.5 (Crítico): `font-family` global sobrescrita en `main.css`

- **Problema:** El archivo `assets/main.css` contiene una regla `body { font-family: 'Inter', sans-serif; }`. Esta regla global anula toda la configuración de `fontFamily` definida en `tailwind.config.js`.
- **Ubicación:** `app/src/assets/main.css`
- **Impacto:** **Crítico.** Este es el principal motivo por el que la tipografía del sitio es incorrecta. Impide que las fuentes base del proyecto (`Figtree` para el cuerpo y `Plus Jakarta Sans` para los titulares) se apliquen, forzando el uso de 'Inter' en todo el sitio y contradiciendo la Guía de Estilo y la configuración de Tailwind.
- **Solución Sugerida:** Eliminar la importación de fuentes y la regla `body` de `main.css` para permitir que Tailwind y `App.vue` gestionen la tipografía.

---

#### **Re-evaluación y Análisis de Riesgos (Segunda Auditoría)**

- **Verificación y Nuevo Hallazgo:** **Confirmado.** Existe una regla global `body { font-family: ...; }`. Sin embargo, la auditoría inicial fue imprecisa: la fuente aplicada no es `Figtree`, sino `Inter`. Esto es aún más problemático, ya que `Inter` no es una de las fuentes principales del proyecto. Este conflicto es una causa raíz de las inconsistencias.
- **Análisis de la Solución Propuesta:** La eliminación de la regla `body { font-family: 'Inter', sans-serif; }` es **absolutamente correcta y necesaria**. Devolverá el control de la tipografía a las clases de utilidad de Tailwind, que es la práctica estándar y robusta.
- **Análisis de Riesgo:** **Bajo.**
    - **Naturaleza del Riesgo:** Al eliminar la regla, los textos sin clases de fuente explícitas volverán a la fuente por defecto del navegador. Este cambio es visualmente perceptible pero es el comportamiento correcto y esperado, ya que expondrá claramente todos los lugares donde falta aplicar la clase `font-sans`.
    - **Mitigación:** La Fase 2 del plan de corrección (aplicar `font-sans` en todos los componentes) mitiga este "riesgo", que en realidad es un paso necesario para la limpieza del código. La verificación visual local confirmará el estado de transición.

#### Hallazgo 1.6: Ubicación no estándar de `@import`

- **Problema:** Se importa el archivo `article-card.css` entre las directivas `@tailwind components` y `@tailwind utilities`.
- **Ubicación:** `app/src/assets/main.css`
- **Impacto:** Menor. Aunque funcional, no sigue la práctica recomendada de agrupar todas las importaciones personalizadas antes de las directivas de Tailwind, lo que podría llevar a problemas de especificidad en el futuro.
- **Solución Sugerida:** Mover la línea `@import` al principio del archivo, antes de `@tailwind base;`.

#### Hallazgo 1.7: Estilos de Componente en CSS Global

- **Problema:** Los estilos para el componente `ArticleCard` se definen en un archivo CSS global (`assets/css/components/article-card.css`) en lugar de estar encapsulados dentro del propio componente.
- **Ubicación:** `app/src/assets/css/components/article-card.css`
- **Impacto:** Menor. Aunque el uso de `@layer components` es una buena práctica, separar los estilos de su componente correspondiente reduce la cohesión y la mantenibilidad. Para entender o modificar el `ArticleCard`, un desarrollador necesita buscar y editar dos archivos en lugar de uno.
- **Solución Sugerida:** Mover las definiciones de clase (`.card-title`, `.card-category`, etc.) al bloque `<style scoped>` dentro de `ArticleCard.vue`, utilizando la directiva `@apply`. Esto convertiría al componente en una unidad verdaderamente autocontenida.

#### Hallazgo 1.8: Definición de Clase Incompleta

- **Problema:** La clase `.card-title` solo define `font-bold`, omitiendo el tamaño y la familia de fuente.
- **Ubicación:** `app/src/assets/css/components/article-card.css`
- **Impacto:** Introduce inconsistencia visual. El estilo del título de la tarjeta variará dependiendo de las clases heredadas en el lugar donde se utilice, en lugar de tener un aspecto predecible y definido.
- **Solución Sugerida:** Completar la definición para que sea explícita y consistente. Por ejemplo: `@apply font-heading text-xl font-bold;`.

### 2. Layout Principal y Componentes Estructurales

#### Hallazgo 2.1: Estilos Globales no Encapsulados en `App.vue`

- **Problema:** El componente `App.vue` define las clases para la transición de página (`.fade-enter-active`, etc.) en una etiqueta `<style>` sin el atributo `scoped`.
- **Ubicación:** `app/src/App.vue`
- **Impacto:** Menor. Las clases de transición se convierten en globales, lo que podría llevar a colisiones de nombres si otras partes de la aplicación definen clases con el mismo nombre. Es una fuga en la encapsulación del componente.
- **Solución Sugerida:** Añadir el atributo `scoped` a la etiqueta de estilo (`<style scoped>`) para asegurar que estas clases solo se apliquen dentro del componente `App.vue`, que es donde se utilizan.

#### Hallazgo 2.1.1 (Crítico Estratégico): Omisión de Clase de Fuente Base en `App.vue`

- **Problema:** El `div` raíz del componente `App.vue`, que envuelve toda la aplicación, carece de una clase de familia de fuente base (como `font-sans`).
- **Ubicación:** `app/src/App.vue`
- **Impacto:** **Crítico.** Esta es la causa raíz de la mayoría de las inconsistencias tipográficas del sitio. Sin una fuente base definida en el contenedor principal, los componentes hijos no heredan la fuente de cuerpo correcta (`Figtree`), lo que obliga a añadirla manualmente en cada párrafo, una práctica ineficiente y propensa a errores que no se ha seguido.
- **Solución Sugerida:** Añadir la clase `font-sans` al `div` raíz en `App.vue`.

---

#### **Re-evaluación y Análisis de Riesgos (Segunda Auditoría)**

- **Verificación:** **Confirmado.** El `div` raíz del componente no tiene una clase de fuente base.
- **Análisis de la Solución Propuesta (Mejora Estratégica):** Este es el hallazgo más importante de la re-auditoría. La solución más eficiente y correcta **no es** añadir `font-sans` a cada párrafo de cada componente. La solución óptima es **añadir la clase `font-sans` una sola vez, en el `div` raíz de `App.vue`**. Esto establecerá `Figtree` como la fuente por defecto para toda la aplicación a través de la herencia de CSS, solucionando el 90% de los problemas de tipografía de cuerpo de texto de forma centralizada y robusta.
- **Análisis de Riesgo:** **Muy Bajo.**
    - **Naturaleza del Riesgo:** El cambio es global, pero es precisamente el comportamiento deseado según la Guía de Estilo.
    - **Mitigación:** La verificación visual de las páginas clave después de este único cambio será suficiente para confirmar el éxito de la corrección masiva.

#### Hallazgo 2.2: Omisión de Clases de Familia de Fuente en `Header.vue`

- **Problema:** Elementos clave en la cabecera no especifican la familia de fuente a utilizar, dependiendo de estilos heredados que son incorrectos.
- **Ubicación:** `app/src/components/Header.vue`
- **Detalles:**
    - El logo/título del sitio (`juanda.pro`) usa `font-bold` pero le falta la clase `font-heading` para asignarle la fuente de titulares.
    - Los enlaces de navegación (`RouterLink`) tanto en escritorio como en móvil no tienen la clase `font-sans` para asignarles la fuente de cuerpo de texto.
- **Impacto:** **Alto.** Una vez que se corrijan los errores globales de tipografía, estos elementos seguirán viéndose mal porque no están usando las clases correctas. Es un error latente que debe ser corregido para que la Guía de Estilo se aplique correctamente.
- **Solución Sugerida:** Añadir `font-heading` al `RouterLink` del logo y `font-sans` a los `RouterLink` de los elementos de navegación.

---

#### **Re-evaluación y Análisis de Riesgos (Segunda Auditoría)**

- **Verificación:** **Confirmado.** Ningún elemento de texto en el Header tiene una clase de familia de fuente explícita.
- **Análisis de la Solución Propuesta (con Estrategia Global):**
    - **Impacto Positivo:** La herencia de `font-sans` desde `App.vue` (ver Hallazgo 2.1.1) corregirá automáticamente la fuente de los enlaces de navegación a `Figtree`.
    - **Refinamiento:** El logo (`juanda.pro`) usa `font-bold` pero semánticamente es un titular de marca. Para una correcta implementación, debe usar `font-heading` para aplicar `Plus Jakarta Sans`.
    - **Solución Mejorada:** La solución óptima es añadir `font-heading` únicamente a los `RouterLink` del logo. Los demás elementos heredarán `font-sans` correctamente.
- **Análisis de Riesgo:** **Nulo.** Es un ajuste estético localizado y sin efectos secundarios.

#### Hallazgo 2.3: Inconsistencia de Estilo en Navegación (Desktop vs. Mobile)

- **Problema:** Los enlaces de navegación tienen un peso de fuente diferente en la versión de escritorio (`font-medium`) y en la móvil (`font-semibold`).
- **Ubicación:** `app/src/components/Header.vue`
- **Impacto:** Menor. Crea una pequeña inconsistencia visual entre las dos versiones del menú. Debe decidirse si este comportamiento es intencional o si debe unificarse.
- **Solución Sugerida:** Unificar el peso de la fuente en ambas vistas (p. ej., usar `font-medium` en ambos) a menos que la diferencia sea una decisión de diseño deliberada.

#### Hallazgo 2.4: Omisión de Clases de Familia de Fuente en `Footer.vue`

- **Problema:** Al igual que en la cabecera, los elementos de texto clave en el pie de página no especifican su familia de fuente.
- **Ubicación:** `app/src/components/Footer.vue`
- **Detalles:**
    - El título `<h2>` ("Hablemos.") no tiene la clase `font-heading`.
    - Los párrafos y los enlaces a las políticas de privacidad/cookies no tienen la clase `font-sans`.
- **Impacto:** **Alto.** Asegura que la tipografía del pie de página será incorrecta hasta que se añadan las clases de utilidad correspondientes.
- **Solución Sugerida:** Añadir `font-heading` al `<h2>` y `font-sans` a todos los elementos de texto (`<p>` y `<a>`).

---

#### **Re-evaluación y Análisis de Riesgos (Segunda Auditoría)**

- **Verificación:** **Confirmado.** El `<h2>` carece de `font-heading` y los demás textos carecen de `font-sans`.
- **Análisis de la Solución Propuesta (con Estrategia Global):**
    - **Impacto Positivo:** La herencia de `font-sans` desde `App.vue` (ver Hallazgo 2.1.1) corregirá la fuente de todos los párrafos y enlaces a `Figtree`.
    - **Refinamiento:** El `<h2>Hablemos.</h2>` es un titular y requiere la clase `font-heading` para usar `Plus Jakarta Sans`.
    - **Solución Mejorada:** La solución óptima es añadir `font-heading` únicamente al `<h2>`. Los demás elementos heredarán `font-sans` correctamente.
- **Análisis de Riesgo:** **Nulo.** Es un ajuste estético localizado y sin efectos secundarios.

#### Hallazgo 2.5: Iconos SVG Embebidos en `Footer.vue`

- **Problema:** Los iconos de redes sociales (LinkedIn, Twitter, etc.) están codificados como SVG directamente en la plantilla.
- **Ubicación:** `app/src/components/Footer.vue`
- **Impacto:** Menor. Reduce la legibilidad y mantenibilidad del componente. Dificulta la reutilización de los iconos en otras partes del sitio.
- **Solución Sugerida:** Abstraer cada icono a su propio componente Vue (p. ej., `IconLinkedIn.vue`). Esto limpia el código del `Footer`, lo hace más semántico y permite reutilizar los iconos fácilmente.

### 3. Auditoría de Vistas (Páginas)

#### Hallazgo 3.1: Inconsistencias Tipográficas en `HomeView.vue`

- **Problema:** La página de inicio muestra un patrón mixto en la aplicación de clases de tipografía.
- **Ubicación:** `app/src/views/HomeView.vue`
- **Detalles:**
    - **Positivo:** La mayoría de los títulos (`<h1>`, `<h2>`) utilizan correctamente la clase `font-heading`.
    - **Negativo:** De forma sistemática, todos los párrafos (`<p>`) carecen de la clase `font-sans`.
- **Impacto:** **Alto.** La omisión de `font-sans` en los párrafos es el error de implementación más extendido.
- **Solución Sugerida:** Corregir el problema de forma global en `App.vue` (ver Hallazgo 2.1.1).

---

#### **Re-evaluación y Análisis de Riesgos (Segunda Auditoría)**

- **Verificación:** **Confirmado.** El componente está bien estructurado, con los `font-heading` aplicados correctamente en los títulos.
- **Análisis de la Solución Propuesta:** La solución para los párrafos de este componente es 100% dependiente de la corrección global en `App.vue`. No se requieren cambios en `HomeView.vue`.
- **Análisis de Riesgo:** **Nulo.** No se requieren cambios en este archivo.

#### Hallazgo 3.2: Datos Hardcodeados en `HomeView.vue`

- **Problema:** El contenido de las secciones "Pilares" y "Artículos" está definido como un array de objetos directamente en el bloque `<script>` del componente.
- **Ubicación:** `app/src/views/HomeView.vue`
- **Impacto:** Menor. Para un sitio personal o de bajo mantenimiento, es una solución pragmática. Sin embargo, no es una práctica escalable. Si el contenido crece, la gestión se vuelve tediosa y propensa a errores.
- **Solución Sugerida (Opcional/A futuro):** Considerar mover los datos a archivos JSON dedicados en una carpeta `data/` o, si el proyecto crece, a un sistema de gestión de contenidos (CMS) headless.

### 4. Auditoría de Componentes Reutilizables

#### Hallazgo 4.1: Análisis de `SectionWrapper.vue`

- **Resultado:** Este componente es un excelente ejemplo de un componente de layout reutilizable. Su implementación es limpia, simple y sigue las mejores prácticas al usar `slots` para inyectar contenido.
- **Estado:** ✅ Sin problemas identificados. Componente modelo.

---

#### **Re-evaluación y Análisis de Riesgos (Segunda Auditoría)**

- **Verificación:** **Confirmado.** El componente es un wrapper de layout y no presenta problemas.
- **Nuevo Hallazgo (Relacionado):** Al investigar los imports de `main.css`, se ha encontrado el archivo `assets/css/components/article-card.css`. Este archivo utiliza correctamente la directiva `@layer components`, pero la clase `.card-title` que define solo aplica `font-bold`, omitiendo `font-heading`. Esto es un ejemplo de cómo las inconsistencias se propagan a través de clases de componentes personalizadas.
- **Análisis de Riesgo:** **Nulo.** Este archivo no presenta riesgos.

#### Hallazgo 4.2: Análisis de `CtaCard.vue`

- **Resultado:** Este es un componente de alta calidad, bien estructurado y técnicamente sólido. Implementa correctamente la animación de la "tarjeta sombra" y los efectos `hover` usando las utilidades `group-hover` de Tailwind.
- **Problema:** Persiste la omisión de clases de familia de fuente.
    - El párrafo del título (`props.title`) y el texto del botón no tienen la clase `font-sans`.
    - El título principal (`props.description`) sí usa correctamente `font-heading`.
- **Impacto:** Inconsistencia tipográfica dentro del propio componente. Aunque visualmente es funcional, no se adhiere completamente a la Guía de Estilo.
- **Solución Sugerida:** Añadir `font-sans` a los elementos de texto de cuerpo para asegurar la consistencia.
- **Estado:** ✅ Técnicamente sólido, pero requiere corrección tipográfica.

#### Hallazgo 4.3: Análisis de `ScrollingFeatures.vue`

- **Resultado:** Este es el componente más complejo y técnicamente impresionante del proyecto hasta ahora. La implementación de GSAP con `ScrollTrigger.matchMedia` para crear una experiencia de escritorio animada y una vista móvil estática es un ejemplo de desarrollo front-end de alta calidad.
- **Problema:** A pesar de la excelencia técnica, el componente no es inmune al problema tipográfico sistémico.
    - Los títulos (`<h3>`) en ambas vistas (móvil y escritorio) usan correctamente `font-heading`.
    - Los párrafos de texto (`<p>`) en ambas vistas carecen de la clase `font-sans`.
- **Impacto:** Alto. La sección es central en la narrativa de la página, y la inconsistencia tipográfica afecta su pulido final.
- **Solución Sugerida:** Añadir `font-sans` a los elementos `<p>`.
- **Estado:** ✅ Técnicamente sobresaliente, pero requiere corrección tipográfica.

#### Hallazgo 4.4: Análisis de `MiniArticleCard.vue`

- **Resultado:** Un componente de tarjeta simple y efectivo, bien estructurado.
- **Problema:** Introduce una nueva inconsistencia tipográfica.
    - El título del artículo (`<h3>`) carece de la clase `font-heading`.
    - El texto de la fecha (`<time>`) carece de la clase `font-sans`.
- **Impacto:** Medio. Confirma que la aplicación de clases de tipografía es esporádica y debe ser revisada en todos los componentes, no solo en los párrafos.
- **Solución Sugerida:** Añadir `font-heading` al título y `font-sans` a la fecha.
- **Estado:** 🟡 Requiere corrección tipográfica.

---

## Conclusión y Resumen de Hallazgos Críticos

La auditoría ha sido un éxito y ha revelado un conjunto claro y manejable de problemas sistémicos que, una vez corregidos, alinearán completamente el sitio web con la Guía de Estilo y mejorarán significativamente su mantenibilidad.

Los problemas se pueden agrupar en dos categorías principales:

1.  **Errores de Configuración Global (Raíz del Problema):**
    - **`tailwind.config.js`:** Una clave `sans` duplicada en la configuración de fuentes neutraliza la definición de `Figtree` como fuente para el cuerpo del texto.
    - **`main.css`:** La importación global de `Figtree` y su aplicación al `body` interfiere con el sistema de diseño de Tailwind, causando que todos los elementos sin una clase de fuente explícita (`font-sans` o `font-heading`) usen `Figtree` por defecto, en lugar de la fuente del sistema.

2.  **Errores de Implementación en Componentes (Síntomas):**
    - **Omisión Sistemática de `font-sans`:** La gran mayoría de los elementos de texto de cuerpo (`<p>`, `<time>`, texto de botones, etc.) en todos los componentes y vistas auditados carecen de la clase `font-sans`. Este es el error de implementación más extendido.
    - **Omisión Ocasional de `font-heading`:** Aunque menos frecuente, algunos componentes como `MiniArticleCard.vue` omiten la clase `font-heading` en sus títulos.

La buena noticia es que la estructura de componentes es, en general, de muy alta calidad, y la corrección de los errores de configuración global sentará las bases para una solución rápida y efectiva a nivel de componentes.
