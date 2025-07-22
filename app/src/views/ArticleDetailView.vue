<script setup>
import { ref, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { getArticleBySlug, getPublishedArticles } from '@/data/articlesData';
import SectionWrapper from '@/components/SectionWrapper.vue';
import ArticleCard from '@/components/ArticleCard.vue';
import PageLayout from '@/components/PageLayout.vue';
import HeroSection from '@/components/HeroSection.vue';

const route = useRoute();
const router = useRouter();
const article = ref(null);
const isLoading = ref(true);
const errorMessage = ref('');
const suggestedArticle = ref(null); // Se cargará automáticamente

const formattedDate = computed(() => {
  if (!article.value || !article.value.published_at) return '';
  const date = new Date(article.value.published_at);
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
});

const fetchArticleBySlug = (slug) => {
  isLoading.value = true;
  errorMessage.value = '';
  article.value = null;

  try {
    // Usar datos locales en lugar de Supabase
    const foundArticle = getArticleBySlug(slug);

    if (foundArticle) {
      article.value = foundArticle;
      
      // Cargar un artículo sugerido (el primero disponible que no sea el actual)
      const allArticles = getPublishedArticles();
      suggestedArticle.value = allArticles.find(a => a.slug !== slug) || null;
    } else {
      // Si no se encuentra el artículo, mostrar un mensaje
      errorMessage.value = 'El artículo que buscas no existe o no está disponible.';
    }

  } catch (error) {
    // Error handling could be implemented here with user feedback
    errorMessage.value = 'Ocurrió un error al cargar el artículo.';
  } finally {
    isLoading.value = false;
  }
};

// Observar cambios en el slug de la URL y cargar el artículo correspondiente
watch(
  () => route.params.slug,
  (newSlug) => {
    if (typeof newSlug === 'string') {
      fetchArticleBySlug(newSlug);
      // El scroll se manejará automáticamente por Vue Router con scrollBehavior
    }
  },
  { immediate: true }
);
</script>

<template>
  <PageLayout :remove-padding-top="true">
    <!-- Estado de Carga -->
    <div v-if="isLoading" class="flex justify-center items-center py-48">
      <p class="text-lg text-secondary-light dark:text-secondary-dark">Cargando artículo...</p>
    </div>

    <!-- Estado de Error -->
    <div v-else-if="errorMessage" class="text-center py-48 px-4">
      <h2 class="text-2xl font-bold">Ocurrió un error</h2>
      <p class="text-secondary-light mt-4 max-w-md mx-auto">{{ errorMessage }}</p>
      <router-link 
        to="/blog" 
        class="mt-8 inline-block px-6 py-3 bg-brand-accent text-brand-dark font-semibold rounded-lg transition-colors hover:bg-brand-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent focus-visible:ring-offset-light dark:focus-visible:ring-offset-dark"
      >
        Volver al Blog
      </router-link>
    </div>

    <!-- Contenido del Artículo -->
    <template v-else-if="article">
      <HeroSection :title="article.title" :background-image="article.image_url">
        <template #subtitle>
          {{ article.description }}
        </template>
      </HeroSection>

      <!-- Contenido del Artículo -->
      <SectionWrapper spacing="normal">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
          <!-- Tiempo de lectura estimado -->
          <div class="flex items-center justify-center mb-4 text-sm text-secondary-light dark:text-secondary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
            <span>{{ Math.max(3, Math.ceil(article.content.length / 2000)) }} min de lectura</span>
          </div>
          
          <!-- Contenido del artículo -->
          <article class="article-content prose prose-lg dark:prose-invert max-w-none" v-html="article.content"></article>
        </div>
      </SectionWrapper>

      <!-- Separador decorativo -->
      <div class="py-12 flex justify-center">
        <div class="flex items-center space-x-4">
          <div class="h-px w-12 bg-brand-accent/30"></div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          <div class="h-px w-12 bg-brand-accent/30"></div>
        </div>
      </div>
      
      <!-- Artículo Sugerido con mejor presentación -->
      <SectionWrapper spacing="loose" v-if="suggestedArticle" class="bg-surface-light dark:bg-surface-dark/50 rounded-lg">
        <div class="text-center mb-8">
          <h2 class="text-2xl sm:text-3xl font-bold mb-2">Continúa explorando</h2>
          <p class="text-secondary-light dark:text-secondary-dark">Otro artículo que podría interesarte</p>
        </div>
        <div class="max-w-2xl mx-auto transform transition-transform hover:scale-[1.02] duration-300">
          <ArticleCard :article="suggestedArticle" />
        </div>
      </SectionWrapper>
      
      <!-- Botón para volver arriba -->
      <div class="fixed bottom-8 right-8 z-50">
        <button 
          @click="window.scrollTo({top: 0, behavior: 'smooth'})" 
          class="p-3 bg-brand-accent/90 hover:bg-brand-accent text-brand-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent"
          aria-label="Volver arriba"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </template>
  </PageLayout>
</template>

<style scoped>
/* Estilos mejorados para la vista de artículo */

/* Animaciones */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}

