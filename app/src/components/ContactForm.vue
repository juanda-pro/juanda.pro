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
const webhookStatus = ref(null); // 'success', 'error', null
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

// Función para enviar datos al webhook
async function sendToWebhook(data) {
  const webhookUrl = 'https://n8n-n8n.fps4so.easypanel.host/webhook/7468f722-5d90-4d8a-aa74-79bdd480b1de';
  
  // Crear timestamp en zona horaria de Madrid
  const madridTime = new Date().toLocaleString('sv-SE', {
    timeZone: 'Europe/Madrid',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).replace(' ', 'T');
  
  // Crear query parameters
  const params = new URLSearchParams({
    name: data.name,
    email: data.email,
    message: data.message,
    timestamp: madridTime,
    source: 'juanda.pro-contact-form'
  });
  
  const fullUrl = `${webhookUrl}?${params.toString()}`;
  
  try {
    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'contact_form': 'jJkKI()/55dÑLdk55'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Webhook error: ${response.status} ${response.statusText}`);
    }
    
    return await response.text();
  } catch (error) {
    console.error('Error enviando al webhook:', error);
    throw error;
  }
}

async function handleSubmit() {
  if (!isFormValid.value) return;
  
  isSubmitting.value = true;
  
  try {
    // Emitir evento con los datos del formulario
    emit('submit', { ...formData });
    
    // Enviar datos al webhook
    try {
      await sendToWebhook(formData);
      console.log('Datos enviados al webhook exitosamente');
      webhookStatus.value = 'success';
    } catch (webhookError) {
      console.warn('Error al enviar al webhook, pero continuando con el proceso:', webhookError);
      webhookStatus.value = 'error';
      // No interrumpir el flujo principal si el webhook falla
    }
    
    // Simular envío local
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    submitStatus.value = 'success';
    resetForm();
    
  } catch (error) {
    submitStatus.value = 'error';
  } finally {
    isSubmitting.value = false;
    setTimeout(() => {
      submitStatus.value = null;
      webhookStatus.value = null;
    }, 5000);
  }
}

function resetForm() {
  Object.keys(formData).forEach(key => {
    formData[key] = '';
  });
  currentStep.value = 0;
  isFormExpanded.value = false;
}
</script>

<template>
  <div class="enhanced-form-container">
    <!-- Formulario Colapsado -->
    <div v-if="!isFormExpanded" class="text-center">
      <button
        @click="expandForm"
        class="group relative px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-gray-900 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        <span class="relative z-10">¡Hablemos!</span>
        <div class="absolute inset-0 bg-gradient-to-r from-brand-accent to-yellow-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      <p class="mt-3 text-sm text-secondary-light dark:text-secondary-dark">
        Cuéntame tu proyecto y trabajemos juntos
      </p>
    </div>

    <!-- Formulario Expandido -->
    <div v-else class="space-y-6">
      <!-- Barra de Progreso -->
      <div class="w-full bg-surface-light dark:bg-surface-dark rounded-full h-2 overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-brand-accent to-yellow-400 transition-all duration-500 ease-out"
          :style="{ width: formProgress + '%' }"
        ></div>
      </div>

      <!-- Indicador de Paso -->
      <div class="text-center">
        <span class="text-sm font-medium text-secondary-light dark:text-secondary-dark">
          Paso {{ currentStep + 1 }} de {{ formSteps.length }}
        </span>
      </div>

      <!-- Contenido del Paso Actual -->
      <div v-if="currentStepData" class="space-y-4">
        <div class="text-center">
          <h3 class="text-xl font-semibold text-primary-light dark:text-primary-dark mb-2">
            {{ currentStepData.label }}
          </h3>
        </div>

        <!-- Campo de Entrada -->
        <div class="space-y-3">
          <textarea
            v-if="currentStepData.type === 'textarea'"
            v-model="formData[currentStepData.field]"
            :placeholder="currentStepData.placeholder"
            @keydown.enter.prevent="handleEnter"
            class="form-input-active w-full px-4 py-3 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200 resize-none"
            rows="4"
            :required="currentStepData.required"
          ></textarea>
          
          <input
            v-else
            v-model="formData[currentStepData.field]"
            :type="currentStepData.type"
            :placeholder="currentStepData.placeholder"
            @keydown.enter.prevent="handleEnter"
            class="form-input-active w-full px-4 py-3 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
            :required="currentStepData.required"
          />
        </div>

        <!-- Navegación -->
        <div class="flex justify-between items-center pt-4">
          <button
            v-if="currentStep > 0"
            @click="prevStep"
            class="px-4 py-2 text-secondary-light dark:text-secondary-dark hover:text-primary-light hover:dark:text-primary-dark transition-colors duration-200"
          >
            ← Anterior
          </button>
          <div v-else></div>

          <!-- Botón de Siguiente/Enviar -->
          <div class="flex items-center space-x-3">
            <!-- Estado del Webhook -->
            <div v-if="webhookStatus" class="flex items-center space-x-2">
              <div v-if="webhookStatus === 'success'" class="flex items-center text-green-600 dark:text-green-400">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-xs">Webhook OK</span>
              </div>
              <div v-else-if="webhookStatus === 'error'" class="flex items-center text-yellow-600 dark:text-yellow-400">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-xs">Webhook Warning</span>
              </div>
            </div>

            <!-- Estado del Envío -->
            <div v-if="submitStatus === 'success'" class="flex items-center text-green-600 dark:text-green-400">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="font-medium">¡Mensaje enviado!</span>
            </div>
            
            <div v-else-if="submitStatus === 'error'" class="flex items-center text-red-600 dark:text-red-400">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span class="font-medium">Error al enviar</span>
            </div>

            <button
              v-if="currentStep < formSteps.length - 1"
              @click="nextStep"
              :disabled="!formData[currentStepData.field].trim()"
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