<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { getPublishedArticles } from '@/data/articlesData';
import SectionWrapper from '@/components/SectionWrapper.vue';
import HeroSection from '@/components/HeroSection.vue';

import ScrollingFeatures from '@/components/ScrollingFeatures.vue';
import MiniArticleCard from '@/components/MiniArticleCard.vue';
import CtaCard from '@/components/CtaCard.vue';
import DecorativeUnderline from '@/components/DecorativeUnderline.vue';
import DecorativeIcon from '@/components/DecorativeIcon.vue';
import DecorativeBackground from '@/components/DecorativeBackground.vue';

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
    // Error handling could be implemented here with user feedback
  }
};

onMounted(() => {
  fetchRecentArticles();
});

const pilares = [
  {
    icon: MapIcon,
    title: 'Dibuja tu mapa',
    text: '<strong>Empieza por explorar el terreno:</strong> conoce las herramientas disponibles y céntrate en aquellas que te pueden apoyar en tu día a día. Por fortuna <em>hay muchas personas compartiendo</em> sus experiencias, tutoriales y más. <strong>Explora con foco para no distraerte</strong> con novedades llamativas y elige solo lo que encaje contigo.',
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
  <HeroSection
    title="¡Despierta, que te come la iA!"
    :background-image="HeaderBackground"
    animated-text="iA"
  >
    <template v-slot:subtitle>
      Vale, es broma... <strong>pero solo a medias</strong>. Las máquinas inteligentes evolucionan rápido. Lo mejor es empezar a aprovechar su potencial en lugar de dejar que nos convierta en sus esclavos.
    </template>
  </HeroSection>

  <!-- Sección Quién Soy -->
  <section aria-labelledby="quien-soy-heading">
    <SectionWrapper spacing="normal" class="overflow-hidden relative">
    <!-- Elementos decorativos de fondo -->

    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
      <DecorativeBackground
        image-url="https://placehold.co/400x400/1F2937/FFFFFF?text=Juanda"
        image-alt="Foto de Juanda"
        height="h-80"
      />
      
      <div class="text-center md:text-left fade-in-element">
        <h2 id="quien-soy-heading" class="text-3xl font-extrabold font-heading text-primary-light dark:text-primary-dark sm:text-4xl relative inline-block">
          ¡Hola! Soy Juanda.
          <DecorativeUnderline width="full" opacity="medium" />
        </h2>
        <p class="mt-4 text-xl text-secondary-light dark:text-secondary-dark leading-relaxed">
          Soy Juan David Ocampo, aunque la mayoría me llama <strong>Juanda</strong>. Desde hace años, me apasiona explorar herramientas que simplifican la vida moderna: <strong>hojas de cálculo, scripts, bases de conocimiento, automatizaciones con iA ...</strong>
          <br><br>
          En este espacio, comparto algunos de mis aprendizajes procurando que sea siempre <em>información útil y accionable</em>. Todo para <strong>motivarte a convertir a la tecnología en tu mejor aliada.</strong>
        </p>
        
        <!-- Botón de acción secundario -->
        <div class="mt-6">
          <a href="/soy" class="inline-flex items-center text-brand-accent hover:text-brand-accent-dark transition-colors duration-300">
            Conoce más sobre mí
            <DecorativeIcon type="arrow-right" size="sm" color="text-current ml-1" />
          </a>
        </div>
      </div>
    </div>
    

    </SectionWrapper>
  </section>

  <!-- Texto Puente -->
  <section aria-label="Filosofía del proyecto">
    <SectionWrapper spacing="loose" class="text-center relative">
    <!-- Elementos decorativos de fondo -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-brand-accent/20 to-transparent rounded-full"></div>
    
    <div class="max-w-3xl mx-auto bg-surface-light/30 dark:bg-surface-dark/30 rounded-xl p-8 border border-border-light/10 dark:border-border-dark/10 shadow-sm relative overflow-hidden">
      
      <p class="text-center text-xl md:text-2xl text-secondary-light dark:text-secondary-dark max-w-4xl mx-auto leading-relaxed">
        Este proyecto surge de la convicción de que la tecnología, <em>bien entendida y usada</em>, puede liberarnos tiempo para enfocarnos en lo que realmente importa: <strong>El autoconocimiento, las relaciones, los proyectos personales...</strong>
        <br><br>
        Pero los avances ocurren cada vez más rápido, por eso <strong>adaptarnos pronto es clave.</strong> Es lo que promuevo aquí y mi enfoque se basa en <em>tres pilares prácticos</em> muy simples que quiero compartir contigo.
      </p>
      <!-- Elemento decorativo inferior -->
      <div class="mt-6 flex justify-center">
        <DecorativeIcon type="arrow-down" size="md" />
      </div>
    </div>
    </SectionWrapper>
  </section>

  <!-- Sección de Pilares Temáticos -->
  <section aria-labelledby="pilares-heading">
    <SectionWrapper spacing="loose">
    <!-- Elementos decorativos de fondo -->

    
    <div class="text-center relative z-10">
      <h2 id="pilares-heading" class="text-3xl font-extrabold font-heading text-primary-light dark:text-primary-dark sm:text-4xl inline-block relative">
        Tres pilares simples para empezar
        <DecorativeUnderline width="half" opacity="high" />
      </h2>
      <p class="mt-6 text-xl leading-relaxed text-secondary-light dark:text-secondary-dark max-w-3xl mx-auto">
        Estos tres pasos te ayudarán <strong>a dibujar tu propia ruta personalizada:</strong> empieza por donde estés y ajusta según avances en tu proceso de <em>convertir a la tecnología en una aliada real.</em>
      </p>
    </div>
    
    <!-- Contenedor con efecto de aparición -->
    <div class="relative z-10 fade-in-element">
      <ScrollingFeatures :features="pilares" class="md:mt-12" />
    </div>
    

    </SectionWrapper>
  </section>

  <!-- Call to Action -->
  <section aria-labelledby="cta-heading">
    <SectionWrapper spacing="normal" class="relative overflow-hidden">
    <!-- Elementos decorativos de fondo -->

    
    <!-- Indicador visual para dirigir la atención -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <DecorativeIcon type="chevron-down" size="lg" color="text-brand-accent/30" />
    </div>
    
    <div class="relative z-10 transform transition-all duration-700 hover:scale-[1.02] fade-in-element">
      <CtaCard 
        title="Crea tu mapa"
        description="Responde 15 preguntas y obtén un mapa inicial personalizado.<br>Contiene recomendaciones utiles y adaptadas a tu perfil para que empieces a dibujar tu mapa con claridad."
        buttonText="Obtener"
        buttonLink="#"
      />
    </div>
    </SectionWrapper>
  </section>

  <!-- Sección de Contenido Destacado -->
  <section aria-labelledby="articulos-heading">
    <SectionWrapper spacing="loose" class="bg-surface-light dark:bg-surface-dark relative overflow-hidden">
    <!-- Elementos decorativos de fondo -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent"></div>

    
    <div class="text-center relative z-10">
      <h2 id="articulos-heading" class="text-3xl font-extrabold font-heading text-primary-light dark:text-primary-dark sm:text-4xl inline-block relative">
        Artículos destacados
        <DecorativeUnderline width="half" opacity="high" />
      </h2>
      <p class="mt-4 text-xl text-secondary-light dark:text-secondary-dark text-center max-w-2xl mx-auto">
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
        <DecorativeIcon type="arrow-right" size="sm" color="text-current ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
    </SectionWrapper>
  </section>
</PageLayout>
</template>
