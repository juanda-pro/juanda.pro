<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';
import BaseButton from '@/components/BaseButton.vue';
import FeatureCard from '@/components/FeatureCard.vue';
import MiniArticleCard from '@/components/MiniArticleCard.vue';

import { ScaleIcon, MapIcon, BoltIcon, SparklesIcon } from '@heroicons/vue/24/outline';

const pilares = [
  {
    icon: ScaleIcon,
    title: 'Conócete y gobiérnate',
    text: 'Define tus objetivos reales para que los algoritmos no decidan por ti. Un sistema de notas es tu mejor aliado para conocerte, gobernarte y no perder el foco.',
    colorClass: 'text-accent-info-dark'
  },
  {
    icon: MapIcon,
    title: 'Descubre el mapa',
    text: 'Explora el mapa de herramientas tecnológicas disponibles, pero cuidado con el síndrome del objeto brillante. Elige con intención solo aquellas que te ayudan.',
    colorClass: 'text-brand-accent'
  },
  {
    icon: BoltIcon,
    title: 'Toma acción',
    text: 'Pasa a la acción y usa la tecnología a tu favor. Automatiza tareas y crea flujos de trabajo que te liberen tiempo para generar valor real.',
    colorClass: 'text-accent-error'
  }
];

const articulos = [
  {
    slug: 'construye-tu-segundo-cerebro-con-obsidian-y-zettelkasten',
    title: 'Construye tu Segundo Cerebro con Obsidian y Zettelkasten',
    date: '25 de Julio, 2024',
    image_url: 'https://placehold.co/600x400/f6c90e/121214?text=Sistemas',
  },
  {
    slug: 'el-antidoto-definitivo-al-sindrome-del-objeto-brillante',
    title: 'El Antídoto Definitivo al Síndrome del Objeto Brillante',
    date: '18 de Julio, 2024',
    image_url: 'https://placehold.co/600x400/a78bfa/121214?text=Mentalidad',
  },
  {
    slug: 'automatiza-tu-vida-con-make-y-notion-guia-de-inicio',
    title: 'Automatiza tu Vida con Make y Notion: Guía de Inicio',
    date: '12 de Julio, 2024',
    image_url: 'https://placehold.co/600x400/4338ca/ffffff?text=Automatización',
  }
];
</script>

<template>
  <div>
  <!-- Hero Section -->
  <div class="flex items-center justify-center">
    <Transition
      appear
      enter-from-class="opacity-0 translate-y-3"
      enter-active-class="transition-all duration-1000 ease-out"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div class="text-center max-w-3xl mx-auto px-4 pt-24 pb-16 sm:pt-32 sm:pb-20">
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-primary-light dark:text-primary-dark">
          ¡Despierta, que te come la IA!
        </h1>
        <p class="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark mb-10">
          😂 Es broma, pero sí es importante empezar a usar estas "máquinas inteligentes" para no quedarnos atrás.
        </p>

      </div>
    </Transition>
  </div>

  <!-- Texto Puente -->
  <SectionWrapper class="text-center">
    <div class="max-w-3xl mx-auto">
      <p class="text-lg text-secondary-light dark:text-secondary-dark mb-6">
        Este proyecto nace de la convicción de que la tecnología bien entendida y usada puede ayudarnos a ser mejores humanos, más creativos, más conscientes y más libres.
      </p>
      <p class="text-lg text-secondary-light dark:text-secondary-dark">
        Muchas cosas están cambiando cada vez más rápido. Cuanto antes empecemos a adaptarnos mejor. Mi estrategia para hacerlo se basa en tres pilares que quiero compartir contigo:
      </p>
    </div>
  </SectionWrapper>

  <!-- Sección de Pilares Temáticos -->
  <SectionWrapper class="bg-surface-dark">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-primary-dark sm:text-4xl">
        Una estrategia para navegar el presente
      </h2>
    </div>
    <div class="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            <FeatureCard v-for="pilar in pilares" :key="pilar.title" :icon="pilar.icon" :title="pilar.title" :colorClass="pilar.colorClass">
        {{ pilar.text }}
      </FeatureCard>
    </div>
  </SectionWrapper>

  <!-- Call to Action: Diagnóstico Personalizado -->
  <SectionWrapper>
          <div class="relative max-w-4xl mx-auto overflow-hidden rounded-2xl bg-gradient-to-r from-brand-accent via-accent-info to-purple-500 p-1 shadow-2xl shadow-brand-accent/20">
      <div class="relative text-center pt-16 pb-12 px-4 bg-surface-light dark:bg-surface-dark rounded-xl">
        <div class="flex justify-center mb-6">
          <div class="flex items-center justify-center h-16 w-16 rounded-full bg-surface-light dark:bg-surface-dark shadow-lg">
            <SparklesIcon class="h-8 w-8 text-brand-accent" />
          </div>
        </div>
        <h2 class="text-3xl font-extrabold text-primary-light dark:text-primary-dark sm:text-4xl">
          Descubre tu Potencial de Automatización
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-secondary-light dark:text-secondary-dark">
          ¿Sientes que podrías hacer más en menos tiempo? Descubre qué tareas de tu día a día puedes automatizar. Recibe un plan de acción a medida para empezar a construir tus propias soluciones.
        </p>
        <div class="mt-8">
          <BaseButton to="/diagnostico" size="lg" variant="primary">Iniciar Diagnóstico</BaseButton>
        </div>
      </div>
    </div>
  </SectionWrapper>

  <!-- Sección Quién Soy -->
  <SectionWrapper class="overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="text-center md:text-left">
        <h2 class="text-3xl font-extrabold text-primary-light dark:text-primary-dark sm:text-4xl">
          ¡Hola! Soy Juanda.
        </h2>
        <p class="mt-4 max-w-xl mx-auto md:mx-0 text-lg text-secondary-light dark:text-secondary-dark">
          No soy un gurú, sino un explorador que, como tú, está navegando esta nueva era. Este espacio es mi bitácora de aprendizaje: un lugar donde documento mis experimentos, comparto herramientas que funcionan y reflexiono sobre cómo la tecnología puede, de verdad, hacernos mejores. Lo que encuentres aquí es fruto de la curiosidad y la práctica.
        </p>
      </div>
      <div class="relative flex justify-center items-center h-80 group">
        <div class="absolute w-full h-full bg-brand-accent rounded-lg transform -rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"></div>
        <img src="https://placehold.co/400x400/1F2937/FFFFFF?text=Juanda" alt="Foto de Juanda" class="relative w-3/4 h-3/4 object-cover rounded-lg shadow-lg z-10">
      </div>
    </div>
  </SectionWrapper>

  <!-- Sección de Contenido Destacado -->
  <SectionWrapper class="bg-surface-light dark:bg-surface-dark">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-primary-light dark:text-primary-dark sm:text-4xl">
        Un lugar al que volver
      </h2>
      <p class="mt-4 text-lg text-secondary-light dark:text-secondary-dark">
        Aprendizajes, reflexiones y herramientas prácticas para inspirarte a experimentar.
      </p>
    </div>
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      <MiniArticleCard v-for="articulo in articulos" :key="articulo.slug" :article="articulo" />
    </div>
  </SectionWrapper>
</div>
</template>
