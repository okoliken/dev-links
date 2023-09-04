<script setup lang="ts">
import DevNavigator from '../components/DevNavigator.vue'
</script>

<template>
  <div class="bg-brandGrey h-screen">

     <div class="p-4 w-full">
        <DevNavigator />
     </div>

   <div class="container px-12">
     <slot></slot>
   </div>
  </div>
</template>
