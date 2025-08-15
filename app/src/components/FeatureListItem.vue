<template>
  <div class="fade-in-element opacity-0 transform translate-y-4 text-center" :class="delayClass">
    <div class="mb-4 mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-[#206372]/10 dark:bg-[#F5DF4D]/5 border border-[#206372]/20 dark:border-[#F5DF4D]/20">
      <!-- Custom SVG Icon -->
      <svg 
        v-if="iconType === 'custom'"
        xmlns="http://www.w3.org/2000/svg" 
        class="h-8 w-8 text-[#206372] dark:text-[#F5DF4D]" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        stroke-width="2"
      >
        <slot name="icon"></slot>
      </svg>
      
      <!-- Check Circle Icon -->
      <svg 
        v-else-if="iconType === 'check'"
        xmlns="http://www.w3.org/2000/svg" 
        class="h-8 w-8 text-[#206372] dark:text-[#F5DF4D]" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        stroke-width="2"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      
      <!-- Star Icon -->
      <svg 
        v-else-if="iconType === 'star'"
        xmlns="http://www.w3.org/2000/svg" 
        class="h-8 w-8 text-[#206372] dark:text-[#F5DF4D]" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        stroke-width="2"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
      
      <!-- Heart Icon -->
      <svg 
        v-else-if="iconType === 'heart'"
        xmlns="http://www.w3.org/2000/svg" 
        class="h-8 w-8 text-[#206372] dark:text-[#F5DF4D]" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        stroke-width="2"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </div>
    
    <h4 class="text-xl font-bold text-primary-light dark:text-primary-dark mb-2">
      {{ title }}
    </h4>
    
    <p class="text-secondary-light dark:text-secondary-dark">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  iconType?: 'custom' | 'check' | 'star' | 'heart'
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  iconType: 'check',
  delay: 0
})

const delayClass = `delay-${props.delay * 100}`
</script>