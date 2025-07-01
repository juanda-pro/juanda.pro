# Informe de Auditoría Global - Fase 2

Este documento registra los hallazgos y planes de corrección para las vistas restantes del proyecto, asegurando la consistencia global con los estándares de diseño y accesibilidad establecidos en la Fase 1.

## Auditoría de `BlogView.vue`

La auditoría de `BlogView.vue` revela una estructura sólida y un buen uso de los componentes del sistema de diseño. No se han encontrado desviaciones críticas en la vista principal.

**Hallazgos:**

1.  **Layout y Componentes:**
    *   **Fortaleza:** La vista utiliza correctamente los componentes `SectionWrapper` y `PageHeader`, manteniendo la consistencia estructural con el resto del sitio.
    *   **Fortaleza:** Se reutilizan componentes específicos como `ArticleCard` y `FilterButton`, lo cual es una buena práctica para la mantenibilidad.

2.  **Tipografía y Color:**
    *   **Fortaleza:** Las clases de texto y color son semánticas y compatibles con el modo oscuro, alineándose con los estándares establecidos.

**Conclusión:** La vista en sí está bien construida. La auditoría debe centrarse ahora en los componentes que utiliza, donde reside la mayor parte de la lógica de presentación y estilo. El siguiente paso es auditar `ArticleCard.vue` y `FilterButton.vue`.

### Auditoría de `ArticleCard.vue`

**Hallazgos:**

1.  **Enlace no Semántico (Crítico):**
    *   **Observación:** El componente simula ser un enlace usando una etiqueta `<article>` con `cursor-pointer` y efectos `hover`, pero no es un elemento interactivo real (como una etiqueta `<a>` o `<router-link>`).
    *   **Impacto:** Problema grave de accesibilidad. Los lectores de pantalla no lo anuncian como un enlace, y no es navegable mediante teclado. Esto impide que una parte de los usuarios pueda acceder al contenido.

2.  **Estilos Visuales:**
    *   **Fortaleza:** La implementación visual (colores, tipografía, transiciones) es consistente y de alta calidad.

**Plan de Corrección:**

*   **Acción:** Envolver el contenido del componente en un `<router-link>` que apunte a la ruta del detalle del artículo.
*   **Justificación:** Solucionará el problema de accesibilidad de raíz, convirtiendo la tarjeta en un enlace semántico y funcional para todos los usuarios.

### Auditoría de `FilterButton.vue`

**Hallazgos:**

1.  **Inconsistencia de Estilo (Modo Oscuro - Activo):**
    *   **Observación:** Cuando un filtro está activo en modo oscuro, las clases aplicadas (`dark:bg-primary-dark dark:text-primary-light`) lo hacen visualmente indistinguible de un botón inactivo, ya que usan los colores de fondo y texto por defecto.
    *   **Impacto:** El usuario no puede identificar claramente qué filtro está seleccionado en modo oscuro, afectando negativamente la usabilidad.

**Plan de Corrección:**

*   **Acción:** Reemplazar las clases del estado activo en modo oscuro por `dark:bg-brand-accent dark:text-brand-dark dark:ring-brand-accent`.
*   **Justificación:** Esto unifica la experiencia visual. El color de acento de la marca (`brand-accent`) servirá como un indicador claro y consistente del filtro activo en ambos modos (claro y oscuro).

## Auditoría de `ArticleDetailView.vue`

La auditoría de `ArticleDetailView.vue` revela problemas significativos, principalmente relacionados con la forma en que se gestionan los datos y la consistencia con el resto de la aplicación.

**Hallazgos:**

1.  **Inconsistencia Crítica en la Obtención de Datos (Crítico):**
    *   **Observación:** La vista utiliza un array de artículos hardcodeado, mientras que `BlogView.vue` los obtiene de Supabase. El contenido es estático y no real.
    *   **Impacto:** Inconsistencia arquitectónica grave. La vista no es dinámica y no funcionará en un entorno de producción. Impide la gestión de contenido real.

2.  **Semántica HTML Mejorable:**
    *   **Observación:** El contenido principal del artículo se renderiza en un `<div>` en lugar de una etiqueta `<article>`.
    *   **Impacto:** Oportunidad perdida para mejorar la semántica, la accesibilidad y el SEO.

