<script setup>
import { defineProps } from 'vue';
import ArticleCard from '@/components/ArticleCard.vue';

const props = defineProps({
  articles: {
    type: Array,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  },
  selectedCategories: {
    type: Array,
    default: () => []
  }
});

const getEmptyStateMessage = () => {
  if (props.selectedCategories.length > 0) {
    return `No hay artículos en ${props.selectedCategories.length === 1 ? 'la categoría' : 'las categorías'} seleccionada${props.selectedCategories.length === 1 ? '' : 's'}.`;
  }
  return 'Aún no se han publicado artículos.';
};
</script>

<template>
  <div class="min-h-[400px]">
    <!-- Loading State -->
    <div v-if="isLoading" class="text-center py-16">
      <div class="inline-flex items-center space-x-2">
        <!-- Spinner de carga -->
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-accent"></div>
        <p class="text-xl text-secondary-light dark:text-secondary-dark">
          Cargando artículos...
        </p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="errorMessage" class="text-center py-16">
      <div class="max-w-md mx-auto">
        <!-- Icono de error -->
        <div class="mb-4">
          <svg class="mx-auto h-12 w-12 text-accent-error" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 class="text-lg font-medium text-primary-light dark:text-primary-dark mb-2">
          Error al cargar artículos
        </h3>
        <p class="text-accent-error mb-4">{{ errorMessage }}</p>
        <button 
          @click="$emit('retry')"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-accent hover:bg-brand-accent-dark transition-colors"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>

    <!-- Lista de Artículos -->
    <div v-else-if="articles.length" class="max-w-4xl mx-auto">
      <!-- Contador de resultados -->
      <div class="mb-8 text-center">
        <p class="text-sm text-secondary-light dark:text-secondary-dark">
          {{ articles.length }} artículo{{ articles.length === 1 ? '' : 's' }} encontrado{{ articles.length === 1 ? '' : 's' }}
        </p>
      </div>
      
      <!-- Grid de artículos -->
      <div class="space-y-12 md:space-y-16">
        <ArticleCard
          v-for="article in articles"
          :key="article.slug"
          :article="article"
          class="fade-in-element"
        />
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-16">
      <div class="max-w-md mx-auto">
        <!-- Icono de estado vacío -->
        <div class="mb-4">
          <svg class="mx-auto h-12 w-12 text-secondary-light dark:text-secondary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 class="text-lg font-medium text-primary-light dark:text-primary-dark mb-2">
          No hay artículos
        </h3>
        <p class="text-secondary-light dark:text-secondary-dark">
          {{ getEmptyStateMessage() }}
        </p>
        <div v-if="selectedCategories.length > 0" class="mt-4">
          <button 
            @click="$emit('clear-filters')"
            class="text-brand-accent hover:text-brand-accent-dark underline transition-colors"
          >
            Ver todos los artículos
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animaciones de entrada */
.fade-in-element {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

.fade-in-element:nth-child(2) {
  animation-delay: 0.1s;
}

.fade-in-element:nth-child(3) {
  animation-delay: 0.2s;
}

.fade-in-element:nth-child(4) {
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Spinner de carga */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Mejoras de accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .fade-in-element {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .animate-spin {
    animation: none;
  }
}
</style>