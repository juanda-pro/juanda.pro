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
    <section class="contact-ideas mb-16">
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4">
          ¿No sabes por dónde empezar? Aquí tienes algunas ideas
        </h3>
      </div>
      
      <div class="space-y-8">
        <div 
          v-for="(idea, index) in contactIdeas" 
          :key="index"
          class="text-center"
        >
          <div class="inline-flex items-center justify-center mb-4">
            <span class="text-brand-accent text-2xl mr-2">{{ idea.icon }}</span>
            <strong class="text-lg text-primary-light dark:text-primary-dark">{{ idea.title }}</strong>
          </div>
          <p class="text-lg text-secondary-light dark:text-secondary-dark">
            {{ idea.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Quote Inspiracional -->
    <section class="contact-quote mb-16">
      <blockquote class="border-l-4 border-brand-accent pl-6 bg-surface-light/30 dark:bg-surface-dark/30 p-6 rounded-r-lg">
        <p class="text-xl italic text-secondary-light dark:text-secondary-dark leading-relaxed">
          "Prometo leer cada mensaje con atención y responder de forma honesta. 
          No soy un bot: soy yo, priorizando calidad sobre velocidad."
        </p>
      </blockquote>
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
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark">
          Otras formas de contacto
        </h3>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6">
        <a 
          v-for="(method, index) in contactMethods" 
          :key="index"
          :href="method.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group block p-6 bg-surface-light dark:bg-surface-dark rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="text-center">
            <div class="text-3xl mb-3 contact-icon">{{ method.icon }}</div>
            <h4 class="font-bold text-lg mb-2 text-primary-light dark:text-primary-dark">
              {{ method.title }}
            </h4>
            <p class="text-sm text-secondary-light dark:text-secondary-dark mb-2">
              {{ method.description }}
            </p>
            <p class="text-brand-accent font-medium">
              {{ method.value }}
            </p>
          </div>
        </a>
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