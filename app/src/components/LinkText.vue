<template>
  <a 
    :href="href" 
    class="inline-flex items-center text-[#206372] dark:text-[#F5DF4D] hover:text-[#206372]/80 dark:hover:text-[#F5DF4D]/80 transition-all duration-300"
    :class="[groupClass, scaleClass, customClass]"
  >
    <slot></slot>
    
    <!-- Arrow Right Icon -->
    <svg 
      v-if="showArrow" 
      xmlns="http://www.w3.org/2000/svg" 
      class="h-4 w-4 text-current ml-1" 
      :class="arrowClass"
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path 
        fill-rule="evenodd" 
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
        clip-rule="evenodd"
      />
    </svg>
  </a>
</template>

<script setup lang="ts">
interface Props {
  href: string
  showArrow?: boolean
  arrowAnimation?: boolean
  customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  showArrow: true,
  arrowAnimation: false,
  customClass: ''
})

const groupClass = props.arrowAnimation ? 'group' : ''
const scaleClass = props.arrowAnimation ? 'hover:scale-105' : ''
const arrowClass = props.arrowAnimation ? 'transform transition-transform duration-300 group-hover:translate-x-1' : ''
</script>