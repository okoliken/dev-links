import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Editor from '@/views/Editor.vue'
// @ts-ignore
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Editor',
      component: Editor,
      meta:{
        hasAccess:true
      }
    },
    {
      path: '/profile',
      name: 'Profile Details',
      // @ts-ignore
      component: () => import('../views/ProfileDetails.vue'),
      meta:{
        hasAccess:true
      }
    },
    {
      path: '/preview',
      name: 'Preview Page',
      // @ts-ignore
      component: () => import('../views/Preview.vue'),
      meta:{
        hasAccess:true
      }
    },
  ]
})

export default router
