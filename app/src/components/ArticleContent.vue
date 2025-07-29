<script setup>
import { computed } from 'vue';

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
});

const formattedDate = computed(() => {
  if (!props.article || !props.article.published_at) return '';
  const date = new Date(props.article.published_at);
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
});

const readingTime = computed(() => {
  if (!props.article || !props.article.content) return 3;
  return Math.max(3, Math.ceil(props.article.content.length / 2000));
});
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
    <!-- Metadatos del artículo -->
    <div class="flex items-center justify-center mb-4 text-sm text-secondary-light dark:text-secondary-dark">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
      </svg>
      <span>{{ readingTime }} min de lectura</span>
      <span v-if="formattedDate" class="mx-2">•</span>
      <span v-if="formattedDate">{{ formattedDate }}</span>
    </div>
    
    <!-- Contenido del artículo -->
    <article 
      class="article-content prose prose-lg dark:prose-invert max-w-none" 
      v-html="article.content"
    ></article>
  </div>
</template>

<style scoped>
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