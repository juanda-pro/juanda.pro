# Catálogo de Componentes Reutilizables

**Última Actualización:** 27 de Enero 2025  
**Actualizado por:** Agente Jobs  
**Estado:** ✅ SINCRONIZADO con código fuente

---

Este documento proporciona una visión completa y actualizada de todos los componentes de UI reutilizables del proyecto juanda.pro, incluyendo su propósito, ubicación y características principales.

**Total de Componentes:** 35+ componentes activos

---

## 🧱 Componentes Base (Primitivos)

Componentes fundamentales que sirven como base para otros elementos.

### `BaseButton.vue`
- **Propósito:** Botón estándar con estilos personalizables
- **Características:** Soporte para diferentes variantes y estados
- **Uso:** Elemento base para todos los botones del sitio

### `BaseInput.vue`
- **Propósito:** Campo de entrada de texto estándar
- **Características:** Validación, estados de error, soporte para modo oscuro
- **Uso:** Formularios y campos de entrada

### `BaseTextarea.vue`
- **Propósito:** Área de texto estándar
- **Características:** Redimensionable, validación, modo oscuro
- **Uso:** Campos de texto largo en formularios

---

## 🏗️ Componentes de Layout y Estructura

Componentes que definen la estructura y organización de las páginas.

### `Header.vue`
- **Propósito:** Encabezado global con navegación principal
- **Características:** Navegación responsiva, toggle de tema
- **Ubicación:** Presente en todas las páginas

### `Footer.vue`
- **Propósito:** Pie de página global del sitio
- **Características:** Enlaces importantes, información de contacto
- **Ubicación:** Presente en todas las páginas

### `PageHeader.vue`
- **Propósito:** Encabezado estándar para páginas interiores
- **Características:** Título, breadcrumbs, elementos decorativos
- **Uso:** Páginas de contenido interno

### `PageLayout.vue`
- **Propósito:** Estructura de layout principal para páginas
- **Características:** Contenedor responsivo, espaciado consistente
- **Uso:** Wrapper principal para contenido de páginas

### `LegalPageLayout.vue`
- **Propósito:** Layout específico para páginas legales
- **Características:** Formato optimizado para documentos legales
- **Uso:** Política de privacidad, términos de uso, cookies

### `SectionWrapper.vue`
- **Propósito:** Contenedor con padding estándar para secciones
- **Características:** Espaciado consistente, responsivo
- **Uso:** Envolver secciones de contenido

---

## 🃏 Componentes de Contenido y Tarjetas

Componentes para mostrar información estructurada y atractiva.

### `CtaCard.vue` ⭐ DESTACADO
- **Propósito:** Tarjeta de llamada a la acción premium
- **Características:** 
  - Efectos hover sofisticados con transformaciones 3D
  - Fondo con patrón de ondas
  - Transiciones suaves (500ms)
  - Responsive design
  - Soporte para HTML en título y descripción
- **Props:**
  - `title: String` (Requerido): Título principal
  - `description: String` (Requerido): Descripción
  - `buttonText: String` (Requerido): Texto del botón
  - `buttonLink: String`: URL de destino
- **Uso:** Secciones de conversión importantes

### `ArticleCard.vue`
- **Propósito:** Tarjeta para mostrar resumen de artículos del blog
- **Características:** Imagen, título, descripción, metadatos
- **Uso:** Listado de artículos en BlogView

### `MiniArticleCard.vue`
- **Propósito:** Versión compacta de la tarjeta de artículo
- **Características:** Diseño minimalista, información esencial
- **Uso:** Artículos relacionados, sidebar

### `FeatureCard.vue`
- **Propósito:** Tarjeta para destacar características o servicios
- **Características:** Iconos, títulos, descripciones
- **Uso:** Secciones de características en HomeView

### `ResourceCard.vue`
- **Propósito:** Tarjeta para mostrar recursos externos
- **Características:** Enlaces, metadatos, preview
- **Uso:** Página de recursos

### `NoteCard.vue`
- **Propósito:** Tarjeta para mostrar notas o apuntes
- **Características:** Formato de nota, metadatos
- **Uso:** Sistema de notas/wiki

### `IntroCard.vue`
- **Propósito:** Tarjeta de introducción personal
- **Características:** Información personal, foto, descripción
- **Uso:** Sección de presentación

---

## 📝 Componentes de Formularios

Componentes especializados para interacción del usuario.

### `ContactForm.vue` ⭐ DESTACADO
- **Propósito:** Formulario de contacto inteligente paso a paso
- **Características:**
  - Formulario progresivo (3 pasos)
  - Barra de progreso visual
  - Validación en tiempo real
  - Estados de éxito/error
  - Animaciones suaves
  - Placeholder interactivo
- **Funcionalidad:** Expansión automática, navegación con Enter
- **Uso:** Página de contacto

### `ContactInfo.vue`
- **Propósito:** Información de contacto complementaria
- **Características:** Datos de contacto, redes sociales
- **Uso:** Junto al formulario de contacto

---

## 🎨 Componentes Decorativos y Visuales

Componentes que mejoran la experiencia visual.

