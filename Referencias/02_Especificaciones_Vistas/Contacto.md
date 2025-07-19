# Especificaciones: Página de Contacto

**Versión:** 3.0
**Componente Asociado:** `app/src/views/ContactoViewV2.vue` (Página principal activa)
**Ruta:** `/contacto`
**Componente de Respaldo:** `ContactoView.vue` (disponible en `/contacto-v1`)
**Última Actualización:** 19/07/2025

---

## 1. Propósito y Funcionalidad

ContactoViewV2 es la página principal de contacto optimizada con diseño minimalista, formulario multi-paso expandible, animaciones sutiles y consistencia visual completa con el sistema de diseño del sitio. Incluye secciones de ideas, expectativas y llamada a la acción final.

## 2. Lógica de Envío

Implementa un formulario multi-paso avanzado con las siguientes características:

- **Formulario Expandible:** Inicia contraído, se expande al hacer clic
- **Pasos Progresivos:** 3 campos (nombre, email, mensaje) con navegación secuencial
- **Estados Reactivos:** `isFormExpanded`, `currentStep`, `submitStatus`
- **Funciones Clave:**
  - `expandForm()`: Expande y enfoca el primer campo
  - `handleFormButton()`: Expande formulario o hace scroll si ya está activo
  - `nextStep()` / `prevStep()`: Navegación entre campos
  - `handleSubmit()`: Simulación de envío con estados de carga y éxito
- **Validación:** Campos requeridos con feedback visual
- **Micro-interacciones:** Animaciones suaves y feedback inmediato

## 3. Estructura y Componentes

### 3.1. Sección Hero
- **Componentes:** `SectionWrapper` con `IntroCard` y `PageHeader`
- **Contenido:**
  - Título: "Contacto" (sin subrayado, consistente con Blog/Soy)
  - Subtítulo: "¿Ideas para automatizar un proceso? ¿Preguntas sobre IA? Escríbeme sin compromiso."
- **Configuración:** `spacing="normal"`

### 3.2. Sección de Introducción
- **Layout:** `max-w-4xl mx-auto text-center space-y-6`
- **Contenido:** Dos párrafos explicativos sobre el propósito de la página
- **Tipografía:** `text-xl md:text-2xl` y `text-xl` con `leading-relaxed`
- **Configuración:** `spacing="normal"`

### 3.3. Sección "A tener en cuenta" 
- **Layout:** Una sola columna con ideas arriba
- **Título:** "A tener en cuenta" 
- **Contenido:** 4 cajas con animaciones fade-in-up escalonadas
- **Animaciones:** `fade-in-up` con delays progresivos (100ms, 200ms, 300ms, 400ms)
- **Efectos hover:** Transformación sutil en las cajas
- **Configuración:** `spacing="normal"`

### 3.4. Formulario Multi-paso
- **Atributo:** `data-form-section` para scroll automático
- **Layout:** `max-w-2xl mx-auto` (una sola columna)
- **Estados:**
  - **Contraído:** Botón "Activar formulario" visible
  - **Expandido:** Formulario progresivo de 3 pasos
- **Campos:** Nombre → Email → Mensaje
- **Navegación:** Botones Anterior/Siguiente, Enter para avanzar
- **Barra de Progreso:** Indicador visual del paso actual
- **Placeholders:** Optimizados para modo oscuro

### 3.5. Sección de Expectativas
- **Título:** "¿Qué puedes esperar?"
- **Layout:** Una sola columna, texto centrado
- **Contenido:** Párrafo sobre el enfoque personal y la calidad de respuesta
- **Tipografía:** `text-lg` con estilo italic
- **Configuración:** `spacing="normal"`

### 3.6. Llamada a la Acción Final
- **Título:** "¿Listo para empezar?"
- **Layout:** Centrado con botones horizontales en desktop
- **Botones:**
  - **Principal:** "Escribir mensaje ahora" (siempre funcional)
  - **Secundario:** "Lee mi blog primero" (enlace a /blog)
- **Comportamiento:** Botón principal expande formulario o hace scroll si ya está activo
- **Contraste:** Texto oscuro sobre fondo amarillo para accesibilidad
- **Configuración:** `spacing="loose"`

## 4. Lógica Reactiva y Técnica

### 4.1. Estado Reactivo
- **`formData`:** `ref({ name: '', email: '', message: '' })` - Objeto que almacena los valores del formulario
- **Sin Estados de Carga:** No implementa `isLoading`, `isSuccess` o `errorMessage` actualmente

### 4.2. Métodos
- **`handleSubmit()`:** Función simple que:
  - Previene el comportamiento por defecto del formulario
  - Registra datos en consola para debugging
  - Muestra alert de confirmación
  - No resetea el formulario ni maneja estados

### 4.3. Animaciones
- **`onMounted`:** Inicializa animaciones de entrada para elementos con clase `fade-in-element`
- **Timing:** Delay escalonado de 100ms por elemento
- **Clases CSS:** Sistema de animaciones con opacidad y transform

### 4.4. Imports
- **Componentes:** `PageLayout`, `PageHeader`, `SectionWrapper`, `IntroCard`
- **Vue:** `ref`, `onMounted`
- **Sin Dependencias Externas:** No usa componentes base especializados

## 5. Contenido Específico

### 5.1. Sugerencias de Contacto
1. **Compartir ideas o feedback** - Experiencias con recomendaciones
2. **Preguntas específicas** - Scripts, iA, procesos administrativos
3. **Colaboraciones o servicios** - Automatizaciones personalizadas con diagnóstico gratuito
4. **Simplemente saludar** - Conversaciones sobre tecnología

### 5.2. Información Adicional (Grid de 3)
- **Tiempo de Respuesta** - Expectativas realistas
- **Tipo de Consultas** - Qué se puede y no se puede ayudar
- **Enfoque Personal** - Atención individualizada vs automatizada

## 6. Características de Diseño

- **Responsive:** Layout que se adapta de 2 columnas a 1 en móvil
- **Consistencia Visual:** Uso del componente `IntroCard` para unificación
- **Accesibilidad:** Labels apropiados, estados focus, estructura semántica
- **Animaciones:** Sistema de `fade-in-element` con delays escalonados
- **Temas:** Soporte completo para modo claro/oscuro

## 7. Notas Técnicas

- **Validación:** Solo validación HTML5 básica (`required`, `type="email"`)
- **Accesibilidad:** Labels asociados correctamente, estructura semántica
- **Responsive:** Grid adaptativo, mobile-first approach
- **Performance:** Animaciones optimizadas con CSS transforms
- **Mantenibilidad:** Código simple y directo, fácil de expandir
- **Limitaciones Actuales:** 
  - No hay validación avanzada del lado cliente
  - No hay manejo de estados de envío
  - No hay integración con backend
  - No hay reseteo automático del formulario