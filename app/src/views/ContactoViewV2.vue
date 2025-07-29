<script setup>
import { ref, nextTick } from 'vue';

// Importar componentes
import PageLayout from '@/components/PageLayout.vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
import HeroSection from '@/components/HeroSection.vue';
import ContactForm from '@/components/ContactForm.vue';
import ContactInfo from '@/components/ContactInfo.vue';

// Importar imagen de fondo
import HeaderBackground from '../assets/cabecera_inicio.jpeg';

// Referencias
const contactFormRef = ref(null);

// Función para hacer scroll al formulario
function scrollToForm() {
  const formElement = document.querySelector('[data-form-section]');
  if (formElement) {
    formElement.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start',
      inline: 'nearest'
    });
  }
}

// Función para manejar el botón CTA
function handleFormButton() {
  if (contactFormRef.value && !contactFormRef.value.isExpanded) {
    contactFormRef.value.expandForm();
    nextTick(() => {
      scrollToForm();
    });
  } else {
    scrollToForm();
  }
}

// Función para manejar la expansión del formulario
function handleFormExpand() {
  nextTick(() => {
    scrollToForm();
  });
}

// Función para manejar el envío del formulario
function handleFormSubmit(formData) {
  // TODO: Implementar lógica de envío real
  // Por ejemplo: await submitContactForm(formData);
  // Datos disponibles en formData: name, email, message
}
</script>

<template>
  <PageLayout :remove-padding-top="true">
    <!-- Hero Section -->
    <HeroSection
      title="Contacto"
      :background-image="HeaderBackground"
    >
      <template v-slot:subtitle>
        ¿Idea para automatizar un proceso? ¿Preguntas sobre iA?
      </template>
    </HeroSection>
    
    <!-- Introducción -->
    <SectionWrapper spacing="normal">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-primary-light dark:text-primary-dark mb-6">
          ¡Hablemos!
        </h2>
        <p class="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark leading-relaxed">
          Esta página es <strong>una invitación abierta a que contactes conmigo</strong>. Me apasiona ayudar a personas <em>a optimizar sus procesos</em>, ya sea en el trabajo, en un emprendimiento o en la vida diaria.
        </p>
      </div>
    </SectionWrapper>

    <!-- Formulario de Contacto -->
    <SectionWrapper spacing="normal" data-form-section>
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4">
            Escríbeme directamente
          </h3>
        </div>
        
        <ContactForm 
          ref="contactFormRef"
          @submit="handleFormSubmit"
          @expand="handleFormExpand"
        />
      </div>
    </SectionWrapper>

    <!-- Información de Contacto -->
    <SectionWrapper spacing="normal">
      <div class="max-w-4xl mx-auto">
        <ContactInfo />
      </div>
    </SectionWrapper>

    <!-- Cierre con CTA -->
    <SectionWrapper spacing="normal">
      <div class="text-center">
        <div class="max-w-2xl mx-auto space-y-6">
          <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark">
            Gracias
          </h3>
          
          <p class="text-xl text-secondary-light dark:text-secondary-dark">
            Cada conversación es una oportunidad de crear sinergias interesantes. ¡Espero tu mensaje!
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button 
              @click="handleFormButton()"
              class="inline-flex items-center px-6 py-3 bg-brand-accent hover:bg-brand-accent/90 text-gray-900 rounded-lg transition-all duration-200 font-medium hover:transform hover:-translate-y-1 hover:shadow-lg"
            >
              Escribir ahora
            </button>
            <span class="text-secondary-light dark:text-secondary-dark">o</span>
            <a 
              href="/blog" 
              class="inline-flex items-center px-6 py-3 bg-surface-light dark:bg-surface-dark hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 text-primary-light dark:text-primary-dark border border-border-light dark:border-border-dark rounded-lg transition-all duration-200 font-medium hover:transform hover:-translate-y-1 hover:shadow-lg"
            >
              Aprender más
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </PageLayout>
</template>

<style scoped>
/* Transiciones suaves para elementos interactivos */
button, a {
  transition: all 0.2s ease-in-out;
}

/* Hover effects mejorados */
button:hover:not(:disabled),
a:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Mejoras para móviles */
@media (max-width: 768px) {
  .flex.sm\:flex-row {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
