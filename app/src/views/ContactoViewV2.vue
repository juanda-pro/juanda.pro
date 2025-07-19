<script setup>
import { ref, reactive, computed } from 'vue';

// Importar componentes
import PageLayout from '@/components/PageLayout.vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
import IntroCard from '@/components/IntroCard.vue';
import PageHeader from '@/components/PageHeader.vue';


// Estado del formulario desplegable
const isFormExpanded = ref(false);
const isSubmitting = ref(false);
const submitStatus = ref(null); // 'success', 'error', null
const currentStep = ref(0); // 0: name, 1: email, 2: message

// Datos del formulario (simplificado a 3 campos)
const formData = reactive({
  name: '',
  email: '',
  message: ''
});

// Configuración de pasos del formulario (solo 3 campos)
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

// Computed para el paso actual
const currentStepData = computed(() => formSteps[currentStep.value] || null);

// Función para expandir el formulario
function expandForm() {
  isFormExpanded.value = true;
  currentStep.value = 0;
  setTimeout(() => {
    const input = document.querySelector('.form-input-active');
    if (input) input.focus();
  }, 300);
}

// Función para hacer scroll al formulario
function scrollToForm() {
  const formElement = document.querySelector('[data-form-section]');
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Función combinada para manejar el botón CTA
function handleFormButton() {
  if (!isFormExpanded.value) {
    expandForm();
  } else {
    scrollToForm();
  }
}

// Función para avanzar al siguiente paso
function nextStep() {
  if (currentStep.value < formSteps.length - 1) {
    currentStep.value++;
    setTimeout(() => {
      const input = document.querySelector('.form-input-active');
      if (input) input.focus();
    }, 100);
  }
}

// Función para retroceder un paso
function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--;
    setTimeout(() => {
      const input = document.querySelector('.form-input-active');
      if (input) input.focus();
    }, 100);
  }
}

// Función para manejar Enter
function handleEnter() {
  if (currentStepData.value && formData[currentStepData.value.field].trim()) {
    if (currentStep.value < formSteps.length - 1) {
      nextStep();
    } else {
      handleSubmit();
    }
  }
}

// Función para enviar el formulario
async function handleSubmit() {
  if (!isFormValid.value) return;
  
  isSubmitting.value = true;
  
  try {
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Formulario enviado:', formData);
    submitStatus.value = 'success';
    
    // Reset form
    Object.keys(formData).forEach(key => {
      formData[key] = '';
    });
    isFormExpanded.value = false;
    currentStep.value = 0;
    
  } catch (error) {
    console.error('Error:', error);
    submitStatus.value = 'error';
  } finally {
    isSubmitting.value = false;
    setTimeout(() => {
      submitStatus.value = null;
    }, 5000);
  }
}

// Validación del formulario
const isFormValid = computed(() => {
  return formSteps.every(step => 
    !step.required || formData[step.field].trim().length > 0
  );
});

// Progreso del formulario
const formProgress = computed(() => {
  if (!isFormExpanded.value) return 0;
  return ((currentStep.value + 1) / formSteps.length) * 100;
});

// Información de contacto alternativa
const contactMethods = [
  {
    icon: '📧',
    title: 'Email directo',
    description: 'Para consultas rápidas',
    value: 'hola@juanda.pro',
    href: 'mailto:hola@juanda.pro',
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    description: 'Conectemos profesionalmente',
    value: '/in/juandavidpro',
    href: 'https://linkedin.com/in/juandavidpro',
    color: 'bg-blue-700/10 text-blue-700 dark:text-blue-300'
  },
  {
    icon: '🐦',
    title: 'Twitter',
    description: 'Sígueme para contenido diario',
    value: '@juandavidpro',
    href: 'https://twitter.com/juandavidpro',
    color: 'bg-sky-500/10 text-sky-600 dark:text-sky-400'
  }
];
</script>

