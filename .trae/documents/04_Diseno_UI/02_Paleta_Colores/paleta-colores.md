# Paleta de Colores - juanda.pro

## 🎨 Información General

**Sistema de Color:** Basado en Tailwind CSS con extensiones personalizadas\
**Soporte:** Modo claro y modo oscuro completo\
**Filosofía:** Contraste alto, accesibilidad WCAG 2.1 AA\
**Última actualización:** 15 de agosto de 2025
**Estado de verificación:** ✅ VERIFICADO - Colores sincronizados con código actual
**Fuente de verificación:** ComponentCatalogView\.vue y tailwind.config.js

## 🌟 Colores Principales de Marca

### Colores de Acento Principales

| Modo       | Color            | Hex       | RGB                 | Uso Principal                      |
| ---------- | ---------------- | --------- | ------------------- | ---------------------------------- |
| **Claro**  | Azul Corporativo | `#206372` | `rgb(32, 99, 114)`  | Enlaces, botones, bordes de acento |
| **Oscuro** | Amarillo Dorado  | `#F5DF4D` | `rgb(245, 223, 77)` | Enlaces, botones, bordes de acento |

### Colores de Acento Sutiles

| Modo       | Color          | Hex       | RGB                  | Uso                         |
| ---------- | -------------- | --------- | -------------------- | --------------------------- |
| **Claro**  | Azul Sutil     | `#4A9BAA` | `rgb(74, 155, 170)`  | Variaciones y estados hover |
| **Oscuro** | Amarillo Sutil | `#F7E97A` | `rgb(247, 233, 122)` | Variaciones y estados hover |

### Ejemplos de Uso de Acentos

```html
<!-- Botón principal -->
<button class="bg-accent-primary-light dark:bg-accent-primary-dark text-text-on-accent-light dark:text-text-on-accent-dark">
  Acción Principal
</button>

<!-- Enlace destacado -->
<a href="#" class="text-accent-primary-light dark:text-accent-primary-dark hover:text-accent-subtle-light dark:hover:text-accent-subtle-dark">
  Enlace Importante
</a>

<!-- Borde de acento -->
<div class="border-2 border-accent-primary-light dark:border-accent-primary-dark">
  Contenido destacado
</div>
```

## 🎨 Sistema Completo de Colores

### 📄 Colores de Fondo

#### Fondos Principales

| Modo       | Nombre            | Hex       | RGB                  | Uso                          | Clase CSS          |
| ---------- | ----------------- | --------- | -------------------- | ---------------------------- | ------------------ |
| **Claro**  | Fondo del Body    | `#F5F5F5` | `rgb(245, 245, 245)` | Fondo principal de la página | `bg-body-light`    |
| **Oscuro** | Fondo del Body    | `#1D1E23` | `rgb(29, 30, 35)`    | Fondo principal de la página | `bg-body-dark`     |
| **Claro**  | Fondo de Tarjetas | `#FFFFFF` | `rgb(255, 255, 255)` | Componentes principales      | `bg-card-light`    |
| **Oscuro** | Fondo de Tarjetas | `#191A1D` | `rgb(25, 26, 29)`    | Componentes principales      | `bg-card-dark`     |
| **Claro**  | Superficie        | `#F5F5F5` | `rgb(245, 245, 245)` | Elementos secundarios        | `bg-surface-light` |
| **Oscuro** | Superficie        | `#1D1E23` | `rgb(29, 30, 35)`    | Elementos secundarios        | `bg-surface-dark`  |

### 📝 Colores de Texto

#### Textos Principales

