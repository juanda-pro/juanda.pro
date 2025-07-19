<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // 'primary', 'secondary', 'outline', 'ghost', 'danger'
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'normal', // 'small', 'normal', 'large'
    validator: (value) => ['small', 'normal', 'large'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button', // 'button', 'submit', 'reset'
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  },
  icon: {
    type: String,
    default: null
  },
  iconPosition: {
    type: String,
    default: 'left', // 'left', 'right'
    validator: (value) => ['left', 'right'].includes(value)
  }
});

// Configuraciones de variantes
const variantConfig = computed(() => {
  const configs = {
    primary: {
      base: 'bg-brand-accent hover:bg-brand-accent-darker text-text-on-accent border-transparent',
      focus: 'focus:ring-brand-accent focus:ring-offset-2',
      disabled: 'disabled:bg-brand-accent/50 disabled:cursor-not-allowed'
    },
    secondary: {
      base: 'bg-surface-light dark:bg-surface-dark hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 text-primary-light dark:text-primary-dark border-border-light dark:border-border-dark',
      focus: 'focus:ring-brand-accent focus:ring-offset-2',
      disabled: 'disabled:opacity-50 disabled:cursor-not-allowed'
    },
    outline: {
      base: 'bg-transparent hover:bg-brand-accent/10 text-brand-accent border-brand-accent',
      focus: 'focus:ring-brand-accent focus:ring-offset-2',
      disabled: 'disabled:opacity-50 disabled:cursor-not-allowed'
    },
    ghost: {
      base: 'bg-transparent hover:bg-surface-light dark:hover:bg-surface-dark text-primary-light dark:text-primary-dark border-transparent',
      focus: 'focus:ring-brand-accent focus:ring-offset-2',
      disabled: 'disabled:opacity-50 disabled:cursor-not-allowed'
    },
    danger: {
      base: 'bg-accent-error hover:bg-accent-error/90 text-white border-transparent',
      focus: 'focus:ring-accent-error focus:ring-offset-2',
      disabled: 'disabled:bg-accent-error/50 disabled:cursor-not-allowed'
    }
  };

  return configs[props.variant] || configs.primary;
});

// Configuraciones de tamaño
const sizeConfig = computed(() => {
  const configs = {
    small: {
      padding: 'px-3 py-1.5',
      text: 'text-sm',
      icon: 'w-4 h-4'
    },
    normal: {
      padding: 'px-4 py-2.5',
      text: 'text-base',
      icon: 'w-5 h-5'
    },
    large: {
      padding: 'px-6 py-3',
      text: 'text-lg',
      icon: 'w-6 h-6'
    }
  };

  return configs[props.size] || configs.normal;
});

// Clases finales del botón
const buttonClasses = computed(() => {
  const variant = variantConfig.value;
  const size = sizeConfig.value;
  
  return [
    // Base styles
    'inline-flex items-center justify-center',
    'font-semibold rounded-lg',
    'border transition-all duration-200',
    'focus:outline-none focus:ring-2',
    
    // Variant styles
    variant.base,
    variant.focus,
    variant.disabled,
    
    // Size styles
    size.padding,
    size.text,
    
    // Width
    props.fullWidth ? 'w-full' : '',
    
    // Loading state
    props.loading ? 'cursor-wait' : '',
    
    // Disabled state
    props.disabled || props.loading ? 'pointer-events-none' : ''
  ].filter(Boolean);
});

// Clases del icono
const iconClasses = computed(() => {
  const size = sizeConfig.value;
  return [
    size.icon,
    props.iconPosition === 'left' ? 'mr-2' : 'ml-2'
  ];
});
</script>

<template>
  <button 
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
  >
    <!-- Loading spinner -->
    <svg 
      v-if="loading" 
      class="animate-spin -ml-1 mr-2 h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        class="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        stroke-width="4"
      ></circle>
      <path 
        class="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>

    <!-- Left icon -->
    <component 
      v-if="icon && iconPosition === 'left' && !loading"
      :is="icon"
      :class="iconClasses"
    />

    <!-- Button content -->
    <span v-if="!loading || $slots.default">
      <slot></slot>
    </span>
    <span v-else>
      Cargando...
    </span>

    <!-- Right icon -->
    <component 
      v-if="icon && iconPosition === 'right' && !loading"
      :is="icon"
      :class="iconClasses"
    />
  </button>
</template>

<style scoped>
/* Mejorar las transiciones del botón */
button {
  transform: translateY(0);
  transition: all 0.2s ease-in-out;
}

/* Efecto hover sutil */
button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

button:active:not(:disabled) {
  transform: translateY(0);
}

/* Estados de focus mejorados */
button:focus {
  box-shadow: 0 0 0 3px rgba(246, 201, 14, 0.1);
}

/* Spinner animation */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
