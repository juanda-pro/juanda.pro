<script setup>
import { ref, reactive, computed, nextTick, onMounted } from 'vue';

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
const isVisible = ref(false);
const focusedField = ref(null);

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
    label: '¡Hola! ¿Cómo te llamas?',
    type: 'text',
    required: true,
    icon: 'user'
  },
  {
    field: 'email',
    placeholder: 'tu@email.com',
    label: 'Perfecto, ¿cuál es tu email?',
    type: 'email',
    required: true,
    icon: 'mail'
  },
  {
    field: 'message',
    placeholder: 'Cuéntame en qué puedo ayudarte. Puede ser una idea de automatización, una pregunta sobre herramientas de IA, o simplemente algo que quieras compartir...',
    label: 'Ahora cuéntame, ¿en qué puedo ayudarte?',
    type: 'textarea',
    required: true,
    icon: 'chat'
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

const completedSteps = computed(() => {
  return formSteps.filter((step, index) => 
    index < currentStep.value && formData[step.field].trim().length > 0
  ).length;
});

// Animación de entrada
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 200);
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
      focusedField.value = currentStepData.value?.field;
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
        focusedField.value = currentStepData.value?.field;
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
        focusedField.value = currentStepData.value?.field;
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

function handleFocus(field) {
  focusedField.value = field;
}

function handleBlur() {
  focusedField.value = null;
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
    
    // Resetear después de un delay
    setTimeout(() => {
      resetForm();
    }, 3000);
    
  } catch (error) {
    submitStatus.value = 'error';
  } finally {
    isSubmitting.value = false;
    setTimeout(() => {
      if (submitStatus.value !== 'success') {
        submitStatus.value = null;
      }
    }, 5000);
  }
}

function resetForm() {
  Object.keys(formData).forEach(key => {
    formData[key] = '';
  });
  isFormExpanded.value = false;
  currentStep.value = 0;
  submitStatus.value = null;
  focusedField.value = null;
}

