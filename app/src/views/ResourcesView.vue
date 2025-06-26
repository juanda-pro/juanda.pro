<script setup>
import { ref, computed } from 'vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
import PageHeader from '@/components/PageHeader.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import FilterButton from '@/components/FilterButton.vue';
import ResourceModal from '@/components/ResourceModal.vue';

const resources = ref([
  {
    title: 'Onboarding Automatizado de Clientes',
    category: 'N8N',
    description: 'Workflow para automatizar la bienvenida a nuevos clientes, desde el email inicial a la creación de tareas.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-4.991-2.696a8.25 8.25 0 010 11.667l-3.181 3.183m0-11.667l3.181-3.183a8.25 8.25 0 0111.667 0l3.181 3.183" /></svg>',
    url: '#',
    buttonText: 'Ver Workflow'
  },
  {
    title: 'Landing Page Minimalista para Proyectos',
    category: 'Plantillas Web',
    description: 'Plantilla HTML y Tailwind CSS lista para usar. Lanza una página de presentación para tus proyectos de forma rápida y elegante.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>',
    url: '#',
    buttonText: 'Obtener Plantilla'
  },
  {
    title: 'Sincronización Trello-Calendar',
    category: 'Make',
    description: 'Escenario para mantener tus tableros de Trello y tu Google Calendar perfectamente sincronizados en tiempo real.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    url: '#',
    buttonText: 'Ver Escenario'
  },
  {
    title: 'Dashboard de Métricas para Slack',
    category: 'N8N',
    description: 'Recopila métricas clave de varias fuentes y las envía a un canal de Slack o Discord diariamente.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-4.991-2.696a8.25 8.25 0 010 11.667l-3.181 3.183m0-11.667l3.181-3.183a8.25 8.25 0 0111.667 0l3.181 3.183" /></svg>',
    url: '#',
    buttonText: 'Ver Workflow'
  },
  {
    title: 'Portfolio Personal de una Página',
    category: 'Plantillas Web',
    description: 'Una plantilla elegante y responsiva para mostrar tu trabajo y habilidades. Fácil de personalizar y desplegar.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>',
    url: '#',
    buttonText: 'Obtener Plantilla'
  }
]);

const allCategories = ['N8N', 'Make', 'Plantillas Web'];
const selectedCategories = ref([]);
const searchQuery = ref('');

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
  let result = resources.value;

  // Filtrar por categoría
  if (selectedCategories.value.length > 0) {
    result = result.filter(resource => 
      selectedCategories.value.includes(resource.category)
    );
  }

  // Filtrar por búsqueda
  if (searchQuery.value.trim() !== '') {
    const lowerCaseQuery = searchQuery.value.toLowerCase();
    result = result.filter(resource => 
      resource.title.toLowerCase().includes(lowerCaseQuery) ||
      resource.description.toLowerCase().includes(lowerCaseQuery)
    );
  }

  return result;
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
    <SectionWrapper>
      <div class="relative z-10">
        <PageHeader>
          Recursos
        </PageHeader>
        <p class="-mt-8 max-w-3xl mx-auto text-center text-lg sm:text-xl text-secondary-light dark:text-secondary-dark">
          Una colección curada de herramientas, plantillas y recursos que uso en mi día a día. Directo al grano, sin rodeos.
        </p>

        <!-- Barra de Búsqueda -->
        <div class="mt-12 max-w-xl mx-auto">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-secondary-light dark:text-secondary-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
            <input v-model="searchQuery" type="text" placeholder="Buscar un recurso..." class="block w-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full py-3 pl-10 pr-4 text-primary-light dark:text-primary-dark placeholder-secondary-light dark:placeholder-secondary-dark focus:ring-brand-accent focus:border-brand-accent transition">
          </div>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
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
