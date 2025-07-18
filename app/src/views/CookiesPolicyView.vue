<template>
  <PageLayout>
    <SectionWrapper spacing="normal">
      <IntroCard>
        <PageHeader subtitle="Este sitio usa cookies para mejorar tu experiencia. Aquí puedes saber más y gestionar tus preferencias.">Política de Cookies</PageHeader>
      </IntroCard>
    </SectionWrapper>
    <SectionWrapper spacing="normal">
      <div class="max-w-3xl mx-auto prose prose-lg dark:prose-invert max-w-none">
        <p class="text-sm text-secondary-light dark:text-secondary-dark">Última actualización: 1 de Julio de 2024</p>
        <p>Este sitio web, juanda.pro, utiliza cookies para mejorar tu experiencia mientras navegas. A continuación, explicamos qué son las cookies, cómo las usamos y cómo puedes gestionarlas.</p>
        
        <h2>¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tableta, móvil) cuando visitas un sitio web. Ayudan a los sitios a recordar información sobre tu visita, como tu idioma preferido y otras configuraciones, lo que puede facilitar tu próxima visita y hacer que el sitio te resulte más útil.</p>

        <h2>¿Cómo usamos las cookies?</h2>
        <p>Utilizamos cookies para varios propósitos:</p>
        <ul>
          <li><strong>Cookies esenciales:</strong> Son estrictamente necesarias para que el sitio web funcione. No se pueden desactivar.</li>
          <li><strong>Cookies de rendimiento y análisis:</strong> Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio, recopilando y reportando información de forma anónima.</li>
          <li><strong>Cookies de funcionalidad:</strong> Permiten que el sitio recuerde las elecciones que haces (como tu nombre de usuario o región) y proporcionan características mejoradas y más personales.</li>
        </ul>

        <h2>Gestiona tus preferencias</h2>
        <p>Respetamos tu derecho a la privacidad. A continuación, puedes habilitar o deshabilitar los diferentes tipos de cookies. Ten en cuenta que bloquear algunos tipos de cookies puede afectar tu experiencia en el sitio.</p>
        <CookieManager />
      </div>
    </SectionWrapper>
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/PageLayout.vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
import PageHeader from '@/components/PageHeader.vue';
import CookieManager from '@/components/CookieManager.vue';
import IntroCard from '@/components/IntroCard.vue';
</script>
