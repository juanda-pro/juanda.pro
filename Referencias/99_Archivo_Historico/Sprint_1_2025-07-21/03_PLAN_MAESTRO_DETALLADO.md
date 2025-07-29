# 🚀 PLAN MAESTRO DETALLADO - Sprint 1 2025-07-21
**Implementación paso a paso con protocolos de calidad élite**

---

## 📋 RESUMEN EJECUTIVO

### Objetivos Confirmados
1. **Hero Global:** Componente HeroSection.vue reutilizable en todas las páginas
2. **Contacto Refactor:** 6 modificaciones específicas + rediseño formulario
3. **Calidad Élite:** Testing exhaustivo y documentación completa

### Tiempo Estimado Total: 2.5-3.5 horas
### Complejidad: Media-Alta
### Riesgo: Bajo (cambios incrementales y testeados)

---

## 🏗️ FASE 1: CREACIÓN DEL COMPONENTE HERO UNIVERSAL
**Duración:** 45-60 minutos

### 1.1 Crear HeroSection.vue
**Ubicación:** `/src/components/HeroSection.vue`

#### Props Interface
```typescript
interface HeroProps {
  title: string;                    // Título principal (required)
  subtitle?: string;                // Párrafo descriptivo (optional)
  backgroundImage: string;          // URL imagen de fondo (required)
  animatedText?: string;            // Texto del span animado (optional)
  animatedTextClass?: string;       // Clases CSS del span (default: 'text-brand-accent animate-pulse')
}
```

#### Estructura del Componente
```vue
<script setup lang="ts">
import { computed } from 'vue';
import SectionWrapper from './SectionWrapper.vue';

interface Props {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  animatedText?: string;
  animatedTextClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  animatedTextClass: 'text-brand-accent animate-pulse'
});

// Computed para procesar título con texto animado
const processedTitle = computed(() => {
  if (!props.animatedText) return props.title;
  
  const parts = props.title.split(props.animatedText);
  return {
    before: parts[0] || '',
    animated: props.animatedText,
    after: parts[1] || ''
  };
});
</script>

<template>
  <SectionWrapper 
    spacing="none" 
    class="relative text-white overflow-hidden min-h-[80vh] flex flex-col justify-center pt-20 py-12 md:py-24"
  >
    <!-- Imagen de fondo con overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        :src="backgroundImage" 
        :alt="`Imagen de fondo para ${title}`" 
        class="w-full h-full object-cover object-center"
        loading="eager"
      />
      <!-- Overlay dual para contraste claro/oscuro -->
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-black/10 dark:from-black/80 dark:via-black/50"></div>
    </div>

    <!-- Contenido centrado -->
    <div class="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-black/30 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl ring-1 ring-white/10">
        <!-- Título con animación de entrada -->
        <Transition
          appear
          enter-from-class="opacity-0 scale-95"
          enter-active-class="transition-all duration-700 ease-out"
        >
          <h1 class="text-center text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            <template v-if="animatedText && processedTitle">
              {{ processedTitle.before }}<span :class="animatedTextClass">{{ processedTitle.animated }}</span>{{ processedTitle.after }}
            </template>
            <template v-else>{{ title }}</template>
          </h1>
        </Transition>

        <!-- Subtítulo con animación -->
        <Transition
          appear
          enter-from-class="opacity-0 translate-y-4"
          enter-active-class="transition-all duration-700 ease-out delay-300"
        >
          <p 
            v-if="subtitle" 
            class="mt-6 text-center text-lg md:text-xl leading-relaxed text-gray-200/95 max-w-3xl mx-auto text-shadow-md"
            v-html="subtitle"
          ></p>
        </Transition>
      </div>
    </div>

    <!-- Indicador de scroll (opcional) -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-80">
      <svg class="h-8 w-8 text-white/70 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </SectionWrapper>
</template>
```

#### Checklist de Creación
- [ ] Crear archivo `/src/components/HeroSection.vue`
- [ ] Implementar interface TypeScript
- [ ] Añadir lógica de procesamiento de título animado
- [ ] Implementar transiciones de entrada
- [ ] Añadir indicador de scroll
- [ ] Validar accesibilidad (alt texts, ARIA)
- [ ] Testing responsive (mobile, tablet, desktop)

