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
        <span class="font-medium text-[#206372] dark:text-[#F5DF4D]">
          {{ selectedCategories.join(', ') }}
        </span>
        <button 
          @click="clearAllFilters"
          class="ml-2 text-xs text-[#206372] dark:text-[#F5DF4D] hover:text-[#206372]/80 dark:hover:text-[#F5DF4D]/80 underline transition-colors"
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