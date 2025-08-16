# Tipografías - juanda.pro

## 📝 Información General

**Sistema Tipográfico:** Basado en Google Fonts  
**Filosofía:** Legibilidad, modernidad y versatilidad  
**Carga:** Optimizada con `font-display: swap`  
**Soporte:** Variable fonts cuando están disponibles  

## 🔤 Familias de Fuentes

### 1. Figtree (Sans-serif Principal)

**Uso:** Texto general, párrafos, navegación, UI  
**Peso:** 300-900  
**Estilo:** Normal, Italic  
**Características:** Moderna, legible, versátil  

```css
font-family: "Figtree", sans-serif;
```

#### Casos de Uso
- Texto de párrafos
- Navegación
- Botones
- Formularios
- Texto de interfaz
- Descripciones
- Metadatos

#### Pesos Disponibles
| Peso | Nombre | Uso Principal |
|------|--------|---------------|
| 300 | Light | Texto decorativo, citas |
| 400 | Regular | Texto de párrafo estándar |
| 500 | Medium | Texto destacado, subtítulos |
| 600 | Semibold | Navegación, botones |
| 700 | Bold | Énfasis, texto importante |
| 800 | Extrabold | Títulos secundarios |
| 900 | Black | Elementos muy destacados |

### 2. Plus Jakarta Sans (Títulos)

**Uso:** Títulos principales, headings, CTAs importantes  
**Peso:** 200-800  
**Estilo:** Normal, Italic  
**Características:** Geométrica, moderna, impactante  

```css
font-family: "Plus Jakarta Sans", sans-serif;
```

#### Casos de Uso
- H1, H2, H3
- Títulos de sección
- CTAs principales
- Texto hero
- Títulos de cards
- Encabezados importantes

#### Pesos Disponibles
| Peso | Nombre | Uso Principal |
|------|--------|---------------|
| 200 | ExtraLight | Títulos decorativos |
| 300 | Light | Subtítulos grandes |
| 400 | Regular | Títulos estándar |
| 500 | Medium | Títulos de sección |
| 600 | Semibold | Títulos importantes |
| 700 | Bold | Títulos principales |
| 800 | Extrabold | Hero titles, CTAs |

### 3. Lora (Serif)

**Uso:** Contenido largo, artículos, texto editorial  
**Peso:** 400-700  
**Estilo:** Normal, Italic  
**Características:** Legible, elegante, para lectura larga  

```css
font-family: "Lora", serif;
```

#### Casos de Uso
- Contenido de artículos
- Texto largo
- Citas destacadas
- Contenido editorial
- Texto de blog
- Párrafos extensos

#### Pesos Disponibles
| Peso | Nombre | Uso Principal |
|------|--------|---------------|
| 400 | Regular | Texto de artículo estándar |
| 500 | Medium | Texto destacado en artículos |
| 600 | Semibold | Subtítulos en artículos |
| 700 | Bold | Énfasis en contenido editorial |

### 4. JetBrains Mono (Monospace)

**Uso:** Código, datos técnicos, elementos de programación  
**Peso:** 100-800  
**Estilo:** Normal, Italic  
**Características:** Optimizada para código, ligaduras  

```css
font-family: "JetBrains Mono", monospace;
```

#### Casos de Uso
- Bloques de código
- Código inline
- Datos técnicos
- URLs
- Comandos
- Snippets
- Elementos de programación

#### Pesos Disponibles
| Peso | Nombre | Uso Principal |
|------|--------|---------------|
| 100 | Thin | Código decorativo |
| 200 | ExtraLight | Comentarios de código |
| 300 | Light | Código secundario |
| 400 | Regular | Código estándar |
| 500 | Medium | Código destacado |
| 600 | Semibold | Palabras clave |
| 700 | Bold | Código importante |
| 800 | ExtraBold | Títulos de código |

## 📏 Escala Tipográfica

### Tamaños Base (Tailwind CSS)

```css
/* Tamaños estándar de Tailwind */
text-xs: 0.75rem;      /* 12px */
text-sm: 0.875rem;     /* 14px */
text-base: 1rem;       /* 16px */
text-lg: 1.15rem;      /* 18.4px - PERSONALIZADO */
text-xl: 1.25rem;      /* 20px */
text-2xl: 1.5rem;      /* 24px */
text-3xl: 1.875rem;    /* 30px */
text-4xl: 2.25rem;     /* 36px */
text-5xl: 3rem;        /* 48px */
text-6xl: 3.75rem;     /* 60px */
text-7xl: 4.5rem;      /* 72px */
text-8xl: 6rem;        /* 96px */
text-9xl: 8rem;        /* 128px */
```