### 1.2 Testing Inicial del Componente
#### Protocolo de Validación
1. **Renderizado básico:** Título y subtítulo se muestran correctamente
2. **Props dinámicas:** Cambios en props se reflejan en tiempo real
3. **Imagen de fondo:** Carga correcta y responsive
4. **Animaciones:** Transiciones funcionan suavemente
5. **Accesibilidad:** Screen readers pueden navegar
6. **Performance:** No degradación en Lighthouse

#### Comandos de Testing
```bash
# Verificar componente en desarrollo
npm run dev

# Validar TypeScript
npm run type-check

# Testing de accesibilidad
npx axe-cli http://localhost:5173
```

---

## 🌐 FASE 2: IMPLEMENTACIÓN GLOBAL DEL HERO
**Duración:** 30-45 minutos

### 2.1 Refactorizar HomeView.vue
#### Cambios Requeridos
```vue
<!-- ANTES (líneas 99-119) -->
<SectionWrapper spacing="none" class="...">
  <!-- Estructura completa del hero actual -->
</SectionWrapper>

<!-- DESPUÉS -->
<HeroSection
  title="¡Despierta, que te come la iA!"
  subtitle="<strong>pero solo a medias</strong>, puede liberarnos tiempo para enfocarnos en lo que realmente importa: Las relaciones, los proyectos personales, el autoconocimiento..."
  :background-image="HeaderBackground"
  animated-text="iA"
/>
```

#### Checklist HomeView
- [ ] Importar HeroSection component
- [ ] Reemplazar hero actual con HeroSection
- [ ] Verificar que animación "iA" funciona
- [ ] Testing visual: comparar antes/después
- [ ] Validar que no hay regresiones

### 2.2 Actualizar ContactoViewV2.vue (Solo Hero)
#### Cambios Requeridos
```vue
<!-- ANTES (líneas 179-186) -->
<SectionWrapper spacing="normal">
  <IntroCard>
    <PageHeader subtitle="...">Contacto</PageHeader>
  </IntroCard>
</SectionWrapper>

<!-- DESPUÉS -->
<HeroSection
  title="Contacto"
  subtitle="¿Idea para automatizar un proceso? ¿Preguntas sobre iA? Escríbeme sin compromiso."
  :background-image="HeaderBackground"
/>
```

#### Consideraciones Especiales
- **PageLayout:** Añadir `:remove-padding-top="true"`
- **Imports:** Añadir HeroSection, HeaderBackground
- **Eliminar:** Imports de IntroCard y PageHeader (si no se usan en otro lugar)

### 2.3 Implementar en BlogView.vue
#### Análisis Previo
- Revisar estructura actual de BlogView.vue
- Identificar hero existente o área donde añadir
- Definir título y subtítulo apropiados

#### Configuración Propuesta
```vue
<HeroSection
  title="Blog"
  subtitle="Aprendizajes, herramientas y reflexiones honestas sobre tecnología práctica. Todo documentado para que experimentes por tu cuenta."
  :background-image="HeaderBackground"
/>
```

### 2.4 Implementar en SoyView.vue
#### Configuración Propuesta
```vue
<HeroSection
  title="Soy Juan David"
  subtitle="Desarrollador, automatizador y entusiasta de la tecnología como herramienta de liberación personal. Aquí te cuento mi historia y enfoque."
  :background-image="HeaderBackground"
/>
```

### 2.5 Protocolo de Validación Global
#### Testing por Vista
- [ ] **HomeView:** Hero funciona idéntico al original
- [ ] **ContactoViewV2:** Hero reemplaza IntroCard correctamente
- [ ] **BlogView:** Hero se integra sin conflictos
- [ ] **SoyView:** Hero mantiene identidad de la página

#### Testing Cross-Browser
- [ ] Chrome: Renderizado correcto
- [ ] Firefox: Animaciones funcionan
- [ ] Safari: Compatibilidad CSS
- [ ] Mobile: Responsive en todos los dispositivos

---

## 📝 FASE 3: REFACTORIZACIÓN COMPLETA DE CONTACTO
**Duración:** 60-90 minutos

### 3.1 Modificaciones de Contenido

