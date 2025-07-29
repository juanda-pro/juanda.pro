<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { getArticleBySlug, getPublishedArticles, getAdjacentArticles } from '@/data/articlesData';
import SectionWrapper from '@/components/SectionWrapper.vue';
import PageLayout from '@/components/PageLayout.vue';
import HeroSection from '@/components/HeroSection.vue';
import ArticleContent from '@/components/ArticleContent.vue';
import ArticleNavigation from '@/components/ArticleNavigation.vue';
import ArticleNavButtons from '@/components/ArticleNavButtons.vue';

const route = useRoute();
const router = useRouter();
const article = ref(null);
const isLoading = ref(true);
const errorMessage = ref('');
const suggestedArticle = ref(null);
const adjacentArticles = ref({ previous: null, next: null });

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
      
      // Cargar artículos adyacentes para navegación
      adjacentArticles.value = getAdjacentArticles(slug);
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
        <ArticleContent :article="article" />
      </SectionWrapper>

      <!-- Navegación y elementos auxiliares -->
      <ArticleNavigation :suggested-article="suggestedArticle" />
      
      <!-- Navegación entre artículos -->
       <SectionWrapper>
         <ArticleNavButtons 
           :previous-article="adjacentArticles.previous" 
           :next-article="adjacentArticles.next" 
         />
       </SectionWrapper>
    </template>
  </PageLayout>
</template>

<style scoped>
/* Vista simplificada - estilos específicos movidos a componentes */
</style>
