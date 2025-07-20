<template>
  <PageLayout>
    <SectionWrapper spacing="normal">
      <IntroCard>
        <PageHeader :subtitle="subtitle">{{ title }}</PageHeader>
      </IntroCard>
    </SectionWrapper>
    <SectionWrapper spacing="normal">
      <div class="max-w-3xl mx-auto prose prose-lg dark:prose-invert max-w-none">
        <p class="text-base text-secondary-light dark:text-secondary-dark">{{ lastUpdated }}</p>
        <slot />
      </div>
    </SectionWrapper>
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/PageLayout.vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
import IntroCard from '@/components/IntroCard.vue';
import PageHeader from '@/components/PageHeader.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  lastUpdated: {
    type: String,
    default: 'Última actualización: 1 de Julio de 2024'
  }
});
</script>
