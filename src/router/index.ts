import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search',
      component: () => import('@/modules/SearchProduct.vue'),
    },
    {
      path: '/results',
      name: 'search-result',
      component: () => import('@/modules/SearchResult.vue'),
    },
  ],
});

export default router;
