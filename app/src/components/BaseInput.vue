<template>
  <div>
    <label v-if="label" :for="id" class="block text-sm font-semibold leading-6 text-primary-light dark:text-primary-dark">{{ label }}</label>
    <div class="mt-2.5">
      <input 
        :type="type" 
        :id="id" 
        :placeholder="placeholder" 
        class="w-full px-4 py-3 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-primary-light dark:text-primary-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors placeholder:text-tertiary-light dark:placeholder:text-tertiary-dark"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String
});
</script>
