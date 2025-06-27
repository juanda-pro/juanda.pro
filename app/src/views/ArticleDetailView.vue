<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SectionWrapper from '@/components/SectionWrapper.vue';
import ArticleCard from '@/components/ArticleCard.vue';

// NOTA: En una aplicación real, los artículos se obtendrían de una API.
// Para este ejercicio de maquetación, duplicamos los datos aquí.
const articles = ref([
  {
    title: 'Minimalismo Digital: Menos es Más',
    slug: 'minimalismo-digital-menos-es-mas',
    category: 'Productividad',
    image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop',
    description: 'Una filosofía para reducir el ruido digital, aumentar el enfoque y mejorar nuestro bienestar general.',
    date: '15 de Julio, 2024',
    readingTime: '7 min de lectura',
    content: '<p class="lead">El minimalismo digital no se trata de renunciar a la tecnología, sino de usarla con <span class="underline-yellow">intención</span>. En este artículo, exploramos cómo puedes aplicar principios minimalistas a tu vida digital para recuperar tiempo, atención y paz mental.</p><p>Hablaremos de estrategias como la desintoxicación digital, la organización de aplicaciones y la gestión de notificaciones para crear un entorno tecnológico que <span class="underline-blue">trabaje para ti</span>, y no en tu contra.</p><h2>Los Pilares del Minimalismo Digital</h2><p>Para empezar, es crucial entender los principios que sustentan esta filosofía. No es una talla única, sino un marco adaptable.</p><h3>1. La Intencionalidad</h3><p>Cada herramienta, aplicación y servicio que utilizas debe tener un propósito claro y servir a tus valores. Pregúntate: ¿esto me aporta un valor real o solo me distrae?</p><blockquote>La tecnología no es inherentemente buena o mala. La clave está en cómo la usamos.</blockquote><h3>2. La Optimización</h3><p>Configura tus dispositivos para que te sirvan a ti, no a las empresas que quieren tu atención. Esto implica desactivar notificaciones, organizar tu pantalla de inicio y establecer límites de tiempo.</p><figure class="inset-image"><img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop" alt="Un gráfico complejo de datos en una pantalla."><figcaption>Visualizar el uso de tus datos y tiempo es el primer paso para optimizar tu vida digital.</figcaption></figure><h2>Pasos Prácticos para Empezar Hoy</h2><p>No necesitas hacer un cambio radical de la noche a la mañana. Empieza con pequeños pasos:</p><ul><li><strong>Haz una auditoría digital:</strong> Revisa todas las apps de tu móvil y elimina las que no has usado en el último mes.</li><li><strong>Designa zonas sin tecnología:</strong> El dormitorio o la mesa del comedor son buenos candidatos.</li><li><strong>Establece un "detox" semanal:</strong> Dedica unas horas (o un día entero) a desconectar completamente.</li></ul><p>Al final, el objetivo es construir una relación más sana y consciente con la tecnología, una que te <span class="underline-pink">empodere</span> en lugar de agotarte.</p>'
  },
  {
    title: 'Desarrollo Humano en la Era Tecnológica',
    slug: 'desarrollo-humano-en-la-era-tecnologica',
    category: 'Desarrollo Personal',
    image: 'https://images.unsplash.com/photo-1434030216411-0b773f444d83?q=80&w=2070&auto=format&fit=crop',
    description: 'Reflexiones y estrategias para alinear el avance tecnológico con nuestro crecimiento personal de forma sostenible.',
    date: '28 de Junio, 2024',
    readingTime: '9 min de lectura',
    content: '<p>La tecnología avanza a un ritmo exponencial, pero ¿nuestro desarrollo como seres humanos va a la par? Este artículo profundiza en la importancia de cultivar habilidades blandas, pensamiento crítico y una profunda autoconciencia para navegar el futuro de manera ética y significativa.</p>'
  },
  {
    title: 'Automatizando mi Segunda Mente con IA',
    slug: 'automatizando-mi-segunda-mente-con-ia',
    category: 'Inteligencia Artificial',
    image: 'https://images.unsplash.com/photo-1620712943543-285f726a8484?q=80&w=2070&auto=format&fit=crop',
    description: 'Cómo utilizo herramientas de IA para organizar, conectar y expandir mis conocimientos de manera eficiente.',
    date: '12 de Junio, 2024',
    readingTime: '12 min de lectura',
    content: '<p>Un segundo cerebro es un sistema para gestionar el conocimiento y las ideas. En este post, detallo mi flujo de trabajo personal usando herramientas como Obsidian, Readwise y modelos de lenguaje para capturar, procesar y recuperar información de forma casi automática, liberando mi mente para el pensamiento creativo.</p>'
  },
  {
    title: 'El Arte de la Abstracción en Código',
    slug: 'el-arte-de-la-abstraccion-en-codigo',
    category: 'Código',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    description: 'Escribir código no es solo dar instrucciones a una máquina, es una forma de pensar. Exploramos cómo la abstracción nos hace mejores desarrolladores.',
    date: '1 de Junio, 2024',
    readingTime: '8 min de lectura',
    content: '<p>La abstracción es una de las herramientas más poderosas en el arsenal de un programador. Analizamos cómo identificar patrones, crear componentes reutilizables y escribir código que no solo funciona, sino que es elegante, mantenible y fácil de entender. Un pilar fundamental para pasar de programador junior a senior.</p>'
  }
]);

