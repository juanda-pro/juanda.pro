<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  buttonLink: {
    type: String,
    default: '#',
  },
});
</script>

<template>
  <div class="relative group transition-all duration-500 hover:scale-[1.02] transform w-full mx-auto">
    <!-- Contenedor principal con gradiente sutil -->
    <div class="relative bg-card-light dark:bg-card-dark border-2 border-accent-primary-light/20 dark:border-accent-primary-dark/20 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 transition-all duration-500 hover:border-accent-primary-light/40 dark:hover:border-accent-primary-dark/40 overflow-hidden max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      
      <!-- Elemento decorativo superior -->
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 sm:w-10 md:w-12 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-accent-primary-light to-accent-primary-light/60 dark:from-accent-primary-dark dark:to-accent-primary-dark/60 rounded-full transition-all duration-500 group-hover:w-12 sm:group-hover:w-16 md:group-hover:w-20 group-hover:h-1 sm:group-hover:h-1 md:group-hover:h-1.5"></div>
      
      <!-- Contenido -->
      <div class="text-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
        <!-- Título -->
        <h3 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading text-text-primary-light dark:text-text-primary-dark leading-tight transition-all duration-300 group-hover:scale-105 group-hover:text-accent-primary-light dark:group-hover:text-accent-primary-dark">
          {{ title }}
        </h3>
        
        <!-- Línea decorativa -->
        <div class="flex justify-center">
          <div class="w-12 sm:w-14 md:w-16 h-0.5 bg-accent-primary-light/40 dark:bg-accent-primary-dark/40 rounded-full"></div>
        </div>
        
        <!-- Descripción -->
        <div class="text-sm sm:text-base md:text-lg lg:text-xl text-text-primary-light dark:text-text-primary-dark leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto space-y-2 sm:space-y-3 md:space-y-4">
          <p>{{ description }}</p>
        </div>
        
        <!-- Botón CTA -->
        <div class="pt-2 sm:pt-3 md:pt-4">
          <a
            :href="buttonLink"
            class="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-accent-primary-light dark:bg-accent-primary-dark dark:text-text-primary-light rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-accent-primary-light/90 dark:hover:bg-accent-primary-dark/90 hover:scale-105 hover:shadow-lg group/btn backdrop-blur-sm"
          >
            <span>{{ buttonText }}</span>
            <ChevronRightIcon class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
/* Animación de entrada */
.fade-in-element {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>