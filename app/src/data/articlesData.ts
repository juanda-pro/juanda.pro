// Archivo de datos local para artículos hardcodeados
// Reemplaza la conexión a Supabase para acelerar el desarrollo

export interface Article {
  id: number;
  created_at: string;
  published_at: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image_url: string;
  category: string;
  is_published: boolean;
}

// Artículos hardcodeados
export const articles: Article[] = [
  {
    id: 1,
    created_at: '2025-07-01T10:00:00Z',
    published_at: '2025-07-01T12:00:00Z',
    title: 'El mapa no es el territorio pero sin un mapa estás perdido',
    slug: 'el-mapa-no-es-el-territorio-pero-sin-un-mapa-estas-perdido-a',
    description: 'Antes de dominar la IA, necesitas dominar un superpoder mucho más antiguo y que ya posees: la capacidad de modelar el mundo.',
    content: `<p class="lead">Antes de dominar la IA, necesitas dominar un superpoder mucho más antiguo y que ya posees: la capacidad de modelar el mundo.</p>

<p><span class="underline-pink">¿Sientes que el mundo se mueve demasiado rápido?</span><br>Nuevas apps, nuevas IAs, nuevas <span class="underline-blue">"revoluciones"</span> cada semana. Es normal sentir vértigo.</p>

<p>Antes de correr a probar la última herramienta de moda, te propongo dar un paso atrás y afilar la herramienta más poderosa que tienes: tu capacidad de <span class="underline-yellow">abstracción</span>.</p>

<p><span class="underline-pink">¿Abstra-qué?</span></p>

<p>Tu capacidad <span class="underline-yellow">de</span> abstracción es la habilidad de simplificar el mundo para poder entenderlo y manejarte en él. Es coger trozos de la realidad y crear una imagen mental simplificada, un mapa.</p>

<p><span class="underline-pink">¿Y por qué debería interesarte esta habilidad?</span> Para muchísimas cosas, pero en particular, te servirá <span class="underline-yellow">para poder entender mejor</span> toda la innovación tecnológica y, lo más importante, <span class="underline-yellow">para sacarle el máximo provecho.</span></p>

<h2>El Primer Superpoder: Convertir el Mundo en Datos (Datificación)</h2>

<figure class="image-float-right"><img src="https://images.unsplash.com/photo-1750969315593-36b04578208c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Datificar la realidad nos permite entenderla y actuar sobre ella."><figcaption>Datificar la realidad nos permite entenderla y actuar sobre ella.</figcaption></figure>

<p>Imagina que eres líder de una aldea hace 5.000 años. Tu principal preocupación es que nadie pase hambre. Tienes un almacén casi lleno de grano, pero... <span class="underline-pink">¿para cuántos días alcanza? ¿Cuánto necesitas plantar en la próxima cosecha?</span></p>

<p><span class="underline-blue">"Mucho"</span> y <span class="underline-blue">"poco"</span> no son respuestas útiles. <span class="underline-yellow">Son opiniones.</span></p>

<p>Así que un día, a alguien se le ocurre una idea genial: por cada saco de grano que entra en el silo, se guarda en una caja una pequeña ficha de arcilla. De repente, empiezas a tener respuestas claras. Ya no tienes <span class="underline-blue">"mucho grano"</span>, tienes <span class="underline-yellow">"342 fichas de grano"</span>. Puedes contar, restar, planificar. Acabas de <span class="underline-yellow">datificar</span> tu inventario.</p>

<p>Ese salto mental es la base de la civilización y, aunque no lo parezca, es el mismo principio que usas hoy:</p>

<ul>
  <li><span class="underline-yellow">Conscientemente:</span>
    <ul>
      <li>Cuando anotas tus horas de trabajo, estás <span class="underline-yellow">datificando tu tiempo</span> para asegurarte de que las horas extra se pagan como es debido.</li>
      <li>Cuando registras tus gastos, estás <span class="underline-yellow">datificando tus finanzas</span> para cuidar la salud de tu bolsillo.</li>
      <li>Cuando apuntas las ideas de un libro, estás <span class="underline-yellow">datificando tu aprendizaje</span> para poder conectar conceptos más tarde.</li>
    </ul>
  </li>
  <li><span class="underline-yellow">En automático:</span>
    <ul>
      <li>Cuando usas cualquier aplicación o servicio, cuando compras algo, cuando interactúas en redes sociales, cuando navegas...</li>
    </ul>
  </li>
</ul>

<p>En la actualidad generamos datos sin parar. El problema es que rara vez nos detenemos a <span class="underline-pink">usarlos para nosotros mismos</span>. Dejamos que otros lo hagan por nosotros.</p>

<figure class="w-full mb-4 md:float-right md:w-1/2 md:ml-6"><img src="https://images.unsplash.com/photo-1749497683197-ae96f3cb92f4?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Empezar a datificar de forma consciente es el primer paso para tomar el control."><figcaption>Empezar a datificar de forma consciente es el primer paso para tomar el control.</figcaption></figure>

<p>Empezar a <span class="underline-yellow">datificar de forma consciente</span> las áreas clave de tu vida o tu negocio es el primer paso para tomar el control. No necesitas software complejo. <span class="underline-yellow">Una simple libreta es una herramienta de datificación potentísima</span>.</p>

<h2>El Segundo Superpoder: Aprovechando los datos (Modelos mentales)</h2>

<p>Vale, ya tienes datos. Tienes <span class="underline-blue">"342 fichas de grano"</span>. <span class="underline-pink">¿Y ahora qué?</span></p>

<p>Necesitas un <span class="underline-yellow">modelo mental</span> para interpretar esos datos. Un modelo podría ser: <span class="underline-blue">"Cada persona consume una ficha por día"</span>. Luego piensas: <span class="underline-blue">"somos 100 personas"</span>. Así que, basado en el modelo, concluyes: <span class="underline-blue">"estas 342 fichas nos durarán poco más de 3 días. <span class="underline-yellow">Necesitamos actuar ya.</span>"</span></p>

<p>En ese contexto, un modelo mental no es una idea filosófica. Es el <span class="underline-yellow">mapa de un proceso</span> del que depende la supervivencia de toda una aldea.</p>

<p>En el contexto que nos ocupa, son los planos que necesitas antes de empezar a construir cualquier cosa con tecnología.</p>

<p>Pensemos en modelos mentales cruciales para cualquier profesional hoy:</p>

<ul>
  <li><span class="underline-yellow">El Embudo de Ventas (Sales Funnel):</span> ¿Cómo consigues clientes? El embudo es el mapa que describe todo el proceso que lleva a alguien que no te conoce a ser tu cliente (descubrimiento, consideración, compra). Sin este plano, tus herramientas de marketing digital (anuncios, emails, CRM) son un gasto a ciegas. Con él, sabes qué acción y qué tecnología aplicar en cada etapa.</li>
  <li><span class="underline-yellow">Tu Modelo de Negocio:</span> Este es el plano maestro de un negocio. Responde a las preguntas fundamentales: <span class="underline-pink">¿Quiénes son mis clientes? ¿Qué problema les resuelvo? ¿Cómo entrego esa solución? ¿Cómo genero ingresos?</span> Herramientas como tu web, tu sistema de facturación o tu agenda solo tienen sentido cuando sirven a este modelo. Sin el plano, son piezas sueltas.</li>
  <li><span class="underline-yellow">Tu Modelo de Seguridad Digital:</span> En un mundo online lleno de riesgos, necesitas un modelo que reduzca tu vulnerabilidad en línea. Uno simple es el de <span class="underline-blue">"Defensa en Capas"</span>: una <span class="underline-pink">barrera</span> fuerte (contraseñas seguras y 2FA), un sistema de <span class="underline-pink">vigilancia</span> (estar alerta a intentos de phishing) y un <span class="underline-pink">plan de respuesta</span> (saber qué hacer si algo falla). Las herramientas (gestores de contraseñas, antivirus) son los ladrillos de tu fortaleza; este modelo son los planos.</li>
</ul>

<p>La tecnología no te da el modelo; <span class="underline-yellow">el modelo se lo das tú a la tecnología</span>. Las herramientas son amplificadores. Si amplificas el caos, obtienes más caos. Si amplificas un modelo claro y bien diseñado, obtienes resultados.</p>

<h2>Conclusión: Afilar el Hacha</h2>

<blockquote>
  <p>Dadme seis horas para cortar un árbol y pasaré las cuatro primeras afilando el hacha.</p>
</blockquote>

<p><span class="underline-blue">— Abraham Lincoln</span></p>

<figure class="image-float-left"><img src="https://images.unsplash.com/photo-1721766511218-0ad4fd4dc26b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Afilar el hacha: el trabajo previo que multiplica los resultados."><figcaption>Afilar el hacha: el trabajo previo que multiplica los resultados.</figcaption></figure>

<p>Dedicar tiempo a capturar datos relevantes y a pulir los modelos que describen cómo vas a usarlos <span class="underline-pink">es</span> afilar el hacha. Es el trabajo previo que te permite construir automatizaciones que de verdad te liberen de carga.</p>

<div class="clear-both"></div>
<ol>
  <li>Identifica tus datos clave: Mira tu día a día. Cada tarea que realizas es una mina de datos. ¿Coordinas reuniones? Los nombres de los asistentes, la duración y el tema son datos. ¿Procesas facturas? El proveedor, el importe y la fecha de vencimiento son datos cruciales. Son datos en los que te fijas para realizar tus tareas. El primer paso es aprender a verlos. Empieza por una tarea que repitas a diario y anota: ¿qué datos fundamentales contiene?</li>
  <li>Dibuja tus procesos: Ahora, coge una de esas tareas. Por ejemplo, procesar una factura. Coge un papel y un lápiz, literalmente, y dibuja el flujo: ¿Cuál es el primer paso? ¿Recibir el email? ¿Y el siguiente? ¿Descargar el PDF? ¿Extraer los datos? ¿Introducirlos en el sistema contable? ¿Archivar el email? Ese dibujo, por simple que sea, es tu modelo. Es el plano de tu futura automatización.</li>
</ol>

<p>En el próximo artículo, veremos qué pasa cuando llevamos estos datos y estos planos al ecosistema digital, y cómo construir los motores que trabajen para ti mientras duermes.</p>

<p>Pero recuerda, todo empieza aquí: en el simple y profundo acto de entender.</p>`,
    image_url: 'https://images.unsplash.com/photo-1721766511218-0ad4fd4dc26b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Productividad',
    is_published: true
  },
  // Puedes añadir más artículos aquí siguiendo la misma estructura
];

// Función para obtener un artículo por su slug
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug && article.is_published);
}

// Función para obtener todos los artículos publicados
export function getPublishedArticles(): Article[] {
  return articles.filter(article => article.is_published);
}
