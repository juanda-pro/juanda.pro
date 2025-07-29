<script setup>
import { ref, onMounted } from 'vue';

// Props
const props = defineProps({
  title: {
    type: String,
    default: 'Crea tu mapa'
  },
  subtitle: {
    type: String,
    default: 'Responde 15 preguntas y obtén un mapa inicial personalizado. Contiene recomendaciones útiles y adaptadas a tu perfil para que empieces a dibujar tu mapa con claridad.'
  },
  buttonText: {
    type: String,
    default: 'Obtener'
  },
  to: {
    type: String,
    default: '/contacto'
  }
});

// Estado para animaciones
const isVisible = ref(false);
const isHovered = ref(false);

// Animación de entrada
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

// Handlers
const handleMouseEnter = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};
</script>

<template>
  <div class="cta-container">
    <!-- Fondo decorativo animado -->
    <div class="absolute inset-0 overflow-hidden rounded-3xl">
      <div 
        class="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent/20 rounded-full blur-xl transition-all duration-700"
        :class="{ 'scale-150 opacity-30': isHovered }"
      ></div>
      <div 
        class="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl transition-all duration-1000 delay-200"
        :class="{ 'scale-125 opacity-40': isHovered }"
      ></div>
      <div 
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-brand-accent/5 to-transparent rounded-full blur-3xl transition-all duration-1200"
        :class="{ 'scale-110 opacity-60': isHovered }"
      ></div>
    </div>

    <!-- Contenido principal -->
    <div 
      class="relative bg-gradient-to-br from-surface-light/90 to-background-light/95 dark:from-surface-dark/90 dark:to-background-dark/95 backdrop-blur-sm border-2 border-brand-accent/20 rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-500 hover:shadow-brand-accent/20 hover:border-brand-accent/40 hover:-translate-y-2 group"
      :class="{ 
        'opacity-100 translate-y-0': isVisible,
        'opacity-0 translate-y-8': !isVisible
      }"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <!-- Icono decorativo -->
      <div class="flex justify-center mb-6">
        <div 
          class="relative p-4 bg-brand-accent/10 rounded-2xl transition-all duration-300 group-hover:bg-brand-accent/20 group-hover:scale-110"
        >
          <svg 
            class="w-8 h-8 text-brand-accent transition-all duration-300 group-hover:scale-110" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M13 10V3L4 14h7v7l9-11h-7z" 
            />
          </svg>
          <!-- Efecto de brillo -->
          <div 
            class="absolute inset-0 bg-brand-accent/20 rounded-2xl opacity-0 transition-all duration-300 group-hover:opacity-100 animate-pulse"
          ></div>
        </div>
      </div>

      <!-- Título principal -->
      <h3 
        class="text-2xl md:text-3xl font-bold text-center text-primary-light dark:text-primary-dark mb-4 transition-all duration-300 group-hover:text-brand-accent"
      >
        {{ title }}
      </h3>

      <!-- Subtítulo -->
      <p 
        class="text-lg text-center text-secondary-light dark:text-secondary-dark mb-8 leading-relaxed transition-all duration-300"
      >
        {{ subtitle }}
      </p>

      <!-- Botón principal -->
      <div class="flex justify-center">
        <router-link 
          :to="to"
          class="group/btn relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-brand-accent rounded-2xl transition-all duration-300 hover:bg-brand-accent-darker hover:scale-105 hover:shadow-xl hover:shadow-brand-accent/30 focus:outline-none focus:ring-4 focus:ring-brand-accent/30 overflow-hidden"
        >
          <!-- Efecto de onda al hover -->
          <div 
            class="absolute inset-0 bg-white/20 rounded-2xl scale-0 transition-transform duration-300 group-hover/btn:scale-100"
          ></div>
          
          <!-- Texto del botón -->
          <span class="relative z-10 flex items-center space-x-2">
            <span>{{ buttonText }}</span>
            <svg 
              class="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </span>
          
          <!-- Brillo animado -->
          <div 
            class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover/btn:translate-x-full"
          ></div>
        </router-link>
      </div>

      <!-- Indicador visual adicional -->
      <div class="flex justify-center mt-6">
        <div class="flex space-x-2">
          <div 
            class="w-2 h-2 bg-brand-accent/40 rounded-full transition-all duration-300"
            :class="{ 'bg-brand-accent scale-125': isHovered }"
          ></div>
          <div 
            class="w-2 h-2 bg-brand-accent/40 rounded-full transition-all duration-300 delay-100"
            :class="{ 'bg-brand-accent scale-125': isHovered }"
          ></div>
          <div 
            class="w-2 h-2 bg-brand-accent/40 rounded-full transition-all duration-300 delay-200"
            :class="{ 'bg-brand-accent scale-125': isHovered }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cta-container {
  position: relative;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
}

/* Animación de entrada suave */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efecto de respiración para elementos decorativos */
@keyframes breathe {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

/* Animación de pulso suave */
@keyframes softPulse {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .cta-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 640px) {
  .cta-container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

/* Mejoras de accesibilidad */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Estados de focus mejorados */
.group\/btn:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(246, 201, 14, 0.5), 0 0 0 2px #fff;
}
</style>
