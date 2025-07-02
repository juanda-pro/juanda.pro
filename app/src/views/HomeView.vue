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
    text: 'Obtén claridad sobre aquellas cosas en tu día a día en las que la tecnología te puede apoyar. Construye tu brújula interna por ti mismo y no dejes que los algoritmos de las redes sociales te creen necesidades ficticias. Un Simple diario o mejor aún, un sistema de notas bien estructurado, transforma el ruido en conocimiento y te ayuda a mantenerte en línea con tus objetivos.',
    colorClass: 'text-accent-info-dark',
    image_url: 'https://placehold.co/600x600/a78bfa/ffffff?text=Pilar+1'
  },
  {
    icon: MapIcon,
    title: 'Descubre el mapa',
    text: 'Necesitas las herramientas adecuadas. Mantenerse informado es importante. Saber que tecnologías sirven para que cosas. Pero cuidado con el síndrome del objeto brillante, elegir con intención a que le dedicas tu tiempo es crucial. Identifica qué herramientas resuelven tus problemas, descarta lo que es solo ruido y va a distraerte de tus objetivos.',
    colorClass: 'text-brand-accent',
    image_url: 'https://placehold.co/600x600/f6c90e/121214?text=Pilar+2'
  },
  {
    icon: BoltIcon,
    title: 'Toma acción inteligente',
    text: 'El conocimiento sin ejecución es entretenimiento disfrazado. Este pilar transforma teoría en resultados: automatiza lo repetitivo, diseña flujos de trabajo te liberen tiempo, incrementen tus ingresos o liberen espacio mental. La iA no es tu competencia cuando la conviertes en tu herramienta.',
    colorClass: 'text-accent-error',
    image_url: 'https://placehold.co/600x600/dc2626/ffffff?text=Pilar+3'
  }
];

const articulos = [
  {
    slug: 'ia-redefine-seo-marketing-contenidos',
    title: 'Cómo la IA está redefiniendo el SEO y el marketing de contenidos',
    published_at: '2024-07-15T10:00:00Z',
    image_url: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'La IA no es solo una herramienta, es un cambio de paradigma. Analizamos cómo adaptar tu estrategia de contenidos para no quedarte atrás.'
  },
  {
    slug: 'herramientas-ia-mas-alla-chatgpt',
    title: 'Más allá de ChatGPT: herramientas de IA que deberías conocer',
    published_at: '2024-07-01T09:00:00Z',
    image_url: 'https://images.unsplash.com/photo-1696204521373-3240b0356421?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Exploramos un arsenal de aplicaciones de IA menos conocidas pero increíblemente potentes para productividad, creatividad y análisis.'
  },
  {
    slug: 'framework-mental-decisiones-ia',
    title: 'El framework mental para tomar decisiones en la era de la IA',
    published_at: '2024-06-20T11:30:00Z',
    image_url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Te presento un modelo simple pero robusto para evaluar cuándo, cómo y por qué integrar la inteligencia artificial en tus proyectos y vida.'
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
          ¡Despierta, que te come la iA!
        </h1>
        <p class="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark mb-10">
          Vale, es broma... pero solo a medias. Las máquinas aprenden ridículamente rápido mientras nosotros seguimos haciendo scroll. ¿Y si empezamos a usar estas herramientas para <em>amplificar</em> lo mejor de nosotros, en lugar de dejar que nos sustituyan?
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
          Para empezar te dire que no soy un "experto". Si soy un explorador que, como tú, sintió mucho vértigo al ver cómo la iA empezaba a redefinir muchas cosas. Como resultado decidí replantear mis hábitos, herramientas y rediseñar mi forma de aprender. Este espacio es mi bitácora abierta, aquí documento parte de experimentos, comparto mis errores, aciertos, aprendizajes y reflexiones.
        </p>
      </div>
    </div>
  </SectionWrapper>

  <!-- Texto Puente -->
  <SectionWrapper class="text-center">
    <div class="max-w-3xl mx-auto">
      <p class="text-lg leading-relaxed text-secondary-light dark:text-secondary-dark">
        El cambio se acelera cada día. Pero tengo buenas noticias: adaptarse no requiere convertirse en máquina. Mi estrategia se basa en tres pilares prácticos que cualquiera puede implementar:
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
    <ScrollingFeatures :features="pilares" class="md:mt-16" />
  </SectionWrapper>

  <!-- Call to Action -->
  <SectionWrapper>
    <CtaCard 
      title="Te ayudo a analizar tu situación actual y a crear una hoja de ruta personalizada y clara."
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
        Aprendizajes, herramientas y reflexiones honestas. Todo documentado para que experimentes por tu cuenta.
      </p>
    </div>
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      <MiniArticleCard v-for="articulo in articulos" :key="articulo.slug" :article="articulo" />
    </div>
  </SectionWrapper>
</div>
</template>
