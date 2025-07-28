<script setup lang="ts">
interface Props {
  type: 'arrow-down' | 'arrow-right' | 'chevron-down';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'text-brand-accent/50'
});

const getSizeClass = () => {
  switch (props.size) {
    case 'sm': return 'h-4 w-4';
    case 'md': return 'h-6 w-6';
    case 'lg': return 'h-12 w-12';
    default: return 'h-6 w-6';
  }
};
</script>

<template>
  <!-- Arrow Down -->
  <svg 
    v-if="type === 'arrow-down'"
    xmlns="http://www.w3.org/2000/svg" 
    :class="[getSizeClass(), color]" 
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

  <!-- Arrow Right -->
  <svg 
    v-if="type === 'arrow-right'"
    xmlns="http://www.w3.org/2000/svg" 
    :class="[getSizeClass(), color]" 
    viewBox="0 0 20 20" 
    fill="currentColor"
  >
    <path 
      fill-rule="evenodd" 
      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
      clip-rule="evenodd" 
    />
  </svg>

  <!-- Chevron Down -->
  <svg 
    v-if="type === 'chevron-down'"
    xmlns="http://www.w3.org/2000/svg" 
    :class="[getSizeClass(), color]" 
    viewBox="0 0 20 20" 
    fill="currentColor"
  >
    <path 
      fill-rule="evenodd" 
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
      clip-rule="evenodd" 
    />
  </svg>
</template>