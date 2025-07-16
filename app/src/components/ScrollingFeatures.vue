<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  icon: any;
  title: string;
  text: string;
  colorClass: string;
  image_url: string;
}

defineProps<{
  features: Feature[];
}>();

const main = ref<HTMLElement | null>(null);
let ctx: gsap.Context;

onMounted(() => {
  if (!main.value) return;

  ctx = gsap.context((self) => {
    // Lógica de animación solo para pantallas de escritorio (md y superiores)
    ScrollTrigger.matchMedia({
      '(min-width: 768px)': () => {
        const panels: HTMLElement[] = gsap.utils.toArray('.feature-text-panel', main.value as Element);
        const icons: HTMLElement[] = gsap.utils.toArray('.feature-icon', main.value as Element);

        // Estado inicial: solo el primer icono es visible.
        gsap.set(icons.slice(1), { autoAlpha: 0 });

        // Anclamos el contenedor de los iconos


        // Creamos una animación para cada panel de texto
        panels.forEach((panel, i) => {
          if (i === 0) return; // No animar el primer panel

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: panel,
              start: 'top center+=10%',
              end: 'center center+=10%',
              scrub: 0.8,
            }
          });

          tl.to(icons[i - 1], { autoAlpha: 0, duration: 0.3 }, 0);
          tl.to(icons[i], { autoAlpha: 1, duration: 0.3 }, 0);
        });
      }
    });
  }, main.value);
});

onUnmounted(() => {
  if (ctx) {
    ctx.revert();
  }
});

</script>

<template>
  <div ref="main">
    <!-- Layout para Escritorio (md y superior) -->
    <div class="hidden md:flex gap-12">
      <!-- Columna de Texto -->
      <div class="w-1/2">
        <div 
          v-for="(feature, index) in features" 
          :key="feature.title" 
          class="feature-text-panel flex flex-col justify-center fade-in-element" 
          style="min-height: calc(100vh - 4rem);"
        >
          <div class="relative inline-block mb-2">
            <span :class="`inline-block w-8 h-8 rounded-full ${feature.colorClass || 'bg-brand-accent'} text-white font-bold flex items-center justify-center`">{{ index + 1 }}</span>
          </div>
          <h3 class="text-4xl font-bold font-heading text-primary-light dark:text-primary-dark mb-8 relative inline-block">
            {{ feature.title }}
            <span class="absolute -bottom-2 left-0 w-1/3 h-1 bg-brand-accent/50 rounded-full"></span>
          </h3>
          <p class="text-xl text-secondary-light dark:text-secondary-dark leading-loose">
            {{ feature.text }}
          </p>
        </div>
      </div>

      <!-- Columna de Imagen Fija -->
      <div class="w-1/2">
        <div class="sticky top-[4rem] h-[calc(100vh-4rem)]">
          <div class="flex h-full items-center justify-center">
            <div class="relative w-full max-w-md aspect-square flex items-center justify-center bg-gradient-to-br from-surface-light/80 to-surface-light dark:from-surface-dark/80 dark:to-surface-dark rounded-2xl shadow-xl border border-border-light/20 dark:border-border-dark/20 p-8 overflow-hidden group">
              <!-- Elementos decorativos de fondo -->
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/5 dark:bg-brand-accent/10 rounded-full blur-xl transition-all duration-700 group-hover:scale-150"></div>
              <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-info-dark/5 dark:bg-accent-info-dark/10 rounded-full blur-xl transition-all duration-700 group-hover:scale-150"></div>
              
              <img
                v-for="(feature) in features"
                :key="feature.title + '-image'"
                :src="feature.image_url"
                :alt="feature.title"
                class="feature-icon absolute w-full h-full object-contain z-10 transition-all duration-500 ease-out"
              />
              
              <!-- Borde decorativo animado -->
              <div class="absolute inset-0 border-2 border-brand-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Layout para Móvil (por defecto) -->
    <div class="md:hidden space-y-16 py-12">
      <div 
        v-for="(feature, index) in features" 
        :key="feature.title + '-mobile'" 
        class="text-center fade-in-element bg-surface-light/30 dark:bg-surface-dark/30 rounded-xl p-6 shadow-sm border border-border-light/10 dark:border-border-dark/10 relative overflow-hidden"
      >
        <!-- Elementos decorativos de fondo -->
        <div class="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/5 rounded-full blur-xl"></div>
        <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-info-dark/5 rounded-full blur-xl"></div>
        
        <!-- Número de paso -->
        <div class="absolute top-4 left-4 w-8 h-8 rounded-full bg-brand-accent text-white font-bold flex items-center justify-center shadow-md">
          {{ index + 1 }}
        </div>
        
        <div class="mb-6 mt-4 transform transition-all duration-500 hover:scale-[1.02] relative">
          <img 
            :src="feature.image_url" 
            :alt="feature.title" 
            class="w-full rounded-xl shadow-lg aspect-video object-cover" 
          />
          <div class="absolute inset-0 border border-brand-accent/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <h3 class="text-3xl font-bold font-heading text-primary-light dark:text-primary-dark mb-4 px-4 relative inline-block">
          {{ feature.title }}
          <span class="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-brand-accent/30 rounded-full"></span>
        </h3>
        
        <p class="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed max-w-2xl mx-auto px-4 mb-4">
          {{ feature.text }}
        </p>
      </div>
    </div>
  </div>
</template>