#### 3.1.1 Eliminar Párrafo de Introducción
**Ubicación:** Líneas 195-197 ContactoViewV2.vue
**Acción:** Eliminar párrafo completo
```vue
<!-- ELIMINAR ESTE BLOQUE -->
<p class="text-xl text-secondary-light dark:text-secondary-dark leading-relaxed">
  Si has explorado el sitio y algo te ronda la cabeza <em>como una automatización</em> que quieras implementar o si tienes curiosidad sobre herramientas prácticas, no dudes en escribirme.
</p>
```

#### 3.1.2 Reubicar Formulario Desplegable
**Estado actual:** Después de sección "Ideas" (línea 262+)
**Nueva ubicación:** Inmediatamente después del texto de introducción

**Pasos:**
1. Cortar bloque completo del formulario (líneas 262-400)
2. Pegarlo después de la sección de introducción (línea 199)
3. Verificar que toda la lógica JavaScript sigue funcionando
4. Testing del flujo desplegable completo

#### 3.1.3 Centrar Puntos de Sección "Ideas"
**Ubicación:** Líneas 210-251
**Cambio de estructura:**
```vue
<!-- ANTES -->
<div class="flex items-start">
  <span class="text-brand-accent mr-4 mt-1 text-xl">→</span>
  <div>
    <strong>Título</strong>
    <p>Descripción</p>
  </div>
</div>

<!-- DESPUÉS -->
<div class="text-center">
  <div class="inline-flex items-center justify-center mb-4">
    <span class="text-brand-accent text-2xl mr-2">→</span>
    <strong class="text-lg text-primary-light dark:text-primary-dark">Título</strong>
  </div>
  <p class="text-lg text-secondary-light dark:text-secondary-dark">Descripción</p>
</div>
```

#### 3.1.4 Convertir a Quote Alineado a la Izquierda
**Ubicación:** Líneas 253-258
**Cambio completo:**
```vue
<!-- ANTES -->
<div class="mt-8 p-6 bg-surface-light/50 dark:bg-surface-dark/50 rounded-lg">
  <p class="text-lg italic text-secondary-light dark:text-secondary-dark text-center">
    Prometo leer cada mensaje con atención y responder de forma honesta. 
    No soy un bot: soy yo, priorizando calidad sobre velocidad.
  </p>
</div>

<!-- DESPUÉS -->
<blockquote class="mt-8 border-l-4 border-brand-accent pl-6">
  <p class="text-lg italic text-secondary-light dark:text-secondary-dark">
    "Prometo leer cada mensaje con atención y responder de forma honesta. 
    No soy un bot: soy yo, priorizando calidad sobre velocidad."
  </p>
</blockquote>
```

#### 3.1.5 Modificar Sección Final
**Cambios específicos:**
```vue
<!-- Título: línea 441 -->
<h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark">
  Gracias
</h3>

<!-- Párrafo: línea 445 - eliminar "Gracias por conectar." -->
<p class="text-xl text-secondary-light dark:text-secondary-dark">
  Cada conversación es una oportunidad de crear sinergias interesantes. ¡Espero tu mensaje!
</p>

<!-- Botones: líneas 453, 460 -->
<button class="...">Escribir ahora</button>
<a href="/blog" class="...">Aprender más</a>
```

### 3.2 Rediseño Visual del Formulario

#### 3.2.1 Análisis del Problema
- **Estado actual:** Formulario poco destacado
- **Objetivo:** Convertirlo en elemento más prominente
- **Restricción:** Mantener funcionalidad desplegable intacta

#### 3.2.2 Propuesta de Diseño Mejorado
```vue
<div class="enhanced-form-container bg-gradient-to-br from-surface-light to-brand-accent/5 dark:from-surface-dark dark:to-brand-accent/10 p-8 rounded-2xl shadow-xl border-2 border-brand-accent/20 hover:border-brand-accent/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
  <!-- Estado colapsado mejorado -->
  <div v-if="!isFormExpanded" class="text-center">
    <div class="mb-4">
      <svg class="h-12 w-12 text-brand-accent mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <h4 class="text-xl font-bold text-primary-light dark:text-primary-dark mb-2">
        ¡Escríbeme directamente!
      </h4>
      <p class="text-secondary-light dark:text-secondary-dark mb-4">
        Haz clic aquí para abrir el formulario inteligente
      </p>
    </div>
    <input
      type="text"
      placeholder="Haz clic para empezar a escribir tu mensaje..."
      readonly
      @click="expandForm"
      class="w-full p-4 text-lg border-2 border-brand-accent/30 bg-white/50 dark:bg-gray-800/50 text-primary-light dark:text-primary-dark placeholder-secondary-light dark:placeholder-secondary-dark cursor-pointer hover:border-brand-accent hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-accent/20 backdrop-blur-sm"
    />
  </div>
  <!-- Estado expandido - mantener funcionalidad existente -->
</div>
```

