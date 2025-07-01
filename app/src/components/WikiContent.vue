<script setup>
import { computed } from 'vue';
import { marked } from 'marked';
import MetadataRenderer from '@/components/MetadataRenderer.vue';

const props = defineProps({
  file: Object,
});

const parsedContent = computed(() => {
  if (props.file && props.file.content) {
    return marked(props.file.content);
  }
  return '';
});

const emit = defineEmits(['select-file']);

function handleSelect(fileId) {
  emit('select-file', fileId);
}
</script>

<template>
  <div class="w-full h-full">
    <div v-if="file" class="w-full h-full">
      <!-- Header: Title & Metadata. Sits on the main page background. -->
      <div class="px-8 lg:px-12 pt-8 pb-4">
        <MetadataRenderer :metadata="file.metadata" @select-relation="handleSelect" />
      </div>

      <!-- Content: Article body. Has the sidebar background color. -->
      <div class="bg-surface-light dark:bg-surface-dark">
        <div class="px-8 lg:px-12 py-8">
          <article class="prose dark:prose-invert max-w-none prose-headings:font-serif prose-headings:text-primary-light dark:prose-headings:text-primary-dark prose-p:text-secondary-light dark:prose-p:text-secondary-dark prose-a:text-brand-accent hover:prose-a:text-brand-accent-darker">
            <div v-html="parsedContent"></div>
          </article>
        </div>
      </div>
    </div>
    
    <!-- Placeholder when no file is selected -->
    <div v-else class="flex items-center justify-center h-full">
      <p class="text-secondary-light dark:text-secondary-dark">Selecciona un archivo del menú para ver su contenido.</p>
    </div>
  </div>
</template>
