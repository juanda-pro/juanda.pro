# Plan de Implementación: Corrección de Auditoría Tipográfica

**Objetivo:** Implementar las correcciones identificadas en el `Informe de Auditoría.md` de forma segura, incremental y verificable, garantizando que no se introduzcan nuevos errores ni se rompa la funcionalidad existente.

**Metodología:**

1.  **Rama Git Aislada:** Todos los cambios se realizarán en una nueva rama dedicada: `feature/typography-audit-fixes`.
2.  **Commits Atómicos:** Cada paso lógico se confirmará con un commit claro y descriptivo.
3.  **Verificación Continua:** Después de cada cambio significativo, se lanzará el servidor de desarrollo local para una verificación visual inmediata.
4.  **Priorización:** El plan está ordenado para abordar primero los problemas de configuración global (la base) antes de pasar a los refinamientos en componentes.

---

## Fase 1: Corrección de la Configuración Global (Arreglar la Base)

*Esta fase soluciona los errores de configuración que impiden que Tailwind funcione como se espera.*

**Paso 1.1: Fusionar `fontFamily` en `tailwind.config.js`**
- **Acción:** Mover la clave `serif` a la primera declaración de `fontFamily` y eliminar la segunda declaración duplicada.
- **Commit:** `fix(config): merge duplicate fontFamily key in tailwind config`
- **Verificación:** El proceso de compilación de Vite debe funcionar sin errores.

**Paso 1.2: Limpiar Código Obsoleto en `tailwind.config.js`**
- **Acción:** Eliminar todas las clases de fuente del "laboratorio de tipografía" que ya no se usan.
- **Commit:** `refactor(config): remove obsolete typography lab classes`
- **Verificación:** El proceso de compilación de Vite debe funcionar sin errores.

**Paso 1.3: Eliminar Override Global en `main.css`**
- **Acción:** Eliminar la regla `body { font-family: 'Inter', sans-serif; }`.
- **Commit:** `fix(css): remove global font-family override from main.css`
- **Verificación:** Al iniciar el servidor, la fuente de los textos sin clase cambiará a la fuente sans-serif por defecto del navegador. **Este es un cambio esperado y correcto** que prepara el terreno para el siguiente paso.

---

## Fase 2: Implementación de la Solución Estratégica (El Gran Arreglo)

*Este es el paso más importante. Con un solo cambio, se corregirá la mayor parte de la tipografía del sitio.*

**Paso 2.1: Aplicar Fuente Base en `App.vue`**
- **Acción:** Añadir la clase `font-sans` al `div` raíz del componente `App.vue`.
- **Commit:** `feat(app): set global base font in App.vue`
- **Verificación:** Iniciar el servidor de desarrollo. **El 90% del texto del sitio (párrafos, enlaces, etc.) debería ahora renderizarse correctamente con la fuente `Figtree`**. Revisar la página de inicio, header y footer para confirmar el cambio masivo.

---

## Fase 3: Refinamientos en Componentes (Ajustes Finos)

*Con la base corregida, esta fase consiste en aplicar la fuente de titulares (`font-heading`) donde sea semánticamente correcto.*

**Paso 3.1: Corregir el Logo en `Header.vue`**
- **Acción:** Añadir la clase `font-heading` a los `RouterLink` del logo (tanto en la vista de escritorio como en la móvil).
- **Commit:** `fix(header): apply heading font to site logo`
- **Verificación:** El logo "juanda.pro" debe usar la fuente `Plus Jakarta Sans`.

**Paso 3.2: Corregir el Título en `Footer.vue`**
- **Acción:** Añadir la clase `font-heading` al `<h2>` "Hablemos.".
- **Commit:** `fix(footer): apply heading font to section title`
- **Verificación:** El título del footer debe usar `Plus Jakarta Sans`.

**Paso 3.3: Corregir Título en `MiniArticleCard.vue`**
- **Acción:** Añadir la clase `font-heading` al `<h3>` del título del artículo.
- **Commit:** `fix(components): apply heading font to MiniArticleCard title`
- **Verificación:** Los títulos de las tarjetas de artículo pequeñas deben usar `Plus Jakarta Sans`.

---

## Fase 4: Verificación Final y Mejoras Opcionales

**Paso 4.1: Revisión Visual Completa**
- **Acción:** Navegar por todas las páginas y componentes del sitio para confirmar que la tipografía es consistente y se alinea con la Guía de Estilo.

**Paso 4.2 (Opcional - Code Quality):**
- **Acción:** Considerar la implementación de las mejoras de calidad de código identificadas en la auditoría, como la abstracción de iconos SVG y la reubicación de estilos de componentes, en commits separados.

Al finalizar este plan, la deuda técnica relacionada con la tipografía quedará completamente saldada.
