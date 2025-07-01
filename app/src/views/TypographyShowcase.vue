<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
    <main class="container mx-auto py-16 px-4">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">Laboratorio Tipográfico</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">Un espacio para definir la voz de juanda.pro</p>
      </div>

      <div class="flex justify-center mb-16">
        <button @click="toggleDarkMode" class="px-6 py-3 rounded-full font-bold text-sm text-white dark:text-gray-900 bg-gray-800 dark:bg-yellow-400 hover:bg-black dark:hover:bg-yellow-500 transition-all duration-300 shadow-lg">
          <span v-if="isDarkMode">☀️ Activar Modo Claro</span>
          <span v-else>🌙 Activar Modo Oscuro</span>
        </button>
      </div>

      <div class="space-y-20">
        <div v-for="option in typographyOptions" :key="option.title"
             class="p-8 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
          
          <h2 class="text-3xl font-bold mb-2" :class="`text-${option.color}-600 dark:text-${option.color}-400`">{{ option.title }}</h2>
          <p class="text-lg text-gray-500 dark:text-gray-400 mb-8">{{ option.description }}</p>
          
          <h3 :class="[option.headingFontClass, 'text-5xl font-extrabold text-gray-900 dark:text-white mb-6']">{{ option.headingText }}</h3>
          
          <div :class="[option.bodyFontClass, 'text-lg text-gray-700 dark:text-gray-200 leading-relaxed max-w-prose space-y-4 mb-10']">
            <p>{{ option.headingDescription }}</p>
            <p>{{ option.bodyDescription }}</p>
          </div>

          <div class="mb-10">
            <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4" :class="option.headingFontClass">Muestrario de Pesos y Estilos</h4>
            <div :class="[option.bodyFontClass, 'text-gray-600 dark:text-gray-300 space-y-2 text-lg']">
              <p class="font-light">The quick brown fox jumps over the lazy dog. (Light)</p>
              <p class="font-normal">The quick brown fox jumps over the lazy dog. (Normal)</p>
              <p class="font-normal italic">The quick brown fox jumps over the lazy dog. (Italic)</p>
              <p class="font-semibold">The quick brown fox jumps over the lazy dog. (Semibold)</p>
              <p class="font-bold">The quick brown fox jumps over the lazy dog. (Bold)</p>
              <p class="font-extrabold">The quick brown fox jumps over the lazy dog. (ExtraBold)</p>
            </div>
          </div>

          <div class="bg-gray-100 dark:bg-gray-900 p-4 rounded-md font-mono-1 text-sm text-gray-800 dark:text-gray-200">
            <pre><code>// Bloque de código con JetBrains Mono
const theme = '{{ option.color }}';
const fontPairing = {
  heading: '{{ option.description.split(" | ")[0].split(": ")[1] }}',
  body: '{{ option.description.split(" | ")[1].split(": ")[1] }}',
};</code></pre>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

