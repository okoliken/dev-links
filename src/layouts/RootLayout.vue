
<script setup lang="ts">
import DevToast from '../components/dev-toast.vue'
import { isOpen } from '../useToast'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>


<template>
   <div>
    <component :is="route.meta.layout || 'EditorLayout'">
        <slot></slot>
        <DevToast v-if="isOpen" />
    </component>
   </div>
</template>
