<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'connector', // 'connector', 'underline', 'divider', 'accent-line'
    validator: (value) => ['connector', 'underline', 'divider', 'accent-line'].includes(value)
  },
  direction: {
    type: String,
    default: 'vertical', // 'vertical', 'horizontal'
    validator: (value) => ['vertical', 'horizontal'].includes(value)
  },
  position: {
    type: String,
    default: 'center', // 'center', 'left', 'right', 'top', 'bottom'
    validator: (value) => ['center', 'left', 'right', 'top', 'bottom'].includes(value)
  },
  size: {
    type: String,
    default: 'normal', // 'small', 'normal', 'large'
    validator: (value) => ['small', 'normal', 'large'].includes(value)
  }
});

// Configuraciones basadas en los patrones de HomeView
const elementConfig = computed(() => {
  const configs = {
    connector: {
      vertical: {
        small: 'w-1 h-8',
        normal: 'w-1 h-16', 
        large: 'w-1 h-24'
      },
      horizontal: {
        small: 'w-8 h-1',
        normal: 'w-16 h-1',
        large: 'w-24 h-1'
      },
      gradient: 'bg-gradient-to-b from-transparent via-brand-accent/20 to-transparent',
      gradientHorizontal: 'bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent'
    },
    underline: {
      vertical: {
        small: 'w-1/4 h-1',
        normal: 'w-1/2 h-1',
        large: 'w-3/4 h-1'
      },
      horizontal: {
        small: 'w-1/4 h-1',
        normal: 'w-1/2 h-1', 
        large: 'w-3/4 h-1'
      },
      gradient: 'bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent',
      gradientHorizontal: 'bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent'
    },
    divider: {
      vertical: {
        small: 'w-px h-12',
        normal: 'w-px h-16',
        large: 'w-px h-20'
      },
      horizontal: {
        small: 'w-12 h-px',
        normal: 'w-16 h-px',
        large: 'w-20 h-px'
      },
      gradient: 'bg-gradient-to-b from-border-light/20 via-border-light/60 to-border-light/20 dark:from-border-dark/20 dark:via-border-dark/60 dark:to-border-dark/20',
      gradientHorizontal: 'bg-gradient-to-r from-border-light/20 via-border-light/60 to-border-light/20 dark:from-border-dark/20 dark:via-border-dark/60 dark:to-border-dark/20'
    },
    'accent-line': {
      vertical: {
        small: 'w-2 h-6',
        normal: 'w-2 h-8',
        large: 'w-2 h-12'
      },
      horizontal: {
        small: 'w-6 h-2',
        normal: 'w-8 h-2',
        large: 'w-12 h-2'
      },
      gradient: 'bg-brand-accent',
      gradientHorizontal: 'bg-brand-accent'
    }
  };

  return configs[props.type] || configs.connector;
});

// Clases de posicionamiento
const positionClasses = computed(() => {
  const positions = {
    center: 'left-1/2 transform -translate-x-1/2',
    left: 'left-0',
    right: 'right-0',
    top: 'top-0',
    bottom: 'bottom-0'
  };

  return positions[props.position] || positions.center;
});

// Clases finales del elemento
const elementClasses = computed(() => {
  const config = elementConfig.value;
  const sizeClass = config[props.direction][props.size];
  const gradientClass = props.direction === 'vertical' ? config.gradient : config.gradientHorizontal;
  
  return [
    sizeClass,
    gradientClass,
    'rounded-full',
    positionClasses.value
  ];
});
</script>

<template>
  <div :class="elementClasses"></div>
</template>

<style scoped>
/* Elementos decorativos no deben interferir con la interacción */
div {
  pointer-events: none;
  user-select: none;
}
</style>
