<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';
import DecorativeIcon from '@/components/DecorativeIcon.vue';
</script>

<template>
  <section aria-label="Filosofía del proyecto">
    <SectionWrapper spacing="loose" class="text-center relative">
      <!-- Elementos decorativos de fondo -->
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-accent-primary-light/20 dark:from-accent-primary-dark/20 to-transparent rounded-full"></div>
      
      <div class="max-w-3xl mx-auto bg-surface-light/30 dark:bg-surface-dark/30 rounded-xl p-8 border border-accent-primary-light/30 dark:border-accent-primary-dark/30 shadow-sm relative overflow-hidden">
        <p class="text-center text-xl md:text-2xl text-secondary-light dark:text-secondary-dark max-w-4xl mx-auto leading-relaxed">
          Este proyecto surge de la convicción de que la tecnología, <em>bien entendida y usada</em>, puede liberarnos tiempo para enfocarnos en lo que realmente importa: <strong>El autoconocimiento, las relaciones, los proyectos personales...</strong>
          <br><br>
          Pero los avances ocurren cada vez más rápido, por eso <strong>adaptarnos pronto es clave.</strong> Es lo que promuevo aquí y mi enfoque se basa en <em>tres pilares prácticos</em> muy simples que quiero compartir contigo.
        </p>
        <!-- Elemento decorativo inferior -->
        <div class="mt-6 flex justify-center">
          <DecorativeIcon type="arrow-down" size="md" />
        </div>
      </div>
    </SectionWrapper>
  </section>
</template>