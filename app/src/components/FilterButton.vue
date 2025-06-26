<template>
  <button
    :class="[
      'px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ring-1 ring-inset',
      active
        ? 'bg-gray-800 text-white ring-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:ring-gray-100'
        : 'bg-white dark:bg-gray-900/50 text-secondary-light dark:text-secondary-dark ring-gray-200 dark:ring-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
/* Estilos específicos si son necesarios */
</style>