3.  **Estilo de Botón Inconsistente y no Accesible:**
    *   **Observación:** El enlace "Volver al Blog" tiene un color de `hover` inconsistente (`hover:bg-yellow-400`) y carece de estilos `:focus-visible`.
    *   **Impacto:** Rompe la consistencia visual del sistema de diseño y falla en cumplir los estándares de accesibilidad establecidos.

**Plan de Corrección:**

*   **Acción 1 (Crítica):** Refactorizar la lógica para obtener el artículo desde Supabase, usando el `slug` de la URL para filtrar el registro correcto.
*   **Acción 2:** Envolver el contenedor del contenido del artículo (`article-content`) en una etiqueta `<article>`.
*   **Acción 3:** Actualizar las clases del `<router-link>` para que use los estilos de `hover` y `focus-visible` del sistema de diseño.

## Auditoría de `SoyView.vue`

La auditoría de `SoyView.vue` revela una página funcional pero con varias oportunidades de mejora en cuanto a limpieza de código, consistencia y estrategia de contenido.

**Hallazgos:**

1.  **Contenido Placeholder (Crítico):**
    *   **Observación:** La imagen principal de la página es un placeholder de `via.placeholder.com`.
    *   **Impacto:** Inaceptable para producción. La página se ve incompleta y poco profesional.

2.  **Componente No Utilizado:**
    *   **Observación:** Se importa `BaseButton.vue` pero no se utiliza en la plantilla.
    *   **Impacto:** Código muerto que ensucia el componente y puede llevar a confusión en futuros mantenimientos.

3.  **Estilo Tipográfico Aislado y Buggy:**
    *   **Observación:** Existe un estilo `<style scoped>` para una clase `.prose.lead`. El selector es incorrecto y el enfoque de crear estilos locales para componentes tipográficos rompe la consistencia del sistema de diseño.
    *   **Impacto:** Mantenimiento difícil, inconsistencia visual y malas prácticas en la gestión de estilos.

4.  **Falta de Llamada a la Acción (CTA):**
    *   **Observación:** La página termina abruptamente después del texto. No guía al usuario hacia una siguiente acción.
    *   **Impacto:** Oportunidad de engagement perdida. El usuario puede abandonar el sitio al no tener un camino claro a seguir.

**Plan de Corrección:**

*   **Acción 1 (Contenido):** Reemplazar la imagen placeholder con la fotografía final.
*   **Acción 2 (Limpieza):** Eliminar la importación del componente `BaseButton`.
*   **Acción 3 (Refactorización):** Eliminar el bloque `<style scoped>` y aplicar las clases de `prose` o utilidades de Tailwind directamente al párrafo `lead` para que herede los estilos globales.
*   **Acción 4 (Mejora UX):** Diseñar y añadir una sección de CTA al final de la página (ej. "Hablemos" o "Explora mis artículos") utilizando el componente `BaseButton`.

## Auditoría de `ResourcesView.vue`

Esta vista, aunque funcional a nivel de UI, sufre del mismo problema crítico que otras vistas: la dependencia de datos hardcodeados.

**Hallazgos:**

1.  **Datos Hardcodeados (Crítico):**
    *   **Observación:** La lista de recursos y las categorías de filtro están definidas en arrays directamente en el script.
    *   **Impacto:** Impide por completo la gestión de contenido. No se pueden añadir nuevos recursos sin modificar el código. Es una arquitectura insostenible.

2.  **Iconos SVG como Strings (Mala Práctica):**
    *   **Observación:** Los iconos SVG están incrustados como strings de texto en el array de datos.
    *   **Impacto:** Infla el tamaño del componente, hace que los iconos sean difíciles de mantener y estilizar, y va en contra de las buenas prácticas de componentización de Vue.

3.  **URLs Placeholder:**
    *   **Observación:** Todos los enlaces de los recursos apuntan a `#`.
    *   **Impacto:** La sección es una maqueta no funcional. Los usuarios no pueden acceder a los recursos.

**Plan de Corrección:**

