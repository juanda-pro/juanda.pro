# Análisis de Dependencias y Bundle

## Fecha: $(Get-Date -Format "yyyy-MM-dd HH:mm")

## Resumen Ejecutivo

Análisis completo de las dependencias del proyecto para identificar optimizaciones potenciales en el bundle y eliminar código no utilizado.

## Dependencias del Proyecto

### Dependencias de Producción
- **@headlessui/vue**: ^1.7.23 - Componentes UI accesibles
- **@heroicons/vue**: ^2.2.0 - Iconos SVG
- **@supabase/supabase-js**: ^2.50.3 - Cliente de base de datos
- **@vueuse/core**: ^13.4.0 - Utilidades de composición
- **gsap**: ^3.13.0 - Animaciones
- **marked**: ^16.0.0 - Parser de Markdown
- **vue**: ^3.4.21 - Framework principal
- **vue-router**: ^4.3.0 - Enrutamiento

### Dependencias de Desarrollo
- **@tailwindcss/typography**: ^0.5.16
- **TypeScript**: ~5.4.0
- **Vite**: ^5.2.8
- **ESLint**: ^8.57.0
- **Prettier**: ^3.2.5

## Componentes No Utilizados Identificados

### 🔴 Componentes Huérfanos (No en Router)

1. **NotesView.vue** y sus dependencias:
   - `WikiLayout.vue`
   - `WikiSidebar.vue` 
   - `WikiContent.vue`
   - `OnboardingHint.vue`
   - `MetadataRenderer.vue`

2. **ResourceModal.vue**
   - No se encuentra ninguna referencia de uso
   - Utiliza @heroicons/vue

### ⚠️ Impacto en Bundle

**Dependencias afectadas por componentes no utilizados:**
- `marked` - Solo usado en WikiContent.vue (no utilizado)
- Iconos específicos de @heroicons/vue en componentes huérfanos
- Potencial reducción del bundle al eliminar código muerto

### ✅ Componentes Activos Verificados

**Componentes que SÍ están en uso:**
- `ScrollingFeatures.vue` (HomeView) - usa GSAP
- `Header.vue` - usa @heroicons/vue
- Todos los componentes de las vistas principales del router

## Recomendaciones de Optimización

### Acción Inmediata
1. **Eliminar componentes huérfanos** si no están planificados para uso futuro
2. **Remover dependencia `marked`** si WikiContent no se va a usar
3. **Tree-shaking automático** de iconos no utilizados

### Optimizaciones de Bundle
1. **Lazy loading** ya implementado correctamente en router
2. **Code splitting** por rutas funcionando
3. **Vite** maneja automáticamente el tree-shaking

### Métricas Estimadas
- **Reducción potencial**: ~15-20% del bundle si se eliminan componentes Wiki
- **Dependencias removibles**: `marked` (~50KB)
- **Iconos no utilizados**: Tree-shaking automático

## Decisión Pendiente

**NotesView y componentes Wiki:**
- ¿Están planificados para implementación futura?
- ¿Se pueden eliminar definitivamente?
- Requiere decisión del propietario del proyecto

## Métricas del Bundle de Producción

### Resultados del Build (npm run build)

**Bundle principal:**
- `index-DNpuJZWy.js`: 311.19 kB (117.69 kB gzipped)
- `index-DYEjqL5W.css`: 97.00 kB (13.12 kB gzipped)

**Chunks por vista (lazy loading):**
- `ContactoViewV2`: 15.64 kB (5.34 kB gzipped)
- `ArticleDetailView`: 8.44 kB (2.93 kB gzipped)
- `BlogView`: 7.26 kB (2.77 kB gzipped)
- `SoyView`: 6.71 kB (2.52 kB gzipped)
- `CookieManager`: 5.60 kB (2.13 kB gzipped)
- `PrivacyPolicyView`: 2.27 kB (1.08 kB gzipped)
- `CookiesPolicyView`: 2.13 kB (1.09 kB gzipped)
- `ArticleCard`: 1.52 kB (0.80 kB gzipped)
- `HomeView`: 0.06 kB (0.08 kB gzipped)

**Total aproximado**: ~450 kB (~150 kB gzipped)

## Estado del Bundle Actual

✅ **Optimizaciones ya implementadas:**
- Lazy loading de rutas funcionando correctamente
- Tree-shaking automático con Vite
- Componentes modulares y reutilizables
- TypeScript para mejor optimización
- Code splitting eficiente por vista

## Próximos Pasos

1. Consultar sobre el futuro de NotesView
2. Eliminar componentes confirmados como no necesarios
3. Ejecutar build de producción para métricas finales
4. Documentar decisiones tomadas

---

**Nota**: Este análisis se basa en el estado actual del código y las rutas activas en el router.