

import { computed } from 'vue'
import { useStorage } from '@vueuse/core'

const dev = useStorage('user', 'name' || null, sessionStorage) 
  
export const userDetails = computed(() => {
  if(dev.value !== null) {
    return JSON.parse(dev.value)
  } else return null
})