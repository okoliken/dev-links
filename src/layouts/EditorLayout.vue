<script setup lang="ts">
import DevNavigator from '../components/DevNavigator.vue'
import FrameOne from '../components/FrameOne.vue'
import FrameTwo from '../components/FrameTwo.vue'
import DevButton from '../components/form-elements/DevButton.vue';

import ProfileFrame from '../components/ProfileFrame.vue'
</script>

<template>
  <div class="bg-brandGrey min-h-screen">

     <div class="w-full p-4">
        <DevNavigator />
     </div>

   <div class="flex items-center justify-center flex-col px-4">
    <div class="grid grid-cols-12 w-full gap-x-4 mb-4">
      <div class="col-span-6 w-full bg-white rounded-[12px]  p-[40px]  flex align-center justify-center ">
        <div class="relative h-full flex items-center justify-center flex-col">
          <FrameOne/>
          <FrameTwo  class="absolute top-16 left-3"/>
          <ProfileFrame class="absolute top-[8rem] w-full" />
        </div>
      </div>

      <div class="col-span-6 w-full bg-white rounded-[12px]   ">
        <div class="p-[40px]">
          <slot></slot>
        </div>

        <div class="p-[25px] w-full flex items-end justify-end border-t border-brandBorder">
        <DevButton class="mr-4"  :disabled="true" type="filled">Save</DevButton>
      </div>
      </div>
      
    </div>
   </div>
  </div>
</template>
