# Respaldo HomeView.vue - 2025-08-06

## Información del Respaldo
- **Archivo:** HomeView.vue
- **Ruta:** c:\Users\juand\Desktop\juanda.pro\app\src\views\HomeView.vue
- **Fecha:** 2025-08-06
- **Motivo:** Cambio de colores de elementos text-brand-accent

## Elementos con text-brand-accent identificados

### Línea 66 - Color Class Property
```vue
colorClass: 'text-brand-accent',
```

### Línea 120 - Link "Conoce más sobre mí"
```vue
<a href="/soy" class="inline-flex items-center text-brand-accent hover:text-brand-accent-dark transition-colors duration-300">
```

### Línea 186 - Decorative Icon
```vue
<DecorativeIcon type="chevron-down" size="lg" color="text-brand-accent/30" />
```

### Línea 228 - Link "Ver todos los artículos"
```vue
<a href="/blog" class="inline-flex items-center text-brand-accent hover:text-brand-accent-dark transition-colors duration-300 group">
```

## Elementos con bg-brand-accent identificados

### Línea 136 - Gradient Background
```vue
<div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-brand-accent/20 to-transparent rounded-full"></div>
```

### Línea 204 - Gradient Line
```vue
<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent"></div>
```

## Estado Actual
- Los enlaces usan `text-brand-accent` con hover `text-brand-accent-dark`
- Los elementos decorativos usan `text-brand-accent/30` para transparencia
- Los gradientes usan `from-brand-accent/20` y `via-brand-accent/20`
- Todos son actualmente amarillos en ambos modos

## Plan de Cambios
1. Reemplazar `text-brand-accent` con colores específicos por modo
2. Modo oscuro: `dark:text-[#F5DF4D]`
3. Modo claro: `text-[#206372]`
4. Mantener transparencias y estados hover