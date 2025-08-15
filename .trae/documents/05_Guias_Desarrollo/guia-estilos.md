# Guía de Estilos - juanda.pro

## 1. Paleta de Colores

### Colores de Acento
Colores principales utilizados para elementos destacados, botones, enlaces y elementos interactivos.

**Modo Claro:**
- Color primario: `#206372` (azul corporativo)
- Uso: Botones principales, enlaces, elementos destacados

**Modo Oscuro:**
- Color primario: `#F5DF4D` (amarillo dorado)
- Uso: Botones principales, enlaces, elementos destacados

### Colores de Fondo

**Body (Fondo principal):**
- Modo Claro: `#F5F5F5` (gris muy claro)
- Modo Oscuro: `#1D1E23` (gris muy oscuro)

**Cards y Contenedores:**
- Modo Claro: `#FFFFFF` (blanco)
- Modo Oscuro: `#191A1D` (gris oscuro)

### Colores de Texto

**Texto Principal:**
- Modo Claro: `#262626` (gris oscuro)
- Modo Oscuro: `#F4F4F4` (gris muy claro)

## 2. Tipografía

### Fuentes Principales
- **Familia:** Inter (sistema de fuentes moderno)
- **Fallback:** system-ui, -apple-system, sans-serif

### Jerarquía Tipográfica

**Títulos Principales (H1):**
- Tamaño: 2.5rem (40px)
- Peso: 700 (Bold)
- Altura de línea: 1.2

**Subtítulos (H2):**
- Tamaño: 2rem (32px)
- Peso: 600 (Semi-bold)
- Altura de línea: 1.3

**Títulos de Sección (H3):**
- Tamaño: 1.5rem (24px)
- Peso: 600 (Semi-bold)
- Altura de línea: 1.4

**Texto Cuerpo:**
- Tamaño: 1rem (16px)
- Peso: 400 (Regular)
- Altura de línea: 1.6

**Texto Pequeño:**
- Tamaño: 0.875rem (14px)
- Peso: 400 (Regular)
- Altura de línea: 1.5

## 3. Espaciado y Layout

### Sistema de Espaciado
Basado en múltiplos de 8px para consistencia:

- **xs:** 4px (0.25rem)
- **sm:** 8px (0.5rem)
- **md:** 16px (1rem)
- **lg:** 24px (1.5rem)
- **xl:** 32px (2rem)
- **2xl:** 48px (3rem)
- **3xl:** 64px (4rem)

### Contenedores

**Ancho Máximo:**
- Contenido principal: 1200px
- Contenido de artículos: 800px
- Formularios: 600px

**Padding Lateral:**
- Desktop: 2rem (32px)
- Tablet: 1.5rem (24px)
- Mobile: 1rem (16px)

## 4. Componentes UI

### Botones

**Botón Primario:**
- Fondo: Color de acento según modo
- Texto: Blanco en modo claro, negro en modo oscuro
- Padding: 12px 24px
- Border-radius: 8px
- Transición: 0.2s ease

**Botón Secundario:**
- Fondo: Transparente
- Borde: 2px solid (color de acento)
- Texto: Color de acento
- Padding: 10px 22px
- Border-radius: 8px

### Cards

**Estilo Base:**
- Fondo: Color de card según modo
- Border-radius: 12px
- Box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
- Padding: 24px
- Transición: 0.3s ease

**Hover State:**
- Transform: translateY(-2px)
- Box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15)

### Formularios

**Inputs:**
- Border: 2px solid #E5E5E5
- Border-radius: 8px
- Padding: 12px 16px
- Focus: Border color cambia a color de acento

**Labels:**
- Peso: 500 (Medium)
- Margin-bottom: 8px
- Color: Texto principal

## 5. Responsive Design

### Breakpoints

```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Adaptaciones por Dispositivo

**Mobile (< 640px):**
- Navegación: Menú hamburguesa
- Tipografía: Reducir tamaños 10-15%
- Espaciado: Reducir padding y margins

**Tablet (640px - 1024px):**
- Layout: 2 columnas máximo
- Navegación: Híbrida

**Desktop (> 1024px):**
- Layout: Múltiples columnas
- Navegación: Completa horizontal

## 6. Estados Interactivos

### Hover
- Transición: 0.2s ease
- Cambio sutil de color o elevación

### Focus
- Outline: 2px solid color de acento
- Outline-offset: 2px

### Active
- Transform: scale(0.98)
- Duración: 0.1s

### Disabled
- Opacity: 0.5
- Cursor: not-allowed

## 7. Modo Oscuro

### Implementación
- Detección automática de preferencia del sistema
- Toggle manual disponible
- Persistencia en localStorage

### Consideraciones
- Contraste mínimo: 4.5:1 para texto normal
- Contraste mínimo: 3:1 para texto grande
- Transiciones suaves entre modos

## 8. Iconografía

### Estilo
- Líneas: 2px de grosor
- Estilo: Outline/stroke
- Tamaños estándar: 16px, 20px, 24px, 32px

### Uso
- Consistencia en el grosor de línea
- Alineación con texto base
- Color: Hereda del elemento padre

---

**Última actualización:** 15 de agosto de 2025  
**Versión:** 2.0.0  
**Estado:** Sincronizada con paleta verificada  
**Documentado por:** SOLO Document AI Assistant