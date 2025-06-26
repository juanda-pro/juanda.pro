<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import ThemeToggle from './ThemeToggle.vue'

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Recursos', path: '/recursos' },
  { name: 'Notas', path: '/notas' },
  { name: 'Soy', path: '/soy' },
  { name: 'Contacto', path: '/contacto' },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-surface-light dark:bg-surface-deeper-dark sticky top-0 z-40 border-b border-border-light dark:border-border-dark transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <RouterLink to="/" class="text-2xl font-bold text-primary-light dark:text-primary-dark">
          juanda.pro
        </RouterLink>
        
        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="text-secondary-light dark:text-secondary-dark hover:text-brand-accent dark:hover:text-brand-accent font-medium transition-colors"
          >
            {{ link.name }}
          </RouterLink>
          <ThemeToggle />
        </nav>

        <!-- Mobile Nav Button -->
        <div class="flex items-center md:hidden">
          <ThemeToggle />
          <button
            type="button"
            class="-m-2.5 ml-4 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-light dark:text-secondary-dark"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Abrir menú principal</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Nav Panel -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog as="div" class="md:hidden" @close="mobileMenuOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-brand-dark/25 dark:bg-brand-dark/50" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex justify-end">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="translate-x-full">
            <DialogPanel class="relative ml-auto h-full w-full max-w-xs overflow-y-auto bg-surface-light dark:bg-surface-deeper-dark py-6 px-6 shadow-xl">
              <div class="flex items-center justify-between">
                <RouterLink to="/" class="text-2xl font-bold text-primary-light dark:text-primary-dark" @click="mobileMenuOpen = false">
                  juanda.pro
                </RouterLink>
                <button
                  type="button"
                  class="-m-2.5 rounded-md p-2.5 text-secondary-light dark:text-secondary-dark"
                  @click="mobileMenuOpen = false"
                >
                  <span class="sr-only">Cerrar menú</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-border-light dark:divide-border-dark">
                  <div class="space-y-2 py-6">
                    <RouterLink
                      v-for="link in navLinks"
                      :key="link.name"
                      :to="link.path"
                      @click="mobileMenuOpen = false"
                      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-light dark:text-primary-dark hover:bg-surface-accent-light dark:hover:bg-surface-accent-dark"
                    >
                      {{ link.name }}
                    </RouterLink>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </header>
</template>
