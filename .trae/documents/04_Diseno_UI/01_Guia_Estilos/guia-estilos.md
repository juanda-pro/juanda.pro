# Guía de Estilos - juanda.pro

## 🎨 Información General

**Sistema de Diseño:** Basado en Tailwind CSS  
**Filosofía:** Utility-first con componentes personalizados  
**Modo Oscuro:** Soportado con clase 'dark'  
**Responsive:** Mobile-first approach  

## 🌈 Paleta de Colores

### Colores de Marca

#### Colores de Acento
```css
:root {
  /* Modo Claro */
  --brand-accent-light: #206372;        /* Azul corporativo */
  --brand-accent-light-hover: #1A5461;  /* Hover más oscuro */
  
  /* Modo Oscuro */
  --brand-accent-dark: #F5DF4D;         /* Amarillo dorado */
  --brand-accent-dark-hover: #E6D03E;   /* Hover más oscuro */
}
```

**Uso:**
- `brand-accent-light`: CTAs principales, enlaces importantes en modo claro
- `brand-accent-dark`: CTAs principales, enlaces importantes en modo oscuro
- Variantes hover: Estados activos y hover

### Colores de Fondo

#### Fondos Principales
```css
:root {
  /* Modo Claro */
   --bg-light: #FFFFFF;          /* Fondo principal claro (cards) */
   --body-bg-light: #F5F5F5;     /* Fondo del body */
   --surface-light: #F8F9FA;     /* Superficie secundaria */
   --surface-accent-light: #F1F3F4; /* Superficie con acento */
   
   /* Modo Oscuro */
   --bg-dark: #191A1D;           /* Fondo principal oscuro (cards) */
   --body-bg-dark: #1D1E23;      /* Fondo del body */
   --surface-dark: #1E1E20;      /* Superficie secundaria */
   --surface-accent-dark: #2A2A2C; /* Superficie con acento */
 }
```

### Colores de Texto

#### Texto Principal y Secundario
```css
:root {
  /* Modo Claro */
  --primary-light: #262626;     /* Texto principal */
  --secondary-light: #6B7280;   /* Texto secundario */
  
  /* Modo Oscuro */
  --primary-dark: #F4F4F4;      /* Texto principal */
  --secondary-dark: #9CA3AF;    /* Texto secundario */
}
```

### Colores de Estado

```css
:root {
  /* Información */
  --accent-info: #3B82F6;       /* Azul información */
  --accent-info-bg: #EFF6FF;    /* Fondo azul claro */
  
  /* Éxito */
  --accent-success: #10B981;    /* Verde éxito */
  --accent-success-bg: #ECFDF5; /* Fondo verde claro */
  
  /* Error */
  --accent-error: #EF4444;      /* Rojo error */
  --accent-error-bg: #FEF2F2;   /* Fondo rojo claro */
}
```

### Colores de Interfaz

```css
:root {
  /* Bordes y divisores */
  --border-light: #E5E7EB;      /* Bordes modo claro */
  --border-dark: #374151;       /* Bordes modo oscuro */
  --divider-light: #F3F4F6;     /* Divisores modo claro */
  --divider-dark: #4B5563;      /* Divisores modo oscuro */
  
  /* Elementos decorativos */
  --dot-light: #D1D5DB;         /* Puntos/indicadores claro */
  --dot-dark: #6B7280;          /* Puntos/indicadores oscuro */
}
```

## 🔤 Tipografía

### Familias de Fuentes

#### Fuente Principal (Sans-serif)
```css
font-family: "Figtree", sans-serif;
```
**Uso:** Texto general, párrafos, navegación

#### Fuente de Títulos
```css
font-family: "Plus Jakarta Sans", sans-serif;
```
**Uso:** Títulos principales, headings, CTAs importantes

#### Fuente Serif
```css
font-family: "Lora", serif;
```
**Uso:** Contenido largo, artículos, texto editorial

#### Fuente Monospace
```css
font-family: "JetBrains Mono", monospace;
```
**Uso:** Código, datos técnicos, elementos de programación

### Escala Tipográfica

#### Tamaños de Fuente
```css
/* Personalizado */
--text-lg: 1.15rem;    /* Aumentado desde 1.125rem */

/* Tailwind estándar */
--text-sm: 0.875rem;
--text-base: 1rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;
--text-5xl: 3rem;
--text-6xl: 3.75rem;
```

#### Jerarquía de Títulos

```css
/* H1 - Títulos principales */
.heading-1 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 2.25rem;      /* text-4xl */
  font-weight: 800;        /* font-extrabold */
  line-height: 1.1;
}

/* H2 - Títulos de sección */
.heading-2 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.875rem;     /* text-3xl */
  font-weight: 800;        /* font-extrabold */
  line-height: 1.2;
}

/* H3 - Subtítulos */
.heading-3 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.5rem;       /* text-2xl */
  font-weight: 700;        /* font-bold */
  line-height: 1.3;
}

/* Texto de párrafo */
.body-text {
  font-family: "Figtree", sans-serif;
  font-size: 1.15rem;      /* text-lg personalizado */
  line-height: 1.6;
}

/* Texto secundario */
.secondary-text {
  font-family: "Figtree", sans-serif;
  font-size: 1rem;         /* text-base */
  line-height: 1.5;
}
```

