import { ref, onMounted } from 'vue';
import { getPublishedArticles } from '@/data/articlesData';
import { MapIcon, ScaleIcon, BoltIcon } from '@heroicons/vue/24/outline';

interface Article {
  slug: string;
  title: string;
  category: string;
  image_url: string;
  published_at: string;
  description?: string;
}

interface Pilar {
  icon: any;
  title: string;
  text: string;
  colorClass: string;
  image_url: string;
}

export function useHomeData() {
  const recentArticles = ref<Article[]>([]);

  const fetchRecentArticles = () => {
    try {
      // Usar datos locales en lugar de Supabase
      const articles = getPublishedArticles();
      
      // Ordenar por fecha de publicación (más reciente primero)
      articles.sort((a, b) => {
        return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
      });
      
      // Limitar a 3 artículos
      recentArticles.value = articles.slice(0, 3);
    } catch (error) {
      // Error handling could be implemented here with user feedback
    }
  };

  const pilares: Pilar[] = [
    {
      icon: MapIcon,
      title: 'Dibuja tu mapa',
      text: '<strong>Empieza por explorar el terreno:</strong> conoce las herramientas disponibles y céntrate en aquellas que te pueden apoyar en tu día a día. Por fortuna <em>hay muchas personas compartiendo</em> sus experiencias, tutoriales y más. <strong>Explora con foco para no distraerte</strong> con novedades llamativas y elige solo lo que encaje contigo.',
      colorClass: 'text-accent-info-dark',
      image_url: 'https://placehold.co/600x600/a78bfa/ffffff?text=Pilar+1'
    },
    {
      icon: ScaleIcon,
      title: 'Localízate en él',
      text: 'Una vez tengas tu primer boceto del mapa, <strong>marca tu posición</strong>: identifica tus tareas diarias, tus necesidades y objetivos. Necesitas claridad sobre tus procesos cotidianos, <strong>tomar apuntes te irá bien.</strong> <em>Identifica las tecnologías que realmente te sirven</em> y <strong>descubre que tienes que hacer</strong> para ponerlas a tu servicio.',
      colorClass: 'text-accent-primary-light dark:text-accent-primary-dark',
      image_url: 'https://placehold.co/600x600/f6c90e/121214?text=Pilar+2'
    },
    {
      icon: BoltIcon,
      title: 'Emprende el viaje',
      text: 'Ahora que tienes un mapa y tu ubicación aproximada, avanza: <strong>empieza a automatizar tareas simples</strong>, <em>experimenta con la iA</em> para crear flujos aún más complejos... <strong>No tengas miedo a equivocarte</strong>, es algo que tiene que ocurrir, forma parte natural del proceso de aprendizaje. Así que <em>equivócate rápido y ajusta sobre la marcha.</em>',
      colorClass: 'text-accent-error',
      image_url: 'https://placehold.co/600x600/dc2626/ffffff?text=Pilar+3'
    }
  ];

  onMounted(() => {
    fetchRecentArticles();
  });

  return {
    recentArticles,
    pilares,
    fetchRecentArticles
  };
}