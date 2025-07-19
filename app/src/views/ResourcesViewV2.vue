<script setup>
import { ref, computed } from 'vue';

// Importar componentes mejorados
import PageLayoutV2 from '@/components/enhanced/PageLayoutV2.vue';
import StorySection from '@/components/enhanced/StorySection.vue';
import SectionWrapperV2 from '@/components/enhanced/SectionWrapperV2.vue';
import ContentCardV2 from '@/components/enhanced/ContentCardV2.vue';
import VisualHierarchy from '@/components/enhanced/VisualHierarchy.vue';

// Componentes originales que mantenemos
import ResourceCard from '@/components/ResourceCard.vue';
import FilterButton from '@/components/FilterButton.vue';
import ResourceModal from '@/components/ResourceModal.vue';
import IconWorkflow from '@/components/icons/IconWorkflow.vue';
import IconCode from '@/components/icons/IconCode.vue';
import IconSync from '@/components/icons/IconSync.vue';

// Datos de recursos (manteniendo la funcionalidad original)
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

// Estado del modal y filtros
const selectedResource = ref(null);
const isModalOpen = ref(false);
const selectedCategories = ref([]);

// Obtener todas las categorías únicas
const allCategories = computed(() => {
  const categories = resources.value.map(resource => resource.category);
  return ['Todas', ...new Set(categories)];
});

// Filtrar recursos por categorías seleccionadas
const filteredResources = computed(() => {
  if (selectedCategories.value.length === 0 || selectedCategories.value.includes('Todas')) {
    return resources.value;
  }
  return resources.value.filter(resource => 
    selectedCategories.value.includes(resource.category)
  );
});

// Funciones de filtrado
function toggleCategory(category) {
  if (category === 'Todas') {
    selectedCategories.value = [];
    return;
  }
  
  const index = selectedCategories.value.indexOf(category);
  if (index === -1) {
    selectedCategories.value.push(category);
  } else {
    selectedCategories.value.splice(index, 1);
  }
}

function isSelected(category) {
  if (category === 'Todas') {
    return selectedCategories.value.length === 0;
  }
  return selectedCategories.value.includes(category);
}

// Funciones del modal
function openModal(resource) {
  selectedResource.value = resource;
  isModalOpen.value = true;
}

function closeModal() {
  selectedResource.value = null;
  isModalOpen.value = false;
}

// Estadísticas de recursos
const resourceStats = computed(() => {
  const total = resources.value.length;
  const byCategory = {};
  
  resources.value.forEach(resource => {
    byCategory[resource.category] = (byCategory[resource.category] || 0) + 1;
  });
  
  return { total, byCategory };
});
</script>

