<script setup>
import { ref } from 'vue';
// import { supabase } from '@/lib/supabase.js';
import SectionWrapper from '@/components/SectionWrapper.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseTextarea from '@/components/BaseTextarea.vue';
import BaseButton from '@/components/BaseButton.vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const isLoading = ref(false);
const isSuccess = ref(false);
const errorMessage = ref('');

const handleSubmit = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  isSuccess.value = false;

  // Lógica de Supabase comentada para desarrollo sin backend
  console.log('Formulario enviado (simulación):', form.value);
  
  // Simular una respuesta exitosa
  setTimeout(() => {
    isLoading.value = false;
    isSuccess.value = true;
    form.value = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => isSuccess.value = false, 5000);
  }, 1000);

  // Simular un error (descomentar para probar)
  /*
  setTimeout(() => {
    isLoading.value = false;
    errorMessage.value = 'Hubo un problema simulado al enviar tu mensaje.';
    setTimeout(() => errorMessage.value = '', 5000);
  }, 1000);
  */
};
</script>

<template>
  <div>
    <SectionWrapper class="pt-24 pb-16 md:pt-32 md:pb-24">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-primary-light dark:text-primary-dark mb-4">
            ¿Tienes algo en mente?
          </h1>
          <p class="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark">
            Me encantaría escucharte. Ya sea una idea, un proyecto o simplemente para saludar, este es el lugar.
          </p>
        </div>

        <div class="mt-12 max-w-2xl mx-auto">
          <div class="bg-surface-light dark:bg-surface-dark p-8 sm:p-12 rounded-2xl border border-border-light dark:border-border-dark shadow-lg">
            <form @submit.prevent="handleSubmit">
              <div class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <BaseInput id="name" label="Nombre" placeholder="Tu nombre" v-model="form.name" required />
                  <BaseInput id="email" type="email" label="Email" placeholder="tu@email.com" v-model="form.email" required />
                </div>
                <BaseInput id="subject" label="Asunto" placeholder="Asunto del mensaje" v-model="form.subject" required />
                <BaseTextarea id="message" label="Mensaje" placeholder="Tu mensaje..." :rows="6" v-model="form.message" required />
              </div>
              <div class="mt-8">
                <BaseButton type="submit" class="w-full" size="lg" :disabled="isLoading">
                  <span v-if="isLoading">Enviando...</span>
                  <span v-else>Enviar Mensaje</span>
                </BaseButton>
              </div>
            </form>
            <div v-if="isSuccess" class="mt-6 p-4 bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-100 rounded-lg text-center">
              <p>¡Gracias por tu mensaje! Te responderé lo antes posible.</p>
            </div>
            <div v-if="errorMessage" class="mt-6 p-4 bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-100 rounded-lg text-center">
              <p>{{ errorMessage }}</p>
            </div>
          </div>
        </div>
        

      </div>
    </SectionWrapper>
  </div>
</template>
