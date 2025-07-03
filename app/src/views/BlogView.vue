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
import SectionWrapper from '@/components/SectionWrapper.vue';
import PageHeader from '@/components/PageHeader.vue';
import ArticleCard from '@/components/ArticleCard.vue';
import FilterButton from '@/components/FilterButton.vue';
import PageLayout from '@/components/PageLayout.vue';

// --- State ---
const allArticles = ref([]);
const selectedCategories = ref([]);
const isLoading = ref(false);
const errorMessage = ref('');

// --- Hardcoded Data ---
const loadMockData = () => {
  isLoading.value = true;
  setTimeout(() => {
    allArticles.value = [
      {
        slug: 'ia-generativa-futuro-contenido',
        title: 'IA Generativa: El Futuro de la Creación de Contenido',
        category: 'IA',
        published_at: '2024-05-20 10:00:00+00',

        image_url: 'https://images.unsplash.com/photo-1680783954745-3249be59e527?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Exploramos cómo la IA generativa está cambiando el panorama del marketing, el arte y la programación.'
      },
      {
        slug: 'guia-vue-3-composition-api',
        title: 'Guía Completa de Vue 3 y Composition API',
        category: 'Desarrollo',
        published_at: '2024-05-15 09:00:00+00',

        image_url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        description: 'Una guía detallada para dominar la Composition API de Vue 3, con ejemplos prácticos y consejos.'
      },
      {
        slug: 'minimalismo-digital-enfoque',
        title: 'Minimalismo Digital: Cómo Enfocarse en lo que Importa',
        category: 'Productividad',
        published_at: '2024-05-10 11:00:00+00',

        image_url: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Estrategias para reducir el ruido digital y aumentar la productividad y el bienestar en tu vida.'
      },
      {
        slug: 'supabase-alternativa-firebase',
        title: 'El Auge de Supabase como Alternativa a Firebase',
        category: 'Tecnología',
        published_at: '2024-05-05 14:00:00+00',

        image_url: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Analizamos las ventajas de Supabase, el backend open-source que está ganando terreno rápidamente.'
      },
      {
        slug: 'meditacion-y-codigo',
        title: 'Meditación y Código: La Conexión Inesperada',
        category: 'Bienestar',
        published_at: '2024-05-01 08:00:00+00',

        image_url: 'https://images.unsplash.com/photo-1680783954745-3249be59e527?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Descubre cómo prácticas de mindfulness pueden mejorar tu concentración y calidad como desarrollador.'
      }
    ];
    isLoading.value = false;
  }, 500);
};

// --- Lifecycle Hooks ---
onMounted(() => {
  loadMockData();
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
