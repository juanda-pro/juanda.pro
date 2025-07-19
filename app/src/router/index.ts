import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TypographyShowcase from '../views/TypographyShowcase.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/typography-showcase',
      name: 'typography-showcase',
      component: TypographyShowcase
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/blog/:slug',
      name: 'article-detail',
      component: () => import('../views/ArticleDetailView.vue')
    },
    // {
    //   path: '/recursos',
    //   name: 'recursos',
    //   component: () => import('../views/ResourcesView.vue')
    // },
    // {
    //   path: '/notas',
    //   name: 'notas',
    //   component: () => import('../views/NotesView.vue')
    // },
    {
      path: '/soy',
      name: 'soy',
      component: () => import('../views/SoyView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoViewV2.vue')
    },
    {
      path: '/contacto-v1',
      name: 'contacto-v1',
      component: () => import('../views/ContactoView.vue')
    },
    {
      path: '/politica-de-privacidad',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue')
    },
    {
      path: '/politica-de-cookies',
      name: 'cookies-policy',
      component: () => import('../views/CookiesPolicyView.vue')
    },
    {
      path: '/diagnostico',
      name: 'diagnostico',
      // TODO: Crear la vista para el formulario de diagnóstico
      component: () => import('../views/HomeView.vue') // Placeholder
    }
  ]
})

export default router
