<script setup>
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
    default: 'relative flex justify-center items-center group'
  },
  imageClass: {
    type: String,
    default: 'relative w-3/4 h-3/4 object-cover rounded-lg z-10 transition-all duration-500 ease-out group-hover:scale-105 fade-in-element'
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
    <!-- Fondo decorativo principal - Azul en modo claro, Amarillo en modo oscuro -->
    <div class="absolute w-full h-full bg-gradient-to-br from-[#206372]/80 to-[#206372] dark:from-[#F5DF4D]/80 dark:to-[#F5DF4D] rounded-lg transform -rotate-3 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 shadow-lg"></div>
    
    <!-- Capa decorativa secundaria -->
    <div class="absolute w-full h-full bg-[#206372]/30 dark:bg-[#F5DF4D]/30 rounded-lg transform rotate-3 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-95 blur-sm"></div>
    
    <!-- Imagen con sombra de color inverso - Amarillo en modo claro, Azul en modo oscuro -->
    <img 
      :src="imageUrl" 
      :alt="imageAlt" 
      :class="imageClass"
      class="shadow-[#F5DF4D]/50 dark:shadow-[#206372]/50"
    >
    
    <!-- Elemento decorativo adicional -->
    <div 
      v-if="showDecorative" 
      class="absolute -bottom-4 -right-4 w-24 h-24 bg-surface-light dark:bg-surface-dark rounded-full border-4 border-[#206372]/30 dark:border-[#F5DF4D]/30 z-0 transition-all duration-500 group-hover:scale-110 opacity-80"
    ></div>
  </div>
</template>

<style scoped>
/* Animaciones de entrada optimizadas */
.fade-in-element {
  opacity: 0;
  transform: translateY(1rem);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-in-element.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>