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
    'Plantillas Web': {
      bg: 'bg-brand-accent/10 dark:bg-brand-accent/20',
      text: 'text-brand-accent-darker dark:text-brand-accent',
      ring: 'ring-brand-accent/20 dark:ring-brand-accent/30',
      iconBg: 'bg-brand-accent/20 dark:bg-brand-accent/30',
      iconText: 'text-brand-accent-darker dark:text-brand-accent',
    },
    'N8N': {
      bg: 'bg-accent-info/10 dark:bg-accent-info/20',
      text: 'text-accent-info-darker dark:text-accent-info',
      ring: 'ring-accent-info/20 dark:ring-accent-info/30',
      iconBg: 'bg-accent-info/20 dark:bg-accent-info/30',
      iconText: 'text-accent-info-darker dark:text-accent-info',
    },
    'Make': {
      bg: 'bg-surface-accent-light dark:bg-surface-accent-dark',
      text: 'text-secondary-light dark:text-secondary-dark',
      ring: 'ring-border-light dark:ring-border-dark',
      iconBg: 'bg-surface-accent-light dark:bg-surface-accent-dark',
      iconText: 'text-secondary-light dark:text-secondary-dark',
    },
  };
  return styles[props.resource.category] || {};
});
</script>

<template>
  <div 
    @click="emit('open', resource)"
    class="cursor-pointer bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark flex flex-col h-full transition-all duration-300 hover:shadow-xl dark:hover:shadow-surface-dark/50 hover:border-brand-accent/50 dark:hover:border-brand-accent/50 hover:-translate-y-1"
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
