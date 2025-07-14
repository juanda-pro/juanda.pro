<script setup>
import PageLayout from '@/components/PageLayout.vue';
import PageHeader from '@/components/PageHeader.vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
</script>

<template>
  <PageLayout>
    <!-- Header -->
    <SectionWrapper class="pb-8">
      <PageHeader subtitle="Un explorador práctico de la tecnología que ayuda a personas como tú a automatizar procesos y ganar control en un mundo que cambia rápido.">
        Hola, soy Juanda.
      </PageHeader>
    </SectionWrapper>

    <!-- Image and Introduction (Side by side on desktop) -->
    <SectionWrapper class="py-8">
      <div class="max-w-6xl mx-auto">
        <!-- Mobile and Tablet Layout (stacked) -->
        <div class="block md:hidden">
          <!-- Image first on mobile -->
          <div class="relative flex justify-center mb-8">
            <div class="absolute w-full max-w-sm h-4/5 bg-brand-accent/20 dark:bg-brand-accent/30 rounded-3xl transform -rotate-2"></div>
            <img 
              src="https://placehold.co/1280x720/1f2937/ffffff?text=Imagen+de+Juanda+explorando"
              alt="Foto de Juanda explorando"
              class="relative w-full max-w-xs rounded-3xl shadow-2xl object-cover h-[250px]"
            />
          </div>
          
          <!-- Introduction below on mobile -->
          <div class="prose prose-lg dark:prose-invert text-secondary-light dark:text-secondary-dark">
            <p class="text-xl text-primary-light dark:text-primary-dark mb-6">
              Hola, soy Juan David Ocampo, aunque la mayoría me llama Juanda. Desde hace años, me apasiona explorar herramientas que simplifican procesos administrativos, como hojas de cálculo avanzadas, scripts prácticos, bases de conocimiento o automatizaciones con iA.
            </p>
          </div>
        </div>
        
        <!-- Desktop Layout (side by side) -->
        <div class="hidden md:flex md:flex-row md:items-center md:gap-8 lg:gap-12">
          <!-- Image Column -->
          <div class="relative flex justify-center md:w-2/5">
            <div class="absolute w-full max-w-sm h-4/5 bg-brand-accent/20 dark:bg-brand-accent/30 rounded-3xl transform -rotate-2"></div>
            <img 
              src="https://placehold.co/1280x720/1f2937/ffffff?text=Imagen+de+Juanda+explorando"
              alt="Foto de Juanda explorando"
              class="relative w-full max-w-sm rounded-3xl shadow-2xl object-cover h-[280px] lg:h-[320px]"
            />
          </div>
          
          <!-- Introduction Column -->
          <div class="md:w-3/5">
            <div class="prose prose-lg lg:prose-xl dark:prose-invert text-secondary-light dark:text-secondary-dark">
              <p class="text-xl md:text-2xl text-primary-light dark:text-primary-dark">
                Hola, soy Juan David Ocampo, aunque la mayoría me llama Juanda. Desde hace años, me apasiona explorar herramientas que simplifican procesos administrativos, como hojas de cálculo avanzadas, scripts prácticos, bases de conocimiento o automatizaciones con iA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <!-- Content -->
    <SectionWrapper class="pt-12 pb-16">
      <div class="max-w-3xl mx-auto prose prose-lg lg:prose-xl dark:prose-invert text-secondary-light dark:text-secondary-dark">
        <!-- Second paragraph moved here -->
        <p class="mb-10">
          En este espacio, comparto parte de mis aprendizajes con el objetivo de ofrecerte información <strong>útil y accionable</strong>, para que tú también empieces a aprovechar la tecnología convirtiéndola en tu mejor aliada.
        </p>
        
        <h2 class="text-2xl md:text-3xl font-bold font-heading text-primary-light dark:text-primary-dark mb-6">Mi brújula</h2>
        
        <p class="mb-10">
          En mi camino, priorizo el <strong>pensamiento crítico</strong> como base para todo: cuestionar lo establecido, probar herramientas en escenarios reales y ajustar según los resultados. Esto me ayuda a enfocar la tecnología en lo que realmente sirve: ponerla a nuestro favor para tomar el control de procesos cotidianos, automatizar lo repetitivo y evitar que nos domine el ritmo acelerado del cambio.
        </p>
        
        <h3 class="text-xl md:text-2xl font-bold font-heading text-primary-light dark:text-primary-dark mt-16 mb-6">Lo que me mueve</h3>
        
        <ul class="not-prose space-y-6 list-none pl-0">
          <li class="bg-gray-900/30 dark:bg-gray-800/50 rounded-lg p-6">
            <h4 class="text-lg md:text-xl font-bold text-primary-light dark:text-primary-dark mb-3">Honestidad práctica</h4>
            <p class="text-base md:text-lg">Comparto solo lo que he probado, incluyendo lo que funciona y lo que no, para que aproveches lecciones directas sin rodeos.</p>
          </li>
          
          <li class="bg-gray-900/30 dark:bg-gray-800/50 rounded-lg p-6">
            <h4 class="text-lg md:text-xl font-bold text-primary-light dark:text-primary-dark mb-3">Colaboración abierta</h4>
            <p class="text-base md:text-lg">Creo que el conocimiento mejora cuando se comparte, así que invito a que adaptes mis ideas y me cuentes cómo te van.</p>
          </li>
          
          <li class="bg-gray-900/30 dark:bg-gray-800/50 rounded-lg p-6">
            <h4 class="text-lg md:text-xl font-bold text-primary-light dark:text-primary-dark mb-3">Equilibrio sostenido</h4>
            <p class="text-base md:text-lg">La eficiencia verdadera respeta tus límites; busco soluciones que <strong>liberen tiempo sin generar agotamiento</strong>, priorizando el bienestar junto con la productividad.</p>
          </li>
        </ul>
        
        <p class="text-base md:text-lg mt-12">
          Estos valores se reflejan en lo que comparto aquí y guían cómo ayudo a otros a navegar estos cambios de forma práctica.
        </p>
        
        <div class="mt-16 p-6 border-t border-gray-200 dark:border-gray-700">
          <p class="text-lg">
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

.prose h2::after {
  content: '';
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  width: 3rem;
  height: 0.25rem;
  background-color: var(--color-brand-accent);
  border-radius: 0.125rem;
}
</style>

