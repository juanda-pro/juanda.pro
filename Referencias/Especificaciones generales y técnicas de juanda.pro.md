# Especificaciones Generales y Técnicas: juanda.pro

**Versión:** 1.0 (Fase de Maquetación)
**Última actualización:** {{DATE}}

---

## 1. Fuentes de la Verdad

Este proyecto se rige por una serie de documentos clave que actúan como la única fuente de la verdad. Cualquier duda sobre un aspecto del proyecto debe resolverse consultando el documento correspondiente:

- **Especificaciones Generales y Técnicas (este documento):** Visión global, stack tecnológico y principios de alto nivel.
  - `Ruta: /Referencias/Especificaciones generales y técnicas de juanda.pro.md`
- **Contenido Textual:** Única fuente de la verdad para todos los textos del sitio.
  - `Ruta: /Referencias/Textos actuales del website.md`
- **Bitácora del Proyecto:** Registro histórico de decisiones, problemas y tareas resueltas.
  - `Ruta: /Referencias/Bitácora.md`
- **Esquema de Base de Datos:** Definición de todas las tablas y campos en Supabase.
  - `Ruta: /Referencias/Esquema de Base de Datos.md`
- **Guía de Estilo:** Definición de la paleta de colores, tipografía y sistema de diseño.
  - `Ruta: /Referencias/Guía de Estilo.md`
- **Especificaciones por Página:** Documentos individuales con los detalles de diseño, comportamiento y UX de cada página.
  - `Ruta: /Referencias/Inicio.md`
  - `Ruta: /Referencias/Blog.md`
  - `Ruta: /Referencias/Artículo.md`
  - `Ruta: /Referencias/Recursos.md`
  - `Ruta: /Referencias/Notas.md`
  - `...y resto de páginas`

---

## 2. Visión del Proyecto

**juanda.pro** es una plataforma digital que combina tecnología y desarrollo humano con una estética **minimalista, elegante y veloz**. El objetivo a corto plazo es lanzar un sitio web personal con un blog y secciones de contenido curado. La visión a largo plazo es evolucionar hacia una **plataforma de e-learning** con funcionalidades avanzadas como cuentas de usuario y contenido personalizado.

---

## 3. Stack Tecnológico

| Capa | Elección | Motivo |
|---|---|---|
| **Frontend** | Vue 3 + Vite + TailwindCSS | Prototipado rápido, rendimiento y un ecosistema moderno para crear componentes. |
| **Backend & DB** | Supabase | Solución todo-en-uno que proporciona base de datos, autenticación y APIs, simplificando la infraestructura. |
| **Hosting** | Vercel | Despliegue continuo (CI/CD) de primer nivel, optimizado para frameworks de JavaScript como Vue. |
| **Automatización** | n8n (webhook) | Para gestionar la lógica de backend de los formularios (contacto, newsletter) de forma desacoplada. |

---

## 4. Rendimiento y Accesibilidad

- **Core Web Vitals (Objetivos):** LCP ≤ 1.8s, INP ≤ 200ms, CLS ≤ 0.1.
- **Presupuesto de JavaScript:** ≤ 150 KB (gzipped) para la carga inicial. Usar importaciones dinámicas para vistas no críticas.
- **Imágenes:** Optimización automática a formatos modernos (AVIF/WebP), uso de `srcset` y `loading="lazy"`.
- **Accesibilidad:** Contraste mínimo AA, navegación completa por teclado y respeto por `prefers-reduced-motion`.

---

## 5. Principios de Diseño y UX

- **Minimalismo Funcional:** Cada elemento debe tener un propósito. Espacios amplios, jerarquías claras y foco en el contenido.
- **Modo Claro/Oscuro:** Obligatorio, con transiciones suaves y coherencia en toda la interfaz.
- **Interacciones Sutiles:** Las animaciones y transiciones deben mejorar la experiencia, no distraer (ej. escalado en hover de tarjetas).
- **Rendimiento:** El sitio debe ser extremadamente rápido. Optimización de imágenes, carga diferida y un presupuesto de JavaScript controlado son claves.
- **Accesibilidad:** Contraste de color adecuado, navegación por teclado completa y respeto por las preferencias del usuario (`prefers-reduced-motion`).

---

## 6. Protocolos para Agentes

Estos protocolos deben seguirse para garantizar la coherencia y la calidad del trabajo. **Solo se ejecutan cuando el usuario lo solicite explícitamente.**

- **Protocolo 1: Puesta en Marcha**
  - Al inicio de cada sesión, el agente debe revisar toda la documentación de referencia relevante para ponerse al día con el proyecto. Al finalizar, debe ejecutar el comando `npm run dev` para levantar el servidor de desarrollo local.

- **Protocolo 2: Sincronización de Fuentes de la Verdad**
  - Este protocolo se activa para asegurar que la documentación en la carpeta `/Referencias` refleja fielmente la realidad del código y las decisiones tomadas.
  - **Pasos:**
    1. **Análisis:** El agente realiza una lectura exhaustiva de todos los documentos en `/Referencias`.
    2. **Comparación:** Cruza la información de la documentación con el estado actual del código fuente, el contenido del documento plan de trabajo y el historial de la conversación.
    3. **Conclusiones:** Identifica discrepancias, información obsoleta o ausente.
    4. **Consulta:** Formula una batería de preguntas claras y concisas al usuario para validar los hallazgos y resolver ambigüedades.
    5. **Ejecución:** Una vez obtenidas las respuestas, el agente actualiza la documentación para que sea un reflejo 1:1 del estado actual del proyecto.

- **Protocolo 3: Cierre de Sesión y Relevo**
  - Este protocolo se ejecuta para concluir una sesión de trabajo, dejando un entorno limpio y preparado para la siguiente sesión o para un agente de relevo.
  - **Pasos:**
    1. **Análisis:** El agente revisa el estado actual del proyecto y la documentación de referencia.
    2. **Migración a Bitácora:** Todos los bloques de `Problema/Tareas` que hayan sido completados en la sección `Sesión de trabajo` del plan se mueven al archivo `Bitácora.md`.
    3. **Consulta de Relevo:** El agente pregunta al usuario cuáles son las próximas prioridades o tareas a abordar en la siguiente sesión.
    4. **Actualización del Plan:** Se limpia la sección `Sesión de trabajo` del plan y se añaden los nuevos bloques de `Problema/Tareas` según las prioridades indicadas por el usuario.
    5. **Generación de Prompt de Relevo:** El agente genera un prompt conciso que el usuario puede utilizar para poner en situación al siguiente agente, resumiendo el último estado y las tareas pendientes.
