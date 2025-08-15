# Header.vue - Documentación del Componente

## 1. Información General

**Propósito**: Componente de navegación principal que proporciona acceso a las diferentes secciones del sitio web con soporte responsive, tema claro/oscuro y menú de documentación desplegable.

**Ubicación**: `src/components/Header.vue`

**Tipo**: Componente de navegación/layout modular

**Última actualización**: 15 de agosto de 2025

## 2. Arquitectura del Componente

### Componentes Principales

#### Header.vue (Componente Principal)
- **Función**: Contenedor principal y coordinador de la navegación
- **Responsabilidades**: 
  - Gestión del estado del menú móvil
  - Definición de enlaces de navegación
  - Coordinación entre componentes hijos

#### HeaderDesktopNav.vue
- **Función**: Navegación para pantallas de escritorio
- **Características**:
  - Navegación horizontal
  - Menú desplegable de documentación
  - Toggle de tema integrado
  - Efectos hover avanzados

#### HeaderMobileNav.vue
- **Función**: Navegación para dispositivos móviles
- **Características**:
  - Panel deslizante desde la derecha
  - Menú desplegable de documentación móvil
  - Overlay con backdrop blur
  - Animaciones suaves con HeadlessUI

#### HeaderMobileButton.vue
- **Función**: Botón hamburguesa para abrir menú móvil
- **Características**:
  - Icono hamburguesa responsive
  - Estados de focus accesibles

## 3. API del Componente

### Header.vue (Principal)

#### Props
Ninguna.

#### Data/State
```typescript
const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Soy', path: '/soy' },
  { name: 'Contacto', path: '/contacto' },
]

const documentationLinks = [
  { name: 'Catálogo de Componentes', path: '/documentacion/catalogo-componentes' },
  { name: 'Paleta de Colores', path: '/documentacion/paleta-colores' },
]

const mobileMenuOpen = ref(false)
```

#### Métodos
- `openMobileMenu()`: Abre el menú móvil
- `closeMobileMenu()`: Cierra el menú móvil

### HeaderDesktopNav.vue

#### Props
```typescript
interface Props {
  navLinks: NavLink[]
  documentationLinks: NavLink[]
}
```

#### State
```typescript
const desktopDocMenuOpen = ref(false)
```

#### Métodos
- `showDesktopMenu()`: Muestra menú de documentación
- `hideDesktopMenu()`: Oculta menú de documentación
- `closeDesktopMenu()`: Cierra menú al hacer clic en enlace

### HeaderMobileNav.vue

#### Props
```typescript
interface Props {
  navLinks: NavLink[]
  documentationLinks: NavLink[]
  isOpen: boolean
}
```

#### Eventos
```typescript
interface Emits {
  (e: 'close'): void
}
```

#### State
```typescript
const mobileDocMenuOpen = ref(false)
```

## 4. Estructura y Estilos

### Header Principal
```vue
<header class="sticky top-0 z-40 backdrop-blur-sm bg-card-light dark:bg-card-dark transition-colors duration-300">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <!-- Logo/Brand -->
      <!-- Navegación Desktop -->
      <!-- Botón Mobile -->
    </div>
  </div>
  <!-- Navegación Mobile -->
</header>
```

### Logo/Brand
```vue
<RouterLink 
  to="/" 
  class="font-heading text-2xl font-bold text-[#262626] dark:text-[#F4F4F4] hover:text-[#206372] dark:hover:text-[#F5DF4D] transition-colors duration-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#206372] dark:focus-visible:ring-[#F5DF4D] focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#191A1D]"
>
  juanda.pro
</RouterLink>
```

### Navegación Desktop
```vue
<nav class="hidden md:flex items-center space-x-8">
  <!-- Enlaces principales -->
  <RouterLink
    class="text-[#262626] dark:text-[#F4F4F4] hover:text-[#206372] dark:hover:text-[#F5DF4D] hover:scale-105 font-semibold transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#206372] dark:focus-visible:ring-[#F5DF4D] [&.router-link-exact-active]:text-[#206372] dark:[&.router-link-exact-active]:text-[#F5DF4D]"
  >
    {{ link.name }}
  </RouterLink>
  
  <!-- Menú desplegable de Documentación -->
  <div class="relative" @mouseenter="showDesktopMenu" @mouseleave="hideDesktopMenu">
    <!-- Botón con chevron -->
    <!-- Menú desplegable -->
  </div>
  
  <!-- Toggle de tema -->
  <ThemeToggle />
</nav>
```

### Navegación Móvil
```vue
<TransitionRoot as="template" :show="isOpen">
  <Dialog as="div" class="md:hidden" @close="closeMobileMenu">
    <!-- Overlay -->
    <TransitionChild>
      <div class="fixed inset-0 bg-[#1D1E23]/25 dark:bg-[#1D1E23]/50" />
    </TransitionChild>
    
    <!-- Panel deslizante -->
    <TransitionChild>
      <DialogPanel class="relative ml-auto h-full w-full max-w-xs overflow-y-auto backdrop-blur-sm bg-white dark:bg-[#191A1D] py-6 px-6 shadow-xl">
        <!-- Contenido del menú -->
      </DialogPanel>
    </TransitionChild>
  </Dialog>
</TransitionRoot>
```

## 5. Funcionalidades Principales

### 🔗 Navegación Principal
- **Enlaces**: Inicio, Blog, Soy, Contacto
- **Estados activos**: Resaltado automático con `router-link-exact-active`
- **Efectos hover**: Escala y cambio de color
- **Accesibilidad**: Focus visible y navegación por teclado