### Responsive Typography

```css
/* Mobile First */
.responsive-heading {
  font-size: 1.875rem;     /* text-3xl */
}

/* Tablet y Desktop */
@media (min-width: 640px) {
  .responsive-heading {
    font-size: 2.25rem;    /* sm:text-4xl */
  }
}
```

## 📏 Espaciado y Layout

### Sistema de Espaciado

#### Espaciado de Secciones (SectionWrapper)
```css
/* Tight - Secciones compactas */
.spacing-tight {
  padding-top: 2rem;       /* py-8 */
  padding-bottom: 2rem;
}

/* Normal - Espaciado estándar */
.spacing-normal {
  padding-top: 3rem;       /* py-12 */
  padding-bottom: 3rem;
}

@media (min-width: 1024px) {
  .spacing-normal {
    padding-top: 4rem;     /* lg:py-16 */
    padding-bottom: 4rem;
  }
}

/* Loose - Espaciado amplio */
.spacing-loose {
  padding-top: 4rem;       /* py-16 */
  padding-bottom: 4rem;
}

@media (min-width: 1024px) {
  .spacing-loose {
    padding-top: 6rem;     /* lg:py-24 */
    padding-bottom: 6rem;
  }
}

/* Extra Loose - Espaciado muy amplio */
.spacing-extra-loose {
  padding-top: 6rem;       /* py-24 */
  padding-bottom: 6rem;
}

@media (min-width: 1024px) {
  .spacing-extra-loose {
    padding-top: 8rem;     /* lg:py-32 */
    padding-bottom: 8rem;
  }
}
```

#### Espaciado de Componentes
```css
/* Gaps en grids */
.gap-sm: 1rem;            /* gap-4 */
.gap-md: 1.5rem;          /* gap-6 */
.gap-lg: 2rem;            /* gap-8 */

/* Márgenes */
.margin-sm: 0.5rem;       /* m-2 */
.margin-md: 1rem;         /* m-4 */
.margin-lg: 1.5rem;       /* m-6 */
.margin-xl: 2rem;         /* m-8 */

/* Padding interno */
.padding-sm: 1rem;        /* p-4 */
.padding-md: 1.5rem;      /* p-6 */
.padding-lg: 2rem;        /* p-8 */
```

### Grid Systems

#### Grid Responsive Estándar
```css
/* Mobile: 1 columna */
.grid-responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;             /* gap-6 */
}

/* Tablet: 2 columnas */
@media (min-width: 768px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 columnas */
@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;             /* lg:gap-8 */
  }
}
```

#### Layout de Dos Columnas
```css
.two-column-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;               /* gap-12 */
  align-items: center;
}

@media (min-width: 768px) {
  .two-column-layout {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## 🎭 Efectos y Transiciones

### Transiciones Estándar

```css
/* Transición rápida */
.transition-fast {
  transition: all 0.15s ease;
}

/* Transición normal */
.transition-normal {
  transition: all 0.3s ease;
}

/* Transición lenta */
.transition-slow {
  transition: all 0.5s ease;
}

/* Transición muy lenta */
.transition-slower {
  transition: all 0.7s ease;
}
```

### Hover Effects

```css
/* Hover con escala */
.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* Hover con escala sutil */
.hover-scale-subtle {
  transition: transform 0.5s ease;
}

.hover-scale-subtle:hover {
  transform: scale(1.02);
}

/* Hover con color */
.hover-accent {
  transition: color 0.3s ease;
}

.hover-accent:hover {
  color: var(--brand-accent-light-hover);
}

