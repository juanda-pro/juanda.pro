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

// Importar la nueva imagen de cabecera
import HeaderBackground from '../assets/cabecera_inicio.jpeg';

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
    title: 'Dibuja tu mapa',
    text: '<strong>Empieza por explorar el terreno:</strong> conoce las herramientas disponibles que te pueden apoyar en tus tareas cotidianas. Por fortuna <em>hay muchas personas compartiendo</em> su experiencia, tutoriales y más. <strong>Explora con foco para no distraerte</strong> con novedades llamativas y elige solo lo que encaja en tus procesos.',
    colorClass: 'text-accent-info-dark',
    image_url: 'https://placehold.co/600x600/a78bfa/ffffff?text=Pilar+1'
  },
  {
    icon: ScaleIcon,
    title: 'Localízate en él',
    text: 'Una vez tengas tu primer boceto del mapa, <strong>marca tu posición</strong>: identifica tus tareas diarias, tus necesidades y objetivos. Necesitas claridad sobre tus procesos cotidianos, <strong>tomar apuntes te irá bien.</strong> <em>Identifica las tecnologías que realmente te sirven</em> y <strong>descubre que tienes que hacer</strong> para ponerlas a tu servicio.',
    colorClass: 'text-brand-accent',
    image_url: 'https://placehold.co/600x600/f6c90e/121214?text=Pilar+2'
  },
  {
    icon: BoltIcon,
    title: 'Emprende el viaje',
    text: 'Ahora que tienes un mapa y tu ubicación aproximada, avanza: <strong>empieza a automatizar tareas simples</strong>, <em>experimenta con la iA</em> para crear flujos aún más complejos... <strong>No tengas miedo a equivocarte</strong>, es algo que tiene que ocurrir, forma parte natural del proceso de aprendizaje. Así que <em>equivócate rápido y ajusta sobre la marcha.</em>',
    colorClass: 'text-accent-error',
    image_url: 'https://placehold.co/600x600/dc2626/ffffff?text=Pilar+3'
  }
];


</script>

<template>
  <PageLayout :remove-padding-top="true">
  <!-- Hero Section -->
  <SectionWrapper spacing="none" class="relative text-white overflow-hidden min-h-[80vh] flex flex-col justify-center pt-20 py-12 md:py-24">
    <!-- Imagen de fondo -->
    <div class="absolute inset-0 z-0">
      <img :src="HeaderBackground" alt="Fondo abstracto de tecnología" class="w-full h-full object-cover object-center" />
      <!-- Superposición para contraste -->
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-black/10 dark:from-black/80 dark:via-black/50"></div>
    </div>

    <!-- Contenido centrado -->
    <div class="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-black/30 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl ring-1 ring-white/10">
        <Transition
          appear
          enter-from-class="opacity-0 scale-95"
          enter-active-class="transition-all duration-700 ease-out"
        >
          <h1 class="text-center text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            ¡Despierta, que te come la <span class="text-brand-accent animate-pulse">iA</span>!
          </h1>
        </Transition>
        <Transition
          appear
          enter-from-class="opacity-0 translate-y-5"
          enter-active-class="transition-all duration-700 ease-out delay-200"
        >
          <p class="mt-6 text-center text-lg md:text-xl leading-relaxed text-gray-200/95 max-w-3xl mx-auto text-shadow-md">
            Vale, es broma... <strong>pero solo a medias</strong>. Las maquinas inteligentes evolucionan rápido, y lo mejor es empezar a aprovechar su potencial en lugar de dejar que nos convierta en sus esclavos.
          </p>
        </Transition>
      </div>
    </div>
    
    <!-- Flecha para indicar scroll -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-80">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white/70 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
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
          <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"></span>
        </h2>
        <p class="mt-4 text-lg text-secondary-light dark:text-secondary-dark leading-relaxed">
          Soy Juan David Ocampo, aunque la mayoría me llama <strong>Juanda</strong>. Desde hace años, me apasiona explorar herramientas que simplifican la vida moderna: <strong>hojas de cálculo, scripts, bases de conocimiento, automatizaciones con iA ...</strong>
          <br><br>
          En este espacio, comparto algunos de mis aprendizajes procurando que sea siempre <em>información útil y accionable</em>. Todo para <strong>motivarte a convertir a la tecnología en tu mejor aliada.</strong>
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
      
      <p class="text-center text-lg md:text-xl text-secondary-light dark:text-secondary-dark max-w-4xl mx-auto leading-relaxed">
        Este proyecto surge de la convicción de que la tecnología, <em>bien entendida y usada</em>, puede liberarnos tiempo para enfocarnos en lo que realmente importa: <strong>Las relaciones, los proyectos personales, el autoconocimiento...</strong>
        <br><br>
        Pero los avances ocurren cada vez más rápido, por eso <strong>adaptarnos pronto es clave.</strong> Es lo que promuevo aquí y mi enfoque se basa en <em>tres pilares prácticos</em> muy simples que quiero compartir contigo.
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
      <p class="mt-6 text-lg leading-relaxed text-secondary-light dark:text-secondary-dark max-w-3xl mx-auto">
        Estos tres pasos están diseñados para <strong>ayudarte a dibujar tu propia ruta personalizada:</strong> empieza por donde estés y ajusta según avances en tu proceso de <em>convertir a la tecnología en una aliada real.</em>
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
        title="Crea tu mapa"
        description="Responde 15 preguntas y obtén un mapa inicial personalizado.<br><br>Contiene Información útil y adaptada a tu perfil para que empieces a dibujar tu mapa con claridad."
        buttonText="Obtener"
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
        Artículos destacados
        <span class="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></span>
      </h2>
      <p class="mt-4 text-lg text-secondary-light dark:text-secondary-dark text-center max-w-2xl mx-auto">
        Aprendizajes, herramientas y reflexiones honestas. Todo documentado para que experimentes por tu cuenta y encuentres ideas accionables.
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
