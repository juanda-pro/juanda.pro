<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';
import DecorativeBackground from '@/components/DecorativeBackground.vue';
import DecorativeUnderline from '@/components/DecorativeUnderline.vue';
import DecorativeIcon from '@/components/DecorativeIcon.vue';
</script>

<template>
  <section aria-labelledby="quien-soy-heading">
    <SectionWrapper spacing="normal" class="overflow-hidden relative">
      <!-- Elementos decorativos de fondo -->
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <DecorativeBackground
          image-url="https://placehold.co/400x400/1F2937/FFFFFF?text=Juanda"
          image-alt="Foto de Juanda"
          height="h-80"
        />
        
        <div class="text-center md:text-left fade-in-element">
          <h2 id="quien-soy-heading" class="text-3xl font-extrabold font-heading text-primary-light dark:text-primary-dark sm:text-4xl relative inline-block">
            ¡Hola! Soy Juanda.
            <DecorativeUnderline width="full" opacity="medium" />
          </h2>
          <p class="mt-4 text-xl text-secondary-light dark:text-secondary-dark leading-relaxed">
            Soy Juan David Ocampo, aunque la mayoría me llama <strong>Juanda</strong>. Desde hace años, me apasiona explorar herramientas que simplifican la vida moderna: <strong>hojas de cálculo, scripts, bases de conocimiento, automatizaciones con iA ...</strong>
            <br><br>
            En este espacio, comparto algunos de mis aprendizajes procurando que sea siempre <em>información útil y accionable</em>. Todo para <strong>motivarte a convertir a la tecnología en tu mejor aliada.</strong>
          </p>
          
          <!-- Botón de acción secundario -->
          <div class="mt-6">
            <a href="/soy" class="inline-flex items-center text-accent-primary-light dark:text-accent-primary-dark hover:text-accent-primary-light/80 dark:hover:text-accent-primary-dark/80 transition-colors duration-300">
              Conoce más sobre mí
              <DecorativeIcon type="arrow-right" size="sm" color="text-current ml-1" />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </section>
</template>