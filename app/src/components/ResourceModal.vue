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
        <div class="relative bg-white dark:bg-gray-900 w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col overflow-hidden mx-4">
          <!-- Header -->
          <div class="flex-shrink-0 px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <h3 class="text-lg font-semibold font-serif text-primary-light dark:text-primary-dark">{{ resource.title }}</h3>
            <button @click="close" class="p-1 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
              <XMarkIcon class="h-6 w-6" />
            </button>
          </div>

          <!-- Content -->
          <div class="flex-grow p-6 overflow-y-auto">
            <p class="text-secondary-light dark:text-secondary-dark mb-6">{{ resource.description }}</p>
            <h4 class="font-semibold text-primary-light dark:text-primary-dark mb-4">Detalles del Recurso</h4>
            <div class="prose dark:prose-invert max-w-none prose-p:text-secondary-light dark:prose-p:text-secondary-dark">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.</p>
              <p>Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Sorbi et per conubia nostra, per inceptos hymenaeos. Cras ut magna. Vivamus aliquet elit ac nisl. Fusce mollis tristique sem. Sed eu eros. Nam consequat dolor vitae enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis ante. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</p>
              <p>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc. Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna. Ut aliquam sollicitudin leo. Cras faucibus, purus vitae vestibulum aliquet, magna lorem consequat enim, sit amet viverra justo diam ac lorem. Curabitur pulvinar, lorem id consectetuer feugiat, enim est Graduation, turpis risus egestas quam, ut porttitor sapien quam quis dui. Cras vitae felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent eu turpis. In hac habitasse platea dictumst. Maecenas ut magna. Cras vulputate, felis quis varius laoreet, turpis est commodo enim, vitae sollicitudin turpis est sit amet turpis.</p>
            </div>
          </div>

          <!-- Footer -->
          <div class="flex-shrink-0 px-6 py-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <BaseButton :to="resource.url" target="_blank" rel="noopener noreferrer" class="w-full">
              {{ resource.buttonText }}
            </BaseButton>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
