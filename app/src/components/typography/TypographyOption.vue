<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 transition-colors duration-200">
    <div class="mb-6">
      <h3 :class="[getColorClasses(option.color), 'text-xl font-semibold mb-2']">
        {{ option.title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm">
        {{ option.description }}
      </p>
    </div>

    <div class="space-y-6">
      <!-- Ejemplo de titular -->
      <div>
        <h4 :class="[option.headingFontClass, 'text-3xl font-bold mb-3 text-gray-900 dark:text-white']">
          {{ option.headingText }}
        </h4>
        <p :class="[option.bodyFontClass, 'text-gray-700 dark:text-gray-300 leading-relaxed']">
          {{ option.headingDescription }}
        </p>
      </div>

      <!-- Ejemplo de cuerpo de texto -->
      <div>
        <h5 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
          Texto de cuerpo
        </h5>
        <p :class="[option.bodyFontClass, 'text-gray-700 dark:text-gray-300 leading-relaxed']">
          {{ option.bodyDescription }}
        </p>
      </div>

      <!-- Información técnica -->
      <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span class="font-medium text-gray-500 dark:text-gray-400">Titular:</span>
            <code class="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
              {{ option.headingFontClass }}
            </code>
          </div>
          <div>
            <span class="font-medium text-gray-500 dark:text-gray-400">Cuerpo:</span>
            <code class="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
              {{ option.bodyFontClass }}
            </code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TypographyOption } from '@/data/typographyOptions';

interface Props {
  option: TypographyOption;
}

defineProps<Props>();

// Función para obtener clases de color seguras
const getColorClasses = (color: string): string => {
  const colorMap: Record<string, string> = {
    blue: 'text-blue-600 dark:text-blue-400',
    purple: 'text-purple-600 dark:text-purple-400',
    teal: 'text-teal-600 dark:text-teal-400',
    indigo: 'text-indigo-600 dark:text-indigo-400',
    green: 'text-green-600 dark:text-green-400',
    rose: 'text-rose-600 dark:text-rose-400'
  };
  return colorMap[color] || 'text-gray-600 dark:text-gray-400';
};
</script>