# Plan de Auditoría y Calidad de Código: juanda.pro (Q3 2025)

**Documento Maestro de Auditoría**

## 1. Introducción y Objetivos

Este documento detalla el plan de acción para una auditoría integral del proyecto `juanda.pro`. El objetivo principal es garantizar la máxima calidad, consistencia y mantenibilidad del código base.

**Objetivos Clave:**
- **Eliminación de Inconsistencias:** Erradicar por completo el "Sistema de Atmósfera" y cualquier otro elemento visual que no se alinee con la visión del proyecto.
- **Optimización del Código Base:** Identificar y eliminar componentes, vistas y recursos no utilizados (huérfanos) para reducir la complejidad.
- **Aseguramiento de la Calidad:** Realizar una revisión exhaustiva para detectar y documentar errores de programación, duplicación de código, mal uso de clases CSS y errores de semántica HTML.
- **Establecer una Base Sólida:** Dejar el proyecto en un estado óptimo, listo para futuras expansiones y con una documentación de hallazgos que sirva como referencia.

**Filosofía de Trabajo:**
Este proceso se rige por un principio de **no modificación**. Toda la fase de auditoría se centrará exclusivamente en la investigación y documentación. Ningún archivo de código será alterado hasta recibir la aprobación explícita del plan de corrección derivado de esta auditoría.

---

## 2. Fases y Flujos de Trabajo

### Fase 1: Preparación y Estructura

- [x] Crear el directorio `Referencias/06_Auditoria_Calidad_Q3_2025`.
- [x] Crear el documento maestro `00_Plan_de_Auditoria.md` (este documento).
- [x] Crear los archivos de registro de hallazgos:
  - [x] `01_Hallazgos_Sistema_Atmosfera.md`
  - [x] `02_Hallazgos_Componentes_Huerfanos.md`
  - [x] `03_Hallazgos_Calidad_Codigo.md`
  - [ ] `04_Plan_de_Correccion.md` (se creará al finalizar la auditoría).

### Fase 2: Ejecución de la Auditoría (Investigación y Análisis)

Esta fase se divide en tres ejes de investigación paralelos. Cada eje tiene su propio flujo de trabajo y checklist.

#### **Eje de Investigación 1: Erradicación del "Sistema de Atmósfera"**

*   **Objetivo:** Localizar y documentar cada instancia del código que implementa este efecto visual.
*   **Flujo de Trabajo Inteligente:**
    1.  **Revisión Inicial:** Partiré del análisis ya realizado en `HomeView.vue` para identificar las "firmas" de código del sistema: clases CSS, colores y filtros.
    2.  **Búsqueda Sistemática:** Realizaré una búsqueda global (`grep`) en todo el directorio `app/src` utilizando las siguientes palabras clave y patrones:
        *   `radial-gradient`
        *   `rgba(168, 85, 247`
        *   `blur(96px)`
        *   Clases de posicionamiento y Z-index asociadas: `-z-10`, `isolate`.
    3.  **Documentación:** Cada hallazgo se registrará en `01_Hallazgos_Sistema_Atmosfera.md` con la ruta del archivo, el número de línea y el fragmento de código exacto.

*   **Checklist de Progreso:**
    - [ ] Realizar búsqueda de `radial-gradient`.
    - [ ] Realizar búsqueda de color `rgba(168, 85, 247`.
    - [ ] Realizar búsqueda de `blur(96px)`.
    - [ ] Realizar búsqueda de clases de contexto (`-z-10`, `isolate`).
    - [ ] Consolidar y verificar todos los hallazgos en el documento de registro.

#### **Eje de Investigación 2: Depuración de Componentes y Vistas Huérfanos**

*   **Objetivo:** Identificar todos los archivos `.vue` que no son utilizados.
*   **Flujo de Trabajo Inteligente:**
    1.  **Inventario Completo:** Generaré una lista de todos los archivos `.vue` en `app/src/components` y `app/src/views`.
    2.  **Análisis de Dependencias (Punto de Reflexión):** Antes de revisar cada archivo, analizaré los puntos de entrada principales de la aplicación para entender el "árbol de dependencias":
        *   **Archivo Clave:** `app/src/router/index.ts` - Define todas las vistas que se cargan a través de rutas.
        *   **Archivo Clave:** `app/src/App.vue` - El componente raíz.
    3.  **Investigación Inversa:** Para cada componente de mi lista de inventario, realizaré una búsqueda global para ver si su nombre de archivo o su nombre de importación aparece en algún otro lugar del código. Prestaré especial atención a los que no aparezcan en el router.
    4.  **Verificación de Casos Especiales:** Investigaré componentes que se cargan dinámicamente o a través de `v-if` condicionales para no marcarlos incorrectamente como huérfanos.
    5.  **Documentación:** Los archivos confirmados como huérfanos se listarán en `02_Hallazgos_Componentes_Huerfanos.md`.

