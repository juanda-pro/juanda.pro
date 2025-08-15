# Respaldo ContactForm.vue - 2025-08-06

## Información del Respaldo
- **Archivo:** ContactForm.vue
- **Ruta:** c:\Users\juand\Desktop\juanda.pro\app\src\components\ContactForm.vue
- **Fecha:** 2025-08-06
- **Motivo:** Cambio de colores de elementos text-brand-accent
- **Colores objetivo:** 
  - Modo oscuro: #F5DF4D
  - Modo claro: #206372

## Elementos con text-brand-accent identificados

### Línea 249 - SVG Icon
```vue
<svg class="h-12 w-12 text-brand-accent mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
```

### Línea 264 - Input Field
```vue
class="w-full p-4 text-lg border-2 border-brand-accent/30 bg-white/50 dark:bg-gray-800/50 text-primary-light dark:text-primary-dark placeholder-secondary-light dark:placeholder-secondary-dark cursor-pointer hover:border-brand-accent hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-accent/20 backdrop-blur-sm"
```

### Línea 273 - Progress Bar
```vue
class="bg-brand-accent h-2 rounded-full transition-all duration-500 ease-out"
```

### Línea 306 - Textarea
```vue
class="form-input-active w-full px-4 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent placeholder-secondary-light dark:placeholder-secondary-dark text-primary-light dark:text-primary-dark resize-none"
```

### Línea 320 - Input Field
```vue
class="form-input-active w-full px-4 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent placeholder-secondary-light dark:placeholder-secondary-dark text-primary-light dark:text-primary-dark"
```

### Línea 336 - Navigation Button
```vue
class="flex items-center space-x-2 px-4 py-2 text-secondary-light dark:text-secondary-dark hover:text-brand-accent transition-colors duration-200"
```

### Línea 347 - Next Button
```vue
class="px-6 py-2 bg-brand-accent hover:bg-brand-accent/90 disabled:bg-surface-light disabled:dark:bg-surface-dark disabled:text-secondary-light disabled:dark:text-secondary-dark text-gray-900 rounded-lg transition-all duration-200 font-medium disabled:cursor-not-allowed"
```

### Línea 356 - Submit Button
```vue
class="px-6 py-2 bg-brand-accent hover:bg-brand-accent/90 disabled:bg-surface-light disabled:dark:bg-surface-dark disabled:text-secondary-light disabled:dark:text-secondary-dark text-gray-900 rounded-lg transition-all duration-200 font-medium disabled:cursor-not-allowed"
```

### Línea 421 - CSS Focus Style
```css
box-shadow: 0 0 0 4px rgba(var(--brand-accent-rgb), 0.15);
```

## Estado Actual
- Todos los elementos usan la clase `text-brand-accent` o variantes como `bg-brand-accent`
- Los colores actuales son azul corporativo (#206372) en modo claro y amarillo dorado (#F5DF4D) en modo oscuro
- Se mantienen transparencias con sufijos como `/30`, `/20`, `/90`

## Plan de Cambios
1. Cambiar `text-brand-accent` por colores hardcodeados específicos
2. Modo oscuro: `text-[#F5DF4D]`
3. Modo claro: `text-[#206372]`
4. Mantener todas las transparencias existentes
5. Aplicar cambios similares a `bg-brand-accent`, `border-brand-accent`, etc.