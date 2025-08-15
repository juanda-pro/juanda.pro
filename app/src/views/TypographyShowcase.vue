<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
    <main class="container mx-auto py-16 px-4">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">Laboratorio Tipográfico</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">Un espacio para definir la voz de juanda.pro</p>
      </div>

      <div class="flex justify-center mb-16">
        <button @click="() => toggleTheme()" class="px-6 py-3 rounded-full font-bold text-sm text-white dark:text-gray-900 bg-gray-800 dark:bg-yellow-400 hover:bg-black dark:hover:bg-yellow-500 transition-all duration-300 shadow-lg">
          <span v-if="isDarkMode">☀️ Activar Modo Claro</span>
          <span v-else>🌙 Activar Modo Oscuro</span>
        </button>
      </div>

      <div class="space-y-20">
        <TypographyOption 
          v-for="option in typographyOptions" 
          :key="option.title" 
          :option="option" 
        />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { typographyOptions } from '@/data/typographyOptions';
import TypographyOption from '@/components/typography/TypographyOption.vue';

const isDarkMode = useDark();
const toggleTheme = useToggle(isDarkMode);
</script>
