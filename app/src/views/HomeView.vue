<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import { supabase } from '@/supabaseClient'; // Comentado para usar datos locales
import { getPublishedArticles } from '@/data/articlesData';
import SectionWrapper from '@/components/SectionWrapper.vue';

import ScrollingFeatures from '@/components/ScrollingFeatures.vue';
import MiniArticleCard from '@/components/MiniArticleCard.vue';
import CtaCard from '@/components/CtaCard.vue';

import PageLayout from '@/components/PageLayout.vue';

import { ScaleIcon, MapIcon, BoltIcon, SparklesIcon } from '@heroicons/vue/24/outline';

// Importar la ilustración del Pac-Man IA
import AiPacmanIllustration from '@/assets/ai-pacman-original.png';

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
    icon: MapIcon,
    title: 'Dibuja un mapa',
    text: 'Empieza por trazar el terreno: conoce las herramientas disponibles que resuelven problemas reales, como automatizar reportes o gestionar datos con iA. Explora con foco para no distraerte con novedades innecesarias y elige solo lo que encaja en tus procesos cotidianos.',
    colorClass: 'text-accent-info-dark',
    image_url: 'https://placehold.co/600x600/a78bfa/ffffff?text=Pilar+1'
  },
  {
    icon: ScaleIcon,
    title: 'Localízate en él',
    text: 'Una vez dibujado el mapa, marca tu posición: identifica tus tareas diarias, necesidades y objetivos claros. Un sistema de notas simple te ayuda a organizar ideas y prioridades, para ver dónde la tecnología puede apoyarte sin complicaciones.',
    colorClass: 'text-brand-accent',
    image_url: 'https://placehold.co/600x600/f6c90e/121214?text=Pilar+2'
  },
  {
    icon: BoltIcon,
    title: 'Dirígete a destino',
    text: 'Con el mapa y tu ubicación clara, avanza: implementa flujos automáticos, integra iA en tareas repetitivas y ajusta sobre la marcha. La clave es actuar con intención, liberando tiempo para lo que suma valor en tu día a día, ya sea en tu trabajo o proyectos personales.',
    colorClass: 'text-accent-error',
    image_url: 'https://placehold.co/600x600/dc2626/ffffff?text=Pilar+3'
  }
];


</script>

