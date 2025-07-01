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
        <div v-for="feature in features" :key="feature.title" class="feature-text-panel flex flex-col justify-center" style="min-height: calc(100vh - 4rem);">
          <h3 class="text-4xl font-bold font-heading text-primary-light dark:text-primary-dark mb-8">{{ feature.title }}</h3>
          <p class="text-xl text-secondary-light dark:text-secondary-dark leading-loose">
            {{ feature.text }}
          </p>
        </div>
      </div>

      <!-- Columna de Imagen Fija -->
      <div class="w-1/2">
        <div class="sticky top-[4rem] h-[calc(100vh-4rem)]">
          <div class="flex h-full items-center justify-center">
            <div class="relative w-full max-w-md aspect-square flex items-center justify-center bg-surface-light dark:bg-surface-dark rounded-2xl shadow-lg border border-border-light dark:border-border-dark p-8">
              <img
                v-for="(feature) in features"
                :key="feature.title + '-image'"
                :src="feature.image_url"
                :alt="feature.title"
                class="feature-icon absolute w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Layout para Móvil (por defecto) -->
    <div class="md:hidden space-y-16 py-12">
      <div v-for="feature in features" :key="feature.title + '-mobile'" class="text-center">
        <div class="mb-6">
          <img :src="feature.image_url" :alt="feature.title" class="w-full rounded-2xl shadow-lg aspect-video object-cover" />
        </div>
        <h3 class="text-3xl font-bold font-heading text-primary-light dark:text-primary-dark mb-2 px-4">{{ feature.title }}</h3>
        <p class="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed max-w-2xl mx-auto px-4">
          {{ feature.text }}
        </p>
      </div>
    </div>
  </div>
</template>
