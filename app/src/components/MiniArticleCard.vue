<template>
  <router-link :to="`/blog/${article.slug}`" class="group flex flex-col bg-white dark:bg-[#191A1D] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg">
    <div class="overflow-hidden">
      <img :src="article.image_url" :alt="`Imagen de portada para ${article.title}`" class="w-full h-full object-cover aspect-[16/9] group-hover:scale-105 transition-transform duration-300" />
    </div>
        <div class="p-4 flex-grow grid transition-colors duration-500 ease-in-out bg-white dark:bg-[#191A1D]">
      <!-- Ambos elementos ocupan la misma celda del grid para superponerse -->

      <!-- Estado por defecto: Título y Fecha -->
      <div class="[grid-area:1/1] flex flex-col transition-opacity duration-500 ease-in-out group-hover:opacity-0">
        <h3 class="font-heading text-xl font-bold text-primary-light dark:text-primary-dark leading-tight flex-grow">
          {{ article.title }}
        </h3>
        <time class="mt-auto text-base text-secondary-light dark:text-secondary-dark">
          {{ formattedDate }}
        </time>
      </div>
      
      <!-- Estado Hover: Descripción -->
      <div class="[grid-area:1/1] flex items-center justify-start transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                <p class="text-lg leading-relaxed text-secondary-light dark:text-secondary-dark text-left dark:group-hover:text-primary-dark group-hover:text-primary-light">
          {{ article.description }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  article: {
    slug: string;
    title: string;
    published_at: string;
    image_url: string;
    description?: string;
  };
}>();

const formattedDate = computed(() => {
  if (!props.article.published_at) return '';
  const date = new Date(props.article.published_at);
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
});
</script>
