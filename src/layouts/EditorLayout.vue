<script setup lang="ts">
import DevNavigator from '../components/DevNavigator.vue'
import FrameOne from '../components/FrameOne.vue'
import FrameTwo from '../components/FrameTwo.vue'
</script>

<template>
  <div class="bg-brandGrey min-h-screen">

     <div class="p-4 w-full">
        <DevNavigator />
     </div>

   <div class="flex items-center justify-center flex-col px-4">
    <div class="grid grid-cols-12 w-full gap-x-4 mb-4">
      <div class="col-span-6 w-full bg-white rounded-[12px]  p-[40px]  flex align-center justify-center ">
        <div class="relative">
          <FrameOne/>
          <FrameTwo  class="absolute top-2 left-3"/>
        </div>
      </div>

      <div class="col-span-6 w-full bg-white rounded-[12px]  p-[40px] ">
        <slot></slot>
      </div>
    </div>
   </div>
  </div>
</template>
