# Especificaciones: Detalle de Artículo

**Versión:** 1.2
**Componente Asociado:** `src/views/ArticleDetailView.vue`

---

## 1. Propósito y Funcionalidad

Esta vista renderiza un artículo de blog completo a partir de un `slug` dinámico en la URL. Su objetivo es ofrecer una experiencia de lectura inmersiva con tipografía cuidada y una estructura clara.

## 2. Fuente de Datos y Estado Actual (¡CRÍTICO!)

**ALERTA:** Existe una grave inconsistencia en la obtención de datos que debe ser resuelta.

- **Implementación Actual:** Los datos de los artículos están **hardcodeados** en un array estático dentro del componente. El componente busca el artículo en este array usando el `slug` de la URL.
- **El Problema:** La vista `BlogView.vue` (la lista de artículos) **SÍ** carga los datos desde Supabase. Esto provoca que cualquier artículo nuevo o actualizado en la base de datos aparezca en la lista, pero al hacer clic, esta vista (`ArticleDetailView.vue`) mostrará una página de "Artículo no encontrado" porque no existe en su array estático local. **Esto rompe la funcionalidad principal del blog.**

## 3. Plan de Corrección (Conexión a Supabase)

Para solucionar la inconsistencia, se deben seguir los siguientes pasos:

1.  **Eliminar el Array Estático:** Borrar por completo la variable `articles` que contiene los datos hardcodeados.
2.  **Implementar `fetchArticleBySlug`:** Crear una función asíncrona que reciba el `slug` de la ruta como parámetro.
3.  **Consulta a Supabase:** Dentro de la función, realizar una consulta a la tabla `articles` para obtener un único resultado donde la columna `slug` coincida con el `slug` proporcionado.
    ```javascript
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', route.params.slug)
      .single(); // .single() es crucial para obtener un solo objeto
    ```
4.  **Gestión de Estado:** Implementar variables reactivas para `isLoading` y `errorMessage`, tal como se hace en `BlogView.vue`, para dar feedback al usuario durante la carga o si ocurre un error.
5.  **Llamada a la Función:** Usar `onMounted` y `watch` sobre `route.params.slug` para llamar a `fetchArticleBySlug` cuando el componente se carga o cuando la ruta cambia (por ejemplo, al navegar a un artículo sugerido).

## 4. Estructura y Estilizado

- **Bloques:** La página se compone de cabecera, imagen destacada, cuerpo del contenido y una sección de artículo sugerido.
- **Renderizado de Contenido:** El cuerpo del artículo (`article.content`) se renderiza usando `v-html`.
- **Estilo de Prosa:** Se utiliza `@tailwindcss/typography` (clase `prose`) con múltiples personalizaciones para elementos como la letra capital, títulos `h2`/`h3`, citas `blockquote` y subrayados decorativos, creando una experiencia de lectura rica y de marca.
