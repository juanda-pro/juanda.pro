<script setup>
import SectionWrapper from '@/components/SectionWrapper.vue';
</script>

<template>
  <div class="overflow-x-hidden">
    <SectionWrapper class="pt-24 pb-12 md:pt-32 md:pb-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-primary-light dark:text-primary-dark mb-4">
            Soy un explorador
          </h1>
          <p class="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark">
            Y esta es la bitácora honesta de mi viaje.
          </p>
        </div>
      </div>
    </SectionWrapper>

    <div class="container mx-auto px-4">
      <div class="relative flex justify-center mb-16">
        <div class="absolute w-full max-w-5xl h-4/5 bg-brand-accent/10 dark:bg-brand-accent/20 rounded-3xl transform -rotate-2"></div>
        <img 
          src="https://placehold.co/1280x720/1f2937/ffffff?text=Imagen+de+Juanda+explorando"
          alt="Foto de Juanda explorando"
          class="relative w-full max-w-4xl rounded-3xl shadow-2xl object-cover"
        />
      </div>
    </div>

    <SectionWrapper>
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto prose prose-lg lg:prose-xl dark:prose-invert text-secondary-light dark:text-secondary-dark">
          <p class="text-2xl md:text-3xl font-semibold text-primary-light dark:text-primary-dark">
            Como tú, navego el tsunami tecnológico de nuestro tiempo. He visto cómo la IA supera tareas que creíamos exclusivamente humanas, y sí, también sentí ese vértigo existencial: <em>¿Podré adaptarme a todos estos cambios?</em>
          </p>
          <p>
            El momento que lo cambió todo llegó cuando vi a GPT-4 resolver en segundos problemas que me tomaban horas. Pude paralizarme o evolucionar. Elegí lo segundo: replantear radicalmente mis hábitos, cuestionar cada herramienta y rediseñar mi sistema operativo mental. <strong>juanda.pro</strong> nació de esa urgencia de reinvención para adaptarse a los tiempos que corren.
          </p>
          <h2>Los valores de este proyecto:</h2>
          <ul>
            <li><strong>Dignificación</strong><br>La tecnología debe liberar tiempo para que podamos dedicarnos a lo que nos aporta sentido: conocimiento, arte, relaciones, salud... Ser competitivo no es hacer más, sino <strong>mantenerse generando valor a largo plazo</strong> sin sacrificar el equilibrio vital.</li>
            <li><strong>Pensamiento crítico</strong><br>Nadie posee la verdad absoluta. Construyo —y te invito a construir— modelos mentales propios, consultar diversas fuentes, preguntar, experimentar y equivocarse. Si, equivocarse también forma parte del proceso de aprendizaje.</li>
            <li><strong>Humildad pragmática:</strong> En esta web documento mi proceso de aprendizaje y conclusiones con transparencia radical: Lo que me ha funcionado, lo que no, los problemas que voy encontrando y como los voy resolviendo.</li>
          </ul>
          <p>
            Gracias por llegar hasta aquí. Si algo resuena contigo, considera este espacio tu casa. El futuro lo construimos entre todos, un experimento a la vez.
          </p>
        </div>
      </div>
    </SectionWrapper>


  </div>
</template>


