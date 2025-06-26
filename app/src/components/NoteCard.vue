<script setup>
defineProps({
  note: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <button 
    @click="$emit('open-note', note)" 
    class="w-full text-left bg-surface-light dark:bg-surface-dark rounded-lg border border-border-light dark:border-border-dark hover:bg-surface-accent-light dark:hover:bg-surface-accent-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
  >
    <div class="flex flex-col sm:flex-row sm:items-stretch">
      <div class="flex items-center justify-center p-6 text-tertiary-light dark:text-tertiary-dark">
        <div v-html="note.icon" class="w-16 h-16"></div>
      </div>
      <div class="flex-grow p-6 pt-0 sm:pt-6 border-t sm:border-t-0 sm:border-l border-border-light dark:border-border-dark">
        <span class="font-mono text-sm text-tertiary-light dark:text-tertiary-dark">#{{ note.category }}</span>
        <h3 class="text-xl font-bold text-primary-light dark:text-primary-dark font-serif mt-1 mb-2">{{ note.title }}</h3>
        <div class="prose prose-sm dark:prose-invert max-w-none text-secondary-light dark:text-secondary-dark font-serif" v-html="note.content"></div>
      </div>
    </div>
  </button>
</template>
