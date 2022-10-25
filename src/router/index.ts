import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/form',
      children: [
        {
          name: 'form',
          path: '/form',
          component: () => import('@/views/form/index.vue')
        }
      ],
    },
    {
      path: '/flow',
      name: 'flow',
      component: () => import('@/views/flow/index.vue')
    },
  ]
})

export default router
