<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import { XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

interface NavLink {
  name: string
  path: string
}

interface Props {
  navLinks: NavLink[]
  documentationLinks: NavLink[]
  isOpen: boolean
}

interface Emits {
  (e: 'close'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const mobileDocMenuOpen = ref(false)

// Funciones para manejar el menú desplegable en móvil
const showMobileDocMenu = () => {
  mobileDocMenuOpen.value = true
}

const hideMobileDocMenu = () => {
  mobileDocMenuOpen.value = false
}

const toggleMobileDocMenu = () => {
  mobileDocMenuOpen.value = !mobileDocMenuOpen.value
}

const closeMobileMenu = () => {
  emit('close')
}

const closeAllMenus = () => {
  mobileDocMenuOpen.value = false
  emit('close')
}
</script>

<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="md:hidden" @close="closeMobileMenu">
      <TransitionChild 
        as="template" 
        enter="transition-opacity ease-linear duration-300" 
        enter-from="opacity-0" 
        enter-to="opacity-100" 
        leave="transition-opacity ease-linear duration-300" 
        leave-from="opacity-100" 
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-brand-dark/25 dark:bg-brand-dark/50" />
      </TransitionChild>

      <div class="fixed inset-0 z-40 flex justify-end">
        <TransitionChild 
          as="template" 
          enter="transition ease-in-out duration-300 transform" 
          enter-from="translate-x-full" 
          enter-to="translate-x-0" 
          leave="transition ease-in-out duration-300 transform" 
          leave-from="translate-x-0" 
          leave-to="translate-x-full"
        >
          <DialogPanel class="relative ml-auto h-full w-full max-w-xs overflow-y-auto backdrop-blur-sm bg-card-light dark:bg-card-dark py-6 px-6 shadow-xl">
            <div class="flex items-center justify-between">
              <RouterLink 
                to="/" 
                class="font-heading text-2xl font-bold text-primary-light dark:text-primary-dark hover:text-accent-primary-light dark:hover:text-accent-primary-dark transition-colors duration-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-primary-light dark:focus-visible:ring-accent-primary-dark focus-visible:ring-offset-card-light dark:focus-visible:ring-offset-card-dark" 
                @click="closeMobileMenu"
              >
                juanda.pro
              </RouterLink>
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-secondary-light dark:text-secondary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary-light dark:focus-visible:ring-accent-primary-dark"
                @click="closeMobileMenu"
              >
                <span class="sr-only">Cerrar menú</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-primary-light dark:divide-primary-dark">
                <div class="space-y-2 py-6">
                  <RouterLink
                    v-for="link in navLinks"
                    :key="link.name"
                    :to="link.path"
                    @click="closeMobileMenu"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-light dark:text-primary-dark hover:text-accent-primary-light dark:hover:text-accent-primary-dark hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary-light dark:focus-visible:ring-accent-primary-dark [&.router-link-exact-active]:text-accent-primary-light dark:[&.router-link-exact-active]:text-accent-primary-dark"
                  >
                    {{ link.name }}
                  </RouterLink>
                  
                  <!-- Menú de Documentación en móvil -->
                  <div @mouseenter="showMobileDocMenu" @mouseleave="hideMobileDocMenu">
                    <button
                      @click="toggleMobileDocMenu"
                      class="-mx-3 flex items-center justify-between w-full rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-light dark:text-primary-dark hover:text-accent-primary-light dark:hover:text-accent-primary-dark hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary-light dark:focus-visible:ring-accent-primary-dark"
                      :class="{ 'text-accent-primary-light dark:text-accent-primary-dark scale-105 -translate-y-0.5': mobileDocMenuOpen }"
                    >
                      <span>Documentación</span>
                      <ChevronDownIcon class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180': mobileDocMenuOpen }" />
                    </button>
                    
                    <transition
                      enter-active-class="transition duration-200 ease-out"
                      enter-from-class="transform scale-95 opacity-0 translate-y-1"
                      enter-to-class="transform scale-100 opacity-100 translate-y-0"
                      leave-active-class="transition duration-150 ease-in"
                      leave-from-class="transform scale-100 opacity-100 translate-y-0"
                      leave-to-class="transform scale-95 opacity-0 translate-y-1"
                    >
                      <div v-show="mobileDocMenuOpen" class="mt-2 space-y-1 pl-3">
                        <RouterLink
                           v-for="docLink in documentationLinks"
                           :key="docLink.name"
                           :to="docLink.path"
                           @click="closeAllMenus"
                           class="-mx-3 block rounded-lg px-6 py-2 text-sm font-medium text-secondary-light dark:text-secondary-dark hover:text-accent-primary-light dark:hover:text-accent-primary-dark hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary-light dark:focus-visible:ring-accent-primary-dark [&.router-link-exact-active]:text-accent-primary-light dark:[&.router-link-exact-active]:text-accent-primary-dark"
                         >
                           {{ docLink.name }}
                         </RouterLink>
                      </div>
                    </transition>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>