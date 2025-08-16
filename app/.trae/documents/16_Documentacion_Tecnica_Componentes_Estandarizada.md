# Documentación Técnica Estandarizada de Componentes

## 1. Formato Estándar

Cada componente debe incluir las siguientes secciones:
- **Descripción**: Propósito y funcionalidad principal
- **Propiedades**: Lista de props con tipos y valores por defecto
- **Colores**: Esquemas para modo claro y oscuro
- **Efectos y Animaciones**: Transiciones y estados hover
- **Funcionalidades Especiales**: Características únicas del componente
- **Uso Recomendado**: Casos de uso ideales

---

## 2. CtaCard

### Descripción
Tarjeta de llamada a la acción con diseño elegante y efectos hover. **NOTA: La descripción está hardcodeada en el template, no usa la prop `description`.**

### Propiedades
- `title` (string, requerido): Título principal de la tarjeta
- `description` (string, requerido): **NO SE USA - La descripción está hardcodeada**
- `buttonText` (string, requerido): Texto del botón de acción
- `buttonLink` (string, opcional): URL de destino del botón (por defecto: '#')

### Colores
**Modo Claro:**
- Fondo: `bg-card-light` (#FFFFFF)
- Borde: `border-accent-primary-light/20` (hover: `/40`) (#206372)
- Texto título: `text-text-primary-light` (hover: `text-accent-primary-light`) (#262626)
- Texto descripción: `text-text-primary-light` (#262626)
- Botón: `bg-accent-primary-light` con texto `text-text-on-accent-light` (#206372 / #FFFFFF)
- Elemento decorativo: `from-accent-primary-light to-accent-primary-light/60`

**Modo Oscuro:**
- Fondo: `bg-card-dark` (#191A1D)
- Borde: `border-accent-primary-dark/20` (hover: `/40`) (#F5DF4D)
- Texto título: `text-text-primary-dark` (hover: `text-accent-primary-dark`) (#F4F4F4)
- Texto descripción: `text-text-primary-dark` (#F4F4F4)
- Botón: `bg-accent-primary-dark` con texto `text-text-on-accent-dark` (#F5DF4D / #262626)
- Elemento decorativo: `from-accent-primary-dark to-accent-primary-dark/60`

### Efectos y Animaciones
- Hover: `scale-105` en toda la tarjeta
- Transición de borde en hover (duración 500ms)
- Elemento decorativo superior que se expande en hover (w-12 → w-20, h-1 → h-1.5)
- Título con `scale-110` y cambio de color en hover
- Botón con `scale-110` y sombra en hover
- Icono de flecha con `translate-x-1` en hover
- Animación de entrada `fadeInUp` (0.8s)

### Funcionalidades Especiales
- Diseño responsivo (text-3xl/4xl/5xl según breakpoint)
- Elemento decorativo superior dinámico con gradiente
- Línea decorativa central estática
- Contenido hardcodeado específico para "mapa inicial personalizado"
- Máximo ancho del 50% en pantallas grandes

### Uso Recomendado
Para destacar la acción principal de obtener el "mapa inicial personalizado". **Requiere refactorización para usar la prop `description`.**

---

## 3. ContactForm

### Descripción
Formulario de contacto interactivo con flujo paso a paso, validación en tiempo real y integración con webhook.

### Propiedades
- `autoFocus` (boolean, opcional): Enfoque automático al expandir (por defecto: false)

### Eventos
- `@submit`: Emitido al enviar el formulario con los datos
- `@expand`: Emitido al expandir el formulario

### Colores
**Modo Claro:**
- Fondo: `bg-card-light` (#FFFFFF)
- Borde: `border-accent-primary-light/20` (hover: `/40`) (#206372)
- Texto: `text-text-primary-light` (#262626)
- Inputs: `bg-card-light/50` (hover: `/70`) (#FFFFFF)
- Botones: `bg-accent-primary-light` con texto `text-text-on-accent-light` (#206372 / #FFFFFF)

**Modo Oscuro:**
- Fondo: `bg-card-dark` (#191A1D)
- Borde: `border-accent-primary-dark/20` (hover: `/40`) (#F5DF4D)
- Texto: `text-text-primary-dark` (#F4F4F4)
- Inputs: `bg-surface-dark/50` (hover: `/70`) (#1D1E23)
- Botones: `bg-accent-primary-dark` con texto `text-text-on-accent-dark` (#F5DF4D / #262626)

### Efectos y Animaciones
- Hover: `scale-105` en contenedor principal
- Transición de borde en hover (500ms)
- Barra de progreso animada
- Animación `slideInUp` para inputs activos
- Iconos con animaciones de translate en hover
- Estados de feedback con colores específicos

### Funcionalidades Especiales
- Flujo de 3 pasos: nombre, email, mensaje
- Validación en tiempo real
- Navegación con Enter y botones
- Integración con webhook externo
- Estados de éxito/error diferenciados
- Expansión desde input readonly
- Métodos expuestos: `expandForm`, `resetForm`, `isExpanded`

### Uso Recomendado
Para formularios de contacto principales donde se requiere una experiencia de usuario guiada y profesional.

---

## 4. LinkText

### Descripción
Componente de enlace con flecha opcional y animaciones personalizables.

### Propiedades
- `href` (string, requerido): URL de destino
- `showArrow` (boolean, opcional): Mostrar flecha (por defecto: true)
- `arrowAnimation` (boolean, opcional): Activar animación de flecha (por defecto: false)
- `customClass` (string, opcional): Clases CSS adicionales

### Colores
**Modo Claro:**
- Texto: `text-accent-primary-light` (hover: `text-accent-primary-light/80`) (#206372)
- Flecha: `text-current`

**Modo Oscuro:**
- Texto: `text-accent-primary-dark` (hover: `text-accent-primary-dark/80`) (#F5DF4D)
- Flecha: `text-current`

### Efectos y Animaciones
- Transición de color (300ms)
- Escala opcional: `hover:scale-105` (si `arrowAnimation` es true)
- Flecha con `translate-x-1` en hover (si `arrowAnimation` es true)

### Funcionalidades Especiales
- Flecha SVG integrada
- Animaciones condicionales basadas en props
- Slot para contenido personalizable
- Clases CSS dinámicas

### Uso Recomendado
Para enlaces internos y externos que requieren destacar visualmente la acción de navegación.

---

## 5. QuoteBlock

### Descripción
Bloque de cita con diseño elegante y atribución opcional.

### Propiedades
- `author` (string, opcional): Autor de la cita

### Colores
**Modo Claro:**
- Borde izquierdo: `border-accent-primary-light` (#206372)
- Fondo: `bg-surface-light/30` (#F5F5F5)
- Texto: `text-text-secondary-light` (#525252)
- Autor: `text-accent-primary-light` (#206372)

**Modo Oscuro:**
- Borde izquierdo: `border-accent-primary-dark` (#F5DF4D)
- Fondo: `bg-surface-dark/30` (#1D1E23)
- Texto: `text-text-secondary-dark` (#D4D4D4)
- Autor: `text-accent-primary-dark` (#F5DF4D)

### Efectos y Animaciones
- Sin animaciones específicas
- Transiciones de color estándar

### Funcionalidades Especiales
- Slot para contenido de la cita
- Atribución condicional del autor
- Diseño con borde lateral característico
- Texto en cursiva para la cita

### Uso Recomendado
Para destacar testimonios, citas importantes o fragmentos de texto relevantes.

---

## 6. VisualAccents

### Descripción
Componente versátil para elementos decorativos y acentos visuales.

### Propiedades
- `type` (string, requerido): Tipo de acento ('arrow-down', 'arrow-span', 'gradient-divider', 'custom-svg', 'text-accent', 'custom-gradient')
- `svgClass` (string, opcional): Clases para SVG personalizado
- `textClass` (string, opcional): Clases para texto personalizado
- `gradientClass` (string, opcional): Clases para gradiente personalizado

### Colores
**Modo Claro:**
- Elementos: `text-[#206372]/50`
- Gradientes: `from-[#206372]/20`

**Modo Oscuro:**
- Elementos: `text-[#F5DF4D]/50`
- Gradientes: `from-[#F5DF4D]/20`

### Efectos y Animaciones
- Sin animaciones por defecto
- Personalizable mediante props de clase

### Funcionalidades Especiales
- 6 tipos diferentes de acentos
- Slots para contenido personalizado
- Clases CSS completamente personalizables
- SVG y elementos decorativos predefinidos

### Uso Recomendado
Para añadir elementos decorativos consistentes en toda la aplicación.

---

## 7. SimpleCallToAction

### Descripción
Componente de llamada a la acción simple con botones primario y secundario opcionales.

### Propiedades
- `title` (string, requerido): Título principal
- `description` (string, requerido): Descripción del CTA
- `primaryButton` (ButtonConfig, opcional): Configuración del botón primario
- `secondaryButton` (ButtonConfig, opcional): Configuración del botón secundario

### Eventos
- `@primary-action`: Emitido al hacer clic en el botón primario

### Colores
**Modo Claro:**
- Título: `text-primary-light`
- Descripción: `text-secondary-light`
- Botones: `text-[#206372]` (hover: `text-[#206372]/80`)
- Separador: `text-[#206372]`

**Modo Oscuro:**
- Título: `text-primary-dark`
- Descripción: `text-secondary-dark`
- Botones: `text-[#F5DF4D]` (hover: `text-[#F5DF4D]/80`)
- Separador: `text-[#F5DF4D]`

### Efectos y Animaciones
- Hover: `scale-105` en botones
- Iconos de flecha con `translate-x-1` y `-translate-x-1`
- Transiciones de 300ms

### Funcionalidades Especiales
- Botones opcionales (primario y secundario)
- Iconos de flecha direccionales
- Separador visual entre botones
- Emisión de eventos para el botón primario

### Uso Recomendado
Para secciones de llamada a la acción que requieren navegación bidireccional.

---

## 8. FeatureListItem

### Descripción
Elemento de lista de características con icono, título y descripción.

### Propiedades
- `title` (string, requerido): Título de la característica
- `description` (string, requerido): Descripción de la característica
- `iconType` (string, opcional): Tipo de icono ('custom', 'check', 'star', 'heart') (por defecto: 'check')
- `delay` (number, opcional): Retraso de animación en múltiplos de 100ms (por defecto: 0)

### Colores
**Modo Claro:**
- Fondo icono: `bg-[#206372]/10` con borde `border-[#206372]/20`
- Icono: `text-[#206372]`
- Título: `text-primary-light`
- Descripción: `text-secondary-light`

**Modo Oscuro:**
- Fondo icono: `bg-[#F5DF4D]/5` con borde `border-[#F5DF4D]/20`
- Icono: `text-[#F5DF4D]`
- Título: `text-primary-dark`
- Descripción: `text-secondary-dark`

### Efectos y Animaciones
- Animación de entrada `fade-in-element` con retraso personalizable
- Transformación inicial: `opacity-0 translate-y-4`
- Clases de retraso dinámicas: `delay-{delay*100}`

### Funcionalidades Especiales
- 4 tipos de iconos predefinidos
- Slot para icono personalizado
- Sistema de retrasos para animaciones escalonadas
- Diseño centrado con contenedor circular para icono

### Uso Recomendado
Para listas de características, beneficios o puntos destacados con presentación visual atractiva.

---

## 9. Header

### Descripción
Cabecera de navegación principal con menú responsivo y submenú de documentación.

### Propiedades
Ninguna (componente autónomo)

### Colores
**Modo Claro:**
- Fondo: `bg-card-light` con `backdrop-blur-sm`
- Logo: `text-primary-light` (hover: `text-accent-primary-light`)
- Enlaces: `text-secondary-light` (hover: `text-accent-primary-light`)
- Menú desplegable: `bg-card-light` con borde `border-primary-light`

**Modo Oscuro:**
- Fondo: `bg-card-dark` con `backdrop-blur-sm`
- Logo: `text-primary-dark` (hover: `text-accent-primary-dark`)
- Enlaces: `text-secondary-dark` (hover: `text-accent-primary-dark`)
- Menú desplegable: `bg-card-dark` con borde `border-primary-dark`

### Efectos y Animaciones
- Hover: `scale-105` en enlaces de navegación
- Transformación en hover: `-translate-y-0.5` para menú documentación
- Rotación de chevron: `rotate-180` al abrir menú
- Transiciones de escala y opacidad para menús desplegables
- Animaciones de entrada/salida para panel móvil

### Funcionalidades Especiales
- Navegación sticky con backdrop blur
- Menú desplegable de documentación (hover en desktop, click en móvil)
- Panel de navegación móvil deslizante
- RouterLink activo con estilos específicos
- Integración con ThemeToggle
- Estados de focus accesibles
- Manejo de eventos de mouse para submenús

### Uso Recomendado
Como cabecera principal de la aplicación con navegación completa y accesible.

---

## 10. Tipografía

### Descripción
Estilos de texto estandarizados para mantener consistencia visual.

### Elementos Disponibles
- **H1**: `text-4xl md:text-5xl lg:text-6xl font-bold`
- **H2**: `text-3xl md:text-4xl lg:text-5xl font-bold`
- **H3**: `text-2xl md:text-3xl lg:text-4xl font-bold`
- **H4**: `text-xl md:text-2xl lg:text-3xl font-bold`
- **Párrafo**: `text-base md:text-lg`
- **Texto de estado**: Colores específicos para success, error, warning, info
- **Texto auxiliar**: `text-sm opacity-75`
- **Enlaces**: Con colores de acento y efectos hover

### Colores
**Modo Claro:**
- Títulos: `text-primary-light`
- Párrafos: `text-secondary-light`
- Enlaces: `text-accent-primary-light`

**Modo Oscuro:**
- Títulos: `text-primary-dark`
- Párrafos: `text-secondary-dark`
- Enlaces: `text-accent-primary-dark`

### Uso Recomendado
Para mantener consistencia tipográfica en toda la aplicación.

---

## Inconsistencias Detectadas

1. **CtaCard**: La prop `description` no se utiliza, el contenido está hardcodeado
2. **Colores**: Algunos componentes usan colores hardcodeados (#206372, #F5DF4D) mientras otros usan tokens del design system
3. **Animaciones**: Falta consistencia en las duraciones de transición (200ms, 300ms, 500ms)
4. **Responsividad**: No todos los componentes implementan el mismo sistema de breakpoints

## Recomendaciones de Mejora

1. Estandarizar el uso de tokens de color del design system
2. Unificar las duraciones de transición
3. Refactorizar CtaCard para usar la prop description
4. Implementar un sistema consistente de breakpoints
5. Añadir props de personalización donde sea necesario
6. Documentar mejor los slots disponibles en cada componente