### Personalización

#### text-lg Modificado
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        lg: '1.15rem', // Aumentado desde 1.125rem
      }
    }
  }
}
```

**Razón:** Mejor legibilidad para texto de párrafo en el diseño específico del proyecto.

## 🎯 Jerarquía Tipográfica

### Títulos (Headings)

#### H1 - Título Principal
```css
.heading-1 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 2.25rem;        /* text-4xl */
  font-weight: 800;          /* font-extrabold */
  line-height: 1.1;
  letter-spacing: -0.025em;  /* tracking-tight */
}

/* Responsive */
@media (min-width: 640px) {
  .heading-1 {
    font-size: 3rem;          /* sm:text-5xl */
  }
}

@media (min-width: 1024px) {
  .heading-1 {
    font-size: 3.75rem;       /* lg:text-6xl */
  }
}
```

#### H2 - Título de Sección
```css
.heading-2 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.875rem;       /* text-3xl */
  font-weight: 800;          /* font-extrabold */
  line-height: 1.2;
  letter-spacing: -0.025em;  /* tracking-tight */
}

/* Responsive */
@media (min-width: 640px) {
  .heading-2 {
    font-size: 2.25rem;       /* sm:text-4xl */
  }
}
```

#### H3 - Subtítulo
```css
.heading-3 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.5rem;         /* text-2xl */
  font-weight: 700;          /* font-bold */
  line-height: 1.3;
  letter-spacing: -0.025em;  /* tracking-tight */
}

/* Responsive */
@media (min-width: 640px) {
  .heading-3 {
    font-size: 1.875rem;      /* sm:text-3xl */
  }
}
```

#### H4 - Subtítulo Menor
```css
.heading-4 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.25rem;        /* text-xl */
  font-weight: 700;          /* font-bold */
  line-height: 1.4;
}

/* Responsive */
@media (min-width: 640px) {
  .heading-4 {
    font-size: 1.5rem;        /* sm:text-2xl */
  }
}
```

### Texto de Cuerpo

#### Párrafo Principal
```css
.body-text {
  font-family: "Figtree", sans-serif;
  font-size: 1.15rem;        /* text-lg personalizado */
  font-weight: 400;          /* font-normal */
  line-height: 1.6;
  color: var(--text-secondary);
}

/* Para artículos largos */
.article-text {
  font-family: "Lora", serif;
  font-size: 1.15rem;        /* text-lg personalizado */
  font-weight: 400;
  line-height: 1.7;          /* Más espaciado para lectura */
}
```

#### Texto Secundario
```css
.secondary-text {
  font-family: "Figtree", sans-serif;
  font-size: 1rem;           /* text-base */
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-secondary);
}
```

#### Texto Pequeño
```css
.small-text {
  font-family: "Figtree", sans-serif;
  font-size: 0.875rem;       /* text-sm */
  font-weight: 400;
  line-height: 1.4;
  color: var(--text-secondary);
}
```

### Elementos Especiales

#### Enlaces
```css
.link {
  font-family: "Figtree", sans-serif;
  font-weight: 600;          /* font-semibold */
  color: var(--brand-accent);
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: all 0.3s ease;
}

.link:hover {
  color: var(--brand-accent-darker);
  text-decoration-color: currentColor;
}
```

#### Botones
```css
.button-text {
  font-family: "Figtree", sans-serif;
  font-size: 1rem;           /* text-base */
  font-weight: 600;          /* font-semibold */
  letter-spacing: 0.025em;   /* tracking-wide */
}

.button-text-large {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.125rem;       /* text-lg */
  font-weight: 700;          /* font-bold */
  letter-spacing: 0.025em;
}
```

#### Código
```css
.code-inline {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.875rem;       /* text-sm */
  font-weight: 400;
  background-color: var(--surface-accent);
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
}

.code-block {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.875rem;       /* text-sm */
  font-weight: 400;
  line-height: 1.6;
  background-color: var(--surface-accent);
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}
```

#### Citas
```css
.quote {
  font-family: "Lora", serif;
  font-size: 1.25rem;        /* text-xl */
  font-weight: 400;
  font-style: italic;
  line-height: 1.6;
  color: var(--text-secondary);
}

