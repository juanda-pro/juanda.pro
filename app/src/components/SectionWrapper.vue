<script setup>
import { computed } from 'vue';

const props = defineProps({
  spacing: {
    type: String,
    default: 'normal', // Opciones: 'none', 'tight', 'normal', 'loose'
  },
});

const spacingClass = computed(() => {
  switch (props.spacing) {
    case 'none':
      return 'py-0';
    case 'tight':
      return 'py-4 sm:py-6';
    case 'loose':
      return 'py-12 sm:py-16';
    case 'normal':
    default:
      return 'py-8 sm:py-12';
  }
});
</script>

<template>
  <div :class="spacingClass">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot></slot>
    </div>
  </div>
</template>
