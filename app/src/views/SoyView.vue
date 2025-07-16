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
      <PageHeader subtitle="Un explorador práctico de la tecnología que ayuda a personas como tú a automatizar procesos y ganar control en un mundo que cambia rápido.">
        Hola, soy Juanda.
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
              Hola, soy Juan David Ocampo, aunque la mayoría me llama Juanda. Desde hace años, me apasiona explorar herramientas que simplifican procesos administrativos, como hojas de cálculo avanzadas, scripts prácticos, bases de conocimiento o automatizaciones con iA.
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
          En este espacio, comparto parte de mis aprendizajes con el objetivo de ofrecerte información <strong>útil y accionable</strong>, para que tú también empieces a aprovechar la tecnología convirtiéndola en tu mejor aliada.
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
        
        <h3 class="text-2xl md:text-3xl font-bold text-primary-light dark:text-primary-dark mb-8 text-center relative inline-block">
          Mi brújula
          <span class="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent rounded-full"></span>
        </h3>
        
        <ul class="not-prose grid md:grid-cols-3 gap-6 pl-0">
          <li class="bg-gray-900/10 hover:bg-gray-900/20 dark:bg-gray-800/30 dark:hover:bg-gray-800/40 rounded-lg p-6 border border-gray-200/10 dark:border-gray-700/20 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 fade-in-element opacity-0 transform translate-y-4">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 rounded-full bg-brand-accent/20 dark:bg-brand-accent/10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                </svg>
              </div>
              <h4 class="text-lg md:text-xl font-bold text-primary-light dark:text-primary-dark">Honestidad práctica</h4>
            </div>
            <p class="text-base md:text-lg">Comparto solo lo que he probado, incluyendo lo que funciona y lo que no, para que aproveches lecciones directas sin rodeos.</p>
          </li>
          
          <li class="bg-gray-900/10 hover:bg-gray-900/20 dark:bg-gray-800/30 dark:hover:bg-gray-800/40 rounded-lg p-6 border border-gray-200/10 dark:border-gray-700/20 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 fade-in-element opacity-0 transform translate-y-4 delay-100">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 rounded-full bg-brand-accent/20 dark:bg-brand-accent/10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h4 class="text-lg md:text-xl font-bold text-primary-light dark:text-primary-dark">Colaboración abierta</h4>
            </div>
            <p class="text-base md:text-lg">Creo que el conocimiento mejora cuando se comparte, así que invito a que adaptes mis ideas y me cuentes cómo te van.</p>
          </li>
          
          <li class="bg-gray-900/10 hover:bg-gray-900/20 dark:bg-gray-800/30 dark:hover:bg-gray-800/40 rounded-lg p-6 border border-gray-200/10 dark:border-gray-700/20 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 fade-in-element opacity-0 transform translate-y-4 delay-200">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 rounded-full bg-brand-accent/20 dark:bg-brand-accent/10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-brand-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <h4 class="text-lg md:text-xl font-bold text-primary-light dark:text-primary-dark">Equilibrio sostenido</h4>
            </div>
            <p class="text-base md:text-lg">La eficiencia verdadera respeta tus límites; busco soluciones que <strong>liberen tiempo sin generar agotamiento</strong>, priorizando el bienestar junto con la productividad.</p>
          </li>
        </ul>
        
        <p class="text-base md:text-lg mt-12 text-center italic fade-in-element opacity-0 transform translate-y-4">
          Estos valores se reflejan en lo que comparto aquí y guían cómo ayudo a otros a navegar estos cambios de forma práctica.
        </p>
        
        <div class="mt-16 p-8 border border-gray-200 dark:border-gray-700 rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm fade-in-element opacity-0 transform translate-y-4">
          <p class="text-lg relative pl-4 border-l-2 border-brand-accent/30 dark:border-brand-accent/20">
            Gracias por tomarte el tiempo de conocerme un poco más. Te invito a explorar el resto del sitio: sumérgete en las notas, revisa los recursos prácticos o lee algún artículo del blog. Quién sabe, quizás encuentres justo esa idea o herramienta que impulse tu propia exploración. Si resuena contigo, este espacio es tuyo también.
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

