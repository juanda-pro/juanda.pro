# Especificación de Vista: Muestrario Tipográfico

**ID:** `Muestrario_Tipografico`
**Ruta del Fichero:** `app/src/views/TypographyShowcase.vue`

---

## 1. Propósito y Descripción General

Esta es una vista de desarrollo y referencia interna. Su propósito es mostrar todos los estilos tipográficos definidos en la `Guía de Estilo` y configurados en `tailwind.config.js`. Sirve para verificar que los estilos se aplican correctamente y para mantener la consistencia visual.

No está enlazada desde la navegación principal y solo es accesible a través de su ruta directa.

## 2. Fuente de Datos

No aplica. La vista contiene elementos de texto de ejemplo para cada estilo tipográfico.

## 3. Estructura y Componentes

- **`PageLayout`**: Componente principal que envuelve el contenido.
- **`PageHeader`**: Muestra el título de la página.
- **Elementos de Texto**: Múltiples etiquetas (`h1`, `h2`, `p`, `blockquote`, etc.) con las clases de Tailwind correspondientes para mostrar la jerarquía visual.
