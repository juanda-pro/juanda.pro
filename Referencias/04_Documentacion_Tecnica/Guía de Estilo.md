# Guía de Estilo y Sistema de Diseño (v1.1)

Este documento es la fuente de la verdad para el sistema de diseño visual, sincronizado con `tailwind.config.js`.

---

## 1. Paleta de Colores

La paleta es semántica y está preparada para los modos claro y oscuro.

### Colores de Marca (Brand)
| Token | Valor | Uso |
|---|---|---|
| `brand-dark` | `#121214` | El "negro" de la marca. |
| `brand-accent` | `#F6C90E` | El "amarillo" principal para CTAs y acentos. |
| `brand-accent-darker` | `#D9B40C` | Variante más oscura del acento para estados hover/focus. |

### Fondos y Superficies (Backgrounds & Surfaces)
| Token | Valor | Uso |
|---|---|---|
| `bg-light` | `#FFFFFF` | Fondo principal en modo claro. |
| `bg-dark` | `#121214` | Fondo principal en modo oscuro. |
| `surface-light` | `#F5F5F5` | Superficies elevadas (tarjetas) en modo claro. |
| `surface-dark` | `#28282D` | Superficies elevadas en modo oscuro. |
| `surface-deeper-dark` | `#202023` | Superficies aún más profundas en modo oscuro. |
| `surface-accent-light` | `#F3F4F6` | Fondos de acento sutil (citas) en modo claro. |
| `surface-accent-dark` | `#374151` | Fondos de acento sutil en modo oscuro. |

### Textos (Text)
| Token | Valor | Uso |
|---|---|---|
| `primary-light` | `#121214` | Texto principal en modo claro. |
| `secondary-light` | `#374151` | Texto secundario en modo claro (contraste aumentado). |
| `primary-dark` | `#FFFFFF` | Texto principal en modo oscuro. |
| `secondary-dark` | `#E5E7EB` | Texto secundario en modo oscuro (contraste aumentado). |
| `text-on-accent` | `#FFFFFF` | Texto para ser usado sobre fondos `brand-accent`. |

### Bordes y Divisores (Borders & Dividers)
| Token | Valor | Uso |
|---|---|---|
| `border-light` | `#E5E7EB` | Bordes de componentes en modo claro. |
| `border-dark` | `#374151` | Bordes de componentes en modo oscuro. |
| `divider-light` | `#E5E7EB` | Separadores visuales en modo claro. |
| `divider-dark` | `#374151` | Separadores visuales en modo oscuro. |

### Acentos Semánticos (Semantic Accents)
| Token | Valor | Uso |
|---|---|---|
| `accent-info` | `#4338CA` | Acentos informativos (modo claro). |
| `accent-info-dark` | `#A78BFA` | Acentos informativos (modo oscuro). |
| `accent-success` | `#059669` | Para indicar éxito (contraste mejorado). |
| `accent-error` | `#DC2626` | Para indicar error (contraste mejorado). |

### Misceláneos
| Token | Valor | Uso |
|---|---|---|
| `dot-light` | `rgba(0,0,0,0.18)` | Color de la malla de puntos en modo claro. |
| `dot-dark` | `rgba(255,255,255,0.11)` | Color de la malla de puntos en modo oscuro. |

---

## 2. Tipografía (v1.2 - Actualizada)

La configuración de fuentes está centralizada en `tailwind.config.js` y se cargan desde Google Fonts en `index.html`.

- **Fuente Principal (Sans-serif):** `Figtree`. Se aplica por defecto a todo el cuerpo del texto. Utilidad: `font-sans`.
- **Fuente para Encabezados:** `Plus Jakarta Sans`. Usada para títulos y encabezados importantes para un mayor impacto visual. Utilidad: `font-heading`.
- **Fuente Secundaria (Serif):** `Lora`. Usada para el cuerpo de textos largos, como artículos, para mejorar la legibilidad. Utilidad: `font-serif`.
- **Fuente Monoespaciada:** `JetBrains Mono`. Para cualquier texto que represente código. Utilidad: `font-mono`.
- **Escala y Pesos:** Se utiliza la escala de tamaño (`text-lg`, `text-xl`) y pesos (`font-semibold`, `font-bold`) por defecto de Tailwind.

### Jerarquía de Tamaños de Texto (Actualizada v1.2)

La jerarquía tipográfica ha sido optimizada para mejorar la legibilidad en todo el sitio:

| Elemento | Tamaño Anterior | Tamaño Actual | Uso |
|---|---|---|---|
| **Párrafos principales** | `text-lg` | `text-xl` | Texto principal en secciones hero y contenido destacado |
| **Párrafos normales** | `text-base` | `text-lg` | Texto de cuerpo estándar, descripciones, contenido general |
| **Párrafos pequeños** | `text-sm` | `text-base` | Metadatos, fechas, enlaces de políticas |
| **Párrafos destacados** | `text-lg md:text-xl` | `text-xl md:text-2xl` | Texto puente, introducciones importantes |
| **Títulos** | Sin cambios | Sin cambios | Se mantienen los tamaños originales |

**Nota:** Los títulos y encabezados mantienen sus tamaños originales para preservar la jerarquía visual establecida.
