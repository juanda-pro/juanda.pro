<script setup lang="ts">
import CtaCard from '@/components/CtaCard.vue'
import ContactFormImproved from '@/components/ContactFormImproved.vue'
import LinkText from '@/components/LinkText.vue'
import QuoteBlock from '@/components/QuoteBlock.vue'
import VisualAccents from '@/components/VisualAccents.vue'
import SimpleCallToAction from '@/components/SimpleCallToAction.vue'
import FeatureListItem from '@/components/FeatureListItem.vue'
import { ref } from 'vue'

// Estado para mostrar/ocultar detalles técnicos
const showCtaDetails = ref(false)
const showFormDetails = ref(false)
const showLinkDetails = ref(false)
const showQuoteDetails = ref(false)
const showVisualDetails = ref(false)
const showSimpleCtaDetails = ref(false)
const showFeatureDetails = ref(false)
const showFeatureListDetails = ref(false)
const showTypographyDetails = ref(false)
const showHeaderDetails = ref(false)
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F5] dark:bg-[#1D1E23] transition-colors duration-300 relative overflow-hidden">
    <!-- Patrón de puntos dorados -->
    <div class="absolute inset-0 opacity-30 dark:opacity-20">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle, #206372 1px, transparent 1px); background-size: 20px 20px;"></div>
    </div>
    
    <div class="relative z-10">
      <!-- Header minimalista -->
      <header class="container mx-auto px-6 py-20">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-[#262626] dark:text-[#F4F4F4] mb-8">
            Catálogo de componentes
          </h1>
          <div class="w-32 h-1 bg-[#206372] dark:bg-[#F5DF4D] mx-auto mb-8 rounded-full"></div>
          <p class="text-xl md:text-2xl text-[#262626]/90 dark:text-[#F4F4F4]/95 leading-relaxed">
            Documentación visual de los componentes principales y su lógica de colores
          </p>
        </div>
      </header>

      <!-- Sección CtaCard -->
      <section class="container mx-auto px-6 py-20">
        <div class="max-w-6xl mx-auto">
          <!-- Título de sección -->
          <div class="mb-16">
            <h2 class="text-4xl md:text-5xl font-bold font-heading text-[#262626] dark:text-[#F4F4F4] mb-6">
              Call to Action Card
            </h2>
            <p class="text-xl text-[#262626]/90 dark:text-[#F4F4F4]/90 max-w-2xl">
              Componente principal para llamadas a la acción con efectos hover y animaciones
            </p>
          </div>

          <!-- Demostración del componente -->
          <div class="mb-20">
            <CtaCard 
              title="Ejemplo de CTA"
              description="Descripción de ejemplo para el CTA"
              buttonText="Obtener"
              buttonLink="#"
            />
          </div>

          <!-- Documentación técnica -->
          <div class="border-t border-[#206372]/30 dark:border-[#F5DF4D]/30 pt-12">
            <button 
              @click="showCtaDetails = !showCtaDetails"
              class="group flex items-center space-x-4 text-left mb-8 hover:text-[#206372] dark:hover:text-[#F5DF4D] transition-colors duration-200"
            >
              <h3 class="text-2xl font-semibold text-[#262626] dark:text-[#F4F4F4] group-hover:text-[#206372] dark:group-hover:text-[#F5DF4D] transition-colors">
                Documentación técnica
              </h3>
              <span class="text-[#206372] dark:text-[#F5DF4D] transform transition-transform duration-200 text-xl" :class="{ 'rotate-180': showCtaDetails }">
                ↓
              </span>
            </button>

            <div v-show="showCtaDetails" class="space-y-12 pl-8 border-l-2 border-[#206372]/20 dark:border-[#F5DF4D]/20 mt-8">
              <!-- Descripción -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">📝</span> Descripción
                </h4>
                <p class="text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  Tarjeta de llamada a la acción con diseño elegante y efectos hover. <strong class="text-red-500">NOTA:</strong> La descripción está hardcodeada en el template, no usa la prop <code>description</code>.
                </p>
              </div>

              <!-- Propiedades -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">⚙️</span> Propiedades
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">title</strong> (string, requerido): Título principal de la tarjeta</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">description</strong> (string, requerido): <span class="text-red-500 font-semibold">NO SE USA - La descripción está hardcodeada</span></p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">buttonText</strong> (string, requerido): Texto del botón de acción</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">buttonLink</strong> (string, opcional): URL de destino del botón (por defecto: '#')</p>
                </div>
              </div>

              <!-- Colores modo claro -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🌞</span> Modo claro
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-white rounded border border-gray-300"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Fondo: bg-white</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#206372] rounded opacity-20"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Borde: border-[#206372]/20</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#262626] rounded"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Texto título: text-[#262626]</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#206372] rounded"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Botón: bg-[#206372]</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-gradient-to-r from-[#206372] to-[#206372] rounded opacity-60"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Decorativo: gradiente</span>
                  </div>
                </div>
              </div>

              <!-- Colores modo oscuro -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🌙</span> Modo oscuro
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#191A1D] rounded border border-gray-600"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Fondo: bg-[#191A1D]</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#F5DF4D] rounded opacity-20"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Borde: border-[#F5DF4D]/20</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#F4F4F4] rounded"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Texto título: text-[#F4F4F4]</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#F5DF4D] rounded"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Botón: bg-[#F5DF4D]</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-gradient-to-r from-[#F5DF4D] to-[#F5DF4D] rounded opacity-60"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Decorativo: gradiente</span>
                  </div>
                </div>
              </div>

              <!-- Efectos y animaciones -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">✨</span> Efectos y animaciones
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Hover en tarjeta:</strong> scale-105 en toda la tarjeta</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Transición de borde:</strong> duración 500ms, intensidad /20 → /40</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Elemento decorativo:</strong> se expande en hover (w-12 → w-20, h-1 → h-1.5)</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Título:</strong> scale-110 y cambio de color en hover</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Botón:</strong> scale-110 y sombra en hover</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Icono flecha:</strong> translate-x-1 en hover</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Animación entrada:</strong> fadeInUp (0.8s)</p>
                </div>
              </div>

              <!-- Funcionalidades Especiales -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🔧</span> Funcionalidades Especiales
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Diseño responsivo:</strong> text-3xl/4xl/5xl según breakpoint</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Elemento decorativo:</strong> superior dinámico con gradiente</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Línea decorativa:</strong> central estática</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Contenido hardcodeado:</strong> específico para "mapa inicial personalizado"</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Ancho máximo:</strong> 50% en pantallas grandes</p>
                </div>
              </div>

              <!-- Uso Recomendado -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">💡</span> Uso Recomendado
                </h4>
                <p class="text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  Para destacar la acción principal de obtener el "mapa inicial personalizado". <strong class="text-orange-500">Requiere refactorización para usar la prop description.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección ContactForm -->
      <section class="container mx-auto px-6 py-20">
        <div class="max-w-6xl mx-auto">
          <!-- Título de sección -->
          <div class="mb-16">
            <h2 class="text-4xl md:text-5xl font-bold font-heading text-[#262626] dark:text-[#F4F4F4] mb-6">
              Formulario de contacto
            </h2>
            <p class="text-xl text-[#262626]/90 dark:text-[#F4F4F4]/90 max-w-2xl">
              Formulario inteligente por fases con validación y efectos visuales
            </p>
          </div>

          <!-- Demostración del componente -->
          <div class="mb-20">
            <ContactFormImproved />
          </div>

          <!-- Documentación técnica -->
          <div class="border-t border-[#206372]/30 dark:border-[#F5DF4D]/30 pt-12">
            <button 
              @click="showFormDetails = !showFormDetails"
              class="group flex items-center space-x-4 text-left mb-8 hover:text-[#206372] dark:hover:text-[#F5DF4D] transition-colors duration-200"
            >
              <h3 class="text-2xl font-semibold text-[#262626] dark:text-[#F4F4F4] group-hover:text-[#206372] dark:group-hover:text-[#F5DF4D] transition-colors">
                Documentación técnica
              </h3>
              <span class="text-[#206372] dark:text-[#F5DF4D] transform transition-transform duration-200 text-xl" :class="{ 'rotate-180': showFormDetails }">
                ↓
              </span>
            </button>

            <div v-show="showFormDetails" class="space-y-12 pl-8 border-l-2 border-[#206372]/20 dark:border-[#F5DF4D]/20 mt-8">
              <!-- Descripción -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">📝</span> Descripción
                </h4>
                <p class="text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  Formulario de contacto interactivo con flujo paso a paso, validación en tiempo real e integración con webhook.
                </p>
              </div>

              <!-- Propiedades -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">⚙️</span> Propiedades
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">autoFocus</strong> (boolean, opcional): Enfoque automático al expandir (por defecto: false)</p>
                </div>
              </div>

              <!-- Eventos -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">📡</span> Eventos
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">@submit:</strong> Emitido al enviar el formulario con los datos</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">@expand:</strong> Emitido al expandir el formulario</p>
                </div>
              </div>

              <!-- Colores modo claro -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🌞</span> Modo claro
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-card-light rounded border border-gray-300"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Fondo: bg-card-light</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#206372] rounded opacity-20"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Borde: accent-primary-light/20</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#206372] rounded"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Botones: bg-[#206372]</span>
                  </div>
                </div>
              </div>

              <!-- Colores modo oscuro -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🌙</span> Modo oscuro
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-card-dark rounded border border-gray-600"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Fondo: bg-card-dark</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#F5DF4D] rounded opacity-20"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Borde: accent-primary-dark/20</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#F5DF4D] rounded"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Botones: bg-[#F5DF4D]</span>
                  </div>
                </div>
              </div>

              <!-- Efectos y Animaciones -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">✨</span> Efectos y Animaciones
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Hover contenedor:</strong> scale-105 en contenedor principal</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Transición borde:</strong> duración 500ms</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Barra progreso:</strong> animada según pasos completados</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Inputs activos:</strong> animación slideInUp</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Iconos:</strong> translate en hover</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Estados feedback:</strong> colores específicos para success/error</p>
                </div>
              </div>

              <!-- Funcionalidades Especiales -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🔧</span> Funcionalidades Especiales
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Flujo 3 pasos:</strong> nombre, email, mensaje</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Validación:</strong> en tiempo real</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Navegación:</strong> Enter y botones</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Webhook:</strong> integración externa</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Estados:</strong> éxito/error diferenciados</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Expansión:</strong> desde input readonly</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Métodos expuestos:</strong> expandForm, resetForm, isExpanded</p>
                </div>
              </div>

              <!-- Uso Recomendado -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">💡</span> Uso Recomendado
                </h4>
                <p class="text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  Para formularios de contacto principales donde se requiere una experiencia de usuario guiada y profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección LinkText -->
      <section class="container mx-auto px-6 py-20">
        <div class="max-w-6xl mx-auto">
          <!-- Título de sección -->
          <div class="mb-16">
            <h2 class="text-4xl md:text-5xl font-bold font-heading text-[#262626] dark:text-[#F4F4F4] mb-6">
              Enlaces de texto
            </h2>
            <p class="text-xl text-[#262626]/90 dark:text-[#F4F4F4]/90 max-w-2xl">
              Enlaces pequeños con iconos que cambian de color según el modo claro/oscuro
            </p>
          </div>

          <!-- Demostración del componente -->
          <div class="mb-20">
            <div class="p-8">
              <h4 class="text-lg font-semibold text-[#262626] dark:text-[#F4F4F4] mb-4">Enlace con animación:</h4>
              <LinkText href="/blog" :arrowAnimation="true">Ver todos los artículos</LinkText>
            </div>
          </div>

          <!-- Documentación técnica -->
          <div class="border-t border-[#206372]/30 dark:border-[#F5DF4D]/30 pt-12">
            <button 
              @click="showLinkDetails = !showLinkDetails"
              class="group flex items-center space-x-4 text-left mb-8 hover:text-[#206372] dark:hover:text-[#F5DF4D] transition-colors duration-200"
            >
              <h3 class="text-2xl font-semibold text-[#262626] dark:text-[#F4F4F4] group-hover:text-[#206372] dark:group-hover:text-[#F5DF4D] transition-colors">
                Documentación técnica
              </h3>
              <span class="text-[#206372] dark:text-[#F5DF4D] transform transition-transform duration-200 text-xl" :class="{ 'rotate-180': showLinkDetails }">
                ↓
              </span>
            </button>

            <div v-show="showLinkDetails" class="space-y-12 pl-8 border-l-2 border-[#206372]/20 dark:border-[#F5DF4D]/20 mt-8">
              <!-- Descripción -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">📝</span> Descripción
                </h4>
                <p class="text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  Enlace de texto con flecha opcional y animaciones personalizables.
                </p>
              </div>

              <!-- Propiedades -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">⚙️</span> Propiedades
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">href</strong> (string, requerido): URL del enlace</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">showArrow</strong> (boolean, opcional): Mostrar flecha (por defecto: true)</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">arrowAnimation</strong> (boolean, opcional): Animación de flecha en hover (por defecto: false)</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">customClass</strong> (string, opcional): Clases CSS adicionales</p>
                </div>
              </div>

              <!-- Slots -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🎰</span> Slots
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">default:</strong> Texto del enlace</p>
                </div>
              </div>

              <!-- Colores modo claro -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🌞</span> Modo claro
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#206372] rounded"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Texto: text-[#206372]</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#206372] rounded"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Flecha: fill-[#206372]</span>
                  </div>
                </div>
              </div>

              <!-- Colores modo oscuro -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🌙</span> Modo oscuro
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#F5DF4D] rounded"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Texto: text-[#F5DF4D]</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#F5DF4D] rounded"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Flecha: fill-[#F5DF4D]</span>
                  </div>
                </div>
              </div>

              <!-- Efectos y Animaciones -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">✨</span> Efectos y Animaciones
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Hover texto:</strong> underline decoration-2</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Flecha animada:</strong> translate-x-1 en hover (si arrowAnimation=true)</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Transiciones:</strong> duration-200 ease-in-out</p>
                </div>
              </div>

              <!-- Funcionalidades Especiales -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🔧</span> Funcionalidades Especiales
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Flecha condicional:</strong> se muestra/oculta según showArrow</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Animación opcional:</strong> activada por arrowAnimation</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Clases personalizadas:</strong> mediante customClass</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Icono SVG:</strong> ChevronRightIcon integrado</p>
                </div>
              </div>

              <!-- Uso Recomendado -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">💡</span> Uso Recomendado
                </h4>
                <p class="text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  Para enlaces de navegación, "Ver más" o acciones secundarias que requieren indicación visual de dirección.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección QuoteBlock -->
      <section class="container mx-auto px-6 py-20">
        <div class="max-w-6xl mx-auto">
          <!-- Título de sección -->
          <div class="mb-16">
            <h2 class="text-4xl md:text-5xl font-bold font-heading text-[#262626] dark:text-[#F4F4F4] mb-6">
              Bloques de cita
            </h2>
            <p class="text-xl text-[#262626]/90 dark:text-[#F4F4F4]/90 max-w-2xl">
              Citas destacadas con borde lateral y fondo semi-transparente
            </p>
          </div>

          <!-- Demostración del componente -->
          <div class="mb-20 space-y-8">
            <QuoteBlock>
              "Prometo leer cada mensaje con atención y responder de forma honesta. No soy un bot: soy yo, priorizando calidad sobre velocidad."
            </QuoteBlock>
            
            <QuoteBlock author="Juan David">
              "La mejor manera de aprender es enseñando. Cada artículo que escribo me ayuda a entender mejor los conceptos."
            </QuoteBlock>
          </div>

          <!-- Documentación técnica -->
          <div class="border-t border-[#206372]/30 dark:border-[#F5DF4D]/30 pt-12">
            <button 
              @click="showQuoteDetails = !showQuoteDetails"
              class="group flex items-center space-x-4 text-left mb-8 hover:text-[#206372] dark:hover:text-[#F5DF4D] transition-colors duration-200"
            >
              <h3 class="text-2xl font-semibold text-[#262626] dark:text-[#F4F4F4] group-hover:text-[#206372] dark:group-hover:text-[#F5DF4D] transition-colors">
                Documentación técnica
              </h3>
              <span class="text-[#206372] dark:text-[#F5DF4D] transform transition-transform duration-200 text-xl" :class="{ 'rotate-180': showQuoteDetails }">
                ↓
              </span>
            </button>

            <div v-show="showQuoteDetails" class="space-y-12 pl-8 border-l-2 border-[#206372]/20 dark:border-[#F5DF4D]/20 mt-8">
              <!-- Descripción -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">📝</span> Descripción
                </h4>
                <p class="text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  Bloque de cita con borde lateral personalizable y autor opcional.
                </p>
              </div>

              <!-- Propiedades -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">⚙️</span> Propiedades
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">author</strong> (string, opcional): Nombre del autor de la cita</p>
                </div>
              </div>

              <!-- Slots -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🎰</span> Slots
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">default:</strong> Contenido de la cita</p>
                </div>
              </div>

              <!-- Colores modo claro -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🌞</span> Modo claro
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#206372] rounded"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Borde: border-[#206372]</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-surface-light rounded opacity-30"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Fondo: bg-surface-light/30</span>
                  </div>
                </div>
              </div>

              <!-- Colores modo oscuro -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🌙</span> Modo oscuro
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#F5DF4D] rounded"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Borde: border-[#F5DF4D]</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-surface-dark rounded opacity-30"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Fondo: bg-surface-dark/30</span>
                  </div>
                </div>
              </div>

              <!-- Efectos y Animaciones -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">✨</span> Efectos y Animaciones
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Sin animaciones:</strong> componente estático</p>
                </div>
              </div>

              <!-- Funcionalidades Especiales -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🔧</span> Funcionalidades Especiales
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Borde lateral:</strong> 4px de grosor</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Texto cursiva:</strong> text-xl italic</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Autor condicional:</strong> se muestra con guión si se proporciona</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Padding:</strong> p-6 para espaciado interno</p>
                </div>
              </div>

              <!-- Uso Recomendado -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">💡</span> Uso Recomendado
                </h4>
                <p class="text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  Para destacar citas, testimonios o frases importantes en artículos y páginas de contenido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección VisualAccents -->
      <section class="container mx-auto px-6 py-20">
        <div class="max-w-6xl mx-auto">
          <!-- Título de sección -->
          <div class="mb-16">
            <h2 class="text-4xl md:text-5xl font-bold font-heading text-[#262626] dark:text-[#F4F4F4] mb-6">
              Acentos visuales
            </h2>
            <p class="text-xl text-[#262626]/90 dark:text-[#F4F4F4]/90 max-w-2xl">
              Elementos decorativos pequeños: iconos SVG, spans y divs con gradientes
            </p>
          </div>

          <!-- Demostración del componente -->
          <div class="mb-20 space-y-8">
            <div class="p-8">
              <h4 class="text-lg font-semibold text-[#262626] dark:text-[#F4F4F4] mb-4">Flecha hacia abajo:</h4>
              <VisualAccents type="arrow-down" />
            </div>
            
            <div class="p-8">
              <h4 class="text-lg font-semibold text-[#262626] dark:text-[#F4F4F4] mb-4">Flecha decorativa:</h4>
              <VisualAccents type="arrow-span" />
            </div>
            
            <div class="p-8 relative h-20">
              <h4 class="text-lg font-semibold text-[#262626] dark:text-[#F4F4F4] mb-4">Divisor con gradiente:</h4>
              <VisualAccents type="gradient-divider" />
            </div>
            
            <div class="p-8">
              <h4 class="text-lg font-semibold text-[#262626] dark:text-[#F4F4F4] mb-4">Texto decorativo personalizado:</h4>
              <VisualAccents type="text-accent" textClass="text-[#206372] dark:text-[#F5DF4D] text-3xl font-bold">★</VisualAccents>
            </div>
          </div>

          <!-- Documentación técnica -->
          <div class="border-t border-[#206372]/30 dark:border-[#F5DF4D]/30 pt-12">
            <button 
              @click="showVisualDetails = !showVisualDetails"
              class="group flex items-center space-x-4 text-left mb-8 hover:text-[#206372] dark:hover:text-[#F5DF4D] transition-colors duration-200"
            >
              <h3 class="text-2xl font-semibold text-[#262626] dark:text-[#F4F4F4] group-hover:text-[#206372] dark:group-hover:text-[#F5DF4D] transition-colors">
                Documentación técnica
              </h3>
              <span class="text-[#206372] dark:text-[#F5DF4D] transform transition-transform duration-200 text-xl" :class="{ 'rotate-180': showVisualDetails }">
                ↓
              </span>
            </button>

            <div v-show="showVisualDetails" class="space-y-12 pl-8 border-l-2 border-[#206372]/20 dark:border-[#F5DF4D]/20 mt-8">
              <!-- Descripción -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">📝</span> Descripción
                </h4>
                <p class="text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  Componente versátil para elementos decorativos: flechas, gradientes, SVG y texto personalizable.
                </p>
              </div>

              <!-- Propiedades -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">⚙️</span> Propiedades
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">type</strong> (string, requerido): Tipo de acento visual</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">svgClass</strong> (string, opcional): Clases CSS para SVG</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">textClass</strong> (string, opcional): Clases CSS para texto</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">gradientClass</strong> (string, opcional): Clases CSS para gradiente</p>
                </div>
              </div>

              <!-- Tipos disponibles -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🎯</span> Tipos disponibles
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">arrow-down:</strong> Icono SVG de flecha hacia abajo</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">arrow-span:</strong> Flecha decorativa en texto (→)</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">gradient-divider:</strong> Línea vertical con gradiente</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">custom-svg:</strong> SVG personalizado con slot "svg-path"</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">text-accent:</strong> Texto decorativo personalizable con slot por defecto</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">custom-gradient:</strong> Elemento con gradiente personalizable</p>
                </div>
              </div>

              <!-- Slots -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🎰</span> Slots
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">default:</strong> Para type="text-accent"</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">svg-path:</strong> Para type="custom-svg"</p>
                </div>
              </div>

              <!-- Colores modo claro -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🌞</span> Modo claro
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#206372] rounded opacity-50"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Base: #206372/50</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#206372] rounded opacity-20"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Gradiente: #206372/20</span>
                  </div>
                </div>
              </div>

              <!-- Colores modo oscuro -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🌙</span> Modo oscuro
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#F5DF4D] rounded opacity-50"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Base: #F5DF4D/50</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-[#F5DF4D] rounded opacity-20"></div>
                    <span class="text-sm text-[#262626] dark:text-[#F4F4F4]">Gradiente: #F5DF4D/20</span>
                  </div>
                </div>
              </div>

              <!-- Efectos y Animaciones -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">✨</span> Efectos y Animaciones
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Sin animaciones:</strong> elementos decorativos estáticos</p>
                </div>
              </div>

              <!-- Funcionalidades Especiales -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🔧</span> Funcionalidades Especiales
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Múltiples tipos:</strong> 6 variantes diferentes</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Personalización:</strong> clases CSS configurables</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Slots flexibles:</strong> contenido personalizable</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Responsive:</strong> adaptable a diferentes tamaños</p>
                </div>
              </div>

              <!-- Uso Recomendado -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">💡</span> Uso Recomendado
                </h4>
                <p class="text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  Para elementos decorativos sutiles que mejoren la jerarquía visual y guíen la atención del usuario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección SimpleCallToAction -->
      <section class="container mx-auto px-6 py-20">
        <div class="max-w-6xl mx-auto">
          <!-- Título de sección -->
          <div class="mb-16">
            <h2 class="text-4xl md:text-5xl font-bold font-heading text-[#262626] dark:text-[#F4F4F4] mb-6">
              Call to Action simple
            </h2>
            <p class="text-xl text-[#262626]/90 dark:text-[#F4F4F4]/90 max-w-2xl">
              CTA más sencillo visualmente para usar al final de páginas
            </p>
          </div>

          <!-- Demostración del componente -->
          <div class="mb-20">
            <SimpleCallToAction 
              title="Gracias"
              description="Cada conversación es una oportunidad de crear sinergias interesantes. ¡Espero tu mensaje!"
              :primaryButton="{ text: 'Escribir ahora' }"
              :secondaryButton="{ text: 'Aprender más', href: '/blog' }"
              @primary-action="() => console.log('Acción primaria')"
            />
          </div>

          <!-- Documentación técnica -->
          <div class="border-t border-[#206372]/30 dark:border-[#F5DF4D]/30 pt-12">
            <button 
              @click="showSimpleCtaDetails = !showSimpleCtaDetails"
              class="group flex items-center space-x-4 text-left mb-8 hover:text-[#206372] dark:hover:text-[#F5DF4D] transition-colors duration-200"
            >
              <h3 class="text-2xl font-semibold text-[#262626] dark:text-[#F4F4F4] group-hover:text-[#206372] dark:group-hover:text-[#F5DF4D] transition-colors">
                Documentación técnica
              </h3>
              <span class="text-[#206372] dark:text-[#F5DF4D] transform transition-transform duration-200 text-xl" :class="{ 'rotate-180': showSimpleCtaDetails }">
                ↓
              </span>
            </button>

            <div v-show="showSimpleCtaDetails" class="space-y-12 pl-8 border-l-2 border-[#206372]/20 dark:border-[#F5DF4D]/20 mt-8">
              <!-- Propiedades -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">⚙️</span> Propiedades
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">title:</strong> Título del CTA (requerido)</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">description:</strong> Descripción del CTA (requerido)</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">primaryButton:</strong> Configuración del enlace de texto principal { text, href? }</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">secondaryButton:</strong> Configuración del enlace de texto secundario { text, href }</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">@primary-action:</strong> Evento emitido al hacer clic en enlace principal</p>
                </div>
              </div>

              <!-- Colores -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🎨</span> Colores
                </h4>
                <div class="space-y-8">
                  <!-- Modo claro -->
                  <div>
                    <h5 class="text-lg font-medium text-[#262626] dark:text-[#F4F4F4] mb-4">Modo claro</h5>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-[#206372] rounded-lg shadow-sm"></div>
                        <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Enlaces: #206372</span>
                      </div>
                      <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-[#206372] rounded-lg shadow-sm"></div>
                        <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Separador: #206372</span>
                      </div>
                      <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-[#262626] rounded-lg shadow-sm"></div>
                        <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Título: #262626</span>
                      </div>
                      <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-[#262626] rounded-lg shadow-sm opacity-90"></div>
                        <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Descripción: #262626/90</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Modo oscuro -->
                  <div>
                    <h5 class="text-lg font-medium text-[#262626] dark:text-[#F4F4F4] mb-4">Modo oscuro</h5>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-[#F5DF4D] rounded-lg shadow-sm"></div>
                        <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Enlaces: #F5DF4D</span>
                      </div>
                      <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-[#F5DF4D] rounded-lg shadow-sm"></div>
                        <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Separador: #F5DF4D</span>
                      </div>
                      <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-[#F4F4F4] rounded-lg shadow-sm"></div>
                        <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Título: #F4F4F4</span>
                      </div>
                      <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-[#F4F4F4] rounded-lg shadow-sm opacity-90"></div>
                        <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Descripción: #F4F4F4/90</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Diferencias con CtaCard -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🔄</span> Diferencias con CtaCard
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Diseño:</strong> Más minimalista, sin bordes ni fondos complejos</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Enlaces:</strong> Dos enlaces de texto con flechas direccionales</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Flechas:</strong> Flecha izquierda para enlace secundario, flecha derecha para enlace principal</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Uso:</strong> Para finales de página, menos prominente</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Animaciones:</strong> Efectos hover con escala y movimiento de flechas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección FeatureListItem -->
      <section class="container mx-auto px-6 py-20">
        <div class="max-w-6xl mx-auto">
          <!-- Título de sección -->
          <div class="mb-16">
            <h2 class="text-4xl md:text-5xl font-bold font-heading text-[#262626] dark:text-[#F4F4F4] mb-6">
              Lista de características
            </h2>
            <p class="text-xl text-[#262626]/90 dark:text-[#F4F4F4]/90 max-w-2xl">
              Elementos de lista con iconos y animaciones para mostrar características o beneficios
            </p>
          </div>

          <!-- Demostración del componente -->
          <div class="mb-20">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureListItem 
                iconType="check"
                title="Calidad garantizada"
                description="Cada proyecto es desarrollado con los más altos estándares de calidad."
                :delay="0"
              />
              <FeatureListItem 
                iconType="star"
                title="Experiencia comprobada"
                description="Años de experiencia en desarrollo web y soluciones digitales."
                :delay="100"
              />
              <FeatureListItem 
                iconType="heart"
                title="Soporte continuo"
                description="Acompañamiento y soporte técnico durante todo el proceso."
                :delay="200"
              />
            </div>
          </div>

          <!-- Documentación técnica -->
          <div class="border-t border-[#206372]/30 dark:border-[#F5DF4D]/30 pt-12">
            <button 
              @click="showFeatureListDetails = !showFeatureListDetails"
              class="group flex items-center space-x-4 text-left mb-8 hover:text-[#206372] dark:hover:text-[#F5DF4D] transition-colors duration-200"
            >
              <h3 class="text-2xl font-semibold text-[#262626] dark:text-[#F4F4F4] group-hover:text-[#206372] dark:group-hover:text-[#F5DF4D] transition-colors">
                Documentación técnica
              </h3>
              <span class="text-[#206372] dark:text-[#F5DF4D] transform transition-transform duration-200 text-xl" :class="{ 'rotate-180': showFeatureListDetails }">
                ↓
              </span>
            </button>

            <div v-show="showFeatureListDetails" class="space-y-12 pl-8 border-l-2 border-[#206372]/20 dark:border-[#F5DF4D]/20 mt-8">
              <!-- Propiedades -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">⚙️</span> Propiedades
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">iconType:</strong> Icono predefinido ('custom', 'check', 'star', 'heart') - opcional, por defecto: 'check'</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">title:</strong> Título del elemento (requerido)</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">description:</strong> Descripción del elemento (requerido)</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">delay:</strong> Retraso de animación en ms (por defecto: 0)</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Slot "icon":</strong> SVG personalizado para el icono (solo cuando iconType='custom')</p>
                </div>
              </div>

              <!-- Colores -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🎨</span> Colores
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex items-center space-x-4">
                    <div class="w-8 h-8 bg-[#206372] rounded-lg shadow-sm"></div>
                    <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Modo claro: #206372</span>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="w-8 h-8 bg-[#F5DF4D] rounded-lg shadow-sm"></div>
                    <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Modo oscuro: #F5DF4D</span>
                  </div>
                </div>
              </div>

              <!-- Animaciones -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">✨</span> Animaciones
                </h4>
                <div class="space-y-3 text-[#262626]/90 dark:text-[#F4F4F4]/95">
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Fade-in:</strong> Aparición gradual con opacidad y transform</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Delay personalizable:</strong> Control de timing para animaciones escalonadas</p>
                  <p><strong class="text-[#206372] dark:text-[#F5DF4D]">Duración:</strong> 600ms con easing ease-out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección Tipografía y textos -->
      <section class="container mx-auto px-6 py-20">
        <div class="max-w-6xl mx-auto">
          <!-- Título de sección -->
          <div class="mb-16">
            <h2 class="text-4xl md:text-5xl font-bold font-heading text-[#262626] dark:text-[#F4F4F4] mb-6">
              Tipografía y textos
            </h2>
            <p class="text-xl text-[#262626]/90 dark:text-[#F4F4F4]/90 max-w-2xl">
              Sistema completo de tipografía con colores y tamaños para todos los tipos de texto
            </p>
          </div>

          <!-- Demostración de tipografía -->
          <div class="mb-20 space-y-12">
            <!-- Títulos -->
            <div class="space-y-4">
              <h1 class="text-4xl md:text-5xl font-bold font-heading text-[#262626] dark:text-[#F4F4F4]">Título H1 - Principal</h1>
              <h2 class="text-3xl md:text-4xl font-bold font-heading text-[#262626] dark:text-[#F4F4F4]">Título H2 - Sección</h2>
              <h3 class="text-2xl font-semibold text-[#262626] dark:text-[#F4F4F4]">Título H3 - Subsección</h3>
              <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4]">Título H4 - Componente</h4>
            </div>

            <!-- Párrafos -->
            <div class="space-y-4">
              <p class="text-xl text-[#262626]/90 dark:text-[#F4F4F4]/90">Párrafo principal - Texto destacado para introducciones</p>
              <p class="text-lg text-[#262626]/90 dark:text-[#F4F4F4]/90">Párrafo normal - Texto estándar para contenido general</p>
              <p class="text-base text-[#262626]/80 dark:text-[#F4F4F4]/80">Párrafo secundario - Texto con menor jerarquía visual</p>
              <p class="text-sm text-[#262626]/70 dark:text-[#F4F4F4]/70">Párrafo pequeño - Para notas y texto auxiliar</p>
            </div>

            <!-- Textos de estado -->
            <div class="space-y-4">
              <p class="text-green-600 dark:text-green-400 font-medium">✓ Mensaje de éxito - Operación completada correctamente</p>
              <p class="text-red-600 dark:text-red-400 font-medium">✗ Mensaje de error - Algo salió mal</p>
              <p class="text-yellow-600 dark:text-yellow-400 font-medium">⚠ Mensaje de advertencia - Atención requerida</p>
              <p class="text-blue-600 dark:text-blue-400 font-medium">ℹ Mensaje informativo - Información adicional</p>
            </div>

            <!-- Textos auxiliares -->
            <div class="space-y-4">
              <p class="text-sm text-[#262626]/60 dark:text-[#F4F4F4]/60">Campo obligatorio *</p>
              <p class="text-sm text-[#262626]/50 dark:text-[#F4F4F4]/50 italic">Escribe tu mensaje aquí... (placeholder)</p>
              <p class="text-xs text-[#262626]/50 dark:text-[#F4F4F4]/50">Presiona Enter para continuar</p>
            </div>

            <!-- Enlaces -->
            <div class="space-y-4">
              <a href="#" class="text-[#206372] dark:text-[#F5DF4D] hover:underline">Enlace normal</a>
              <br>
              <a href="#" class="text-[#206372] dark:text-[#F5DF4D] hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
                <span>Enlace con animación</span>
                <svg class="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Documentación técnica -->
          <div class="border-t border-[#206372]/30 dark:border-[#F5DF4D]/30 pt-12">
            <button 
              @click="showTypographyDetails = !showTypographyDetails"
              class="group flex items-center space-x-4 text-left mb-8 hover:text-[#206372] dark:hover:text-[#F5DF4D] transition-colors duration-200"
            >
              <h3 class="text-2xl font-semibold text-[#262626] dark:text-[#F4F4F4] group-hover:text-[#206372] dark:group-hover:text-[#F5DF4D] transition-colors">
                Documentación técnica
              </h3>
              <span class="text-[#206372] dark:text-[#F5DF4D] transform transition-transform duration-200 text-xl" :class="{ 'rotate-180': showTypographyDetails }">
                ↓
              </span>
            </button>

            <div v-show="showTypographyDetails" class="space-y-12 pl-8 border-l-2 border-[#206372]/20 dark:border-[#F5DF4D]/20 mt-8">
              <!-- Títulos -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">📝</span> Títulos
                </h4>
                <div class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">H1 Principal:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">text-4xl md:text-5xl, font-bold, font-heading</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#262626 / #F4F4F4</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">H2 Sección:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">text-3xl md:text-4xl, font-bold, font-heading</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#262626 / #F4F4F4</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">H3 Subsección:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">text-2xl, font-semibold</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#262626 / #F4F4F4</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">H4 Componente:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">text-xl, font-semibold</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#262626 / #F4F4F4</span>
                  </div>
                </div>
                
                <!-- Cajas de colores para títulos -->
                <div class="mt-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#262626] rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Modo claro: #262626</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#F4F4F4] rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Modo oscuro: #F4F4F4</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Párrafos -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">📄</span> Párrafos
                </h4>
                <div class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Principal:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">text-xl</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#262626/90 / #F4F4F4/90</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Normal:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">text-lg</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#262626/90 / #F4F4F4/90</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Secundario:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">text-base</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#262626/80 / #F4F4F4/80</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Pequeño:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">text-sm</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#262626/70 / #F4F4F4/70</span>
                  </div>
                </div>
                
                <!-- Cajas de colores para párrafos -->
                <div class="mt-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#262626] opacity-90 rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Principal/Normal</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#262626] opacity-80 rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Secundario</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#262626] opacity-70 rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Pequeño</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#F4F4F4] rounded-lg shadow-sm border"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Modo oscuro</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Textos de estado -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🚦</span> Textos de estado
                </h4>
                <div class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Éxito:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">font-medium</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">text-green-600 / text-green-400</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Error:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">font-medium</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">text-red-600 / text-red-400</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Advertencia:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">font-medium</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">text-yellow-600 / text-yellow-400</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Información:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">font-medium</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">text-blue-600 / text-blue-400</span>
                  </div>
                </div>
                
                <!-- Cajas de colores para textos de estado -->
                <div class="mt-6">
                  <h5 class="text-sm font-medium text-[#262626]/70 dark:text-[#F4F4F4]/70 mb-4">Modo claro</h5>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-green-600 rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Éxito: #059669</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-red-600 rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Error: #DC2626</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-yellow-600 rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Advertencia: #D97706</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-blue-600 rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Info: #2563EB</span>
                    </div>
                  </div>
                  
                  <h5 class="text-sm font-medium text-[#262626]/70 dark:text-[#F4F4F4]/70 mb-4">Modo oscuro</h5>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-green-400 rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Éxito: #34D399</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-red-400 rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Error: #F87171</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-yellow-400 rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Advertencia: #FBBF24</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-blue-400 rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Info: #60A5FA</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Textos auxiliares -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🔤</span> Textos auxiliares
                </h4>
                <div class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Campo obligatorio:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">text-sm</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#262626/60 / #F4F4F4/60</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Placeholder:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">text-sm, italic</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#262626/50 / #F4F4F4/50</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Hint navegación:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">text-xs</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#262626/50 / #F4F4F4/50</span>
                  </div>
                </div>
                
                <!-- Cajas de colores para textos auxiliares -->
                <div class="mt-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#262626] opacity-60 rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Campo obligatorio</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#262626] opacity-50 rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Placeholder/Hint</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#F4F4F4] opacity-60 rounded-lg shadow-sm border"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Modo oscuro</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Enlaces -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🔗</span> Enlaces
                </h4>
                <div class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Enlace normal:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">hover:underline</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#206372 / #F5DF4D</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Con animación:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">hover:scale-105, transition-all duration-300</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#206372 / #F5DF4D</span>
                  </div>
                </div>
                
                <!-- Cajas de colores para enlaces -->
                <div class="mt-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#206372] rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Modo claro: #206372</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#F5DF4D] rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Modo oscuro: #F5DF4D</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección Header (Barra de menú) -->
      <section class="container mx-auto px-6 py-20">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-[#262626] dark:text-[#F4F4F4] mb-8 text-center">
            Header - Barra de menú
          </h2>
          <div class="w-24 h-1 bg-[#206372] dark:bg-[#F5DF4D] mx-auto mb-12 rounded-full"></div>
          
          <p class="text-lg text-[#262626]/90 dark:text-[#F4F4F4]/90 mb-12 text-center max-w-3xl mx-auto">
            Componente de navegación principal del sitio. Incluye logo, enlaces de navegación, toggle de tema y menú responsive para dispositivos móviles.
          </p>

          <!-- Demostración -->
          <div class="bg-white dark:bg-[#1D1E23] rounded-lg border border-[#206372]/20 dark:border-[#F5DF4D]/20 p-8 mb-12">
            <div class="text-center mb-6">
              <span class="inline-block bg-[#206372]/10 dark:bg-[#F5DF4D]/10 text-[#206372] dark:text-[#F5DF4D] px-4 py-2 rounded-full text-sm font-medium">
                Componente en uso
              </span>
            </div>
            
            <div class="border border-[#206372]/30 dark:border-[#F5DF4D]/30 rounded-lg p-4">
              <p class="text-center text-[#262626]/70 dark:text-[#F4F4F4]/70 text-sm mb-4">
                Este es el Header que estás viendo en la parte superior de la página
              </p>
              <div class="bg-[#206372]/5 dark:bg-[#F5DF4D]/5 rounded-lg p-4 text-center">
                <p class="text-[#262626]/80 dark:text-[#F4F4F4]/80">
                  🔝 Mira hacia arriba para ver el componente Header en acción
                </p>
              </div>
            </div>
          </div>

          <!-- Documentación técnica -->
          <div class="border-t border-[#206372]/30 dark:border-[#F5DF4D]/30 pt-12">
            <button 
              @click="showHeaderDetails = !showHeaderDetails"
              class="group flex items-center space-x-4 text-left mb-8 hover:text-[#206372] dark:hover:text-[#F5DF4D] transition-colors duration-200"
            >
              <h3 class="text-2xl font-semibold text-[#262626] dark:text-[#F4F4F4] group-hover:text-[#206372] dark:group-hover:text-[#F5DF4D] transition-colors">
                Documentación técnica
              </h3>
              <span class="text-[#206372] dark:text-[#F5DF4D] transform transition-transform duration-200 text-xl" :class="{ 'rotate-180': showHeaderDetails }">
                ↓
              </span>
            </button>

            <div v-show="showHeaderDetails" class="space-y-12 pl-8 border-l-2 border-[#206372]/20 dark:border-[#F5DF4D]/20 mt-8">
              <!-- Propiedades -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">⚙️</span> Propiedades
                </h4>
                <div class="bg-[#206372]/5 dark:bg-[#F5DF4D]/5 rounded-lg p-6">
                  <p class="text-[#262626]/90 dark:text-[#F4F4F4]/90">
                    <strong class="text-[#206372] dark:text-[#F5DF4D]">Sin props:</strong> Es un componente autónomo que no requiere propiedades externas.
                  </p>
                </div>
              </div>

              <!-- Funcionalidades -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🔧</span> Funcionalidades
                </h4>
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <span class="text-[#206372] dark:text-[#F5DF4D] mt-1">•</span>
                    <div>
                      <p class="font-semibold text-[#262626] dark:text-[#F4F4F4]">Navegación responsive</p>
                      <p class="text-[#262626]/80 dark:text-[#F4F4F4]/80 text-sm">Menú horizontal en desktop, menú lateral deslizable en móviles</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="text-[#206372] dark:text-[#F5DF4D] mt-1">•</span>
                    <div>
                      <p class="font-semibold text-[#262626] dark:text-[#F4F4F4]">Menú hamburguesa</p>
                      <p class="text-[#262626]/80 dark:text-[#F4F4F4]/80 text-sm">Botón de menú para dispositivos móviles con animación suave</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="text-[#206372] dark:text-[#F5DF4D] mt-1">•</span>
                    <div>
                      <p class="font-semibold text-[#262626] dark:text-[#F4F4F4]">Toggle de tema</p>
                      <p class="text-[#262626]/80 dark:text-[#F4F4F4]/80 text-sm">Cambio entre modo claro y oscuro integrado</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="text-[#206372] dark:text-[#F5DF4D] mt-1">•</span>
                    <div>
                      <p class="font-semibold text-[#262626] dark:text-[#F4F4F4]">Enlaces con efectos hover</p>
                      <p class="text-[#262626]/80 dark:text-[#F4F4F4]/80 text-sm">Animaciones de escala y cambio de color en hover</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="text-[#206372] dark:text-[#F5DF4D] mt-1">•</span>
                    <div>
                      <p class="font-semibold text-[#262626] dark:text-[#F4F4F4]">Logo/marca clickeable</p>
                      <p class="text-[#262626]/80 dark:text-[#F4F4F4]/80 text-sm">Enlace al inicio con efecto hover</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Colores modo claro -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">☀️</span> Colores - Modo claro
                </h4>
                <div class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Fondo:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">bg-white</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#FFFFFF</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Texto principal:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">text-primary-light</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#262626</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Texto secundario:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">text-secondary-light</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#262626/70</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Hover enlaces:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">hover:text-[#206372]</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#206372</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Bordes:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">divide-border-light</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">rgba(0,0,0,0.1)</span>
                  </div>
                </div>
              </div>

              <!-- Colores modo oscuro -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">🌙</span> Colores - Modo oscuro
                </h4>
                <div class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Fondo:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">dark:bg-[#1D1E23]</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#1D1E23</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Texto principal:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">dark:text-primary-dark</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#F4F4F4</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Texto secundario:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">dark:text-secondary-dark</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#F4F4F4/70</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Hover enlaces:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">dark:hover:text-[#F5DF4D]</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">#F5DF4D</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Bordes:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">dark:divide-border-dark</span>
                    <span class="text-[#262626]/70 dark:text-[#F4F4F4]/70">rgba(255,255,255,0.1)</span>
                  </div>
                </div>
                
                <!-- Cajas de colores para Header -->
                <div class="mt-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#FFFFFF] rounded-lg shadow-sm border"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Fondo claro: #FFFFFF</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#1D1E23] rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Fondo oscuro: #1D1E23</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#262626] rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Texto claro: #262626</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#F4F4F4] rounded-lg shadow-sm border"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Texto oscuro: #F4F4F4</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#206372] rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Hover claro: #206372</span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="w-8 h-8 bg-[#F5DF4D] rounded-lg shadow-sm"></div>
                      <span class="text-[#262626] dark:text-[#F4F4F4] font-medium">Hover oscuro: #F5DF4D</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Animaciones -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">✨</span> Animaciones
                </h4>
                <div class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Hover enlaces:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">hover:scale-105, transition-all duration-200</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Menú móvil:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">transition ease-in-out duration-300 transform</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <span class="font-bold text-[#206372] dark:text-[#F5DF4D]">Backdrop:</span>
                    <span class="text-[#262626]/90 dark:text-[#F4F4F4]/95">backdrop-blur-sm</span>
                  </div>
                </div>
              </div>

              <!-- Responsive -->
              <div>
                <h4 class="text-xl font-semibold text-[#262626] dark:text-[#F4F4F4] mb-6 flex items-center">
                  <span class="text-2xl mr-3">📱</span> Responsive
                </h4>
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <span class="text-[#206372] dark:text-[#F5DF4D] mt-1">•</span>
                    <div>
                      <p class="font-semibold text-[#262626] dark:text-[#F4F4F4]">Desktop (md+)</p>
                      <p class="text-[#262626]/80 dark:text-[#F4F4F4]/80 text-sm">Menú horizontal con enlaces visibles</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="text-[#206372] dark:text-[#F5DF4D] mt-1">•</span>
                    <div>
                      <p class="font-semibold text-[#262626] dark:text-[#F4F4F4]">Mobile (< md)</p>
                      <p class="text-[#262626]/80 dark:text-[#F4F4F4]/80 text-sm">Menú lateral deslizable desde la derecha</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="text-[#206372] dark:text-[#F5DF4D] mt-1">•</span>
                    <div>
                      <p class="font-semibold text-[#262626] dark:text-[#F4F4F4]">Breakpoint</p>
                      <p class="text-[#262626]/80 dark:text-[#F4F4F4]/80 text-sm">768px (Tailwind md)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer minimalista -->
      <footer class="container mx-auto px-6 py-20">
        <div class="text-center max-w-2xl mx-auto">
          <div class="w-24 h-1 bg-[#206372] dark:bg-[#F5DF4D] mx-auto mb-8 rounded-full"></div>
          <h3 class="text-3xl font-bold text-[#262626] dark:text-[#F4F4F4] mb-4">
            Más componentes próximamente
          </h3>
          <p class="text-lg text-[#262626]/90 dark:text-[#F4F4F4]/90">
            Este catálogo se irá expandiendo con más componentes del sistema de diseño
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* Animaciones suaves para los detalles desplegables */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>