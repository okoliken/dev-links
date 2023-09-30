import { ref } from 'vue'
import { account as DevAuth, ID } from '../server'
import { toast, type ToastOptions } from 'vue3-toastify'
import { type ProgressFinisher, useProgress } from '@marcoschulte/vue3-progress'
import { useRouter } from 'vue-router'
const progresses = [] as ProgressFinisher[]
const loading = ref(false)

export const useAuthorize = () => {
  const router = useRouter()

  const notify = (msg: string) => {
    toast(msg, {
      autoClose: 1000,
      position: toast.POSITION.TOP_RIGHT,
      type: 'error'
    } as ToastOptions)
  }

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
      await DevAuth.create(`${ID.unique()}`, email, password)
      await login(email, password)
      loading.value = false
    } catch (Err: any) {
      notify(Err.message)
      endRequestProgress()
      loading.value = false
    }
  }

  const login = async (email: string, password: string) => {
    try {
      loading.value = true
      startRequestProgress()
      const { $id, providerUid } = await DevAuth.createEmailSession(email, password)
      loading.value = false
      endRequestProgress()
      setUser({ $id, providerUid })
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

  const setUser = (id: { $id: string; providerUid: string }) => {
    sessionStorage.setItem('user', JSON.stringify(id))
  }

  const logout = () => {
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
