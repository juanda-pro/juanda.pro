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

## 2. Tipografía

- **Familia Principal (Sans-serif):** La fuente por defecto es `Be Vietnam Pro`, cargada globalmente en `index.html`. No necesita ser declarada en Tailwind.
- **Familia Secundaria (Serif):** Se ha extendido la configuración para incluir una fuente serif (`Lora`) para uso específico en el cuerpo de textos largos (como artículos). Se aplica con la clase `font-serif`.
- **Escala y Pesos:** Se utiliza la escala de tamaño (`text-lg`, `text-xl`) y pesos (`font-semibold`, `font-bold`) por defecto de Tailwind.
