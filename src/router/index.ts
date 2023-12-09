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

  // {
  //   path: '/',
  //   component: () => import('@/components/Dashboard.vue'),
  // },
  // {
  //   path: '/campaigns',
  //   component: () => import('@/components/campaign/CampaignList.vue'),
  // },

  {
    path: '/',
    component: () => import('@/layouts/App.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/campaigns',
        name: 'Campaigns',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/campaign/CampaignList.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
