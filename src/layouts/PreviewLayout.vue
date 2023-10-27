<template>
  <div>
    <div class="bg-white md:bg-brandPurple min-h-[357px] w-full hero md:py-5 md:px-5">
      <div class="bg-white flex items-center justify-between navigator rounded-[12px]">
        <DevButton @click="goBack" type="outlined" width="100%"> Back to Editor </DevButton>
        <DevButton @click="readTextFromClipboard($route.fullPath)" type="filled" width="100%"> Share Link </DevButton>
      </div>
    </div>
    <div class="flex items-center justify-center w-full transform -translate-y-44 md:-translate-y-32">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DevButton from '../components/form-elements/DevButton.vue'
import {showToast} from '../useToast'
import { useRouter } from 'vue-router'
const navigate = useRouter()



const goBack = () => {
  navigate.push('/')
}

const readTextFromClipboard = async (url:string) => {
  try {
    await navigator.clipboard.writeText(url);
    showToast(6000, true, "The link has been copied to your clipboard!")  
  } catch (error) {
    console.error('Failed to copy text: ', error);
  }
};

</script>

<style scoped>
.hero {
  border-radius: 0px 0px 32px 32px;
}

.hero .navigator {
  padding: 16px 16px 16px 24px;
}
</style>
