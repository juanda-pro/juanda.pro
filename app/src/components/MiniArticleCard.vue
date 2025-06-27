<template>
  <router-link :to="`/blog/${article.slug}`" class="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border-light dark:border-border-dark">
    <div class="overflow-hidden">
      <img :src="article.image_url" :alt="`Imagen de portada para ${article.title}`" class="w-full h-full object-cover aspect-[16/9] group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div class="p-4 flex flex-col flex-grow">
      <h3 class="text-xl font-bold text-primary-light dark:text-primary-dark leading-tight flex-grow group-hover:text-accent-info dark:group-hover:text-accent-info-dark transition-colors duration-300">
        {{ article.title }}
      </h3>
      <time class="mt-3 text-sm text-secondary-light dark:text-secondary-dark">{{ article.date }}</time>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  article: {
    slug: string;
    title: string;
    date: string;
    image_url: string;
  };
}>();
</script>