### `HeroSection.vue`
- **Propósito:** Sección hero principal de la página de inicio
- **Características:** Imagen de fondo, texto superpuesto, CTA
- **Uso:** Parte superior de HomeView

### `DecorativeBackground.vue`
- **Propósito:** Fondo decorativo con efectos visuales
- **Características:** Efectos de blur, gradientes
- **Uso:** Fondos de secciones

### `DecorativeIcon.vue`
- **Propósito:** Iconos decorativos con estilos especiales
- **Características:** Efectos hover, colores de marca
- **Uso:** Acentos visuales en secciones

### `DecorativeUnderline.vue`
- **Propósito:** Subrayados decorativos para títulos
- **Características:** Animaciones, colores de marca
- **Uso:** Títulos importantes

### `ScrollingFeatures.vue`
- **Propósito:** Sección de características con scroll horizontal
- **Características:** Scroll suave, indicadores
- **Uso:** Mostrar múltiples características

---

## ⚙️ Componentes Funcionales

Componentes que proporcionan funcionalidad específica.

### `ThemeToggle.vue`
- **Propósito:** Cambio entre modo claro y oscuro
- **Características:** Animación suave, persistencia
- **Ubicación:** Header global

### `CookieManager.vue`
- **Propósito:** Banner y gestor de consentimiento de cookies
- **Características:** Cumplimiento GDPR, configuración granular
- **Uso:** Gestión de cookies del sitio

### `Modal.vue`
- **Propósito:** Componente base para ventanas modales
- **Características:** Overlay, animaciones, accesibilidad
- **Uso:** Diálogos y contenido superpuesto

### `MetadataRenderer.vue`
- **Propósito:** Gestión de metaetiquetas del `<head>`
- **Características:** SEO dinámico, Open Graph
- **Uso:** Todas las páginas para SEO

### `ReadingProgressBar.vue`
- **Propósito:** Barra de progreso de lectura
- **Características:** Progreso automático, diseño sutil
- **Uso:** Artículos largos

### `FilterButton.vue`
- **Propósito:** Botón para filtrar contenido
- **Características:** Estados activo/inactivo, contadores
- **Uso:** Filtros de blog y recursos

---

## 📱 Componentes de Navegación y Blog

Componentes específicos para navegación y contenido del blog.

### `BlogContent.vue`
- **Propósito:** Contenedor principal para contenido del blog
- **Características:** Tipografía optimizada, espaciado
- **Uso:** Renderizado de artículos

### `BlogFilters.vue`
- **Propósito:** Sistema de filtros para el blog
- **Características:** Filtros por categoría, búsqueda
- **Uso:** BlogView para filtrar artículos

### `ArticleContent.vue`
- **Propósito:** Renderizado de contenido de artículos individuales
- **Características:** Markdown rendering, sintaxis highlighting
- **Uso:** ArticleDetailView

### `ArticleNavigation.vue`
- **Propósito:** Navegación entre artículos
- **Características:** Artículo anterior/siguiente
- **Uso:** ArticleDetailView

### `ArticleNavButtons.vue`
- **Propósito:** Botones de navegación específicos para artículos
- **Características:** Iconos, tooltips
- **Uso:** Navegación dentro de artículos

---

## 🔧 Componentes de Iconos

Componentes de iconos personalizados.

### `ArrowRightCircleIcon.vue`
- **Propósito:** Icono de flecha circular
- **Uso:** Botones de acción, navegación

### `IconCode.vue`
- **Propósito:** Icono de código
- **Uso:** Secciones técnicas

### `IconSync.vue`
- **Propósito:** Icono de sincronización
- **Uso:** Estados de carga

### `IconWorkflow.vue`
- **Propósito:** Icono de flujo de trabajo
- **Uso:** Secciones de proceso

---

## 📝 Componentes de Tipografía

### `TypographyOption.vue`
- **Propósito:** Opciones de tipografía para showcase
- **Uso:** Página de muestrario tipográfico

---

## 🎯 Patrones de Diseño Identificados

### Consistencia Visual
- **Espaciado:** Uso consistente de padding/margin con sistema de Tailwind
- **Bordes:** Radius consistente (rounded-xl, rounded-2xl, rounded-3xl)
- **Sombras:** Sistema de sombras graduales (shadow-lg, shadow-xl, shadow-2xl)

### Interactividad
- **Hover Effects:** Transformaciones suaves con `transition-all duration-500`
- **Estados de Focus:** Anillos de enfoque con `focus:ring-4`
- **Animaciones:** Uso de `ease-out` para transiciones naturales

### Responsividad
- **Breakpoints:** Uso sistemático de `md:` y `lg:` prefixes
- **Tipografía:** Escalado responsivo de fuentes
- **Espaciado:** Ajustes de padding/margin por breakpoint

### Modo Oscuro
- **Tokens:** Uso consistente de variantes `dark:`
- **Contrastes:** Colores optimizados para accesibilidad
- **Transiciones:** Cambios suaves entre modos

---

**Notas de Mantenimiento:**
- Todos los componentes siguen el sistema de tokens de color definido en `tailwind.config.js`
- Los componentes destacados (⭐) representan ejemplos de excelencia en UX
- La documentación se mantiene sincronizada con el código fuente
- Última verificación: 27 de Enero 2025
