<script setup lang="ts">
import { ref } from 'vue'

// Tipos para la estructura de datos
interface ColorInfo {
  hex: string
  class: string
}

interface ColorGroup {
  name: string
  description?: string // Propiedad opcional
  light: ColorInfo
  dark: ColorInfo
}

interface ColorCategory {
  title: string
  description: string
  colors: ColorGroup[]
}

// Datos de la paleta de colores organizados por categorías
const colorCategories: ColorCategory[] = [
  {
    title: '🎯 Colores Base Validados',
    description: 'Colores principales ya validados y aprobados para el sistema',
    colors: [
      {
        name: 'Fondos del Body',
        light: { hex: '#F5F5F5', class: 'bg-body-light' },
        dark: { hex: '#1D1E23', class: 'bg-body-dark' }
      },
      {
        name: 'Colores de Acento',
        light: { hex: '#206372', class: 'accent-primary-light' },
        dark: { hex: '#F5DF4D', class: 'accent-primary-dark' }
      },
      {
        name: 'Fondos de Tarjetas',
        light: { hex: '#FFFFFF', class: 'bg-card-light' },
        dark: { hex: '#191A1D', class: 'bg-card-dark' }
      },
      {
        name: 'Textos Principales',
        light: { hex: '#262626', class: 'text-primary-light' },
        dark: { hex: '#F4F4F4', class: 'text-primary-dark' }
      }
    ]
  },
  {
    title: '📝 Textos',
    description: 'Colores para diferentes tipos de texto y jerarquías',
    colors: [
      {
        name: 'Textos Principales',
        description: 'Títulos y contenido importante',
        light: { hex: '#262626', class: 'text-primary-light' },
        dark: { hex: '#F4F4F4', class: 'text-primary-dark' }
      },
      {
        name: 'Textos Secundarios',
        description: 'Descripciones y subtítulos (~70% opacidad)',
        light: { hex: '#525252', class: 'text-secondary-light' },
        dark: { hex: '#D4D4D4', class: 'text-secondary-dark' }
      },
      {
        name: 'Textos Auxiliares',
        description: 'Placeholders y hints (~50-60% opacidad)',
        light: { hex: '#737373', class: 'text-muted-light' },
        dark: { hex: '#A3A3A3', class: 'text-muted-dark' }
      },
      {
        name: 'Textos sobre Acentos',
        description: 'Texto que va sobre fondos de acento',
        light: { hex: '#FFFFFF', class: 'text-on-accent-light' },
        dark: { hex: '#262626', class: 'text-on-accent-dark' }
      }
    ]
  },
  {
    title: '🎨 Acentos y Interacciones',
    description: 'Colores para botones, enlaces y elementos interactivos',
    colors: [
      {
        name: 'Acentos Principales',
        description: 'Botones, enlaces y hover states',
        light: { hex: '#206372', class: 'accent-primary-light' },
        dark: { hex: '#F5DF4D', class: 'accent-primary-dark' }
      },
      {
        name: 'Fondos de Acento',
        description: 'Fondos para botones y elementos destacados',
        light: { hex: '#206372', class: 'bg-accent-light' },
        dark: { hex: '#F5DF4D', class: 'bg-accent-dark' }
      },
      {
        name: 'Acentos Sutiles',
        description: 'Bordes y elementos decorativos con opacidad',
        light: { hex: '#4A9BAA', class: 'accent-subtle-light' },
        dark: { hex: '#F7E97A', class: 'accent-subtle-dark' }
      }
    ]
  },
  {
    title: '⚠️ Estados y Feedback',
    description: 'Colores para comunicar estados de formularios y mensajes',
    colors: [
      {
        name: 'Estados de Éxito',
        description: 'Confirmaciones y operaciones exitosas',
        light: { hex: '#059669', class: 'text-success-light' },
        dark: { hex: '#10B981', class: 'text-success-dark' }
      },
      {
        name: 'Estados de Error',
        description: 'Errores y validaciones fallidas',
        light: { hex: '#DC2626', class: 'text-error-light' },
        dark: { hex: '#EF4444', class: 'text-error-dark' }
      },
      {
        name: 'Estados de Advertencia',
        description: 'Avisos y precauciones',
        light: { hex: '#D97706', class: 'text-warning-light' },
        dark: { hex: '#F59E0B', class: 'text-warning-dark' }
      },
      {
        name: 'Estados de Información',
        description: 'Mensajes informativos y tips',
        light: { hex: '#2563EB', class: 'text-info-light' },
        dark: { hex: '#3B82F6', class: 'text-info-dark' }
      }
    ]
  },
  {
    title: '🔲 Bordes y Separadores',
    description: 'Colores para bordes, líneas y elementos de separación',
    colors: [
      {
        name: 'Bordes Principales',
        description: 'Bordes estándar para componentes',
        light: { hex: '#E5E7EB', class: 'border-primary-light' },
        dark: { hex: '#374151', class: 'border-primary-dark' }
      },
      {
        name: 'Bordes de Acento',
        description: 'Bordes destacados y focus states',
        light: { hex: '#206372', class: 'border-accent-light' },
        dark: { hex: '#F5DF4D', class: 'border-accent-dark' }
      },
      {
        name: 'Bordes Sutiles',
        description: 'Bordes con menor contraste',
        light: { hex: '#F3F4F6', class: 'border-subtle-light' },
        dark: { hex: '#4B5563', class: 'border-subtle-dark' }
      },
      {
        name: 'Separadores',
        description: 'Líneas divisorias y elementos decorativos',
        light: { hex: '#E5E7EB', class: 'divider-light' },
        dark: { hex: '#374151', class: 'divider-dark' }
      }
    ]
  },
  {
    title: '🔧 Elementos Específicos',
    description: 'Colores para casos de uso específicos',
    colors: [
      {
        name: 'Placeholders',
        description: 'Texto placeholder en formularios',
        light: { hex: '#9CA3AF', class: 'placeholder-light' },
        dark: { hex: '#6B7280', class: 'placeholder-dark' }
      },
      {
        name: 'Textos de Ayuda',
        description: 'Hints y textos de asistencia',
        light: { hex: '#6B7280', class: 'help-text-light' },
        dark: { hex: '#9CA3AF', class: 'help-text-dark' }
      },
      {
        name: 'Hints de Navegación',
        description: 'Textos como "Presiona Enter", etc.',
        light: { hex: '#9CA3AF', class: 'nav-hint-light' },
        dark: { hex: '#6B7280', class: 'nav-hint-dark' }
      },
      {
        name: 'Estados Deshabilitados',
        description: 'Elementos no interactivos',
        light: { hex: '#D1D5DB', class: 'disabled-light' },
        dark: { hex: '#4B5563', class: 'disabled-dark' }
      }
    ]
  }
]

