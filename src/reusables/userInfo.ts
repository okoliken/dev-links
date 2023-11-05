

import { computed } from 'vue'

 const user = sessionStorage.getItem('user')

export const userDetails = computed(() => {
  if(user !== null) {
    return JSON.parse(user)
  } else return null
})