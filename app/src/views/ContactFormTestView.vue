<script setup>
import ContactFormImproved from '@/components/ContactFormImproved.vue';
import PageLayout from '@/components/PageLayout.vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
</script>

<template>
  <PageLayout>
    <SectionWrapper spacing="loose" class="min-h-screen">
      <div class="max-w-4xl mx-auto">
        <!-- Header de la página de prueba -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold font-heading text-text-primary-light dark:text-text-primary-dark mb-6">
            🧪 Prueba del Nuevo ContactForm
          </h1>
          <p class="text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mb-8">
            Esta es una vista de prueba para validar el nuevo componente ContactForm mejorado con la nueva paleta de colores.
          </p>
          
          <!-- Información de cambios -->
          <div class="bg-info-bg-light dark:bg-info-bg-dark border border-info-border-light dark:border-info-border-dark rounded-lg p-6 mb-8">
            <h2 class="text-lg font-semibold text-info-light dark:text-info-dark mb-3">✨ Mejoras implementadas:</h2>
            <ul class="text-left text-text-secondary-light dark:text-text-secondary-dark space-y-2">
              <li>• <strong>Nueva paleta de colores:</strong> Aplicación completa de la paleta definitiva 2025</li>
              <li>• <strong>Consistencia visual:</strong> Colores unificados en todos los estados</li>
              <li>• <strong>Mejor accesibilidad:</strong> Contraste optimizado para modo claro y oscuro</li>
              <li>• <strong>Estados mejorados:</strong> Feedback visual más claro para éxito, error, advertencia e información</li>
              <li>• <strong>Funcionalidad preservada:</strong> Todas las características originales mantenidas</li>
            </ul>
          </div>
        </div>

        <!-- Componente ContactForm Mejorado -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6 text-center">
            Nuevo ContactForm Mejorado
          </h2>
          <ContactFormImproved />
        </div>

        <!-- Información técnica -->
        <div class="bg-card-light dark:bg-card-dark border border-border-primary-light dark:border-border-primary-dark rounded-lg p-6">
          <h3 class="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
            📋 Información técnica
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 class="font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">🎨 Colores aplicados:</h4>
              <ul class="space-y-1 text-text-secondary-light dark:text-text-secondary-dark">
                <li>• Acentos: accent-primary-light/dark</li>
                <li>• Textos: text-primary/secondary-light/dark</li>
                <li>• Fondos: card-light/dark, surface-light/dark</li>
                <li>• Estados: success/error/warning/info-light/dark</li>
                <li>• Bordes: border-primary/accent-light/dark</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">⚙️ Funcionalidades:</h4>
              <ul class="space-y-1 text-text-secondary-light dark:text-text-secondary-dark">
                <li>• Formulario por fases (3 pasos)</li>
                <li>• Validación en tiempo real</li>
                <li>• Envío a webhook + local</li>
                <li>• Estados de feedback visual</li>
                <li>• Navegación con Enter/botones</li>
                <li>• Responsive design</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Instrucciones para el usuario -->
        <div class="mt-8 text-center">
          <div class="bg-accent-primary-light/10 dark:bg-accent-primary-dark/10 border border-accent-primary-light/20 dark:border-accent-primary-dark/20 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-accent-primary-light dark:text-accent-primary-dark mb-3">
              🔍 Instrucciones de validación
            </h3>
            <p class="text-text-secondary-light dark:text-text-secondary-dark mb-4">
              Por favor, prueba el formulario y verifica que:
            </p>
            <ul class="text-left text-text-secondary-light dark:text-text-secondary-dark space-y-2 max-w-2xl mx-auto">
              <li>• Los colores se ven correctos en modo claro y oscuro</li>
              <li>• La funcionalidad del formulario por fases funciona correctamente</li>
              <li>• Los estados de validación y feedback son claros</li>
              <li>• El diseño responsive se adapta bien a diferentes tamaños</li>
              <li>• Las animaciones y transiciones son suaves</li>
            </ul>
            <p class="text-accent-primary-light dark:text-accent-primary-dark mt-4 font-medium">
              Una vez validado, este componente reemplazará al ContactForm actual en la página de contacto.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </PageLayout>
</template>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>