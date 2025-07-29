<script setup>
import { ref, reactive, computed, nextTick } from 'vue';

// Props
const props = defineProps({
  autoFocus: {
    type: Boolean,
    default: false
  }
});

// Emits
const emit = defineEmits(['submit', 'expand']);

// Estado del formulario
const isFormExpanded = ref(false);
const isSubmitting = ref(false);
const submitStatus = ref(null); // 'success', 'error', null
const currentStep = ref(0);

// Datos del formulario
const formData = reactive({
  name: '',
  email: '',
  message: ''
});

// Configuración de pasos del formulario
const formSteps = [
  {
    field: 'name',
    placeholder: 'Tu nombre completo',
    label: '¿Cómo te llamas?',
    type: 'text',
    required: true
  },
  {
    field: 'email',
    placeholder: 'tu@email.com',
    label: '¿Cuál es tu email?',
    type: 'email',
    required: true
  },
  {
    field: 'message',
    placeholder: 'Cuéntame en qué puedo ayudarte...',
    label: '¿De qué se trata?',
    type: 'textarea',
    required: true
  }
];

// Computed
const currentStepData = computed(() => formSteps[currentStep.value] || null);

const isFormValid = computed(() => {
  return formSteps.every(step => 
    !step.required || formData[step.field].trim().length > 0
  );
});

const formProgress = computed(() => {
  if (!isFormExpanded.value) return 0;
  return ((currentStep.value + 1) / formSteps.length) * 100;
});

// Métodos
function expandForm() {
  isFormExpanded.value = true;
  currentStep.value = 0;
  emit('expand');
  
  nextTick(() => {
    const firstInput = document.querySelector('.form-input-active');
    if (firstInput) {
      firstInput.focus();
    }
  });
}

function nextStep() {
  if (currentStep.value < formSteps.length - 1) {
    currentStep.value++;
    nextTick(() => {
      const activeInput = document.querySelector('.form-input-active');
      if (activeInput) {
        activeInput.focus();
      }
    });
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--;
    nextTick(() => {
      const activeInput = document.querySelector('.form-input-active');
      if (activeInput) {
        activeInput.focus();
      }
    });
  }
}

function handleEnter() {
  if (currentStepData.value && formData[currentStepData.value.field].trim()) {
    if (currentStep.value < formSteps.length - 1) {
      nextStep();
    } else {
      handleSubmit();
    }
  }
}

async function handleSubmit() {
  if (!isFormValid.value) return;
  
  isSubmitting.value = true;
  
  try {
    // Emitir evento con los datos del formulario
    emit('submit', { ...formData });
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    submitStatus.value = 'success';
    resetForm();
    
  } catch (error) {
    submitStatus.value = 'error';
  } finally {
    isSubmitting.value = false;
    setTimeout(() => {
      submitStatus.value = null;
    }, 5000);
  }
}

