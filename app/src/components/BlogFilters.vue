<script setup>
import { defineProps, defineEmits } from 'vue';
import FilterButton from '@/components/FilterButton.vue';

const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  selectedCategories: {
    type: Array,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['toggle-category', 'clear-filters']);

const toggleCategory = (category) => {
  emit('toggle-category', category);
};

const clearAllFilters = () => {
  emit('clear-filters');
};

const isSelected = (category) => {
  return props.selectedCategories.includes(category);
};
</script>

<template>
  <div class="space-y-6">
    <!-- Encabezado de filtros -->
    <div class="text-center">
      <h2 class="text-lg font-semibold text-primary-light dark:text-primary-dark mb-2">
        Filtrar por categoría
      </h2>
      <p class="text-sm text-secondary-light dark:text-secondary-dark">
        Selecciona una o más categorías para filtrar los artículos
      </p>
    </div>

    <!-- Controles de filtro -->
    <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
      <!-- Botón "Todos" -->
      <FilterButton
        @click="clearAllFilters"
        :active="selectedCategories.length === 0"
        :disabled="isLoading"
      >
        Todos
      </FilterButton>

      <!-- Botones de categorías -->
      <FilterButton
        v-for="category in categories"
        :key="category"
        @click="toggleCategory(category)"
        :active="isSelected(category)"
        :disabled="isLoading"
      >
        {{ category }}
      </FilterButton>
    </div>

    <!-- Indicador de filtros activos -->
    <div v-if="selectedCategories.length > 0" class="text-center">
      <p class="text-sm text-secondary-light dark:text-secondary-dark">
        Mostrando artículos de: 
        <span class="font-medium text-brand-accent">
          {{ selectedCategories.join(', ') }}
        </span>
        <button 
          @click="clearAllFilters"
          class="ml-2 text-xs text-brand-accent hover:text-brand-accent-dark underline transition-colors"
        >
          Limpiar filtros
        </button>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Animaciones para los filtros */
.filter-enter-active,
.filter-leave-active {
  transition: all 0.3s ease;
}

.filter-enter-from,
.filter-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mejoras de accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .filter-enter-active,
  .filter-leave-active {
    transition: none;
  }
}
</style>