// Función para obtener el icono SVG
function getIcon(iconName) {
  const icons = {
    user: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />`,
    mail: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />`,
    chat: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />`
  };
  return icons[iconName] || icons.chat;
}

// Exponer métodos para uso externo
defineExpose({
  expandForm,
  resetForm,
  isExpanded: computed(() => isFormExpanded.value)
});
</script>

<template>
  <div 
    class="contact-form-wrapper max-w-2xl mx-auto"
    :class="{ 
      'opacity-100 translate-y-0': isVisible,
      'opacity-0 translate-y-8': !isVisible
    }"
  >
    <!-- Estados de Feedback -->
    <Transition name="feedback" mode="out-in">
      <div v-if="submitStatus === 'success'" class="mb-8">
        <div class="relative p-8 bg-surface-light/80 dark:bg-surface-deeper-dark/80 backdrop-blur-xl border border-green-200 dark:border-green-700/50 rounded-3xl text-center overflow-hidden">
          <!-- Efectos decorativos -->
          <div class="absolute inset-0 overflow-hidden rounded-3xl">
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-green-400/15 rounded-full blur-2xl animate-pulse" style="animation-delay: 0.5s;"></div>
          </div>
          <div class="relative z-10">
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h4 class="text-2xl font-heading font-bold text-primary-light dark:text-primary-dark mb-3">¡Mensaje enviado!</h4>
            <p class="text-secondary-light dark:text-secondary-dark text-lg">Gracias por conectar. Te responderé pronto.</p>
          </div>
        </div>
      </div>

      <div v-else-if="submitStatus === 'error'" class="mb-8">
        <div class="relative p-8 bg-surface-light/80 dark:bg-surface-deeper-dark/80 backdrop-blur-xl border border-red-200 dark:border-red-700/50 rounded-3xl text-center overflow-hidden">
          <!-- Efectos decorativos -->
          <div class="absolute inset-0 overflow-hidden rounded-3xl">
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-red-400/15 rounded-full blur-2xl animate-pulse" style="animation-delay: 0.5s;"></div>
          </div>
          <div class="relative z-10">
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <h4 class="text-2xl font-heading font-bold text-primary-light dark:text-primary-dark mb-3">Error al enviar</h4>
            <p class="text-secondary-light dark:text-secondary-dark text-lg mb-6">Algo salió mal. Por favor, inténtalo de nuevo.</p>
            <button 
              @click="submitStatus = null" 
              class="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Intentar de nuevo
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Contenedor Principal del Formulario -->
    <div class="relative">
      <!-- Fondo decorativo -->
      <div class="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-brand-accent/10 rounded-3xl blur-xl transform rotate-1"></div>
      
      <div class="relative bg-gradient-to-br from-surface-light/95 to-background-light/98 dark:from-surface-dark/95 dark:to-background-dark/98 backdrop-blur-sm border-2 border-brand-accent/20 rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-brand-accent/10 hover:border-brand-accent/30">
        
        <!-- Placeholder Inicial -->
        <Transition name="form-state" mode="out-in">
          <div v-if="!isFormExpanded" class="p-8 md:p-12" key="initial">
            <!-- Fondo decorativo animado -->
            <div class="absolute inset-0 overflow-hidden rounded-3xl">
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent/20 rounded-full blur-xl transition-all duration-700" style="animation: breathe 4s ease-in-out infinite;"></div>
              <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-accent/15 rounded-full blur-2xl transition-all duration-700" style="animation: breathe 4s ease-in-out infinite 1s;"></div>
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-brand-accent/10 to-transparent rounded-full blur-3xl" style="animation: softPulse 6s ease-in-out infinite;"></div>
            </div>
            
            <!-- Contenido principal -->
            <div class="relative z-10">
              <button 
                @click="expandForm" 
                class="w-full text-left transition-all duration-300 group"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-accent-darker rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.681L3 21l2.681-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-xl font-heading font-bold text-primary-light dark:text-primary-dark mb-1 group-hover:text-brand-accent transition-colors duration-300">
                        Empezar conversación
                      </h3>
                      <p class="text-secondary-light dark:text-secondary-dark group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-300">
                        Cuéntame en qué puedo ayudarte
                      </p>
                    </div>
                  </div>
                  <div class="w-8 h-8 bg-brand-accent/10 dark:bg-brand-accent/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-brand-accent group-hover:scale-110">
                    <svg class="w-4 h-4 text-brand-accent group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <!-- Formulario Expandido -->
          <div v-else class="p-8 md:p-12" key="expanded">
            <!-- Barra de Progreso Mejorada -->
            <div class="mb-8">
              <div class="flex justify-between items-center mb-3">
                <span class="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Paso {{ currentStep + 1 }} de {{ formSteps.length }}
                </span>
                <span class="text-sm font-medium text-brand-accent">
                  {{ Math.round(formProgress) }}%
                </span>
              </div>
              <div class="relative w-full bg-surface-light dark:bg-surface-dark rounded-full h-3 overflow-hidden">
                <div 
                  class="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-accent to-brand-accent-darker rounded-full transition-all duration-700 ease-out"
                  :style="{ width: formProgress + '%' }"
                ></div>
                <!-- Efecto de brillo en la barra -->
                <div class="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full opacity-50 animate-pulse"></div>
              </div>
            </div>

            <!-- Header del Paso Actual -->
            <div class="text-center mb-8">
              <!-- Icono del paso actual -->
              <div class="flex justify-center mb-4">
                <div class="relative p-3 bg-brand-accent/10 rounded-2xl transition-all duration-300">
                  <svg 
                    class="w-6 h-6 text-brand-accent transition-all duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    v-html="getIcon(currentStepData?.icon)"
                  >
                  </svg>
                </div>
              </div>
              
              <h4 class="text-xl md:text-2xl font-bold text-primary-light dark:text-primary-dark mb-2">
                {{ currentStepData?.label || 'Completando...' }}
              </h4>
              
              <!-- Indicador de pasos completados -->
              <div class="flex justify-center space-x-2 mt-4">
                <div 
                  v-for="(step, index) in formSteps" 
                  :key="index"
                  class="w-2 h-2 rounded-full transition-all duration-300"
                  :class="{
                    'bg-brand-accent scale-125': index === currentStep,
                    'bg-brand-accent/60': index < currentStep,
                    'bg-brand-accent/20': index > currentStep
                  }"
                ></div>
              </div>
            </div>

            <!-- Campo Activo -->
            <div class="mb-8">
              <div class="relative">
                <textarea
                  v-if="currentStepData?.type === 'textarea'"
                  :id="`form-field-${currentStepData.field}`"
                  v-model="formData[currentStepData.field]"
                  :placeholder="currentStepData.placeholder"
                  :aria-label="currentStepData.label"
                  :aria-required="currentStepData.required"
                  @keydown.enter.prevent="handleEnter"
                  @focus="handleFocus(currentStepData.field)"
                  @blur="handleBlur"
                  class="form-input-active w-full px-6 py-4 bg-surface-light/80 dark:bg-surface-deeper-dark/80 backdrop-blur-xl border-2 border-border-light/50 dark:border-border-dark/50 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-accent/20 focus:border-brand-accent placeholder-gray-500 dark:placeholder-gray-300 text-primary-light dark:text-white resize-none text-lg leading-relaxed shadow-lg hover:shadow-xl"
                  :class="{
                    'border-brand-accent ring-4 ring-brand-accent/20 shadow-brand-accent/20': focusedField === currentStepData.field,
                    'border-green-400 ring-4 ring-green-400/20': formData[currentStepData.field]?.trim() && focusedField !== currentStepData.field
                  }"
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
                  @keydown.enter="handleEnter"
                  @focus="handleFocus(currentStepData.field)"
                  @blur="handleBlur"
                  class="form-input-active w-full px-6 py-4 bg-surface-light/80 dark:bg-surface-deeper-dark/80 backdrop-blur-xl border-2 border-border-light/50 dark:border-border-dark/50 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-accent/20 focus:border-brand-accent placeholder-gray-500 dark:placeholder-gray-300 text-primary-light dark:text-white text-lg shadow-lg hover:shadow-xl"
                  :class="{
                    'border-brand-accent ring-4 ring-brand-accent/20': focusedField === currentStepData.field,
                    'border-green-400 ring-4 ring-green-400/20': formData[currentStepData.field]?.trim() && focusedField !== currentStepData.field
                  }"
                >
                
                <!-- Indicador de validación -->
                <div 
                  v-if="formData[currentStepData?.field]?.trim()"
                  class="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <div class="p-1 bg-green-500 rounded-full">
                    <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <!-- Ayuda contextual -->
              <p class="mt-3 text-sm text-gray-600 dark:text-gray-300 flex items-center">
                <svg class="w-4 h-4 mr-2 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ currentStepData?.required ? 'Campo obligatorio' : 'Campo opcional' }} • Presiona Enter para {{ currentStep < formSteps.length - 1 ? 'continuar' : 'enviar' }}
              </p>
            </div>

            <!-- Controles de Navegación Mejorados -->
            <div class="flex justify-between items-center">
              <button
                v-if="currentStep > 0"
                @click="prevStep"
                class="flex items-center space-x-2 px-6 py-3 text-gray-600 dark:text-gray-300 hover:text-brand-accent transition-all duration-200 rounded-xl hover:bg-brand-accent/5 font-medium"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span>Anterior</span>
              </button>
              <div v-else></div>

              <div class="flex space-x-3">
                <button
                  v-if="currentStep < formSteps.length - 1"
                  @click="nextStep"
                  :disabled="!formData[currentStepData.field]?.trim()"
                  class="group relative px-8 py-3 bg-brand-accent hover:bg-brand-accent-darker disabled:bg-surface-light disabled:dark:bg-surface-dark disabled:text-secondary-light disabled:dark:text-secondary-dark text-gray-900 rounded-xl transition-all duration-200 font-semibold disabled:cursor-not-allowed overflow-hidden"
                >
                  <span class="relative z-10 flex items-center space-x-2">
                    <span>Siguiente</span>
                    <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <!-- Efecto hover -->
                  <div class="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
                </button>
                
                <button
                  v-else
                  @click="handleSubmit"
                  :disabled="!isFormValid || isSubmitting"
                  class="group relative px-8 py-3 bg-brand-accent hover:bg-brand-accent-darker disabled:bg-surface-light disabled:dark:bg-surface-dark disabled:text-secondary-light disabled:dark:text-secondary-dark text-gray-900 rounded-xl transition-all duration-200 font-semibold disabled:cursor-not-allowed overflow-hidden"
                >
                  <span class="relative z-10 flex items-center space-x-2">
                    <span>{{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}</span>
                    <svg v-if="!isSubmitting" class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <div v-else class="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                  </span>
                  <!-- Efecto hover -->
                  <div class="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Transiciones */
.feedback-enter-active,
.feedback-leave-active {
  transition: all 0.5s ease;
}

.feedback-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.feedback-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.form-state-enter-active,
.form-state-leave-active {
  transition: all 0.6s ease;
}

.form-state-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.form-state-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Animaciones personalizadas */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Estados de entrada */
.contact-form-wrapper {
  transition: all 0.6s ease;
}

/* Animaciones personalizadas adicionales */
@keyframes breathe {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.1) rotate(2deg);
    opacity: 0.8;
  }
}

@keyframes softPulse {
  0%, 100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .contact-form-wrapper {
    @apply px-4;
  }
}

@media (max-width: 640px) {
  .contact-form-wrapper {
    @apply px-2;
  }
}

/* Mejoras de accesibilidad */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Estados de focus mejorados */
.form-input-active:focus-visible {
  @apply ring-4 ring-brand-accent/30;
}

/* Efectos de hover para botones */
button:hover:not(:disabled) {
  transform: translateY(-1px);
}

button:active:not(:disabled) {
  transform: translateY(0);
}
</style>