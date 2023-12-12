<script setup lang="ts">
import DevLinks from '../components/DevLinks.vue'
import { useLink } from '../reusables/links'
import { useUpload } from '../reusables/upload'

const userDetail = () => {
  const user = sessionStorage.getItem('user')
  if (user !== null) {
    return JSON.parse(user)
  } else return null
}
const { createLink } = useLink()
const { imgBlob } = useUpload()
</script>

<template>
  <div class="!w-full max-w-[350px] profile flex items-center justify-center flex-col">
    <div class="border-4 border-brandPurple w-[104px] h-[104px] rounded-full">
      <div v-if="!imgBlob" class="w-[96px] h-[96px] bg-[#EEEEEE] rounded-full animate-pulse"></div>
      <img
        v-else
        class="w-[104px] h-[96px] rounded-full object-cover"
        :src="imgBlob"
        alt="user image"
      />
    </div>
    <div class="flex items-center justify-center flex-col gap-y-2 mt-6">
      <h2 class="text-brandDarkGrey text-[32px] font-bold leading-[150%] text-center">
        {{ userDetail()?.name }}
      </h2>
      <p class="text-brandSoftGrey text-[16px] font-light text-center">{{ userDetail()?.email }}</p>
    </div>
    <div class="w-full mt-12">
      <template v-if="createLink.length <= 0">
        <div
          v-for="i in 4"
          :key="i"
          class="bg-[#EEEEEE] rounded-[8px] h-[44px] w-full mb-4 animate-pulse"
        ></div>
      </template>
      <DevLinks v-else :links="links" v-for="links in createLink" :key="links.id" />
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
