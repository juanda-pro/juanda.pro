<script setup lang="ts">
interface Props {
  submitStatus: 'success' | 'error' | null
  webhookStatus: 'success' | 'error' | null
  validationErrors: Record<string, string>
}

defineProps<Props>()
</script>

<template>
  <div class="contact-form-feedback">
    <!-- Estado de Éxito -->
    <div v-if="submitStatus === 'success'" class="mb-6">
      <div class="p-4 bg-success-bg-light dark:bg-success-bg-dark border border-success-border-light dark:border-success-border-dark rounded-lg text-center">
        <p class="text-success-light dark:text-success-dark">Mensaje enviado. ¡Gracias por conectar!</p>
      </div>
    </div>

    <!-- Estado de Error -->
    <div v-if="submitStatus === 'error'" class="mb-6">
      <div class="p-4 bg-error-bg-light dark:bg-error-bg-dark border border-error-border-light dark:border-error-border-dark rounded-lg text-center">
        <p class="text-error-light dark:text-error-dark">Error al enviar. Inténtalo de nuevo.</p>
      </div>
    </div>

    <!-- Error de Rate Limiting -->
    <div v-if="validationErrors.submit" class="mb-6">
      <div class="p-4 bg-warning-bg-light dark:bg-warning-bg-dark border border-warning-border-light dark:border-warning-border-dark rounded-lg text-center">
        <p class="text-warning-light dark:text-warning-dark">{{ validationErrors.submit }}</p>
      </div>
    </div>

    <!-- Estado del Webhook - Éxito -->
    <div v-if="webhookStatus === 'success'" class="mb-6">
      <div class="p-4 bg-info-bg-light dark:bg-info-bg-dark border border-info-border-light dark:border-info-border-dark rounded-lg text-center">
        <p class="text-info-light dark:text-info-dark">✓ Datos enviados al sistema de notificaciones</p>
      </div>
    </div>

    <!-- Estado del Webhook - Error -->
    <div v-if="webhookStatus === 'error'" class="mb-6">
      <div class="p-4 bg-warning-bg-light dark:bg-warning-bg-dark border border-warning-border-light dark:border-warning-border-dark rounded-lg text-center">
        <p class="text-warning-light dark:text-warning-dark">⚠ Mensaje guardado localmente (sistema de notificaciones no disponible)</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-form-feedback {
  /* Estilos específicos para feedback si son necesarios */
}
</style>