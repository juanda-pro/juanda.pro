# Bitácora del Proyecto: juanda.pro

Este documento sirve como un registro histórico de las decisiones, problemas resueltos y tareas completadas a lo largo del desarrollo del proyecto. Se actualiza al final de cada sesión de trabajo significativa siguiendo el Protocolo 3.

---

### Bloque de Sesión: Fundamentos y Navegación (Fecha estimada: Junio 2025)

**Problemas y Peticiones Registradas:**
- **Usuario:** Reporta errores de navegación y renderizado al cambiar de vistas. La página se queda en blanco o no se actualiza correctamente.
- **Usuario:** Solicita asegurar que todas las vistas tengan un único elemento raíz para cumplir con los requisitos de `<Transition>` de Vue.
- **Agente:** Detecta que el error de navegación se debe a la falta de un atributo `:key` en el componente `<RouterView>` dentro de `App.vue`, lo que impide que Vue detecte los cambios de ruta y fuerce el re-renderizado.
- **Agente:** Identifica un error de `props` en `FeatureCard.vue` (se esperaba `Object` y se recibía `Function` para el icono) y datos mal estructurados pasados a `ArticleCard.vue` desde `HomeView.vue`.

---
**Tareas Resueltas:**
- [x] **Diagnosticar error de navegación:** Identificado problema en `<RouterView>`.
- [x] **Solucionar error de navegación:** Añadido `:key="route.path"` y un componente `<transition>` a `<RouterView>` en `App.vue`.
- [x] **Corregir props en `FeatureCard`:** Ajustada la definición del prop `icon` para aceptar una `Function`.
- [x] **Corregir estructura de datos en `HomeView`:** Ajustada la forma en que los datos de los artículos se pasan a `ArticleCard`.
- [x] **Unificar elemento raíz en vistas:** Revisadas y corregidas las vistas para tener un único elemento raíz.

---

### Bloque de Sesión: Unificación Visual y Paleta de Colores (Fecha estimada: Junio 2025)

**Problemas y Peticiones Registradas:**
- **Usuario:** Solicita unificar el fondo de todas las páginas para que usen la misma malla de puntos que `Inicio` y `Blog`.
- **Usuario:** Pide refinar la paleta de colores para que sea semántica y fácil de mantener, resolviendo inconsistencias y problemas de contraste.
- **Agente:** Detecta que la actualización de `tailwind.config.js` con la nueva paleta semántica no se propagó a los componentes, resultando en colores incorrectos y un modo oscuro roto.
- **Agente:** Identifica múltiples clases de color `gray-*` y colores hardcodeados que deben ser reemplazados por los nuevos tokens semánticos.
- **Usuario:** Reporta problemas graves de contraste (incumplimiento de WCAG AA) en textos, botones y enlaces en toda la web.
- **Usuario:** Señala que la barra de menú tiene transparencias no deseadas.

---
**Tareas Resueltas:**
- [x] **Aplicar fondo global:** Modificado `App.vue` para que el fondo con la malla de puntos se aplique a todas las vistas de forma global.
- [x] **Auditoría y limpieza de colores:** Reemplazadas todas las clases de color `gray-*` y ad-hoc por los nuevos tokens semánticos (`text-primary-light`, `bg-dark`, etc.) en toda la base de código.
- [x] **Corrección de contraste:** Ajustadas las clases de texto en componentes (`NoteCard`, `FeatureCard`, `Footer`, etc.) y vistas para garantizar un contraste mínimo AA.
- [x] **Corregir opacidad del Header:** Asegurado que la barra de menú sea completamente opaca en ambos modos.
- [x] **Actualizar Guía de Estilo:** Documentada la nueva paleta de colores semántica.

---

### Bloque de Sesión: Rediseño del Blog (2025-06-25 18:09)

