<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
import ArticleCard from '@/components/ArticleCard.vue';

const props = defineProps({
  suggestedArticle: {
    type: Object,
    default: null
  }
});

const showScrollButton = ref(false);

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- Separador decorativo -->
  <div class="py-12 flex justify-center">
    <div class="flex items-center space-x-4">
      <div class="h-px w-12 bg-brand-accent/30"></div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <div class="h-px w-12 bg-brand-accent/30"></div>
    </div>
  </div>
  
  <!-- Artículo Sugerido -->
  <SectionWrapper 
    v-if="suggestedArticle" 
    spacing="loose" 
    class="bg-surface-light dark:bg-surface-dark/50 rounded-lg"
  >
    <div class="text-center mb-8">
      <h2 class="text-2xl sm:text-3xl font-bold mb-2">Continúa explorando</h2>
      <p class="text-secondary-light dark:text-secondary-dark">Otro artículo que podría interesarte</p>
    </div>
    <div class="max-w-2xl mx-auto transform transition-transform hover:scale-[1.02] duration-300">
      <ArticleCard :article="suggestedArticle" />
    </div>
  </SectionWrapper>
  
  <!-- Botón para volver arriba -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-300 ease-in"
    enter-from-class="opacity-0 scale-75 translate-y-4"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-75 translate-y-4"
  >
    <div v-if="showScrollButton" class="fixed bottom-8 right-8 z-50">
      <button 
        @click="scrollToTop" 
        class="p-3 bg-brand-accent/90 hover:bg-brand-accent text-brand-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent focus:ring-offset-light dark:focus:ring-offset-dark"
        aria-label="Volver arriba"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  </Transition>
</template>

<style scoped>
/* Animaciones adicionales para el botón de scroll */
.fixed button {
  backdrop-filter: blur(8px);
}

.fixed button:hover {
  transform: translateY(-2px);
}

.fixed button:active {
  transform: translateY(0);
}
</style>