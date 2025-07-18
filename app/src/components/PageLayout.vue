<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  removePaddingTop: {
    type: Boolean,
    default: false
  }
});

const layoutClasses = computed(() => [
  'flex-grow',
  'flex',
  'flex-col',
  'gap-12 sm:gap-16 md:gap-20',
  { 'pt-20': !props.removePaddingTop }
]);
</script>

<template>
  <main :class="layoutClasses">
    <slot></slot>
  </main>
</template>
