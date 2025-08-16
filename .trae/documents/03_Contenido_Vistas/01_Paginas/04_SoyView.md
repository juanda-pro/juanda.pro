# SoyView - Vista "Acerca de Mí"

## Información General
- **Archivo**: `SoyView.vue`
- **Ruta**: `/soy`
- **Tipo**: Vista de contenido estático
- **Propósito**: Presentar información personal y profesional del autor

## Objetivos
- Crear conexión personal con los visitantes
- Comunicar valores y filosofía profesional
- Establecer credibilidad y confianza
- Motivar a la exploración del resto del sitio
- Transmitir la personalidad y enfoque del autor

## Estructura de Componentes

### Jerarquía de Componentes
```
SoyView
├── PageLayout (remove-padding-top="true")
│   ├── HeroSection (título "Soy." con imagen de fondo)
│   ├── SectionWrapper (introducción con imagen y texto)
│   │   └── DecorativeBackground (foto personal)
│   └── SectionWrapper (contenido principal)
│       ├── Sección "Lo que me mueve"
│       ├── Grid de 3 valores/principios
│       └── Mensaje de cierre
```

### Componentes Utilizados
- `PageLayout`: Layout principal sin padding superior
- `SectionWrapper`: Contenedores con espaciado configurable
- `HeroSection`: Hero con título y imagen de fondo
- `DecorativeBackground`: Marco decorativo para la foto personal

## Secciones de la Página

### 1. Hero Section
- **Título**: "Soy."
- **Subtítulo**: "Un apasionado de la tecnología que puede ayudarte a optimizar algunos procesos."
- **Imagen de fondo**: `HeaderBackground` (cabecera_inicio.jpeg)

### 2. Introducción Personal
- **Layout**: Flexible (columna en móvil, fila en desktop)
- **Imagen**: Foto personal con marco decorativo (25% en desktop)
- **Texto**: Presentación personal (75% en desktop)
- **Contenido**: Introducción de Juan David Ocampo ("Juanda")

### 3. Contenido Principal "Lo que me mueve"
- **Título**: Con línea decorativa inferior
- **Párrafos**: Filosofía y enfoque personal
- **Grid de Valores**: 3 columnas con iconos y descripciones
- **Mensaje de Cierre**: Invitación a explorar el sitio

### 4. Grid de Valores (3 columnas)
1. **Principal motivación**: Aprendizaje colectivo
2. **Honestidad práctica**: Compartir experiencias reales
3. **Mindset general**: Uso consciente de la tecnología

## Lógica de Datos

### Importaciones de Assets
```javascript
import AiPacmanIllustration from '@/assets/ai-pacman-original.png';
import HeaderBackground from '../assets/cabecera_inicio.jpeg';
```

### Ciclo de Vida
- **onMounted**: Configuración de efectos visuales
- **nextTick**: Asegurar que las animaciones CSS se ejecuten correctamente

### Estado
- **Sin estado reactivo**: Vista completamente estática
- **Sin datos dinámicos**: Todo el contenido está hardcodeado

## Diseño y Estilos

### Layout Responsive
- **Móvil**: Layout en columna, elementos centrados
- **Desktop**: Layout en fila para introducción (25% imagen, 75% texto)
- **Grid**: 3 columnas en desktop, 1 columna en móvil

### Sistema de Animaciones
- **Clases CSS**: `.fade-in-element` para animaciones de entrada
- **Transiciones**: Opacity y transform con duración de 0.7s
- **Delays**: Escalonados para el grid de valores (delay-100, delay-200)
- **Estados**: opacity-0 inicial, visible para activar animación

### Elementos Decorativos
- **Líneas de conexión**: Gradientes verticales entre secciones
- **Marcos**: Bordes y fondos sutiles para destacar contenido
- **Iconos**: SVG inline para cada valor/principio
- **Líneas de énfasis**: Bajo títulos y como separadores

### Tipografía
- **Prose**: Clases de Tailwind para contenido largo
- **Line-height**: 1.8 para mejor legibilidad
- **Jerarquía**: h2 (4xl), h4 (xl), párrafos (lg-xl)
- **Énfasis**: Strong con colores de marca