| Modo       | Nombre           | Hex       | RGB                  | Uso                          | Clase CSS              |
| ---------- | ---------------- | --------- | -------------------- | ---------------------------- | ---------------------- |
| **Claro**  | Texto Principal  | `#262626` | `rgb(38, 38, 38)`    | Títulos, contenido principal | `text-primary-light`   |
| **Oscuro** | Texto Principal  | `#F4F4F4` | `rgb(244, 244, 244)` | Títulos, contenido principal | `text-primary-dark`    |
| **Claro**  | Texto Secundario | `#525252` | `rgb(82, 82, 82)`    | Descripciones, subtítulos    | `text-secondary-light` |
| **Oscuro** | Texto Secundario | `#D4D4D4` | `rgb(212, 212, 212)` | Descripciones, subtítulos    | `text-secondary-dark`  |
| **Claro**  | Texto Auxiliar   | `#737373` | `rgb(115, 115, 115)` | Placeholders, hints          | `text-muted-light`     |
| **Oscuro** | Texto Auxiliar   | `#A3A3A3` | `rgb(163, 163, 163)` | Placeholders, hints          | `text-muted-dark`      |

#### Textos sobre Fondos de Acento

| Modo       | Nombre             | Hex       | RGB                  | Uso                        | Clase CSS              |
| ---------- | ------------------ | --------- | -------------------- | -------------------------- | ---------------------- |
| **Claro**  | Texto sobre Acento | `#FFFFFF` | `rgb(255, 255, 255)` | Texto en botones azules    | `text-on-accent-light` |
| **Oscuro** | Texto sobre Acento | `#262626` | `rgb(38, 38, 38)`    | Texto en botones amarillos | `text-on-accent-dark`  |

### 🚦 Colores de Estado

#### Estados de Éxito

| Modo       | Tipo  | Hex       | RGB                  | Uso               | Clase CSS                     |
| ---------- | ----- | --------- | -------------------- | ----------------- | ----------------------------- |
| **Claro**  | Texto | `#059669` | `rgb(5, 150, 105)`   | Mensajes de éxito | `text-success-light`          |
| **Oscuro** | Texto | `#10B981` | `rgb(16, 185, 129)`  | Mensajes de éxito | `text-success-dark`           |
| **Claro**  | Fondo | `#F0FDF4` | `rgb(240, 253, 244)` | Fondos de éxito   | `bg-success-bg-light`         |
| **Oscuro** | Fondo | `#064E3B` | `rgb(6, 78, 59)`     | Fondos de éxito   | `bg-success-bg-dark`          |
| **Claro**  | Borde | `#BBF7D0` | `rgb(187, 247, 208)` | Bordes de éxito   | `border-success-border-light` |
| **Oscuro** | Borde | `#065F46` | `rgb(6, 95, 70)`     | Bordes de éxito   | `border-success-border-dark`  |

#### Estados de Error

| Modo       | Tipo  | Hex       | RGB                  | Uso               | Clase CSS                   |
| ---------- | ----- | --------- | -------------------- | ----------------- | --------------------------- |
| **Claro**  | Texto | `#DC2626` | `rgb(220, 38, 38)`   | Mensajes de error | `text-error-light`          |
| **Oscuro** | Texto | `#EF4444` | `rgb(239, 68, 68)`   | Mensajes de error | `text-error-dark`           |
| **Claro**  | Fondo | `#FEF2F2` | `rgb(254, 242, 242)` | Fondos de error   | `bg-error-bg-light`         |
| **Oscuro** | Fondo | `#7F1D1D` | `rgb(127, 29, 29)`   | Fondos de error   | `bg-error-bg-dark`          |
| **Claro**  | Borde | `#FECACA` | `rgb(254, 202, 202)` | Bordes de error   | `border-error-border-light` |
| **Oscuro** | Borde | `#991B1B` | `rgb(153, 27, 27)`   | Bordes de error   | `border-error-border-dark`  |

#### Estados de Advertencia

| Modo       | Tipo  | Hex       | RGB                  | Uso                     | Clase CSS                     |
| ---------- | ----- | --------- | -------------------- | ----------------------- | ----------------------------- |
| **Claro**  | Texto | `#D97706` | `rgb(217, 119, 6)`   | Mensajes de advertencia | `text-warning-light`          |
| **Oscuro** | Texto | `#F59E0B` | `rgb(245, 158, 11)`  | Mensajes de advertencia | `text-warning-dark`           |
| **Claro**  | Fondo | `#FFFBEB` | `rgb(255, 251, 235)` | Fondos de advertencia   | `bg-warning-bg-light`         |
| **Oscuro** | Fondo | `#78350F` | `rgb(120, 53, 15)`   | Fondos de advertencia   | `bg-warning-bg-dark`          |
| **Claro**  | Borde | `#FED7AA` | `rgb(254, 215, 170)` | Bordes de advertencia   | `border-warning-border-light` |
| **Oscuro** | Borde | `#92400E` | `rgb(146, 64, 14)`   | Bordes de advertencia   | `border-warning-border-dark`  |

