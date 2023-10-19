<script setup lang="ts">
import type { Tags } from './form-elements/types'

const { text, icon } = defineProps<Tags>()
</script>

<template>
  <div class="flex items-center justify-center gap-x-1 py-[11px] px-[27px] cursor-pointer tag">
    <i :class="icon" class="text-brandSoftGrey font-semibold"></i>
    <p class="text-[16px] font-semibold text-brandSoftGrey leading-[150%] hidden md:block">
      {{ text }}
    </p>
  </div>
</template>

<style scoped>
.tag:hover i {
  color: #633cff;
}
.tag:hover p {
  color: #633cff;
}
</style>

