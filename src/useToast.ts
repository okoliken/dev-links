import  { ref } from 'vue'

export const _toast_duration = ref(0)
export const isOpen = ref(false)

export const showToast = (duration:number, state:boolean) => {
    isOpen.value = state
    _toast_duration.value = duration 

    setInterval(()=> {
        isOpen.value = false
    }, _toast_duration.value)
}