function resetForm() {
  Object.keys(formData).forEach(key => {
    formData[key] = '';
  });
  isFormExpanded.value = false;
  currentStep.value = 0;
}

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
    <div v-if="submitStatus === 'success'" class="mb-6">
      <div class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center">
        <p class="text-green-800 dark:text-green-200">Mensaje enviado. ¡Gracias por conectar!</p>
      </div>
    </div>

    <div v-if="submitStatus === 'error'" class="mb-6">
      <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-center">
        <p class="text-red-800 dark:text-red-200">Error al enviar. Inténtalo de nuevo.</p>
      </div>
    </div>

    <!-- Contenedor Principal del Formulario -->
    <div class="enhanced-form-container bg-gradient-to-br from-surface-light to-brand-accent/5 dark:from-surface-dark dark:to-brand-accent/10 p-8 rounded-2xl shadow-xl border-2 border-brand-accent/20 hover:border-brand-accent/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      <!-- Placeholder Inicial -->
      <div v-if="!isFormExpanded" class="text-center">
        <div class="mb-4">
          <svg class="h-12 w-12 text-brand-accent mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <h4 class="text-xl font-bold text-primary-light dark:text-primary-dark mb-2">
            ¡Escríbeme directamente!
          </h4>
          <p class="text-secondary-light dark:text-secondary-dark mb-4">
            Haz clic aquí para abrir el formulario inteligente
          </p>
        </div>
        <input
          type="text"
          placeholder="Haz clic para empezar a escribir tu mensaje..."
          readonly
          @click="expandForm"
          class="w-full p-4 text-lg border-2 border-brand-accent/30 bg-white/50 dark:bg-gray-800/50 text-primary-light dark:text-primary-dark placeholder-secondary-light dark:placeholder-secondary-dark cursor-pointer hover:border-brand-accent hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-accent/20 backdrop-blur-sm"
        />
      </div>

      <!-- Formulario Expandido -->
      <div v-if="isFormExpanded" class="space-y-6">
        <!-- Barra de Progreso -->
        <div class="w-full bg-surface-light dark:bg-surface-dark rounded-full h-2">
          <div 
            class="bg-brand-accent h-2 rounded-full transition-all duration-500 ease-out"
            :style="{ width: formProgress + '%' }"
          ></div>
        </div>

        <!-- Header del Paso Actual -->
        <div class="text-center">
          <h4 class="text-lg font-medium text-primary-light dark:text-primary-dark">
            {{ currentStepData?.label || 'Completando...' }}
          </h4>
          <p class="text-sm text-secondary-light dark:text-secondary-dark">
            Paso {{ currentStep + 1 }} de {{ formSteps.length }}
          </p>
        </div>

        <!-- Campo Activo -->
        <div>
          <label 
            :for="`form-field-${currentStepData?.field}`"
            class="block text-sm font-medium text-primary-light dark:text-primary-dark mb-2"
          >
            {{ currentStepData?.label }}
          </label>
          
          <textarea
            v-if="currentStepData?.type === 'textarea'"
            :id="`form-field-${currentStepData.field}`"
            v-model="formData[currentStepData.field]"
            :placeholder="currentStepData.placeholder"
            :aria-label="currentStepData.label"
            :aria-required="currentStepData.required"
            :aria-describedby="`form-help-${currentStepData.field}`"
            @keydown.enter.prevent="handleEnter"
            class="form-input-active w-full px-4 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent placeholder-secondary-light dark:placeholder-secondary-dark text-primary-light dark:text-primary-dark resize-none"
            rows="4"
          ></textarea>
          
          <input
            v-else
            :id="`form-field-${currentStepData.field}`"
            v-model="formData[currentStepData.field]"
            :type="currentStepData.type"
            :placeholder="currentStepData.placeholder"
            :aria-label="currentStepData.label"
            :aria-required="currentStepData.required"
            :aria-describedby="`form-help-${currentStepData.field}`"
            @keydown.enter="handleEnter"
            class="form-input-active w-full px-4 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent placeholder-secondary-light dark:placeholder-secondary-dark text-primary-light dark:text-primary-dark"
          >
          
          <p 
            :id="`form-help-${currentStepData?.field}`"
            class="mt-1 text-xs text-secondary-light dark:text-secondary-dark"
          >
            Campo {{ currentStepData?.required ? 'obligatorio' : 'opcional' }}
          </p>
        </div>

        <!-- Controles de Navegación -->
        <div class="flex justify-between items-center">
          <button
            v-if="currentStep > 0"
            @click="prevStep"
            class="flex items-center space-x-2 px-4 py-2 text-secondary-light dark:text-secondary-dark hover:text-brand-accent transition-colors duration-200"
          >
            <span>← Anterior</span>
          </button>
          <div v-else></div>

          <div class="flex space-x-3">
            <button
              v-if="currentStep < formSteps.length - 1"
              @click="nextStep"
              :disabled="!formData[currentStepData.field]?.trim()"
              class="px-6 py-2 bg-brand-accent hover:bg-brand-accent/90 disabled:bg-surface-light disabled:dark:bg-surface-dark disabled:text-secondary-light disabled:dark:text-secondary-dark text-gray-900 rounded-lg transition-all duration-200 font-medium disabled:cursor-not-allowed"
            >
              Siguiente →
            </button>
            
            <button
              v-else
              @click="handleSubmit"
              :disabled="!isFormValid || isSubmitting"
              class="px-6 py-2 bg-brand-accent hover:bg-brand-accent/90 disabled:bg-surface-light disabled:dark:bg-surface-dark disabled:text-secondary-light disabled:dark:text-secondary-dark text-gray-900 rounded-lg transition-all duration-200 font-medium disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
            </button>
          </div>
        </div>

        <!-- Hint de Navegación -->
        <div class="text-center">
          <p class="text-sm text-secondary-light dark:text-secondary-dark">
            Presiona Enter para {{ currentStep < formSteps.length - 1 ? 'continuar' : 'enviar' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos específicos del formulario */
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

.enhanced-form-container {
  position: relative;
  overflow: hidden;
}

.enhanced-form-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(246, 201, 14, 0.1), transparent);
  transition: left 0.5s;
}

.enhanced-form-container:hover::before {
  left: 100%;
}

@keyframes formGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(246, 201, 14, 0.1); }
  50% { box-shadow: 0 0 30px rgba(246, 201, 14, 0.2); }
}

.enhanced-form-container:focus-within {
  animation: formGlow 2s infinite;
}

.form-input-active:focus {
  box-shadow: 0 0 0 4px rgba(var(--brand-accent-rgb), 0.15);
}

button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

@media (max-width: 768px) {
  .form-input-active {
    font-size: 16px;
  }
}

.form-input-active:valid {
  border-color: rgba(34, 197, 94, 0.5);
}

.form-input-active:invalid:not(:placeholder-shown) {
  border-color: rgba(239, 68, 68, 0.5);
}
</style>