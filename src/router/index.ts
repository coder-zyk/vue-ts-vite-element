import { createRouter, createWebHistory } from 'vue-router'

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
          meta: {
            title: 'form-design'
          },
          component: () => import('@/views/form/index.vue')
        }
      ],
    },
    {
      path: '/flow',
      name: 'flow',
      meta: {
        title: 'flow-design'
      },
      component: () => import('@/views/flow/index.vue')
    },
  ]
})
router.beforeEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
})
export default router
