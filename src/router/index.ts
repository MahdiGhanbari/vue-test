// Composables
import { createRouter, createWebHistory } from 'vue-router'
import IndexVue from '@/views/Index.vue'
import Actions from '@/views/Actions.vue'
import Action from '@/views/Action.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      hasMenu: true,
      color: '#F9B506',
      icon: 'fas fa-regular fa-bolt',
    },
    component: IndexVue
  },
  {
    path: '/actions',
    name: 'Actions',
    meta: {
      title: 'Add actions',
      icon: 'fas fa-regular fa-bolt',
      prevStep: 'Home'
    },
    component: Actions
  },
  {
    path:'/actions/:name',
    name: 'Action',
    meta: {
      
    },
    component: Action
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
