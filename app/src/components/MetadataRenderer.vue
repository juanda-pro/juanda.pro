<script setup>
import { computed } from 'vue';
import { CalendarIcon, SparklesIcon, DocumentTextIcon, LinkIcon } from '@heroicons/vue/24/outline';

defineProps({
  metadata: Object,
});

const emit = defineEmits(['select-relation']);

const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

</script>

<template>
  <div v-if="metadata" class="mb-8 border-b border-border-light dark:border-border-dark pb-6">
    <dl class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm">
      
      <!-- Fecha de Creación -->
      <div v-if="metadata.createdAt" class="flex items-start" title="Fecha de creación">
        <dt class="flex-shrink-0">
          <CalendarIcon class="h-5 w-5 text-secondary-light dark:text-secondary-dark mr-2" />
          <span class="sr-only">Fecha de creación</span>
        </dt>
        <dd class="text-secondary-light dark:text-secondary-dark">{{ formatDate(metadata.createdAt) }}</dd>
      </div>

      <!-- Formato/Tipo -->
      <div v-if="metadata.format" class="flex items-start" title="Formato">
        <dt class="flex-shrink-0">
          <SparklesIcon class="h-5 w-5 text-secondary-light dark:text-secondary-dark mr-2" />
          <span class="sr-only">Formato</span>
        </dt>
        <dd class="inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-900/50 px-2 py-1 font-medium text-yellow-800 dark:text-yellow-300 ring-1 ring-inset ring-yellow-600/20 dark:ring-yellow-500/30">
          {{ metadata.format }}
        </dd>
      </div>

      <!-- Abstract -->
      <div v-if="metadata.abstract" class="md:col-span-2 flex items-start" title="Resumen">
        <dt class="flex-shrink-0">
          <DocumentTextIcon class="h-5 w-5 text-secondary-light dark:text-secondary-dark mr-2 mt-0.5" />
          <span class="sr-only">Resumen</span>
        </dt>
        <dd class="text-secondary-light dark:text-secondary-dark">{{ metadata.abstract }}</dd>
      </div>

      <!-- Relaciones -->
      <div v-if="metadata.relations && metadata.relations.length" class="md:col-span-2 flex items-start" title="Notas relacionadas">
        <dt class="flex-shrink-0">
          <LinkIcon class="h-5 w-5 text-secondary-light dark:text-secondary-dark mr-2 mt-0.5" />
          <span class="sr-only">Notas relacionadas</span>
        </dt>
        <dd class="flex flex-wrap gap-2">
          <a v-for="relation in metadata.relations" :key="relation.id" href="#" @click.prevent="emit('select-relation', relation.id)" class="inline-flex items-center rounded-md bg-surface-light dark:bg-surface-dark px-2 py-1 font-medium text-secondary-light dark:text-secondary-dark ring-1 ring-inset ring-border-light dark:ring-border-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {{ relation.name }}
          </a>
        </dd>
      </div>

    </dl>
  </div>
</template>
