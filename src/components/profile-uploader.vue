<template>
  <div
    @click="openFile"
    class="img-uploader bg-brandLightPurple cursor-pointer hover:bg-opacity-70"
  >
    <div  class="flex items-center justify-center flex-col">
      <i class="ri-image-2-line text-[35px] text-brandPurple"></i>
      <p class="font-medium text-brandPurple">+ Upload Image</p>
    </div>

    
    <input
      ref="fileInput"
      class="hidden"
      type="file"
      accept="image/png, image/jpeg"
      @change="handleFileChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const fileInput: Ref<HTMLButtonElement | null> = ref(null)
const file = ref<any>(null)



const openFile = () => {
    fileInput.value.click()
}

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
   file.value = input.files?.[0]
    
  if (file.value) {
    const reader = new FileReader()
    reader.onload = (e) => {
      const image = new Image()
      image.onload = () => {
        if (image.width <= 1024 && image.height <= 1024) {
          console.log('Image format and dimensions are valid')
         
          // Do something with the valid image
        } else {
          console.log('Image dimensions are too large')
        }
      }
      image.src = e.target?.result as string
    }
    reader.readAsDataURL(file.value)
   
  }
}
</script>

<style scoped>
.img-uploader {
  display: flex;
  padding: 47px 42px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  flex-direction: column;
}
</style>
