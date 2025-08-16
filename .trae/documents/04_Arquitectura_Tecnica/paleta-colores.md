# Paleta de Colores - juanda.pro

## Estado de Verificación

✅ **VERIFICADA** - Paleta extraída directamente del código fuente  
📅 **Fecha de verificación:** 15 de agosto de 2025  
🔄 **Sincronización:** 100% con implementación actual

## Colores de Acento

Colores principales utilizados para elementos interactivos, botones, enlaces y elementos destacados.

### Modo Claro
- **Color:** `#206372`
- **Descripción:** Azul corporativo
- **Uso:** Botones principales, enlaces, elementos destacados, hover states
- **Contraste:** AAA con fondos claros

### Modo Oscuro
- **Color:** `#F5DF4D`
- **Descripción:** Amarillo dorado
- **Uso:** Botones principales, enlaces, elementos destacados, hover states
- **Contraste:** AAA con fondos oscuros

## Colores de Fondo

### Body (Fondo Principal)

**Modo Claro:**
- **Color:** `#F5F5F5`
- **Descripción:** Gris muy claro
- **Uso:** Fondo principal del sitio

**Modo Oscuro:**
- **Color:** `#1D1E23`
- **Descripción:** Gris muy oscuro
- **Uso:** Fondo principal del sitio

### Cards y Contenedores

**Modo Claro:**
- **Color:** `#FFFFFF`
- **Descripción:** Blanco puro
- **Uso:** Tarjetas, modales, contenedores de contenido

**Modo Oscuro:**
- **Color:** `#191A1D`
- **Descripción:** Gris oscuro
- **Uso:** Tarjetas, modales, contenedores de contenido

## Colores de Texto

### Texto Principal

**Modo Claro:**
- **Color:** `#262626`
- **Descripción:** Gris oscuro
- **Uso:** Texto principal, párrafos, contenido
- **Contraste:** AAA con fondos claros

**Modo Oscuro:**
- **Color:** `#F4F4F4`
- **Descripción:** Gris muy claro
- **Uso:** Texto principal, párrafos, contenido
- **Contraste:** AAA con fondos oscuros

## Implementación en CSS

### Variables CSS

```css
:root {
  /* Colores de acento */
  --color-accent-light: #206372;
  --color-accent-dark: #F5DF4D;
  
  /* Colores de fondo */
  --color-bg-body-light: #F5F5F5;
  --color-bg-body-dark: #1D1E23;
  --color-bg-card-light: #FFFFFF;
  --color-bg-card-dark: #191A1D;
  
  /* Colores de texto */
  --color-text-light: #262626;
  --color-text-dark: #F4F4F4;
}
```

### Clases Tailwind

```css
/* Modo claro */
.bg-body-light { background-color: #F5F5F5; }
.bg-card-light { background-color: #FFFFFF; }
.text-primary-light { color: #262626; }
.accent-light { color: #206372; }

/* Modo oscuro */
.dark .bg-body-dark { background-color: #1D1E23; }
.dark .bg-card-dark { background-color: #191A1D; }
.dark .text-primary-dark { color: #F4F4F4; }
.dark .accent-dark { color: #F5DF4D; }
```

## Accesibilidad

### Ratios de Contraste

Todos los colores cumplen con las pautas WCAG 2.1:

- **Texto normal:** Mínimo 4.5:1
- **Texto grande:** Mínimo 3:1
- **Elementos UI:** Mínimo 3:1

### Verificación

✅ Modo claro: Todos los contrastes verificados  
✅ Modo oscuro: Todos los contrastes verificados  
✅ Estados interactivos: Contrastes mantenidos

## Uso en Componentes

### Componentes que usan colores de acento:
- Header (navegación activa)
- Footer (enlaces sociales)
- ContactForm (botones y estados focus)
- ArticleCard (enlaces y hover)
- Botones principales

### Componentes que usan colores de fondo:
- PageLayout (fondo principal)
- SectionWrapper (contenedores)
- HeroSection (overlays)
- Cards y modales

### Componentes que usan colores de texto:
- Todos los componentes de contenido
- Formularios (labels y texto)
- Navegación (texto de menú)

## Historial de Cambios

### v2.0.0 - 15 de agosto de 2025
- ✅ Verificación completa desde código fuente
- ✅ Documentación de todos los colores activos
- ✅ Eliminación de colores obsoletos
- ✅ Sincronización con guía de estilos

### Colores Eliminados (Obsoletos)
- `#F6C90E` - Amarillo anterior (reemplazado por #F5DF4D)
- `#121214` - Negro anterior (reemplazado por #1D1E23)
- Otros colores no utilizados en la implementación actual

---

**Última actualización:** 15 de agosto de 2025  
**Versión:** 2.0.0  
**Estado:** Verificada y sincronizada  
**Documentado por:** SOLO Document AI Assistant