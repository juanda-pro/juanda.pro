# Índice de la Documentación del Proyecto

Este documento es el punto de entrada central para toda la documentación del proyecto.

---

## 1. Auditorías y Planes

*   **Descripción:** Contiene todos los planes de trabajo, auditorías de código, y hojas de ruta.
*   **Ubicación:** `[01_Auditorias_y_Planes](./01_Auditorias_y_Planes/)`

---

## 2. Especificaciones de Vistas

*   **Descripción:** Documentación detallada para cada una de las vistas (páginas) de la aplicación. Describe su propósito, estructura, componentes y lógica.
*   **Ubicación:** `[02_Especificaciones_Vistas](./02_Especificaciones_Vistas/)`

### Vistas Documentadas:
*   [Inicio](./02_Especificaciones_Vistas/Inicio.md)
*   [Contacto](./02_Especificaciones_Vistas/Contacto.md)
*   [Soy](./02_Especificaciones_Vistas/Soy.md)
*   [Detalle de Artículo](./02_Especificaciones_Vistas/Artículo.md)
*   [Política de Privacidad](./02_Especificaciones_Vistas/Politica_de_Privacidad.md)
*   [Política de Cookies](./02_Especificaciones_Vistas/Politica_de_Cookies.md)
*   [Muestrario Tipográfico (Dev)](./02_Especificaciones_Vistas/Muestrario_Tipografico.md)
*   [Blog](./02_Especificaciones_Vistas/Blog.md) - *Nota: Pendiente de auditoría y validación.*

---

## 3. Contenido y Datos

*   **Descripción:** Guías de contenido, esquemas de datos y otra información relacionada con los datos que maneja la aplicación.
*   **Ubicación:** `[03_Contenido_y_Datos](./03_Contenido_y_Datos/)`

---

## 4. Componentes Reutilizables

*   **Descripción:** Documentación específica para los componentes de Vue que se reutilizan en múltiples vistas.
*   **Ubicación:** `[04_Componentes_Reutilizables](./04_Componentes_Reutilizables/)`

---

## 5. Documentación Técnica

*   **Descripción:** Documentos que describen la arquitectura, el stack tecnológico, la configuración del entorno y las guías de estilo de código.
*   **Ubicación:** `[05_Documentacion_Tecnica](./05_Documentacion_Tecnica/)`

---

## 6. Metadocumentación

*   **Descripción:** Información sobre cómo se gestiona y mantiene la propia documentación.
*   **Ubicación:** `[06_Metadocumentacion](./06_Metadocumentacion/)`

---

## 7. Auditoría de Calidad (Q3 2025)

*   **Descripción:** Hallazgos y planes de acción específicos de la auditoría de calidad realizada en el tercer trimestre de 2025.
*   **Ubicación:** `[07_Auditoria_Calidad_Q3_2025](./07_Auditoria_Calidad_Q3_2025/)`

---

## Documentos Clave en la Raíz

*   **[Hallazgos de Auditoría de Calidad de Código](./Hallazgos_Auditoria_Calidad_Codigo.md):** Registro de los problemas y mejoras identificadas durante las auditorías.
*   **[Plan Maestro del Sprint 1 (2025-07-21)](./Sprint_1_2025-07-21_Plan_Maestro.md):** Documento principal que guió el primer sprint de refactorización.

Este documento sirve como un mapa central para toda la documentación del proyecto, organizada por categorías para facilitar el acceso y la consulta.

---

## 1. Auditorías y Planes (`/01_Auditorias_y_Planes`)

Contiene todos los informes de auditoría, planes de acción y documentos de seguimiento relacionados con la revisión y mejora del código y la estructura.

- **Auditoría de Sección Interactiva.md**: Análisis detallado de las desviaciones visuales y de layout en la sección interactiva de la Home.
- **Informe de Auditoría Global - Fase 2.md**: Segundo informe de auditoría global con nuevos hallazgos y riesgos.
- **Informe de Auditoría Global.md**: Informe principal que detalla las fortalezas y áreas de mejora del frontend.
- **Informe de Auditoría.md**: Auditoría original centrada en la tipografía y componentes iniciales.
- **Informe_Estrategico_Auditoria.md**: Documento estratégico derivado de los hallazgos de la auditoría.
- **Plan de Auditoría Global.md**: Plan de acción para la auditoría global del proyecto.
- **Plan de Auditoría.md**: Plan original para la auditoría tipográfica.
- **Plan de Corrección.md**: Plan de acción para corregir los problemas identificados en la auditoría global.
- **Plan de Implementación.md**: Plan para implementar las mejoras de la auditoría tipográfica.
- **Plan de Re-Auditoría.md**: Plan para la segunda revisión exhaustiva de la auditoría inicial.

---

## 2. Especificaciones de Vistas (`/02_Especificaciones_Vistas`)

Documentación detallada para cada una de las vistas (páginas) principales de la aplicación. Describe su propósito, componentes y lógica.

- **Artículo.md**: Especificaciones de la página de detalle de un artículo del blog.
- **Blog.md**: Especificaciones de la página que lista todos los artículos del blog.
- **Contacto.md**: Especificaciones de la página del formulario de contacto.
- **Inicio.md**: Especificaciones de la página de inicio (`HomeView`).
- **Notas.md**: Especificaciones de la página de la Wiki/Notas.
- **Recursos.md**: Especificaciones de la página que lista los recursos recomendados.
- **Soy.md**: Especificaciones de la sección "Quién Soy" (`SoyView`).

---

## 3. Contenido y Datos (`/03_Contenido_y_Datos`)

Archivos que contienen el texto real del sitio web y datos de prueba.

- **Contenido.md**: Fuente única de verdad para todos los textos (copys) del sitio web.
- **articles_rows.csv**: Datos de prueba en formato CSV para los artículos del blog.

---

## 4. Documentación Técnica (`/04_Documentacion_Tecnica`)

Guías y especificaciones que definen los estándares técnicos y de estilo del proyecto.

- **Esquema de Base de Datos.md**: Descripción de la estructura de las tablas en Supabase.
- **Especificaciones_Tecnicas_Generales.md**: Requisitos técnicos generales, pautas de rendimiento y configuración del proyecto.
- **Guía de Estilo.md**: Normas sobre el estilo de código, formato y convenciones a seguir.

---

## 5. Metadocumentación (`/05_Metadocumentacion`)

Documentos sobre el proceso de desarrollo y la gestión del proyecto.

- **Bitácora.md**: Registro cronológico de decisiones, cambios y eventos importantes del proyecto.
- **Prompt_Relevo.md**: Instrucciones y contexto para la continuación del trabajo por parte de otro agente o desarrollador.
