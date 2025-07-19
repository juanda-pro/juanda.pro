<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'default', // 'default', 'highlight', 'feature', 'testimonial'
    validator: (value) => ['default', 'highlight', 'feature', 'testimonial'].includes(value)
  },
  atmosphere: {
    type: Boolean,
    default: true
  },
  interactive: {
    type: Boolean,
    default: false
  },
  padding: {
    type: String,
    default: 'normal', // 'tight', 'normal', 'loose'
    validator: (value) => ['tight', 'normal', 'loose'].includes(value)
  },
  elevation: {
    type: String,
    default: 'normal', // 'none', 'subtle', 'normal', 'strong'
    validator: (value) => ['none', 'subtle', 'normal', 'strong'].includes(value)
  }
});

// Configuraciones de variantes
const variantConfig = computed(() => {
  const configs = {
    default: {
      container: 'bg-surface-light/30 dark:bg-surface-dark/30 border border-border-light/10 dark:border-border-dark/10 rounded-xl relative overflow-hidden',
      atmosphere: {
        variant: 'content',
        intensity: 'subtle'
      },
      decorations: true
    },
    highlight: {
      container: 'bg-surface-light dark:bg-surface-dark border border-brand-accent/20 dark:border-brand-accent/30 rounded-xl relative overflow-hidden',
      atmosphere: {
        variant: 'content',
        intensity: 'normal'
      },
      decorations: true,
      accent: true
    },
    feature: {
      container: 'bg-gradient-to-br from-surface-light to-surface-light/50 dark:from-surface-dark dark:to-surface-dark/50 border border-border-light dark:border-border-dark rounded-lg relative overflow-hidden',
      atmosphere: {
        variant: 'default',
        intensity: 'subtle'
      },
      decorations: false
    },
    testimonial: {
      container: 'bg-surface-accent-light dark:bg-surface-accent-dark border-l-4 border-brand-accent rounded-r-xl relative overflow-hidden',
      atmosphere: {
        variant: 'content',
        intensity: 'subtle'
      },
      decorations: false,
      quote: true
    }
  };

  return configs[props.variant] || configs.default;
});

// Configuraciones de padding
const paddingConfig = computed(() => {
  const configs = {
    tight: 'p-4',
    normal: 'p-6',
    loose: 'p-8'
  };

  return configs[props.padding] || configs.normal;
});

// Configuraciones de elevación
const elevationConfig = computed(() => {
  const configs = {
    none: '',
    subtle: 'shadow-sm',
    normal: 'shadow-md',
    strong: 'shadow-lg'
  };

  return configs[props.elevation] || configs.normal;
});

// Clases interactivas
const interactiveClasses = computed(() => {
  if (!props.interactive) return '';
  
  return 'transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer hover:-translate-y-1';
});

// Clases finales del contenedor
const containerClasses = computed(() => {
  return [
    variantConfig.value.container,
    paddingConfig.value,
    elevationConfig.value,
    interactiveClasses.value
  ].filter(Boolean);
});
</script>

<template>
  <div :class="containerClasses">
    <!-- Sistema de atmósfera si está habilitado -->
    <AtmosphereSystem 
      v-if="atmosphere && variantConfig.atmosphere"
      :variant="variantConfig.atmosphere.variant"
      :intensity="variantConfig.atmosphere.intensity"
      position="both"
    />

    <!-- Decoración superior -->
    <div v-if="variantConfig.decorations" class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent"></div>
    
    <!-- Decoración de acento para variante highlight -->
    <div v-if="variantConfig.accent" class="absolute -top-16 -right-16 w-32 h-32 bg-brand-accent/5 dark:bg-brand-accent/10 rounded-full blur-xl"></div>
    <div v-if="variantConfig.accent" class="absolute -bottom-16 -left-16 w-32 h-32 bg-accent-info-dark/5 dark:bg-accent-info-dark/10 rounded-full blur-xl"></div>

    <!-- Icono de comillas para testimonial -->
    <div v-if="variantConfig.quote" class="absolute top-4 left-4 opacity-20">
      <svg class="w-8 h-8 text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
      </svg>
    </div>

    <!-- Contenido principal con z-index -->
    <div class="relative z-10">
      <!-- Slot para encabezado -->
      <div v-if="$slots.header" class="mb-4">
        <slot name="header"></slot>
      </div>

      <!-- Contenido principal -->
      <div>
        <slot></slot>
      </div>

      <!-- Slot para pie/acciones -->
      <div v-if="$slots.footer" class="mt-4 pt-4 border-t border-border-light/20 dark:border-border-dark/20">
        <slot name="footer"></slot>
      </div>
    </div>

    <!-- Elemento decorativo inferior para variantes específicas -->
    <div v-if="variant === 'highlight'" class="absolute bottom-0 right-0 w-16 h-16 bg-brand-accent/5 dark:bg-brand-accent/10 rounded-full blur-lg"></div>
  </div>
</template>

<script>
// Importar el sistema de atmósfera
import AtmosphereSystem from './AtmosphereSystem.vue';

export default {
  components: {
    AtmosphereSystem
  }
}
</script>

<style scoped>
/* Asegurar que el contenedor tenga el contexto correcto */
.relative {
  position: relative;
}

/* Prevenir que elementos decorativos causen scroll */
.overflow-hidden {
  overflow: hidden;
}

/* Z-index para contenido principal */
.z-10 {
  z-index: 10;
}

/* Transiciones suaves para elementos interactivos */
.cursor-pointer {
  transform-origin: center;
}

/* Mejorar las transiciones hover */
.hover\:scale-\[1\.02\]:hover {
  transform: scale(1.02) translateY(-4px);
}

/* Estados de focus para elementos interactivos */
.cursor-pointer:focus {
  outline: 2px solid rgba(246, 201, 14, 0.5);
  outline-offset: 2px;
}

/* Separación visual del footer */
.border-t {
  border-top-width: 1px;
}
</style>
