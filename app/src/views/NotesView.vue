<script setup>
import { ref, computed } from 'vue';
import PageLayout from '@/components/PageLayout.vue';

import SectionWrapper from '@/components/SectionWrapper.vue';
import WikiLayout from '@/components/WikiLayout.vue';
import WikiSidebar from '@/components/WikiSidebar.vue';
import WikiContent from '@/components/WikiContent.vue';
import OnboardingHint from '@/components/OnboardingHint.vue';

const wikiTree = ref([
  {
    type: 'file',
    id: 'onboarding',
    name: '🗄️ Empieza aquí',
    metadata: {
      createdAt: '2024-06-26',
      format: 'Guía de Usuario',
      abstract: 'Un punto de partida para entender la estructura y propósito de este cuaderno digital.',
    },
    content: `
# Bienvenido al Cuaderno Digital

Esta sección es una **wiki abierta**, un espacio donde documento y comparto el conocimiento que voy adquiriendo en mi viaje como explorador de la tecnología y el desarrollo.

Piensa en ello como un segundo cerebro público. Aquí encontrarás:

- **Conceptos:** Ideas, modelos mentales y principios que guían mi forma de pensar.
- **Proyectos:** El día a día de las cosas que construyo, con aciertos y errores.
- **Sistemas:** Frameworks y procesos que uso para ser más efectivo.
- **Procedimientos:** Guías prácticas y tutoriales destilados para aplicar directamente.

Utiliza el menú para explorar. Este espacio está en constante evolución, como el aprendizaje mismo.
    `
  },
  {
    type: 'folder',
    name: 'Proyectos',
    children: [
      {
        type: 'file',
        id: 'juandapro-log-1',
        name: 'juanda.pro - Orígenes',
        metadata: {
            createdAt: '2024-05-10',
            format: 'Bitácora de Proyecto',
            abstract: 'Un resumen detallado sobre los inicios del proyecto juanda.pro, la filosofía de diseño y la selección del stack tecnológico inicial.',
            relations: [
              { id: 'atomic-design', name: 'Atomic Design' },
            ]
        },
        content: '## Orígenes de juanda.pro\n\nLa idea inicial, la elección del stack (Vue, Vite, Tailwind) y los principios de diseño minimalista...'
      },
    ]
  },
  {
    type: 'folder',
    name: 'Conceptos',
    children: [
        {
            type: 'file',
            id: 'atomic-design',
            name: 'Atomic Design',
            metadata: {
                createdAt: '2024-06-15',
                format: 'Modelo Mental',
                abstract: 'Metodología para crear sistemas de diseño jerárquicos y escalables, descomponiendo interfaces en átomos, moléculas, organismos, etc.',
                relations: [
                  { id: 'juandapro-log-1', name: 'juanda.pro - Orígenes' },
                ]
            },
            content: '## Atomic Design\n\nExplicación detallada del modelo de Atomic Design de Brad Frost y cómo se aplica en la práctica para construir componentes reutilizables.'
        }
    ]
  },
  {
    type: 'folder',
    name: 'Sistemas',
    children: [
        {
            type: 'file',
            id: 'sistema-gestion-estado',
            name: 'Gestión de Estado en Vue',
            metadata: {
                createdAt: '2024-06-20',
                format: 'Arquitectura de Software',
                abstract: 'Análisis de diferentes enfoques para la gestión de estado en aplicaciones Vue 3, desde props/events hasta soluciones como Pinia.',
                relations: [
                  { id: 'atomic-design', name: 'Atomic Design' },
                ]
            },
            content: '## Gestión de Estado en Vue 3\n\nComparativa entre `reactive`, `ref`, `provide/inject` y Pinia para manejar el estado de la aplicación de forma eficiente.'
        }
    ]
  },
  {
    type: 'folder',
    name: 'Procedimientos',
    children: []
  }
]);

const activeFileId = ref('onboarding');

const activeFile = computed(() => {
  function findFile(nodes, id) {
    for (const node of nodes) {
      if (node.type === 'file' && node.id === id) return node;
      if (node.type === 'folder') {
        const found = findFile(node.children, id);
        if (found) return found;
      }
    }
    return null;
  }
  return findFile(wikiTree.value, activeFileId.value);
});

function handleSelectFile(fileId) {
  activeFileId.value = fileId;
}

</script>

<template>
  <PageLayout>
    <OnboardingHint />
    <SectionWrapper spacing="normal">
      <PageHeader subtitle="Aquí encontrarás notas valiosas que uso en el desarrollo de mis proyectos, sistemas y procedimientos.">
        Notas de juanda.pro
      </PageHeader>
    </SectionWrapper>

    <SectionWrapper spacing="normal">
      <WikiLayout @select-file="handleSelectFile">
        <template #sidebar>
          <WikiSidebar 
            :nodes="wikiTree"
            :active-file-id="activeFileId"
            @select-file="handleSelectFile"
          />
        </template>
        <template #content>
          <WikiContent :file="activeFile" @select-file="handleSelectFile" />
        </template>
      </WikiLayout>
    </SectionWrapper>
  </PageLayout>
</template>