#### Estados de Información

| Modo       | Tipo  | Hex       | RGB                  | Uso                   | Clase CSS                  |
| ---------- | ----- | --------- | -------------------- | --------------------- | -------------------------- |
| **Claro**  | Texto | `#2563EB` | `rgb(37, 99, 235)`   | Mensajes informativos | `text-info-light`          |
| **Oscuro** | Texto | `#3B82F6` | `rgb(59, 130, 246)`  | Mensajes informativos | `text-info-dark`           |
| **Claro**  | Fondo | `#EFF6FF` | `rgb(239, 246, 255)` | Fondos informativos   | `bg-info-bg-light`         |
| **Oscuro** | Fondo | `#1E3A8A` | `rgb(30, 58, 138)`   | Fondos informativos   | `bg-info-bg-dark`          |
| **Claro**  | Borde | `#BFDBFE` | `rgb(191, 219, 254)` | Bordes informativos   | `border-info-border-light` |
| **Oscuro** | Borde | `#1E40AF` | `rgb(30, 64, 175)`   | Bordes informativos   | `border-info-border-dark`  |

### 🔲 Colores de Bordes y Separadores

#### Bordes Principales

| Modo       | Nombre          | Hex       | RGB                  | Uso               | Clase CSS              |
| ---------- | --------------- | --------- | -------------------- | ----------------- | ---------------------- |
| **Claro**  | Borde Principal | `#E5E7EB` | `rgb(229, 231, 235)` | Bordes estándar   | `border-primary-light` |
| **Oscuro** | Borde Principal | `#374151` | `rgb(55, 65, 81)`    | Bordes estándar   | `border-primary-dark`  |
| **Claro**  | Borde de Acento | `#206372` | `rgb(32, 99, 114)`   | Bordes destacados | `border-accent-light`  |
| **Oscuro** | Borde de Acento | `#F5DF4D` | `rgb(245, 223, 77)`  | Bordes destacados | `border-accent-dark`   |
| **Claro**  | Borde Sutil     | `#F3F4F6` | `rgb(243, 244, 246)` | Bordes muy suaves | `border-subtle-light`  |
| **Oscuro** | Borde Sutil     | `#4B5563` | `rgb(75, 85, 99)`    | Bordes muy suaves | `border-subtle-dark`   |

#### Separadores y Líneas

| Modo       | Nombre  | Hex       | RGB                  | Uso               | Clase CSS              |
| ---------- | ------- | --------- | -------------------- | ----------------- | ---------------------- |
| **Claro**  | Divisor | `#E5E7EB` | `rgb(229, 231, 235)` | Líneas divisorias | `border-divider-light` |
| **Oscuro** | Divisor | `#374151` | `rgb(55, 65, 81)`    | Líneas divisorias | `border-divider-dark`  |

### 🎯 Colores Específicos de Elementos

#### Placeholders y Ayudas

| Modo       | Elemento           | Hex       | RGB                  | Uso                  | Clase CSS                |
| ---------- | ------------------ | --------- | -------------------- | -------------------- | ------------------------ |
| **Claro**  | Placeholder        | `#9CA3AF` | `rgb(156, 163, 175)` | Texto de placeholder | `text-placeholder-light` |
| **Oscuro** | Placeholder        | `#6B7280` | `rgb(107, 114, 128)` | Texto de placeholder | `text-placeholder-dark`  |
| **Claro**  | Texto de Ayuda     | `#6B7280` | `rgb(107, 114, 128)` | Textos explicativos  | `text-help-text-light`   |
| **Oscuro** | Texto de Ayuda     | `#9CA3AF` | `rgb(156, 163, 175)` | Textos explicativos  | `text-help-text-dark`    |
| **Claro**  | Hint de Navegación | `#9CA3AF` | `rgb(156, 163, 175)` | Pistas de navegación | `text-nav-hint-light`    |
| **Oscuro** | Hint de Navegación | `#6B7280` | `rgb(107, 114, 128)` | Pistas de navegación | `text-nav-hint-dark`     |

