<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-surface-light dark:bg-surface-deeper-dark transition-colors duration-300">
    <!-- Contenido de las subpáginas -->
    <RouterView />
  </div>
</template>

<style scoped>
/* Estilos específicos para la página de documentación */
</style>