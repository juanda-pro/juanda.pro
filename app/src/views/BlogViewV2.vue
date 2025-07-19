<script setup>
import { ref, computed, onMounted } from 'vue';

// Importar componentes mejorados
import PageLayoutV2 from '@/components/enhanced/PageLayoutV2.vue';
import StorySection from '@/components/enhanced/StorySection.vue';
import SectionWrapperV2 from '@/components/enhanced/SectionWrapperV2.vue';
import ContentCardV2 from '@/components/enhanced/ContentCardV2.vue';
import VisualHierarchy from '@/components/enhanced/VisualHierarchy.vue';

// Componentes originales que mantenemos
import ArticleCard from '@/components/ArticleCard.vue';
import FilterButton from '@/components/FilterButton.vue';
import PageHeader from '@/components/PageHeader.vue';
import IntroCard from '@/components/IntroCard.vue';

// Datos y lógica (manteniendo la funcionalidad original)
import { getPublishedArticles } from '@/data/articlesData';

const articles = ref([]);
const isLoading = ref(true);
const errorMessage = ref('');
const selectedCategories = ref([]);

// Obtener todas las categorías únicas
const allCategories = computed(() => {
  const categories = articles.value.map(article => article.category);
  return ['Todas', ...new Set(categories)];
});

// Filtrar artículos por categorías seleccionadas
const filteredArticles = computed(() => {
  if (selectedCategories.value.length === 0 || selectedCategories.value.includes('Todas')) {
    return articles.value;
  }
  return articles.value.filter(article => 
    selectedCategories.value.includes(article.category)
  );
});

// Funciones de filtrado
function toggleCategory(category) {
  if (category === 'Todas') {
    selectedCategories.value = [];
    return;
  }
  
  const index = selectedCategories.value.indexOf(category);
  if (index === -1) {
    selectedCategories.value.push(category);
  } else {
    selectedCategories.value.splice(index, 1);
  }
}

function isSelected(category) {
  if (category === 'Todas') {
    return selectedCategories.value.length === 0;
  }
  return selectedCategories.value.includes(category);
}

// Cargar artículos
const loadArticles = async () => {
  try {
    isLoading.value = true;
    errorMessage.value = '';
    
    // Simular carga asíncrona
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const loadedArticles = getPublishedArticles();
    
    // Ordenar por fecha de publicación (más reciente primero)
    loadedArticles.sort((a, b) => {
      return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
    });
    
    articles.value = loadedArticles;
  } catch (error) {
    console.error('Error loading articles:', error);
    errorMessage.value = 'Error al cargar los artículos. Por favor, intenta de nuevo.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  loadArticles();
  
  // Animaciones de entrada
  document.querySelectorAll('.fade-in-element').forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 100 * (index + 1));
  });
});
</script>

