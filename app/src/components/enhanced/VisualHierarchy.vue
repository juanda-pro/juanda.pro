<script setup>
import { computed } from 'vue';

const props = defineProps({
  level: {
    type: String,
    default: 'h2', // 'h1', 'h2', 'h3', 'h4', 'subtitle', 'body', 'caption'
    validator: (value) => ['h1', 'h2', 'h3', 'h4', 'subtitle', 'body', 'caption'].includes(value)
  },
  variant: {
    type: String,
    default: 'default', // 'default', 'accent', 'gradient', 'minimal'
    validator: (value) => ['default', 'accent', 'gradient', 'minimal'].includes(value)
  },
  alignment: {
    type: String,
    default: 'left', // 'left', 'center', 'right'
    validator: (value) => ['left', 'center', 'right'].includes(value)
  },
  decoration: {
    type: Boolean,
    default: false
  },
  spacing: {
    type: String,
    default: 'normal', // 'tight', 'normal', 'loose'
    validator: (value) => ['tight', 'normal', 'loose'].includes(value)
  }
});

// Configuraciones de jerarquía visual
const hierarchyConfig = computed(() => {
  const configs = {
    h1: {
      element: 'h1',
      base: 'text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-tight',
      color: 'text-primary-light dark:text-primary-dark',
      spacing: 'mb-6'
    },
    h2: {
      element: 'h2',
      base: 'text-3xl sm:text-4xl font-extrabold font-heading leading-tight',
      color: 'text-primary-light dark:text-primary-dark',
      spacing: 'mb-4'
    },
    h3: {
      element: 'h3',
      base: 'text-2xl sm:text-3xl font-bold font-heading leading-snug',
      color: 'text-primary-light dark:text-primary-dark',
      spacing: 'mb-4'
    },
    h4: {
      element: 'h4',
      base: 'text-xl sm:text-2xl font-semibold font-heading leading-snug',
      color: 'text-primary-light dark:text-primary-dark',
      spacing: 'mb-3'
    },
    subtitle: {
      element: 'p',
      base: 'text-lg sm:text-xl leading-relaxed',
      color: 'text-secondary-light dark:text-secondary-dark',
      spacing: 'mb-6'
    },
    body: {
      element: 'p',
      base: 'text-base leading-relaxed',
      color: 'text-primary-light dark:text-primary-dark',
      spacing: 'mb-4'
    },
    caption: {
      element: 'p',
      base: 'text-sm leading-normal',
      color: 'text-secondary-light dark:text-secondary-dark',
      spacing: 'mb-2'
    }
  };

  return configs[props.level] || configs.h2;
});

// Configuraciones de variantes
const variantConfig = computed(() => {
  const configs = {
    default: {
      additional: '',
      decoration: ''
    },
    accent: {
      additional: 'text-brand-accent',
      decoration: 'relative inline-block'
    },
    gradient: {
      additional: 'bg-gradient-to-r from-brand-accent to-accent-info bg-clip-text text-transparent',
      decoration: 'relative inline-block'
    },
    minimal: {
      additional: 'font-medium',
      decoration: ''
    }
  };

  return configs[props.variant] || configs.default;
});

// Configuraciones de alineación
const alignmentConfig = computed(() => {
  const configs = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return configs[props.alignment] || configs.left;
});

// Configuraciones de espaciado
const spacingConfig = computed(() => {
  const configs = {
    tight: {
      h1: 'mb-4',
      h2: 'mb-3',
      h3: 'mb-3',
      h4: 'mb-2',
      subtitle: 'mb-4',
      body: 'mb-3',
      caption: 'mb-1'
    },
    normal: {
      h1: 'mb-6',
      h2: 'mb-4',
      h3: 'mb-4',
      h4: 'mb-3',
      subtitle: 'mb-6',
      body: 'mb-4',
      caption: 'mb-2'
    },
    loose: {
      h1: 'mb-8',
      h2: 'mb-6',
      h3: 'mb-6',
      h4: 'mb-4',
      subtitle: 'mb-8',
      body: 'mb-6',
      caption: 'mb-3'
    }
  };

  return configs[props.spacing][props.level] || hierarchyConfig.value.spacing;
});

// Clases finales del elemento
const elementClasses = computed(() => {
  const hierarchy = hierarchyConfig.value;
  const variant = variantConfig.value;
  
  return [
    hierarchy.base,
    variant.additional || hierarchy.color,
    alignmentConfig.value,
    spacingConfig.value,
    variant.decoration
  ].filter(Boolean);
});

// Elemento HTML a renderizar
const elementTag = computed(() => hierarchyConfig.value.element);

// Configuración de decoración
const decorationConfig = computed(() => {
  if (!props.decoration) return null;

  const decorations = {
    h1: {
      type: 'none',
      classes: ''
    },
    h2: {
      type: 'underline',
      classes: 'absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent'
    },
    h3: {
      type: 'accent',
      classes: 'absolute -bottom-1 left-0 w-1/3 h-0.5 bg-brand-accent'
    },
    h4: {
      type: 'dot',
      classes: 'absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-brand-accent rounded-full'
    }
  };

  return decorations[props.level] || null;
});
</script>

<template>
  <component 
    :is="elementTag" 
    :class="elementClasses"
  >
    <slot></slot>
    
    <!-- Decoración si está habilitada -->
    <span 
      v-if="decoration && decorationConfig" 
      :class="decorationConfig.classes"
    ></span>
  </component>
</template>

<style scoped>
/* Asegurar que los gradientes de texto funcionen correctamente */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

.text-transparent {
  color: transparent;
}

/* Mejorar el rendering de fuentes */
.font-heading {
  font-feature-settings: 'kern' 1, 'liga' 1;
  text-rendering: optimizeLegibility;
}

/* Asegurar que las decoraciones se posicionen correctamente */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

/* Mejorar la legibilidad con espaciado de letras */
.font-extrabold {
  letter-spacing: -0.025em;
}

/* Transiciones suaves para elementos interactivos */
.transition-colors {
  transition: color 0.2s ease-in-out;
}

/* Asegurar que los elementos de decoración no interfieran */
span {
  pointer-events: none;
  user-select: none;
}
</style>