## Contenido y Messaging

### Tono y Voz
- **Personal**: Uso de primera persona
- **Cercano**: Lenguaje accesible y directo
- **Profesional**: Mantiene credibilidad
- **Motivacional**: Invita a la acción y exploración

### Estructura del Mensaje
1. **Presentación**: Quién es y qué hace
2. **Filosofía**: Qué lo motiva
3. **Valores**: Cómo trabaja
4. **Invitación**: Llamada a explorar más

### Palabras Clave
- Tecnología, optimización, procesos
- Aprendizaje, experimentación, compartir
- Honestidad, consciencia, cuidado

## Optimizaciones de Rendimiento

### Assets
- Imágenes importadas estáticamente
- Uso de placeholder para foto personal
- SVG inline para iconos (mejor rendimiento)

### CSS
- Animaciones CSS puras (no JavaScript)
- Transiciones eficientes (opacity, transform)
- Clases utilitarias de Tailwind

### JavaScript
- Mínima lógica en script
- Sin watchers o estado reactivo
- onMounted simple sin operaciones pesadas

## Accesibilidad

### Semántica
- Estructura de headings correcta (h2, h4)
- Listas semánticas para valores
- Alt text para imágenes

### Navegación
- Focus visible en elementos interactivos
- Contraste adecuado en todos los estados
- Texto legible en modo oscuro

### Animaciones
- Respeta preferencias de movimiento reducido
- Animaciones sutiles y no invasivas
- Contenido accesible sin animaciones

## Issues Identificados

### Menores
1. **Imagen placeholder**: Usa placeholder en lugar de foto real
2. **Asset no utilizado**: `AiPacmanIllustration` importado pero no usado
3. **Animaciones manuales**: Requiere JavaScript para activar clases
4. **Sin lazy loading**: Imágenes cargan inmediatamente

### Potenciales Mejoras
1. **Intersection Observer**: Para activar animaciones automáticamente
2. **Imagen real**: Reemplazar placeholder con foto profesional
3. **Metadata SEO**: Agregar meta tags específicos
4. **Schema markup**: Structured data para persona

## Mejoras Sugeridas

### Corto Plazo
1. Implementar Intersection Observer para animaciones
2. Agregar foto profesional real
3. Optimizar imágenes (WebP, lazy loading)
4. Agregar meta tags específicos

### Mediano Plazo
1. Timeline interactiva de experiencia
2. Testimonios o recomendaciones
3. Links a proyectos destacados
4. Formulario de contacto integrado

### Largo Plazo
1. Versión en múltiples idiomas
2. Contenido dinámico desde CMS
3. Integración con redes sociales
4. Analytics de engagement

## Escenarios de Testing

### Funcionalidad
1. **Carga de página**: Todos los elementos se renderizan correctamente
2. **Responsive**: Layout se adapta a diferentes tamaños
3. **Animaciones**: Se ejecutan suavemente en diferentes dispositivos
4. **Modo oscuro**: Todos los elementos son legibles

### Contenido
1. **Legibilidad**: Texto es fácil de leer en todos los tamaños
2. **Jerarquía**: Estructura visual clara y lógica
3. **Imágenes**: Se cargan y muestran correctamente
4. **Iconos**: SVG se renderizan en todos los navegadores

## Integración con el Sitio

### Navegación
- Accesible desde menú principal
- Link desde footer
- Posibles referencias desde artículos

### Coherencia
- Usa mismo sistema de diseño
- Mantiene paleta de colores
- Sigue patrones de navegación

### SEO
- URL limpia (/soy)
- Contenido único y valioso
- Estructura semántica correcta

## Roadmap de Mejoras

### Fase 1: Optimización Técnica
- Intersection Observer para animaciones
- Optimización de imágenes
- Meta tags y SEO

### Fase 2: Contenido Enriquecido
- Foto profesional real
- Timeline de experiencia
- Proyectos destacados

### Fase 3: Interactividad
- Formulario de contacto
- Testimonios dinámicos
- Integración social

### Fase 4: Personalización
- Contenido dinámico
- Múltiples idiomas
- Analytics avanzados