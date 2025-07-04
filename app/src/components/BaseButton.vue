<template>
  <RouterLink v-if="to" :to="to" :class="buttonClasses">
    <slot></slot>
  </RouterLink>
  <button v-else :type="type" :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  to: { type: String, default: null },
  type: { type: String, default: 'button' },
  variant: { type: String, default: 'primary' }, // primary, secondary
  size: { type: String, default: 'md' } // lg, md, sm
});

const buttonClasses = computed(() => {
    const base = 'inline-block text-center font-bold rounded-lg transition-all duration-300 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-light dark:focus-visible:ring-offset-bg-dark';

  const sizeStyles = {
    lg: 'py-4 px-8 text-lg',
    md: 'py-3 px-8 text-base',
    sm: 'py-2 px-6 text-sm'
  };

  const variantStyles = {
    primary: 'bg-brand-accent text-brand-dark hover:brightness-110 focus-visible:ring-brand-accent border border-transparent',
    secondary: 'bg-transparent border border-border-light dark:border-border-dark text-primary-light dark:text-primary-dark hover:bg-surface-accent-light dark:hover:bg-surface-accent-dark hover:text-primary-light dark:hover:text-primary-dark focus-visible:ring-brand-accent'
  };

  return [base, sizeStyles[props.size], variantStyles[props.variant]];
});
</script>
