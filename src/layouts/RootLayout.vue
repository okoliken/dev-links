
<script setup lang="ts">
import  { defineAsyncComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layouts = computed(() => {
    const currentRouteLayout =  route.meta.layout || 'EditorLayout'
    return defineAsyncComponent(() =>  import(`../layouts/${currentRouteLayout}.vue`))
})
</script>


<template>
   <div>
    <component :is="layouts">
        <slot></slot>
    </component>
   </div>
</template>
