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
      <div class="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

      <!-- Contenido -->
      <div class="relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">

            <!-- Columna Izquierda (ahora a la derecha en desktop): Icono, Título y Botón -->
            <div class="order-2 md:order-1 flex items-center justify-center gap-x-4 md:gap-x-6">
              <!-- Icono de Regalo -->
              <svg xmlns="http://www.w3.org/2000/svg" class="hidden md:block h-20 w-20 text-brand-dark/80 group-hover:text-primary-dark/80 transition-colors duration-500 ease-out shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 12v10H4V12" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2 7h20v5H2z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 22V7" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>

              <!-- Bloque de Título y Botón -->
              <div class="flex flex-col items-center md:items-end text-center md:text-right">
                <h3 
                  class="text-4xl md:text-5xl font-bold font-heading text-brand-dark group-hover:text-primary-dark mb-8 transition-colors duration-500 ease-out"
                  v-html="title.replace(' ', '<br>')"
                ></h3>
                <a
                  :href="buttonLink"
                  class="inline-flex items-center justify-center px-8 py-4 font-bold text-lg text-primary-dark bg-surface-dark rounded-full transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl shadow-lg group-hover:bg-brand-accent group-hover:text-brand-dark relative overflow-hidden"
                >
                  <span class="relative z-10">{{ buttonText }}</span>
                  <ArrowRightCircleIcon class="w-6 h-6 ml-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <!-- Columna Derecha (ahora a la izquierda en desktop): Descripción -->
            <div class="order-1 md:order-2 flex flex-col justify-center text-left">
              <p 
                class="text-xl md:text-2xl text-brand-dark group-hover:text-secondary-dark transition-colors duration-500 ease-out leading-relaxed"
                v-html="description"
              ></p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
