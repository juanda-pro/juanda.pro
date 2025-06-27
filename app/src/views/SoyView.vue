<script setup>
import SectionWrapper from '@/components/SectionWrapper.vue';
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
  <div class="overflow-x-hidden">
    <SectionWrapper class="pt-24 pb-12 md:pt-32 md:pb-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-primary-light dark:text-primary-dark mb-4">
            No soy un gurú. Soy un explorador.
          </h1>
          <p class="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark">
            Y este es el mapa de mi viaje.
          </p>
        </div>
      </div>
    </SectionWrapper>

    <div class="container mx-auto px-4">
      <div class="relative flex justify-center mb-16">
        <div class="absolute w-full max-w-5xl h-4/5 bg-brand-accent/10 dark:bg-brand-accent/20 rounded-3xl transform -rotate-2"></div>
        <img 
          src="https://via.placeholder.com/1200x800.png/1F2937/FFFFFF?text=Foto+de+Juanda"
          alt="Foto de Juanda explorando"
          class="relative w-full max-w-4xl rounded-3xl shadow-2xl object-cover"
        />
      </div>
    </div>

    <SectionWrapper>
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto prose prose-lg lg:prose-xl dark:prose-invert text-secondary-light dark:text-secondary-dark">
          <p class="lead">
            Como tú, navego el acelerado cambio tecnológico de nuestro tiempo. Observo con curiosidad y asombro cómo la IA redefine las reglas del juego, y también he sentido ese vértigo al preguntarme: ¿qué lugar tendremos los humanos en este nuevo mundo?
          </p>
          <p>
            El shock de ver cómo la tecnología exponencial superaba tareas especializadas pudo ser paralizante. En su lugar, elegí transformarlo en combustible para la acción: replantear mis hábitos, cuestionar mis herramientas y rediseñar mi forma de aprender. Así nació <strong>juanda.pro</strong>, como una respuesta a esa llamada urgente al cambio.
          </p>
          <p>
            Este espacio no es un pedestal, sino una bitácora de aprendizaje. Un lugar donde documento mis experimentos, comparto herramientas que funcionan y reflexiono sobre cómo la tecnología puede, de verdad, hacernos mejores. Lo que encuentres aquí es fruto de la curiosidad, la práctica y una convicción profunda: la mejor forma de predecir el futuro es construirlo.
          </p>
          <h2>Mi compromiso es simple:</h2>
          <ul>
            <li><strong>Honestidad radical:</strong> Comparto tanto los aciertos como los fracasos.</li>
            <li><strong>Curiosidad sin límites:</strong> Exploro, pregunto y conecto ideas sin miedo a equivocarme.</li>
            <li><strong>Utilidad práctica:</strong> Busco conocimiento que se pueda aplicar hoy para construir un mañana mejor.</li>
          </ul>
          <p>
            Gracias por llegar hasta aquí. Si algo de esto resuena contigo, siéntete en casa. El futuro se construye en comunidad.
          </p>
        </div>
      </div>
    </SectionWrapper>


  </div>
</template>

<style scoped>
.prose.lead {
  @apply text-2xl md:text-3xl font-semibold text-primary-light dark:text-primary-dark;
}
</style>
