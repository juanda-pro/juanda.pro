<template>
  <button
    :disabled="disabled"
    :class="[
      'px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ring-1 ring-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent',
      disabled
        ? 'opacity-50 cursor-not-allowed'
        : '',
      active
        ? 'bg-brand-accent text-brand-dark ring-brand-accent dark:bg-brand-accent dark:text-brand-dark dark:ring-brand-accent'
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
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
/* Estilos específicos si son necesarios */
</style>
