<template>
  <footer class="bg-surface-light dark:bg-surface-deeper-dark transition-colors duration-300">
    <div class="container mx-auto px-4 py-16 md:py-24 text-center">
      
      <h2 class="font-heading text-4xl md:text-5xl font-bold text-primary-light dark:text-primary-dark mb-4">
        Hablemos.
      </h2>
      
      <p class="max-w-xl mx-auto text-xl text-secondary-light dark:text-secondary-dark mb-8">
        Siempre estoy abierto a nuevas ideas, proyectos y colaboraciones. Conectemos.
      </p>

      <div class="flex justify-center space-x-6 mb-12">
        <a href="#" aria-label="LinkedIn" class="text-secondary-light dark:text-secondary-dark hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="#" aria-label="Twitter" class="text-secondary-light dark:text-secondary-dark hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="#" aria-label="YouTube" class="text-secondary-light dark:text-secondary-dark hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
        </a>
      </div>

      <div class="border-t border-border-light dark:border-border-dark pt-8">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-base text-secondary-light dark:text-secondary-dark">
            &copy; {{ new Date().getFullYear() }} juanda.pro. Solo vibe coding con Windsurf.
          </p>
          <div class="flex space-x-4">
            <router-link to="/politica-de-privacidad" class="text-base text-secondary-light dark:text-secondary-dark hover:text-brand-accent dark:hover:text-brand-accent transition-colors">Política de Privacidad</router-link>
            <router-link to="/politica-de-cookies" class="text-base text-secondary-light dark:text-secondary-dark hover:text-brand-accent dark:hover:text-brand-accent transition-colors">Política de Cookies</router-link>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
// No script needed for this simple component
</script>

<style scoped>
/* No styles needed, Tailwind handles everything */
</style>
