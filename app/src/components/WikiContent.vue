<script setup>
import MetadataRenderer from '@/components/MetadataRenderer.vue';

defineProps({
  file: Object,
});

const emit = defineEmits(['select-file']);

function handleSelect(fileId) {
  emit('select-file', fileId);
}
</script>

<template>
  <div class="w-full h-full bg-white dark:bg-slate-800/30 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-700/60 p-8 lg:p-12">
    <div v-if="file" class="w-full h-full">
      <MetadataRenderer :metadata="file.metadata" @select-relation="handleSelect" />
      <article class="prose dark:prose-invert max-w-none prose-headings:font-serif prose-headings:text-primary-light dark:prose-headings:text-primary-dark prose-p:text-secondary-light dark:prose-p:text-secondary-dark prose-a:text-brand-accent hover:prose-a:text-brand-accent-dark">
        <div v-html="file.content"></div>
      </article>
    </div>
    <div v-else class="flex items-center justify-center h-full">
      <p class="text-secondary-light dark:text-secondary-dark">Selecciona un archivo del menú para ver su contenido.</p>
    </div>
  </div>
</template>
