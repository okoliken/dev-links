<script setup lang="ts">
import DevLinks from '../components/DevLinks.vue';
import { useLink } from '../reusables/links'

const { createLink } = useLink()
</script>

<template>
  <div class="!w-full max-w-[350px] profile flex items-center justify-center flex-col ">
    <div class="border-4 border-brandPurple w-[104px] h-[104px] rounded-full">
      <img class="w-[104px] h-[96px] rounded-full object-cover" src="https://picsum.photos/id/11/500/300" alt="">
    </div>
    <div class="flex items-center justify-center flex-col gap-y-2 mt-6">
      <h2 class="text-brandDarkGrey text-[32px] font-bold leading-[150%]">Ben Wright</h2>
      <p class="text-brandSoftGrey text-[16px] font-light">ben@example.com</p>
    </div>


    <div class="w-full mt-12">
      <!-- <DevLinks :links="links" v-for="links in createLink" /> -->
    </div>
  </div>
</template>

<style scoped>
.profile {
  border-radius: 24px;
  background: #fff;
  padding: 48px 56px;
  /* shadow */
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.1) !important;
}
</style>
