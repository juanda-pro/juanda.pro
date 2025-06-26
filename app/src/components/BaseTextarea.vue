<template>
  <div>
    <label v-if="label" :for="id" class="block text-sm font-semibold leading-6 text-primary-light dark:text-primary-dark">{{ label }}</label>
    <div class="mt-2.5">
      <textarea 
        :id="id" 
        :name="id" 
        :rows="rows" 
        :placeholder="placeholder" 
                 class="w-full px-4 py-3 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-primary-light dark:text-primary-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors placeholder:text-secondary-light dark:placeholder:text-secondary-dark"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    id: String,
    label: String,
    rows: {
      type: Number,
      default: 5
    },
    placeholder: String
  });
</script>
