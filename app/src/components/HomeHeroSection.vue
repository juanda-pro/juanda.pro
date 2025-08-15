<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import HeaderBackground from '../assets/cabecera_inicio.jpeg';
</script>

<template>
  <HeroSection
    title="¡Despierta, que te come la iA!"
    :background-image="HeaderBackground"
    animated-text="iA"
  >
    <template v-slot:subtitle>
      Vale, es broma... <strong>pero solo a medias</strong>. Las máquinas inteligentes evolucionan rápido. Lo mejor es empezar a aprovechar su potencial en lugar de dejar que nos convierta en sus esclavos.
    </template>
  </HeroSection>
</template>