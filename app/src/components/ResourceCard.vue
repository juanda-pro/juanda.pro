<script setup lang="ts">
import { computed } from 'vue';

interface CategoryStyle {
  bg: string;
  text: string;
  ring: string;
  iconBg: string;
  iconText: string;
}

const props = defineProps({
  resource: {
    type: Object as () => any,
    required: true
  }
});

const emit = defineEmits(['open']);

const categoryColorMap: Record<string, Omit<CategoryStyle, 'iconBg' | 'iconText'>> = {
  'N8N': { bg: 'bg-purple-500/10', text: 'text-purple-400', ring: 'ring-purple-500/30' },
  'Make': { bg: 'bg-red-500/10', text: 'text-red-400', ring: 'ring-red-500/30' },
  'Plantillas Web': { bg: 'bg-yellow-500/10', text: 'text-yellow-400', ring: 'ring-yellow-500/30' },
  'Default': { bg: 'bg-gray-500/10', text: 'text-gray-400', ring: 'ring-gray-500/30' },
};

const categoryStyles = computed<CategoryStyle>(() => {
  const baseColors = categoryColorMap[props.resource.category] || categoryColorMap['Default'];
  const iconColorMap: Record<string, { iconBg: string; iconText: string }> = {
    'N8N': { iconBg: 'bg-purple-500/20', iconText: 'text-purple-400' },
    'Make': { iconBg: 'bg-red-500/20', iconText: 'text-red-400' },
    'Plantillas Web': { iconBg: 'bg-yellow-500/20', iconText: 'text-yellow-400' },
    'Default': { iconBg: 'bg-gray-500/20', iconText: 'text-gray-400' },
  };
  const iconColors = iconColorMap[props.resource.category] || iconColorMap['Default'];

  return { ...baseColors, ...iconColors };
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
          class="inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset transition-colors duration-300"
          :class="[categoryStyles.bg, categoryStyles.text, categoryStyles.ring]"
        >
          {{ resource.category }}
        </span>
      </div>
      <h3 class="text-md font-semibold font-serif text-primary-light dark:text-primary-dark mb-2">{{ resource.title }}</h3>
      <p class="text-base text-secondary-light dark:text-secondary-dark">{{ resource.description }}</p>
    </div>
  </div>
</template>
