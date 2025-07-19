<script setup>
import { computed } from 'vue';

const props = defineProps({
  spacing: {
    type: String,
    default: 'normal', // 'none', 'tight', 'normal', 'loose'
    validator: (value) => ['none', 'tight', 'normal', 'loose'].includes(value)
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
  },
  atmospherePosition: {
    type: String,
    default: 'both', // 'top', 'bottom', 'left', 'right', 'both', 'all'
    validator: (value) => ['top', 'bottom', 'left', 'right', 'both', 'all'].includes(value)
  },
  connector: {
    type: Boolean,
    default: false
  },
  connectorType: {
    type: String,
    default: 'bottom', // 'top', 'bottom', 'both'
    validator: (value) => ['top', 'bottom', 'both'].includes(value)
  },
  maxWidth: {
    type: String,
    default: '5xl', // '4xl', '5xl', '6xl', '7xl'
    validator: (value) => ['4xl', '5xl', '6xl', '7xl'].includes(value)
  }
});

// Clases de espaciado (manteniendo compatibilidad con SectionWrapper original)
const spacingClass = computed(() => {
  switch (props.spacing) {
    case 'none':
      return 'py-0';
    case 'tight':
      return 'py-4 sm:py-6';
    case 'loose':
      return 'py-12 sm:py-16';
    case 'normal':
    default:
      return 'py-8 sm:py-12';
  }
});

// Clases de ancho máximo
const maxWidthClass = computed(() => {
  return `max-w-${props.maxWidth}`;
});

// Clases del contenedor principal
const containerClasses = computed(() => [
  spacingClass.value,
  'relative', // Necesario para atmósfera y conectores
  'overflow-hidden' // Prevenir que elementos decorativos causen scroll
]);

// Clases del contenido interno
const contentClasses = computed(() => [
  maxWidthClass.value,
  'mx-auto',
  'px-4 sm:px-6 lg:px-8',
  'relative z-10' // Asegurar que el contenido esté sobre la atmósfera
]);
</script>

<template>
  <div :class="containerClasses">
    <!-- Sistema de atmósfera si está habilitado -->
    <AtmosphereSystem 
      v-if="atmosphere"
      :variant="atmosphereVariant"
      :intensity="atmosphereIntensity"
      :position="atmospherePosition"
    />
    
    <!-- Conector superior -->
    <div v-if="connector && (connectorType === 'top' || connectorType === 'both')" 
         class="absolute top-0 left-1/2 transform -translate-x-1/2 z-5">
      <DecorativeElements 
        type="connector"
        direction="vertical"
        position="center"
        size="small"
      />
    </div>
    
    <!-- Contenido principal -->
    <div :class="contentClasses">
      <slot></slot>
    </div>
    
    <!-- Conector inferior -->
    <div v-if="connector && (connectorType === 'bottom' || connectorType === 'both')" 
         class="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-5">
      <DecorativeElements 
        type="connector"
        direction="vertical"
        position="center"
        size="normal"
      />
    </div>
  </div>
</template>

<script>
// Importar componentes del sistema de atmósfera
import AtmosphereSystem from './AtmosphereSystem.vue';
import DecorativeElements from './DecorativeElements.vue';

export default {
  components: {
    AtmosphereSystem,
    DecorativeElements
  }
}
</script>

<style scoped>
/* Asegurar que el contenedor tenga el contexto correcto */
.relative {
  position: relative;
}

/* Prevenir scroll horizontal por elementos decorativos */
.overflow-hidden {
  overflow: hidden;
}

/* Z-index para conectores */
.z-5 {
  z-index: 5;
}

/* Z-index para contenido principal */
.z-10 {
  z-index: 10;
}
</style>
