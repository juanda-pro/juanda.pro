<template>
  <Transition
    appear
    enter-from-class="opacity-0 translate-y-6"
    enter-active-class="transition-all duration-1200 ease-out"
    enter-to-class="opacity-100 translate-y-0"
  >
    <div class="text-center mb-12 sm:mb-16 relative">
      <!-- Elementos decorativos de fondo -->

      
      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary-light dark:text-primary-dark relative inline-block">
        <slot></slot>
        <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#206372]/40 dark:via-[#F5DF4D]/40 to-transparent rounded-full"></span>
      </h1>
      
      <Transition
        appear
        enter-from-class="opacity-0 translate-y-3"
        enter-active-class="transition-all duration-1000 ease-out delay-500"
        enter-to-class="opacity-100 translate-y-0"
      >
        <p 
          v-if="subtitle" 
          class="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-secondary-light dark:text-secondary-dark leading-relaxed fade-in-element"
        >
          {{ subtitle }}
        </p>
      </Transition>
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
