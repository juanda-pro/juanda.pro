<script setup>
import { onMounted, onUnmounted } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import BaseButton from '@/components/BaseButton.vue';

const props = defineProps({
  resource: {
    type: Object,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};

const onKeydown = (e) => {
  if (e.key === 'Escape') {
    close();
  }
};

onMounted(() => {
  document.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown);
});
</script>

<template>
  <teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
        @click.self="close"
      ></div>
    </transition>

    <transition
      enter-active-class="transition ease-out duration-300 transform"
      enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100 translate-y-0 sm:scale-100"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center" @click.self="close">
        <div class="relative bg-surface-light dark:bg-surface-dark w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col overflow-hidden mx-4">
          <!-- Header -->
          <div class="flex-shrink-0 px-6 py-4 border-b border-border-light dark:border-border-dark flex items-center justify-between">
            <h3 class="text-xl font-semibold text-primary-light dark:text-primary-dark">{{ resource.title }}</h3>
            <button @click="close" class="p-1 rounded-full text-secondary-light dark:text-secondary-dark hover:bg-surface-accent-light dark:hover:bg-surface-accent-dark">
              <XMarkIcon class="h-6 w-6" />
            </button>
          </div>

          <!-- Content -->
          <div class="flex-grow p-6 overflow-y-auto">
            <p class="text-secondary-light dark:text-secondary-dark mb-6">{{ resource.description }}</p>
            <h4 class="text-lg font-semibold text-primary-light dark:text-primary-dark mb-4">Detalles del Recurso</h4>
            <div class="prose dark:prose-invert max-w-none prose-p:text-secondary-light dark:prose-p:text-secondary-dark">
              <p>Aquí se mostraría una descripción más detallada del recurso, incluyendo casos de uso, guías de implementación o cualquier otra información relevante que aporte valor al usuario.</p>
              <p>El objetivo es proporcionar contexto suficiente para que el usuario entienda cómo y por qué este recurso puede serle útil en sus propios proyectos.</p>
            </div>
          </div>

          <!-- Footer -->
          <div class="flex-shrink-0 px-6 py-4 border-t border-border-light dark:border-border-dark bg-surface-accent-light dark:bg-surface-deeper-dark">
            <BaseButton :to="resource.url" target="_blank" rel="noopener noreferrer" class="w-full">
              {{ resource.buttonText }}
            </BaseButton>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
