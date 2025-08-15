<script setup lang="ts">
interface Emits {
  expandForm: []
}

const emit = defineEmits<Emits>()

function handleExpand() {
  emit('expandForm')
}
</script>

<template>
  <div class="text-center space-y-6">
    <div>
      <svg class="h-12 w-12 text-accent-primary-light dark:text-accent-primary-dark mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark leading-tight mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-accent-primary-light dark:group-hover:text-accent-primary-dark">
        ¡Hablemos!
      </h3>
      
      <!-- Línea decorativa -->
      <div class="flex justify-center mb-6">
        <div class="w-16 h-0.5 bg-accent-primary-light/40 dark:bg-accent-primary-dark/40 rounded-full"></div>
      </div>
      
      <p class="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6 sm:mb-8">
        Cuéntame tu proyecto y trabajemos juntos
      </p>
    </div>
    
    <!-- Barra de Texto para Expandir -->
    <div>
      <input
        type="text"
        placeholder="Escríbeme un mensaje desde aquí"
        readonly
        @click="handleExpand"
        class="w-full p-3 sm:p-4 md:p-5 text-sm sm:text-base md:text-lg lg:text-xl border-2 border-accent-primary-light/30 dark:border-accent-primary-dark/30 bg-card-light/50 dark:bg-surface-dark/50 text-text-primary-light dark:text-text-primary-dark placeholder-text-muted-light dark:placeholder-text-muted-dark cursor-pointer hover:border-accent-primary-light dark:hover:border-accent-primary-dark hover:bg-card-light/70 dark:hover:bg-surface-dark/70 transition-all duration-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-accent-primary-light/20 dark:focus:ring-accent-primary-dark/20 backdrop-blur-sm"
      />
    </div>
  </div>
</template>

<style scoped>
/* Estilos específicos para el estado inicial */
</style>