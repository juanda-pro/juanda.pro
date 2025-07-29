# 🔧 ANÁLISIS TÉCNICO DE COMPONENTES - Sprint 1
**Mapeo exhaustivo del código actual y arquitectura implicada**

---

## 🎨 HERO SECTION ACTUAL (HomeView.vue)

### Estructura Completa Identificada
```vue
<!-- Líneas 99-119 HomeView.vue -->
<SectionWrapper spacing="none" class="relative text-white overflow-hidden min-h-[80vh] flex flex-col justify-center pt-20 py-12 md:py-24">
  <!-- Imagen de fondo -->
  <div class="absolute inset-0 z-0">
    <img :src="HeaderBackground" alt="Fondo abstracto de tecnología" class="w-full h-full object-cover object-center" />
    <!-- Superposición para contraste -->
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-black/10 dark:from-black/80 dark:via-black/50"></div>
  </div>

  <!-- Contenido centrado -->
  <div class="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-black/30 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl ring-1 ring-white/10">
      <!-- Título con animación -->
      <h1 class="text-center text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
        ¡Despierta, que te come la <span class="text-brand-accent animate-pulse">iA</span>!
      </h1>
      <!-- Párrafo descriptivo -->
      <p class="mt-6 text-center text-lg md:text-xl leading-relaxed text-gray-200/95 max-w-3xl mx-auto text-shadow-md">
        <strong>pero solo a medias</strong>, puede liberarnos tiempo para enfocarnos en lo que realmente importa: Las relaciones, los proyectos personales, el autoconocimiento...
      </p>
    </div>
  </div>
</SectionWrapper>
```

### Dependencias Identificadas
- **HeaderBackground:** `import HeaderBackground from '../assets/cabecera_inicio.jpeg'`
- **SectionWrapper:** `import SectionWrapper from '@/components/SectionWrapper.vue'`
- **Transiciones:** Vue 3 Transition component con clases personalizadas
- **Clases Tailwind:** Extensas clases responsivas y de tema

### Elementos Críticos para Extracción
1. **Contenedor principal:** `SectionWrapper` con clases específicas
2. **Imagen de fondo:** Sistema de imagen + overlay dual (claro/oscuro)
3. **Caja de contenido:** backdrop-blur-md con estilos específicos
4. **Tipografía:** Jerarquía de títulos y párrafos responsivos
5. **Animaciones:** Sistema de transiciones de entrada

---

## 📝 CONTACTO ACTUAL (ContactoViewV2.vue)

### Hero Actual - A Reemplazar
```vue
<!-- Líneas 179-186 ContactoViewV2.vue -->
<SectionWrapper spacing="normal">
  <IntroCard>
    <PageHeader subtitle="¿Idea para automatizar un proceso? ¿Preguntas sobre iA? Escríbeme sin compromiso.">
      Contacto
    </PageHeader>
  </IntroCard>
</SectionWrapper>
```

### Texto de Introducción - A Modificar
```vue
<!-- Líneas 188-199 ContactoViewV2.vue -->
<SectionWrapper spacing="normal">
  <div class="max-w-4xl mx-auto text-center space-y-6">
    <p class="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark leading-relaxed">
      Esta página es una invitación abierta a que contactes conmigo. Me apasiona ayudar a personas a optimizar sus procesos, ya sea en el trabajo, en un emprendimiento o en la vida diaria.
    </p>
    
    <!-- PÁRRAFO A ELIMINAR - Líneas 195-197 -->
    <p class="text-xl text-secondary-light dark:text-secondary-dark leading-relaxed">
      Si has explorado el sitio y algo te ronda la cabeza <em>como una automatización</em> que quieras implementar o si tienes curiosidad sobre herramientas prácticas, no dudes en escribirme.
    </p>
  </div>
</SectionWrapper>
```

### Formulario Actual - A Reubicar y Rediseñar
```vue
<!-- Líneas 262-400 ContactoViewV2.vue -->
<SectionWrapper spacing="normal" data-form-section>
  <div class="max-w-2xl mx-auto">
    <div class="bg-surface-light dark:bg-surface-dark p-8 rounded-lg shadow-md">
      <!-- Estado colapsado - A REDISEÑAR -->
      <div v-if="!isFormExpanded" class="text-center">
        <input
          type="text"
          placeholder="Escribe tu mensaje aquí..."
          readonly
          @click="expandForm"
          class="w-full p-4 text-lg border-2 border-transparent bg-transparent text-secondary-light dark:text-secondary-dark placeholder-secondary-light dark:placeholder-secondary-dark cursor-pointer hover:border-brand-accent/30 transition-colors duration-200 rounded-lg focus:outline-none"
        />
      </div>
      <!-- Estado expandido - MANTENER FUNCIONALIDAD -->
      <!-- ... resto del formulario desplegable ... -->
    </div>
  </div>
</SectionWrapper>
```

### Sección "Ideas" - A Centrar
```vue
<!-- Líneas 201-260 ContactoViewV2.vue -->
<SectionWrapper spacing="normal">
  <div class="max-w-4xl mx-auto">
    <div class="space-y-6">
      <!-- PUNTOS A CENTRAR - Cambiar de flex items-start a text-center -->
      <div class="flex items-start">
        <span class="text-brand-accent mr-4 mt-1 text-xl">→</span>
        <div>
          <strong>Compartir ideas o feedback:</strong>
          <p>¿Has probado alguna de mis recomendaciones? Cuéntame cómo te fue...</p>
        </div>
      </div>
      <!-- ... 3 puntos más con misma estructura ... -->
    </div>
  </div>
</SectionWrapper>
```

