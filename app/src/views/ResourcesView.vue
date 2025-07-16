<script setup>
import { ref, computed } from 'vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
import PageHeader from '@/components/PageHeader.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import FilterButton from '@/components/FilterButton.vue';
import ResourceModal from '@/components/ResourceModal.vue';
import IconWorkflow from '@/components/icons/IconWorkflow.vue';
import IconCode from '@/components/icons/IconCode.vue';
import IconSync from '@/components/icons/IconSync.vue';

const resources = ref([
  {
    title: 'Onboarding Automatizado de Clientes',
    category: 'N8N',
    description: 'Workflow para automatizar la bienvenida a nuevos clientes, desde el email inicial a la creación de tareas.',
    icon: IconWorkflow,
    url: '#',
    buttonText: 'Ver Workflow'
  },
  {
    title: 'Landing Page Minimalista para Proyectos',
    category: 'Plantillas Web',
    description: 'Plantilla HTML y Tailwind CSS lista para usar. Lanza una página de presentación para tus proyectos de forma rápida y elegante.',
    icon: IconCode,
    url: '#',
    buttonText: 'Obtener Plantilla'
  },
  {
    title: 'Sincronización Trello-Calendar',
    category: 'Make',
    description: 'Escenario para mantener tus tableros de Trello y tu Google Calendar perfectamente sincronizados en tiempo real.',
    icon: IconSync,
    url: '#',
    buttonText: 'Ver Escenario'
  },
  {
    title: 'Dashboard de Métricas para Slack',
    category: 'N8N',
    description: 'Recopila métricas clave de varias fuentes y las envía a un canal de Slack o Discord diariamente.',
    icon: IconWorkflow,
    url: '#',
    buttonText: 'Ver Workflow'
  },
  {
    title: 'Portfolio Personal de una Página',
    category: 'Plantillas Web',
    description: 'Una plantilla elegante y responsiva para mostrar tu trabajo y habilidades. Fácil de personalizar y desplegar.',
    icon: IconCode,
    url: '#',
    buttonText: 'Obtener Plantilla'
  }
]);

const allCategories = ['N8N', 'Make', 'Plantillas Web'];
const selectedCategories = ref([]);
const isModalOpen = ref(false);
const selectedResource = ref(null);

function openResourceModal(resource) {
  selectedResource.value = resource;
  isModalOpen.value = true;
}

function closeResourceModal() {
  isModalOpen.value = false;
}

const filteredResources = computed(() => {
  if (selectedCategories.value.length === 0) {
    return resources.value;
  }
  return resources.value.filter(resource => 
    selectedCategories.value.includes(resource.category)
  );
});

function toggleCategory(category) {
  const index = selectedCategories.value.indexOf(category);
  if (index === -1) {
    selectedCategories.value.push(category);
  } else {
    selectedCategories.value.splice(index, 1);
  }
}

function isSelected(category) {
  return selectedCategories.value.includes(category);
}
</script>

<template>
  <div>
    <SectionWrapper spacing="normal">
      <div class="relative z-10">
        <PageHeader subtitle="Herramientas que uso a diario, plantillas que me ahorran horas y automatizaciones que funcionan. Todo probado en las trincheras.">
          Recursos
        </PageHeader>
      </div>
    </SectionWrapper>

    <SectionWrapper spacing="normal">
      <!-- Controles de Filtro -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
        <FilterButton
          v-for="category in allCategories"
          :key="category"
          @click="toggleCategory(category)"
          :active="isSelected(category)"
        >
          {{ category }}
        </FilterButton>
      </div>

      <!-- Grid de Recursos -->
      <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ResourceCard 
          v-for="resource in filteredResources" 
          :key="resource.title"
          :resource="resource"
          @open="openResourceModal"
        />
      </div>
    </SectionWrapper>

    <ResourceModal 
      v-if="selectedResource"
      :show="isModalOpen"
      :resource="selectedResource"
      @close="closeResourceModal"
    />
  </div>
</template>
