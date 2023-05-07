// Composables
import { createRouter, createWebHistory } from 'vue-router'
import IndexVue from '@/views/Index.vue'
import Actions from '@/views/Actions.vue'

const routes = [
  {
    path: '/',
    name: 'Actions',
    meta: {
      hasMenu: true,
      color: '#F9B506',
      icon: 'fas fa-regular fa-bolt',
    },
    component: IndexVue
  },
  {
    path: '/actions',
    name: 'Add actions',
    meta: {
      icon: 'fas fa-regular fa-bolt',
      to: '/'
    },
    component: Actions
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
