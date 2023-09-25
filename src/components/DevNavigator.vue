


<script setup lang="ts">
import DevButton from './form-elements/DevButton.vue';
import Tags from '../components/DevTags.vue'
import PreviewEye from './icons/PreviewEye.vue';
</script>


<template>
  <div class="bg-white pt-[16px] pr-[16px] pb-[16px] pl-[24px] rounded-[12px]">

    <div class="flex items-center justify-between">
      <RouterLink to="/">
        <img src="../assets/logo.svg" class="w-[146px] h-[32px] hidden md:block" alt="logo">
        <img src="../assets/mobile-logo.svg" class="w-[32px] h-[32px] block md:hidden" alt="logo">
      </RouterLink>
      <div class="flex items-center gap-x-0 lg:gap-x-5">
        <RouterLink class="nav__tags" to="/">
          <Tags icon="ri-links-fill" text="Links" />
        </RouterLink>
        <RouterLink class="nav__tags" to="/user/profile">
          <Tags icon="ri-user-line" text="Profile Details" />
        </RouterLink>
      </div>
      <DevButton @click="$router.push('/preview')" type="outlined">
        <span class="hidden md:block">Preview</span>
        <PreviewEye class="block md:hidden" />
      </DevButton>
    </div>
  </div>
</template>


<style>
.router-link-active.nav__tags {
  border-radius: 8px;
  background: #EFEBFF;
}

.router-link-active i {
  color: #633CFF;
}

.router-link-active p {
  color: #633CFF;
}
</style>



