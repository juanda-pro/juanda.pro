# Plan de Corrección Post-Auditoría

## 1. Objetivo

Corregir las desviaciones e inconsistencias identificadas en el **Informe de Auditoría Global** para lograr un sistema de diseño 100% cohesivo, robusto y mantenible. Este plan prioriza las correcciones de mayor impacto para asegurar la integridad del layout y la tipografía antes de proceder con mejoras menores.

## 2. Metodología

Las correcciones se abordarán en estricto orden de prioridad. Cada tarea se implementará y verificará de forma aislada para minimizar riesgos y facilitar la validación. No se procederá a la siguiente tarea hasta que la anterior esté completamente validada.

---

## 3. Correcciones de Prioridad Alta

### Corrección 1: Unificar Layout en `HomeView.vue`

- **Problema:** La sección "Hero" no utiliza el componente `SectionWrapper.vue`, rompiendo la consistencia del layout principal.
- **Archivo a Modificar:** `app/src/views/HomeView.vue`

**Pasos de Implementación:**

1.  **Refactorizar Contenedor:** Envolver el contenido de la sección "Hero" con el componente `<SectionWrapper>`.
2.  **Eliminar Estilos Redundantes:** Quitar las clases de contenedor (`max-w-3xl`, `mx-auto`, `px-*`, `py-*`) del `div` principal de la sección "Hero", ya que ahora son gestionadas por `SectionWrapper`.
3.  **Ajustar Estilos Internos:** Revisar y ajustar cualquier estilo hijo que pudiera verse afectado por el cambio de contenedor para asegurar que el resultado visual se mantenga o mejore.

**Criterio de Verificación:** La sección "Hero" debe estar perfectamente alineada con el resto de las secciones de la página que usan `SectionWrapper`. El espaciado vertical y horizontal debe ser consistente y el comportamiento responsivo debe ser impecable.

### Corrección 2: Unificar Tipografía en `BlogPost.vue`

- **Estado:** ❓ No aplicable (Componente Eliminado)
- **Observación:** El componente `BlogPost.vue` fue identificado en la auditoría como un punto de corrección prioritaria. Sin embargo, el archivo ha sido eliminado del proyecto, por lo que la corrección ya no es necesaria.

---

## 4. Siguientes Correcciones

Con las tareas de alta prioridad completadas o resueltas, procedemos con los refinamientos finales para alcanzar el 100% de consistencia.

-   **`Header.vue`:** Reemplazar la altura fija `h-20` por un valor de la escala de espaciado de Tailwind (p. ej., `h-16`).
-   **`FeatureCard.vue`:** ✅ **Completado.** Se han eliminado las clases `group-hover` redundantes.
