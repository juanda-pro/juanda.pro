# ContactoViewV2 - Vista de Contacto

## Información General
- **Archivo**: `ContactoViewV2.vue`
- **Ruta**: `/contacto`
- **Tipo**: Vista de formulario/contacto
- **Propósito**: Facilitar la comunicación directa con el autor

## Objetivos
- Proporcionar múltiples formas de contacto
- Crear una experiencia de usuario fluida para enviar mensajes
- Transmitir apertura y disponibilidad para colaboración
- Generar leads y oportunidades de negocio
- Mantener un tono personal y profesional

## Estructura de Componentes

### Jerarquía de Componentes
```
ContactoViewV2
├── PageLayout (remove-padding-top="true")
│   ├── HeroSection (título "Contacto" con imagen de fondo)
│   ├── SectionWrapper (introducción)
│   ├── SectionWrapper (formulario de contacto)
│   │   └── ContactForm (ref="contactFormRef")
│   ├── SectionWrapper (información de contacto)
│   │   └── ContactInfo
│   └── SectionWrapper (CTA final)
│       ├── Botón "Escribir ahora"
│       └── Link "Aprender más"
```

### Componentes Utilizados
- `PageLayout`: Layout principal sin padding superior
- `SectionWrapper`: Contenedores con espaciado configurable
- `HeroSection`: Hero con título y imagen de fondo
- `ContactForm`: Formulario de contacto expandible
- `ContactInfo`: Información adicional de contacto

## Secciones de la Página

### 1. Hero Section
- **Título**: "Contacto"
- **Subtítulo**: "¿Idea para automatizar un proceso? ¿Preguntas sobre iA?"
- **Imagen de fondo**: `HeaderBackground` (cabecera_inicio.jpeg)

### 2. Introducción
- **Título**: "¡Hablemos!"
- **Mensaje**: Invitación abierta a contactar
- **Enfoque**: Optimización de procesos y ayuda personalizada

### 3. Formulario de Contacto
- **Título**: "Escríbeme directamente"
- **Componente**: `ContactForm` con funcionalidad expandible
- **Atributo**: `data-form-section` para scroll targeting

### 4. Información de Contacto
- **Componente**: `ContactInfo`
- **Propósito**: Métodos alternativos de contacto

### 5. CTA Final
- **Título**: "Gracias"
- **Mensaje**: Enfoque en sinergias y oportunidades
- **Botones**: "Escribir ahora" y "Aprender más"

## Lógica de Datos

### Referencias Reactivas
```javascript
const contactFormRef = ref(null); // Referencia al componente ContactForm
```

### Funciones Principales

#### `scrollToForm()`
- **Propósito**: Hacer scroll suave al formulario
- **Implementación**: Busca elemento con `data-form-section`
- **Comportamiento**: Scroll suave al inicio del elemento

#### `handleFormButton()`
- **Propósito**: Manejar click en botón "Escribir ahora"
- **Lógica**:
  1. Si el formulario no está expandido: expandir y hacer scroll
  2. Si ya está expandido: solo hacer scroll
- **Uso de nextTick**: Esperar a que el DOM se actualice

#### `handleFormExpand()`
- **Propósito**: Manejar evento de expansión del formulario
- **Acción**: Hacer scroll al formulario después de expandir

#### `handleFormSubmit(formData)`
- **Propósito**: Manejar envío del formulario
- **Estado actual**: TODO - implementación pendiente
- **Datos disponibles**: name, email, message

### Importaciones
```javascript
import HeaderBackground from '../assets/cabecera_inicio.jpeg';
```

## Interactividad y UX

### Flujo de Usuario
1. **Llegada**: Hero con mensaje claro sobre el propósito
2. **Motivación**: Introducción que invita a contactar
3. **Acción**: Formulario fácil de usar y expandible
4. **Alternativas**: Información de contacto adicional
5. **Refuerzo**: CTA final con opciones múltiples

### Funcionalidades Interactivas
- **Scroll automático**: Al expandir formulario o hacer click en CTA
- **Formulario expandible**: Mejora la UX progresiva
- **Botones con hover effects**: Feedback visual inmediato
- **Navegación fluida**: Entre secciones y hacia otras páginas

### Estados del Formulario
- **Colapsado**: Estado inicial, menos intimidante
- **Expandido**: Formulario completo visible
- **Enviando**: Estado de carga (pendiente implementar)
- **Enviado**: Confirmación de éxito (pendiente implementar)

## Diseño y Estilos

### Layout Responsive
- **Móvil**: Botones en columna, espaciado reducido
- **Desktop**: Botones en fila, mayor espaciado
- **Contenido**: Máximo ancho controlado (2xl, 4xl)

### Efectos Visuales
- **Hover en botones**: Transform translateY(-1px) + shadow
- **Transiciones**: 0.2s ease-in-out para suavidad
- **Colores**: Sistema de marca consistente
- **Tipografía**: Jerarquía clara con tamaños responsivos

