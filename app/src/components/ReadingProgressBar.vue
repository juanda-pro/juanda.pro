<template>
  <div class="fixed top-0 left-0 w-full h-1 z-50">
    <div 
      class="h-full bg-brand-accent transition-all duration-100 ease-linear" 
      :style="{ width: `${scrollPercentage}%` }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollPercentage = ref(0);

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  if (scrollHeight > 0) {
    scrollPercentage.value = (scrollTop / scrollHeight) * 100;
  } else {
    scrollPercentage.value = 0;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
