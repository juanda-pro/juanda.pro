# Especificación de Vista: Política de Privacidad

**Versión:** 2.0
**Componente Asociado:** `app/src/views/PrivacyPolicyView.vue`
**Última Actualización:** 19/07/2025

---

## 1. Propósito y Descripción General

Esta vista muestra la política de privacidad del sitio web juanda.pro. Es una página de contenido estático que detalla cómo se recopila, utiliza y protege la información personal de los usuarios, incluyendo un gestor de cookies interactivo.

## 2. Fuente de Datos

El contenido es completamente estático y está directamente incrustado en el componente:
- **Fecha de Actualización:** "1 de Julio de 2024"
- **Contenido Legal:** Texto hardcodeado con información sobre recopilación y uso de datos
- **Secciones:** Información que recopilamos, Cómo usamos tu información, Gestión de Cookies

## 3. Estructura y Componentes

### 3.1. Cabecera
- **Componentes:** `SectionWrapper` con `IntroCard` y `PageHeader`
- **Contenido:**
  - Título: "Política de Privacidad"
  - Subtítulo: "Tu confianza es importante. Aquí te explicamos cómo protegemos tu información."
- **Configuración:** `spacing="normal"`

### 3.2. Contenido Legal
- **Componente:** `SectionWrapper` con `spacing="normal"`
- **Contenedor:** `max-w-3xl mx-auto prose prose-lg dark:prose-invert max-w-none`
- **Estructura:**
  - Fecha de última actualización
  - Párrafo introductorio
  - Sección "Información que recopilamos" con lista detallada
  - Sección "Cómo usamos tu información" con lista de propósitos
  - Sección "Gestión de Cookies" con componente interactivo

### 3.3. Gestor de Cookies
- **Componente:** `CookieManager` integrado en el contenido
- **Propósito:** Permitir al usuario gestionar preferencias de cookies
- **Ubicación:** Al final de la sección de gestión de cookies

## 4. Características Técnicas

### 4.1. Imports
- **Componentes:** `PageLayout`, `SectionWrapper`, `PageHeader`, `CookieManager`, `IntroCard`
- **Sin Lógica Reactiva:** Componente puramente estático

### 4.2. Estilo y Diseño
- **Tipografía:** Uso de clases `prose` de Tailwind para contenido legal
- **Responsive:** Contenedor con `max-w-3xl` para legibilidad óptima
- **Temas:** Soporte completo para modo claro/oscuro con `dark:prose-invert`
- **Consistencia:** Uso del componente `IntroCard` para unificación visual

### 4.3. Contenido Específico
- **Información Recopilada:**
  - Información proporcionada directamente (nombre, email)
  - Información de uso (páginas visitadas, clics)
  - Cookies y tecnologías similares
- **Usos de la Información:**
  - Proporcionar y mantener el sitio
  - Mejorar y personalizar la experiencia
  - Análisis de uso
  - Comunicación y marketing

## 5. Notas Técnicas

- **Accesibilidad:** Estructura semántica con headings apropiados
- **SEO:** Contenido bien estructurado para indexación
- **Mantenibilidad:** Contenido fácil de actualizar directamente en el template
- **Interactividad:** Integración del `CookieManager` para gestión de preferencias
- **Responsive:** Diseño adaptativo para todos los dispositivos