<template>
  <PageLayout>
    <!-- Hero Section -->
    <SectionWrapper spacing="normal">
      <IntroCard>
        <PageHeader subtitle="¿Idea para automatizar un proceso? ¿Preguntas sobre iA? Escríbeme sin compromiso.">
          Contacto
        </PageHeader>
      </IntroCard>
    </SectionWrapper>
    
    <!-- Introducción -->
    <SectionWrapper spacing="normal">
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <p class="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark leading-relaxed">
          Esta página es una invitación abierta a que contactes conmigo. Me apasiona ayudar a personas a optimizar sus procesos, ya sea en el trabajo, en un emprendimiento o en la vida diaria.
        </p>
        
        <p class="text-xl text-secondary-light dark:text-secondary-dark leading-relaxed">
          Si has explorado el sitio y algo te ronda la cabeza <em>como una automatización</em> que quieras implementar o si tienes curiosidad sobre herramientas prácticas, no dudes en escribirme.
        </p>
      </div>
    </SectionWrapper>

    <!-- Sección de Ideas -->
    <SectionWrapper spacing="normal">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4">
            ¿Aún no te animas? Aquí tienes algunas ideas
          </h3>
        </div>
        
        <div class="space-y-6">
          <div class="flex items-start">
            <span class="text-brand-accent mr-4 mt-1 text-xl">→</span>
            <div>
              <strong class="text-lg text-primary-light dark:text-primary-dark">Compartir ideas o feedback:</strong>
              <p class="text-lg text-secondary-light dark:text-secondary-dark mt-1">
                ¿Has probado alguna de mis recomendaciones? Cuéntame cómo te fue, o sugiere temas para el blog.
              </p>
            </div>
          </div>
          
          <div class="flex items-start">
            <span class="text-brand-accent mr-4 mt-1 text-xl">→</span>
            <div>
              <strong class="text-lg text-primary-light dark:text-primary-dark">Preguntas específicas:</strong>
              <p class="text-lg text-secondary-light dark:text-secondary-dark mt-1">
                Sobre scripts, iA o procesos administrativos que quieres mejorar.
              </p>
            </div>
          </div>
          
          <div class="flex items-start">
            <span class="text-brand-accent mr-4 mt-1 text-xl">→</span>
            <div>
              <strong class="text-lg text-primary-light dark:text-primary-dark">Colaboraciones o servicios:</strong>
              <p class="text-lg text-secondary-light dark:text-secondary-dark mt-1">
                Si necesitas ayuda personalizada, como diseñar una automatización a medida para tu equipo o empresa, 
                escríbeme sin dudarlo. Siempre empiezo con un diagnóstico gratuito para ver si encajamos.
              </p>
            </div>
          </div>
          
          <div class="flex items-start">
            <span class="text-brand-accent mr-4 mt-1 text-xl">→</span>
            <div>
              <strong class="text-lg text-primary-light dark:text-primary-dark">Simplemente saludar:</strong>
              <p class="text-lg text-secondary-light dark:text-secondary-dark mt-1">
                Si compartes mi pasión por entender y aprender a usar bien la tecnología, será un placer charlar contigo.
              </p>
            </div>
          </div>
        </div>
        
        <div class="mt-8 p-6 bg-surface-light/50 dark:bg-surface-dark/50 rounded-lg">
          <p class="text-lg italic text-secondary-light dark:text-secondary-dark text-center">
            Prometo leer cada mensaje con atención y responder de forma honesta. 
            No soy un bot: soy yo, priorizando calidad sobre velocidad.
          </p>
        </div>
      </div>
    </SectionWrapper>

    <!-- Formulario -->
    <SectionWrapper spacing="normal" data-form-section>
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4">
            Escríbeme directamente
          </h3>
        </div>
        
        <!-- Estado de Éxito -->
        <div v-if="submitStatus === 'success'" class="mb-6">
          <div class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center">
            <p class="text-green-800 dark:text-green-200">Mensaje enviado. ¡Gracias por conectar!</p>
          </div>
        </div>

        <!-- Estado de Error -->
        <div v-if="submitStatus === 'error'" class="mb-6">
          <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-center">
            <p class="text-red-800 dark:text-red-200">Error al enviar. Inténtalo de nuevo.</p>
          </div>
        </div>

        <!-- Formulario Principal -->
        <div class="bg-surface-light dark:bg-surface-dark p-8 rounded-lg shadow-md">
          <!-- Placeholder Inicial -->
          <div v-if="!isFormExpanded" class="text-center">
            <input
              type="text"
              placeholder="Escríbeme desde aquí"
              readonly
              @click="expandForm"
              class="w-full px-4 py-4 text-lg bg-surface-light dark:bg-surface-dark border-2 border-border-light dark:border-border-dark rounded-lg text-center cursor-pointer transition-all duration-300 hover:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent text-primary-light dark:text-primary-dark placeholder:text-secondary-light dark:placeholder:text-secondary-dark"
            >
            <p class="text-sm text-secondary-light dark:text-secondary-dark mt-2">
              Haz clic para empezar a escribir tu mensaje
            </p>
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
              <div v-if="currentStepData?.type === 'textarea'">
                <textarea
                  v-model="formData[currentStepData.field]"
                  :placeholder="currentStepData.placeholder"
                  @keydown.enter.prevent="handleEnter"
                  class="form-input-active w-full px-4 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent placeholder-secondary-light dark:placeholder-secondary-dark text-primary-light dark:text-primary-dark resize-none"
                  rows="4"
                ></textarea>
              </div>
              <div v-else>
                <input
                  v-model="formData[currentStepData.field]"
                  :type="currentStepData.type"
                  :placeholder="currentStepData.placeholder"
                  @keydown.enter="handleEnter"
                  class="form-input-active w-full px-4 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent placeholder-secondary-light dark:placeholder-secondary-dark text-primary-light dark:text-primary-dark"
                >
              </div>
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
    </SectionWrapper>

    <!-- Sección de Expectativas -->
    <SectionWrapper spacing="normal">
      <div class="max-w-4xl mx-auto text-center">
        <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark mb-8">
          A tener en cuenta
        </h3>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-surface-light dark:bg-surface-dark p-6 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 animate-fade-in-up" style="animation-delay: 0.1s;">
            <h4 class="font-bold text-lg mb-2 text-primary-light dark:text-primary-dark">Respuesta</h4>
            <p class="text-lg text-secondary-light dark:text-secondary-dark">En 24-48 horas; si es complejo, te aviso.</p>
          </div>
          <div class="bg-surface-light dark:bg-surface-dark p-6 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 animate-fade-in-up" style="animation-delay: 0.2s;">
            <h4 class="font-bold text-lg mb-2 text-primary-light dark:text-primary-dark">Privacidad</h4>
            <p class="text-lg text-secondary-light dark:text-secondary-dark">Solo uso tus datos para responder.</p>
          </div>
          <div class="bg-surface-light dark:bg-surface-dark p-6 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 animate-fade-in-up" style="animation-delay: 0.3s;">
            <h4 class="font-bold text-lg mb-2 text-primary-light dark:text-primary-dark">Alternativas</h4>
            <p class="text-lg text-secondary-light dark:text-secondary-dark">Formulario en está página, emal, Linkn e instagram.</p>
          </div>
        </div>
        
        <div class="mt-8">
          <p class="text-lg text-secondary-light dark:text-secondary-dark">
            Encuéntrame en LinkedIn (@juandapro) o instagram (@juandapro), pero el email o el formulario son lo mejor para conversaciones profundas.
          </p>
        </div>
      </div>
    </SectionWrapper>

    <!-- Cierre con texto original -->
    <SectionWrapper spacing="normal">
      <div class="text-center">
        <div class="max-w-2xl mx-auto space-y-6">
          <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark">
            ¿Listo para empezar?
          </h3>
          
          <p class="text-xl text-secondary-light dark:text-secondary-dark">
            Gracias por conectar. Cada conversación es una oportunidad de crear sinergias interesantes. ¡Espero tu mensaje!
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button 
              @click="handleFormButton()"
              class="inline-flex items-center px-6 py-3 bg-brand-accent hover:bg-brand-accent/90 text-gray-900 rounded-lg transition-all duration-200 font-medium"
            >
              Escribir mensaje ahora
            </button>
            <span class="text-secondary-light dark:text-secondary-dark">o</span>
            <a 
              href="/blog" 
              class="inline-flex items-center px-6 py-3 bg-surface-light dark:bg-surface-dark hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 text-primary-light dark:text-primary-dark border border-border-light dark:border-border-dark rounded-lg transition-all duration-200 font-medium"
            >
              Lee mi blog primero
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>

  </PageLayout>
