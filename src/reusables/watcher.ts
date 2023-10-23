import { ref, watch, reactive } from 'vue'


export const useGlobalEffect = (val:any) => {
    // composable handles save actions, allows users save when state changes

    watch(val, () => {
        
    })

}