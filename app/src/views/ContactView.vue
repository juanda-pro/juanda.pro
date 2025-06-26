<script setup>
import SectionWrapper from '@/components/SectionWrapper.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseTextarea from '@/components/BaseTextarea.vue';
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
  <div>
    <SectionWrapper class="pt-24 pb-16 md:pt-32 md:pb-24">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-primary-light dark:text-primary-dark mb-4">
            ¿Tienes algo en mente?
          </h1>
          <p class="text-lg md:text-xl text-secondary-light dark:text-secondary-dark">
            Me encantaría escucharte. Ya sea una idea, un proyecto o simplemente para saludar, este es el lugar.
          </p>
        </div>

        <div class="mt-12 max-w-2xl mx-auto">
          <div class="bg-surface-light dark:bg-surface-dark p-8 sm:p-12 rounded-2xl border border-border-light dark:border-border-dark shadow-lg">
            <form action="#" method="POST">
              <div class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <BaseInput id="name" label="Nombre" placeholder="Tu nombre" />
                  <BaseInput id="email" type="email" label="Email" placeholder="tu@email.com" />
                </div>
                <BaseInput id="subject" label="Asunto" placeholder="Asunto del mensaje" />
                <BaseTextarea id="message" label="Mensaje" placeholder="Tu mensaje..." :rows="6" />
              </div>
              <div class="mt-8">
                <BaseButton type="submit" class="w-full" size="lg">Enviar Mensaje</BaseButton>
              </div>
            </form>
          </div>
        </div>
        

      </div>
    </SectionWrapper>
  </div>
</template>
