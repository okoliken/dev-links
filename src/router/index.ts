import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import DevEditor from '@/views/DevEditor.vue'
// @ts-ignore
import Login from '@/views/auth/Login.vue'
import SignupVue from '@/views/auth/Signup.vue'
// @ts-ignore
import InteractiveElement from '@/views/elements.vue'
import ProfileDetailsVue from '../views/ProfileDetails.vue'
import EditorLayout from '../layouts/EditorLayout.vue'
import AuthLayoutVue from '@/layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Editor',
      component: DevEditor,
      meta:{
        hasAccess:true,
         layout:EditorLayout
      }
    },
    {
      path: '/profile',
      name: 'Profile Details',
      // @ts-ignore
      component: () => import('../views/ProfileDetails.vue'),
      meta:{
        hasAccess:true,
         layout:EditorLayout
      }
    },
    {
      path: '/preview',
      name: 'Preview Page',
      // @ts-ignore
      component: () => import('../views/Preview.vue'),
      meta:{
        hasAccess:true,
        layout:EditorLayout
      }
    },
    {
      path:'/auth/login',
      name:'Login',
      component:Login,
      meta:{
        hasAccess:false,
        layout:AuthLayoutVue
      }
    },
    {
      path:'/auth/create-account',
      name:'Signup',
      component:SignupVue,
      meta:{
        hasAccess:false,
        layout:AuthLayoutVue
      }
    },
    {
      path:'/user/profile',
      name:'Profile',
      component:ProfileDetailsVue,
      meta:{
        hasAccess:false,
        layout:EditorLayout
      }
    },
    {
      path:'/elements',
      name:'Interactive Element',
      component:InteractiveElement,
      meta:{
        hasAccess:false,
        layout:AuthLayoutVue
      }
    },
  ]
})

export default router
