<script setup>
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
// import { supabase } from '@/lib/supabase'; // Supabase is disabled
import SectionWrapper from '@/components/SectionWrapper.vue';
import ArticleCard from '@/components/ArticleCard.vue';

const route = useRoute();
const article = ref(null);
const isLoading = ref(false); // Set to false as we are not fetching
const errorMessage = ref('');
const suggestedArticle = ref(null);

const formattedDate = computed(() => {
  if (!article.value || !article.value.published_at) return '';
  const date = new Date(article.value.published_at);
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
});

// Mock data for a single article view
const mockArticles = {
  'ia-generativa-futuro-contenido': {
    slug: 'ia-generativa-futuro-contenido',
    title: 'IA Generativa: El Futuro de la Creación de Contenido',
    category: 'IA',
    published_at: '2024-05-20 10:00:00+00',
    readingTime: '7 min de lectura',
    image_url: 'https://images.unsplash.com/photo-1680783954745-3249be59e527?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Exploramos cómo la IA generativa está cambiando el panorama del marketing, el arte y la programación.',
    content: '<p>Contenido completo del artículo sobre IA Generativa...</p>'
  },
  'guia-vue-3-composition-api': {
    slug: 'guia-vue-3-composition-api',
    title: 'Guía Completa de Vue 3 y Composition API',
    category: 'Desarrollo',
    published_at: '2024-05-15 09:00:00+00',
    readingTime: '12 min de lectura',
    image_url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
    description: 'Una guía detallada para dominar la Composition API de Vue 3, con ejemplos prácticos y consejos.',
    content: '<p>Contenido completo de la guía de Vue 3...</p>'
  },
  'minimalismo-digital-enfoque': {
    slug: 'minimalismo-digital-enfoque',
    title: 'Minimalismo Digital: Cómo Enfocarse en lo que Importa',
    category: 'Productividad',
    published_at: '2024-05-10 11:00:00+00',
    readingTime: '6 min de lectura',
    image_url: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Estrategias para reducir el ruido digital y aumentar la productividad y el bienestar en tu vida.',
    content: '<p>Contenido completo sobre minimalismo digital...</p>'
  },
  'supabase-alternativa-firebase': {
    slug: 'supabase-alternativa-firebase',
    title: 'El Auge de Supabase como Alternativa a Firebase',
    category: 'Tecnología',
    published_at: '2024-05-05 14:00:00+00',
    readingTime: '5 min de lectura',
    image_url: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Analizamos las ventajas de Supabase, el backend open-source que está ganando terreno rápidamente.',
    content: '<p>Contenido completo sobre Supabase...</p>'
  },
  'meditacion-y-codigo': {
    slug: 'meditacion-y-codigo',
    title: 'Meditación y Código: La Conexión Inesperada',
    category: 'Bienestar',
    published_at: '2024-05-01 08:00:00+00',
    readingTime: '8 min de lectura',
    image_url: 'https://images.unsplash.com/photo-1680783954745-3249be59e527?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Descubre cómo prácticas de mindfulness pueden mejorar tu concentración y calidad como desarrollador.',
    content: '<p>Contenido completo sobre meditación y código...</p>'
  }
};

const fetchMockArticle = (slug) => {
  isLoading.value = true;
  setTimeout(() => {
    const foundArticle = mockArticles[slug];
    if (foundArticle) {
      article.value = foundArticle;
      errorMessage.value = '';
    } else {
      article.value = null;
      errorMessage.value = 'El artículo que buscas no fue encontrado.';
    }
    isLoading.value = false;
  }, 500);
};

watch(
  () => route.params.slug,
  (newSlug) => {
    if (newSlug) {
      fetchMockArticle(newSlug);
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
    <div v-else-if="article">
      <!-- Cabecera del Artículo -->
      <header class="pt-24 pb-12 sm:pt-32 sm:pb-16 text-center">
        <SectionWrapper>
          <p class="text-base font-semibold text-brand-accent mb-2">{{ article.category }}</p>
          <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-primary-light dark:text-primary-dark">{{ article.title }}</h1>
          <div class="mt-6 text-base text-secondary-light dark:text-secondary-dark flex items-center justify-center space-x-4">
            <span>{{ formattedDate }}</span>
            <span class="text-divider-light dark:text-divider-dark">•</span>
            <span>{{ article.readingTime }}</span>
          </div>
        </SectionWrapper>
      </header>

      <!-- Imagen Destacada -->
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <img :src="article.image_url" :alt="`Imagen para ${article.title}`" class="rounded-lg shadow-xl w-full h-auto object-cover aspect-video">
      </div>

      <!-- Contenido del Artículo -->
      <SectionWrapper>
        <div class="max-w-3xl mx-auto">
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
