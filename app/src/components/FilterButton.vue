<template>
  <button
    :class="[
            'px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ring-1 ring-inset',
      active
        ? 'bg-brand-accent text-brand-dark ring-brand-accent dark:bg-primary-dark dark:text-primary-light dark:ring-primary-dark'
        : 'bg-surface-light dark:bg-surface-dark text-secondary-light dark:text-secondary-dark ring-border-light dark:ring-border-dark hover:bg-surface-accent-light dark:hover:bg-surface-accent-dark'
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
