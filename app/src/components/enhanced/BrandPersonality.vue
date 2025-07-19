<script setup>
import { computed } from 'vue';

const props = defineProps({
  element: {
    type: String,
    default: 'card', // 'card', 'title-accent', 'interactive-frame', 'content-highlight'
    validator: (value) => ['card', 'title-accent', 'interactive-frame', 'content-highlight'].includes(value)
  },
  variant: {
    type: String,
    default: 'primary', // 'primary', 'secondary', 'accent'
    validator: (value) => ['primary', 'secondary', 'accent'].includes(value)
  },
  interactive: {
    type: Boolean,
    default: false
  }
});

// Configuraciones basadas en los elementos de personalidad de HomeView
const personalityConfig = computed(() => {
  const configs = {
    card: {
      primary: {
        background: 'bg-surface-light/30 dark:bg-surface-dark/30',
        border: 'border border-border-light/10 dark:border-border-dark/10',
        shadow: 'shadow-sm',
        rounded: 'rounded-xl',
        padding: 'p-8',
        overflow: 'overflow-hidden',
        position: 'relative'
      },
      secondary: {
        background: 'bg-surface-light dark:bg-surface-dark',
        border: 'border border-border-light dark:border-border-dark',
        shadow: 'shadow-md',
        rounded: 'rounded-lg',
        padding: 'p-6',
        overflow: 'overflow-hidden',
        position: 'relative'
      },
      accent: {
        background: 'bg-brand-accent/5 dark:bg-brand-accent/10',
        border: 'border border-brand-accent/20 dark:border-brand-accent/30',
        shadow: 'shadow-sm',
        rounded: 'rounded-xl',
        padding: 'p-8',
        overflow: 'overflow-hidden',
        position: 'relative'
      }
    },
    'title-accent': {
      primary: {
        position: 'relative inline-block',
        accent: 'absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent'
      },
      secondary: {
        position: 'relative inline-block',
        accent: 'absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent'
      },
      accent: {
        position: 'relative inline-block',
        accent: 'absolute -bottom-1 left-0 w-full h-0.5 bg-brand-accent'
      }
    },
    'interactive-frame': {
      primary: {
        container: 'relative flex justify-center items-center group',
        background: 'absolute w-full h-full bg-gradient-to-br from-brand-accent/80 to-brand-accent rounded-lg transform -rotate-3 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 shadow-lg',
        overlay: 'absolute w-full h-full bg-brand-accent/30 rounded-lg transform rotate-3 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-95 blur-sm',
        decoration: 'absolute -bottom-4 -right-4 w-24 h-24 bg-surface-light dark:bg-surface-dark rounded-full border-4 border-brand-accent/30 z-0 transition-all duration-500 group-hover:scale-110 opacity-80'
      }
    },
    'content-highlight': {
      primary: {
        background: 'bg-surface-accent-light dark:bg-surface-accent-dark',
        border: 'border-l-4 border-brand-accent',
        padding: 'pl-6 py-4',
        rounded: 'rounded-r-lg'
      },
      secondary: {
        background: 'bg-gradient-to-r from-brand-accent/5 to-transparent dark:from-brand-accent/10 dark:to-transparent',
        border: 'border-l-2 border-brand-accent/50',
        padding: 'pl-4 py-3',
        rounded: 'rounded-r-md'
      }
    }
  };

  return configs[props.element] || configs.card;
});

// Clases interactivas
const interactiveClasses = computed(() => {
  if (!props.interactive) return '';
  
  return 'transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer';
});

// Clases finales
const elementClasses = computed(() => {
  const config = personalityConfig.value[props.variant] || personalityConfig.value.primary;
  
  if (props.element === 'card') {
    return [
      config.background,
      config.border,
      config.shadow,
      config.rounded,
      config.padding,
      config.overflow,
      config.position,
      interactiveClasses.value
    ].filter(Boolean);
  }
  
  return Object.values(config);
});
</script>

<template>
  <!-- Card Element -->
  <div v-if="element === 'card'" :class="elementClasses">
    <!-- Decoración superior interna -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent"></div>
    
    <!-- Contenido -->
    <slot></slot>
  </div>

  <!-- Title Accent -->
  <span v-else-if="element === 'title-accent'" :class="personalityConfig[variant].position">
    <slot></slot>
    <span :class="personalityConfig[variant].accent"></span>
  </span>

  <!-- Interactive Frame -->
  <div v-else-if="element === 'interactive-frame'" :class="personalityConfig[variant].container">
    <!-- Fondo decorativo con múltiples capas -->
    <div :class="personalityConfig[variant].background"></div>
    <div :class="personalityConfig[variant].overlay"></div>
    
    <!-- Contenido con z-index alto -->
    <div class="relative z-10">
      <slot></slot>
    </div>
    
    <!-- Elemento decorativo adicional -->
    <div :class="personalityConfig[variant].decoration"></div>
  </div>

  <!-- Content Highlight -->
  <div v-else-if="element === 'content-highlight'" :class="[
    personalityConfig[variant].background,
    personalityConfig[variant].border,
    personalityConfig[variant].padding,
    personalityConfig[variant].rounded
  ]">
    <slot></slot>
  </div>

  <!-- Fallback -->
  <div v-else :class="elementClasses">
    <slot></slot>
  </div>
</template>

<style scoped>
/* Transiciones suaves para elementos interactivos */
.cursor-pointer {
  transform-origin: center;
}

/* Asegurar que las decoraciones no interfieran */
.absolute {
  pointer-events: none;
}

/* Permitir interacción en el contenido principal */
.relative.z-10 {
  pointer-events: auto;
}
</style>
