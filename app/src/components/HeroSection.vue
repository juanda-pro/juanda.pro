<script setup lang="ts">
import { computed, useSlots } from 'vue';
import SectionWrapper from './SectionWrapper.vue';

interface Props {
  title: string;

  backgroundImage: string;
  animatedText?: string;
  animatedTextClass?: string;
}

const slots = useSlots();

const props = withDefaults(defineProps<Props>(), {
  animatedTextClass: 'text-brand-accent animate-pulse'
});

// Computed para procesar título con texto animado
const processedTitle = computed(() => {
  if (!props.animatedText) return null;
  
  const parts = props.title.split(props.animatedText);
  return {
    before: parts[0] || '',
    animated: props.animatedText,
    after: parts[1] || ''
  };
});
</script>

<template>
  <SectionWrapper 
    spacing="none" 
    class="relative text-white overflow-hidden min-h-[80vh] flex flex-col justify-center pt-20 py-12 md:py-24"
  >
    <!-- Imagen de fondo con overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        :src="backgroundImage" 
        :alt="`Imagen de fondo para ${title}`" 
        class="w-full h-full object-cover object-center"
        loading="eager"
      />
      <!-- Overlay dual para contraste claro/oscuro -->
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-black/10 dark:from-black/80 dark:via-black/50"></div>
    </div>

    <!-- Contenido centrado -->
    <div class="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-black/30 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl ring-1 ring-white/10">
        <!-- Título con animación de entrada -->
        <Transition
          appear
          enter-from-class="opacity-0 scale-95"
          enter-active-class="transition-all duration-700 ease-out"
        >
          <h1 class="text-center text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            <template v-if="animatedText && processedTitle">
              {{ processedTitle.before }}<span :class="animatedTextClass">{{ processedTitle.animated }}</span>{{ processedTitle.after }}
            </template>
            <template v-else>{{ title }}</template>
          </h1>
        </Transition>

        <!-- Subtítulo con animación -->
        <!-- Subtítulo con animación (vía slot) -->
        <Transition
          appear
          enter-from-class="opacity-0 translate-y-4"
          enter-active-class="transition-all duration-700 ease-out delay-300"
        >
          <div v-if="slots.subtitle" class="mt-6 text-center text-lg md:text-xl leading-relaxed text-gray-200/95 max-w-3xl mx-auto text-shadow-md">
            <slot name="subtitle"></slot>
          </div>
        </Transition>
      </div>
    </div>

    <!-- Indicador de scroll -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-80">
      <svg class="h-8 w-8 text-white/70 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </SectionWrapper>
</template>

<style scoped>
.text-shadow-md {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>
