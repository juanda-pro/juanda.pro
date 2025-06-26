# Especificaciones de Diseño y UX: Notas (Diseño Wiki v2)

Este documento detalla el comportamiento y la maquetación de la página de Notas (`/notas`), implementada bajo el **Plan C: "Arquitectura Component-Driven"**.

---

## 1. Visión General y Estructura

La página utiliza un layout de dos columnas para emular una aplicación de documentación moderna.

- **Layout General:**
  1.  **Cabecera:** Título y descripción de la sección.
  2.  **Columna Izquierda (Sidebar):** Un menú de navegación colapsable.
  3.  **Columna Derecha (Content):** Un área de contenido con estética de "papel".

---

## 2. Desglose de Componentes y Comportamiento

### 2.1. Vista Principal (`NotesView.vue`)

- **Gestión de Estado:** Orquesta el estado de la interfaz, incluyendo si el menú está colapsado (`isSidebarCollapsed`) y cuál es el archivo activo (`activeFileId`).
- **Responsive:** Utiliza la librería `@vueuse/core` para detectar el tamaño de la pantalla. En dispositivos móviles (`<768px`), el menú se carga colapsado por defecto.
- **Estructura de Contenido:** Define la estructura de carpetas y archivos en el `wikiTree`. Las carpetas principales son: `Conceptos`, `Proyectos`, `Sistemas` y `Procedimientos`.
- **Nota de Bienvenida:** El archivo por defecto es "🗄️ Empieza aquí".

### 2.2. Barra Lateral (`WikiSidebar.vue`)

- **Funcionalidad Colapsable:**
  - El menú puede colapsarse a una barra de 48px o expandirse a 256px.
  - La animación es de tipo `ease-in-out` para una sensación fluida y "eléctrica".
  - Un botón de control (`<Bars3Icon>`) permite al usuario alternar el estado.
- **Contraste del Elemento Activo:**
  - Para garantizar máxima legibilidad (Contraste AAA), el archivo seleccionado utiliza una combinación de colores invertida:
    - **Modo Claro:** Fondo `slate-800` con texto `white`.
    - **Modo Oscuro:** Fondo `slate-200` con texto `slate-900`.
- **Interacción:** Al seleccionar un archivo en móvil, el menú se colapsa automáticamente para dar protagonismo al contenido.

### 2.3. Área de Contenido (`WikiContent.vue`)

- **Estética de "Papel":**
  - El contenedor principal tiene un fondo (`bg-white` / `dark:bg-slate-800/30`), esquinas redondeadas, un borde sutil y una sombra suave.
  - Este conjunto de estilos lo diferencia del fondo de la página, dándole la apariencia de una hoja de papel o un documento físico.
- **Legibilidad:** Mantiene el uso de las clases `prose` de Tailwind para un formato de texto limpio y estético.

### 2.4. Guía de Onboarding (`OnboardingHint.vue`)

- **Propósito:** Mejorar la experiencia de usuario en la primera visita desde un móvil.
- **Comportamiento:**
  - Es un componente de notificación (callout) que aparece solo en pantallas pequeñas.
  - Utiliza `localStorage` para mostrarse una única vez por usuario.
  - Invita al usuario a interactuar con el botón del menú para descubrir la navegación.