<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';
import BaseButton from '@/components/BaseButton.vue';
import FeatureCard from '@/components/FeatureCard.vue';
import ScrollingFeatures from '@/components/ScrollingFeatures.vue';
import MiniArticleCard from '@/components/MiniArticleCard.vue';
import CtaCard from '@/components/CtaCard.vue';

import { ScaleIcon, MapIcon, BoltIcon, SparklesIcon } from '@heroicons/vue/24/outline';

const pilares = [
  {
    icon: ScaleIcon,
    title: 'Conócete y gobiérnate',
    text: 'El primer paso es construir una brújula interna. Un sistema de notas bien estructurado te permite transformar tus pensamientos en un cuerpo de conocimiento personal, definir tus propios objetivos y tomar decisiones alineadas con tus valores. Se trata de gobernarte a ti mismo antes de que los algoritmos lo hagan por ti.',
    colorClass: 'text-accent-info-dark',
    image_url: 'https://placehold.co/600x600/a78bfa/ffffff?text=Pilar+1'
  },
  {
    icon: MapIcon,
    title: 'Descubre el mapa',
    text: 'Con una dirección clara, necesitas las herramientas adecuadas. Consiste en explorar el ecosistema tecnológico con mentalidad de cartógrafo, no de coleccionista. Elige con intención solo las herramientas que resuelven un problema real, combate el \'síndrome del objeto brillante\' y toma el control de tu stack tecnológico.',
    colorClass: 'text-brand-accent',
    image_url: 'https://placehold.co/600x600/f6c90e/121214?text=Pilar+2'
  },
  {
    icon: BoltIcon,
    title: 'Toma acción',
    text: 'El conocimiento y las herramientas solo generan valor cuando se ponen en movimiento. Este pilar es el motor: pasa de la planificación a la ejecución y usa la tecnología como un multiplicador. Construye flujos de trabajo inteligentes y automatiza tareas repetitivas para liberar tu tiempo y enfocarte en lo que solo un humano puede hacer: crear, innovar y aportar valor.',
    colorClass: 'text-accent-error',
    image_url: 'https://placehold.co/600x600/dc2626/ffffff?text=Pilar+3'
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
  <SectionWrapper>
    <Transition
      appear
      enter-from-class="opacity-0 translate-y-3"
      enter-active-class="transition-all duration-1000 ease-out"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-extrabold font-heading tracking-tight mb-6 text-primary-light dark:text-primary-dark">
          ¡Despierta, que te come la IA!
        </h1>
        <p class="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark mb-10">
          😂 Es broma, pero sí es importante empezar a usar estas "máquinas inteligentes" para no quedarnos atrás.
        </p>

      </div>
    </Transition>
  </SectionWrapper>

  <!-- Sección Quién Soy -->
  <SectionWrapper class="overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="relative flex justify-center items-center h-80 group">
        <div class="absolute w-full h-full bg-brand-accent rounded-lg transform -rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"></div>
        <img src="https://placehold.co/400x400/1F2937/FFFFFF?text=Juanda" alt="Foto de Juanda" class="relative w-3/4 h-3/4 object-cover rounded-lg shadow-lg z-10">
      </div>
      <div class="text-center md:text-left">
        <h2 class="text-3xl font-extrabold font-heading text-primary-light dark:text-primary-dark sm:text-4xl">
          ¡Hola! Soy Juanda.
        </h2>
        <p class="mt-4 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed text-secondary-light dark:text-secondary-dark">
          No soy un gurú, sino un explorador que, como tú, está navegando esta nueva era. Este espacio es mi bitácora de aprendizaje: un lugar donde documento mis experimentos, comparto herramientas que funcionan y reflexiono sobre cómo la tecnología puede, de verdad, hacernos mejores. Lo que encuentres aquí es fruto de la curiosidad y la práctica.
        </p>
      </div>
    </div>
  </SectionWrapper>

  <!-- Texto Puente -->
  <SectionWrapper class="text-center">
    <div class="max-w-3xl mx-auto">
      <p class="text-lg leading-relaxed text-secondary-light dark:text-secondary-dark mb-6">
        Este proyecto nace de la convicción de que la tecnología bien entendida y usada puede ayudarnos a ser mejores humanos, más creativos, más conscientes y más libres.
      </p>
      <p class="text-lg leading-relaxed text-secondary-light dark:text-secondary-dark">
        Muchas cosas están cambiando cada vez más rápido. Cuanto antes empecemos a adaptarnos mejor. Mi estrategia para hacerlo se basa en tres pilares que quiero compartir contigo:
      </p>
    </div>
  </SectionWrapper>

  <!-- Sección de Pilares Temáticos -->
  <SectionWrapper>
    <div class="text-center">
      <h2 class="text-3xl font-extrabold font-heading text-primary-light dark:text-primary-dark sm:text-4xl">
        Una estrategia para navegar el presente
      </h2>
    </div>
    <ScrollingFeatures :features="pilares" />
  </SectionWrapper>

  <!-- Call to Action -->
  <SectionWrapper>
    <CtaCard 
      title="Recibe tu mapa tecnológico y plan de acción con nuestro diagnóstico de IA."
      description="Auditoría Gratuita"
      buttonText="Comenzar ahora"
      buttonLink="#"
    />
  </SectionWrapper>

  <!-- Sección de Contenido Destacado -->
  <SectionWrapper class="bg-surface-light dark:bg-surface-dark">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold font-heading text-primary-light dark:text-primary-dark sm:text-4xl">
        Un lugar al que volver
      </h2>
      <p class="mt-4 text-lg leading-relaxed text-secondary-light dark:text-secondary-dark">
        Aprendizajes, reflexiones y herramientas prácticas para inspirarte a experimentar.
      </p>
    </div>
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      <MiniArticleCard v-for="articulo in articulos" :key="articulo.slug" :article="articulo" />
    </div>
  </SectionWrapper>
</div>
</template>
