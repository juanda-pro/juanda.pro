# 🚀 Plan Maestro - Sprint 1 2025-07-21
**Fecha:** 21 de enero de 2025  
**Objetivo:** Estandarización del Hero Global + Refactorización Avanzada de Contacto

---

## 📊 Análisis Técnico Completado

### 🎨 Hero Section Actual (HomeView.vue)
**Componentes identificados:**
- **Estructura base:** `SectionWrapper` con `spacing="none"`
- **Imagen de fondo:** `HeaderBackground` (cabecera_inicio.jpeg)
- **Overlay:** Gradiente dual para contraste (modo claro/oscuro)
- **Contenido:** Div con `backdrop-blur-md`, título animado, párrafo descriptivo
- **Clases críticas:** `relative text-white overflow-hidden min-h-[80vh] flex flex-col justify-center pt-20 py-12 md:py-24`

### 📝 ContactoViewV2.vue - Estado Actual
**Elementos a modificar:**
- **Línea 195-197:** Párrafo a eliminar del texto de introducción
- **Líneas 210-251:** Sección "Ideas" - puntos a centrar
- **Líneas 253-258:** Quote actual en caja - convertir a quote izquierda
- **Línea 441:** Título "¿Listo para empezar?" → "Gracias"
- **Línea 445:** Eliminar "Gracias por conectar." del párrafo
- **Líneas 453, 460:** Cambiar textos de botones
- **Línea 262+:** Formulario - rediseño visual para mayor protagonismo

---

## 🏗️ Arquitectura del Plan

### FASE 1: Creación del Componente Hero Universal
**Duración estimada:** 45-60 minutos

#### 1.1 Crear HeroSection.vue
- **Ubicación:** `/src/components/HeroSection.vue`
- **Props requeridas:**
  - `title` (String, required)
  - `subtitle` (String, optional)
  - `backgroundImage` (String, required)
  - `animatedText` (String, optional) - para span animado
  - `animatedTextClass` (String, default: 'text-brand-accent animate-pulse')

#### 1.2 Extraer Lógica del Hero
- **Importar imagen:** Mover lógica de `HeaderBackground`
- **Transiciones:** Extraer animaciones de entrada
- **Responsive:** Mantener clases responsivas existentes
- **Accesibilidad:** Preservar alt texts y ARIA labels

#### 1.3 Protocolo de Testing
- ✅ Verificar renderizado en modo claro/oscuro
- ✅ Comprobar responsividad (mobile, tablet, desktop)
- ✅ Validar animaciones de entrada
- ✅ Testing de accesibilidad (screen readers)

### FASE 2: Implementación Hero en Todas las Páginas
**Duración estimada:** 30-45 minutos

#### 2.1 Lista de Vistas a Actualizar
- **HomeView.vue** - Refactorizar para usar componente
- **ContactoViewV2.vue** - Reemplazar IntroCard + PageHeader
- **BlogView.vue** - Añadir hero estandarizado
- **SoyView.vue** - Añadir hero estandarizado
- **ArticleDetailView.vue** - Evaluar necesidad de hero

#### 2.2 Configuración por Vista
```javascript
// HomeView.vue
{
  title: "¡Despierta, que te come la iA!",
  subtitle: "pero solo a medias, puede liberarnos tiempo para enfocarnos en lo que realmente importa: Las relaciones, los proyectos personales, el autoconocimiento...",
  backgroundImage: HeaderBackground,
  animatedText: "iA"
}

// ContactoViewV2.vue
{
  title: "Contacto",
  subtitle: "¿Idea para automatizar un proceso? ¿Preguntas sobre iA? Escríbeme sin compromiso.",
  backgroundImage: HeaderBackground // Misma imagen temporalmente
}

// BlogView.vue
{
  title: "Blog",
  subtitle: "Aprendizajes, herramientas y reflexiones honestas sobre tecnología práctica.",
  backgroundImage: HeaderBackground
}

// SoyView.vue
{
  title: "Soy Juan David",
  subtitle: "Desarrollador, automatizador y entusiasta de la tecnología como herramienta de liberación personal.",
  backgroundImage: HeaderBackground
}
```

#### 2.3 Protocolo de Validación
- ✅ Cada vista mantiene su personalidad única
- ✅ Consistencia visual entre páginas
- ✅ Performance no degradado
- ✅ SEO preservado (títulos H1 correctos)

### FASE 3: Refactorización Avanzada de ContactoViewV2
**Duración estimada:** 60-90 minutos

#### 3.1 Modificaciones de Contenido
**3.1.1 Texto de Introducción**
- **Archivo:** `ContactoViewV2.vue` líneas 195-197
- **Acción:** Eliminar párrafo completo:
  ```
  "Si has explorado el sitio y algo te ronda la cabeza como una automatización que quieras implementar o si tienes curiosidad sobre herramientas prácticas, no dudes en escribirme."
  ```

**3.1.2 Reubicación del Formulario**
- **Posición actual:** Después de sección "Ideas" (línea 262+)
- **Nueva posición:** Inmediatamente después del texto de introducción
- **Consideraciones:** Mantener funcionalidad desplegable intacta

**3.1.3 Sección "¿Aún no te animas?"**
- **Líneas 210-251:** Centrar cada punto
- **Cambio de layout:** De `flex items-start` a `text-center`
- **Mantener:** Iconos de flecha y estructura de contenido

