<template>
  <article class="group grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center cursor-pointer">
    <!-- Imagen -->
    <div class="md:col-span-1 overflow-hidden rounded-lg aspect-video">
      <img 
        :src="article.image_url" 
        :alt="`Imagen del artículo ${article.title}`" 
        class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>

    <!-- Contenido de Texto -->
    <div class="md:col-span-2">
      <h3 class="text-xl lg:text-2xl font-bold text-primary-light dark:text-primary-dark group-hover:text-brand-accent transition-colors duration-200">
        {{ article.title }}
      </h3>
      <p class="text-base text-secondary-light dark:text-secondary-dark mt-2">
        {{ article.description }}
      </p>
      <p class="text-sm text-secondary-light dark:text-secondary-dark mt-4">{{ formattedDate }}</p>
    </div>
  </article>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const formattedDate = computed(() => {
  if (!props.article.published_at) return '';
  const date = new Date(props.article.published_at);
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
});
</script>

<style scoped>
/* No se necesitan estilos adicionales por ahora, Tailwind se encarga de todo */
</style>
