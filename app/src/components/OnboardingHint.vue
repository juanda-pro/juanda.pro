<script setup>
import { ref, onMounted } from 'vue';
import { XMarkIcon, ArrowUturnLeftIcon } from '@heroicons/vue/24/solid';

const HINT_KEY = 'juandapro_wiki_hint_dismissed_v1';
const showHint = ref(false);

onMounted(() => {
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    if (!localStorage.getItem(HINT_KEY)) {
      // Add a small delay to allow the main page to render
      setTimeout(() => {
        showHint.value = true;
      }, 500);
    }
  }
});

function dismissHint() {
  localStorage.setItem(HINT_KEY, 'true');
  showHint.value = false;
}
</script>

<template>
  <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="showHint" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-2xl ring-1 ring-black ring-opacity-5 border border-slate-200 dark:border-slate-700">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <ArrowUturnLeftIcon class="h-6 w-6 text-brand-accent" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-primary-light dark:text-primary-dark">¡Explora las notas!</p>
                <p class="mt-1 text-sm text-secondary-light dark:text-secondary-dark">Toca el botón del menú en el borde para navegar por el contenido.</p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button type="button" @click="dismissHint" class="inline-flex rounded-md bg-white dark:bg-slate-800 text-secondary-light dark:text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 dark:focus:ring-offset-slate-800">
                  <span class="sr-only">Cerrar</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
