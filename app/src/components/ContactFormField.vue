<script setup lang="ts">
import { computed } from 'vue'

interface FormStep {
  field: string
  label: string
  placeholder: string
  type: string
  required: boolean
  maxLength: number
}

interface Props {
  stepData: FormStep
  modelValue: string
  validationError?: string
  isValid: boolean
}

interface Emits {
  'update:modelValue': [value: string]
  'validate': [field: string, value: string]
  'enter': []
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const inputClasses = computed(() => [
  'form-input-active w-full px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 text-sm sm:text-base md:text-lg bg-card-light dark:bg-surface-dark border-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary-light/20 dark:focus:ring-accent-primary-dark/20 placeholder-text-muted-light dark:placeholder-text-muted-dark text-text-primary-light dark:text-text-primary-dark',
  props.stepData.type === 'textarea' ? 'resize-none' : '',
  props.validationError 
    ? 'border-error-light dark:border-error-dark focus:border-error-light dark:focus:border-error-dark' 
    : 'border-accent-primary-light/20 dark:border-accent-primary-dark/20 focus:border-accent-primary-light dark:focus:border-accent-primary-dark'
])

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  const value = target.value
  console.log('🔍 DEBUG handleInput:', {
    field: props.stepData.field,
    value,
    trimmed: value.trim()
  })
  emit('update:modelValue', value)
  emit('validate', props.stepData.field, value)
}

function handleEnter() {
  emit('enter')
}
</script>

<template>
  <div>
    <!-- Campo de entrada -->
    <textarea
      v-if="stepData.type === 'textarea'"
      :id="`form-field-${stepData.field}`"
      :value="modelValue"
      :placeholder="stepData.placeholder"
      :aria-label="stepData.label"
      :aria-required="stepData.required"
      :maxlength="stepData.maxLength"
      :class="inputClasses"
      :rows="3"
      @input="handleInput"
    ></textarea>
    
    <input
      v-else
      :id="`form-field-${stepData.field}`"
      :value="modelValue"
      :type="stepData.type"
      :placeholder="stepData.placeholder"
      :aria-label="stepData.label"
      :aria-required="stepData.required"
      :maxlength="stepData.maxLength"
      :class="inputClasses"
      @input="handleInput"
      @keydown.enter="handleEnter"
    >
    
    <!-- Error de validación -->
    <p v-if="validationError" class="mt-1 text-xs sm:text-sm text-error-light dark:text-error-dark">
      {{ validationError }}
    </p>
    
    <!-- Mensaje de error específico para email -->
    <div
      v-if="!isValid && modelValue?.trim() && stepData.field === 'email'"
      class="mt-2 text-sm text-error-text-light dark:text-error-text-dark font-medium"
    >
      <span class="flex items-center">
        <svg class="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        Introduce un email válido para continuar
      </span>
    </div>
    
    <!-- Información del campo -->
    <div class="mt-1 sm:mt-2 flex justify-between items-center">
      <p class="text-xs sm:text-sm text-help-text-light dark:text-help-text-dark">
        Campo {{ stepData.required ? 'obligatorio' : 'opcional' }}
      </p>
      <p class="text-xs text-text-muted-light dark:text-text-muted-dark">
        {{ modelValue.length }}/{{ stepData.maxLength }}
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Animación de entrada */
.form-input-active {
  animation: slideInUp 0.3s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Estados de validación removidos para evitar conflicto con validación personalizada */

/* Efectos de focus mejorados */
.form-input-active:focus {
  box-shadow: 0 0 0 4px rgba(32, 99, 114, 0.15);
}

/* Responsive */
@media (max-width: 640px) {
  .form-input-active {
    font-size: 16px; /* Evita zoom en iOS */
  }
}

@media (max-height: 600px) and (orientation: landscape) {
  .form-input-active[rows] {
    min-height: 2.5rem;
  }
}
</style>