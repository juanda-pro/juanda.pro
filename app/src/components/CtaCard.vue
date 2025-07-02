<script setup lang="ts">
import WavyPattern from '@/assets/wavy-pattern.svg?url';
import ArrowRightCircleIcon from '@/components/icons/ArrowRightCircleIcon.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  buttonLink: {
    type: String,
    default: '#',
  },
});
</script>

<template>
  <div class="relative group">
    <!-- Falsa Sombra Amarilla -->
    <div
      class="absolute inset-0 bg-brand-accent rounded-3xl"
    ></div>

    <!-- Tarjeta Principal -->
    <div
      class="relative bg-brand-accent rounded-3xl p-8 md:p-12 overflow-hidden transition-all duration-300 ease-in-out group-hover:bg-surface-dark group-hover:-translate-x-2 group-hover:-translate-y-2"
    >
      <!-- Fondo con patrón de ondas -->
      <div
        class="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center transition-all duration-300 ease-in-out opacity-10 group-hover:opacity-10"
        :style="{ backgroundImage: `url(${WavyPattern})` }"
      ></div>

            <!-- Contenido -->
      <div class="relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <!-- Columna Izquierda: Título y Botón -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 
              class="text-4xl md:text-5xl font-bold font-heading text-brand-dark group-hover:text-primary-dark mb-6 transition-colors duration-300 ease-in-out"
              v-html="description.replace(' ', '<br>')"
            ></h3>
            <a
              :href="buttonLink"
              class="inline-flex items-center justify-center px-8 py-4 font-bold text-lg text-primary-dark bg-surface-dark rounded-full transition-all duration-300 ease-in-out hover:scale-105 shadow-lg group-hover:bg-brand-accent group-hover:text-brand-dark"
            >
              {{ buttonText }}
              <ArrowRightCircleIcon class="w-6 h-6 ml-3" />
            </a>
          </div>

          <!-- Columna Derecha: Descripción -->
          <div class="text-center md:text-left">
            <p class="text-xl md:text-2xl text-brand-dark group-hover:text-secondary-dark transition-colors duration-300 ease-in-out">
              {{ title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
