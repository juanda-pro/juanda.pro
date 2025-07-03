<template>
  <Transition
    appear
    enter-from-class="opacity-0 translate-y-3"
    enter-active-class="transition-all duration-1000 ease-out"
    enter-to-class="opacity-100 translate-y-0"
  >
  <div class="text-center mb-12 sm:mb-16">
    <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary-light dark:text-primary-dark">
      <slot></slot>
    </h1>
        <p v-if="subtitle" class="mt-4 max-w-3xl mx-auto text-xl md:text-2xl text-secondary-light dark:text-secondary-dark">
      {{ subtitle }}
    </p>
  </div>
</Transition>
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
