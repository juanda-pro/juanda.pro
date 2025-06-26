<script setup>
import { ref } from 'vue';
import { ChevronLeftIcon } from '@heroicons/vue/24/solid';

const isSidebarCollapsed = ref(false);

const emit = defineEmits(['select-file']);

function toggleSidebar() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
}

function handleFileSelect(fileId) {
  isSidebarCollapsed.value = true; // Always collapse on selection for overlap UX
  emit('select-file', fileId);
}
</script>

<template>
  <div class="relative w-full">
    <!-- Sidebar -->
    <aside
      class="fixed top-0 left-0 h-full z-40 transition-transform duration-300 ease-in-out transform-gpu"
      :class="[isSidebarCollapsed ? '-translate-x-full' : 'translate-x-0']"
    >
      <div class="relative w-64 h-full bg-white dark:bg-gray-900 shadow-2xl overflow-hidden">
        <!-- Dot Pattern Background -->
        <div class="dot-pattern absolute inset-0"></div>
        
        <!-- Sidebar Content -->
        <div class="relative h-full overflow-y-auto">
          <div class="pt-24 pb-8 px-4 h-full">
            <slot name="sidebar" @select-file="handleFileSelect"></slot>
          </div>
        </div>
      </div>
    </aside>

    <!-- Botón de control del menú -->
    <button
      @click="toggleSidebar"
      class="fixed top-1/2 z-50 flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-900 shadow-xl rounded-full transition-all duration-300 ease-in-out transform-gpu -translate-y-1/2 border border-gray-200 dark:border-gray-700 hover:scale-110 active:scale-95"
      :class="[isSidebarCollapsed ? 'left-4' : 'left-60']"
      aria-label="Toggle sidebar"
    >
      <ChevronLeftIcon class="h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-300" :class="{'rotate-180' : isSidebarCollapsed}" />
    </button>

    <!-- Content Slot -->
    <main class="min-w-0">
      <slot name="content"></slot>
    </main>
  </div>
</template>

<style scoped>
.dot-pattern {
  background-image: 
    radial-gradient(circle at 1px 1px, theme('colors.gray.200') 1px, transparent 0);
  background-size: 1.25rem 1.25rem;
}
.dark .dot-pattern {
  background-image: 
    radial-gradient(circle at 1px 1px, theme('colors.gray.800') 1px, transparent 0);
}
</style>
