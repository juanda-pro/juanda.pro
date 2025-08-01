<script setup>
import PageLayout from '@/components/PageLayout.vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
import HeroSection from '@/components/HeroSection.vue';
import DecorativeBackground from '@/components/DecorativeBackground.vue';
import { onMounted, nextTick } from 'vue';

// Importar imágenes
import AiPacmanIllustration from '@/assets/ai-pacman-original.png';
import HeaderBackground from '../assets/cabecera_inicio.jpeg';

// Función para inicializar efectos visuales
onMounted(() => {
  // Las animaciones se manejarán automáticamente por CSS con Vue transitions
  // Eliminada manipulación directa del DOM
  nextTick(() => {
    // Los elementos se animarán automáticamente con las clases CSS
  });
});
</script>

<template>
  <PageLayout :remove-padding-top="true">
    <!-- Hero Section -->
    <HeroSection
      title="Soy."
      :background-image="HeaderBackground"
    >
      <template v-slot:subtitle>
        Un apasionado de la tecnología que puede ayudarte a optimizar algunos procesos.
      </template>
    </HeroSection>

    <!-- Image and Introduction (Side by side on desktop) -->
    <SectionWrapper spacing="loose" class="relative overflow-hidden">
      <!-- Elemento decorativo de fondo -->
      <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-10 dark:opacity-5">

      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Diseño flexible para todos los tamaños de pantalla -->
        <div class="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          <!-- Columna de imagen (25% en desktop) con marco amarillo rectangular -->
          <div class="md:w-1/4 flex justify-center">
            <DecorativeBackground
              image-url="https://placehold.co/400x400/1F2937/FFFFFF?text=Juanda"
              image-alt="Foto de Juanda"
              height="h-64"
            />
          </div>
          
          <!-- Columna de texto (75% en desktop) -->
          <div class="md:w-3/4 text-center md:text-left fade-in-element transform transition-all duration-700 opacity-0 translate-y-4">
            <p class="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark leading-relaxed">
              Soy Juan David Ocampo, aunque la mayoría me llama <strong>Juanda</strong>. Desde hace años, me apasiona explorar herramientas que simplifican la vida moderna: <strong>hojas de cálculo, scripts, bases de conocimiento, automatizaciones con iA ...</strong>
              <br><br>
              En este espacio, comparto algunos de mis aprendizajes procurando que sea siempre <em>información útil y accionable</em>. Todo para <strong>motivarte a convertir a la tecnología en tu mejor aliada.</strong>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <!-- Lo que me mueve - Sección Principal -->
    <SectionWrapper spacing="loose" class="relative overflow-hidden">
      <!-- Fondo decorativo sutil -->
      <div class="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-surface-light/30 dark:to-surface-dark/30 pointer-events-none"></div>
      
      <div class="max-w-6xl mx-auto relative z-10">
        <!-- Título principal con diseño moderno -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold font-heading text-primary-light dark:text-primary-dark mb-6 relative inline-block">
            Lo que me mueve
            <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent rounded-full"></div>
          </h2>
          <div class="max-w-4xl mx-auto">
            <p class="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark leading-relaxed">
              Descubrir, aprender y compartir: Hacerme todo tipo de preguntas, investigar, <em>experimentar</em>, probar herramientas, <em>ajustar según los resultados</em>...
            </p>
            <p class="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark leading-relaxed mt-6">
              <em>Creo que ese es el camino si quieres aprovechar las tecnologías</em> actuales para tomar el control de tus procesos cotidianos. Es lo que hago y <strong>es lo que te invito a hacer.</strong>
            </p>
          </div>
        </div>

        <!-- Valores principales con diseño de cards modernas -->
        <div class="grid md:grid-cols-3 gap-8 mb-20">
          <div class="group relative">
            <div class="h-full p-8 bg-gradient-to-br from-surface-light/80 to-surface-light/40 dark:from-surface-dark/80 dark:to-surface-dark/40 backdrop-blur-sm border border-border-light/30 dark:border-border-dark/30 rounded-2xl hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300 hover:scale-[1.02]">
              <!-- Icono con fondo decorativo -->
              <div class="relative mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-brand-accent/20 to-brand-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <!-- Elemento decorativo -->
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-brand-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4 group-hover:text-brand-accent transition-colors duration-300">
                Principal motivación
              </h3>
              <p class="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed">
                Aprendizaje colectivo. Si compartes tus conocimientos y aprendes de otros, surgen nuevas ideas, relaciones y oportunidades.
              </p>
            </div>
          </div>

          <div class="group relative">
            <div class="h-full p-8 bg-gradient-to-br from-surface-light/80 to-surface-light/40 dark:from-surface-dark/80 dark:to-surface-dark/40 backdrop-blur-sm border border-border-light/30 dark:border-border-dark/30 rounded-2xl hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300 hover:scale-[1.02]">
              <div class="relative mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-brand-accent/20 to-brand-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-brand-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4 group-hover:text-brand-accent transition-colors duration-300">
                Honestidad práctica
              </h3>
              <p class="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed">
                Comparto solo lo que he probado, tanto lo que me funcionó, como lo que no. Equivocarse forma parte del proceso de aprendizaje.
              </p>
            </div>
          </div>

          <div class="group relative">
            <div class="h-full p-8 bg-gradient-to-br from-surface-light/80 to-surface-light/40 dark:from-surface-dark/80 dark:to-surface-dark/40 backdrop-blur-sm border border-border-light/30 dark:border-border-dark/30 rounded-2xl hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300 hover:scale-[1.02]">
              <div class="relative mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-brand-accent/20 to-brand-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-brand-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4 group-hover:text-brand-accent transition-colors duration-300">
                Mindset general
              </h3>
              <p class="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed">
                Me enfoco en encontrar formas de sacar partido a la tecnología, al mismo tiempo que aprendo a usarla con más consciencia y cuidado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <!-- Sección de reflexión final -->
    <SectionWrapper spacing="normal" class="relative">
      <div class="max-w-4xl mx-auto">
        <!-- Línea decorativa de conexión -->
        <div class="flex justify-center mb-12">
          <div class="w-1 h-20 bg-gradient-to-b from-brand-accent/30 via-brand-accent/60 to-brand-accent/30 rounded-full"></div>
        </div>
        
        <!-- Texto de reflexión con diseño destacado -->
        <div class="text-center mb-12">
          <p class="text-2xl md:text-3xl font-medium text-primary-light dark:text-primary-dark leading-relaxed">
            Estos valores se reflejan en lo que comparto aquí y guían cómo ayudo a otros a navegar estos cambios de forma práctica.
          </p>
        </div>

        <!-- Card de cierre con diseño elegante -->
        <div class="relative">
          <!-- Fondo decorativo -->
          <div class="absolute inset-0 bg-gradient-to-r from-brand-accent/10 via-brand-accent/5 to-brand-accent/10 rounded-2xl"></div>
          <div class="relative p-8 md:p-12 bg-gradient-to-br from-surface-light/90 to-surface-light/70 dark:from-surface-dark/90 dark:to-surface-dark/70 backdrop-blur-sm border border-border-light/40 dark:border-border-dark/40 rounded-2xl shadow-lg">
            <!-- Elemento decorativo superior -->
            <div class="flex justify-center mb-6">
              <div class="w-12 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent rounded-full"></div>
            </div>
            
            <blockquote class="text-center">
              <p class="text-xl md:text-2xl text-primary-light dark:text-primary-dark font-medium leading-relaxed mb-6">
                Gracias por tomarte el tiempo de conocerme un poco más. Te invito a explorar el resto del sitio.
              </p>
            </blockquote>
            
            <!-- Elemento decorativo inferior -->
            <div class="flex justify-center mt-6">
              <div class="w-8 h-8 border-2 border-brand-accent/30 rounded-full flex items-center justify-center">
                <div class="w-3 h-3 bg-brand-accent/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
    
    <!-- No Final CTA needed as it duplicates the footer -->
  </PageLayout>
</template>

<style scoped>
/* Estilos adicionales para mejorar la experiencia visual */
.prose h2 {
  position: relative;
  display: inline-block;
}

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

/* Efecto sutil de paralaje en la imagen */
@media (min-width: 768px) {
  .parallax-element {
    transition: transform 0.3s ease-out;
  }
}

/* Mejoras en la tipografía */
.prose p {
  line-height: 1.8;
}

.prose strong {
  color: var(--color-primary-light);
  font-weight: 600;
}

.dark .prose strong {
  color: var(--color-primary-dark);
}
</style>

