<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import HeaderDesktopNav from './HeaderDesktopNav.vue'
import HeaderMobileNav from './HeaderMobileNav.vue'
import HeaderMobileButton from './HeaderMobileButton.vue'

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Soy', path: '/soy' },
  { name: 'Contacto', path: '/contacto' },
]

const documentationLinks = [
  { name: 'Catálogo de Componentes', path: '/documentacion/catalogo-componentes' },
  { name: 'Paleta de Colores', path: '/documentacion/paleta-colores' },
]

const mobileMenuOpen = ref(false)

const openMobileMenu = () => {
  mobileMenuOpen.value = true
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-40 backdrop-blur-sm bg-card-light dark:bg-card-dark transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <RouterLink to="/" class="font-heading text-2xl font-bold text-primary-light dark:text-primary-dark hover:text-accent-primary-light dark:hover:text-accent-primary-dark transition-colors duration-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-primary-light dark:focus-visible:ring-accent-primary-dark focus-visible:ring-offset-card-light dark:focus-visible:ring-offset-card-dark">
          juanda.pro
        </RouterLink>
        
        <HeaderDesktopNav 
          :nav-links="navLinks" 
          :documentation-links="documentationLinks" 
        />

        <HeaderMobileButton @open-menu="openMobileMenu" />
      </div>
    </div>

    <HeaderMobileNav 
      :nav-links="navLinks" 
      :documentation-links="documentationLinks" 
      :is-open="mobileMenuOpen" 
      @close="closeMobileMenu" 
    />
  </header>
</template>
