<template>
  <div class="
    group relative rounded-2xl p-8 h-full
    bg-surface-light dark:bg-surface-dark
    border border-border-light dark:border-border-dark
    transition-all duration-300
    hover:shadow-xl dark:hover:shadow-surface-dark/50 
    hover:border-brand-accent/50 dark:hover:border-brand-accent/50 
    hover:-translate-y-2
  ">
    

    <div class="relative z-10 flex flex-col items-center text-center">
      <div class="
        flex items-center justify-center h-14 w-14 rounded-full mb-6
        bg-surface-light dark:bg-surface-dark
        border border-border-light dark:border-border-dark
        shadow-md
      ">
        <component :is="icon" class="h-7 w-7" :class="colorClass" aria-hidden="true" />
      </div>
      <h3 class="text-xl font-bold text-primary-light dark:text-primary-dark">{{ title }}</h3>
      <p class="mt-4 text-lg text-primary-light dark:text-primary-dark flex-grow">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FunctionalComponent, SVGAttributes } from 'vue';

defineProps<{
  icon: FunctionalComponent<SVGAttributes>;
  title: string;
  colorClass: string;
}>();
</script>
