<template>
  <blockquote class="border-l-4 border-[#206372] dark:border-[#F5DF4D] pl-6 bg-surface-light/30 dark:bg-surface-dark/30 p-6 rounded-r-lg">
    <p class="text-xl italic text-secondary-light dark:text-secondary-dark leading-relaxed">
      <slot></slot>
    </p>
    <cite v-if="author" class="block mt-4 text-sm text-[#206372] dark:text-[#F5DF4D] not-italic">
      — {{ author }}
    </cite>
  </blockquote>
</template>

<script setup lang="ts">
interface Props {
  author?: string
}

defineProps<Props>()
</script>