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
        ScrollTrigger.create({
          trigger: main.value,
          start: 'top top',
          end: 'bottom bottom',
          pin: '.sticky-container',
        });

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
    <div class="hidden md:grid grid-cols-2 gap-16 items-start">
      <!-- Columna de Texto -->
      <div class="space-y-48 py-24">
        <div v-for="feature in features" :key="feature.title" class="feature-text-panel min-h-[80vh] flex flex-col justify-center">
          <h3 class="text-4xl font-bold font-heading text-primary mb-6">{{ feature.title }}</h3>
          <p class="text-lg text-secondary leading-relaxed">
            {{ feature.text }}
          </p>
        </div>
      </div>

      <!-- Columna de Icono Fija -->
      <div class="sticky-container h-screen flex items-center justify-center">
        <div class="relative w-full max-w-md aspect-square flex items-center justify-center">
          <component
            v-for="(feature) in features"
            :key="feature.title + '-icon'"
            :is="feature.icon"
            :class="['feature-icon absolute h-3/5 w-3/5', feature.colorClass]"
          />
        </div>
      </div>
    </div>

    <!-- Layout para Móvil (por defecto) -->
    <div class="md:hidden space-y-16 py-12">
      <div v-for="feature in features" :key="feature.title + '-mobile'" class="text-center">
        <div class="relative w-full max-w-xs mx-auto aspect-square flex items-center justify-center mb-6">
          <component :is="feature.icon" :class="['h-3/5 w-3/5', feature.colorClass]" />
        </div>
        <h3 class="text-3xl font-bold font-heading text-primary mb-2">{{ feature.title }}</h3>
        <p class="text-lg text-secondary leading-relaxed max-w-2xl mx-auto px-4">
          {{ feature.text }}
        </p>
      </div>
    </div>
  </div>
</template>
