<template>
  <PageLayout :remove-padding-top="true">
    <!-- Hero Section -->
    <HeroSection
      title="Blog"
      :background-image="HeaderBackground"
    >
      <template v-slot:subtitle>
        Aprendizajes, herramientas y reflexiones honestas. Todo documentado para que experimentes por tu cuenta y encuentres ideas accionables.
      </template>
    </HeroSection>

    <!-- Filtros y Grid de Artículos -->
    <SectionWrapper spacing="normal">
      <!-- Filtros -->
      <div class="mb-12">
        <BlogFilters
          :categories="allCategories"
          :selected-categories="selectedCategories"
          :is-loading="isLoading"
          @toggle-category="toggleCategory"
          @clear-filters="clearAllFilters"
        />
      </div>

      <!-- Contenido -->
      <BlogContent
        :articles="filteredArticles"
        :is-loading="isLoading"
        :error-message="errorMessage"
        :selected-categories="selectedCategories"
        @retry="fetchArticles"
        @clear-filters="clearAllFilters"
      />
    </SectionWrapper>
  </PageLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

import { getPublishedArticles } from '@/data/articlesData';
import SectionWrapper from '@/components/SectionWrapper.vue';
import BlogFilters from '@/components/BlogFilters.vue';
import BlogContent from '@/components/BlogContent.vue';
import PageLayout from '@/components/PageLayout.vue';
import HeroSection from '@/components/HeroSection.vue';

// Importar imagen de fondo
import HeaderBackground from '../assets/cabecera_inicio.jpeg';

// --- State ---
const allArticles = ref([]);
const selectedCategories = ref([]);
const isLoading = ref(true); // Iniciar en estado de carga
const errorMessage = ref('');

// --- Data Fetching ---
const fetchArticles = () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    // Usar datos locales en lugar de Supabase
    const articles = getPublishedArticles();
    
    // Ordenar por fecha de publicación (más reciente primero)
    articles.sort((a, b) => {
      return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
    });
    
    allArticles.value = articles;
  } catch (error) {
    // Error handling could be implemented here with user feedback
    errorMessage.value = 'No se pudieron cargar los artículos. Por favor, inténtalo de nuevo más tarde.';
  } finally {
    isLoading.value = false; // Finalizar el estado de carga
  }
};

// --- Lifecycle Hooks ---
onMounted(() => {
  fetchArticles(); // Llamar a la nueva función al montar el componente
});

// --- Computed Properties ---
const allCategories = computed(() => {
  if (!allArticles.value) return [];
  const categories = allArticles.value.map(article => article.category);
  return [...new Set(categories)];
});

const filteredArticles = computed(() => {
  if (!allArticles.value) return [];
  if (selectedCategories.value.length === 0) {
    return allArticles.value;
  }
  return allArticles.value.filter(article =>
    selectedCategories.value.includes(article.category)
  );
});

// --- Methods ---
const toggleCategory = (category) => {
  const index = selectedCategories.value.indexOf(category);
  if (index === -1) {
    selectedCategories.value.push(category);
  } else {
    selectedCategories.value.splice(index, 1);
  }
};

const clearAllFilters = () => {
  selectedCategories.value = [];
};
</script>

<style scoped>
/* Estilos específicos para BlogView si son necesarios */
</style>
