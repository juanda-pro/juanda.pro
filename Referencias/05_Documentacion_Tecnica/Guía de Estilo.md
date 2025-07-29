# Guía de Estilo y Sistema de Diseño (v2.0)

> **✅ DOCUMENTO ACTUALIZADO - Enero 2025**
> Esta guía ha sido completamente sincronizada con el código fuente actual, reflejando todos los tokens de diseño, componentes y patrones implementados en producción.

Este documento es la fuente de la verdad para el sistema de diseño visual, completamente sincronizado con `tailwind.config.js` y los componentes actuales.

---

## 1. Sistema de Tokens de Color (Actualizado)

Sistema completo de tokens semánticos optimizado para modo claro y oscuro, sincronizado con `tailwind.config.js`.

### 🎨 Colores de Marca (Brand)
| Token | Valor | Uso | Clase Tailwind |
|---|---|---|---|
| `brand-dark` | `#121214` | Color principal de marca, negro profundo | `bg-brand-dark`, `text-brand-dark` |
| `brand-accent` | `#F6C90E` | Amarillo distintivo para CTAs y elementos destacados | `bg-brand-accent`, `text-brand-accent` |
| `brand-accent-darker` | `#D9B40C` | Variante oscura del acento para estados hover/focus | `hover:bg-brand-accent-darker` |

### 🏠 Fondos Principales (Background)
| Token | Valor | Uso | Clase Tailwind |
|---|---|---|---|
| `background-light` | `#FFFFFF` | Fondo principal en modo claro | `bg-background-light` |
| `background-dark` | `#121214` | Fondo principal en modo oscuro | `bg-background-dark` |

### 📄 Superficies y Capas (Surface)
| Token | Valor | Uso | Clase Tailwind |
|---|---|---|---|
| `surface-light` | `#F5F5F5` | Tarjetas y elementos elevados (modo claro) | `bg-surface-light` |
| `surface-dark` | `#28282D` | Tarjetas y elementos elevados (modo oscuro) | `bg-surface-dark` |
| `surface-deeper-dark` | `#202023` | Superficies con mayor profundidad (modo oscuro) | `bg-surface-deeper-dark` |
| `surface-accent-light` | `#F3F4F6` | Fondos sutiles para destacar contenido (modo claro) | `bg-surface-accent-light` |
| `surface-accent-dark` | `#374151` | Fondos sutiles para destacar contenido (modo oscuro) | `bg-surface-accent-dark` |

### ✍️ Textos (Text)
| Token | Valor | Uso | Clase Tailwind |
|---|---|---|---|
| `primary-light` | `#121214` | Texto principal en modo claro | `text-primary-light` |
| `secondary-light` | `#374151` | Texto secundario en modo claro | `text-secondary-light` |
| `primary-dark` | `#FFFFFF` | Texto principal en modo oscuro | `text-primary-dark` |
| `secondary-dark` | `#E5E7EB` | Texto secundario en modo oscuro | `text-secondary-dark` |
| `text-on-accent` | `#FFFFFF` | Texto sobre fondos de acento | `text-text-on-accent` |

### 🔲 Bordes y Divisores (Border & Divider)
| Token | Valor | Uso | Clase Tailwind |
|---|---|---|---|
| `border-light` | `#E5E7EB` | Bordes de componentes en modo claro | `border-border-light` |
| `border-dark` | `#374151` | Bordes de componentes en modo oscuro | `border-border-dark` |
| `divider-light` | `#E5E7EB` | Separadores visuales en modo claro | `border-divider-light` |
| `divider-dark` | `#374151` | Separadores visuales en modo oscuro | `border-divider-dark` |

### 🎯 Acentos Semánticos (Semantic Accents)
| Token | Valor | Uso | Clase Tailwind |
|---|---|---|---|
| `accent-info` | `#4338CA` | Información y enlaces (modo claro) | `text-accent-info`, `bg-accent-info` |
| `accent-info-dark` | `#A78BFA` | Información y enlaces (modo oscuro) | `text-accent-info-dark` |
| `accent-success` | `#059669` | Estados de éxito y confirmación | `text-accent-success` |
| `accent-error` | `#DC2626` | Estados de error y advertencia | `text-accent-error` |

### 🔘 Elementos Decorativos (Decorative)
| Token | Valor | Uso | Clase Tailwind |
|---|---|---|---|
| `dot-light` | `rgba(0,0,0,0.18)` | Patrones de puntos en modo claro | `text-dot-light` |
| `dot-dark` | `rgba(255,255,255,0.11)` | Patrones de puntos en modo oscuro | `text-dot-dark` |

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

---

## 3. Patrones de Diseño Identificados

