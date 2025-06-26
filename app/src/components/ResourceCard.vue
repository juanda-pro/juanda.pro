<script setup>
import { computed } from 'vue';

const props = defineProps({
  resource: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['open']);

const categoryStyles = computed(() => {
  const styles = {
    'Plantillas Web': { // Brand color
      bg: 'bg-brand-accent-light/10 dark:bg-brand-accent-dark/10',
      text: 'text-brand-accent-light dark:text-brand-accent-dark',
      ring: 'ring-brand-accent-light/20 dark:ring-brand-accent-dark/20',
      iconBg: 'bg-brand-accent-light/20 dark:bg-brand-accent-dark/20',
      iconText: 'text-brand-accent-light dark:text-brand-accent-dark',
    },
    'N8N': { // Secondary, elegant color
      bg: 'bg-sky-100 dark:bg-sky-900/50',
      text: 'text-sky-800 dark:text-sky-300',
      ring: 'ring-sky-500/30 dark:ring-sky-500/30',
      iconBg: 'bg-sky-100 dark:bg-sky-800/50',
      iconText: 'text-sky-600 dark:text-sky-400',
    },
    'Make': { // Neutral, clean color
      bg: 'bg-gray-100 dark:bg-gray-800',
      text: 'text-gray-600 dark:text-gray-300',
      ring: 'ring-gray-200 dark:ring-gray-700',
      iconBg: 'bg-gray-200 dark:bg-gray-700/50',
      iconText: 'text-gray-500 dark:text-gray-400',
    },
  };
  return styles[props.resource.category] || {};
});
</script>

<template>
  <div 
    @click="emit('open', resource)"
    class="cursor-pointer bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col h-full transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-950/50 hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-1"
  >
    <div class="flex-grow">
      <div class="flex justify-between items-start mb-4">
        <div 
          class="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300"
          :class="[categoryStyles.iconBg, categoryStyles.iconText]"
          v-html="resource.icon"
        >
        </div>
        <span 
          class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset transition-colors duration-300"
          :class="[categoryStyles.bg, categoryStyles.text, categoryStyles.ring]"
        >
          {{ resource.category }}
        </span>
      </div>
      <h3 class="text-md font-semibold font-serif text-primary-light dark:text-primary-dark mb-2">{{ resource.title }}</h3>
      <p class="text-sm text-secondary-light dark:text-secondary-dark">{{ resource.description }}</p>
    </div>
  </div>
</template>