</template>

<style scoped>
/* Animaciones de entrada suaves */
.fade-in-element {
  opacity: 0;
  transform: translateY(1rem);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-in-element.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Estilos específicos del formulario desplegable */
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

/* Animación para las cajas de expectativas */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Mejoras de accesibilidad y focus */
.form-input-active:focus {
  box-shadow: 0 0 0 4px rgba(var(--brand-accent-rgb), 0.15);
}

/* Transiciones suaves para todos los elementos interactivos */
button, input, textarea, a {
  transition: all 0.2s ease-in-out;
}

/* Hover effects mejorados */
button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Estados disabled mejorados */
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

/* Animación de la barra de progreso */
.progress-bar {
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mejoras para móviles */
@media (max-width: 768px) {
  .form-input-active {
    font-size: 16px; /* Evita zoom en iOS */
  }
  
  .grid.md\:grid-cols-3 {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

/* Animaciones de los iconos de contacto */
.contact-icon {
  transition: transform 0.3s ease;
}

.group:hover .contact-icon {
  transform: scale(1.1) rotate(5deg);
}

/* Efectos de glassmorphism sutil */
.glass-effect {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Mejoras de contraste para modo oscuro */
@media (prefers-color-scheme: dark) {
  .form-input-active {
    background: rgba(var(--surface-dark-rgb), 0.8);
    border-color: rgba(var(--brand-accent-rgb), 0.4);
  }
  
  .form-input-active:focus {
    background: rgba(var(--surface-dark-rgb), 0.9);
    border-color: var(--brand-accent);
  }
}

/* Animaciones de carga */
.loading-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Mejoras tipográficas */
.form-input-active::placeholder {
  font-weight: 400;
  opacity: 0.7;
}

/* Estados de validación visual */
.form-input-active:valid {
  border-color: rgba(34, 197, 94, 0.5);
}

.form-input-active:invalid:not(:placeholder-shown) {
  border-color: rgba(239, 68, 68, 0.5);
}
</style>
