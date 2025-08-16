<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';
import CtaCardImproved from '@/components/CtaCardImproved.vue';
import MiniArticleCard from '@/components/MiniArticleCard.vue';

interface Article {
  slug: string;
  title: string;
  category: string;
  image_url: string;
  published_at: string;
  description?: string;
}

interface Props {
  recentArticles: Article[];
}

defineProps<Props>();
</script>

<template>
  <section aria-label="Llamada a la acción y artículos recientes">
    <SectionWrapper spacing="normal">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Llamada a la acción -->
        <div class="order-2 lg:order-1">
          <CtaCardImproved
            title="¿Empezamos?"
            description="Cuéntame qué te interesa y te ayudo a dar el primer paso."
            button-text="Escríbeme"
            button-link="/contacto"
            :show-decorative-elements="true"
          />
        </div>
        
        <!-- Artículos recientes -->
        <div class="order-1 lg:order-2">
          <h3 class="text-2xl font-bold font-heading text-primary-light dark:text-primary-dark mb-6">
            Últimos artículos
          </h3>
          <div class="space-y-4">
            <MiniArticleCard
              v-for="article in recentArticles"
              :key="article.slug"
              :article="article"
            />
          </div>
          
          <!-- Enlace a todos los artículos -->
          <div class="mt-6 text-center">
            <a 
              href="/articulos" 
              class="inline-flex items-center text-accent-primary-light dark:text-accent-primary-dark hover:text-accent-primary-light/80 dark:hover:text-accent-primary-dark/80 transition-colors duration-300 font-medium"
            >
              Ver todos los artículos
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </section>
</template>