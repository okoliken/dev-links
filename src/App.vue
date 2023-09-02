<script setup lang="ts">
import { RouterView } from 'vue-router'
import {onMounted} from 'vue'
import RootLayout from './layouts/RootLayout.vue'

onMounted(() => {
  document.documentElement.style.setProperty('--animate-duration', '.5s');
})
</script>

<template>
  <RootLayout>
   <RouterView />
</RootLayout> 
</template>


<style>

</style>


