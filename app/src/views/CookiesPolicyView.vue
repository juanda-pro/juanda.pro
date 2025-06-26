<template>
  <div class="min-h-screen py-24 sm:py-32">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-primary-light dark:text-primary-dark">Política de Cookies</h1>
        <div class="prose prose-lg dark:prose-invert max-w-none text-secondary-light dark:text-secondary-dark">
          <p>Última actualización: {{ new Date().toLocaleDateString() }}</p>
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
      </div>
    </div>
  </div>
</template>

<script setup>
import CookieManager from '@/components/CookieManager.vue';
</script>

<style scoped>
.prose {
  @apply text-secondary-light dark:text-secondary-dark;
}
.prose h2 {
  @apply text-primary-light dark:text-primary-dark;
}
</style>