**3.1.4 Conversión a Quote**
- **Líneas 253-258:** Eliminar caja `bg-surface-light/50`
- **Nuevo diseño:** Quote alineado a la izquierda
- **Elementos:** Comillas tipográficas, línea lateral, estilo italic

**3.1.5 Sección Final "Gracias"**
- **Línea 441:** Cambiar título de "¿Listo para empezar?" a "Gracias"
- **Línea 445:** Eliminar "Gracias por conectar." del párrafo
- **Botones:**
  - "Escribir mensaje ahora" → "Escribir ahora"
  - "Lee mi blog primero" → "Aprender más"

#### 3.2 Rediseño Visual del Formulario
**3.2.1 Análisis del Estado Actual**
- **Problema:** Formulario poco destacado en estado reposo
- **Ubicación:** Líneas 285-300 (placeholder inicial)
- **Estilo actual:** `bg-surface-light dark:bg-surface-dark p-8 rounded-lg shadow-md`

**3.2.2 Propuesta de Mejora Visual**
- **Gradiente de fondo:** Sutil con brand-accent
- **Borde animado:** Efecto glow en hover
- **Iconografía:** Añadir icono de mensaje
- **Call-to-action:** Texto más atractivo en placeholder
- **Sombras:** Elevación visual mejorada

**3.2.3 Implementación Técnica**
```css
.enhanced-form-container {
  background: linear-gradient(135deg, 
    theme('colors.surface-light') 0%, 
    theme('colors.brand-accent/5') 100%);
  border: 2px solid theme('colors.brand-accent/20');
  box-shadow: 0 8px 32px theme('colors.brand-accent/10');
  transition: all 0.3s ease;
}

.enhanced-form-container:hover {
  border-color: theme('colors.brand-accent/40');
  box-shadow: 0 12px 48px theme('colors.brand-accent/20');
  transform: translateY(-2px);
}
```

#### 3.3 Protocolo de Testing Avanzado
- ✅ **Funcionalidad:** Formulario desplegable funciona correctamente
- ✅ **UX:** Flujo de usuario mejorado y más intuitivo
- ✅ **Visual:** Formulario destaca como elemento principal
- ✅ **Responsive:** Todos los cambios funcionan en mobile
- ✅ **Accesibilidad:** Navegación por teclado preservada
- ✅ **Performance:** Sin degradación de velocidad

---

## 🔄 Protocolos de Revisión y Calidad

### Checklist de Desarrollo Élite
**Antes de cada commit:**
- [ ] **Linting:** Sin errores ESLint/Prettier
- [ ] **TypeScript:** Sin errores de tipos
- [ ] **Responsive:** Testing en 3 breakpoints mínimo
- [ ] **Accesibilidad:** Validación con herramientas WAVE/axe
- [ ] **Performance:** Lighthouse score mantenido
- [ ] **Cross-browser:** Chrome, Firefox, Safari

### Protocolo de Revisión Continua
**Cada 3 tareas completadas:**
1. **Screenshot comparison:** Antes vs después
2. **User journey testing:** Flujo completo de usuario
3. **Code review:** Calidad y mantenibilidad
4. **Documentation update:** Actualizar referencias

### Métricas de Éxito
- **Visual:** Consistencia del 100% en hero sections
- **UX:** Formulario de contacto más prominente y usable
- **Performance:** Mantener Lighthouse 95+ en todas las métricas
- **Accesibilidad:** WCAG 2.1 AA compliance
- **Código:** 0 errores, 0 warnings, cobertura de casos edge

---

## 📚 Referencias y Documentación

### Archivos Clave a Monitorear
- `HomeView.vue` - Referencia de hero original
- `ContactoViewV2.vue` - Vista principal a refactorizar
- `SectionWrapper.vue` - Componente contenedor
- `PageLayout.vue` - Layout base
- `main.css` - Estilos globales y animaciones

### Dependencias Técnicas
- **Vue 3:** Composition API, Transitions
- **TailwindCSS:** Clases utilitarias, tema personalizado
- **HeroIcons:** Iconografía consistente
- **TypeScript:** Tipado fuerte en componentes

### Documentación a Actualizar Post-Sprint
- Guía de componentes con HeroSection.vue
- Patrones de diseño actualizados
- Changelog detallado de cambios UX

---

## ⚡ Orden de Ejecución Optimizado

1. **FASE 1.1-1.2:** Crear y testear HeroSection.vue
2. **FASE 1.3:** Protocolo de testing inicial
3. **FASE 2.1:** Implementar en HomeView (refactor)
4. **FASE 2.2:** Implementar en resto de vistas
5. **FASE 3.1:** Modificaciones de contenido en ContactoViewV2
6. **FASE 3.2:** Rediseño visual del formulario
7. **FASE 3.3:** Testing avanzado y validación final
8. **Revisión final:** Checklist completo y documentación

**Tiempo total estimado:** 2.5-3.5 horas
**Complejidad:** Media-Alta
**Riesgo:** Bajo (cambios incrementales y testeados)

---

*Plan diseñado siguiendo metodologías de desarrollo web élite y mejores prácticas Vue.js + TailwindCSS*
