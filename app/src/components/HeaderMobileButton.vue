<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/outline'
import ThemeToggle from './ThemeToggle.vue'

interface Emits {
  (e: 'open-menu'): void
}

const emit = defineEmits<Emits>()

const openMobileMenu = () => {
  emit('open-menu')
}
</script>

<template>
  <div class="flex items-center md:hidden">
    <ThemeToggle />
    <button
      type="button"
      class="-m-2.5 ml-4 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-light dark:text-secondary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary-light dark:focus-visible:ring-accent-primary-dark"
      @click="openMobileMenu"
    >
      <span class="sr-only">Abrir menú principal</span>
      <Bars3Icon class="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
</template>