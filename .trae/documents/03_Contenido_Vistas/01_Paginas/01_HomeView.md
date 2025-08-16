# HomeView - Página Principal

## 📋 Información General

**Archivo:** `src/views/HomeView.vue`  
**Ruta:** `/`  
**Propósito:** Página de bienvenida y presentación principal del sitio  
**Tipo:** Landing page con múltiples secciones  

## 🎯 Objetivos de la Página

### Objetivos Primarios
1. **Primera impresión positiva** - Captar la atención del visitante
2. **Presentación personal** - Establecer credibilidad y confianza
3. **Propuesta de valor clara** - Comunicar el enfoque y filosofía
4. **Generación de engagement** - Dirigir hacia contenido y contacto

### Objetivos Secundarios
- Mostrar artículos recientes del blog
- Presentar la metodología de "tres pilares"
- Promocionar el formulario de diagnóstico
- Establecer la identidad visual del sitio

## 🏗️ Estructura de Componentes

### Componentes Principales
```vue
<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue'
import HeroSection from '@/components/HeroSection.vue'
import SectionWrapper from '@/components/SectionWrapper.vue'
import ScrollingFeatures from '@/components/ScrollingFeatures.vue'
import MiniArticleCard from '@/components/MiniArticleCard.vue'
import CtaCard from '@/components/CtaCard.vue'
import DecorativeUnderline from '@/components/DecorativeUnderline.vue'
import DecorativeIcon from '@/components/DecorativeIcon.vue'
import DecorativeBackground from '@/components/DecorativeBackground.vue'
</script>
```

### Iconos Utilizados
- **MapIcon** - Primer pilar (Dibuja tu mapa)
- **ScaleIcon** - Segundo pilar (Localízate en él)
- **BoltIcon** - Tercer pilar (Emprende el viaje)
- **SparklesIcon** - Elementos decorativos

## 📱 Secciones de la Página

### 1. Hero Section
```vue
<HeroSection
  title="¡Despierta, que te come la iA!"
  :background-image="HeaderBackground"
  animated-text="iA"
>
  <template v-slot:subtitle>
    Vale, es broma... <strong>pero solo a medias</strong>. 
    Las máquinas inteligentes evolucionan rápido...
  </template>
</HeroSection>
```

**Características:**
- Título llamativo con humor
- Imagen de fondo personalizada
- Texto animado en "iA"
- Subtítulo explicativo
- Call-to-action implícito

### 2. Sección "Quién Soy"
```vue
<section aria-labelledby="quien-soy-heading">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <DecorativeBackground />
    <div class="text-center md:text-left">
      <h2>¡Hola! Soy Juanda.</h2>
      <!-- Contenido personal -->
    </div>
  </div>
</section>
```

**Elementos:**
- Layout de dos columnas (imagen + texto)
- Foto placeholder de Juanda
- Presentación personal y profesional
- Link hacia página "Soy" para más detalles
- Responsive design (stack en móvil)

### 3. Texto Puente - Filosofía
```vue
<section aria-label="Filosofía del proyecto">
  <div class="max-w-3xl mx-auto bg-white/30 dark:bg-[#191A1D]/30 rounded-xl p-8">
    <p class="text-xl md:text-2xl"><!-- Filosofía del proyecto --></p>
  </div>
</section>
```

**Propósito:**
- Transición entre presentación personal y metodología
- Explicación de la filosofía del proyecto
- Preparación para los "tres pilares"
- Diseño destacado con fondo semi-transparente

### 4. Tres Pilares Temáticos
```vue
<section aria-labelledby="pilares-heading">
  <ScrollingFeatures :features="pilares" />
</section>
```

**Pilares Definidos:**
1. **"Dibuja tu mapa"** (MapIcon, color info)
   - Explorar herramientas disponibles
   - Enfoque y selección consciente
   - Evitar distracciones

2. **"Localízate en él"** (ScaleIcon, color accent)
   - Identificar posición actual
   - Clarificar procesos y necesidades
   - Tomar apuntes y documentar

3. **"Emprende el viaje"** (BoltIcon, color error)
   - Comenzar automatización simple
   - Experimentar con IA
   - Aceptar errores como aprendizaje

### 5. Call to Action Principal
```vue
<CtaCard 
  title="Crea tu mapa"
  description="Responde 15 preguntas y obtén un mapa inicial personalizado..."
  buttonText="Obtener"
  buttonLink="#"
/>
```

**Características:**
- Promoción del formulario de diagnóstico
- Hover effect con scale
- Link placeholder (funcionalidad pendiente)
- Diseño destacado y llamativo

### 6. Artículos Destacados
```vue
<section aria-labelledby="articulos-heading">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <MiniArticleCard 
      v-for="articulo in recentArticles" 
      :key="articulo.slug" 
      :article="articulo" 
    />
  </div>
</section>
```

**Funcionalidad:**
- Muestra los 3 artículos más recientes
- Ordenados por fecha de publicación
- Grid responsive (1 columna en móvil, 3 en desktop)
- Link hacia página completa del blog

## 💾 Lógica de Datos

### Interface Article
```typescript
interface Article {
  slug: string;
  title: string;
  category: string;
  image_url: string;
  published_at: string;
  description?: string;
}
```

### Función fetchRecentArticles
```typescript
const fetchRecentArticles = () => {
  try {
    const articles = getPublishedArticles();
    
    // Ordenar por fecha (más reciente primero)
    articles.sort((a, b) => {
      return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
    });
    
    // Limitar a 3 artículos
    recentArticles.value = articles.slice(0, 3);
  } catch (error) {
    // Error handling pendiente
  }
};
```

### Lifecycle
- **onMounted:** Carga artículos recientes al montar el componente
- **Reactive data:** `recentArticles` ref para artículos
- **Error handling:** Básico, pendiente de mejora

