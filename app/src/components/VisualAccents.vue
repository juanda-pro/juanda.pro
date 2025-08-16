<template>
  <div class="visual-accent">
    <!-- Arrow Down SVG -->
    <svg 
      v-if="type === 'arrow-down'"
      xmlns="http://www.w3.org/2000/svg" 
      class="h-6 w-6 text-[#206372]/50 dark:text-[#F5DF4D]/50" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>

    <!-- Decorative Arrow Span -->
    <span 
      v-else-if="type === 'arrow-span'"
      class="text-[#206372] dark:text-[#F5DF4D] text-2xl mr-2"
    >
      →
    </span>

    <!-- Gradient Divider -->
    <div 
      v-else-if="type === 'gradient-divider'"
      class="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#206372]/20 dark:from-[#F5DF4D]/20 to-transparent rounded-full"
    ></div>

    <!-- Custom SVG with slot -->
    <svg 
      v-else-if="type === 'custom-svg'"
      xmlns="http://www.w3.org/2000/svg" 
      :class="svgClass"
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <slot name="svg-path"></slot>
    </svg>

    <!-- Custom Text Accent -->
    <span 
      v-else-if="type === 'text-accent'"
      :class="textClass"
    >
      <slot></slot>
    </span>

    <!-- Custom Gradient Element -->
    <div 
      v-else-if="type === 'custom-gradient'"
      :class="gradientClass"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type: 'arrow-down' | 'arrow-span' | 'gradient-divider' | 'custom-svg' | 'text-accent' | 'custom-gradient'
  svgClass?: string
  textClass?: string
  gradientClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  svgClass: 'h-6 w-6 text-[#206372]/50 dark:text-[#F5DF4D]/50',
  textClass: 'text-[#206372] dark:text-[#F5DF4D] text-2xl',
  gradientClass: 'w-1 h-8 bg-gradient-to-b from-[#206372]/20 dark:from-[#F5DF4D]/20 to-transparent rounded-full'
})
</script>