const expandedSections = ref<Set<number>>(new Set([0])) // Primera sección expandida por defecto

const toggleSection = (index: number) => {
  if (expandedSections.value.has(index)) {
    expandedSections.value.delete(index)
  } else {
    expandedSections.value.add(index)
  }
}

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    // Aquí podrías agregar una notificación de éxito
  } catch (err) {
    console.error('Error al copiar al portapapeles:', err)
  }
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <!-- Introducción -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-primary-light dark:text-primary-dark mb-4">
        Paleta de Colores
      </h1>
      <div class="bg-white dark:bg-[#191A1D] rounded-lg p-6 border border-border-light dark:border-border-dark">
        <p class="text-secondary-light dark:text-secondary-dark mb-4">
          Esta es la paleta de colores definitiva del sistema de diseño. Todos los colores están 
          organizados por categorías y incluyen sus códigos HEX y clases CSS correspondientes.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 class="font-semibold text-primary-light dark:text-primary-dark mb-2">✅ Características:</h3>
            <ul class="space-y-1 text-secondary-light dark:text-secondary-dark">
              <li>• Solo colores HEX (sin rgba)</li>
              <li>• Consistencia entre modos claro y oscuro</li>
              <li>• Contrastes validados para accesibilidad</li>
              <li>• Nombres de clases descriptivos</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-primary-light dark:text-primary-dark mb-2">🎯 Uso:</h3>
            <ul class="space-y-1 text-secondary-light dark:text-secondary-dark">
              <li>• Haz clic en cualquier color para copiarlo</li>
              <li>• Usa las clases CSS en tus componentes</li>
              <li>• Respeta la jerarquía de colores</li>
              <li>• Mantén la consistencia visual</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Categorías de colores -->
    <div class="space-y-6">
      <div 
        v-for="(category, categoryIndex) in colorCategories" 
        :key="categoryIndex"
        class="bg-white dark:bg-[#191A1D] rounded-lg border border-border-light dark:border-border-dark overflow-hidden"
      >
        <!-- Header de la categoría -->
        <button
          @click="toggleSection(categoryIndex)"
          class="w-full px-6 py-4 text-left hover:bg-surface-light dark:hover:bg-surface-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#206372] dark:focus:ring-[#F5DF4D] focus:ring-inset"
        >
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-semibold text-primary-light dark:text-primary-dark">
                {{ category.title }}
              </h2>
              <p class="text-sm text-secondary-light dark:text-secondary-dark mt-1">
                {{ category.description }}
              </p>
            </div>
            <div class="text-secondary-light dark:text-secondary-dark transform transition-transform duration-200" :class="{ 'rotate-180': expandedSections.has(categoryIndex) }">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </button>

        <!-- Contenido de la categoría -->
        <div v-if="expandedSections.has(categoryIndex)" class="px-6 pb-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div 
              v-for="(colorGroup, groupIndex) in category.colors" 
              :key="groupIndex"
              class="border border-border-light dark:border-border-dark rounded-lg p-4"
            >
              <h3 class="font-semibold text-primary-light dark:text-primary-dark mb-2">
                {{ colorGroup.name }}
              </h3>
              <p v-if="colorGroup.description" class="text-sm text-secondary-light dark:text-secondary-dark mb-4">
                {{ colorGroup.description }}
              </p>
              
              <!-- Colores modo claro y oscuro -->
              <div class="space-y-3">
                <!-- Modo claro -->
                <div class="flex items-center space-x-3">
                  <div class="flex items-center space-x-2">
                    <button
                      @click="copyToClipboard(colorGroup.light.hex)"
                      :style="{ backgroundColor: colorGroup.light.hex }"
                      class="w-8 h-8 rounded border border-border-light dark:border-border-dark hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#206372] dark:focus:ring-[#F5DF4D]"
                      :title="`Copiar ${colorGroup.light.hex}`"
                    ></button>
                    <div>
                      <div class="text-sm font-mono text-primary-light dark:text-primary-dark">
                        {{ colorGroup.light.hex }}
                      </div>
                      <div class="text-xs text-secondary-light dark:text-secondary-dark">
                        Modo claro
                      </div>
                    </div>
                  </div>
                  <button
                    @click="copyToClipboard(colorGroup.light.class)"
                    class="text-xs font-mono bg-surface-light dark:bg-surface-dark px-2 py-1 rounded border border-border-light dark:border-border-dark hover:bg-[#206372] hover:text-white dark:hover:bg-[#F5DF4D] dark:hover:text-[#262626] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#206372] dark:focus:ring-[#F5DF4D]"
                    :title="`Copiar clase ${colorGroup.light.class}`"
                  >
                    {{ colorGroup.light.class }}
                  </button>
                </div>

                <!-- Modo oscuro -->
                <div class="flex items-center space-x-3">
                  <div class="flex items-center space-x-2">
                    <button
                      @click="copyToClipboard(colorGroup.dark.hex)"
                      :style="{ backgroundColor: colorGroup.dark.hex }"
                      class="w-8 h-8 rounded border border-border-light dark:border-border-dark hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#206372] dark:focus:ring-[#F5DF4D]"
                      :title="`Copiar ${colorGroup.dark.hex}`"
                    ></button>
                    <div>
                      <div class="text-sm font-mono text-primary-light dark:text-primary-dark">
                        {{ colorGroup.dark.hex }}
                      </div>
                      <div class="text-xs text-secondary-light dark:text-secondary-dark">
                        Modo oscuro
                      </div>
                    </div>
                  </div>
                  <button
                    @click="copyToClipboard(colorGroup.dark.class)"
                    class="text-xs font-mono bg-surface-light dark:bg-surface-dark px-2 py-1 rounded border border-border-light dark:border-border-dark hover:bg-[#206372] hover:text-white dark:hover:bg-[#F5DF4D] dark:hover:text-[#262626] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#206372] dark:focus:ring-[#F5DF4D]"
                    :title="`Copiar clase ${colorGroup.dark.class}`"
                  >
                    {{ colorGroup.dark.class }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Información adicional -->
    <div class="mt-8 bg-white dark:bg-[#191A1D] rounded-lg p-6 border border-border-light dark:border-border-dark">
      <h2 class="text-xl font-semibold text-primary-light dark:text-primary-dark mb-4">
        📋 Información de Implementación
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div>
          <h3 class="font-semibold text-primary-light dark:text-primary-dark mb-2">🔧 Fases de Implementación:</h3>
          <ol class="space-y-1 text-secondary-light dark:text-secondary-dark list-decimal list-inside">
            <li>Actualizar tailwind.config.js con la nueva paleta</li>
            <li>Migrar componentes uno por uno</li>
            <li>Validar consistencia visual y accesibilidad</li>
            <li>Documentar uso en el catálogo de componentes</li>
          </ol>
        </div>
        <div>
          <h3 class="font-semibold text-primary-light dark:text-primary-dark mb-2">✅ Beneficios:</h3>
          <ul class="space-y-1 text-secondary-light dark:text-secondary-dark">
            <li>• <strong>Consistencia:</strong> Patrón claro y organizado</li>
            <li>• <strong>Accesibilidad:</strong> Contrastes validados</li>
            <li>• <strong>Mantenibilidad:</strong> Nombres descriptivos</li>
            <li>• <strong>Escalabilidad:</strong> Fácil agregar nuevos colores</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos específicos para la página de paleta de colores */
</style>