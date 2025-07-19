<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  subtitle: String,
  variant: {
    type: String,
    default: 'card', // 'card', 'inline', 'minimal'
    validator: (value) => ['card', 'inline', 'minimal'].includes(value)
  },
  atmosphere: {
    type: Boolean,
    default: true
  },
  spacing: {
    type: String,
    default: 'normal', // 'tight', 'normal', 'loose'
    validator: (value) => ['tight', 'normal', 'loose'].includes(value)
  }
});

// Configuraciones de variantes
const variantConfig = computed(() => {
  const configs = {
    card: {
      container: 'bg-surface-light dark:bg-surface-dark p-8 rounded-lg shadow-md relative overflow-hidden',
      title: 'text-2xl font-bold font-heading text-primary-light dark:text-primary-dark mb-6',
      subtitle: 'text-secondary-light dark:text-secondary-dark mb-6',
      form: 'space-y-6',
      atmosphere: {
        variant: 'form',
        intensity: 'subtle'
      }
    },
    inline: {
      container: 'relative',
      title: 'text-xl font-semibold font-heading text-primary-light dark:text-primary-dark mb-4',
      subtitle: 'text-secondary-light dark:text-secondary-dark mb-4',
      form: 'space-y-4',
      atmosphere: {
        variant: 'content',
        intensity: 'subtle'
      }
    },
    minimal: {
      container: 'relative',
      title: 'text-lg font-medium font-heading text-primary-light dark:text-primary-dark mb-3',
      subtitle: 'text-sm text-secondary-light dark:text-secondary-dark mb-3',
      form: 'space-y-3',
      atmosphere: {
        variant: 'default',
        intensity: 'subtle'
      }
    }
  };

  return configs[props.variant] || configs.card;
});

// Configuraciones de espaciado
const spacingConfig = computed(() => {
  const configs = {
    tight: 'space-y-3',
    normal: 'space-y-4',
    loose: 'space-y-6'
  };

  return configs[props.spacing] || configs.normal;
});

// Clases del formulario con espaciado personalizado
const formClasses = computed(() => {
  return spacingConfig.value;
});
</script>

<template>
  <div :class="variantConfig.container">
    <!-- Sistema de atmósfera para variante card -->
    <AtmosphereSystem 
      v-if="atmosphere && variant === 'card'"
      :variant="variantConfig.atmosphere.variant"
      :intensity="variantConfig.atmosphere.intensity"
      position="both"
    />

    <!-- Decoración superior para variante card -->
    <div v-if="variant === 'card'" class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent"></div>
    
    <!-- Elementos decorativos de fondo para variante card -->
    <div v-if="variant === 'card'" class="absolute -top-16 -right-16 w-32 h-32 bg-brand-accent/5 dark:bg-brand-accent/10 rounded-full blur-xl"></div>
    <div v-if="variant === 'card'" class="absolute -bottom-16 -left-16 w-32 h-32 bg-accent-info-dark/5 dark:bg-accent-info-dark/10 rounded-full blur-xl"></div>

    <!-- Contenido principal con z-index -->
    <div class="relative z-10">
      <!-- Título -->
      <h3 v-if="title" :class="variantConfig.title">
        {{ title }}
      </h3>

      <!-- Subtítulo -->
      <p v-if="subtitle" :class="variantConfig.subtitle">
        {{ subtitle }}
      </p>

      <!-- Formulario -->
      <form :class="formClasses" @submit.prevent="$emit('submit', $event)">
        <slot></slot>
      </form>

      <!-- Slot para acciones/botones -->
      <div v-if="$slots.actions" class="mt-6 pt-6 border-t border-border-light/20 dark:border-border-dark/20">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script>
// Importar el sistema de atmósfera
import AtmosphereSystem from './AtmosphereSystem.vue';

export default {
  components: {
    AtmosphereSystem
  },
  emits: ['submit']
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
form {
  transition: all 0.2s ease-in-out;
}

/* Mejorar la separación visual del área de acciones */
.border-t {
  border-top-width: 1px;
}
</style>
