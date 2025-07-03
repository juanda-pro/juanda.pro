# Plan de Auditoría Global de Diseño: juanda.pro

Este documento detalla el plan de acción para realizar una auditoría exhaustiva del sistema de diseño del proyecto `juanda.pro`. El objetivo es identificar inconsistencias, desviaciones y oportunidades de mejora en los siguientes dominios:

1.  **Layout y Rejilla (Grid)**
2.  **Espaciado y Ritmo Vertical**
3.  **Componentes y Variantes**
4.  **Responsividad y Puntos de Quiebre (Breakpoints)**
5.  **Accesibilidad (A11y)**

La auditoría se realizará de forma sistemática, componente por componente y página por página, documentando cada hallazgo en el `Informe de Auditoría Global.md`.

---

### Fase 1: Auditoría de Layout y Rejilla
- **Espaciado y Layout:** Consistencia en márgenes, paddings, y estructura de la retícula.
- **Componentes de UI:** Unificación de estilos y comportamientos en elementos reutilizables (botones, tarjetas, etc.).
- **Responsividad:** Adaptación y comportamiento del diseño en diferentes tamaños de pantalla.
- **Calidad del Código de Frontend:** Identificación de malas prácticas (ej. estilos hardcodeados) que dificulten la mantenibilidad.

## 3. Metodología

1.  **Revisión por Componente:** Se analizará cada archivo `.vue` en la carpeta `src/components` de forma aislada para evaluar su estructura, estilo y props.
2.  **Revisión por Página:** Se analizará cada página en `src/views` para evaluar la composición, el layout y la interacción entre componentes.
3.  **Inspección con DevTools:** Se utilizarán las herramientas de desarrollo del navegador para inspeccionar el CSS, verificar el modelo de caja, y simular diferentes viewports.
4.  **Documentación de Hallazgos:** Cada inconsistencia o punto de mejora se documentará en un nuevo `Informe de Auditoría Global.md`, detallando el problema, la ubicación, el impacto y la solución sugerida.

## 4. Plan Detallado por Áreas

### Fase A: Sistema de Color
- [ ] Verificar que todos los colores de texto, fondo y borde provienen de las variables de `tailwind.config.js`.
- [ ] Identificar y listar cualquier color "mágico" o hardcodeado en el código.
- [ ] Auditar los estados `hover`, `focus`, `active` y `disabled` de los elementos interactivos para asegurar que usan los colores correctos del sistema de diseño.
- [ ] Confirmar que la paleta de colores del modo oscuro se aplica correctamente y ofrece un contraste adecuado.

### Fase B: Espaciado y Layout
- [ ] Comprobar que los márgenes y paddings siguen una escala consistente (ej. la escala de espaciado de Tailwind).
- [ ] Analizar la alineación de los elementos para asegurar la coherencia vertical y horizontal.
- [ ] Revisar el uso de `flexbox` y `grid` para layouts complejos, buscando oportunidades de simplificación.
- [ ] Verificar que los anchos de los contenedores principales son consistentes a través de las diferentes páginas.

### Fase C: Componentes de UI
- [ ] Crear un inventario de todos los componentes reutilizables (botones, tarjetas, inputs, etc.).
- [ ] Para cada tipo de componente, comparar todas sus instancias y documentar cualquier variación en estilo o marcado.
- [ ] Evaluar si componentes que parecen similares pueden ser unificados en un único componente más versátil.
- [ ] Revisar que los componentes no tengan estilos demasiado específicos que impidan su reutilización.

### Fase D: Responsividad
- [ ] Probar cada página en los breakpoints estándar (sm, md, lg, xl, 2xl).
- [ ] Documentar cualquier problema de overflow, elementos que se superponen o texto que se vuelve ilegible.
- [ ] Verificar que la navegación y los elementos interactivos son fáciles de usar en dispositivos móviles.
- [ ] Asegurar que las imágenes se cargan de forma optimizada y se adaptan correctamente al layout.

## 5. Entregable

El resultado de este plan será un único documento: `Informe de Auditoría Global.md`. Este informe contendrá la lista detallada de todos los hallazgos, clasificados por área y priorizados por impacto, con recomendaciones claras para su corrección.
