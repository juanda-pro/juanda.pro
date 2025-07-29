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
  <div class="relative group fade-in-element">
    <!-- Falsa Sombra -->
    <div
      class="absolute inset-0 bg-brand-accent rounded-3xl transition-all duration-500"
    ></div>

    <!-- Tarjeta Principal -->
    <div
      class="relative bg-brand-accent rounded-3xl p-8 md:p-12 overflow-hidden transition-all duration-500 ease-out group-hover:bg-surface-dark group-hover:-translate-x-2 group-hover:-translate-y-2 shadow-lg"
    >
      <!-- Fondo con patrón de ondas -->
      <div
        class="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center transition-all duration-500 ease-out opacity-10 group-hover:opacity-15"
        :style="{ backgroundImage: `url(${WavyPattern})` }"
      ></div>
      
      <!-- Elementos decorativos sutiles -->


      <!-- Contenido -->
      <div class="relative z-10">
        <div class="text-center max-w-5xl mx-auto px-6 py-4">
          <!-- Título centrado con mejor espaciado -->
          <h3 
            class="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-brand-dark group-hover:text-primary-dark mb-8 md:mb-10 transition-colors duration-500 ease-out leading-tight"
            v-html="title.replace(' ', '<br>')"
          ></h3>
          
          <!-- Descripción centrada con mejor tipografía -->
          <div class="max-w-4xl mx-auto mb-10 md:mb-12">
            <p 
              class="text-lg md:text-xl lg:text-2xl text-brand-dark group-hover:text-secondary-dark transition-colors duration-500 ease-out leading-relaxed"
              v-html="description"
            ></p>
          </div>
          
          <!-- Botón centrado con mejor prominencia -->
          <div class="flex justify-center">
            <a
              :href="buttonLink"
              class="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 font-bold text-xl md:text-2xl text-primary-dark bg-surface-dark rounded-full transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl shadow-xl group-hover:bg-brand-accent group-hover:text-brand-dark relative overflow-hidden"
            >
              <span class="relative z-10">{{ buttonText }}</span>
              <ArrowRightCircleIcon class="w-7 h-7 md:w-8 md:h-8 ml-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>