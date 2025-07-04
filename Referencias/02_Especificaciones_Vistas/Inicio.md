# Especificaciones: Página de Inicio

**Versión:** 1.2
**Componente Asociado:** `app/src/views/HomeView.vue`

---

## 1. Propósito y Funcionalidad

La página de inicio (`HomeView`) es la principal puerta de entrada al sitio. Su objetivo es presentar la propuesta de valor del proyecto de forma clara y atractiva, guiando al usuario a través de varias secciones temáticas que explican la misión, presentan al autor y muestran contenido relevante.

## 2. Fuente de Datos

Esta página es **completamente estática**. Todo el contenido, como los pilares y los artículos destacados, está **hardcodeado** (escrito directamente) en el bloque `<script setup>` del componente.

- **No hay conexión a Supabase** en esta vista. Los datos no se obtienen de una base de datos externa, lo que garantiza una carga inicial muy rápida.
- **Datos Estáticos:**
    - `pilares`: Un array de objetos que define el icono, título, texto, color e imagen para cada uno de los tres pilares temáticos.
    - `articulos`: Un array de objetos que contiene los datos de los tres artículos que se muestran en la sección "Contenido Destacado".

## 3. Estructura y Componentes

La vista está construida como una secuencia de bloques, cada uno envuelto en un componente `SectionWrapper` para mantener la consistencia en el espaciado y el ancho. El orden correcto de las secciones es el siguiente:

1.  **Hero Section:**
    - **Propósito:** Captar la atención con un titular y subtítulo animados.
    - **Contenido:** Título y subtítulo principal.

2.  **Sección "Quién Soy":**
    - **Propósito:** Introducción personal del autor para generar confianza.
    - **Estructura:** Layout de dos columnas con una imagen a la izquierda y texto a la derecha.

3.  **Texto Puente:**
    - **Propósito:** Conectar la introducción con la estrategia de los tres pilares.

4.  **Sección de Pilares Temáticos:**
    - **Propósito:** Explicar la estrategia central del proyecto.
    - **Componente Clave:** `ScrollingFeatures.vue`.
    - **Lógica:** Recibe el array `pilares` y renderiza una sección interactiva con texto que se desplaza y una imagen fija que cambia.

5.  **Call to Action (CTA):**
    - **Propósito:** Dirigir al usuario a una acción de alto valor.
    - **Componente Clave:** `CtaCard.vue`.

6.  **Sección de Contenido Destacado:**
    - **Propósito:** Mostrar una selección de artículos para enganchar al lector.
    - **Componente Clave:** `MiniArticleCard.vue`.
    - **Lógica:** Itera sobre el array `articulos` para mostrar las tres tarjetas de artículos.

## 4. Lógica Reactiva

- **Ninguna.** El componente no tiene lógica reactiva compleja. El bloque `<script setup>` se utiliza únicamente para importar componentes y definir los arrays de datos estáticos que se usarán en la plantilla.
