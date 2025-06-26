<template>
  <div class="
    group relative rounded-2xl p-8 h-full
    bg-surface-light dark:bg-surface-dark group-hover:bg-brand-dark dark:group-hover:bg-brand-accent
    border border-border-light dark:border-border-dark
    backdrop-blur-sm
    transition-all duration-300 ease-in-out
    hover:border-brand-accent hover:shadow-2xl hover:shadow-brand-accent/20
    hover:-translate-y-2
  ">
    <!-- Glow effect on hover -->
    <div class="
      absolute -inset-px rounded-2xl
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
      bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-accent
      blur-lg
    "></div>

    <div class="relative z-10 flex flex-col items-center text-center">
      <div class="
        flex items-center justify-center h-14 w-14 rounded-full mb-6
        bg-surface-light dark:bg-surface-dark
        border border-border-light dark:border-border-dark
        shadow-md
      ">
        <component :is="icon" class="h-7 w-7" :class="colorClass" aria-hidden="true" />
      </div>
      <h3 class="text-xl font-bold text-primary-light dark:text-primary-dark group-hover:text-gray-900 dark:group-hover:text-gray-900">{{ title }}</h3>
      <p class="mt-4 text-base text-primary-light dark:text-primary-dark group-hover:text-gray-900 dark:group-hover:text-gray-900 flex-grow">
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
