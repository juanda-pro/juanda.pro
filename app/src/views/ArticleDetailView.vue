<script setup>
import { ref, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import { supabase } from '@/supabaseClient'; // Comentado para usar datos locales
import { getArticleBySlug, getPublishedArticles } from '@/data/articlesData';
import SectionWrapper from '@/components/SectionWrapper.vue';
import ArticleCard from '@/components/ArticleCard.vue';
import PageLayout from '@/components/PageLayout.vue';

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
    console.error('Error fetching article:', error);
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
      window.scrollTo(0, 0);
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="bg-light dark:bg-dark text-primary-light dark:text-primary-dark min-h-screen">
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
    <div v-else-if="article" class="flex flex-col gap-12 sm:gap-16 md:gap-20">
      <!-- Barra de navegación rápida -->
      <div class="sticky top-0 z-10 bg-light/80 dark:bg-dark/80 backdrop-blur-md border-b border-surface-accent-light dark:border-surface-accent-dark/30 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <router-link to="/blog" class="flex items-center text-sm font-medium text-secondary-light dark:text-secondary-dark hover:text-brand-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Volver al Blog
            </router-link>
            <div class="flex items-center space-x-4">
              <span class="text-xs font-medium text-brand-accent">{{ article.category }}</span>
              <span class="text-xs text-secondary-light dark:text-secondary-dark">{{ formattedDate }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Cabecera del Artículo -->
      <header class="pt-6 pb-4 sm:pt-8 sm:pb-6 text-center">
        <SectionWrapper>
          <p class="text-base font-semibold text-brand-accent mb-2 animate-fade-in">{{ article.category }}</p>
          <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-primary-light dark:text-primary-dark animate-fade-in-up">
            {{ article.title }}
          </h1>
          <p class="mt-6 text-lg text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto animate-fade-in-up delay-100">
            {{ article.description }}
          </p>
        </SectionWrapper>
      </header>

      <!-- Imagen Destacada con efecto parallax suave -->
      <div class="relative overflow-hidden max-h-[50vh] mb-6">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-light/90 dark:to-dark/90 z-10"></div>
        <img 
          :src="article.image_url" 
          :alt="`Imagen para ${article.title}`" 
          class="w-full h-auto object-cover animate-fade-in"
          style="min-height: 30vh; max-height: 50vh; width: 100%;"
        >
      </div>

      <!-- Contenido del Artículo -->
      <SectionWrapper>
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
      <SectionWrapper v-if="suggestedArticle" class="bg-surface-light dark:bg-surface-dark/50 rounded-lg">
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
    </div>
  </div>
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
  @apply text-2xl sm:text-3xl font-bold mt-16 mb-6 text-primary-light dark:text-primary-dark border-l-4 border-brand-accent pl-4 py-2 bg-surface-accent-light/20 dark:bg-surface-accent-dark/20 rounded-r-lg;
}

.prose :where(h3):not(:where([class~="not-prose"] *)) {
  @apply text-xl sm:text-2xl font-bold mt-10 mb-4 text-primary-light dark:text-primary-dark border-b border-brand-accent/30 pb-2;
}

.prose :where(p):not(:where([class~="not-prose"] *)) {
  @apply mb-6 leading-relaxed;
}

.prose :where(p.lead):not(:where([class~="not-prose"] *)) {
  @apply text-xl text-secondary-light dark:text-secondary-dark font-serif mb-8;
}

.prose :where(blockquote):not(:where([class~="not-prose"] *)) {
  @apply text-xl font-serif italic text-primary-light dark:text-primary-dark border-l-4 border-brand-accent bg-surface-accent-light/30 dark:bg-surface-accent-dark/30 px-6 py-4 my-8 rounded-r-lg;
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

/* Primera letra normal (dropcap eliminado) */
.article-content > :first-child::first-letter {
  /* Eliminado el estilo dropcap */
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
