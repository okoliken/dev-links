<script setup lang="ts">
import DevButton from './form-elements/DevButton.vue'
import Tags from '../components/DevTags.vue'
import PreviewEye from './icons/PreviewEye.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="bg-white pt-[16px] pr-[16px] pb-[16px] pl-[24px] rounded-[12px]">
    <div class="flex items-center justify-between">
      <RouterLink to="/">
        <img src="../assets/logo.svg" class="w-[146px] h-[32px] hidden md:block" alt="logo" />
        <img src="../assets/mobile-logo.svg" class="w-[32px] h-[32px] block md:hidden" alt="logo" />
      </RouterLink>
      <div class="flex items-center gap-x-0 lg:gap-x-5">
        <RouterLink class="nav__tags" to="/">
          <Tags icon="ri-links-fill" text="Links" />
        </RouterLink>
        <RouterLink class="nav__tags" to="/user/profile">
          <Tags icon="ri-user-line" text="Profile Details" />
        </RouterLink>
      </div>
      <div class="flex items-center gap-x-1">
        <div
          class="flex items-center gap-x-1 cursor-pointer bg-white h-12 py-1 px-2"
        >
          <Icon class="text-[20px] text-gray-500 font-semibold" icon="ic:twotone-logout" />
          <p class="mr-4 text-gray-500 hidden md:block">Logout</p>
        </div>
        <DevButton @click="$router.push('/preview')" type="outlined">
          <span class="hidden md:block">Preview</span>
          <PreviewEye class="block md:hidden" />
        </DevButton>
      </div>
    </div>
  </div>
</template>

<style>
.router-link-active.nav__tags {
  border-radius: 8px;
  background: #efebff;
}

.router-link-active i {
  color: #633cff;
}

.router-link-active p {
  color: #633cff;
}
</style>
