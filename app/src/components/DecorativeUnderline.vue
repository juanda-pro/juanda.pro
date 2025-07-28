<script setup lang="ts">
interface Props {
  width?: 'full' | 'half' | 'quarter';
  opacity?: 'low' | 'medium' | 'high';
  position?: 'center' | 'left' | 'right';
}

const props = withDefaults(defineProps<Props>(), {
  width: 'quarter',
  opacity: 'high',
  position: 'center'
});

const getWidthClass = () => {
  switch (props.width) {
    case 'full': return 'left-0 right-0';
    case 'half': return 'left-1/4 right-1/4';
    case 'quarter': return 'left-1/4 right-1/4';
    default: return 'left-1/4 right-1/4';
  }
};

const getOpacityClass = () => {
  switch (props.opacity) {
    case 'low': return 'via-brand-accent/20';
    case 'medium': return 'via-brand-accent/40';
    case 'high': return 'via-brand-accent';
    default: return 'via-brand-accent';
  }
};
</script>

<template>
  <span 
    class="absolute -bottom-2 h-1 bg-gradient-to-r from-transparent to-transparent"
    :class="[getWidthClass(), getOpacityClass()]"
  ></span>
</template>