### Sistema de Colores
- **Botón primario**: `bg-brand-accent` con hover
- **Botón secundario**: `bg-surface` con bordes
- **Texto**: Sistema primary/secondary con modo oscuro

## Accesibilidad

### Navegación
- **Focus visible**: En todos los elementos interactivos
- **Scroll suave**: Mejor experiencia para usuarios con vestibular
- **Contraste**: Cumple estándares WCAG

### Semántica
- **Estructura de headings**: h2, h3 en orden lógico
- **Botones semánticos**: `<button>` para acciones, `<a>` para navegación
- **Landmarks**: Secciones claramente definidas

### Usabilidad
- **Formulario progresivo**: Reduce fricción inicial
- **Múltiples opciones**: Diferentes formas de contacto
- **Feedback claro**: Estados y transiciones visibles

## Optimizaciones de Rendimiento

### JavaScript
- **Funciones simples**: Sin operaciones pesadas
- **nextTick eficiente**: Solo cuando es necesario
- **Event handling**: Delegación eficiente

### CSS
- **Transiciones CSS**: Mejor rendimiento que JavaScript
- **Clases utilitarias**: Tailwind optimizado
- **Hover effects**: GPU-accelerated transforms

### Componentes
- **Lazy loading**: Componentes se cargan según necesidad
- **Referencias**: Acceso directo sin queries DOM

## Issues Identificados

### Funcionalidad Pendiente
1. **handleFormSubmit**: Implementación real del envío
2. **Validación**: Sin validación de formulario visible
3. **Estados de carga**: Sin feedback durante envío
4. **Manejo de errores**: Sin gestión de errores de envío

### Mejoras de UX
1. **Confirmación visual**: Después del envío exitoso
2. **Validación en tiempo real**: Feedback inmediato
3. **Autoguardado**: Para formularios largos
4. **Múltiples idiomas**: Soporte internacional

## Mejoras Sugeridas

### Corto Plazo
1. **Implementar envío real**: Integración con servicio de email
2. **Validación de formulario**: Cliente y servidor
3. **Estados de carga**: Spinners y feedback
4. **Manejo de errores**: Mensajes informativos

### Mediano Plazo
1. **Analytics**: Tracking de conversiones
2. **A/B testing**: Optimizar copy y layout
3. **Integración CRM**: Gestión automática de leads
4. **Notificaciones**: Email/SMS de confirmación

### Largo Plazo
1. **Chat en vivo**: Soporte en tiempo real
2. **Calendario integrado**: Agendar reuniones
3. **Formularios dinámicos**: Según tipo de consulta
4. **Automatización**: Respuestas automáticas inteligentes

## Integración con Backend

### Endpoint Esperado
```javascript
// POST /api/contact
{
  name: string,
  email: string,
  message: string
}
```

### Respuesta Esperada
```javascript
{
  success: boolean,
  message: string,
  id?: string
}
```

### Manejo de Errores
- **Validación**: Errores de campos específicos
- **Red**: Problemas de conectividad
- **Servidor**: Errores internos
- **Rate limiting**: Protección contra spam

## Escenarios de Testing

### Funcionalidad
1. **Scroll al formulario**: Desde botón CTA
2. **Expansión de formulario**: Comportamiento correcto
3. **Envío de formulario**: Datos se procesan
4. **Navegación**: Links funcionan correctamente

### UX
1. **Responsive**: Todos los tamaños de pantalla
2. **Hover effects**: Feedback visual apropiado
3. **Accesibilidad**: Navegación por teclado
4. **Performance**: Carga rápida y transiciones suaves

### Edge Cases
1. **JavaScript deshabilitado**: Funcionalidad básica
2. **Conexión lenta**: Estados de carga apropiados
3. **Formulario muy largo**: Scroll y usabilidad
4. **Múltiples envíos**: Prevención de duplicados

## SEO y Marketing

### Optimización
- **Meta tags**: Título y descripción específicos
- **Schema markup**: ContactPage structured data
- **URL limpia**: /contacto fácil de recordar

### Conversión
- **Copy persuasivo**: Enfoque en beneficios
- **Múltiples CTAs**: Diferentes puntos de conversión
- **Reducción de fricción**: Formulario progresivo

## Roadmap de Mejoras

### Fase 1: Funcionalidad Básica
- Implementar envío real de formularios
- Validación y manejo de errores
- Estados de carga y confirmación

### Fase 2: Optimización UX
- A/B testing de copy y layout
- Analytics y tracking de conversiones
- Mejoras de accesibilidad

### Fase 3: Funcionalidades Avanzadas
- Integración con CRM
- Chat en vivo
- Calendario de citas

### Fase 4: Automatización
- Respuestas automáticas
- Segmentación de leads
- Workflows de seguimiento