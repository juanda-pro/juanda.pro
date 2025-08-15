<template>
  <button
    :disabled="disabled"
    :class="[
      'px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ring-1 ring-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#206372] dark:focus-visible:ring-[#F5DF4D] hover:scale-105',
      disabled
        ? 'opacity-50 cursor-not-allowed'
        : '',
      active
        ? 'bg-[#206372] dark:bg-[#F5DF4D] text-white dark:text-[#262626] ring-[#206372] dark:ring-[#F5DF4D]'
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