.quote-large {
  font-family: "Lora", serif;
  font-size: 1.5rem;         /* text-2xl */
  font-weight: 400;
  font-style: italic;
  line-height: 1.5;
  text-align: center;
}
```

## 📱 Responsive Typography

### Estrategia Mobile-First

#### Títulos Responsivos
```css
/* H1 Responsive */
.responsive-h1 {
  font-size: 1.875rem;       /* text-3xl mobile */
}

@media (min-width: 640px) {
  .responsive-h1 {
    font-size: 2.25rem;      /* sm:text-4xl */
  }
}

@media (min-width: 768px) {
  .responsive-h1 {
    font-size: 3rem;         /* md:text-5xl */
  }
}

@media (min-width: 1024px) {
  .responsive-h1 {
    font-size: 3.75rem;      /* lg:text-6xl */
  }
}
```

#### Texto de Cuerpo Responsivo
```css
.responsive-body {
  font-size: 1rem;           /* text-base mobile */
  line-height: 1.6;
}

@media (min-width: 640px) {
  .responsive-body {
    font-size: 1.15rem;      /* sm:text-lg personalizado */
    line-height: 1.7;
  }
}

@media (min-width: 1024px) {
  .responsive-body {
    font-size: 1.25rem;      /* lg:text-xl */
    line-height: 1.8;
  }
}
```

### Breakpoints Tipográficos

| Breakpoint | Estrategia | Ejemplo |
|------------|------------|----------|
| `xs` (0-639px) | Tamaños compactos | `text-base`, `text-2xl` |
| `sm` (640px+) | Incremento moderado | `text-lg`, `text-3xl` |
| `md` (768px+) | Tamaños estándar | `text-xl`, `text-4xl` |
| `lg` (1024px+) | Tamaños amplios | `text-2xl`, `text-5xl` |
| `xl` (1280px+) | Tamaños máximos | `text-3xl`, `text-6xl` |

## 🎨 Aplicación por Componente

### Hero Section
```html
<section class="hero">
  <h1 class="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-6xl font-extrabold text-brand-accent">
    Título Principal
  </h1>
  <p class="font-['Figtree'] text-lg sm:text-xl text-secondary-light dark:text-secondary-dark">
    Descripción del hero
  </p>
  <button class="font-['Figtree'] text-base font-semibold">
    Call to Action
  </button>
</section>
```

### Cards de Artículos
```html
<article class="article-card">
  <h3 class="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold">
    Título del Artículo
  </h3>
  <p class="font-['Figtree'] text-base sm:text-lg text-secondary-light dark:text-secondary-dark">
    Resumen del artículo...
  </p>
  <div class="font-['Figtree'] text-sm text-secondary-light dark:text-secondary-dark">
    <span>6 de Agosto, 2025</span>
    <span>5 min de lectura</span>
  </div>
</article>
```

### Contenido de Blog
```html
<article class="blog-content">
  <h1 class="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl lg:text-4xl font-extrabold">
    Título del Artículo
  </h1>
  
  <div class="font-['Lora'] text-lg sm:text-xl leading-relaxed">
    <p>Contenido del artículo en Lora para mejor legibilidad...</p>
    
    <h2 class="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold mt-8 mb-4">
      Subtítulo
    </h2>
    
    <p>Más contenido...</p>
    
    <code class="font-['JetBrains_Mono'] text-sm bg-surface-accent-light dark:bg-surface-accent-dark px-2 py-1 rounded">
      código inline
    </code>
  </div>
</article>
```

### Formularios
```html
<form class="contact-form">
  <label class="font-['Figtree'] text-base font-medium">
    Nombre
  </label>
  <input class="font-['Figtree'] text-base" placeholder="Tu nombre" />
  
  <label class="font-['Figtree'] text-base font-medium">
    Mensaje
  </label>
  <textarea class="font-['Figtree'] text-base" placeholder="Tu mensaje"></textarea>
  
  <button class="font-['Figtree'] text-base font-semibold">
    Enviar Mensaje
  </button>
