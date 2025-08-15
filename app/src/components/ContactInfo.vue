<script setup>
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

// Ideas para el contacto
const contactIdeas = [
  {
    icon: '→',
    title: 'Compartir feedback o ideas',
    description: '¿Has probado alguna de mis recomendaciones? Cuéntame cómo te fue, o sugiere temas para el blog.'
  },
  {
    icon: '→',
    title: 'Preguntas específicas',
    description: 'Sobre herramientas, IA, o procesos que quieras mejorar.'
  },
  {
    icon: '→',
    title: 'Colaboraciones o servicios',
    description: 'Si necesitas ayuda personalizada, como diseñar una automatización a medida para tu equipo o empresa, escríbeme sin dudarlo. Siempre empiezo con un diagnóstico gratuito para ver si encajamos.'
  },
  {
    icon: '→',
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

];
</script>

<template>
  <div class="contact-info">
    <!-- Sección de Ideas -->
    <section class="contact-ideas mb-16">
      <div class="text-center mb-12">
        <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4">
          ¿Aún no te animas? Aquí tienes algunas ideas
        </h3>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div 
          v-for="(idea, index) in contactIdeas" 
          :key="index"
          class="bg-surface-light/50 dark:bg-surface-dark/50 p-6 rounded-xl border border-accent-primary-light/20 dark:border-accent-primary-dark/20 hover:border-accent-primary-light/40 dark:hover:border-accent-primary-dark/40 transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-8 h-8 bg-accent-primary-light/10 dark:bg-accent-primary-dark/10 rounded-full flex items-center justify-center">
              <span class="text-accent-primary-light dark:text-accent-primary-dark text-lg font-bold">{{ index + 1 }}</span>
            </div>
            <div class="flex-1">
              <h4 class="font-semibold text-lg text-primary-light dark:text-primary-dark mb-2">
                {{ idea.title }}
              </h4>
              <p class="text-secondary-light dark:text-secondary-dark leading-relaxed">
                {{ idea.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Sección de Expectativas -->
    <section class="contact-expectations mb-16">
      <div class="text-center mb-12">
        <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark">
          A tener en cuenta
        </h3>
      </div>
      
      <div class="flex flex-col md:flex-row gap-8 max-w-3xl mx-auto">
        <div 
          v-for="(expectation, index) in expectations" 
          :key="index"
          class="flex-1 bg-surface-light dark:bg-surface-dark p-8 rounded-xl border border-accent-primary-light/10 dark:border-accent-primary-dark/10 transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:border-accent-primary-light/30 dark:hover:border-accent-primary-dark/30 animate-fade-in-up"
          :style="{ 'animation-delay': expectation.delay }"
        >
          <div class="text-center">
            <div class="w-12 h-12 bg-accent-primary-light/10 dark:bg-accent-primary-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-accent-primary-light dark:text-accent-primary-dark text-xl font-bold">{{ index + 1 }}</span>
            </div>
            <h4 class="font-bold text-xl mb-3 text-primary-light dark:text-primary-dark">
              {{ expectation.title }}
            </h4>
            <p class="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed">
              {{ expectation.description }}
            </p>
          </div>
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

/* Animaciones de los iconos de contacto */
.contact-icon {
  transition: transform 0.3s ease;
}

.group:hover .contact-icon {
  transform: scale(1.1) rotate(5deg);
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