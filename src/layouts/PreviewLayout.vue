<template>
  <div>
    <div class="bg-brandPurple min-h-[357px] w-full hero py-5 px-5">
      <div class="bg-white flex items-center justify-between navigator rounded-[12px]">
        <DevButton @click="goBack" type="outlined"> Back to Editor </DevButton>
        <DevButton type="filled"> Share Link </DevButton>
      </div>
    </div>
    <div class="flex items-center justify-center w-full transform -translate-y-32">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DevButton from '../components/form-elements/DevButton.vue'
import { useRouter } from 'vue-router'
const navigate = useRouter()
const goBack = () => {
  navigate.push('/')
}
</script>

<style scoped>
.hero {
  border-radius: 0px 0px 32px 32px;
}

.hero .navigator {
  padding: 16px 16px 16px 24px;
}
</style>
