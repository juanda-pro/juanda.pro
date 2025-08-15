<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

interface Props {
  currentStep: number
  totalSteps: number
  isCurrentStepValid: boolean
  isFormValid: boolean
  isSubmitting: boolean
}

interface Emits {
  'prev-step': []
  'next-step': []
  'submit': []
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// Debug watcher para ver cambios en isCurrentStepValid
import { watch } from 'vue'
watch(() => props.isCurrentStepValid, (newValue) => {
  console.log('🔍 DEBUG ContactFormNavigation - isCurrentStepValid changed to:', newValue)
}, { immediate: true })

function handlePrevStep() {
  emit('prev-step')
}

function handleNextStep() {
  console.log('🔍 DEBUG ContactFormNavigation - handleNextStep called')
  console.log('🔍 DEBUG ContactFormNavigation - isCurrentStepValid:', props.isCurrentStepValid)
  emit('next-step')
}

function handleSubmit() {
  emit('submit')
}
</script>

<template>
  <div class="flex justify-between items-center pt-3 sm:pt-4 md:pt-5">
    <!-- Contenedor izquierdo: Botón Anterior -->
    <div class="flex-shrink-0">
      <button
        v-if="currentStep > 0"
        @click="handlePrevStep"
        class="flex items-center space-x-1 sm:space-x-2 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-primary-light dark:hover:text-accent-primary-dark transition-all duration-200 hover:scale-105"
      >
        <ChevronLeftIcon class="w-3 h-3 sm:w-4 sm:h-4" />
        <span>Anterior</span>
      </button>
    </div>

    <!-- Contenedor derecho: Botones de Acción -->
    <div class="flex space-x-2 sm:space-x-3 flex-shrink-0">
      <!-- Botón Siguiente -->
      <button
        v-if="currentStep < totalSteps - 1"
        @click="handleNextStep"
        :disabled="!isCurrentStepValid"
        class="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-sm sm:text-base text-text-on-accent-light dark:text-text-on-accent-dark bg-accent-primary-light dark:bg-accent-primary-dark hover:bg-accent-primary-light/90 dark:hover:bg-accent-primary-dark/90 disabled:bg-disabled-bg-light disabled:text-disabled-text-light dark:disabled:bg-disabled-bg-dark dark:disabled:text-disabled-text-dark rounded-lg transition-all duration-200 font-semibold disabled:cursor-not-allowed group/btn"
      >
        <span>Siguiente</span>
        <ChevronRightIcon class="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
      </button>
      
      <!-- Botón Enviar -->
      <button
        v-else
        @click="handleSubmit"
        :disabled="!isFormValid || isSubmitting"
        class="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-sm sm:text-base text-text-on-accent-light dark:text-text-on-accent-dark bg-accent-primary-light dark:bg-accent-primary-dark hover:bg-accent-primary-light/90 dark:hover:bg-accent-primary-dark/90 disabled:bg-disabled-bg-light disabled:text-disabled-text-light dark:disabled:bg-disabled-bg-dark dark:disabled:text-disabled-text-dark rounded-lg transition-all duration-200 font-semibold disabled:cursor-not-allowed"
      >
        {{ isSubmitting ? 'Enviando...' : 'Enviar' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Efectos de hover para botones */
button:hover:not(:disabled) {
  box-shadow: 0 4px 12px rgba(32, 99, 114, 0.25);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}
</style>