<script setup lang="ts">
import { computed } from 'vue'
import ContactFormFeedback from './ContactFormFeedback.vue'
import ContactFormInitial from './ContactFormInitial.vue'
import ContactFormField from './ContactFormField.vue'
import ContactFormNavigation from './ContactFormNavigation.vue'
import { useContactForm } from '@/composables/useContactForm'

// Usar el composable para toda la lógica del formulario
const {
  // Estado
  isFormExpanded,
  currentStep,
  isSubmitting,
  submitStatus,
  webhookStatus,
  formData,
  validationErrors,
  
  // Configuración
  formSteps,
  
  // Computadas
  currentStepData,
  formProgress,
  isFormValid,
  
  // Métodos
  validateField,
  isCurrentStepValid,
  expandForm,
  nextStep,
  prevStep,
  handleEnter,
  handleSubmit,
  resetForm
} = useContactForm()



// Exponer métodos para uso externo
defineExpose({
  expandForm,
  resetForm,
  isExpanded: computed(() => isFormExpanded.value)
});
</script>

<template>
  <div class="contact-form-wrapper">
    <!-- Estados de Feedback -->
    <ContactFormFeedback 
      :submit-status="submitStatus"
      :webhook-status="webhookStatus"
      :validation-errors="validationErrors"
    />

    <!-- Contenedor Principal del Formulario -->
    <div class="relative group transition-all duration-500 hover:scale-105 transform w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <div class="relative bg-card-light dark:bg-card-dark border-2 border-accent-primary-light/20 dark:border-accent-primary-dark/20 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 transition-all duration-500 hover:border-accent-primary-light/40 dark:hover:border-accent-primary-dark/40 overflow-hidden">
        
        <!-- Elemento decorativo superior -->
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-accent-primary-light to-accent-primary-light/60 dark:from-accent-primary-dark dark:to-accent-primary-dark/60 rounded-full transition-all duration-500 group-hover:w-20 group-hover:h-1.5"></div>
        
        <!-- Barra de Texto Inicial -->
        <ContactFormInitial 
          v-if="!isFormExpanded"
          @expand-form="expandForm"
        />

        <!-- Formulario Expandido -->
        <div v-if="isFormExpanded" class="space-y-4 sm:space-y-5 md:space-y-6">
          <!-- Barra de Progreso -->
          <div class="w-full bg-border-primary-light dark:bg-border-primary-dark rounded-full h-2">
            <div 
              class="bg-accent-primary-light dark:bg-accent-primary-dark h-2 rounded-full transition-all duration-500 ease-out"
              :style="{ width: formProgress + '%' }"
            ></div>
          </div>

          <!-- Header del Paso Actual -->
          <div class="text-center">
            <h4 class="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-2">
              {{ currentStepData?.label || 'Completando...' }}
            </h4>
            
            <!-- Línea decorativa -->
            <div class="flex justify-center mb-4">
              <div class="w-16 h-0.5 bg-accent-primary-light/40 dark:bg-accent-primary-dark/40 rounded-full"></div>
            </div>
            
            <p class="text-xs sm:text-sm md:text-base text-text-secondary-light dark:text-text-secondary-dark">
              Paso {{ currentStep + 1 }} de {{ formSteps.length }}
            </p>
          </div>

          <!-- Campo Activo -->
          <div>
            <ContactFormField 
               v-if="currentStepData"
               :step-data="currentStepData"
               :model-value="formData[currentStepData.field]"
               :validation-error="validationErrors[currentStepData.field]"
               :is-valid="isCurrentStepValid"
               @update:model-value="formData[currentStepData.field] = $event"
               @validate="validateField(currentStepData.field, $event)"
               @enter="handleEnter"
             />
          </div>

          <!-- Controles de Navegación -->
          <ContactFormNavigation 
            :current-step="currentStep"
            :total-steps="formSteps.length"
            :is-current-step-valid="isCurrentStepValid"
            :is-form-valid="isFormValid"
            :is-submitting="isSubmitting"
            @prev-step="prevStep"
            @next-step="nextStep"
            @submit="handleSubmit"
          />


        </div>

      </div>
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

/* Animación de entrada para elementos */
.fade-in-element {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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

/* Responsive */
@media (max-width: 640px) {
  .form-input-active {
    font-size: 16px; /* Evita zoom en iOS */
  }
  
  .contact-form-wrapper {
    padding: 0 1rem;
  }
}

@media (max-height: 600px) and (orientation: landscape) {
  /* Ajustes para pantallas pequeñas en landscape */
  .contact-form-wrapper .space-y-4 {
    gap: 0.75rem;
  }
  
  .form-input-active[rows] {
    min-height: 2.5rem;
  }
}

/* Estados de validación removidos para evitar conflicto con validación personalizada */

/* Efectos de focus mejorados */
.form-input-active:focus {
  box-shadow: 0 0 0 4px rgba(32, 99, 114, 0.15);
}
</style>