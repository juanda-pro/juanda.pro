# Plan de Re-Auditoría y Análisis de Riesgos

**Objetivo:** Realizar una segunda revisión de la auditoría inicial para verificar los hallazgos, evaluar la idoneidad y los riesgos de las soluciones propuestas, identificar posibles omisiones y diseñar un plan de implementación seguro y robusto.

---

### Fase 1: Creación del Plan de Implementación Seguro

1.  **Definir Protocolo de Cambios Seguros:**
    *   **Control de Versiones:** Todos los cambios se realizarán en una nueva rama de Git (`feature/typography-audit-fixes`) para aislar el trabajo y facilitar la revisión y el rollback si fuera necesario.
    *   **Verificación Local:** Después de cada cambio significativo, se levantará el servidor de desarrollo local (`npm run dev`) para una inspección visual completa de las páginas y componentes afectados.
    *   **Pruebas de Regresión Visual:** Se comprobará que las correcciones no introducen efectos secundarios no deseados en otros elementos del diseño (layout, colores, espaciado).
    *   **Linting y Formateo:** Se ejecutarán los comandos de linting y formateo de código para asegurar la calidad y consistencia antes de confirmar los cambios.

### Fase 2: Re-verificación de Hallazgos y Análisis de Soluciones

Este proceso se realizará de forma secuencial, analizando cada hallazgo del informe original.

1.  **Hallazgo 1.1: Error en `tailwind.config.js`**
    *   **Verificación:** Volver a inspeccionar el archivo para confirmar la presencia de la clave `fontFamily` duplicada.
    *   **Análisis de Solución:** Evaluar si la eliminación es la única y mejor solución. ¿Podría fusionarse? (Conclusión preliminar: la eliminación es correcta, ya que la segunda declaración es redundante y errónea).
    *   **Análisis de Riesgo:** **Bajo.** La modificación de este archivo es global, pero el error es tan claro que la corrección es directa. El riesgo principal es un error de sintaxis al editar, que sería detectado inmediatamente por el servidor de desarrollo al arrancar.
    *   **Mitigación:** Realizar el cambio de forma aislada y reiniciar el servidor de inmediato.

2.  **Hallazgo 1.2: Conflicto en `main.css`**
    *   **Verificación:** Inspeccionar `main.css` y `App.vue` para confirmar la importación de la fuente y su aplicación al `body`, y verificar cómo se gestionan las fuentes en `App.vue`.
    *   **Análisis de Solución:** Confirmar que la eliminación de la regla en `main.css` es la acción correcta, dado que `App.vue` ya gestiona la carga de fuentes de forma centralizada.
    *   **Análisis de Riesgo:** **Bajo.** Similar al anterior. El riesgo es que algún elemento dependiera implícitamente de esta regla global. La auditoría sugiere que no es el caso, pero se verificará visualmente.
    *   **Mitigación:** Tras la eliminación, revisar todas las páginas para confirmar que las fuentes base se aplican correctamente a través de las clases de Tailwind.

3.  **Hallazgos en Componentes (2.1, 2.2, 3.1, 4.2, 4.3, 4.4)**
    *   **Verificación:** Inspeccionar uno por uno cada componente (`Header`, `Footer`, `HomeView`, etc.) y confirmar la ausencia de las clases `font-sans` y `font-heading` en los elementos señalados. Durante esta revisión, buscar activamente **nuevos hallazgos**: ¿hay otros elementos de texto (etiquetas, spans, etc.) sin la clase de fuente correcta? ¿Hay inconsistencias en los tamaños de fuente o espaciados que no se detectaron?
    *   **Análisis de Solución:** La solución propuesta es añadir las clases manualmente. Evaluar si en algún caso sería mejor crear un componente base (ej. `BaseParagraph`) o aplicar las clases a un contenedor padre.
    *   **Análisis de Riesgo:** **Medio.** El riesgo aquí es la intervención manual masiva. Es fácil omitir un elemento o introducir un error tipográfico. También existe el riesgo de aplicar una clase incorrecta (ej. `font-heading` a un párrafo).
    *   **Mitigación:** Realizar los cambios componente por componente. Después de modificar cada archivo, realizar una revisión visual específica de ese componente en el navegador. Realizar commits pequeños y descriptivos por cada componente o grupo lógico de componentes.

### Fase 3: Actualización del Informe de Auditoría

1.  A medida que se complete cada paso de la Fase 2, se añadirá una sección de **"Re-evaluación y Análisis de Riesgos"** debajo de cada hallazgo en el `Informe de Auditoría.md` original.
2.  Cualquier **nuevo hallazgo** se documentará en una nueva sección del informe.

### Fase 4: Entrega

1.  Presentar el `Informe de Auditoría.md` actualizado y este `Plan de Re-Auditoría.md` para la aprobación final del usuario.
2.  **No ejecutar ninguna corrección** hasta recibir la orden explícita.