### 📚 Menú de Documentación
- **Trigger**: Hover en desktop, click en móvil
- **Enlaces**: Catálogo de Componentes, Paleta de Colores
- **Animaciones**: Transiciones suaves con escalado y opacidad
- **Indicador visual**: Chevron que rota al abrir

### 🌙 Toggle de Tema
- **Integración**: Componente ThemeToggle en navegación desktop
- **Posición**: Extremo derecho de la navegación
- **Funcionalidad**: Cambio entre modo claro y oscuro

### 📱 Navegación Responsive
- **Desktop**: Navegación horizontal con menús desplegables
- **Mobile**: Panel deslizante con menús colapsables
- **Breakpoint**: `md` (768px)

## 6. Efectos Visuales y Animaciones

### Efectos Hover
```css
/* Enlaces principales */
hover:text-[#206372] dark:hover:text-[#F5DF4D]
hover:scale-105
transition-all duration-200

/* Menú de documentación */
hover:scale-105 hover:-translate-y-0.5
transition-all duration-300
```

### Transiciones de Menú
```css
/* Entrada */
enter-active-class="transition duration-200 ease-out"
enter-from-class="transform scale-95 opacity-0 translate-y-1"
enter-to-class="transform scale-100 opacity-100 translate-y-0"

/* Salida */
leave-active-class="transition duration-150 ease-in"
leave-from-class="transform scale-100 opacity-100 translate-y-0"
leave-to-class="transform scale-95 opacity-0 translate-y-1"
```

### Animaciones Móviles
```css
/* Panel deslizante */
enter="transition ease-in-out duration-300 transform"
enter-from="translate-x-full"
enter-to="translate-x-0"
leave="transition ease-in-out duration-300 transform"
leave-from="translate-x-0"
leave-to="translate-x-full"
```

## 7. Dependencias

### Vue 3
- `ref`: Estado reactivo
- `RouterLink`: Navegación SPA

### HeadlessUI
- `Dialog`: Modal para menú móvil
- `DialogPanel`: Contenedor del menú
- `TransitionRoot`, `TransitionChild`: Animaciones

### Heroicons
- `ChevronDownIcon`: Indicador de menú desplegable
- `XMarkIcon`: Botón de cerrar

### Componentes Internos
- `ThemeToggle`: Toggle de tema claro/oscuro
- `HeaderDesktopNav`: Navegación de escritorio
- `HeaderMobileNav`: Navegación móvil
- `HeaderMobileButton`: Botón hamburguesa

## 8. Casos de Uso

### Implementación en Layout
```vue
<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
```

### Navegación Programática
```typescript
// Cerrar menú móvil desde componente padre
const headerRef = ref()
headerRef.value.closeMobileMenu()
```

## 9. Responsive Design

### Breakpoints
- **Mobile**: `< md (768px)` - Menú hamburguesa y panel deslizante
- **Desktop**: `>= md (768px)` - Navegación horizontal con dropdowns

### Adaptaciones Específicas
- **Logo**: Mismo diseño en ambas versiones
- **Enlaces**: Verticales en móvil, horizontales en desktop
- **Documentación**: Dropdown en desktop, colapsable en móvil
- **Theme Toggle**: Solo visible en desktop

## 10. Accesibilidad

### Navegación por Teclado
- ✅ `focus-visible` para indicadores de foco
- ✅ `tabindex` apropiado en todos los elementos interactivos
- ✅ Navegación secuencial lógica
- ✅ Escape para cerrar menús

### Screen Readers
- ✅ `sr-only` para texto descriptivo ("Cerrar menú")
- ✅ `aria-hidden` para iconos decorativos
- ✅ Semántica correcta con `<nav>` y `<header>`
- ✅ Roles apropiados en diálogos

### Contraste y Visibilidad
- ✅ Colores con contraste WCAG 2.1 AA
- ✅ Estados hover y focus claramente visibles
- ✅ Indicadores de página activa destacados

## 11. Performance

### Optimizaciones CSS
- Uso eficiente de utilidades Tailwind
- Transiciones hardware-accelerated
- Clases condicionales optimizadas

### Optimizaciones JavaScript
- Estado mínimo con `ref`
- Event handlers optimizados
- Lazy loading de componentes

### Navegación
- SPA routing sin recargas
- Prefetch de rutas críticas
- Backdrop blur para mejor rendimiento

## 12. Mantenimiento

### Agregar Nuevos Enlaces
```typescript
// En Header.vue
const navLinks = [
  // ... enlaces existentes
  { name: 'Nueva Sección', path: '/nueva-seccion' }
]
```

### Agregar Enlaces de Documentación
```typescript
const documentationLinks = [
  // ... enlaces existentes
  { name: 'Nueva Documentación', path: '/documentacion/nueva' }
]
```

### Modificar Estilos
- Todos los estilos usan la paleta de colores centralizada
- Modificaciones en `tailwind.config.js` se reflejan automáticamente
- Efectos hover y focus siguen patrones consistentes

## 13. Testing

### Casos de Prueba
- ✅ Navegación entre páginas
- ✅ Apertura/cierre de menú móvil
- ✅ Funcionamiento de menús desplegables
- ✅ Cambio de tema
- ✅ Estados activos de navegación
- ✅ Responsive behavior
- ✅ Accesibilidad por teclado

### Pruebas de Integración
- ✅ Funcionamiento con Vue Router
- ✅ Integración con sistema de temas
- ✅ Compatibilidad con diferentes tamaños de pantalla

---

**Última actualización:** 15 de agosto de 2025  
**Estado:** ✅ Documentación completamente actualizada y sincronizada con el código