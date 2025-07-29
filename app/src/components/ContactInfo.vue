<script setup>
// Información de contacto alternativa
const contactMethods = [
  {
    title: 'Email directo',
    description: 'Para consultas rápidas',
    value: 'hola@juanda.pro',
    href: 'mailto:hola@juanda.pro',
    type: 'email'
  },
  {
    title: 'LinkedIn',
    description: 'Conectemos profesionalmente',
    value: '/in/juandavidpro',
    href: 'https://linkedin.com/in/juandavidpro',
    type: 'linkedin'
  },
  {
    title: 'Twitter',
    description: 'Sígueme para contenido diario',
    value: '@juandavidpro',
    href: 'https://twitter.com/juandavidpro',
    type: 'twitter'
  }
];

// Ideas para el contacto
const contactIdeas = [
  {
    title: 'Compartir feedback o ideas',
    description: '¿Has probado alguna de mis recomendaciones? Cuéntame cómo te fue, o sugiere temas para el blog.'
  },
  {
    title: 'Preguntas específicas',
    description: 'Sobre herramientas, IA, o procesos que quieras mejorar.'
  },
  {
    title: 'Colaboraciones o servicios',
    description: 'Si necesitas ayuda personalizada, como diseñar una automatización a medida para tu equipo o empresa, escríbeme sin dudarlo. Siempre empiezo con un diagnóstico gratuito para ver si encajamos.'
  },
  {
    title: 'Simplemente saludar',
    description: 'Si compartes mi pasión por entender y aprender a usar bien la tecnología, será un placer charlar contigo.'
  }
];

// Expectativas de respuesta
const expectations = [
  {
    title: 'Respuesta',
    description: 'En 24-48 horas; si es complejo, te aviso.',
    delay: '0.1s'
  },
  {
    title: 'Privacidad',
    description: 'Solo uso tus datos para responder.',
    delay: '0.2s'
  },
  {
    title: 'Alternativas',
    description: 'Formulario en está página, email, LinkedIn e Instagram.',
    delay: '0.3s'
  }
];
</script>

<template>
  <div class="contact-info">
    <!-- Sección de Ideas -->
    <section class="contact-ideas mb-20">
      <div class="text-center mb-12">
        <h3 class="text-2xl md:text-3xl font-bold text-primary-light dark:text-primary-dark mb-4">
          ¿Aún no te animas? Aquí tienes algunas ideas
        </h3>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div 
            v-for="(idea, index) in contactIdeas" 
            :key="index"
            class="group relative"
          >
            <div class="flex flex-col h-full">
              <h4 class="text-xl font-semibold text-primary-light dark:text-primary-dark mb-3 group-hover:text-brand-accent transition-colors duration-300">
                {{ idea.title }}
              </h4>
              <p class="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed">
                {{ idea.description }}
              </p>
            </div>
            <!-- Línea decorativa -->
            <div class="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-brand-accent/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>



    <!-- Sección de Expectativas -->
    <section class="contact-expectations mb-16">
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark">
          A tener en cuenta
        </h3>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(expectation, index) in expectations" 
          :key="index"
          class="bg-surface-light dark:bg-surface-dark p-6 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 animate-fade-in-up"
          :style="{ 'animation-delay': expectation.delay }"
        >
          <h4 class="font-bold text-lg mb-2 text-primary-light dark:text-primary-dark">
            {{ expectation.title }}
          </h4>
          <p class="text-lg text-secondary-light dark:text-secondary-dark">
            {{ expectation.description }}
          </p>
        </div>
      </div>
      
      <div class="mt-8 text-center">
        <p class="text-lg text-secondary-light dark:text-secondary-dark">
          Encuéntrame en LinkedIn (@juandapro) o Instagram (@juandapro), pero el email o el formulario son lo mejor para conversaciones profundas.
        </p>
      </div>
    </section>

    <!-- Métodos de Contacto Alternativos -->
    <section class="contact-methods" v-if="contactMethods.length > 0">
      <div class="text-center mb-12">
        <h3 class="text-2xl md:text-3xl font-bold text-primary-light dark:text-primary-dark">
          Otras formas de contacto
        </h3>
        <p class="text-lg text-secondary-light dark:text-secondary-dark mt-4 max-w-2xl mx-auto">
          Elige el canal que más te convenga para iniciar nuestra conversación
        </p>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <div class="space-y-6">
          <a 
            v-for="(method, index) in contactMethods" 
            :key="index"
            :href="method.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center p-6 bg-gradient-to-r from-surface-light/50 to-surface-light/30 dark:from-surface-dark/50 dark:to-surface-dark/30 backdrop-blur-sm border border-border-light/30 dark:border-border-dark/30 rounded-xl hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <div class="flex-shrink-0 mr-6">
              <div class="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors duration-300">
                <div class="w-6 h-6 bg-brand-accent rounded-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div class="flex-grow">
              <h4 class="font-bold text-xl mb-1 text-primary-light dark:text-primary-dark group-hover:text-brand-accent transition-colors duration-300">
                {{ method.title }}
              </h4>
              <p class="text-secondary-light dark:text-secondary-dark mb-2">
                {{ method.description }}
              </p>
              <p class="text-brand-accent font-medium text-lg">
                {{ method.value }}
              </p>
            </div>
            <div class="flex-shrink-0 ml-4">
              <div class="w-8 h-8 text-secondary-light dark:text-secondary-dark group-hover:text-brand-accent group-hover:translate-x-1 transition-all duration-300">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-full h-full">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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

/* Animaciones suaves para elementos interactivos */
.group {
  transition: all 0.3s ease;
}

/* Mejoras para móviles */
@media (max-width: 768px) {
  .grid.md\:grid-cols-3 {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

/* Transiciones suaves */
a, button {
  transition: all 0.2s ease-in-out;
}
</style>