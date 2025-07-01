<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '@/lib/supabase';
import SectionWrapper from '@/components/SectionWrapper.vue';
import ArticleCard from '@/components/ArticleCard.vue';

const route = useRoute();
const article = ref(null);
const isLoading = ref(true);
const errorMessage = ref('');
const suggestedArticle = ref(null); // TODO: Implementar la lógica para sugerir un artículo

async function fetchArticle(slug) {
  try {
    isLoading.value = true;
    errorMessage.value = '';
    article.value = null;

    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // This code signifies that no rows were found, which is a clean 'Not Found' case
        errorMessage.value = 'Artículo no encontrado.';
        console.error('Article not found for slug:', slug);
      } else {
        // For other errors, we throw them to be caught by the catch block
        throw error;
      }
    } else {
      article.value = data;
      // Aquí se podría implementar la lógica para buscar un artículo sugerido
    }
  } catch (error) {
    console.error('Error fetching article:', error.message);
    errorMessage.value = 'Ocurrió un error al cargar el artículo. Por favor, inténtalo de nuevo más tarde.';
  } finally {
    isLoading.value = false;
  }
}

// Observar cambios en el slug de la ruta y volver a cargar los datos
watch(
  () => route.params.slug,
  (newSlug) => {
    if (newSlug) {
      fetchArticle(newSlug);
      window.scrollTo(0, 0); // Asegurar que la vista suba al inicio al cambiar de artículo
    }
  },
  { immediate: true } // `immediate: true` ejecuta el observador inmediatamente al montar el componente
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
    <div v-else-if="article">
      <!-- Cabecera del Artículo -->
      <header class="pt-24 pb-12 sm:pt-32 sm:pb-16 text-center">
        <SectionWrapper>
          <p class="text-base font-semibold text-brand-accent mb-2">{{ article.category }}</p>
          <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-primary-light dark:text-primary-dark">{{ article.title }}</h1>
          <div class="mt-6 text-base text-secondary-light dark:text-secondary-dark flex items-center justify-center space-x-4">
            <span>{{ article.date }}</span>
            <span class="text-divider-light dark:text-divider-dark">•</span>
            <span>{{ article.readingTime }}</span>
          </div>
        </SectionWrapper>
      </header>

      <!-- Imagen Destacada -->
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <img :src="article.image" :alt="`Imagen para ${article.title}`" class="rounded-lg shadow-xl w-full h-auto object-cover aspect-video">
      </div>

      <!-- Contenido del Artículo -->
      <SectionWrapper>
        <div class="max-w-3xl mx-auto">
          <!-- Corrección Semántica: se usa <article> en lugar de <div> -->
          <article class="article-content prose prose-lg dark:prose-invert max-w-none mt-12" v-html="article.content"></article>
        </div>
      </SectionWrapper>

      <!-- Artículo Sugerido -->
      <aside v-if="suggestedArticle" class="py-16 sm:py-24 bg-light dark:bg-surface-dark/50 mt-16">
        <SectionWrapper>
          <h2 class="text-2xl sm:text-3xl font-bold text-center mb-12">Otro artículo que podría interesarte</h2>
          <div class="max-w-2xl mx-auto">
            <ArticleCard :article="suggestedArticle" />
          </div>
        </SectionWrapper>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
    @apply text-2xl sm:text-3xl font-bold mt-12 mb-6 text-primary-light dark:text-primary-dark border-l-4 border-brand-accent pl-4;
}

.prose :where(h3):not(:where([class~="not-prose"] *)) {
    @apply text-xl sm:text-2xl font-bold mt-8 mb-4 text-primary-light dark:text-primary-dark;
}

.prose :where(p.lead):not(:where([class~="not-prose"] *)) {
  @apply text-xl text-secondary-light dark:text-secondary-dark font-serif;
}

.prose :where(blockquote):not(:where([class~="not-prose"] *)) {
  @apply text-xl font-serif italic text-primary-light dark:text-primary-dark border-l-4 border-brand-accent bg-surface-accent-light dark:bg-surface-accent-dark/50 px-6 py-4 my-8;
}

.prose :where(figure.inset-image):not(:where([class~="not-prose"] *)) {
  @apply lg:-mx-16 my-12;
}

.prose :where(figure.inset-image img):not(:where([class~="not-prose"] *)) {
  @apply w-full rounded-lg shadow-xl;
}

.prose :where(figure.inset-image figcaption):not(:where([class~="not-prose"] *)) {
  @apply text-center text-sm text-secondary-light dark:text-secondary-dark mt-4;
}

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

.prose :where(ul > li):not(:where([class~="not-prose"] *))::before {
    @apply bg-brand-accent;
}

.article-content {
  @apply font-serif text-secondary-light dark:text-secondary-dark;
}

.article-content > :first-child::first-letter {
  @apply text-5xl sm:text-6xl font-bold text-brand-accent float-left pr-3 pt-1;
}
</style>
