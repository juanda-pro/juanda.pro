<script setup lang="ts">
import HomeHeroSection from '@/components/HomeHeroSection.vue';
import HomeAboutSection from '@/components/HomeAboutSection.vue';
import HomeBridgeSection from '@/components/HomeBridgeSection.vue';
import HomePilarsSection from '@/components/HomePilarsSection.vue';
import HomeCtaSection from '@/components/HomeCtaSection.vue';
import { useHomeData } from '@/composables/useHomeData';

const { recentArticles, pilares } = useHomeData();


</script>

<template>
  <PageLayout :remove-padding-top="true">
  <!-- Hero Section -->
  <HomeHeroSection />

  <!-- Sección Quién Soy -->
  <HomeAboutSection />

  <!-- Texto Puente -->
  <HomeBridgeSection />

  <!-- Sección de Pilares Temáticos -->
  <HomePilarsSection :pilares="pilares" />

  <!-- Call to Action -->
  <HomeCtaSection :recent-articles="recentArticles" />
</PageLayout>
</template>
