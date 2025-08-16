<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import ThemeToggle from './ThemeToggle.vue'

interface NavLink {
  name: string
  path: string
}

interface Props {
  navLinks: NavLink[]
  documentationLinks: NavLink[]
}

defineProps<Props>()

const desktopDocMenuOpen = ref(false)

// Funciones para manejar el menú desplegable en escritorio
const showDesktopMenu = () => {
  desktopDocMenuOpen.value = true
}

const hideDesktopMenu = () => {
  desktopDocMenuOpen.value = false
}

const closeDesktopMenu = () => {
  desktopDocMenuOpen.value = false
}
</script>

<template>
  <nav class="hidden md:flex items-center space-x-8">
    <RouterLink
      v-for="link in navLinks"
      :key="link.name"
      :to="link.path"
      class="text-secondary-light dark:text-secondary-dark hover:text-accent-primary-light dark:hover:text-accent-primary-dark hover:scale-105 font-semibold transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary-light dark:focus-visible:ring-accent-primary-dark [&.router-link-exact-active]:text-accent-primary-light dark:[&.router-link-exact-active]:text-accent-primary-dark"
    >
      {{ link.name }}
    </RouterLink>
    
    <!-- Menú desplegable de Documentación -->
    <div class="relative" @mouseenter="showDesktopMenu" @mouseleave="hideDesktopMenu">
      <button 
        class="flex items-center space-x-1 text-secondary-light dark:text-secondary-dark hover:text-accent-primary-light dark:hover:text-accent-primary-dark hover:scale-105 hover:-translate-y-0.5 font-semibold transition-all duration-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary-light dark:focus-visible:ring-accent-primary-dark"
        :class="{ 'text-accent-primary-light dark:text-accent-primary-dark scale-105 -translate-y-0.5': desktopDocMenuOpen }"
      >
        <span>Documentación</span>
        <ChevronDownIcon class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': desktopDocMenuOpen }" />
      </button>
      
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0 translate-y-1"
        enter-to-class="transform scale-100 opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100 translate-y-0"
        leave-to-class="transform scale-95 opacity-0 translate-y-1"
      >
        <div v-show="desktopDocMenuOpen" class="absolute right-0 mt-3 w-64 origin-top-right bg-card-light dark:bg-card-dark border border-primary-light dark:border-primary-dark rounded-lg shadow-xl shadow-brand-dark/10 dark:shadow-brand-dark/30 focus:outline-none z-50">
          <div class="py-1">
            <RouterLink
              v-for="docLink in documentationLinks"
              :key="docLink.name"
              :to="docLink.path"
              @click="closeDesktopMenu"
              class="block px-4 py-2 text-sm font-medium text-secondary-light dark:text-secondary-dark hover:bg-surface-light dark:hover:bg-surface-dark hover:text-accent-primary-light dark:hover:text-accent-primary-dark transition-colors duration-200 [&.router-link-exact-active]:text-accent-primary-light dark:[&.router-link-exact-active]:text-accent-primary-dark [&.router-link-exact-active]:bg-surface-light dark:[&.router-link-exact-active]:bg-surface-dark"
            >
              {{ docLink.name }}
            </RouterLink>
          </div>
        </div>
      </transition>
    </div>
    
    <ThemeToggle />
  </nav>
</template>