#### 3.2.3 CSS Personalizado Adicional
```css
.enhanced-form-container {
  position: relative;
  overflow: hidden;
}

.enhanced-form-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(246, 201, 14, 0.1), transparent);
  transition: left 0.5s;
}

.enhanced-form-container:hover::before {
  left: 100%;
}

@keyframes formGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(246, 201, 14, 0.1); }
  50% { box-shadow: 0 0 30px rgba(246, 201, 14, 0.2); }
}

.enhanced-form-container:focus-within {
  animation: formGlow 2s infinite;
}
```

### 3.3 Protocolo de Testing Avanzado

#### 3.3.1 Testing Funcional
- [ ] **Formulario desplegable:** Funciona idéntico al original
- [ ] **Validación:** Todos los campos validan correctamente
- [ ] **Envío:** Simulación de envío funciona
- [ ] **Estados:** Colapsado/expandido/enviando/éxito/error
- [ ] **Navegación:** Teclado y mouse funcionan

#### 3.3.2 Testing Visual
- [ ] **Prominencia:** Formulario destaca como elemento principal
- [ ] **Coherencia:** Mantiene identidad visual del sitio
- [ ] **Animaciones:** Transiciones suaves y profesionales
- [ ] **Responsive:** Funciona en todos los dispositivos

#### 3.3.3 Testing UX
- [ ] **Flujo usuario:** Más intuitivo que versión anterior
- [ ] **Call-to-action:** Claro y atractivo
- [ ] **Feedback:** Usuario entiende qué hacer en cada paso
- [ ] **Accesibilidad:** Navegable con screen readers

---

## ✅ PROTOCOLOS DE CALIDAD Y REVISIÓN

### Checklist Pre-Commit (Cada cambio)
- [ ] **ESLint:** 0 errores, 0 warnings
- [ ] **TypeScript:** Tipado correcto sin errores
- [ ] **Prettier:** Formato de código consistente
- [ ] **Testing manual:** Funcionalidad verificada
- [ ] **Responsive:** Mobile, tablet, desktop OK
- [ ] **Accesibilidad:** WAVE/axe sin errores críticos

### Protocolo de Revisión Continua (Cada 3 tareas)
1. **Screenshot comparison:** Documentar antes/después
2. **User journey testing:** Flujo completo funcional
3. **Performance check:** Lighthouse scores mantenidos
4. **Cross-browser validation:** Chrome, Firefox, Safari
5. **Documentation update:** Actualizar referencias

### Métricas de Éxito Final
- **Visual:** 100% consistencia en heroes
- **UX:** Formulario contacto más prominente y usable
- **Performance:** Lighthouse 95+ mantenido
- **Accesibilidad:** WCAG 2.1 AA compliance
- **Código:** 0 errores, alta mantenibilidad

---

## 📊 CRONOGRAMA DE EJECUCIÓN

### Sesión 1 (60-75 min)
- **0-45 min:** FASE 1 completa (HeroSection.vue)
- **45-75 min:** FASE 2 parcial (HomeView + ContactoViewV2 hero)

### Sesión 2 (60-75 min)
- **0-30 min:** FASE 2 completar (BlogView + SoyView)
- **30-75 min:** FASE 3 inicio (modificaciones contenido)

### Sesión 3 (60-90 min)
- **0-60 min:** FASE 3 completar (rediseño formulario)
- **60-90 min:** Testing final y documentación

**Total estimado:** 2.5-3.5 horas
**Flexibilidad:** ±30 min por sesión según complejidad encontrada

---

*Plan maestro detallado - Listo para ejecución inmediata*