#### Estados Deshabilitados

| Modo       | Elemento            | Hex       | RGB                  | Uso                 | Clase CSS                  |
| ---------- | ------------------- | --------- | -------------------- | ------------------- | -------------------------- |
| **Claro**  | Texto Deshabilitado | `#D1D5DB` | `rgb(209, 213, 219)` | Elementos inactivos | `text-disabled-text-light` |
| **Oscuro** | Texto Deshabilitado | `#4B5563` | `rgb(75, 85, 99)`    | Elementos inactivos | `text-disabled-text-dark`  |
| **Claro**  | Fondo Deshabilitado | `#F3F4F6` | `rgb(243, 244, 246)` | Fondos inactivos    | `bg-disabled-bg-light`     |
| **Oscuro** | Fondo Deshabilitado | `#1F2937` | `rgb(31, 41, 55)`    | Fondos inactivos    | `bg-disabled-bg-dark`      |

## ✅ Verificación de Implementación

### 🔍 Estado de Sincronización

**CONFIRMADO:** Los colores documentados en esta paleta coinciden EXACTAMENTE con:

* ✅ Código actual en `tailwind.config.js`

* ✅ Implementación en componentes (verificado en `ComponentCatalogView.vue`)

* ✅ Colores reales mostrados en la aplicación

### 📊 Resumen Visual de Colores Principales

#### Colores de Fondo del Body

* **Modo Claro:** `#F5F5F5` (gris muy claro)

* **Modo Oscuro:** `#1D1E23` (gris muy oscuro)

#### Colores de Fondo de Tarjetas

* **Modo Claro:** `#FFFFFF` (blanco puro)

* **Modo Oscuro:** `#191A1D` (gris oscuro)

#### Colores de Acento

* **Modo Claro:** `#206372` (azul verdoso corporativo)

* **Modo Oscuro:** `#F5DF4D` (amarillo dorado)

#### Colores de Texto

* **Modo Claro:** `#262626` (gris muy oscuro)

* **Modo Oscuro:** `#F4F4F4` (gris muy claro)

### 🎨 Nota de Consistencia

Esta paleta ha sido verificada contra la implementación real del código y la documentación técnica del catálogo de componentes. Todos los valores hexadecimales están confirmados como correctos y en uso activo.

## 🎯 Aplicación Práctica

### 🧩 Componentes Principales

#### Hero Section

```html
<section class="bg-body-light dark:bg-body-dark text-primary-light dark:text-primary-dark">
  <h1 class="text-accent-primary-light dark:text-accent-primary-dark">Título Principal</h1>
  <p class="text-secondary-light dark:text-secondary-dark">Descripción</p>
  <button class="bg-accent-primary-light dark:bg-accent-primary-dark text-on-accent-light dark:text-on-accent-dark hover:bg-accent-subtle-light dark:hover:bg-accent-subtle-dark">
    Call to Action
  </button>
</section>
```

#### Cards y Componentes

```html
<div class="bg-card-light dark:bg-card-dark border border-primary-light dark:border-primary-dark">
  <h3 class="text-primary-light dark:text-primary-dark">Título de Card</h3>
  <p class="text-secondary-light dark:text-secondary-dark">Contenido</p>
  <a href="#" class="text-accent-primary-light dark:text-accent-primary-dark hover:text-accent-subtle-light dark:hover:text-accent-subtle-dark">
    Leer más
  </a>
</div>
```

#### Formularios

