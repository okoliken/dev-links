<script setup lang="ts">
import DevNavigator from '../components/DevNavigator.vue'
import FrameOne from '../components/FrameOne.vue'
import FrameTwo from '../components/FrameTwo.vue'
import DevButton from '../components/form-elements/DevButton.vue';
import DevToast from '../components/dev-toast.vue'
import { isOpen } from '../useToast'
import ProfileFrame from '../components/ProfileFrame.vue'
</script>

<template>
  <div class="bg-brandGrey min-h-screen">

     <div class="w-full p-4">
        <DevNavigator />
     </div>

   <div class="flex items-center justify-center flex-col px-4">
    <div class="grid grid-cols-12 w-full gap-x-4 mb-4">
      <div class="col-span-5 w-full bg-white rounded-[12px]  p-[40px]  flex align-center justify-center ">
        <div class="relative h-full flex items-center justify-center flex-col">
          <FrameOne class="relative"/>
          <FrameTwo  class="absolute left-3"/>
          <ProfileFrame class="absolute  w-full" />
        </div>
      </div>

      <div class="col-span-7 w-full bg-white rounded-[12px]  relative">
        <div class="p-[40px]">
          <slot></slot>
        </div>

        <div class="p-[25px] flex items-end justify-end border-t border-brandBorder absolute w-full bottom-0 bg-white">
        <DevButton class="mr-4"  :disabled="true" type="filled">Save</DevButton>
      </div>
      </div>
      
    </div>
   </div>
  </div>
</template>
