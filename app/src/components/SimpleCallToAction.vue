<template>
  <div class="max-w-2xl mx-auto space-y-6 text-center">
    <h3 class="text-2xl font-bold text-primary-light dark:text-primary-dark">
      {{ title }}
    </h3>
    
    <p class="text-xl text-secondary-light dark:text-secondary-dark">
      {{ description }}
    </p>
    
    <div class="flex flex-row flex-nowrap gap-6 justify-center items-center pt-4">
      <a 
        v-if="secondaryButton"
        :href="secondaryButton.href"
        class="inline-flex items-center text-accent-primary-light dark:text-accent-primary-dark hover:text-accent-primary-light/80 dark:hover:text-accent-primary-dark/80 transition-all duration-300 group font-medium hover:scale-105"
      >
        <!-- Arrow Left Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-current mr-2 transform transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
        </svg>
        {{ secondaryButton.text }}
      </a>
      
      <span 
        v-if="primaryButton && secondaryButton"
        class="text-accent-primary-light dark:text-accent-primary-dark text-xl"
      >
        |
      </span>
      
      <a 
        v-if="primaryButton"
        @click="$emit('primary-action')"
        href="#"
        class="inline-flex items-center text-accent-primary-light dark:text-accent-primary-dark hover:text-accent-primary-light/80 dark:hover:text-accent-primary-dark/80 transition-all duration-300 group font-medium hover:scale-105"
      >
        {{ primaryButton.text }}
        <!-- Arrow Right Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-current ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ButtonConfig {
  text: string
  href?: string
}

interface Props {
  title: string
  description: string
  primaryButton?: ButtonConfig
  secondaryButton?: ButtonConfig
}

defineProps<Props>()
defineEmits<{
  'primary-action': []
}>()
</script>