import { createRouter, createWebHistory } from 'vue-router'
import DevEditor from '@/views/DevEditor.vue'
import Login from '@/views/auth/Login.vue'
import SignupVue from '@/views/auth/Signup.vue'

import ProfileDetailsVue from '../views/ProfileDetails.vue'
import EditorLayout from '../layouts/EditorLayout.vue'
import AuthLayoutVue from '@/layouts/AuthLayout.vue'
import PreviewLayout from '../layouts/PreviewLayout.vue'
// @ts-ignore
import UserPreviewLayout from '@/layouts/UserPreviewLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Editor',
      component: DevEditor,
      meta: {
        hasAccess: true,
        layout: EditorLayout
      }
    },
    {
      path: '/profile',
      name: 'Profile Details',
      component: () => import('../views/ProfileDetails.vue'),
      meta: {
        hasAccess: true,
        layout: EditorLayout
      }
    },
    {
      path: '/preview',
      name: 'Preview Page',
      component: () => import('../views/DevPreview.vue'),
      meta: {
        hasAccess: true,
        layout: PreviewLayout
      }
    },
    {
      path: '/preview/:id',
      name: 'User Preview Page',
      // @ts-ignore
      component: () => import('../views/UserPreview.vue'),
      props:true,
      meta: {
        hasAccess: false,
        layout: UserPreviewLayout
      }
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login,
      meta: {
        hasAccess: false,
        layout: AuthLayoutVue
      }
    },
    {
      path: '/auth/create-account',
      name: 'Signup',
      component: SignupVue,
      meta: {
        hasAccess: false,
        layout: AuthLayoutVue
      }
    },
    {
      path: '/user/profile',
      name: 'Profile',
      component: ProfileDetailsVue,
      meta: {
        hasAccess: false,
        layout: EditorLayout
      }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((routes) => routes.meta.hasAccess)) {
    const user = JSON.parse(String(sessionStorage.getItem('user')))
    if (!user) {
      next('/auth/login')
    }
  }
  next()
})

export default router
