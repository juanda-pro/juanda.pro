<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';
import DecorativeUnderline from '@/components/DecorativeUnderline.vue';
import ScrollingFeatures from '@/components/ScrollingFeatures.vue';

interface Pilar {
  icon: any;
  title: string;
  text: string;
  colorClass: string;
  image_url: string;
}

interface Props {
  pilares: Pilar[];
}

defineProps<Props>();
</script>

<template>
  <section aria-labelledby="pilares-heading">
    <SectionWrapper spacing="normal">
      <div class="text-center mb-16">
        <h2 id="pilares-heading" class="text-3xl font-extrabold font-heading text-primary-light dark:text-primary-dark sm:text-4xl relative inline-block">
          Tres pilares simples para empezar
          <DecorativeUnderline width="full" opacity="medium" />
        </h2>
        <p class="mt-4 text-xl text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto">
          Estos tres pasos te ayudarán a dibujar tu propia ruta personalizada: empieza por donde estés y ajusta según avances en tu proceso de convertir a la tecnología en una aliada real.
        </p>
      </div>
      
      <ScrollingFeatures :features="pilares" />
    </SectionWrapper>
  </section>
</template>