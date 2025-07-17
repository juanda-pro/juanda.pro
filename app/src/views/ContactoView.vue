<script setup>
import PageLayout from '@/components/PageLayout.vue';
import PageHeader from '@/components/PageHeader.vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
import { ref, onMounted } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const handleSubmit = () => {
  // Aquí se podría añadir la lógica para enviar el formulario
  console.log('Formulario enviado:', formData.value);
  alert('Mensaje enviado. ¡Gracias por conectar!');
};

onMounted(() => {
  document.querySelectorAll('.fade-in-element').forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 100 * (index + 1));
  });
});
</script>

<template>
  <PageLayout>
    <!-- Header -->
    <SectionWrapper spacing="tight">
      <PageHeader subtitle="¿Idea para automatizar un proceso? ¿Preguntas sobre iA? Escríbeme sin compromiso, estaré encantado de charlar.">
        Contacto
      </PageHeader>
    </SectionWrapper>

    <!-- Introducción -->
    <SectionWrapper spacing="loose">
      <div class="max-w-3xl mx-auto text-center prose prose-lg lg:prose-xl dark:prose-invert text-secondary-light dark:text-secondary-dark fade-in-element">
        <p>
          Hola, soy Juanda. Esta página es una invitación abierta a contactar conmigo. Me apasiona ayudar a personas a optimizar sus procesos, ya sea en el trabajo, en un emprendimiento o en la vida diaria.
        </p>
        <p>
          Si has explorado el sitio y algo te resuena —como una automatización que podrías necesitar o una reflexión sobre herramientas prácticas—, no dudes en escribirme.
        </p>
      </div>
    </SectionWrapper>

    <!-- Formulario y Sección de Ideas -->
    <SectionWrapper>
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <!-- Columna del Formulario -->
        <div class="bg-surface-light dark:bg-surface-dark p-8 rounded-lg shadow-md fade-in-element delay-100">
          <h3 class="text-2xl font-bold font-heading text-primary-light dark:text-primary-dark mb-6">Escríbeme directamente</h3>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-secondary-light dark:text-secondary-dark">Nombre</label>
              <input type="text" id="name" v-model="formData.name" required class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-secondary-light dark:text-secondary-dark">Email</label>
              <input type="email" id="email" v-model="formData.email" required class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-secondary-light dark:text-secondary-dark">Mensaje</label>
              <textarea id="message" v-model="formData.message" rows="4" required class="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent"></textarea>
            </div>
            <div>
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-accent hover:bg-brand-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-colors">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>

        <!-- Columna de Ideas -->
        <div class="prose dark:prose-invert fade-in-element delay-200">
          <h3 class="text-2xl font-bold font-heading text-primary-light dark:text-primary-dark mb-4">¿Aún no te animas? Aquí tienes algunas ideas</h3>
          <ul class="list-none p-0 space-y-4">
            <li class="flex items-start">
              <span class="text-brand-accent mr-3 mt-1">→</span>
              <span><strong>Compartir ideas o feedback:</strong> ¿Has probado alguna de mis recomendaciones? Cuéntame cómo te fue, o sugiere temas para el blog.</span>
            </li>
            <li class="flex items-start">
              <span class="text-brand-accent mr-3 mt-1">→</span>
              <span><strong>Preguntas específicas:</strong> Sobre scripts, iA o procesos administrativos que quieres mejorar.</span>
            </li>
            <li class="flex items-start">
              <span class="text-brand-accent mr-3 mt-1">→</span>
              <span><strong>Colaboraciones o servicios:</strong> Si necesitas ayuda personalizada, como diseñar una automatización a medida para tu equipo o empresa, escríbeme sin dudarlo. Siempre empiezo con un diagnóstico gratuito para ver si encajamos.</span>
            </li>
            <li class="flex items-start">
              <span class="text-brand-accent mr-3 mt-1">→</span>
              <span><strong>Simplemente saludar:</strong> Si compartes mi pasión por entender y aprender a usar bien la tecnología, será un placer charlar contigo.</span>
            </li>
          </ul>
          <p class="mt-6 italic">Prometo leer cada mensaje con atención y responder de forma honesta. No soy un bot: soy yo, priorizando calidad sobre velocidad.</p>
        </div>
      </div>
    </SectionWrapper>

    <!-- Sección de Expectativas -->
    <SectionWrapper spacing="loose">
      <div class="max-w-4xl mx-auto text-center fade-in-element delay-300">
        <h3 class="text-2xl font-bold font-heading text-primary-light dark:text-primary-dark mb-6">A tener en cuenta</h3>
        <div class="grid md:grid-cols-3 gap-8 text-secondary-light dark:text-secondary-dark">
          <div class="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
            <h4 class="font-bold text-lg mb-2">Respuesta</h4>
            <p>En 24-48 horas; si es complejo, te aviso.</p>
          </div>
          <div class="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
            <h4 class="font-bold text-lg mb-2">Privacidad</h4>
            <p>Solo uso tus datos para responder.</p>
          </div>
          <div class="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
            <h4 class="font-bold text-lg mb-2">Alternativas</h4>
            <p>Email: hola@juanda.pro o redes sociales.</p>
          </div>
        </div>
        <p class="mt-8 italic">Si prefieres redes, encuéntrame en LinkedIn (@juandapro) o instagram (@juandapro), pero el email o el formulario son lo mejor para conversaciones profundas.</p>
      </div>
    </SectionWrapper>

    <!-- Cierre -->
    <SectionWrapper spacing="tight">
      <div class="text-center fade-in-element delay-400">
        <p class="text-xl italic text-secondary-light dark:text-secondary-dark">Gracias por conectar. Cada conversación es una oportunidad de crear sinergias interesantes. ¡Espero tu mensaje!</p>
      </div>
    </SectionWrapper>

  </PageLayout>
</template>

<style scoped>
.fade-in-element {
  opacity: 0;
  transform: translateY(1rem);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-in-element.visible {
  opacity: 1;
  transform: translateY(0);
}

.delay-100 { transition-delay: 100ms; }
.delay-200 { transition-delay: 200ms; }
.delay-300 { transition-delay: 300ms; }
.delay-400 { transition-delay: 400ms; }
</style>
