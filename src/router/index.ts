// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/sign-in',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Sign-in',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/auth/SignIn.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/App.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