</form>
```

## ⚡ Optimización de Carga

### Google Fonts Loading

```html
<!-- Preconnect para mejor rendimiento -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Carga optimizada con font-display: swap -->
<link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
```

### CSS Font Loading

```css
/* Fallbacks para mejor rendimiento */
.font-primary {
  font-family: "Figtree", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.font-heading {
  font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.font-serif {
  font-family: "Lora", Georgia, "Times New Roman", serif;
}

.font-mono {
  font-family: "JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace;
}
```

### Font Loading Strategy

```javascript
// Opcional: Font loading con JavaScript para mejor control
if ('fonts' in document) {
  Promise.all([
    document.fonts.load('400 1rem Figtree'),
    document.fonts.load('700 1rem "Plus Jakarta Sans"'),
    document.fonts.load('400 1rem Lora'),
    document.fonts.load('400 1rem "JetBrains Mono"')
  ]).then(() => {
    document.body.classList.add('fonts-loaded');
  });
}
```

## ♿ Accesibilidad Tipográfica

### Contraste y Legibilidad

#### Tamaños Mínimos
- **Texto normal:** Mínimo 16px (1rem)
- **Texto pequeño:** Mínimo 14px (0.875rem)
- **Touch targets:** Mínimo 44px de altura

#### Line Height
- **Texto de párrafo:** 1.5 - 1.8
- **Títulos:** 1.1 - 1.3
- **Texto pequeño:** 1.4 - 1.6

#### Letter Spacing
- **Títulos grandes:** -0.025em (tracking-tight)
- **Texto normal:** 0em (tracking-normal)
- **Botones/CTAs:** 0.025em (tracking-wide)
- **Texto pequeño:** 0.05em (tracking-wider)

### Responsive Considerations

```css
/* Asegurar legibilidad en todos los dispositivos */
@media (max-width: 640px) {
  .responsive-text {
    font-size: max(16px, 1rem); /* Nunca menor a 16px en móvil */
    line-height: 1.6;
  }
}

/* Aumentar tamaños en pantallas grandes */
@media (min-width: 1280px) {
  .responsive-text {
    font-size: 1.125rem;
    line-height: 1.7;
  }
}
```

## 📊 Métricas de Rendimiento

### Objetivos de Carga
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

### Optimizaciones Implementadas
1. **Preconnect** a Google Fonts
2. **font-display: swap** para evitar FOIT
3. **Subset de caracteres** (Latin)
4. **Fallback fonts** apropiados
5. **Critical CSS** para fuentes principales

### Monitoreo
```javascript
// Métricas de Web Vitals para fuentes
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'measure' && entry.name.includes('font')) {
      console.log(`Font load time: ${entry.duration}ms`);
    }
  }
});
observer.observe({ entryTypes: ['measure'] });
```

## 🔮 Roadmap Tipográfico

### Próximas Mejoras
1. **Variable fonts** para mejor rendimiento
2. **Font subsetting** más granular
3. **Local font loading** como fallback
4. **Typography scale** más refinada

### Optimizaciones Futuras
1. **Self-hosted fonts** para mejor control
2. **Font loading strategies** avanzadas
3. **Dynamic font sizing** basado en viewport
4. **Typography tokens** en design system

## 📝 Guía de Uso

### Selección de Fuente por Contexto

| Contexto | Fuente Recomendada | Razón |
|----------|-------------------|--------|
| Títulos principales | Plus Jakarta Sans | Impacto visual, modernidad |
| Navegación | Figtree | Legibilidad, claridad |
| Párrafos cortos | Figtree | Versatilidad, UI |
| Artículos largos | Lora | Legibilidad extendida |
| Código | JetBrains Mono | Optimizada para código |
| Botones | Figtree | Claridad, peso adecuado |
| Metadatos | Figtree | Consistencia, tamaño pequeño |

### Combinaciones Recomendadas

#### Para Landing Pages
```css
/* Títulos */
font-family: "Plus Jakarta Sans", sans-serif;
font-weight: 800;

/* Texto de cuerpo */
font-family: "Figtree", sans-serif;
font-weight: 400;
```

#### Para Blog Posts
```css
/* Títulos */
font-family: "Plus Jakarta Sans", sans-serif;
font-weight: 700;

/* Contenido */
font-family: "Lora", serif;
font-weight: 400;

/* Metadatos */
font-family: "Figtree", sans-serif;
font-weight: 500;
```

#### Para Documentación Técnica
```css
/* Títulos */
font-family: "Plus Jakarta Sans", sans-serif;
font-weight: 700;

/* Texto */
font-family: "Figtree", sans-serif;
font-weight: 400;

/* Código */
font-family: "JetBrains Mono", monospace;
font-weight: 400;
```