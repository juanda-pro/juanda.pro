<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  containerClass: {
    type: String,
    default: 'relative flex justify-center items-center h-64 group'
  },
  imageClass: {
    type: String,
    default: 'relative w-3/4 h-3/4 object-cover rounded-lg shadow-lg z-10 transition-all duration-500 ease-out group-hover:shadow-xl group-hover:scale-105 fade-in-element'
  },
  showDecorative: {
    type: Boolean,
    default: true
  },
  height: {
    type: String,
    default: 'h-64'
  }
});
</script>

<template>
  <div :class="`${containerClass} ${height}`">
    <!-- Fondo decorativo con múltiples capas -->
    <div class="absolute w-full h-full bg-gradient-to-br from-brand-accent/80 to-brand-accent rounded-lg transform -rotate-3 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 shadow-lg"></div>
    <div class="absolute w-full h-full bg-brand-accent/30 rounded-lg transform rotate-3 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-95 blur-sm"></div>
    
    <!-- Imagen con efectos mejorados -->
    <img 
      :src="imageUrl" 
      :alt="imageAlt" 
      :class="imageClass"
    >
    
    <!-- Elemento decorativo adicional -->
    <div 
      v-if="showDecorative" 
      class="absolute -bottom-4 -right-4 w-24 h-24 bg-surface-light dark:bg-surface-dark rounded-full border-4 border-brand-accent/30 z-0 transition-all duration-500 group-hover:scale-110 opacity-80"
    ></div>
  </div>
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

/* Efecto sutil de paralaje en la imagen */
@media (min-width: 768px) {
  .parallax-element {
    transition: transform 0.3s ease-out;
  }
}
</style>