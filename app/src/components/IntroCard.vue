<script setup lang="ts">
/**
 * IntroCard - Componente de tarjeta de introducción
 * 
 * Contenedor elegante con decoración superior y fondo semitransparente.
 * Utiliza el sistema de diseño con colores adaptativos para modo claro/oscuro.
 * Proporciona un slot para contenido flexible.
 * 
 * @component
 */

/**
 * Props del componente IntroCard
 */
interface Props {
  /** Ancho máximo del contenedor */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  /** Padding interno del contenedor */
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  /** Mostrar decoración superior */
  showTopDecoration?: boolean
  /** Intensidad del fondo (opacidad) */
  backgroundOpacity?: 'light' | 'medium' | 'strong'
  /** Tipo de sombra */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  maxWidth: '3xl',
  padding: 'lg',
  showTopDecoration: true,
  backgroundOpacity: 'light',
  shadow: 'sm'
});

/**
 * Clases computadas para el ancho máximo
 */
const maxWidthClasses = {
  'sm': 'max-w-sm',
  'md': 'max-w-md',
  'lg': 'max-w-lg',
  'xl': 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl'
};

/**
 * Clases computadas para el padding
 */
const paddingClasses = {
  'sm': 'p-4',
  'md': 'p-6',
  'lg': 'p-8',
  'xl': 'p-10'
};

/**
 * Clases computadas para la opacidad del fondo
 */
const backgroundOpacityClasses = {
  'light': 'bg-surface-light/20 dark:bg-surface-dark/20',
  'medium': 'bg-surface-light/40 dark:bg-surface-dark/40',
  'strong': 'bg-surface-light/60 dark:bg-surface-dark/60'
};

/**
 * Clases computadas para la sombra
 */
const shadowClasses = {
  'none': '',
  'sm': 'shadow-sm',
  'md': 'shadow-md',
  'lg': 'shadow-lg',
  'xl': 'shadow-xl'
};
</script>

<template>
  <div 
    :class="[
      maxWidthClasses[maxWidth],
      paddingClasses[padding],
      backgroundOpacityClasses[backgroundOpacity],
      shadowClasses[shadow],
      'mx-auto rounded-xl border border-gray-200/20 dark:border-gray-700/20 relative overflow-hidden'
    ]"
  >
    <!-- Decoración de fondo -->
    <div 
      v-if="showTopDecoration"
      class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 dark:via-accent/30 to-transparent"
    ></div>

    <!-- Contenido -->
    <div class="relative z-10">
      <slot></slot>
    </div>
  </div>
</template>
