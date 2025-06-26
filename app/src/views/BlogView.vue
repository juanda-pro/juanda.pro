<template>
  <div>
    <!-- Hero Section -->
    <SectionWrapper>
      <div>
        <PageHeader>
          Blog
        </PageHeader>
        <p class="-mt-8 max-w-3xl mx-auto text-center text-lg sm:text-xl text-secondary-light dark:text-secondary-dark">
          Ideas, reflexiones y recursos sobre tecnología, IA y desarrollo humano. Un espacio para explorar el futuro, sin prisa pero sin pausa.
        </p>
      </div>
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
import PageHeader from '@/components/PageHeader.vue';
import ArticleCard from '@/components/ArticleCard.vue';
import FilterButton from '@/components/FilterButton.vue';
import { supabase } from '@/lib/supabase'; // Importar cliente Supabase

// --- State ---
const allArticles = ref([]);
const selectedCategories = ref([]);
const isLoading = ref(true);
const errorMessage = ref('');

// --- Data Fetching ---
async function fetchArticles() {
  try {
    isLoading.value = true;
    errorMessage.value = '';
    
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .lte('published_at', new Date().toISOString()) // Solo artículos publicados
      .order('relevance', { ascending: true }) // 'featured' primero
      .order('published_at', { ascending: false })
      .limit(10);

    if (error) throw error;



    if (data) {
      allArticles.value = data.map(article => ({
        ...article,
        date: new Date(article.published_at).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        image: article.image_url
      }));
    }
  } catch (error) {
    console.error('Error fetching articles:', error.message);
    errorMessage.value = `Error al cargar artículos: ${error.message}. Asegúrate de que la tabla 'articles' y sus columnas son correctas.`;
  } finally {
    isLoading.value = false;
  }
}

// --- Lifecycle Hooks ---
onMounted(() => {
  fetchArticles();
});

// --- Computed Properties ---
const allCategories = computed(() => {
  const categories = allArticles.value.map(article => article.category);
  return [...new Set(categories)];
});





const filteredArticles = computed(() => {
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