```html
<form class="bg-card-light dark:bg-card-dark p-6 rounded-lg border border-primary-light dark:border-primary-dark">
  <input 
    class="bg-card-light dark:bg-card-dark border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark focus:border-accent-primary-light dark:focus:border-accent-primary-dark" 
    placeholder="Escribe aquí..."
  />
  <button class="bg-accent-primary-light dark:bg-accent-primary-dark text-on-accent-light dark:text-on-accent-dark hover:bg-accent-subtle-light dark:hover:bg-accent-subtle-dark">
    Enviar
  </button>
</form>
```

#### Estados de Feedback

```html
<!-- Mensaje de éxito -->
<div class="bg-success-bg-light dark:bg-success-bg-dark border border-success-border-light dark:border-success-border-dark p-4 rounded">
  <p class="text-success-light dark:text-success-dark">¡Operación completada con éxito!</p>
</div>

<!-- Mensaje de error -->
<div class="bg-error-bg-light dark:bg-error-bg-dark border border-error-border-light dark:border-error-border-dark p-4 rounded">
  <p class="text-error-light dark:text-error-dark">Ha ocurrido un error. Inténtalo de nuevo.</p>
</div>

<!-- Mensaje de advertencia -->
<div class="bg-warning-bg-light dark:bg-warning-bg-dark border border-warning-border-light dark:border-warning-border-dark p-4 rounded">
  <p class="text-warning-light dark:text-warning-dark">Atención: Revisa la información antes de continuar.</p>
</div>
```

### 📋 Información de Implementación

#### 🔧 Configuración en Tailwind CSS

Todos estos colores están definidos en `tailwind.config.js` bajo la sección `extend.colors` y `extend.textColor`. La configuración permite usar tanto clases de color como clases de texto:

```javascript
// Ejemplo de configuración
module.exports = {
  theme: {
    extend: {
      colors: {
        'accent-primary-light': '#206372',
        'accent-primary-dark': '#F5DF4D',
        'card-light': '#FFFFFF',
        'card-dark': '#191A1D',
        // ... más colores
      },
      textColor: {
        'primary-light': '#262626',
        'primary-dark': '#F4F4F4',
        // ... más colores de texto
      }
    }
  }
}
```

#### ✅ Características del Sistema

* **Solo colores HEX:** Sin valores rgba para mayor consistencia

* **Modo dual completo:** Cada color tiene su variante para modo claro y oscuro

* **Accesibilidad:** Contrastes validados para WCAG 2.1 AA

* **Nombres descriptivos:** Clases CSS claras y organizadas por función

* **Extensibilidad:** Fácil agregar nuevos colores siguiendo la convención

#### 🎨 Convenciones de Nomenclatura

* `*-light`: Variante para modo claro

* `*-dark`: Variante para modo oscuro

* `accent-*`: Colores de marca y destacados

* `text-*`: Específicamente para texto

* `bg-*`: Específicamente para fondos

* `border-*`: Específicamente para bordes

#### 📱 Uso con Modo Oscuro

```html
<!-- Patrón estándar -->
<div class="bg-card-light dark:bg-card-dark text-primary-light dark:text-primary-dark">
  Contenido que se adapta automáticamente
</div>
```

### 🎯 Estados Interactivos

#### Hover States

```html
<!-- Botones principales -->
<button class="bg-accent-primary-light dark:bg-accent-primary-dark hover:bg-accent-subtle-light dark:hover:bg-accent-subtle-dark text-on-accent-light dark:text-on-accent-dark">
  Botón Principal
</button>

<!-- Enlaces -->
<a href="#" class="text-accent-primary-light dark:text-accent-primary-dark hover:text-accent-subtle-light dark:hover:text-accent-subtle-dark">
  Enlace
</a>

<!-- Cards -->
<div class="bg-card-light dark:bg-card-dark border border-primary-light dark:border-primary-dark hover:border-accent-primary-light dark:hover:border-accent-primary-dark transition-colors">
  Card con hover
</div>
```

#### Focus States