<template>
  <PageLayoutV2 
    atmosphere-variant="content"
    atmosphere-intensity="normal"
  >
    <!-- Hero Section -->
    <StorySection 
      variant="hero" 
      spacing="normal"
      connector
    >
      <template #title>
        <VisualHierarchy 
          level="h1" 
          variant="accent" 
          alignment="center"
          decoration
        >
          Blog
        </VisualHierarchy>
      </template>
      
      <template #subtitle>
        <VisualHierarchy 
          level="subtitle" 
          alignment="center"
        >
          Noticias, experimentos documentados y reflexiones sobre la 
          intersección entre tecnología y desarrollo humano.
        </VisualHierarchy>
      </template>
    </StorySection>

    <!-- Sección de Filtros -->
    <SectionWrapperV2 
      spacing="normal"
      atmosphere-variant="content"
      atmosphere-intensity="subtle"
      atmosphere-position="top"
    >
      <ContentCardV2 
        variant="default" 
        padding="normal"
        elevation="subtle"
      >
        <template #header>
          <VisualHierarchy 
            level="h3" 
            alignment="center"
            variant="accent"
          >
            Explora por categoría
          </VisualHierarchy>
        </template>

        <!-- Controles de Filtro -->
        <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
          <FilterButton
            v-for="category in allCategories"
            :key="category"
            @click="toggleCategory(category)"
            :active="isSelected(category)"
          >
            {{ category }}
          </FilterButton>
        </div>

        <template #footer>
          <VisualHierarchy level="caption" alignment="center">
            <span class="text-secondary-light dark:text-secondary-dark">
              {{ filteredArticles.length }} artículo{{ filteredArticles.length !== 1 ? 's' : '' }} 
              {{ selectedCategories.length > 0 && !selectedCategories.includes('Todas') ? 'en esta categoría' : 'disponibles' }}
            </span>
          </VisualHierarchy>
        </template>
      </ContentCardV2>
    </SectionWrapperV2>

    <!-- Contenido Principal -->
    <SectionWrapperV2 
      spacing="loose"
      atmosphere-variant="default"
      atmosphere-intensity="subtle"
      atmosphere-position="both"
      max-width="5xl"
    >
      <!-- Loading State -->
      <div v-if="isLoading" class="text-center py-16">
        <ContentCardV2 variant="default" padding="loose" elevation="subtle">
          <div class="flex items-center justify-center space-x-3">
            <svg class="animate-spin h-8 w-8 text-brand-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <VisualHierarchy level="body">
              Cargando artículos...
            </VisualHierarchy>
          </div>
        </ContentCardV2>
      </div>

      <!-- Error State -->
      <div v-else-if="errorMessage" class="text-center py-16">
        <ContentCardV2 variant="highlight" padding="loose" elevation="normal">
          <VisualHierarchy level="h3" variant="accent" alignment="center">
            Oops, algo salió mal
          </VisualHierarchy>
          <VisualHierarchy level="body" alignment="center">
            <span class="text-accent-error">{{ errorMessage }}</span>
          </VisualHierarchy>
          <template #footer>
            <div class="text-center">
              <button 
                @click="loadArticles"
                class="inline-flex items-center px-4 py-2 bg-brand-accent hover:bg-brand-accent-darker text-text-on-accent rounded-lg transition-colors duration-200"
              >
                Intentar de nuevo
              </button>
            </div>
          </template>
        </ContentCardV2>
      </div>

      <!-- Lista de Artículos -->
      <div v-else-if="filteredArticles.length" class="space-y-12 md:space-y-16">
        <div 
          v-for="(article, index) in filteredArticles" 
          :key="article.slug"
          class="fade-in-element"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <ArticleCard :article="article" />
        </div>
      </div>

      <!-- No Articles State -->
      <div v-else class="text-center py-16">
        <ContentCardV2 variant="default" padding="loose" elevation="subtle">
          <VisualHierarchy level="h3" alignment="center">
            No hay artículos disponibles
          </VisualHierarchy>
          <VisualHierarchy level="body" alignment="center">
            {{ selectedCategories.length > 0 ? 
                'No hay artículos que coincidan con tu búsqueda.' : 
                'Aún no se han publicado artículos.' }}
          </VisualHierarchy>
          
          <template #footer v-if="selectedCategories.length > 0">
            <div class="text-center">
              <button 
                @click="selectedCategories = []"
                class="inline-flex items-center px-4 py-2 bg-surface-light dark:bg-surface-dark hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 text-primary-light dark:text-primary-dark border border-border-light dark:border-border-dark rounded-lg transition-colors duration-200"
              >
                Ver todos los artículos
              </button>
            </div>
          </template>
        </ContentCardV2>
      </div>
    </SectionWrapperV2>

    <!-- Call to Action Final -->
    <StorySection 
      variant="cta" 
      spacing="normal"
    >
      <ContentCardV2 
        variant="highlight" 
        padding="loose"
        elevation="normal"
      >
        <VisualHierarchy 
          level="h3" 
          variant="gradient" 
          alignment="center"
        >
          ¿Te ha gustado lo que has leído?
        </VisualHierarchy>
        
        <VisualHierarchy 
          level="subtitle" 
          alignment="center"
        >
          Suscríbete para recibir nuevos artículos directamente en tu email, 
          o sígueme en redes sociales para estar al día.
        </VisualHierarchy>

        <template #footer>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contacto" 
              class="inline-flex items-center px-6 py-3 bg-brand-accent hover:bg-brand-accent-darker text-text-on-accent rounded-lg transition-colors duration-200 font-semibold"
            >
              Conectar conmigo
            </a>
            <span class="text-secondary-light dark:text-secondary-dark">o</span>
            <a 
              href="/soy" 
              class="inline-flex items-center px-6 py-3 bg-surface-light dark:bg-surface-dark hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 text-primary-light dark:text-primary-dark border border-border-light dark:border-border-dark rounded-lg transition-colors duration-200 font-semibold"
            >
              Conoce más sobre mí
            </a>
          </div>
        </template>
      </ContentCardV2>
    </StorySection>

  </PageLayoutV2>
</template>

<style scoped>
/* Animaciones de entrada */
.fade-in-element {
  opacity: 0;
  transform: translateY(1rem);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-in-element.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Spinner animation */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Mejorar el espaciado en móviles */
@media (max-width: 640px) {
  .space-y-12 > * + * {
    margin-top: 2rem;
  }
  
  .space-y-16 > * + * {
    margin-top: 2.5rem;
  }
}

/* Transiciones suaves para botones */
button, a {
  transition: all 0.2s ease-in-out;
}

button:hover, a:hover {
  transform: translateY(-1px);
}
</style>
