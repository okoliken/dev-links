import { ref } from 'vue'
import { account as DevAuth, ID } from '../server'
import { toast } from 'vue3-toastify'
import type { ToastOptions } from 'vue3-toastify'
import { type ProgressFinisher, useProgress } from '@marcoschulte/vue3-progress'
import { useRouter } from 'vue-router'
const progresses = [] as ProgressFinisher[]
const loading = ref(false)

  export const notify = (msg: string) => {
    toast(msg, {
      autoClose: 1000,
      position: toast.POSITION.TOP_RIGHT,
      type: 'error'
    } as ToastOptions)
  }



export const useAuthorize = () => {
  const router = useRouter()


  const startRequestProgress = () => {
    progresses.push(useProgress().start())
  }
  const endRequestProgress = () => {
    progresses.pop()?.finish()
  }

  const register = async (email: string, password: string) => {
    try {
      loading.value = true
      startRequestProgress()
      await DevAuth.create(ID.unique(), email, password)
      await login(email, password)
      loading.value = false
      endRequestProgress()
    } catch (Err: any) {
      endRequestProgress()
      notify(Err.message)
      
      loading.value = false
    }
  }

  const login = async (user_email: string, password: string) => {
    try {
      loading.value = true
      startRequestProgress()
      await DevAuth.createEmailSession(user_email, password)

      const { $id, email, name } = await DevAuth.get()
      // console.log(account)

      loading.value = false
      endRequestProgress()
      setUser({ $id, email, name })
      roam('/')
    } catch (Err: any) {
      notify(Err.message)
      endRequestProgress()
      loading.value = false
    }
  }

  const roam = (path: string) => {
    router.push(path)
  }

  const setUser = (user: { $id: string; email: string; name: string }) => {
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  const logout = async () => {
    await DevAuth.deleteSession('current')
    sessionStorage.removeItem('user')
    roam('/auth/login')
  }

  return {
    register,
    login,
    roam,
    setUser,
    logout,
    loading
  }
}