const typographyOptions = ref([
  {
    title: "Opción 1: El Moderno Funcional",
    description: "Titulares: Plus Jakarta Sans | Cuerpo: Figtree",
    headingFontClass: "font-heading-1",
    bodyFontClass: "font-body-1",
    headingText: "Un Titular Principal Impactante",
    headingDescription: "Plus Jakarta Sans fue concebida con un propósito: comunicar con claridad y modernidad. Sus formas geométricas y limpias, inspiradas en la cartelería urbana y el diseño institucional, proyectan una imagen de profesionalismo, eficiencia y confianza. Es una fuente que no tiene miedo de ser directa y audaz, ideal para titulares que buscan establecer autoridad y un tono contemporáneo sin resultar fríos.",
    bodyDescription: "Figtree es la compañera perfecta para un titular con tanta personalidad. Diseñada por Google con la legibilidad en pantalla como máxima prioridad, su estructura es abierta, simple y rítmica. No busca ser la protagonista, sino el vehículo más transparente y cómodo para el mensaje. Transmite una sensación de calma, accesibilidad y honestidad, permitiendo que el lector se concentre en el contenido sin distracciones.",
    color: "blue"
  },
  {
    title: "Opción 2: El Clásico Digital",
    description: "Titulares: Playfair Display | Cuerpo: Lora",
    headingFontClass: "font-heading-2",
    bodyFontClass: "font-body-2",
    headingText: "Un Titular con Elegancia",
    headingDescription: "Playfair Display es una declaración de elegancia y sofisticación. Con sus altos contrastes y trazos afilados, evoca la opulencia de la tipografía clásica del siglo XVIII y el mundo de la alta costura. No es una fuente para susurrar, sino para proclamar. Utilizarla en titulares es una decisión deliberada para añadir un toque de drama, lujo y autoridad artística.",
    bodyDescription: "Para acompañar a un titular tan distinguido, Lora ofrece un contrapunto sereno y culto. Sus raíces caligráficas le otorgan un ritmo fluido y orgánico, mientras que su contraste moderado la hace excepcionalmente cómoda para la lectura en pantalla. Lora no es rígida; es artística y elocuente. Transmite una sensación de confianza, tradición y un cuidado artesanal por el detalle.",
    color: "purple"
  },
  {
    title: "Opción 3: El Híbrido Equilibrado",
    description: "Titulares: Manrope | Cuerpo: Source Serif Pro",
    headingFontClass: "font-heading-3",
    bodyFontClass: "font-body-3",
    headingText: "Titular Moderno, Texto Clásico",
    headingDescription: "Manrope es la personificación del diseño digital moderno: funcional, limpio y con un toque geométrico. Fue creada pensando en la versatilidad para interfaces de usuario y proyectos tecnológicos, por lo que transmite una sensación de eficiencia, innovación y claridad. Sus formas son compactas y legibles, perfectas para titulares que necesitan ser directos, nítidos y sentirse nativos del entorno digital.",
    bodyDescription: "Source Serif Pro fue diseñada por Adobe con una misión clara: ser la contraparte serif perfecta para la lectura en pantalla. Es una fuente robusta, confiable y excepcionalmente legible que combina la autoridad de la tipografía clásica con la claridad necesaria para el mundo digital. Transmite solidez, confianza y un academicismo accesible.",
    color: "teal"
  },
  {
    title: "Opción 4: La Corporativa Amigable",
    description: "Titulares: Montserrat | Cuerpo: Lato",
    headingFontClass: "font-heading-4",
    bodyFontClass: "font-body-4",
    headingText: "Claridad y Confianza Profesional",
    headingDescription: "Inspirada en la cartelería urbana de Buenos Aires, Montserrat tiene un carácter fuerte, geométrico y cosmopolita. Es una fuente con una gran presencia que transmite confianza, solidez y un toque de audacia. En sus pesos más altos, es ideal para titulares que buscan ser impactantes y memorables, proyectando una imagen de marca moderna, directa y con una personalidad bien definida.",
    bodyDescription: "Lato fue diseñada con un objetivo dual: ser invisible en los párrafos largos pero mostrar su carácter en tamaños más grandes. Su nombre significa 'verano' en polaco, y esa calidez se percibe en sus formas semi-redondeadas. Transmite una sensación de amabilidad, sinceridad y estabilidad. Es una de las fuentes más seguras y profesionales para cuerpo de texto, ya que equilibra a la perfección la seriedad con un tono cercano y accesible.",
    color: "indigo"
  },
  {
    title: "Opción 5: La Divertida y Redondeada",
    description: "Titulares: Nunito | Cuerpo: Figtree",
    headingFontClass: "font-heading-5",
    bodyFontClass: "font-body-5",
    headingText: "Una Estética Suave y Accesible",
    headingDescription: "La característica que define a Nunito son sus terminales redondeados, que le otorgan una personalidad inconfundiblemente amigable, suave y accesible. Es una fuente que sonríe. Utilizarla en titulares es una elección consciente para crear una atmósfera acogedora, optimista y moderna, eliminando cualquier barrera de formalidad.",
    bodyDescription: "Figtree complementa a la perfección la amabilidad de Nunito. Al ser una fuente diseñada para la máxima claridad y simplicidad, refuerza la sensación de facilidad y accesibilidad. No compite por la atención, sino que ofrece una experiencia de lectura fluida y sin esfuerzo. Juntas, crean un entorno digital que se siente abierto, honesto y diseñado pensando genuinamente en la comodidad del usuario.",
    color: "green"
  },
  {
    title: "Opción 6: El Contraste Clásico Moderno",
    description: "Titulares: Lato | Cuerpo: Lora",
    headingFontClass: "font-heading-6",
    bodyFontClass: "font-body-6",
    headingText: "Potencia Sans, Elegancia Serif",
    headingDescription: "Cuando se utiliza en pesos altos, Lato revela su segunda cara: la de un titular potente, claro y profesional. Aunque es conocida por su amabilidad, su estructura sólida y sus proporciones equilibradas la hacen perfecta para encabezados que necesitan ser legibles y directos sin resultar agresivos. Transmite una sensación de profesionalismo moderno, fiabilidad y claridad.",
    bodyDescription: "Lora, con su herencia caligráfica, aporta el contrapunto perfecto de elegancia y tradición. Leer un texto compuesto en Lora es como leer un buen libro; es cómodo, tiene un ritmo agradable y transmite una sensación de calidad y cuidado. Esta combinación de un titular Sans Serif funcional con un cuerpo Serif artístico es un clásico del diseño que une lo mejor de dos mundos.",
    color: "rose"
  }
]);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

onMounted(() => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  } else {
    isDarkMode.value = false;
    document.documentElement.classList.remove('dark');
  }
});
</script>
