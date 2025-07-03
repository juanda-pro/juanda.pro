<script setup>
import PageLayout from '@/components/PageLayout.vue';
import PageHeader from '@/components/PageHeader.vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
</script>

<template>
  <PageLayout>
    <!-- Header -->
    <SectionWrapper>
      <PageHeader subtitle="Y esta es la bitácora honesta de mi viaje.">
        Soy un explorador
      </PageHeader>
    </SectionWrapper>

    <!-- Image -->
    <SectionWrapper>
      <div class="relative flex justify-center">
        <div class="absolute w-full max-w-5xl h-4/5 bg-brand-accent/10 dark:bg-brand-accent/20 rounded-3xl transform -rotate-2"></div>
        <img 
          src="https://placehold.co/1280x720/1f2937/ffffff?text=Imagen+de+Juanda+explorando"
          alt="Foto de Juanda explorando"
          class="relative w-full max-w-4xl rounded-3xl shadow-2xl object-cover"
        />
      </div>
    </SectionWrapper>

    <!-- Content -->
    <SectionWrapper>
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
    </SectionWrapper>
  </PageLayout>
</template>