const route = useRoute();
const router = useRouter();

const article = computed(() => articles.value.find(a => a.slug === route.params.slug));

const suggestedArticle = computed(() => {
  if (!article.value) return null;
  // Sugerir el siguiente artículo en la lista, o el primero si es el último
  const currentIndex = articles.value.findIndex(a => a.slug === article.value.slug);
  const nextIndex = (currentIndex + 1) % articles.value.length;
  // Asegurarse de no sugerir el mismo artículo si solo hay uno
  if (articles.value.length > 1 && nextIndex !== currentIndex) {
    return articles.value[nextIndex];
  } else if (articles.value.length > 2) {
    return articles.value[(nextIndex + 1) % articles.value.length];
  }
  return null;
});

watch(() => route.params.slug, () => {
  window.scrollTo(0, 0);
});

</script>

<template>
  <div class="bg-light dark:bg-dark text-primary-light dark:text-primary-dark">
    <div v-if="article">
      <!-- Cabecera del Artículo -->
      <header class="pt-24 pb-12 sm:pt-32 sm:pb-16 text-center">
        <SectionWrapper>
          <p class="text-base font-semibold text-brand-accent mb-2">{{ article.category }}</p>
                    <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-primary-light dark:text-primary-dark">{{ article.title }}</h1>
          <div class="mt-6 text-base text-secondary-light dark:text-secondary-dark flex items-center justify-center space-x-4">
            <span>{{ article.date }}</span>
            <span class="text-divider-light dark:text-divider-dark">•</span>
            <span>{{ article.readingTime }}</span>
          </div>
        </SectionWrapper>
      </header>

      <!-- Imagen Destacada -->
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <img :src="article.image" :alt="`Imagen para ${article.title}`" class="rounded-lg shadow-xl w-full h-auto object-cover aspect-video">
      </div>

      <!-- Contenido del Artículo -->
      <SectionWrapper>
        <div class="max-w-3xl mx-auto">
          <div class="article-content prose prose-lg dark:prose-invert max-w-none mt-12" v-html="article.content"></div>
        </div>
      </SectionWrapper>

      <!-- Artículo Sugerido -->
      <aside v-if="suggestedArticle" class="py-16 sm:py-24 bg-light dark:bg-surface-dark/50 mt-16">
        <SectionWrapper>
          <h2 class="text-2xl sm:text-3xl font-bold text-center mb-12">Otro artículo que podría interesarte</h2>
          <div class="max-w-2xl mx-auto">
            <ArticleCard :article="suggestedArticle" />
          </div>
        </SectionWrapper>
      </aside>

    </div>
    <div v-else class="text-center py-48">
      <h2 class="text-2xl font-bold">Artículo no encontrado</h2>
      <p class="text-secondary-light mt-4">Parece que el artículo que buscas no existe o fue movido.</p>
            <router-link to="/blog" class="mt-8 inline-block px-6 py-3 bg-brand-accent text-brand-dark font-semibold rounded-lg hover:bg-yellow-400 transition-colors">Volver al Blog</router-link>
    </div>
  </div>
</template>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
    @apply text-2xl sm:text-3xl font-bold mt-12 mb-6 text-primary-light dark:text-primary-dark border-l-4 border-brand-accent pl-4;
}

.prose :where(h3):not(:where([class~="not-prose"] *)) {
    @apply text-xl sm:text-2xl font-bold mt-8 mb-4 text-primary-light dark:text-primary-dark;
}

.prose :where(p.lead):not(:where([class~="not-prose"] *)) {
  @apply text-xl text-secondary-light dark:text-secondary-dark font-serif;
}

.prose :where(blockquote):not(:where([class~="not-prose"] *)) {
  @apply text-xl font-serif italic text-primary-light dark:text-primary-dark border-l-4 border-brand-accent bg-surface-accent-light dark:bg-surface-accent-dark/50 px-6 py-4 my-8;
}

.prose :where(figure.inset-image):not(:where([class~="not-prose"] *)) {
  @apply lg:-mx-16 my-12;
}

.prose :where(figure.inset-image img):not(:where([class~="not-prose"] *)) {
  @apply w-full rounded-lg shadow-xl;
}

.prose :where(figure.inset-image figcaption):not(:where([class~="not-prose"] *)) {
  @apply text-center text-sm text-secondary-light dark:text-secondary-dark mt-4;
}

.underline-yellow {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: theme('colors.brand-accent');
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.underline-blue {
  text-decoration-line: underline;
  text-decoration-style: solid;
    text-decoration-color: theme('colors.accent-info');
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  text-decoration-skip-ink: none;
}

.underline-pink {
    background-image: linear-gradient(to right, theme('colors.brand-accent'), theme('colors.brand-accent'));
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100% 3px;
}

.prose :where(ul > li):not(:where([class~="not-prose"] *))::before {
    @apply bg-brand-accent;
}

.article-content {
  @apply font-serif text-secondary-light dark:text-secondary-dark;
}

.article-content > :first-child::first-letter {
  @apply text-5xl sm:text-6xl font-bold text-brand-accent float-left pr-3 pt-1;
}
</style>