## 🎨 Diseño y Estilos

### Paleta de Colores Utilizada
- **Acento Claro:** `#206372` - Color principal de marca (modo claro)
- **Acento Oscuro:** `#F5DF4D` - Color principal de marca (modo oscuro)
- **Primer Pilar:** `#A78BFA` - Color info para primer pilar
- **Tercer Pilar:** `#DC2626` - Color error para tercer pilar
- **Fondos:** `#FFFFFF` (claro) / `#191A1D` (oscuro)

### Tipografías
- **font-heading:** "Plus Jakarta Sans" para títulos
- **font-sans:** "Figtree" para texto general
- **Tamaños:** text-xl, text-2xl, text-3xl, text-4xl

### Efectos Visuales
- **Hover effects:** Scale en cards y CTAs
- **Transitions:** duration-300, duration-500, duration-700
- **Fade-in elements:** Clase para animaciones de entrada
- **Decorative elements:** Underlines, icons, backgrounds

## 📱 Responsive Design

### Breakpoints Utilizados
- **sm:** 640px - Ajustes de texto
- **md:** 768px - Grid de 2 columnas, cambio de layout
- **lg:** 1024px - Espaciado mejorado

### Comportamiento Móvil
- **Hero:** Texto más pequeño, padding reducido
- **Quién soy:** Stack vertical en lugar de grid
- **Pilares:** ScrollingFeatures adapta automáticamente
- **Artículos:** Una columna en lugar de tres

## ♿ Accesibilidad

### Elementos Implementados
- **aria-labelledby:** Para secciones con títulos
- **aria-label:** Para secciones sin títulos visibles
- **Semantic HTML:** section, h1, h2, p, nav
- **Focus management:** Links y botones accesibles
- **Alt text:** En imágenes decorativas

### Mejoras Pendientes
- **Skip links:** Para navegación por teclado
- **ARIA live regions:** Para contenido dinámico
- **Color contrast:** Verificación completa
- **Screen reader testing:** Pruebas específicas

## 🚀 Performance

### Optimizaciones Implementadas
- **Lazy loading:** Componentes pesados diferidos
- **Image optimization:** Placeholder images
- **Code splitting:** Automático por Vite
- **CSS-in-JS:** Tailwind con purging

### Métricas Objetivo
- **LCP:** < 2.5s (imagen hero optimizada)
- **FID:** < 100ms (interacciones mínimas)
- **CLS:** < 0.1 (layout estable)

## 🔍 SEO Considerations

### Meta Tags Requeridos
```html
<title>Juanda.pro - Convierte la tecnología en tu aliada</title>
<meta name="description" content="Aprende a usar IA y automatización para simplificar tu vida. Tres pilares prácticos para convertir la tecnología en tu mejor aliada.">
<meta property="og:title" content="¡Despierta, que te come la iA! - Juanda.pro">
<meta property="og:description" content="Las máquinas inteligentes evolucionan rápido. Aprende a aprovechar su potencial.">
<meta property="og:image" content="[hero-image-url]">
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Juan David Ocampo",
  "alternateName": "Juanda",
  "url": "https://juanda.pro",
  "sameAs": [
    "[social-media-links]"
  ]
}
```

## 🧪 Testing Scenarios

### Funcionalidad Básica
- [ ] Página carga correctamente
- [ ] Artículos recientes se muestran
- [ ] Links de navegación funcionan
- [ ] Responsive design en diferentes dispositivos
- [ ] Modo oscuro/claro funciona

### Interacciones
- [ ] Hover effects en cards
- [ ] Click en "Conoce más sobre mí"
- [ ] Click en "Ver todos los artículos"
- [ ] Click en CTA "Obtener" (placeholder)
- [ ] Navegación por teclado

### Performance
- [ ] Tiempo de carga < 3s
- [ ] Imágenes cargan correctamente
- [ ] Animaciones suaves
- [ ] Sin layout shifts

## 🔮 Mejoras Futuras

### Funcionalidad
1. **Formulario de diagnóstico** - Implementar funcionalidad real
2. **Newsletter signup** - Suscripción en footer
3. **Social sharing** - Botones de compartir
4. **Analytics tracking** - Eventos de interacción

### Performance
1. **Image optimization** - WebP, lazy loading real
2. **Critical CSS** - Inline para above-the-fold
3. **Preloading** - Recursos críticos
4. **Service Worker** - Caching avanzado

### UX/UI
1. **Micro-interactions** - Animaciones más sofisticadas
2. **Loading states** - Skeletons para artículos
3. **Error boundaries** - Manejo de errores mejorado
4. **A/B testing** - Optimización de conversión

## 📊 Analytics y Métricas

### Eventos a Trackear
- **Page view:** Visita a home
- **Scroll depth:** 25%, 50%, 75%, 100%
- **Click CTA:** "Obtener mapa"
- **Click navigation:** "Conoce más", "Ver artículos"
- **Time on page:** Engagement measurement

### Conversiones
- **Contact form:** Desde CTA principal
- **Blog engagement:** Click hacia artículos
- **About page:** Click "Conoce más"

## 🐛 Issues Conocidos

### Pendientes de Resolución
1. **CTA link:** Placeholder "#" debe apuntar a /diagnostico
2. **Error handling:** Mejorar manejo de errores en fetchRecentArticles
3. **Image optimization:** Reemplazar placeholders con imágenes reales
4. **Loading states:** Añadir skeletons para artículos

### Limitaciones Actuales
- **Contenido estático:** Pilares hardcodeados en componente
- **Imágenes placeholder:** No son imágenes reales
- **Sin CMS:** Contenido no editable dinámicamente
- **Analytics básico:** Falta tracking detallado