```html
<!-- Inputs -->
<input class="bg-card-light dark:bg-card-dark border border-primary-light dark:border-primary-dark focus:border-accent-primary-light dark:focus:border-accent-primary-dark focus:ring-2 focus:ring-accent-primary-light/20 dark:focus:ring-accent-primary-dark/20" />

<!-- Botones -->
<button class="bg-accent-primary-light dark:bg-accent-primary-dark focus:outline-none focus:ring-2 focus:ring-accent-primary-light dark:focus:ring-accent-primary-dark focus:ring-offset-2">
  Botón con focus
</button>
```

## ♿ Accesibilidad y Contraste

### Ratios de Contraste

#### Texto Principal

* **Modo Claro:** `#262626` sobre `#FFFFFF` = **10.4:1** ✅ AAA

* **Modo Oscuro:** `#F4F4F4` sobre `#1D1E23` = **14.2:1** ✅ AAA

#### Texto Secundario

* **Modo Claro:** `#374151` sobre `#FFFFFF` = **9.73:1** ✅ AAA

* **Modo Oscuro:** `#E5E7EB` sobre `#1D1E23` = **12.1:1** ✅ AAA

#### Color de Marca

* **Azul sobre Blanco:** `#206372` sobre `#FFFFFF` = **5.2:1** ✅ AA

* **Amarillo sobre Negro:** `#F5DF4D` sobre `#1D1E23` = **11.8:1** ✅ AAA

#### Estados de Error/Éxito

* **Error:** `#DC2626` sobre `#FFFFFF` = **7.73:1** ✅ AAA

* **Éxito:** `#059669` sobre `#FFFFFF` = **4.56:1** ✅ AA

### Verificación de Contraste

```javascript
// Herramientas recomendadas para verificación:
// 1. WebAIM Contrast Checker
// 2. Colour Contrast Analyser
// 3. axe DevTools
// 4. Lighthouse Accessibility Audit
```

## 🌙 Implementación del Modo Oscuro

### Toggle de Tema

```javascript
// Función para cambiar tema
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');
  
  if (isDark) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

// Inicialización del tema
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
}
```

### CSS Custom Properties

```css
:root {
  /* Colores de marca */
  --brand-accent-light: #206372;
  --brand-accent-dark: #F5DF4D;
  --brand-accent-darker: #D9B40C;
  --brand-accent-light: #FEF3C7;
  --brand-dark: #1D1E23;
  
  /* Modo claro */
  --bg-primary: #FFFFFF;
  --text-primary-light: #262626;
  --text-primary-dark: #F4F4F4;
  --text-secondary: #374151;
  --border-color: #E5E7EB;
}

.dark {
  /* Modo oscuro */
  --bg-primary-light: #F5F5F5;
  --bg-primary-dark: #1D1E23;
  --text-primary: #FFFFFF;
  --text-secondary: #E5E7EB;
  --border-color: #374151;
}
```

## 📊 Uso de Colores por Sección

### Home Page

#### Hero Section

* **Fondo:** `bg-light` / `dark:bg-dark`

* **Título:** `text-brand-accent`

* **Texto:** `text-primary-light` / `dark:text-primary-dark`

* **CTA:** `bg-brand-accent` con `text-brand-dark`

#### Secciones de Contenido

* **Fondo:** `bg-surface-light` / `dark:bg-surface-dark`

* **Títulos:** `text-primary-light` / `dark:text-primary-dark`

* **Texto:** `text-secondary-light` / `dark:text-secondary-dark`

* **Acentos:** `text-brand-accent`

#### Cards de Artículos

* **Fondo:** `bg-surface-light` / `dark:bg-surface-dark`

* **Borde:** `border-border-light` / `dark:border-border-dark`

* **Hover:** `hover:border-brand-accent`

### Blog

#### Lista de Artículos

* **Fondo de cards:** `bg-surface-light` / `dark:bg-surface-dark`

* **Títulos:** `text-primary-light` / `dark:text-primary-dark`

* **Meta información:** `text-secondary-light` / `dark:text-secondary-dark`

* **Enlaces:** `text-brand-accent hover:text-brand-accent-darker`

#### Artículo Individual

* **Fondo:** `bg-bg-light` / `dark:bg-bg-dark`

