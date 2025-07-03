# Auditoría Visual y de Layout: Sección Interactiva

Este documento detalla las desviaciones visuales y de layout entre la sección "Una estrategia para navegar el presente" en `juanda.pro` y la sección de referencia "One hub for answers, docs, and updates" en el sitio de Guru.

## Hallazgos de la Auditoría

## Hallazgos de la Auditoría (Desktop)

1.  **Espaciado Vertical Excesivo:**
    *   **Observación:** El uso combinado de `space-y-48` en el contenedor de los pilares y `min-h-[80vh]` en cada panel de texto individual genera un espacio vertical desproporcionado entre los bloques de contenido.
    *   **Impacto:** El usuario debe realizar un scroll excesivo y en gran parte vacío para pasar de un pilar a otro, lo que degrada la experiencia y la fluidez de la interacción en comparación con la referencia de Guru, que es mucho más compacta.

2.  **Alineación Vertical de Columnas:**
    *   **Observación:** La columna de texto y la columna de la imagen/icono no están alineadas verticalmente de forma coherente. La columna de la imagen (`sticky-container`) ocupa toda la altura de la pantalla (`h-screen`), mientras que la de texto tiene un padding vertical (`py-24`).
    *   **Impacto:** Se produce un desequilibrio visual. La referencia de Guru muestra ambas columnas perfectamente centradas y alineadas entre sí, creando una composición más armoniosa.

3.  **Gap Horizontal entre Columnas:**
    *   **Observación:** La clase `gap-16` (64px) establece una separación considerable entre la columna de texto y la de la imagen.
    *   **Impacto:** Aunque es una decisión de diseño, este espaciado podría ser mayor que el de la referencia, debilitando la conexión visual entre el texto y la imagen que lo acompaña.

4.  **Dimensiones y Padding del Contenedor de la Imagen:**
    *   **Observación:** El contenedor de la imagen (`sticky-container`) está configurado para centrar su contenido, pero el padding y el tamaño máximo (`max-w-md`) deben ser revisados para asegurar que la imagen se escala y se posiciona de forma idéntica a la referencia en diferentes anchos de pantalla.

5.  **Estilos Tipográficos:**
    *   **Observación:** Los estilos de los títulos (`text-4xl`, `mb-6`) y los párrafos (`text-lg`, `leading-relaxed`) son aproximaciones. No se ha realizado una inspección de los estilos computados en la web de referencia para replicarlos con exactitud.
    *   **Impacto:** Las pequeñas diferencias en tamaño, peso y espaciado de la tipografía afectan a la fidelidad visual del diseño.

## Plan de Corrección Propuesto

A continuación se detalla un plan de acción para alinear el componente `ScrollingFeatures.vue` con la referencia de Guru, buscando una réplica "pixel-perfect".

### Plan de Corrección (Desktop)

1.  **Corregir Espaciado Vertical:**
    *   **Acción:** Eliminar la clase `space-y-48` del contenedor de la columna de texto.
    *   **Acción:** Reemplazar la clase `min-h-[80vh]` en `.feature-text-panel` por `min-h-screen`.
    *   **Justificación:** Esto hará que cada panel de texto ocupe la altura completa de la ventana gráfica, creando transiciones de scroll más compactas y directas, eliminando el espacio muerto.

2.  **Alinear Columnas Verticalmente:**
    *   **Acción:** Eliminar la clase `py-24` del contenedor de la columna de texto.
    *   **Acción:** Asegurarse de que tanto la columna de texto como la de la imagen (`.sticky-container`) estén directamente dentro del `grid` y que ambas tengan una altura implícita o explícita de `100%` o `h-screen` para que se alineen correctamente.
    *   **Justificación:** Se busca que ambas columnas compartan el mismo espacio vertical de referencia para lograr la composición balanceada de la web de Guru.

3.  **Ajustar Gap Horizontal:**
    *   **Acción:** Reducir el espaciado entre columnas cambiando `gap-16` por `gap-12` o `gap-10`.
    *   **Justificación:** Acercar visualmente el texto a la imagen para fortalecer su conexión conceptual.

4.  **Refinar Tipografía:**
    *   **Acción:** En el título (`h3`), cambiar `text-4xl` por `text-5xl` y `mb-6` por `mb-8`.
    *   **Acción:** En el párrafo (`p`), cambiar `text-lg` por `text-xl` y `leading-relaxed` por `leading-loose`.
    *   **Justificación:** Replicar con mayor fidelidad el tamaño, peso y aire de la tipografía de la referencia, mejorando la legibilidad y el impacto visual.

---

## Hallazgos y Plan de Corrección (Móvil)

1.  **Clases de Color Obsoletas:**
    *   **Observación:** La vista móvil utiliza clases de color no semánticas (`text-primary`, `text-secondary`) que no son compatibles con el sistema de modo claro/oscuro del resto del sitio.
    *   **Impacto:** Inconsistencia visual y mal funcionamiento del modo oscuro en esta sección específica en dispositivos móviles.
    *   **Plan de Corrección:** Reemplazar `text-primary` por `text-primary-light dark:text-primary-dark` y `text-secondary` por `text-secondary-light dark:text-secondary-dark` para alinearla con el sistema de diseño global.
