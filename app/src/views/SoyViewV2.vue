<script setup>
import { onMounted } from 'vue';

// Importar componentes mejorados
import PageLayoutV2 from '@/components/enhanced/PageLayoutV2.vue';
import StorySection from '@/components/enhanced/StorySection.vue';
import SectionWrapperV2 from '@/components/enhanced/SectionWrapperV2.vue';
import ContentCardV2 from '@/components/enhanced/ContentCardV2.vue';
import VisualHierarchy from '@/components/enhanced/VisualHierarchy.vue';
import BrandPersonality from '@/components/enhanced/BrandPersonality.vue';

// Componentes originales que mantenemos
import PageHeader from '@/components/PageHeader.vue';
import IntroCard from '@/components/IntroCard.vue';

// Importar la misma imagen que se usa en la página de inicio
import AiPacmanIllustration from '@/assets/ai-pacman-original.png';

// Función para inicializar efectos visuales
onMounted(() => {
  // Añadir clase para animaciones de entrada
  document.querySelectorAll('.fade-in-element').forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 100 * (index + 1));
  });
});
</script>

<template>
  <PageLayoutV2 
    atmosphere-variant="content"
    atmosphere-intensity="normal"
  >
    <!-- Hero Section -->
    <StorySection 
      variant="hero" 
      spacing="normal"
      connector
    >
      <template #title>
        <VisualHierarchy 
          level="h1" 
          variant="accent" 
          alignment="center"
          decoration
        >
          Soy.
        </VisualHierarchy>
      </template>
      
      <template #subtitle>
        <VisualHierarchy 
          level="subtitle" 
          alignment="center"
        >
          Un apasionado de la tecnología que puede ayudarte a optimizar algunos procesos.
        </VisualHierarchy>
      </template>
    </StorySection>

    <!-- Sección Principal: Imagen y Presentación -->
    <SectionWrapperV2 
      spacing="loose"
      atmosphere-variant="content"
      atmosphere-intensity="normal"
      atmosphere-position="all"
      max-width="7xl"
    >
      <div class="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        
        <!-- Columna de imagen (25% en desktop) -->
        <div class="md:w-1/4 flex justify-center fade-in-element">
          <BrandPersonality 
            element="interactive-frame" 
            variant="primary"
            :interactive="true"
          >
            <img 
              src="https://placehold.co/400x400/1F2937/FFFFFF?text=Juanda" 
              alt="Foto de Juanda" 
              class="w-3/4 h-3/4 object-cover rounded-lg shadow-lg transition-all duration-500 ease-out"
            >
          </BrandPersonality>
        </div>
        
        <!-- Columna de contenido (75% en desktop) -->
        <div class="md:w-3/4 space-y-6 fade-in-element">
          <VisualHierarchy 
            level="h2" 
            variant="accent"
            decoration
          >
            Soy Juan David Ocampo, aunque la mayoría me llama Juanda
          </VisualHierarchy>
          
          <VisualHierarchy level="body">
            Desde hace años, me apasiona explorar <strong>herramientas que simplifican la vida moderna:</strong> 
            hojas de cálculo, scripts, bases de conocimiento, <strong>automatizaciones con iA...</strong>
          </VisualHierarchy>
          
          <VisualHierarchy level="body">
            En este espacio, comparto algunos de mis aprendizajes procurando que sea siempre 
            <em>información útil y accionable</em>. Todo para <strong>motivarte a convertir a la tecnología en tu mejor aliada.</strong>
          </VisualHierarchy>
        </div>
      </div>
    </SectionWrapperV2>

    <!-- Sección: Lo que me mueve -->
    <StorySection 
      variant="highlight" 
      spacing="loose"
    >
      <template #title>
        <VisualHierarchy 
          level="h2" 
          variant="accent" 
          alignment="center"
          decoration
        >
          Lo que me mueve
        </VisualHierarchy>
      </template>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Columna de texto -->
        <div class="space-y-6">
          <VisualHierarchy level="body">
            En mi carrera, he visto el <strong>pensamiento crítico</strong> como base para todo. 
            <em>Pensar es todo tipo de preguntas</em>, poder herramientas, querer seguir los resultados.
          </VisualHierarchy>
          
          <VisualHierarchy level="body">
            Creo que estar al corriente a querer reconocer las descripciones que nos llevan al 
            servicio de la <strong>inteligencia</strong>. Es lo que hago: <em>la de la invita a hacer.</em>
          </VisualHierarchy>
        </div>

        <!-- Columna de imagen ilustrativa -->
        <div class="flex justify-center fade-in-element">
          <ContentCardV2 
            variant="feature" 
            padding="normal"
            elevation="subtle"
          >
            <img 
              :src="AiPacmanIllustration" 
              alt="Ilustración AI Pacman" 
              class="w-full h-auto rounded-lg"
            >
          </ContentCardV2>
        </div>
      </div>
    </StorySection>

    <!-- Sección: Tres Pilares -->
    <SectionWrapperV2 
      spacing="loose"
      atmosphere-variant="default"
      atmosphere-intensity="subtle"
      atmosphere-position="both"
    >
      <VisualHierarchy 
        level="h2" 
        variant="accent" 
        alignment="center"
        decoration
      >
        Mis tres pilares para trabajar con tecnología
      </VisualHierarchy>

      <div class="grid md:grid-cols-3 gap-8 mt-12">
        <!-- Pilar 1: Principal motivación -->
        <ContentCardV2 variant="feature" padding="loose" elevation="normal" class="fade-in-element">
          <template #header>
            <div class="flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4 mx-auto">
              <svg class="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <VisualHierarchy level="h4" variant="accent" alignment="center">
              Principal motivación
            </VisualHierarchy>
          </template>
          
          <VisualHierarchy level="body" alignment="center">
            Conseguir que el <strong>conocimiento financiero</strong> llegado sea accesible. 
            Crear herramientas que la gente pueda usar sin necesidad de conocimientos técnicos.
          </VisualHierarchy>
        </ContentCardV2>

        <!-- Pilar 2: Honestidad práctica -->
        <ContentCardV2 variant="feature" padding="loose" elevation="normal" class="fade-in-element">
          <template #header>
            <div class="flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4 mx-auto">
              <svg class="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <VisualHierarchy level="h4" variant="accent" alignment="center">
              Honestidad práctica
            </VisualHierarchy>
          </template>
          
          <VisualHierarchy level="body" alignment="center">
            Compartir solo lo que <strong>realmente funciona</strong>. 
            Estructurar herramientas parte de procesos que hemos validado.
          </VisualHierarchy>
        </ContentCardV2>

        <!-- Pilar 3: Mindset general -->
        <ContentCardV2 variant="feature" padding="loose" elevation="normal" class="fade-in-element">
          <template #header>
            <div class="flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4 mx-auto">
              <svg class="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <VisualHierarchy level="h4" variant="accent" alignment="center">
              Mindset general
            </VisualHierarchy>
          </template>
          
          <VisualHierarchy level="body" alignment="center">
            Fomentar un <strong>enfoque estratégico</strong> a la tecnología que permita 
            tiempo que aproveche la vida sin más consideración y cuidado.
          </VisualHierarchy>
        </ContentCardV2>
      </div>
    </SectionWrapperV2>

    <!-- Sección: Cita Personal -->
    <StorySection 
      variant="highlight" 
      spacing="normal"
    >
      <ContentCardV2 
        variant="testimonial" 
        padding="loose"
        elevation="normal"
      >
        <VisualHierarchy 
          level="subtitle" 
          alignment="center"
        >
          <em>
            "Creo que vivimos en tiempo de consumir y no podemos ser indiferentes al 
            hecho de que <strong>Soy efectivo</strong> y he conseguido que las cosas que he aprendido 
            las comparta de una forma que sea útil para <strong>personas"</strong>
          </em>
        </VisualHierarchy>
        
        <template #footer>
          <VisualHierarchy level="caption" alignment="center">
            <strong class="text-brand-accent">— Juanda</strong>
          </VisualHierarchy>
        </template>
      </ContentCardV2>
    </StorySection>

    <!-- Call to Action Final -->
    <StorySection 
      variant="cta" 
      spacing="normal"
    >
      <ContentCardV2 
        variant="highlight" 
        padding="loose"
        elevation="normal"
      >
        <VisualHierarchy 
          level="h3" 
          variant="gradient" 
          alignment="center"
        >
          ¿Te resuena mi enfoque?
        </VisualHierarchy>
        
        <VisualHierarchy 
          level="subtitle" 
          alignment="center"
        >
          Si compartes esta visión de la tecnología como aliada, 
          me encantaría conectar contigo y explorar cómo podemos colaborar.
        </VisualHierarchy>

        <template #footer>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contacto" 
              class="inline-flex items-center px-6 py-3 bg-brand-accent hover:bg-brand-accent-darker text-text-on-accent rounded-lg transition-all duration-200 font-semibold hover:-translate-y-1"
            >
              Hablemos
            </a>
            <span class="text-secondary-light dark:text-secondary-dark">o</span>
            <a 
              href="/blog" 
              class="inline-flex items-center px-6 py-3 bg-surface-light dark:bg-surface-dark hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 text-primary-light dark:text-primary-dark border border-border-light dark:border-border-dark rounded-lg transition-all duration-200 font-semibold hover:-translate-y-1"
            >
              Lee mis artículos
            </a>
          </div>
        </template>
      </ContentCardV2>
    </StorySection>

  </PageLayoutV2>
</template>

<style scoped>
/* Animaciones de entrada */
.fade-in-element {
  opacity: 0;
  transform: translateY(1rem);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-in-element.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Mejorar el espaciado en móviles */
@media (max-width: 768px) {
  .grid.md\:grid-cols-2 {
    grid-template-columns: 1fr;
  }
  
  .grid.md\:grid-cols-3 {
    grid-template-columns: 1fr;
  }
  
  .space-x-12 {
    margin-left: 0;
    margin-right: 0;
  }
}

/* Transiciones suaves para botones */
a {
  transition: all 0.2s ease-in-out;
}

/* Mejorar la presentación de las imágenes */
img {
  transition: all 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.02);
}

/* Iconos de los pilares */
svg {
  transition: all 0.2s ease-in-out;
}

.fade-in-element:hover svg {
  transform: scale(1.1);
}
</style>
