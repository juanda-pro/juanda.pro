<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import { supabase } from '@/supabaseClient'; // Comentado para usar datos locales
import { getPublishedArticles } from '@/data/articlesData';
import SectionWrapper from '@/components/SectionWrapper.vue';
import BaseButton from '@/components/BaseButton.vue';
import FeatureCard from '@/components/FeatureCard.vue';
import ScrollingFeatures from '@/components/ScrollingFeatures.vue';
import MiniArticleCard from '@/components/MiniArticleCard.vue';
import CtaCard from '@/components/CtaCard.vue';
import PageHeader from '@/components/PageHeader.vue';
import PageLayout from '@/components/PageLayout.vue';

import { ScaleIcon, MapIcon, BoltIcon, SparklesIcon } from '@heroicons/vue/24/outline';

interface Article {
  slug: string;
  title: string;
  category: string;
  image_url: string;
  published_at: string;
  description?: string;
}

const recentArticles = ref<Article[]>([]);

const fetchRecentArticles = () => {
  try {
    // Usar datos locales en lugar de Supabase
    const articles = getPublishedArticles();
    
    // Ordenar por fecha de publicación (más reciente primero)
    articles.sort((a, b) => {
      return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
    });
    
    // Limitar a 3 artículos
    recentArticles.value = articles.slice(0, 3);
  } catch (error) {
    console.error('Error fetching recent articles:', error);
  }
};

onMounted(() => {
  fetchRecentArticles();
});

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


</script>

<template>
  <PageLayout>
  <!-- Hero Section -->
  <SectionWrapper>
    <PageHeader subtitle="Vale, es broma... pero solo a medias. Las máquinas aprenden ridículamente rápido mientras nosotros seguimos haciendo scroll. ¿Y si empezamos a usar estas herramientas para <em>amplificar</em> lo mejor de nosotros, en lugar de dejar que nos sustituyan?">
      ¡Despierta, que te come la iA!
    </PageHeader>
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
      <MiniArticleCard v-for="articulo in recentArticles" :key="articulo.slug" :article="articulo" />
    </div>
  </SectionWrapper>
</PageLayout>
</template>