<template>
  <PageLayout>
  <!-- Hero Section -->
  <SectionWrapper spacing="tight" class="relative overflow-hidden">
    <!-- Elemento decorativo de fondo -->
    <div class="absolute -top-20 -right-20 w-64 h-64 bg-brand-accent/10 dark:bg-brand-accent/5 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-32 -left-20 w-80 h-80 bg-accent-info-dark/10 dark:bg-accent-info-dark/5 rounded-full blur-3xl"></div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Contenedor principal con distribución flexible -->
      <div class="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        <!-- Ilustración -->
        <div class="md:w-1/4 flex justify-center">
          <div class="relative w-64 h-64 rounded-full bg-white shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-105">
            <img 
              :src="AiPacmanIllustration" 
              alt="Ilustración de IA como Pac-Man persiguiendo a una persona" 
              class="absolute inset-0 w-full h-full object-contain p-3"
            />
          </div>
        </div>
        
        <!-- Contenido de texto -->
        <div class="md:w-3/4 text-center md:text-left">
          <Transition
            appear
            enter-from-class="opacity-0 translate-y-6"
            enter-active-class="transition-all duration-1200 ease-out"
            enter-to-class="opacity-100 translate-y-0"
          >
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary-light dark:text-primary-dark relative inline-block">
              ¡Despierta que te come la <span class="text-brand-accent animate-pulse">iA</span>!
              <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent rounded-full"></span>
            </h1>
          </Transition>
          <Transition
            appear
            enter-from-class="opacity-0 translate-y-3"
            enter-active-class="transition-all duration-1000 ease-out delay-500"
            enter-to-class="opacity-100 translate-y-0"
          >
            <p class="mt-6 text-xl md:text-2xl text-secondary-light dark:text-secondary-dark leading-relaxed">
              Vale, es broma... pero solo a medias. Las máquinas inteligentes evolucionan rápido, y lo mejor es empezar a aprovechar su potencial en lugar de ignorarlas. Exploremos juntos cómo hacerlo de forma práctica y sin complicaciones.
            </p>
          </Transition>
        </div>
      </div>
      
      <!-- Elemento decorativo inferior -->
      <div class="flex justify-center mt-8 opacity-70">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-accent animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </SectionWrapper>

  <!-- Sección Quién Soy -->
  <SectionWrapper spacing="normal" class="overflow-hidden relative">
    <!-- Elementos decorativos de fondo -->
    <div class="absolute top-1/2 -right-24 w-48 h-48 bg-accent-info-dark/5 dark:bg-accent-info-dark/10 rounded-full blur-2xl"></div>
    <div class="absolute top-1/4 -left-16 w-32 h-32 bg-brand-accent/5 dark:bg-brand-accent/10 rounded-full blur-xl"></div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
      <div class="relative flex justify-center items-center h-80 group">
        <!-- Fondo decorativo con múltiples capas -->
        <div class="absolute w-full h-full bg-gradient-to-br from-brand-accent/80 to-brand-accent rounded-lg transform -rotate-3 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 shadow-lg"></div>
        <div class="absolute w-full h-full bg-brand-accent/30 rounded-lg transform rotate-3 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-95 blur-sm"></div>
        
        <!-- Imagen con efectos mejorados -->
        <img 
          src="https://placehold.co/400x400/1F2937/FFFFFF?text=Juanda" 
          alt="Foto de Juanda" 
          class="relative w-3/4 h-3/4 object-cover rounded-lg shadow-lg z-10 transition-all duration-500 ease-out group-hover:shadow-xl group-hover:scale-105 fade-in-element"
        >
        
        <!-- Elemento decorativo adicional -->
        <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-surface-light dark:bg-surface-dark rounded-full border-4 border-brand-accent/30 z-0 transition-all duration-500 group-hover:scale-110 opacity-80"></div>
      </div>
      
      <div class="text-center md:text-left fade-in-element">
        <h2 class="text-3xl font-extrabold font-heading text-primary-light dark:text-primary-dark sm:text-4xl relative inline-block">
          ¡Hola! Soy Juanda.
          <span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-brand-accent rounded-full"></span>
        </h2>
        <p class="mt-6 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed text-secondary-light dark:text-secondary-dark">
          Hola, soy Juan David Ocampo, aunque la mayoría me llama Juanda. Desde hace años, me apasiona explorar herramientas que simplifican procesos administrativos, como hojas de cálculo, scripts, bases de conocimiento o automatizaciones con iA.
        </p>
        <p class="mt-4 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed text-secondary-light dark:text-secondary-dark">
          En este espacio, comparto parte de mis aprendizajes procurando que sea siempre información útil y accionable con el fin de motivarte a convertir a la tecnología en tu mejor aliada.
        </p>
        
        <!-- Botón de acción secundario -->
        <div class="mt-6">
          <a href="/soy" class="inline-flex items-center text-brand-accent hover:text-brand-accent-dark transition-colors duration-300">
            Conoce más sobre mí
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Elemento decorativo inferior que conecta con la siguiente sección -->
    <div class="flex justify-center mt-12">
      <div class="w-1 h-16 bg-gradient-to-b from-transparent to-brand-accent/20 rounded-full"></div>
    </div>
  </SectionWrapper>

  <!-- Texto Puente -->
  <SectionWrapper spacing="loose" class="text-center relative">
    <!-- Elementos decorativos de fondo -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-brand-accent/20 to-transparent rounded-full"></div>
    
    <div class="max-w-3xl mx-auto bg-surface-light/30 dark:bg-surface-dark/30 rounded-xl p-8 border border-border-light/10 dark:border-border-dark/10 shadow-sm relative overflow-hidden">
      <!-- Decoración de fondo -->
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent"></div>
      <div class="absolute -top-16 -right-16 w-32 h-32 bg-brand-accent/5 rounded-full blur-xl"></div>
      <div class="absolute -bottom-16 -left-16 w-32 h-32 bg-accent-info-dark/5 rounded-full blur-xl"></div>
      
      <p class="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark leading-relaxed">
        Este proyecto surge de la idea de que la tecnología, bien entendida y usada, puede liberarnos tiempo para enfocarnos en lo que realmente importa: <strong class="text-primary-light dark:text-primary-dark font-semibold underline decoration-brand-accent decoration-2 underline-offset-4">Las relaciones, los proyectos personales...</strong>
      </p>
      <p class="mt-6 text-lg leading-relaxed text-secondary-light dark:text-secondary-dark">
        Pero el cambio va rápido, y adaptarnos pronto es clave. Mi enfoque se basa en tres pilares prácticos muy simples que quiero compartir contigo.
      </p>
      
      <!-- Elemento decorativo inferior -->
      <div class="mt-6 flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </div>
    </div>
  </SectionWrapper>

  <!-- Sección de Pilares Temáticos -->
  <SectionWrapper spacing="loose">
    <!-- Elementos decorativos de fondo -->
    <div class="absolute -top-10 right-0 w-64 h-64 bg-accent-info-dark/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-10 left-0 w-48 h-48 bg-brand-accent/5 rounded-full blur-2xl"></div>
    
    <div class="text-center relative z-10">
      <h2 class="text-3xl font-extrabold font-heading text-primary-light dark:text-primary-dark sm:text-4xl inline-block relative">
        Tres pilares simples para empezar
        <span class="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></span>
      </h2>
      <p class="mt-4 text-lg text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto">
        Estos tres pasos forman tu ruta personal: empieza por donde estés y ajusta según avances, convirtiendo la tecnología en una aliada real.
      </p>
    </div>
    
    <!-- Contenedor con efecto de aparición -->
    <div class="relative z-10 fade-in-element">
      <ScrollingFeatures :features="pilares" class="md:mt-12" />
    </div>
    
    <!-- Elemento decorativo inferior -->
    <div class="flex justify-center mt-16">
      <div class="w-16 h-1 bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent rounded-full"></div>
    </div>
  </SectionWrapper>

  <!-- Call to Action -->
  <SectionWrapper spacing="normal" class="relative overflow-hidden">
    <!-- Elementos decorativos de fondo -->
    <div class="absolute -top-20 -left-20 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-accent-info-dark/5 rounded-full blur-3xl"></div>
    
    <!-- Indicador visual para dirigir la atención -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-brand-accent/30" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>
    
    <div class="relative z-10 transform transition-all duration-700 hover:scale-[1.02] fade-in-element">
      <CtaCard 
        title="Auditoría Gratuita: Responde un formulario inteligente que adapta preguntas a tu perfil y genera un reporte con recomendaciones prácticas para automatizar procesos en tu vida o trabajo."
        description="Descubre tu ruta personalizada"
        buttonText="Comenzar ahora"
        buttonLink="#"
      />
    </div>
  </SectionWrapper>

  <!-- Sección de Contenido Destacado -->
  <SectionWrapper spacing="loose" class="bg-surface-light dark:bg-surface-dark relative overflow-hidden">
    <!-- Elementos decorativos de fondo -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent"></div>
    <div class="absolute -top-32 -right-32 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-32 -left-32 w-64 h-64 bg-accent-info-dark/5 rounded-full blur-3xl"></div>
    
    <div class="text-center relative z-10">
      <h2 class="text-3xl font-extrabold font-heading text-primary-light dark:text-primary-dark sm:text-4xl inline-block relative">
        Un lugar al que volver
        <span class="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></span>
      </h2>
      <p class="mt-6 text-lg leading-relaxed text-secondary-light dark:text-secondary-dark max-w-3xl mx-auto">
        Aprendizajes, herramientas y reflexiones honestas. Todo documentado para que experimentes por tu cuenta y encuentres ideas accionables, como guías para scripts simples o integraciones con iA que optimicen tus flujos administrativos.
      </p>
    </div>
    
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 fade-in-element">
      <MiniArticleCard 
        v-for="articulo in recentArticles" 
        :key="articulo.slug" 
        :article="articulo" 
        class="transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
      />
    </div>
    
    <!-- Elemento decorativo inferior -->
    <div class="flex justify-center mt-16">
      <a href="/blog" class="inline-flex items-center text-brand-accent hover:text-brand-accent-dark transition-colors duration-300 group">
        Ver todos los artículos
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>
  </SectionWrapper>
</PageLayout>
</template>
