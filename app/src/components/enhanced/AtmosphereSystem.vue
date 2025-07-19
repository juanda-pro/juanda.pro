<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'default', // 'default', 'hero', 'content', 'form'
    validator: (value) => ['default', 'hero', 'content', 'form'].includes(value)
  },
  intensity: {
    type: String,
    default: 'normal', // 'subtle', 'normal', 'strong'
    validator: (value) => ['subtle', 'normal', 'strong'].includes(value)
  },
  position: {
    type: String,
    default: 'both', // 'top', 'bottom', 'left', 'right', 'both', 'all'
    validator: (value) => ['top', 'bottom', 'left', 'right', 'both', 'all'].includes(value)
  }
});

// Configuración de elementos decorativos basada en HomeView
const atmosphereConfig = computed(() => {
  const configs = {
    default: {
      elements: [
        { 
          position: 'top-1/2 -right-24', 
          size: 'w-48 h-48', 
          color: 'bg-accent-info-dark/5 dark:bg-accent-info-dark/10', 
          blur: 'blur-2xl' 
        },
        { 
          position: 'top-1/4 -left-16', 
          size: 'w-32 h-32', 
          color: 'bg-brand-accent/5 dark:bg-brand-accent/10', 
          blur: 'blur-xl' 
        }
      ]
    },
    hero: {
      elements: [
        { 
          position: '-top-10 right-0', 
          size: 'w-64 h-64', 
          color: 'bg-accent-info-dark/5 dark:bg-accent-info-dark/10', 
          blur: 'blur-3xl' 
        },
        { 
          position: 'bottom-10 left-0', 
          size: 'w-48 h-48', 
          color: 'bg-brand-accent/5 dark:bg-brand-accent/10', 
          blur: 'blur-2xl' 
        }
      ]
    },
    content: {
      elements: [
        { 
          position: '-top-16 -right-16', 
          size: 'w-32 h-32', 
          color: 'bg-brand-accent/5 dark:bg-brand-accent/10', 
          blur: 'blur-xl' 
        },
        { 
          position: '-bottom-16 -left-16', 
          size: 'w-32 h-32', 
          color: 'bg-accent-info-dark/5 dark:bg-accent-info-dark/10', 
          blur: 'blur-xl' 
        }
      ]
    },
    form: {
      elements: [
        { 
          position: 'top-0 right-1/4', 
          size: 'w-40 h-40', 
          color: 'bg-brand-accent/3 dark:bg-brand-accent/8', 
          blur: 'blur-2xl' 
        },
        { 
          position: 'bottom-1/4 left-0', 
          size: 'w-36 h-36', 
          color: 'bg-accent-info-dark/3 dark:bg-accent-info-dark/8', 
          blur: 'blur-xl' 
        }
      ]
    }
  };

  return configs[props.variant] || configs.default;
});

// Ajustar intensidad
const adjustedElements = computed(() => {
  return atmosphereConfig.value.elements.map(element => {
    let adjustedColor = element.color;
    
    if (props.intensity === 'subtle') {
      adjustedColor = adjustedColor.replace('/5', '/3').replace('/10', '/6').replace('/8', '/5');
    } else if (props.intensity === 'strong') {
      adjustedColor = adjustedColor.replace('/5', '/8').replace('/10', '/15').replace('/3', '/6');
    }
    
    return { ...element, color: adjustedColor };
  });
});

// Filtrar elementos por posición
const filteredElements = computed(() => {
  if (props.position === 'all') return adjustedElements.value;
  
  return adjustedElements.value.filter(element => {
    const pos = element.position;
    switch (props.position) {
      case 'top':
        return pos.includes('top');
      case 'bottom':
        return pos.includes('bottom');
      case 'left':
        return pos.includes('left');
      case 'right':
        return pos.includes('right');
      case 'both':
        return true; // Mostrar todos por defecto
      default:
        return true;
    }
  });
});
</script>

<template>
  <!-- Elementos decorativos de fondo -->
  <div 
    v-for="(element, index) in filteredElements" 
    :key="`atmosphere-${index}`"
    :class="[
      'absolute rounded-full pointer-events-none',
      `${element.position}`,
      `${element.size}`,
      `${element.color}`,
      `${element.blur}`
    ]"
  ></div>
</template>

<style scoped>
/* Asegurar que los elementos no interfieran con la interacción */
div {
  pointer-events: none;
  user-select: none;
}
</style>
