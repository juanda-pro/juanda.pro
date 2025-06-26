# Guía de Estilo y Sistema de Diseño

Este documento es la fuente de la verdad para todas las decisiones de diseño visual, incluyendo colores, tipografía, espaciado y componentes base.

---

## 1. Paleta de Colores

La paleta de colores está definida en `tailwind.config.js` y se organiza de forma semántica para garantizar la consistencia y facilitar el mantenimiento.

### Colores de Marca (Brand)
Son los colores que definen la identidad visual del proyecto.

| Nombre (Token) | Valor Hex | Uso Principal |
|---|---|---|
| `brand-dark` | `#121214` | El "negro" de la marca. Se usa para fondos principales en modo oscuro y textos primarios en modo claro. |
| `brand-accent` | `#F6C90E` | El "amarillo" de la marca. Se usa para llamadas a la acción (botones, enlaces importantes) y elementos que requieren atención. |

### Fondos y Superficies (Backgrounds & Surfaces)
Colores base para los contenedores principales y elementos de la interfaz.

| Nombre (Token) | Valor Hex | Uso Principal |
|---|---|---|
| `bg-light` | `#FFFFFF` | Fondo principal de la página en modo claro. |
| `bg-dark` | `#121214` | Fondo principal de la página en modo oscuro. |
| `surface-light` | `#F5F5F5` | Color para superficies "elevadas" (tarjetas, paneles) en modo claro. |
| `surface-dark` | `#1C1C1F` | Color para superficies secundarias (footer, nav, tarjetas) en modo oscuro. |

### Textos (Text)
Colores para todo el contenido textual, garantizando legibilidad.

| Nombre (Token) | Valor Hex | Uso Principal |
|---|---|---|
| `text-primary-light` | `#121214` | Texto principal y títulos en modo claro. |
| `text-tertiary-light` | `#5A5A5F` | Texto terciario o de apoyo (ej. fechas) en modo claro. |
| `text-primary-dark` | `#FFFFFF` | Texto principal y títulos en modo oscuro. |
| `text-secondary-dark` | `#A0A0A5` | Texto secundario en modo oscuro. |
| `text-tertiary-dark` | `#71717A` | Texto terciario o de apoyo en modo oscuro. |

### Acentos Semánticos (Semantic Accents)
Colores usados con moderación para comunicar estados específicos (éxito, error, información).

| Nombre (Token) | Valor Hex | Uso |
|---|---|---|
| `accent-info` | `#4338CA` | Para mensajes informativos o elementos decorativos sutiles. |
| `accent-success` | `#10B981` | Para indicar éxito en una operación (ej. formulario enviado). |
| `accent-error` | `#EF4444` | Para indicar un error o una acción destructiva. |

---

## 2. Tipografía

- **Familia Principal:** `BeVietnamPro` (sans-serif).
- **Fallback:** `sans-serif`.
- **Escala de Tamaño:** La escala de tamaños se gestiona a través de las clases de utilidad de Tailwind (ej. `text-lg`, `text-xl`, `text-4xl`). Se debe mantener la consistencia en el uso de las jerarquías (H1, H2, H3, párrafo, etc.).
- **Pesos:** Se utilizarán principalmente los pesos `regular`, `medium`, `semibold` y `bold`.

---

## 3. Espaciado

El sistema de espaciado se basa en la escala por defecto de Tailwind (múltiplos de 4px). Se debe usar de forma consistente para márgenes, paddings y gaps para mantener un ritmo visual coherente.

---

## 4. Bordes y Sombras

- **Bordes y Sombras:** Se utilizarán bordes y sombras para crear jerarquía y profundidad, siguiendo las mejores prácticas de diseño moderno. Todas las clases (`border-*`, `shadow-*`, `ring-*`) deben utilizar los colores de la paleta semántica para garantizar la coherencia visual en ambos modos (claro/oscuro).