*   **Checklist de Progreso:**
    - [ ] Generar lista de todos los componentes (`.vue`).
    - [ ] Analizar `router/index.ts` y `App.vue`.
    - [ ] Revisar dependencias de `HomeView.vue`.
    - [ ] Revisar dependencias de `BlogView.vue` y `ArticleView.vue`.
    - [ ] Revisar dependencias de `ContactoViewV2.vue`.
    - [ ] Revisar dependencias de `SoyView.vue`.
    - [ ] Investigar componentes `V2` sospechosos (`BlogViewV2`, `SoyViewV2`, `ResourcesViewV2`).
    - [ ] Consolidar la lista final de huérfanos.

#### **Eje de Investigación 3: Auditoría de Calidad de Código**

*   **Objetivo:** Realizar una revisión manual y sistemática del código.
*   **Flujo de Trabajo Inteligente:** Trabajaré vista por vista, siguiendo el mapa de rutas del `router`. Para cada vista y sus componentes hijos, aplicaré las siguientes revisiones:

1.  **Revisión de Semántica HTML:**
    *   **Método:** Leeré la estructura del template en cada archivo `.vue`.
    *   **Criterios:** ¿Se usa `<main>` para el contenido principal? ¿Se usa `<nav>` para la navegación? ¿Son los encabezados (`<h1>`, `<h2>`, etc.) jerárquicos? ¿Se usan `figure` y `figcaption` para las imágenes con descripción?
    *   **Documentación:** Los problemas se registrarán en `03_Hallazgos_Calidad_Codigo.md` bajo la categoría "Semántica HTML".

2.  **Revisión de Duplicación de Código:**
    *   **Método:** Mientras reviso las vistas, buscaré patrones de HTML o lógica de TypeScript que se repitan.
    *   **Punto de Reflexión:** Si veo un bloque de código similar en dos sitios, me preguntaré: ¿Debería ser esto un componente reutilizable? ¿O una función de utilidad?
    *   **Documentación:** Las duplicaciones se registrarán con sugerencias para su refactorización.

3.  **Revisión de Clases TailwindCSS:**
    *   **Método:** Inspeccionaré los atributos `class`.
    *   **Criterios:** ¿Hay clases redundantes (ej. `m-4 mx-4`)? ¿Se están aplicando estilos que contradicen la guía de estilo? ¿Se podrían simplificar las clases con `@apply` en un `<style>` local si la lista es muy larga y se repite?
    *   **Documentación:** Los hallazgos se registrarán bajo "Uso de CSS".

*   **Checklist de Progreso:**
    - [ ] **Revisión Completa de Vista:** `HomeView.vue`
    - [ ] **Revisión Completa de Vista:** `ContactoViewV2.vue`
    - [ ] **Revisión Completa de Vista:** `BlogView.vue`
    - [ ] **Revisión Completa de Vista:** `ArticleView.vue`
    - [ ] **Revisión Completa de Vista:** `SoyView.vue`
    - [ ] **Revisión Completa de Componentes Globales:** (ej. `PageLayoutV2`, `NavBar`, `Footer`)

---

## 3. Formato de Documentación de Hallazgos

Cada problema encontrado se documentará en su archivo correspondiente siguiendo este formato:

```markdown
### Hallazgo #[Número]

- **Archivo(s):** `ruta/al/archivo.vue`
- **Línea(s):** [Número de línea]
- **Severidad:** [Crítica / Recomendada / Opcional]
- **Descripción:** [Explicación detallada del problema.]
- **Fragmento de Código Relevante:**
  ```[html|ts]
  // Código que muestra el problema
  ```
- **Solución Propuesta:** [Descripción clara de cómo se debería corregir el problema.]
```

---

Este plan maestro servirá como nuestra guía. Procederé con la Fase 2 una vez que esta estructura esté establecida.
