import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Editor from '@/views/Editor.vue'
// @ts-ignore
import Login from '@/views/auth/Login.vue'
import SignupVue from '@/views/auth/Signup.vue'
// @ts-ignore
import InteractiveElement from '@/views/elements.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Editor',
      component: Editor,
      meta:{
        hasAccess:true,
         layout:"EditorLayout"
      }
    },
    {
      path: '/profile',
      name: 'Profile Details',
      // @ts-ignore
      component: () => import('../views/ProfileDetails.vue'),
      meta:{
        hasAccess:true,
         layout:"EditorLayout"
      }
    },
    {
      path: '/preview',
      name: 'Preview Page',
      // @ts-ignore
      component: () => import('../views/Preview.vue'),
      meta:{
        hasAccess:true,
        layout:"EditorLayout"
      }
    },
    {
      path:'/auth/login',
      name:'Login',
      component:Login,
      meta:{
        hasAccess:false,
        layout:"AuthLayout"
      }
    },
    {
      path:'/auth/create-account',
      name:'Signup',
      component:SignupVue,
      meta:{
        hasAccess:false,
        layout:"AuthLayout"
      }
    },
    {
      path:'/elements',
      name:'Interactive Element',
      component:InteractiveElement,
      meta:{
        hasAccess:false,
        layout:"AuthLayout"
      }
    },
  ]
})

export default router