### Quote Actual - A Convertir
```vue
<!-- Líneas 253-258 ContactoViewV2.vue -->
<div class="mt-8 p-6 bg-surface-light/50 dark:bg-surface-dark/50 rounded-lg">
  <p class="text-lg italic text-secondary-light dark:text-secondary-dark text-center">
    Prometo leer cada mensaje con atención y responder de forma honesta. 
    No soy un bot: soy yo, priorizando calidad sobre velocidad.
  </p>
</div>
```

### Sección Final - A Modificar
```vue
<!-- Líneas 437-465 ContactoViewV2.vue -->
<SectionWrapper spacing="normal">
  <div class="text-center">
    <div class="max-w-2xl mx-auto space-y-6">
      <!-- TÍTULO A CAMBIAR -->
      <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark">
        ¿Listo para empezar?
      </h3>
      
      <!-- PÁRRAFO - ELIMINAR FRASE -->
      <p class="text-xl text-secondary-light dark:text-secondary-dark">
        Gracias por conectar. Cada conversación es una oportunidad de crear sinergias interesantes. ¡Espero tu mensaje!
      </p>

      <!-- BOTONES - CAMBIAR TEXTOS -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
        <button class="...">Escribir mensaje ahora</button>
        <a href="/blog" class="...">Lee mi blog primero</a>
      </div>
    </div>
  </div>
</SectionWrapper>
```

---

## 🏗️ COMPONENTES DEPENDIENTES

### SectionWrapper.vue
**Función:** Contenedor principal con espaciado configurable
**Props:** `spacing` (none, normal, loose)
**Uso crítico:** Base de todas las secciones

### PageLayout.vue
**Función:** Layout principal de páginas
**Props:** `remove-padding-top` (boolean)
**Consideración:** Hero necesita `remove-padding-top="true"`

### IntroCard.vue y PageHeader.vue
**Estado:** A reemplazar por HeroSection.vue
**Función actual:** Hero simple sin imagen de fondo

---

## 🎯 ARQUITECTURA DEL NUEVO COMPONENTE

### HeroSection.vue - Especificaciones Técnicas
```typescript
interface HeroProps {
  title: string;                    // Título principal
  subtitle?: string;                // Párrafo descriptivo
  backgroundImage: string;          // Imagen de fondo
  animatedText?: string;            // Texto del span animado
  animatedTextClass?: string;       // Clases del span (default: text-brand-accent animate-pulse)
}
```

### Estructura Propuesta
```vue
<template>
  <SectionWrapper spacing="none" class="relative text-white overflow-hidden min-h-[80vh] flex flex-col justify-center pt-20 py-12 md:py-24">
    <!-- Imagen de fondo -->
    <div class="absolute inset-0 z-0">
      <img :src="backgroundImage" :alt="`Fondo de ${title}`" class="w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-black/10 dark:from-black/80 dark:via-black/50"></div>
    </div>

    <!-- Contenido -->
    <div class="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-black/30 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl ring-1 ring-white/10">
        <h1 class="text-center text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
          <!-- Título con span animado opcional -->
          <template v-if="animatedText">
            {{ title.replace(animatedText, '') }}<span :class="animatedTextClass">{{ animatedText }}</span>{{ title.split(animatedText)[1] || '' }}
          </template>
          <template v-else>{{ title }}</template>
        </h1>
        <p v-if="subtitle" class="mt-6 text-center text-lg md:text-xl leading-relaxed text-gray-200/95 max-w-3xl mx-auto text-shadow-md" v-html="subtitle"></p>
      </div>
    </div>
  </SectionWrapper>
</template>
```

---

## 📊 IMPACTO EN OTRAS VISTAS

### BlogView.vue
**Estado actual:** Sin hero definido
**Cambio requerido:** Añadir HeroSection con configuración específica

### SoyView.vue
**Estado actual:** Hero simple con IntroCard
**Cambio requerido:** Reemplazar por HeroSection

### ArticleDetailView.vue
**Evaluación:** Determinar si necesita hero o mantener estructura actual

---

## 🔍 CONSIDERACIONES TÉCNICAS CRÍTICAS

### Performance
- **Lazy loading:** Imágenes de fondo optimizadas
- **Bundle size:** Componente reutilizable reduce duplicación
- **Rendering:** SSR compatible

### Accesibilidad
- **Alt texts:** Dinámicos basados en título
- **Contraste:** Overlay garantiza legibilidad
- **Navegación:** Focus management preservado

### Responsive
- **Breakpoints:** Mobile-first approach mantenido
- **Tipografía:** Escalado fluido 4xl→6xl
- **Espaciado:** Padding adaptativo

### Compatibilidad
- **Vue 3:** Composition API y Transition components
- **TypeScript:** Tipado fuerte en props
- **TailwindCSS:** Clases utilitarias y tema personalizado

---

*Análisis técnico completado - Arquitectura mapeada y validada*
