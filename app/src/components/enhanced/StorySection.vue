<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'default', // 'hero', 'intro', 'content', 'highlight', 'cta'
    validator: (value) => ['hero', 'intro', 'content', 'highlight', 'cta'].includes(value)
  },
  spacing: {
    type: String,
    default: 'normal', // 'tight', 'normal', 'loose'
    validator: (value) => ['tight', 'normal', 'loose'].includes(value)
  },
  centered: {
    type: Boolean,
    default: false
  },
  connector: {
    type: Boolean,
    default: false
  }
});

// Configuraciones específicas para cada variante de sección narrativa
const sectionConfig = computed(() => {
  const configs = {
    hero: {
      atmosphere: {
        variant: 'hero',
        intensity: 'strong',
        position: 'all'
      },
      spacing: 'none',
      textAlign: 'text-center',
      maxWidth: 'max-w-4xl',
      connector: true
    },
    intro: {
      atmosphere: {
        variant: 'content',
        intensity: 'normal',
        position: 'both'
      },
      spacing: 'normal',
      textAlign: 'text-center md:text-left',
      maxWidth: 'max-w-5xl',
      connector: false
    },
    content: {
      atmosphere: {
        variant: 'default',
        intensity: 'subtle',
        position: 'both'
      },
      spacing: 'normal',
      textAlign: 'text-left',
      maxWidth: 'max-w-4xl',
      connector: false
    },
    highlight: {
      atmosphere: {
        variant: 'content',
        intensity: 'normal',
        position: 'all'
      },
      spacing: 'loose',
      textAlign: 'text-center',
      maxWidth: 'max-w-3xl',
      connector: true
    },
    cta: {
      atmosphere: {
        variant: 'form',
        intensity: 'normal',
        position: 'both'
      },
      spacing: 'loose',
      textAlign: 'text-center',
      maxWidth: 'max-w-2xl',
      connector: false
    }
  };

  return configs[props.variant] || configs.content;
});

// Clases finales basadas en la configuración
const sectionClasses = computed(() => {
  const config = sectionConfig.value;
  return [
    config.textAlign,
    props.centered ? 'mx-auto' : '',
    'relative z-10' // Asegurar que esté sobre elementos decorativos
  ].filter(Boolean);
});

// Props para SectionWrapperV2
const wrapperProps = computed(() => ({
  spacing: props.spacing || sectionConfig.value.spacing,
  atmosphere: true,
  atmosphereVariant: sectionConfig.value.atmosphere.variant,
  atmosphereIntensity: sectionConfig.value.atmosphere.intensity,
  atmospherePosition: sectionConfig.value.atmosphere.position,
  connector: props.connector || sectionConfig.value.connector,
  connectorType: 'bottom',
  maxWidth: sectionConfig.value.maxWidth.replace('max-w-', '')
}));
</script>

<template>
  <SectionWrapperV2 v-bind="wrapperProps">
    <!-- Contenido de la sección con clases narrativas -->
    <div :class="sectionClasses">
      <!-- Slot para título con decoración automática si es hero o highlight -->
      <div v-if="$slots.title" class="mb-6">
        <BrandPersonality 
          v-if="variant === 'hero' || variant === 'highlight'"
          element="title-accent"
          :variant="variant === 'hero' ? 'primary' : 'secondary'"
        >
          <slot name="title"></slot>
        </BrandPersonality>
        <div v-else>
          <slot name="title"></slot>
        </div>
      </div>

      <!-- Slot para subtítulo -->
      <div v-if="$slots.subtitle" class="mb-8">
        <slot name="subtitle"></slot>
      </div>

      <!-- Contenido principal -->
      <div v-if="variant === 'highlight'" class="relative">
        <BrandPersonality 
          element="card"
          variant="primary"
        >
          <slot></slot>
        </BrandPersonality>
      </div>
      <div v-else>
        <slot></slot>
      </div>

      <!-- Slot para acciones/botones -->
      <div v-if="$slots.actions" class="mt-8">
        <slot name="actions"></slot>
      </div>

      <!-- Elemento decorativo inferior para variantes específicas -->
      <div v-if="variant === 'highlight' || variant === 'hero'" class="mt-6 flex justify-center">
        <DecorativeElements 
          type="accent-line"
          direction="horizontal"
          position="center"
          size="normal"
        />
      </div>
    </div>
  </SectionWrapperV2>
</template>

<script>
// Importar componentes necesarios
import SectionWrapperV2 from './SectionWrapperV2.vue';
import BrandPersonality from './BrandPersonality.vue';
import DecorativeElements from './DecorativeElements.vue';

export default {
  components: {
    SectionWrapperV2,
    BrandPersonality,
    DecorativeElements
  }
}
</script>

<style scoped>
/* Asegurar que las secciones narrativas tengan el flujo correcto */
.relative.z-10 {
  position: relative;
  z-index: 10;
}

/* Espaciado consistente para elementos de la narrativa */
.mb-6, .mb-8, .mt-6, .mt-8 {
  margin-bottom: var(--spacing);
  margin-top: var(--spacing);
}

/* Variables CSS para espaciado consistente */
:root {
  --spacing: 1.5rem;
}

@media (min-width: 640px) {
  :root {
    --spacing: 2rem;
  }
}
</style>