/* Estilos de tipografía para el contenido */
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary-light);
  border-left: 4px solid var(--color-brand-accent);
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(var(--color-surface-accent-light), 0.2);
  border-radius: 0 0.5rem 0.5rem 0;
}

@media (min-width: 640px) {
  .prose :where(h2):not(:where([class~="not-prose"] *)) {
    font-size: 1.875rem;
  }
}

.dark .prose :where(h2):not(:where([class~="not-prose"] *)) {
  color: var(--color-primary-dark);
  background-color: rgba(var(--color-surface-accent-dark), 0.2);
}

.prose :where(h3):not(:where([class~="not-prose"] *)) {
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary-light);
  border-bottom: 1px solid rgba(var(--color-brand-accent), 0.3);
  padding-bottom: 0.5rem;
}

@media (min-width: 640px) {
  .prose :where(h3):not(:where([class~="not-prose"] *)) {
    font-size: 1.5rem;
  }
}

.dark .prose :where(h3):not(:where([class~="not-prose"] *)) {
  color: var(--color-primary-dark);
}

.prose :where(p):not(:where([class~="not-prose"] *)) {
  @apply mb-6 leading-relaxed;
}

.prose :where(p.lead):not(:where([class~="not-prose"] *)) {
  @apply text-xl text-secondary-light dark:text-secondary-dark font-serif mb-8;
}

.prose :where(blockquote):not(:where([class~="not-prose"] *)) {
  font-size: 1.25rem;
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--color-primary-light);
  border-left: 4px solid var(--color-brand-accent);
  background-color: rgba(var(--color-surface-accent-light), 0.3);
  padding: 1rem 1.5rem;
  margin: 2rem 0;
  border-radius: 0 0.5rem 0.5rem 0;
}

.dark .prose :where(blockquote):not(:where([class~="not-prose"] *)) {
  color: var(--color-primary-dark);
  background-color: rgba(var(--color-surface-accent-dark), 0.3);
}

/* Imágenes y figuras */
.prose :where(figure):not(:where([class~="not-prose"] *)) {
  @apply my-10;
}

.prose :where(figure img):not(:where([class~="not-prose"] *)) {
  @apply rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl;
}

.prose :where(figure.inset-image):not(:where([class~="not-prose"] *)) {
  @apply lg:-mx-16 my-12;
}

.prose :where(figure.inset-image img):not(:where([class~="not-prose"] *)) {
  @apply w-full rounded-lg shadow-xl;
}

.prose :where(figure figcaption):not(:where([class~="not-prose"] *)) {
  @apply text-center text-sm text-secondary-light dark:text-secondary-dark mt-3 italic;
}

/* Listas */
.prose :where(ul):not(:where([class~="not-prose"] *)) {
  @apply my-6 pl-6;
}

.prose :where(ul > li):not(:where([class~="not-prose"] *)) {
  @apply mb-2;
}

.prose :where(ul > li):not(:where([class~="not-prose"] *))::before {
  @apply bg-brand-accent;
}

/* Enlaces */
.prose :where(a):not(:where([class~="not-prose"] *)) {
  @apply text-brand-accent hover:text-brand-accent/80 transition-colors duration-200 font-medium;
}

/* Estilos de subrayado */
.underline-yellow {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: theme('colors.brand-accent');
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.underline-blue {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: theme('colors.accent-info');
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  text-decoration-skip-ink: none;
}

.underline-pink {
  background-image: linear-gradient(to right, theme('colors.brand-accent'), theme('colors.brand-accent'));
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100% 3px;
}

/* Estilo general del contenido */
.article-content {
  @apply font-serif text-secondary-light dark:text-secondary-dark;
}

/* Clases para imágenes flotantes */
.article-content :deep(.image-float-left) {
  @apply float-none w-full md:float-left md:w-1/3 md:mr-6 mb-4 md:mb-2 rounded-lg;
  margin-top: 0.5rem;
  clear: both;
}

.article-content :deep(.image-float-right) {
  @apply float-none w-full md:float-right md:w-1/3 md:ml-6 mb-4 md:mb-2 rounded-lg;
  margin-top: 0.5rem;
  clear: both;
}

/* Asegurar que las listas no se solapen con imágenes flotantes */
.article-content :deep(ul), .article-content :deep(ol) {
  @apply overflow-hidden;
  clear: both;
}

/* Asegurar que las imágenes respeten los márgenes */
.article-content :deep(figure) {
  @apply my-4;
  max-width: 100%;
  clear: both;
}

/* Tablas */
.prose :where(table):not(:where([class~="not-prose"] *)) {
  @apply w-full my-8 border-collapse;
}

.prose :where(thead):not(:where([class~="not-prose"] *)) {
  @apply bg-surface-accent-light/20 dark:bg-surface-accent-dark/20;
}

.prose :where(th):not(:where([class~="not-prose"] *)) {
  @apply py-3 px-4 text-left font-semibold text-primary-light dark:text-primary-dark border-b border-surface-accent-light dark:border-surface-accent-dark;
}

.prose :where(td):not(:where([class~="not-prose"] *)) {
  @apply py-3 px-4 border-b border-surface-accent-light/30 dark:border-surface-accent-dark/30;
}
</style>
