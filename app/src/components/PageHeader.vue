<template>
  <div class="text-center mb-12 sm:mb-16">
    <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary-light dark:text-primary-dark">
      <slot></slot>
    </h1>
    <p v-if="subtitle" class="mt-4 max-w-3xl mx-auto text-xl sm:text-2xl text-secondary-light dark:text-secondary-dark">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
// Componente visual mejorado para aceptar un subtítulo.
defineProps({
  subtitle: {
    type: String,
    default: ''
  }
});
</script>
