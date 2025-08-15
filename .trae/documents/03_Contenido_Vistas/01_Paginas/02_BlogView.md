# BlogView - Página del Blog

## 📋 Información General

**Archivo:** `src/views/BlogView.vue`  
**Ruta:** `/blog`  
**Propósito:** Listado y filtrado de artículos del blog  
**Tipo:** Página de contenido con funcionalidad de filtrado  

## 🎯 Objetivos de la Página

### Objetivos Primarios
1. **Mostrar todos los artículos** - Listado completo de contenido publicado
2. **Facilitar la navegación** - Filtros por categoría para encontrar contenido específico
3. **Experiencia de usuario fluida** - Estados de carga y manejo de errores
4. **Promocionar el contenido** - Presentación atractiva de los artículos

### Objetivos Secundarios
- Establecer credibilidad a través del contenido
- Mejorar SEO con contenido indexable
- Fomentar el engagement y tiempo en sitio
- Dirigir tráfico hacia artículos específicos

## 🏗️ Estructura de Componentes

### Componentes Principales
```vue
<script setup>
import SectionWrapper from '@/components/SectionWrapper.vue'
import BlogFilters from '@/components/BlogFilters.vue'
import BlogContent from '@/components/BlogContent.vue'
import PageLayout from '@/components/PageLayout.vue'
import HeroSection from '@/components/HeroSection.vue'
</script>
```

### Jerarquía de Componentes
```
PageLayout
├── HeroSection
└── SectionWrapper
    ├── BlogFilters
    └── BlogContent
```

## 📱 Secciones de la Página

### 1. Hero Section
```vue
<HeroSection
  title="Blog"
  :background-image="HeaderBackground"
>
  <template v-slot:subtitle>
    Aprendizajes, herramientas y reflexiones honestas. 
    Todo documentado para que experimentes por tu cuenta 
    y encuentres ideas accionables.
  </template>
</HeroSection>
```

**Características:**
- Título simple y directo
- Imagen de fondo reutilizada (cabecera_inicio.jpeg)
- Subtítulo que establece el tono y propósito del blog
- Enfoque en valor práctico y experimentación

### 2. Sección de Filtros
```vue
<div class="mb-12">
  <BlogFilters
    :categories="allCategories"
    :selected-categories="selectedCategories"
    :is-loading="isLoading"
    @toggle-category="toggleCategory"
    @clear-filters="clearAllFilters"
  />
</div>
```

**Funcionalidad:**
- Filtrado por categorías dinámicas
- Estado de carga durante fetch de datos
- Selección múltiple de categorías
- Opción para limpiar todos los filtros
- Espaciado inferior de 3rem (mb-12)

### 3. Contenido del Blog
```vue
<BlogContent
  :articles="filteredArticles"
  :is-loading="isLoading"
  :error-message="errorMessage"
  :selected-categories="selectedCategories"
  @retry="fetchArticles"
  @clear-filters="clearAllFilters"
/>
```

**Características:**
- Muestra artículos filtrados
- Manejo de estados de carga y error
- Funcionalidad de retry en caso de error
- Integración con sistema de filtros

## 💾 Lógica de Datos

### Estado Reactivo
```javascript
const allArticles = ref([]);
const selectedCategories = ref([]);
const isLoading = ref(true); // Iniciar en estado de carga
const errorMessage = ref('');
```

### Función de Carga de Datos
```javascript
const fetchArticles = () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    // Usar datos locales en lugar de Supabase
    const articles = getPublishedArticles();
    
    // Ordenar por fecha de publicación (más reciente primero)
    articles.sort((a, b) => {
      return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
    });
    
    allArticles.value = articles;
  } catch (error) {
    errorMessage.value = 'No se pudieron cargar los artículos. Por favor, inténtalo de nuevo más tarde.';
  } finally {
    isLoading.value = false;
  }
};
```

**Características:**
- Manejo de estados de carga
- Ordenamiento por fecha (más reciente primero)
- Error handling con mensaje user-friendly
- Uso de datos locales (no Supabase directamente)

### Propiedades Computadas

#### Categorías Disponibles
```javascript
const allCategories = computed(() => {
  if (!allArticles.value) return [];
  const categories = allArticles.value.map(article => article.category);
  return [...new Set(categories)];
});
```

#### Artículos Filtrados
```javascript
const filteredArticles = computed(() => {
  if (!allArticles.value) return [];
  if (selectedCategories.value.length === 0) {
    return allArticles.value;
  }
  return allArticles.value.filter(article =>
    selectedCategories.value.includes(article.category)
  );
});
```

**Lógica de Filtrado:**
- Si no hay categorías seleccionadas: mostrar todos los artículos
- Si hay categorías seleccionadas: mostrar solo artículos de esas categorías
- Filtrado reactivo que se actualiza automáticamente

### Métodos de Interacción

