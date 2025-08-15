# Respaldo SoyView.vue - 2025-08-06

## Información del Respaldo
- **Archivo:** SoyView.vue
- **Ruta:** c:\Users\juand\Desktop\juanda.pro\app\src\views\SoyView.vue
- **Fecha:** 2025-08-06
- **Motivo:** Cambio de colores de elementos text-brand-accent

## Elementos con text-brand-accent identificados

### Línea 88 - SVG Icon (Bombilla)
```vue
<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
```

### Línea 99 - SVG Icon (Check Circle)
```vue
<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
```

### Línea 110 - SVG Icon (Location)
```vue
<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
```

## Elementos con bg-brand-accent identificados

### Línea 67 - Gradient Vertical
```vue
<div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-transparent to-brand-accent/30 dark:to-brand-accent/20"></div>
```

### Línea 71 - Underline Accent
```vue
<span class="absolute -bottom-2 left-0 w-1/3 h-1 bg-brand-accent/50 rounded-full"></span>
```

### Línea 81 - Vertical Line
```vue
<div class="w-1 h-16 bg-gradient-to-b from-transparent to-brand-accent/30 rounded-full"></div>
```

### Línea 86 - Icon Container Background
```vue
<div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 dark:bg-brand-accent/5 border border-brand-accent/20">
```

### Línea 97 - Icon Container Background
```vue
<div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 dark:bg-brand-accent/5 border border-brand-accent/20">
```

### Línea 108 - Icon Container Background
```vue
<div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 dark:bg-brand-accent/5 border border-brand-accent/20">
```

### Línea 123 - Horizontal Divider
```vue
<div class="w-16 h-0.5 bg-brand-accent/40 dark:bg-brand-accent/30 rounded-full mx-auto mt-16"></div>
```

## Elementos con border-brand-accent identificados

### Línea 126 - Quote Border
```vue
<p class="text-xl relative pl-4 border-l-2 border-brand-accent/30 dark:border-brand-accent/20">
```

## Estado Actual
- SVG icons usan `text-brand-accent` directamente
- Contenedores de iconos usan `bg-brand-accent/10` y `bg-brand-accent/5` para modo oscuro
- Bordes usan `border-brand-accent/20` y `border-brand-accent/30`
- Elementos decorativos usan varias transparencias: /50, /40, /30, /20, /10, /5
- Todos son actualmente amarillos en ambos modos

## Plan de Cambios
1. Reemplazar `text-brand-accent` con colores específicos
2. Reemplazar `bg-brand-accent` con colores específicos
3. Reemplazar `border-brand-accent` con colores específicos
4. Modo oscuro: usar #F5DF4D como base
5. Modo claro: usar #206372 como base
6. Mantener todas las transparencias existentes