*   **Acción 1 (Crítica):** Crear una tabla `resources` en Supabase. Refactorizar el componente para que obtenga todos los recursos de forma asíncrona. Las categorías de filtro deben generarse dinámicamente a partir de los datos recibidos.
*   **Acción 2 (Refactorización):** Implementar un sistema de componentes para los iconos. Se puede crear un componente `Icon` que renderice dinámicamente el SVG apropiado basado en un nombre (ej. `<Icon name="N8N" />`).
*   **Acción 3 (Contenido):** Poblar la base de datos con las URLs reales y funcionales para cada recurso.

## Auditoría de `NotesView.vue`

Esta vista presenta la arquitectura más compleja y, a su vez, el mayor problema de dependencia de datos estáticos de todo el proyecto.

**Hallazgos:**

1.  **Estructura de Wiki Hardcodeada (Crítico):**
    *   **Observación:** Toda la estructura de la wiki, incluyendo carpetas, archivos, metadatos y el contenido de cada página, está definida en un único y masivo array (`wikiTree`) en el script.
    *   **Impacto:** La sección es una maqueta no funcional. El propósito de una wiki o "segundo cerebro" es ser un sistema de conocimiento dinámico, y esta implementación es completamente estática. Es la mayor deuda técnica del proyecto.

2.  **Contenido HTML como Strings (Mala Práctica / Riesgo de Seguridad):**
    *   **Observación:** El contenido de cada nota se almacena como un string de HTML.
    *   **Impacto:** Dificulta la edición, es propenso a errores de sintaxis y representa un riesgo de seguridad (XSS). La práctica estándar es almacenar contenido en un formato como Markdown y renderizarlo de forma segura en el cliente.

3.  **Lógica de Búsqueda Ineficiente:**
    *   **Observación:** Se utiliza una función recursiva en el cliente para buscar el archivo activo dentro del array cada vez que el usuario hace clic en un elemento.
    *   **Impacto:** Es una solución ineficiente que no escalará. Una arquitectura correcta buscaría el recurso directamente en la base de datos por su ID.

**Plan de Corrección:**

*   **Acción 1 (Crítica):** Requiere una refactorización completa. Se debe diseñar una estructura de datos en Supabase (probablemente una tabla de "nodos" con auto-referencias para la jerarquía) y migrar todo el contenido.
*   **Acción 2 (Refactorización / Seguridad):** El contenido en la base de datos debe almacenarse como Markdown. El frontend debe usar una librería para parsear y renderizar este Markdown de forma segura.
*   **Acción 3 (Optimización):** La lógica de selección de archivos debe ser reemplazada por una llamada a la API para obtener el contenido del archivo específico por su ID.

## Auditoría de `ContactView.vue`

La auditoría de la vista de contacto revela un problema crítico que afecta directamente a su funcionalidad principal.

**Hallazgos:**

1.  **Formulario No Funcional (Crítico):**
    *   **Observación:** El formulario es una maqueta HTML. El atributo `action` apunta a `"#"` y no hay ninguna lógica de JavaScript (`@submit.prevent`) para capturar y procesar los datos.
    *   **Impacto:** La funcionalidad más importante de la página está completamente ausente. Los usuarios no pueden enviar mensajes, lo que rompe un canal de comunicación clave.

2.  **Falta de Feedback al Usuario (UX):**
    *   **Observación:** Al no haber lógica de envío, tampoco hay manejo de estados (cargando, éxito, error). El usuario no recibe ninguna indicación de lo que sucede después de hacer clic en "Enviar".
    *   **Impacto:** Mala experiencia de usuario. El usuario puede pensar que su mensaje fue enviado cuando en realidad no fue así.

**Plan de Corrección:**

*   **Acción 1 (Crítica):** Implementar la lógica de envío del formulario. Esto requiere:
    *   Añadir un manejador `@submit.prevent` al formulario.
    *   Vincular los campos del formulario a variables reactivas (`v-model`).
    *   Conectar el envío a un servicio de backend (ej. Supabase Functions, Formspree) para que el mensaje sea procesado y enviado por correo electrónico.
*   **Acción 2 (UX):** Añadir estados de carga y mensajes de feedback para informar al usuario si el mensaje se envió correctamente o si hubo un error.

## Auditoría de Páginas Legales (`PrivacyPolicyView.vue`, `CookiesPolicyView.vue`)

*Pendiente...*