### 🎨 Consistencia Visual
- **Sombras uniformes:** `shadow-lg` para tarjetas principales, `shadow-sm` para elementos sutiles
- **Bordes redondeados:** `rounded-lg` como estándar, `rounded-xl` para elementos destacados
- **Transiciones suaves:** `transition-all duration-300` para interacciones

### 🖱️ Estados Interactivos
- **Hover:** Cambios sutiles de color y elevación (`hover:shadow-xl`)
- **Focus:** Anillos de enfoque accesibles (`focus:ring-2 focus:ring-brand-accent`)
- **Active:** Feedback visual inmediato en botones y enlaces

### 📱 Responsividad
- **Mobile-first:** Diseño optimizado para dispositivos móviles
- **Breakpoints:** Uso consistente de `md:`, `lg:`, `xl:` para adaptación
- **Espaciado adaptativo:** Márgenes y padding que escalan con el viewport

### 🌙 Modo Oscuro
- **Soporte completo:** Todos los componentes implementan `dark:` variants
- **Contraste optimizado:** Colores ajustados para legibilidad en ambos modos
- **Transición suave:** Cambio fluido entre modos claro y oscuro

---

## 4. Sistema de Espaciado

### 📏 Espaciado Estándar
| Uso | Clase | Valor | Aplicación |
|---|---|---|---|
| **Micro** | `p-2`, `m-2` | 8px | Padding interno de botones pequeños |
| **Pequeño** | `p-4`, `m-4` | 16px | Espaciado entre elementos relacionados |
| **Medio** | `p-6`, `m-6` | 24px | Padding de tarjetas, separación de secciones |
| **Grande** | `p-8`, `m-8` | 32px | Márgenes de secciones principales |
| **Extra Grande** | `p-12`, `m-12` | 48px | Separación entre bloques de contenido |
| **Masivo** | `p-16`, `m-16` | 64px | Espaciado de hero sections |

### 📐 Espaciado Responsivo
- **Móvil:** `p-4 md:p-6 lg:p-8` - Escalado progresivo
- **Secciones:** `py-12 md:py-16 lg:py-20` - Espaciado vertical adaptativo
- **Contenedores:** `px-4 md:px-6 lg:px-8` - Márgenes laterales responsivos

---

## 5. Componentes Destacados

### 🏆 Componentes Ejemplares

#### `CtaCard.vue` - Tarjeta de Llamada a la Acción
- **Características:** Diseño atractivo con patrón ondulado de fondo
- **Interactividad:** Efectos hover sofisticados con transformaciones
- **Accesibilidad:** Contraste optimizado y estados de foco claros
- **Uso:** Conversiones y acciones principales del usuario

#### `ContactForm.vue` - Formulario de Contacto Inteligente
- **Características:** Formulario paso a paso con validación en tiempo real
- **UX:** Barra de progreso visual y feedback inmediato
- **Estados:** Manejo elegante de carga, éxito y error
- **Uso:** Captura de leads y comunicación con usuarios

#### `BaseButton.vue` - Botón Base del Sistema
- **Variantes:** Primary, secondary, outline, ghost
- **Tamaños:** sm, md, lg con padding y tipografía escalados
- **Estados:** Hover, focus, disabled con transiciones suaves
- **Uso:** Acciones principales y secundarias en toda la aplicación

### 🎯 Patrones de Uso
- **Jerarquía visual:** Uso consistente de tamaños y colores para guiar la atención
- **Agrupación lógica:** Elementos relacionados agrupados visualmente
- **Feedback inmediato:** Respuesta visual a todas las interacciones del usuario
- **Accesibilidad:** Cumplimiento de estándares WCAG para inclusividad

---

## 6. Guías de Implementación

### ✅ Mejores Prácticas
1. **Usar tokens semánticos:** Preferir `text-primary-light` sobre colores hardcodeados
2. **Implementar modo oscuro:** Siempre incluir variantes `dark:` en nuevos componentes
3. **Mantener consistencia:** Seguir patrones establecidos en componentes existentes
4. **Optimizar performance:** Usar clases de Tailwind en lugar de CSS personalizado
5. **Validar accesibilidad:** Verificar contraste y navegación por teclado

### ❌ Antipatrones a Evitar
1. **Colores hardcodeados:** No usar valores hex directos en componentes
2. **Espaciado inconsistente:** No inventar nuevos valores de padding/margin
3. **Transiciones bruscas:** Evitar cambios sin transiciones suaves
4. **Falta de estados:** No omitir estados hover, focus o disabled
5. **Ignorar responsividad:** No diseñar solo para desktop

---

**Última Actualización:** 27 de Enero 2025 - v2.0 (Sincronizada con código fuente)
