<template>
  <div v-if="previousArticle || nextArticle" class="flex flex-col sm:flex-row gap-4 mt-12">
    <!-- Artículo anterior -->
    <div class="flex-1">
      <router-link 
        v-if="previousArticle" 
        :to="`/blog/${previousArticle.slug}`"
        class="group block p-6 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl hover:border-[#206372]/50 dark:hover:border-[#F5DF4D]/50 transition-all duration-300 hover:shadow-lg"
      >
        <div class="flex items-center gap-3 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#206372] dark:text-[#F5DF4D] group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span class="text-sm text-secondary-light dark:text-secondary-dark font-medium">Artículo anterior</span>
        </div>
        <h3 class="text-lg font-semibold text-primary-light dark:text-primary-dark group-hover:text-[#206372] dark:group-hover:text-[#F5DF4D] transition-colors duration-300 line-clamp-2">
          {{ previousArticle.title }}
        </h3>
        <p class="text-sm text-secondary-light dark:text-secondary-dark mt-2 line-clamp-2">
          {{ previousArticle.description }}
        </p>
      </router-link>
    </div>

    <!-- Artículo siguiente -->
    <div class="flex-1">
      <router-link 
        v-if="nextArticle" 
        :to="`/blog/${nextArticle.slug}`"
        class="group block p-6 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl hover:border-[#206372]/50 dark:hover:border-[#F5DF4D]/50 transition-all duration-300 hover:shadow-lg text-right"
      >
        <div class="flex items-center justify-end gap-3 mb-2">
          <span class="text-sm text-secondary-light dark:text-secondary-dark font-medium">Siguiente artículo</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#206372] dark:text-[#F5DF4D] group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-primary-light dark:text-primary-dark group-hover:text-[#206372] dark:group-hover:text-[#F5DF4D] transition-colors duration-300 line-clamp-2">
          {{ nextArticle.title }}
        </h3>
        <p class="text-sm text-secondary-light dark:text-secondary-dark mt-2 line-clamp-2">
          {{ nextArticle.description }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '@/data/articlesData';

interface Props {
  previousArticle: Article | null;
  nextArticle: Article | null;
}

defineProps<Props>();
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>