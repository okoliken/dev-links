<script setup lang="ts">
import DevNavigator from '../components/DevNavigator.vue'
import FrameOne from '../components/FrameOne.vue'
import FrameTwo from '../components/FrameTwo.vue'
import DevButton from '../components/form-elements/DevButton.vue'
import ProfileFrame from '../components/ProfileFrame.vue'
</script>

<template>
  <div class="bg-brandGrey min-h-screen">
    <div class="w-full mb-4 sm:mb-0 md:p-4 fixed z-50 bg-brandGrey">
      <DevNavigator />
    </div>

    <div class="flex items-center justify-center flex-col px-4">
      <div class="grid grid-cols-12 min-h-screen w-full lg:gap-x-4 mb-4 mt-28">
        <div
          class="col-span-12 hidden  md:col-span-5 w-full bg-white  rounded-[12px] p-[40px] lg:flex align-center justify-center"
        >
          <div class="relative h-full transform md:-translate-y-8  flex items-center justify-center flex-col">
            <FrameOne class="relative" />
            <FrameTwo class="absolute left-3" />
            <ProfileFrame class="absolute w-full" />
          </div>
        </div>

        <div class="col-span-12 md:col-span-12 lg:col-span-7 w-full bg-white rounded-[12px] relative">
          <div class="p-[24px] md:p-[40px]">
            <slot></slot>
          </div>

          <div
            class="p-[16px] md:p-[25px] flex items-end justify-end border-t border-brandBorder absolute w-full bottom-0 bg-white"
          >
            <DevButton class="md:mr-4 w-full  md:w-auto"  type="filled">Save</DevButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
