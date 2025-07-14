<template>
  <PageLayout>
    <!-- Hero Section -->
    <SectionWrapper>
      <PageHeader subtitle="Noticias, experimentos documentados y reflexiones sobre la intersección entre tecnología y desarrollo humano.">
          Blog
        </PageHeader>
    </SectionWrapper>

    <!-- Filtros y Grid de Artículos -->
    <SectionWrapper>
      <!-- Controles de Filtro -->
      <div class="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
        <FilterButton
          v-for="category in allCategories"
          :key="category"
          @click="toggleCategory(category)"
          :active="isSelected(category)"
        >
          {{ category }}
        </FilterButton>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="text-center py-16">
        <p class="text-lg text-secondary-light dark:text-secondary-dark">Cargando artículos...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="errorMessage" class="text-center py-16">
        <p class="text-lg text-accent-error">{{ errorMessage }}</p>
      </div>

      <!-- Lista de Artículos -->
      <div v-if="filteredArticles.length" class="max-w-4xl mx-auto space-y-12 md:space-y-16">
        <ArticleCard
          v-for="article in filteredArticles"
          :key="article.slug"
          :article="article"
        />
      </div>

      <!-- No Articles State -->
      <div v-else class="text-center py-16">
        <p class="text-lg text-secondary-light dark:text-secondary-dark">No hay artículos que coincidan con tu búsqueda o aún no se han publicado.</p>
      </div>
    </SectionWrapper>
  </PageLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
// import { supabase } from '@/supabaseClient'; // Comentado para usar datos locales
import { getPublishedArticles } from '@/data/articlesData';
import SectionWrapper from '@/components/SectionWrapper.vue';
import PageHeader from '@/components/PageHeader.vue';
import ArticleCard from '@/components/ArticleCard.vue';
import FilterButton from '@/components/FilterButton.vue';
import PageLayout from '@/components/PageLayout.vue';

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
    console.error('Error fetching articles:', error);
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

const isSelected = (category) => {
  return selectedCategories.value.includes(category);
};
</script>

<style scoped>
/* Estilos específicos para BlogView si son necesarios */
</style>
