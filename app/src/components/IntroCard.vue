<template>
  <div class="max-w-3xl mx-auto bg-surface-light/30 dark:bg-surface-dark/30 rounded-xl p-8 border border-border-light/10 dark:border-border-dark/10 shadow-sm relative overflow-hidden">
    <!-- Decoración de fondo -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent"></div>

    
    <div class="relative z-10">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for this simple component
</script>
