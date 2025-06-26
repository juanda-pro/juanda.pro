<template>
  <div class="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6 my-8">
    <h3 class="text-xl font-bold text-primary-light dark:text-primary-dark mb-4">Centro de Preferencias de Cookies</h3>
    <p class="text-secondary-light dark:text-secondary-dark mb-6">Aquí puedes revisar y ajustar tu configuración de cookies. Tu elección se guardará para futuras visitas.</p>
    
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <label for="essential-cookies" class="font-semibold text-primary-light dark:text-primary-dark">Cookies Esenciales</label>
        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input type="checkbox" name="essential-cookies" id="essential-cookies" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-surface-light border-4 appearance-none cursor-not-allowed" checked disabled>
          <label for="essential-cookies" class="toggle-label block overflow-hidden h-6 rounded-full bg-border-light cursor-not-allowed"></label>
        </div>
      </div>
      <p class="text-sm text-secondary-light dark:text-secondary-dark">Estas cookies son estrictamente necesarias para proporcionar los servicios disponibles a través de nuestro sitio web y para usar algunas de sus funciones. No se pueden desactivar.</p>

      <div class="border-t border-border-light dark:border-border-dark my-4"></div>

      <div class="flex items-center justify-between">
        <label for="analytics-cookies" class="font-semibold text-primary-light dark:text-primary-dark">Cookies de Análisis</label>
        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input type="checkbox" name="analytics-cookies" id="analytics-cookies" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-surface-light border-4 appearance-none cursor-pointer" v-model="analyticsEnabled">
          <label for="analytics-cookies" class="toggle-label block overflow-hidden h-6 rounded-full bg-border-light dark:bg-border-dark cursor-pointer"></label>
        </div>
      </div>
      <p class="text-sm text-secondary-light dark:text-secondary-dark">Estas cookies nos ayudan a entender cómo se está utilizando nuestro sitio web o qué tan efectivas son nuestras campañas de marketing.</p>
    </div>

    <div class="mt-6">
      <button @click="savePreferences" class="w-full bg-brand-accent text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
        Guardar mis preferencias
      </button>
    </div>
    <p v-if="showConfirmation" class="text-center text-sm text-green-600 dark:text-green-400 mt-4">¡Tus preferencias han sido guardadas!</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const analyticsEnabled = ref(true);
const showConfirmation = ref(false);

onMounted(() => {
  const savedPreference = localStorage.getItem('cookies_analytics');
  if (savedPreference !== null) {
    analyticsEnabled.value = JSON.parse(savedPreference);
  }
});

const savePreferences = () => {
  localStorage.setItem('cookies_analytics', JSON.stringify(analyticsEnabled.value));
  showConfirmation.value = true;
  setTimeout(() => {
    showConfirmation.value = false;
  }, 3000);
};
</script>

<style scoped>
.toggle-checkbox:checked {
  @apply right-0;
  border-color: theme('colors.accent-success');
}
.toggle-checkbox:checked + .toggle-label {
  background-color: theme('colors.accent-success');
}
</style>