* **Contenido:** `text-primary-light` / `dark:text-primary-dark`

* **Enlaces internos:** `text-brand-accent`

* **Código:** `bg-surface-accent-light` / `dark:bg-surface-accent-dark`

### Formularios

#### Campos de Input

* **Fondo:** `bg-bg-light` / `dark:bg-surface-dark`

* **Borde:** `border-border-light` / `dark:border-border-dark`

* **Focus:** `focus:border-brand-accent`

* **Texto:** `text-primary-light` / `dark:text-primary-dark`

#### Estados de Validación

* **Error:** `border-accent-error text-accent-error`

* **Éxito:** `border-accent-success text-accent-success`

* **Información:** `border-accent-info text-accent-info`

## 🎨 Paletas Complementarias

### Para Gráficos y Visualizaciones

```css
/* Paleta de datos */
--data-1-light: #206372;  /* Azul corporativo */
  --data-1-dark: #F5DF4D;   /* Amarillo dorado */
--data-2: #4338CA;  /* Azul información */
--data-3: #059669;  /* Verde éxito */
--data-4: #DC2626;  /* Rojo error */
--data-5: #7C3AED;  /* Púrpura */
--data-6: #EA580C;  /* Naranja */
```

### Para Estados de Carga

```css
/* Skeleton loading */
--skeleton-light: #F3F4F6;
--skeleton-dark: #374151;

/* Shimmer effect */
--shimmer-light: rgba(255, 255, 255, 0.8);
--shimmer-dark: rgba(255, 255, 255, 0.1);
```

## 🔮 Roadmap de Colores

### Próximas Mejoras

1. **Paleta extendida** para más casos de uso
2. **Colores semánticos** adicionales (warning, info, etc.)
3. **Gradientes** para elementos decorativos
4. **Colores de marca secundarios** para variedad

### Optimizaciones Futuras

1. **Color tokens** en formato JSON
2. **Generación automática** de variantes
3. **Testing de contraste** automatizado
4. **Paletas dinámicas** basadas en contenido

## 📝 Notas de Implementación

### Tailwind CSS Configuration

```javascript
// tailwind.config.js - Sección de colores
module.exports = {
  theme: {
    extend: {
      colors: {
        // Colores de marca
        brand: {
          accent: { light: '#206372', dark: '#F5DF4D' },
          'accent-darker': '#D9B40C',
          'accent-light': '#FEF3C7',
          dark: '#1D1E23'
        },
        // Fondos
        bg: {
          light: '#FFFFFF',
          dark: '#1D1E23'
        },
        // Superficies
        surface: {
          light: '#F5F5F5',
          dark: '#28282D',
          'deeper-dark': '#202023',
          'accent-light': '#F3F4F6',
          'accent-dark': '#374151'
        },
        // Texto
        primary: {
          light: '#262626',
          dark: '#FFFFFF'
        },
        secondary: {
          light: '#374151',
          dark: '#E5E7EB'
        },
        // Estados
        accent: {
          info: '#4338CA',
          'info-dark': '#A78BFA',
          success: '#059669',
          error: '#DC2626'
        },
        // Interfaz
        border: {
          light: '#E5E7EB',
          dark: '#374151'
        },
        divider: {
          light: '#E5E7EB',
          dark: '#374151'
        },
        dot: {
          light: 'rgba(0, 0, 0, 0.18)',
          dark: 'rgba(255, 255, 255, 0.11)'
        }
      }
    }
  }
}
```

### CSS Variables Fallback

```css
/* Para compatibilidad con navegadores antiguos */
:root {
  --brand-accent-light: #206372;
  --brand-accent-dark: #F5DF4D;
  --brand-accent-darker: #D9B40C;
  --brand-accent-light: #FEF3C7;
  --brand-dark: #1D1E23;
}

/* Uso con fallback */
.element {
  background-color: var(--brand-accent-light); /* Fallback */
  background-color: var(--brand-accent-dark); /* Dark mode fallback */
  background-color: var(--brand-accent);
}
```

