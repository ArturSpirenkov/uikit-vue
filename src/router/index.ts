import { createRouter, createWebHistory } from 'vue-router'
import IndexComponent from '../views/IndexComponent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexComponent,
    },
  ],
})

export default router
