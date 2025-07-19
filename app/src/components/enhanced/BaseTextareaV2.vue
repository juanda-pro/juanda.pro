<script setup>
import { computed } from 'vue';

const props = defineProps({
  id: String,
  label: String,
  placeholder: String,
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  error: String,
  rows: {
    type: Number,
    default: 4
  },
  variant: {
    type: String,
    default: 'default', // 'default', 'minimal'
    validator: (value) => ['default', 'minimal'].includes(value)
  },
  size: {
    type: String,
    default: 'normal', // 'small', 'normal', 'large'
    validator: (value) => ['small', 'normal', 'large'].includes(value)
  },
  resize: {
    type: String,
    default: 'vertical', // 'none', 'vertical', 'horizontal', 'both'
    validator: (value) => ['none', 'vertical', 'horizontal', 'both'].includes(value)
  }
});

const emit = defineEmits(['update:modelValue']);

// Configuraciones de variantes
const variantConfig = computed(() => {
  const configs = {
    default: {
      container: 'space-y-2',
      label: 'block text-sm font-semibold leading-6 text-primary-light dark:text-primary-dark',
      textarea: 'w-full px-4 py-3 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-primary-light dark:text-primary-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-200 placeholder:text-secondary-light dark:placeholder:text-secondary-dark',
      textareaError: 'border-accent-error focus:ring-accent-error focus:border-accent-error'
    },
    minimal: {
      container: 'space-y-1',
      label: 'block text-xs font-medium text-secondary-light dark:text-secondary-dark uppercase tracking-wide',
      textarea: 'w-full px-0 py-2 bg-transparent border-0 border-b-2 border-border-light dark:border-border-dark text-primary-light dark:text-primary-dark focus:outline-none focus:border-brand-accent transition-all duration-200 placeholder:text-secondary-light dark:placeholder:text-secondary-dark',
      textareaError: 'border-accent-error focus:border-accent-error'
    }
  };

  return configs[props.variant] || configs.default;
});

// Configuraciones de tamaño
const sizeConfig = computed(() => {
  const configs = {
    small: {
      textarea: 'px-3 py-2 text-sm',
      label: 'text-xs'
    },
    normal: {
      textarea: 'px-4 py-3 text-base',
      label: 'text-sm'
    },
    large: {
      textarea: 'px-5 py-4 text-lg',
      label: 'text-base'
    }
  };

  return configs[props.size] || configs.normal;
});

// Configuración de resize
const resizeClass = computed(() => {
  const resizeClasses = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize'
  };

  return resizeClasses[props.resize] || resizeClasses.vertical;
});

// Clases finales del textarea
const textareaClasses = computed(() => {
  const baseClasses = variantConfig.value.textarea;
  const sizeClasses = sizeConfig.value.textarea;
  const errorClasses = props.error ? variantConfig.value.textareaError : '';
  const disabledClasses = props.disabled ? 'opacity-60 cursor-not-allowed' : '';

  // Para variante default, reemplazar las clases de padding con las del tamaño
  if (props.variant === 'default') {
    return [
      baseClasses.replace('px-4 py-3', sizeClasses),
      resizeClass.value,
      errorClasses,
      disabledClasses
    ].filter(Boolean).join(' ');
  }

  return [baseClasses, resizeClass.value, errorClasses, disabledClasses].filter(Boolean).join(' ');
});

// Clases del label
const labelClasses = computed(() => {
  const baseClasses = variantConfig.value.label;
  const sizeClasses = sizeConfig.value.label;
  
  return baseClasses.replace('text-sm', sizeClasses);
});

// ID único si no se proporciona
const textareaId = computed(() => props.id || `textarea-${Math.random().toString(36).substr(2, 9)}`);
</script>

<template>
  <div :class="variantConfig.container">
    <!-- Label -->
    <label 
      v-if="label" 
      :for="textareaId" 
      :class="labelClasses"
    >
      {{ label }}
      <span v-if="required" class="text-accent-error ml-1">*</span>
    </label>

    <!-- Textarea field -->
    <textarea 
      :id="textareaId" 
      :placeholder="placeholder" 
      :required="required"
      :disabled="disabled"
      :rows="rows"
      :class="textareaClasses"
      @input="emit('update:modelValue', $event.target.value)"
    ></textarea>

    <!-- Error message -->
    <p v-if="error" class="text-sm text-accent-error mt-1">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
/* Asegurar que las transiciones sean suaves */
textarea {
  transition: all 0.2s ease-in-out;
}

/* Estados de focus mejorados */
textarea:focus {
  box-shadow: 0 0 0 3px rgba(246, 201, 14, 0.1);
}

/* Mejorar la apariencia del resize handle */
textarea:not(.resize-none) {
  resize: vertical;
}

/* Asegurar que el textarea mantenga proporciones adecuadas */
textarea {
  min-height: 100px;
  max-height: 300px;
}
</style>
