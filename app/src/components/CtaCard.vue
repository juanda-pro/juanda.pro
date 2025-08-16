<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

/**
 * CtaCard - Componente de tarjeta de llamada a la acción
 * 
 * Tarjeta elegante con efectos hover y animaciones para destacar acciones principales.
 * Utiliza el sistema de diseño con colores adaptativos para modo claro/oscuro.
 * 
 * @component
 */

/**
 * Props del componente CtaCard
 */
interface Props {
  /** Título principal de la tarjeta */
  title: string
  /** Descripción del contenido (puede incluir HTML) */
  description: string
  /** Texto del botón de acción */
  buttonText: string
  /** URL de destino del botón */
  buttonLink?: string
  /** Contenido adicional personalizable (opcional) */
  customContent?: string
}

const props = withDefaults(defineProps<Props>(), {
  buttonLink: '#',
  customContent: ''
});
</script>

<template>
  <div class="relative group transition-all duration-500 hover:scale-105 transform w-full lg:max-w-[50%] mx-auto">
    <!-- Contenedor principal con gradiente sutil -->
    <div class="relative bg-card-light dark:bg-card-dark border-2 border-accent-primary-light/20 dark:border-accent-primary-dark/20 rounded-2xl p-8 md:p-12 transition-all duration-500 hover:border-accent-primary-light/40 dark:hover:border-accent-primary-dark/40 overflow-hidden">
      
      <!-- Elemento decorativo superior -->
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-accent-primary-light to-accent-primary-light/60 dark:from-accent-primary-dark dark:to-accent-primary-dark/60 rounded-full transition-all duration-500 group-hover:w-20 group-hover:h-1.5"></div>
      
      <!-- Contenido -->
      <div class="text-center space-y-6">
        <!-- Título -->
        <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-primary-light dark:text-text-primary-dark leading-tight transition-all duration-300 group-hover:scale-110 group-hover:text-accent-primary-light dark:group-hover:text-accent-primary-dark">
          {{ title }}
        </h3>
        
        <!-- Línea decorativa -->
        <div class="flex justify-center">
          <div class="w-16 h-0.5 bg-accent-primary-light/40 dark:bg-accent-primary-dark/40 rounded-full"></div>
        </div>
        
        <!-- Descripción -->
        <div class="text-lg md:text-xl text-text-primary-light dark:text-text-primary-dark leading-relaxed max-w-2xl mx-auto space-y-4">
          <div v-html="description"></div>
          <div v-if="customContent" v-html="customContent" class="mt-4"></div>
        </div>
        
        <!-- Botón CTA -->
        <div class="pt-4">
          <a
            :href="buttonLink"
            class="inline-flex items-center px-8 py-4 text-lg font-semibold text-text-on-accent-light bg-accent-primary-light dark:bg-accent-primary-dark dark:text-text-on-accent-dark rounded-xl transition-all duration-300 hover:bg-accent-primary-light/90 dark:hover:bg-accent-primary-dark/90 hover:scale-110 hover:shadow-lg group/btn backdrop-blur-sm"
          >
            <span>{{ buttonText }}</span>
            <ChevronRightIcon class="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
