import { ref } from 'vue'

export const _toast_duration = ref(6000)
export const isOpen = ref(false)
export const toast_message = ref('')
export const iconType = ref('')

export const showToast = (state: boolean, message: string, type: string = 'link') => {
  isOpen.value = state
  iconType.value = type
  toast_message.value = message
  setInterval(() => {
    isOpen.value = false
  }, _toast_duration.value)
}
