<script setup>
import { computed } from 'vue';
import AtmosphereSystem from './AtmosphereSystem.vue';

const props = defineProps({
  removePaddingTop: {
    type: Boolean,
    default: false
  },
  atmosphere: {
    type: Boolean,
    default: true
  },
  atmosphereVariant: {
    type: String,
    default: 'default', // 'default', 'hero', 'content', 'form'
    validator: (value) => ['default', 'hero', 'content', 'form'].includes(value)
  },
  atmosphereIntensity: {
    type: String,
    default: 'normal', // 'subtle', 'normal', 'strong'
    validator: (value) => ['subtle', 'normal', 'strong'].includes(value)
  }
});

const layoutClasses = computed(() => [
  'flex-grow',
  'flex',
  'flex-col',
  'gap-12 sm:gap-16 md:gap-20',
  'relative', // Necesario para elementos de atmósfera
  { 'pt-20': !props.removePaddingTop }
]);
</script>

<template>
  <main :class="layoutClasses">
    <!-- Sistema de atmósfera global si está habilitado -->
    <AtmosphereSystem 
      v-if="atmosphere"
      :variant="atmosphereVariant"
      :intensity="atmosphereIntensity"
      position="all"
    />
    
    <!-- Contenido principal con z-index para estar sobre la atmósfera -->
    <div class="relative z-10">
      <slot></slot>
    </div>
  </main>
</template>



<style scoped>
/* Asegurar que el layout principal tenga el contexto correcto para elementos absolutos */
main {
  position: relative;
  overflow-x: hidden; /* Prevenir scroll horizontal por elementos decorativos */
}

/* El contenido principal debe estar sobre los elementos decorativos */
.relative.z-10 {
  position: relative;
  z-index: 10;
}
</style>
