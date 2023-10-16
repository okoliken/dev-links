import  { ref } from 'vue'

export const _toast_duration = ref(0)
export const isOpen = ref(false)
export const  toast_message = ref('')

export const showToast = (duration:number, state:boolean, message:string) => {
    isOpen.value = state
    _toast_duration.value = duration 

    toast_message.value =  message
    setInterval(()=> {
        isOpen.value = false
    }, _toast_duration.value)
}