**Problemas y Peticiones Registradas:**
- **Usuario:** Solicita rediseñar la página del Blog para que sea más simple y consistente, tomando como referencia la sección "Latest stories" de Engadget.
- **Usuario:** Pide archivar el diseño complejo anterior de las tarjetas del blog (basado en Container Queries) y eliminar todas sus referencias.
- **Agente:** Analiza la referencia de Engadget y propone un nuevo layout para `ArticleCard.vue` (imagen a la izquierda, texto a la derecha en desktop; apilado en móvil) y una simplificación de `BlogView.vue`.

---
**Tareas Resueltas:**
- [x] **Archivar componente legacy:** El código del `ArticleCard` antiguo se ha externalizado.
- [x] **Simplificar `BlogView.vue`:** Eliminada la lógica de la cuadrícula (`grid`, `getArticleClass`) y reemplazada por un contenedor `flex` vertical.
- [x] **Reconstruir `ArticleCard.vue`:** El componente fue reescrito desde cero para coincidir con el diseño de Engadget, usando Flexbox para el layout responsive y ocultando el resumen en móvil.
- [x] **Eliminar referencias legacy:** Se han limpiado todas las dependencias y usos del componente de tarjeta antiguo.

---

### Bloque de Sesión: Refinamiento de Contraste (2025-06-25 21:12)

**Problemas y Peticiones Registradas:**
- **Usuario:** Reporta que el contraste del texto en las tarjetas de los tres pilares es deficiente en hover en modo oscuro (texto blanco sobre fondo amarillo).
- **Usuario:** Solicita aumentar el contraste de la malla de puntos de fondo (dotted-background) en ambos modos, para que sea más visible.

---
**Tareas Resueltas:**
- [x] **Corregir contraste en pilares (hover):** Se ha asegurado que el texto en hover sea oscuro (`text-gray-900`) sobre el fondo amarillo, garantizando la legibilidad en ambos modos visuales.
- [x] **Aumentar contraste de malla de puntos:** Se ha modificado `tailwind.config.js` para aumentar la opacidad de los colores `dot-light` (a 0.18) y `dot-dark` (a 0.11).

---

### Bloque de Sesión: Rediseño de Recursos y Ajustes Finales (2025-06-26 20:18)

**Problemas y Peticiones Registradas:**
- **Usuario:** Solicita un rediseño completo de la página de "Recursos" para alinearla con la estética de "Notas".
- **Usuario:** Pide que las tarjetas de recursos sean completamente clicables y abran un modal con información detallada, en lugar de tener un botón de acción.
- **Usuario:** Reporta que la paleta de colores de las tarjetas no respeta la identidad de marca y pide una revisión inspirada en otros componentes ya validados.
- **Usuario:** Solicita que el menú lateral de la página de "Notas" esté desplegado por defecto al cargar la página.

---
**Tareas Resueltas:**
- [x] **Rediseño de `ResourceCard.vue`:** Se ha implementado un nuevo diseño para las tarjetas, eliminando el botón de acción y haciendo que toda la tarjeta sea un activador para el modal.
- [x] **Creación de `ResourceModal.vue`:** Se ha desarrollado un componente de modal reutilizable que muestra contenido detallado del recurso, con opciones de cierre flexibles (botón, tecla Escape, clic exterior).
- [x] **Integración en `ResourcesView.vue`:** Se ha conectado la lógica para que las tarjetas abran el modal correspondiente con el recurso seleccionado.
- [x] **Refinamiento de Paleta de Colores:** Se ha ajustado la paleta de colores en `ResourceCard.vue`, utilizando el amarillo de la marca (`brand-accent`) como color principal y tonos coherentes para las demás categorías.
- [x] **Menú de Notas por Defecto:** Se ha modificado el estado inicial en `WikiLayout.vue` para que el menú lateral aparezca desplegado por defecto.
- [x] **Sincronización de Documentación:** Se ha actualizado `Recursos.md` para reflejar todos los cambios de diseño y funcionalidad implementados.