<template>
  <PageLayoutV2 
    atmosphere-variant="content"
    atmosphere-intensity="normal"
  >
    <!-- Hero Section -->
    <StorySection 
      variant="hero" 
      spacing="normal"
      connector
    >
      <template #title>
        <VisualHierarchy 
          level="h1" 
          variant="accent" 
          alignment="center"
          decoration
        >
          Recursos
        </VisualHierarchy>
      </template>
      
      <template #subtitle>
        <VisualHierarchy 
          level="subtitle" 
          alignment="center"
        >
          Herramientas que uso a diario, plantillas que me ahorran horas y 
          automatizaciones que funcionan. Todo probado en las trincheras.
        </VisualHierarchy>
      </template>
    </StorySection>

    <!-- Estadísticas y Filtros -->
    <SectionWrapperV2 
      spacing="normal"
      atmosphere-variant="content"
      atmosphere-intensity="subtle"
      atmosphere-position="top"
    >
      <ContentCardV2 
        variant="highlight" 
        padding="normal"
        elevation="subtle"
      >
        <template #header>
          <div class="text-center space-y-4">
            <VisualHierarchy 
              level="h3" 
              alignment="center"
              variant="accent"
            >
              Explora mi colección
            </VisualHierarchy>
            
            <!-- Estadísticas rápidas -->
            <div class="flex justify-center items-center space-x-8 text-base">
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-accent">{{ resourceStats.total }}</div>
                <div class="text-secondary-light dark:text-secondary-dark">Recursos</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-accent">{{ Object.keys(resourceStats.byCategory).length }}</div>
                <div class="text-secondary-light dark:text-secondary-dark">Categorías</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-accent">100%</div>
                <div class="text-secondary-light dark:text-secondary-dark">Probado</div>
              </div>
            </div>
          </div>
        </template>

        <!-- Controles de Filtro -->
        <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
          <FilterButton
            v-for="category in allCategories"
            :key="category"
            @click="toggleCategory(category)"
            :active="isSelected(category)"
          >
            {{ category }}
            <span v-if="category !== 'Todas'" class="ml-2 text-xs opacity-75">
              ({{ resourceStats.byCategory[category] || 0 }})
            </span>
          </FilterButton>
        </div>

        <template #footer>
          <VisualHierarchy level="caption" alignment="center">
            <span class="text-secondary-light dark:text-secondary-dark">
              {{ filteredResources.length }} recurso{{ filteredResources.length !== 1 ? 's' : '' }} 
              {{ selectedCategories.length > 0 && !selectedCategories.includes('Todas') ? 'en esta categoría' : 'disponibles' }}
            </span>
          </VisualHierarchy>
        </template>
      </ContentCardV2>
    </SectionWrapperV2>

    <!-- Grid de Recursos -->
    <SectionWrapperV2 
      spacing="loose"
      atmosphere-variant="default"
      atmosphere-intensity="subtle"
      atmosphere-position="both"
      max-width="6xl"
    >
      <div v-if="filteredResources.length" class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="(resource, index) in filteredResources" 
          :key="resource.title"
          class="fade-in-element"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <ResourceCard 
            :resource="resource"
            @open="openModal"
          />
        </div>
      </div>

      <!-- No Resources State -->
      <div v-else class="text-center py-16">
        <ContentCardV2 variant="default" padding="loose" elevation="subtle">
          <VisualHierarchy level="h3" alignment="center">
            No hay recursos disponibles
          </VisualHierarchy>
          <VisualHierarchy level="body" alignment="center">
            No hay recursos que coincidan con tu búsqueda.
          </VisualHierarchy>
          
          <template #footer>
            <div class="text-center">
              <button 
                @click="selectedCategories = []"
                class="inline-flex items-center px-4 py-2 bg-surface-light dark:bg-surface-dark hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 text-primary-light dark:text-primary-dark border border-border-light dark:border-border-dark rounded-lg transition-colors duration-200"
              >
                Ver todos los recursos
              </button>
            </div>
          </template>
        </ContentCardV2>
      </div>
    </SectionWrapperV2>

    <!-- Sección de Valor Agregado -->
    <StorySection 
      variant="highlight" 
      spacing="loose"
    >
      <template #title>
        <VisualHierarchy 
          level="h2" 
          variant="accent" 
          alignment="center"
          decoration
        >
          ¿Por qué estos recursos?
        </VisualHierarchy>
      </template>

      <div class="grid md:grid-cols-3 gap-8">
        <ContentCardV2 variant="feature" padding="normal" elevation="subtle">
          <template #header>
            <div class="flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4 mx-auto">
              <svg class="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <VisualHierarchy level="h4" variant="accent" alignment="center">
              Probado en producción
            </VisualHierarchy>
          </template>
          
          <VisualHierarchy level="body" alignment="center">
            Cada recurso ha sido <strong>usado y validado</strong> en proyectos reales. 
            No encontrarás aquí teoría sin aplicación práctica.
          </VisualHierarchy>
        </ContentCardV2>

        <ContentCardV2 variant="feature" padding="normal" elevation="subtle">
          <template #header>
            <div class="flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4 mx-auto">
              <svg class="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <VisualHierarchy level="h4" variant="accent" alignment="center">
              Implementación rápida
            </VisualHierarchy>
          </template>
          
          <VisualHierarchy level="body" alignment="center">
            Diseñados para ser <strong>implementados en minutos</strong>, no horas. 
            Documentación clara y pasos específicos incluidos.
          </VisualHierarchy>
        </ContentCardV2>

        <ContentCardV2 variant="feature" padding="normal" elevation="subtle">
          <template #header>
            <div class="flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full mb-4 mx-auto">
              <svg class="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <VisualHierarchy level="h4" variant="accent" alignment="center">
              Actualizados regularmente
            </VisualHierarchy>
          </template>
          
          <VisualHierarchy level="body" alignment="center">
            Los recursos se <strong>mantienen actualizados</strong> con las últimas 
            versiones de las herramientas y mejores prácticas.
          </VisualHierarchy>
        </ContentCardV2>
      </div>
    </StorySection>

    <!-- Call to Action Final -->
    <StorySection 
      variant="cta" 
      spacing="normal"
    >
      <ContentCardV2 
        variant="highlight" 
        padding="loose"
        elevation="normal"
      >
        <VisualHierarchy 
          level="h3" 
          variant="gradient" 
          alignment="center"
        >
          ¿Necesitas algo personalizado?
        </VisualHierarchy>
        
        <VisualHierarchy 
          level="subtitle" 
          alignment="center"
        >
          Si no encuentras exactamente lo que buscas, o necesitas una automatización 
          específica para tu caso, hablemos. Puedo crear algo a medida.
        </VisualHierarchy>

        <template #footer>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contacto" 
              class="inline-flex items-center px-6 py-3 bg-brand-accent hover:bg-brand-accent-darker text-text-on-accent rounded-lg transition-all duration-200 font-semibold hover:-translate-y-1"
            >
              Solicitar recurso personalizado
            </a>
            <span class="text-secondary-light dark:text-secondary-dark">o</span>
            <a 
              href="/blog" 
              class="inline-flex items-center px-6 py-3 bg-surface-light dark:bg-surface-dark hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 text-primary-light dark:text-primary-dark border border-border-light dark:border-border-dark rounded-lg transition-all duration-200 font-semibold hover:-translate-y-1"
            >
              Lee sobre automatización
            </a>
          </div>
        </template>
      </ContentCardV2>
    </StorySection>

    <!-- Modal de Detalles -->
    <ResourceModal 
      v-if="selectedResource"
      :show="isModalOpen"
      :resource="selectedResource"
      @close="closeModal"
    />

  </PageLayoutV2>
</template>

<style scoped>
/* Animaciones de entrada */
.fade-in-element {
  opacity: 0;
  transform: translateY(1rem);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-in-element.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Mejorar el espaciado en móviles */
@media (max-width: 768px) {
  .grid.md\:grid-cols-2 {
    grid-template-columns: 1fr;
  }
  
  .grid.md\:grid-cols-3 {
    grid-template-columns: 1fr;
  }
}

/* Transiciones suaves para botones */
button, a {
  transition: all 0.2s ease-in-out;
}

/* Iconos de las características */
svg {
  transition: all 0.2s ease-in-out;
}

.fade-in-element:hover svg {
  transform: scale(1.1);
}

/* Estadísticas destacadas */
.text-2xl {
  font-feature-settings: 'tnum' 1;
}
</style>