.dark .hover-accent:hover {
  color: var(--brand-accent-dark-hover);
}
```

### Animaciones de Entrada

```css
/* Fade in */
.fade-in-element {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-element.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Slide in desde la izquierda */
.slide-in-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}
```

## 🔘 Componentes de UI

### Botones

#### Botón Primario
```css
.btn-primary {
  background-color: var(--brand-accent-light);
  color: white;
  padding: 0.75rem 1.5rem;    /* py-3 px-6 */
  border-radius: 0.5rem;      /* rounded-lg */
  font-weight: 600;           /* font-semibold */
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: var(--brand-accent-light-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(32, 99, 114, 0.3);
}

.dark .btn-primary {
  background-color: var(--brand-accent-dark);
  color: var(--bg-dark);
}

.dark .btn-primary:hover {
  background-color: var(--brand-accent-dark-hover);
  box-shadow: 0 4px 12px rgba(245, 223, 77, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}
```

#### Botón Secundario
```css
.btn-secondary {
  background-color: transparent;
  color: var(--brand-accent-light);
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--brand-accent-light);
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: var(--brand-accent-light);
  color: white;
}

.dark .btn-secondary {
  color: var(--brand-accent-dark);
  border-color: var(--brand-accent-dark);
}

.dark .btn-secondary:hover {
  background-color: var(--brand-accent-dark);
  color: var(--bg-dark);
}
```

### Cards

#### Card Base
```css
.card {
  background-color: var(--bg-light);
  border-radius: 0.75rem;        /* rounded-xl */
  padding: 1.5rem;               /* p-6 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.dark .card {
  background-color: var(--bg-dark);
  border-color: var(--border-dark);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.dark .card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}
```

### Formularios

#### Input Base
```css
.input-base {
  width: 100%;
  padding: 0.75rem 1rem;         /* py-3 px-4 */
  border: 2px solid var(--border-light);
  border-radius: 0.5rem;         /* rounded-lg */
  background-color: var(--bg-light);
  color: var(--primary-light);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-base:focus {
  outline: none;
  border-color: var(--brand-accent-light);
  box-shadow: 0 0 0 3px rgba(32, 99, 114, 0.1);
}

.dark .input-base {
  background-color: var(--bg-dark);
  border-color: var(--border-dark);
  color: var(--primary-dark);
}

.dark .input-base:focus {
  border-color: var(--brand-accent-dark);
  box-shadow: 0 0 0 3px rgba(245, 223, 77, 0.1);
}
```

## 🌙 Modo Oscuro

### Implementación

```css
/* Activación por clase */
html.dark {
  color-scheme: dark;
}

/* Ejemplo de componente con modo oscuro */
body {
  background-color: var(--body-bg-light);
  color: var(--primary-light);
}

.dark body {
  background-color: var(--body-bg-dark);
  color: var(--primary-dark);
}
```

### Consideraciones de Contraste

- **Ratio mínimo:** 4.5:1 para texto normal
- **Ratio mínimo:** 3:1 para texto grande
- **Verificación:** Usar herramientas como WebAIM Contrast Checker

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First */
/* xs: 0px - 639px (por defecto) */

/* Small devices */
@media (min-width: 640px) { /* sm */ }

/* Medium devices */
@media (min-width: 768px) { /* md */ }

/* Large devices */
@media (min-width: 1024px) { /* lg */ }

/* Extra large devices */
@media (min-width: 1280px) { /* xl */ }

/* 2X large devices */
@media (min-width: 1536px) { /* 2xl */ }
```

### Estrategias Responsive

#### Typography
```css
.responsive-text {
  font-size: 1rem;              /* Base mobile */
}

@media (min-width: 640px) {
  .responsive-text {
    font-size: 1.125rem;        /* sm:text-lg */
  }
}

@media (min-width: 1024px) {
  .responsive-text {
    font-size: 1.25rem;         /* lg:text-xl */
  }
}
```

#### Spacing
```css
.responsive-padding {
  padding: 1rem;               /* p-4 mobile */
}

@media (min-width: 768px) {
  .responsive-padding {
    padding: 1.5rem;           /* md:p-6 */
  }
}

@media (min-width: 1024px) {
  .responsive-padding {
    padding: 2rem;             /* lg:p-8 */
  }
}
```

## ♿ Accesibilidad

### Consideraciones de Color

- **Contraste suficiente:** Todos los colores cumplen WCAG 2.1 AA
- **No solo color:** Información importante no depende solo del color
- **Estados de focus:** Visibles y contrastados

### Estados de Focus

```css
.focus-visible {
  outline: 2px solid var(--brand-accent-light);
  outline-offset: 2px;
}

.focus-visible:focus {
  outline: 2px solid var(--brand-accent-light);
  outline-offset: 2px;
}

.dark .focus-visible {
  outline-color: var(--brand-accent-dark);
}

.dark .focus-visible:focus {
  outline-color: var(--brand-accent-dark);
}
```

### Tamaños de Touch Target

```css
/* Mínimo 44px para elementos táctiles */
.touch-target {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem;
}
```

## 🎯 Best Practices

### Performance
1. **CSS crítico inline** para above-the-fold
2. **Lazy loading** para estilos no críticos
3. **Purging** de CSS no utilizado con Tailwind
4. **Optimización** de custom properties

### Mantenibilidad
1. **Consistencia** en naming conventions
2. **Documentación** de componentes personalizados
3. **Reutilización** de patrones comunes
4. **Modularidad** en la organización del CSS

### Escalabilidad
1. **Design tokens** centralizados
2. **Componentes** atómicos y reutilizables
3. **Sistemas** de espaciado consistentes
4. **Patrones** de diseño establecidos

## 🔮 Roadmap de Estilos

### Próximas Mejoras
1. **Design tokens** en formato JSON
2. **Storybook** para documentación visual
3. **CSS custom properties** más granulares
4. **Animaciones** más sofisticadas
5. **Micro-interactions** mejoradas

### Optimizaciones Futuras
1. **Critical CSS** automatizado
2. **CSS-in-JS** para componentes dinámicos
3. **Theme switching** más fluido
4. **Performance monitoring** de estilos