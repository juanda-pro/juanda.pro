<script setup>
import PageLayout from '@/components/PageLayout.vue';
import PageHeader from '@/components/PageHeader.vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
import { onMounted } from 'vue';

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
  <PageLayout>
    <!-- Header -->
    <SectionWrapper spacing="tight">
      <PageHeader subtitle="Un apasionado de la tecnología que puede ayudarte a optimizar algunos de tus procesos.">
        Soy.
      </PageHeader>
    </SectionWrapper>

    <!-- Image and Introduction (Side by side on desktop) -->
    <SectionWrapper spacing="loose" class="relative overflow-hidden">
      <!-- Elemento decorativo de fondo -->
      <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-10 dark:opacity-5">
        <div class="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-brand-accent/30 blur-3xl"></div>
        <div class="absolute -left-32 top-1/2 w-72 h-72 rounded-full bg-accent-info/20 dark:bg-accent-info-dark/20 blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Diseño flexible para todos los tamaños de pantalla -->
        <div class="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          <!-- Columna de imagen (25% en desktop) con marco amarillo rectangular -->
          <div class="md:w-1/4 flex justify-center">
            <div class="relative flex justify-center items-center h-64 group">
              <!-- Fondo decorativo con múltiples capas - Exactamente igual que en inicio -->
              <div class="absolute w-full h-full bg-gradient-to-br from-brand-accent/80 to-brand-accent rounded-lg transform -rotate-3 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 shadow-lg"></div>
              <div class="absolute w-full h-full bg-brand-accent/30 rounded-lg transform rotate-3 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-95 blur-sm"></div>
              
              <!-- Imagen con efectos mejorados -->
              <img 
                src="https://placehold.co/400x400/1F2937/FFFFFF?text=Juanda" 
                alt="Foto de Juanda" 
                class="relative w-3/4 h-3/4 object-cover rounded-lg shadow-lg z-10 transition-all duration-500 ease-out group-hover:shadow-xl group-hover:scale-105 fade-in-element"
              >
              
              <!-- Elemento decorativo adicional -->
              <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-surface-light dark:bg-surface-dark rounded-full border-4 border-brand-accent/30 z-0 transition-all duration-500 group-hover:scale-110 opacity-80"></div>
            </div>
          </div>
          
          <!-- Columna de texto (75% en desktop) -->
          <div class="md:w-3/4 text-center md:text-left fade-in-element transform transition-all duration-700 opacity-0 translate-y-4">
            <p class="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark leading-relaxed">
              Hola, soy Juan David Ocampo, aunque la mayoría me llama Juanda. Desde hace años, me apasiona explorar herramientas que simplifican procesos administrativos, como hojas de cálculo, scripts, bases de conocimiento o automatizaciones con iA.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <!-- Content -->
    <SectionWrapper spacing="loose" class="relative">
      <!-- Elemento decorativo de conexión -->
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-transparent to-brand-accent/30 dark:to-brand-accent/20"></div>
      <div class="max-w-3xl mx-auto prose prose-lg lg:prose-xl dark:prose-invert text-secondary-light dark:text-secondary-dark fade-in-element transform transition-all duration-700 opacity-0 translate-y-4">
        <!-- Second paragraph moved here -->
        <p class="mb-10 relative pl-4 border-l-2 border-brand-accent/30 dark:border-brand-accent/20">
          En este espacio, comparto parte de mis aprendizajes con el objetivo de ofrecerte información útil y accionable, para que tú también empieces a aprovechar la tecnología convirtiéndola en tu mejor aliada.
        </p>
        
        <h2 class="text-2xl md:text-3xl font-bold font-heading text-primary-light dark:text-primary-dark mb-6 inline-flex items-center gap-3">
          <span class="relative inline-block">
            Mi brújula
            <span class="absolute bottom-0 left-0 w-full h-1 bg-brand-accent/70 dark:bg-brand-accent/50 rounded-full transform -translate-y-1"></span>
          </span>
        </h2>
        
        <p class="mb-12">
          En mi camino, priorizo el <strong>pensamiento crítico</strong> como base para todo: cuestionar lo establecido, probar herramientas en escenarios reales y ajustar según los resultados. Esto me ayuda a enfocar la tecnología en lo que realmente sirve: ponerla a nuestro favor para tomar el control de procesos cotidianos, automatizar lo repetitivo y evitar que nos domine el ritmo acelerado del cambio.
        </p>
        
        <div class="w-16 h-0.5 bg-brand-accent/40 dark:bg-brand-accent/30 rounded-full mx-auto mb-12"></div>
        
        <p class="text-center max-w-3xl mx-auto mb-12">
          En mi camino, priorizo el <strong>pensamiento crítico</strong> como base para todo: Hacerme todo tipo de preguntas, experimentar, probar herramientas, ajustar según los resultados... 
          <br><br>
          Creo que ese es el camino si quieres aprovechar las tecnologías actuales para tomar el control de tus procesos cotidianos. Es lo que hago y es lo que te invito a hacer.
        </p>
        
        <ul class="not-prose grid md:grid-cols-3 gap-12 text-center pl-0">
          <li class="fade-in-element opacity-0 transform translate-y-4">
            <div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 dark:bg-brand-accent/5 border border-brand-accent/20">
              <!-- Icono para Motivación (e.g., una semilla o planta) -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-primary-light dark:text-primary-dark mb-2">Principal motivación</h4>
            <p class="text-secondary-light dark:text-secondary-dark">Creo que el conocimiento florece cuando lo pones en práctica y te retroalimentas con otros que recorren tu mismo camino.</p>
          </li>
          
          <li class="fade-in-element opacity-0 transform translate-y-4 delay-100">
            <div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 dark:bg-brand-accent/5 border border-brand-accent/20">
              <!-- Icono para Honestidad (e.g., una balanza) -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-primary-light dark:text-primary-dark mb-2">Honestidad práctica</h4>
            <p class="text-secondary-light dark:text-secondary-dark">Comparto solo lo que he probado, incluyendo lo que funciona y lo que no. Equivocarse forma parte del proceso de aprendizaje.</p>
          </li>
          
          <li class="fade-in-element opacity-0 transform translate-y-4 delay-200">
            <div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 dark:bg-brand-accent/5 border border-brand-accent/20">
              <!-- Icono para Mindset (e.g., un cerebro o una brújula) -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-primary-light dark:text-primary-dark mb-2">Mindset general</h4>
            <p class="text-secondary-light dark:text-secondary-dark">Me enfoco en encontrar formas de sacar partido a la tecnología al mismo tiempo que aprendo a usarla con más consciencia y cuidado.</p>
          </li>
        </ul>
        
        <p class="text-base md:text-lg mt-12 text-center italic fade-in-element opacity-0 transform translate-y-4">
          Estos valores se reflejan en lo que comparto aquí y guían cómo ayudo a otros a navegar estos cambios de forma práctica.
        </p>
        
        <div class="mt-16 p-8 border border-gray-200 dark:border-gray-700 rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm fade-in-element opacity-0 transform translate-y-4">
          <p class="text-lg relative pl-4 border-l-2 border-brand-accent/30 dark:border-brand-accent/20">
            Gracias por tomarte el tiempo de conocerme un poco más. Te invito a explorar el resto del sitio. Hay artículos interesantes en "Blog" y herramientas gratuitas en "Recursos"
          </p>
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