#### Toggle de Categoría
```javascript
const toggleCategory = (category) => {
  const index = selectedCategories.value.indexOf(category);
  if (index === -1) {
    selectedCategories.value.push(category);
  } else {
    selectedCategories.value.splice(index, 1);
  }
};
```

#### Limpiar Filtros
```javascript
const clearAllFilters = () => {
  selectedCategories.value = [];
};
```

## 🔄 Ciclo de Vida

### onMounted
```javascript
onMounted(() => {
  fetchArticles();
});
```

**Comportamiento:**
- Carga automática de artículos al montar el componente
- Estado inicial de loading = true
- Ordenamiento automático por fecha

## 🎨 Diseño y Estilos

### Layout
- **PageLayout:** Container principal con `remove-padding-top="true"`
- **SectionWrapper:** Espaciado normal (py-12 lg:py-16)
- **Responsive:** Adaptativo a diferentes tamaños de pantalla

### Espaciado
- **Filtros:** Margen inferior de 3rem (mb-12)
- **Secciones:** Espaciado normal del SectionWrapper

### Estados Visuales
- **Loading:** Indicadores de carga en filtros y contenido
- **Error:** Mensajes de error con opción de retry
- **Empty:** Estado cuando no hay artículos (manejado por BlogContent)

## 📊 Fuente de Datos

### Origen de Datos
```javascript
import { getPublishedArticles } from '@/data/articlesData';
```

**Características:**
- Datos locales en lugar de llamadas a Supabase
- Solo artículos publicados
- Estructura de datos consistente

### Estructura de Artículo
```typescript
interface Article {
  slug: string;
  title: string;
  category: string;
  image_url: string;
  published_at: string;
  description?: string;
  // Otros campos según articlesData
}
```

## ⚡ Performance

### Optimizaciones Implementadas
1. **Computed Properties:** Filtrado reactivo eficiente
2. **Datos Locales:** Sin llamadas de red innecesarias
3. **Estados de Carga:** UX fluida durante operaciones
4. **Ordenamiento Único:** Solo al cargar, no en cada filtro

### Métricas Objetivo
- **Tiempo de carga inicial:** < 500ms
- **Tiempo de filtrado:** < 100ms
- **Interactividad:** Inmediata

## 🔍 Issues Identificados

### Issues Actuales
1. **Error Handling Básico:** Solo mensaje genérico
2. **Sin Paginación:** Todos los artículos se cargan de una vez
3. **Sin Búsqueda:** Solo filtrado por categoría
4. **Sin Ordenamiento Personalizable:** Solo por fecha descendente

### Mejoras Sugeridas
1. **Implementar búsqueda por texto**
2. **Añadir paginación o scroll infinito**
3. **Opciones de ordenamiento** (fecha, título, categoría)
4. **Filtros avanzados** (fecha, tags, etc.)
5. **Breadcrumbs** para navegación
6. **Meta tags dinámicos** para SEO

## 🧪 Escenarios de Testing

### Casos de Uso Principales
1. **Carga inicial exitosa**
   - Verificar que se muestran todos los artículos
   - Comprobar ordenamiento por fecha
   - Validar categorías disponibles

2. **Filtrado por categoría**
   - Seleccionar una categoría
   - Seleccionar múltiples categorías
   - Limpiar filtros

3. **Manejo de errores**
   - Simular error en getPublishedArticles
   - Verificar mensaje de error
   - Probar funcionalidad de retry

4. **Estados de carga**
   - Verificar loading inicial
   - Comprobar estados durante filtrado

### Edge Cases
- Sin artículos disponibles
- Categorías vacías
- Artículos sin categoría
- Fechas de publicación inválidas

## 📱 Responsive Design

### Breakpoints
- **Mobile:** Stack vertical, filtros colapsados
- **Tablet:** Grid de 2 columnas para artículos
- **Desktop:** Grid de 3 columnas, filtros expandidos

### Consideraciones Móviles
- Touch-friendly filtros
- Scroll suave
- Carga progresiva
- Navegación optimizada

## ♿ Accesibilidad

### Implementaciones Actuales
- Estructura semántica HTML
- Navegación por teclado
- Estados de focus visibles

### Mejoras Pendientes
- ARIA labels para filtros
- Anuncios de cambios de estado
- Skip links
- Contraste verificado

## 🔮 Roadmap de Mejoras

### Próximas Funcionalidades
1. **Búsqueda avanzada** con filtros múltiples
2. **Paginación** o scroll infinito
3. **Ordenamiento personalizable**
4. **Favoritos** y lista de lectura
5. **Compartir artículos** en redes sociales

### Optimizaciones Futuras
1. **Lazy loading** de imágenes
2. **Prefetch** de artículos populares
3. **Cache** de filtros aplicados
4. **Analytics** de interacciones

---

**Estado:** Funcional con mejoras pendientes  
**Última revisión:** 2025-01-08  
**Próxima actualización:** Implementación de búsqueda