<script setup>
import { computed } from 'vue';

const props = defineProps({
  id: String,
  label: String,
  type: {
    type: String,
    default: 'text'
  },
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
  variant: {
    type: String,
    default: 'default', // 'default', 'floating', 'minimal'
    validator: (value) => ['default', 'floating', 'minimal'].includes(value)
  },
  size: {
    type: String,
    default: 'normal', // 'small', 'normal', 'large'
    validator: (value) => ['small', 'normal', 'large'].includes(value)
  }
});

const emit = defineEmits(['update:modelValue']);

// Configuraciones de variantes
const variantConfig = computed(() => {
  const configs = {
    default: {
      container: 'space-y-2',
      label: 'block text-sm font-semibold leading-6 text-primary-light dark:text-primary-dark',
      input: 'w-full px-4 py-3 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-primary-light dark:text-primary-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-200 placeholder:text-secondary-light dark:placeholder:text-secondary-dark',
      inputError: 'border-accent-error focus:ring-accent-error focus:border-accent-error'
    },
    floating: {
      container: 'relative',
      label: 'absolute left-4 top-3 text-sm text-secondary-light dark:text-secondary-dark transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-brand-accent',
      input: 'peer w-full px-4 pt-6 pb-2 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-primary-light dark:text-primary-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all duration-200 placeholder-transparent',
      inputError: 'border-accent-error focus:ring-accent-error focus:border-accent-error'
    },
    minimal: {
      container: 'space-y-1',
      label: 'block text-xs font-medium text-secondary-light dark:text-secondary-dark uppercase tracking-wide',
      input: 'w-full px-0 py-2 bg-transparent border-0 border-b-2 border-border-light dark:border-border-dark text-primary-light dark:text-primary-dark focus:outline-none focus:border-brand-accent transition-all duration-200 placeholder:text-secondary-light dark:placeholder:text-secondary-dark',
      inputError: 'border-accent-error focus:border-accent-error'
    }
  };

  return configs[props.variant] || configs.default;
});

// Configuraciones de tamaño
const sizeConfig = computed(() => {
  const configs = {
    small: {
      input: 'px-3 py-2 text-sm',
      label: 'text-xs'
    },
    normal: {
      input: 'px-4 py-3 text-base',
      label: 'text-sm'
    },
    large: {
      input: 'px-5 py-4 text-lg',
      label: 'text-base'
    }
  };

  return configs[props.size] || configs.normal;
});

// Clases finales del input
const inputClasses = computed(() => {
  const baseClasses = variantConfig.value.input;
  const sizeClasses = sizeConfig.value.input;
  const errorClasses = props.error ? variantConfig.value.inputError : '';
  const disabledClasses = props.disabled ? 'opacity-60 cursor-not-allowed' : '';

  // Para variante default, reemplazar las clases de padding con las del tamaño
  if (props.variant === 'default') {
    return baseClasses.replace('px-4 py-3', sizeClasses) + ' ' + errorClasses + ' ' + disabledClasses;
  }

  return [baseClasses, errorClasses, disabledClasses].filter(Boolean).join(' ');
});

// Clases del label
const labelClasses = computed(() => {
  const baseClasses = variantConfig.value.label;
  const sizeClasses = sizeConfig.value.label;
  
  if (props.variant === 'default' || props.variant === 'minimal') {
    return baseClasses.replace('text-sm', sizeClasses);
  }
  
  return baseClasses;
});

// ID único si no se proporciona
const inputId = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`);
</script>

<template>
  <div :class="variantConfig.container">
    <!-- Label para variantes default y minimal -->
    <label 
      v-if="label && (variant === 'default' || variant === 'minimal')" 
      :for="inputId" 
      :class="labelClasses"
    >
      {{ label }}
      <span v-if="required" class="text-accent-error ml-1">*</span>
    </label>

    <!-- Input field -->
    <input 
      :type="type" 
      :id="inputId" 
      :placeholder="placeholder" 
      :required="required"
      :disabled="disabled"
      :class="inputClasses"
      @input="emit('update:modelValue', $event.target.value)"
    />

    <!-- Label para variante floating -->
    <label 
      v-if="label && variant === 'floating'" 
      :for="inputId" 
      :class="labelClasses"
    >
      {{ label }}
      <span v-if="required" class="text-accent-error ml-1">*</span>
    </label>

    <!-- Error message -->
    <p v-if="error" class="text-sm text-accent-error mt-1">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
/* Asegurar que las transiciones sean suaves */
input {
  transition: all 0.2s ease-in-out;
}

/* Estados de focus mejorados */
input:focus {
  box-shadow: 0 0 0 3px rgba(246, 201, 14, 0.1);
}

/* Placeholder mejorado para floating labels */
input:placeholder-shown + label {
  transform: translateY(-50%);
}

input:focus + label,
input:not(:placeholder-shown) + label {
  transform: translateY(0);
}
</style>
