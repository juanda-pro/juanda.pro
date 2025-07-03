# Especificaciones: Cuaderno Digital (Notas)

**Versión:** 1.2
**Componente Asociado:** `app/src/views/NotesView.vue`

---

## 1. Propósito y Funcionalidad

Esta vista funciona como una aplicación de wiki o "segundo cerebro" público. Presenta una interfaz de dos columnas con una barra de navegación lateral (archivos y carpetas) y un panel de contenido principal. Su objetivo es organizar y mostrar conocimiento de forma estructurada.

## 2. Fuente de Datos

Esta página es **completamente estática**. Toda la estructura de archivos, carpetas y el contenido de cada nota están **hardcodeados** en un array de objetos dentro del componente `NotesView.vue`.

- **Variable Clave:** `wikiTree`.
- **No hay conexión a Supabase:** Los datos no se obtienen de una base de datos. Esto asegura que la sección sea extremadamente rápida y no dependa de una conexión de red.
- **Contenido Markdown:** El contenido de cada "archivo" se almacena como una cadena de texto con formato **Markdown** en la propiedad `content` de cada objeto.

## 3. Estructura y Componentes

La vista `NotesView.vue` actúa como un orquestador para varios componentes especializados que construyen la interfaz de la wiki.

1.  **`OnboardingHint.vue`:**
    - Un mensaje de ayuda que aparece en la primera visita (controlado por `localStorage`) para guiar a los usuarios, especialmente en dispositivos móviles.

2.  **Cabecera:**
    - Un título (`<h1>`) y un subtítulo que presentan la sección.

3.  **`WikiLayout.vue`:**
    - Componente estructural que define el layout de dos columnas (sidebar y content) y gestiona la comunicación entre ellas mediante eventos.

4.  **`WikiSidebar.vue` (slot `sidebar`):**
    - Renderiza la estructura de archivos y carpetas a partir del `wikiTree`.
    - Muestra visualmente cuál es el archivo activo.
    - Emite un evento (`@select-file`) cuando el usuario hace clic en un archivo.

5.  **`WikiContent.vue` (slot `content`):**
    - Recibe el objeto del archivo activo (`activeFile`).
    - **Procesa el contenido Markdown:** Utiliza la librería `marked` para convertir la cadena de Markdown del archivo a HTML.
    - Muestra el título, los metadatos y el contenido renderizado (usando `v-html`).
    - Gestiona la visualización de relaciones entre notas, permitiendo la navegación cruzada.

## 4. Lógica Reactiva (`NotesView.vue`)

La lógica de la vista se centra en gestionar qué archivo se está mostrando actualmente.

- **`wikiTree` (ref):** Almacena la estructura completa de la wiki.
- **`activeFileId` (ref):** Guarda el `id` del archivo que está seleccionado. Se inicializa en `'onboarding'` para mostrar la bienvenida.
- **`activeFile` (computed):** Una propiedad computada que busca y devuelve el objeto completo del archivo activo dentro del `wikiTree` cada vez que `activeFileId` cambia.
- **`handleSelectFile(fileId)` (método):** Función que se ejecuta cuando el usuario selecciona un archivo en el `WikiSidebar`. Su única responsabilidad es actualizar el valor de `activeFileId`.