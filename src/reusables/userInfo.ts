

import { computed } from 'vue'


export const userDetails = computed(() => {
  const user =sessionStorage.getItem('user')
  if(user !== null) {
    return JSON.parse(user)
  } else return 
})