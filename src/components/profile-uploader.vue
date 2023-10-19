<template>
  <div
    @click="openFile"
    class="img-uploader bg-brandLightPurple cursor-pointer hover:bg-opacity-70 relative "
  >
    <div class="flex items-center justify-center flex-col">
      <i class="ri-image-2-line text-[35px] text-brandPurple"></i>
      <p class="font-medium text-brandPurple">+ Upload Image</p>
    </div>

    <div v-if="imgBlob" class="profile__blur  absolute rounded-[12px]">

      <img  class="rounded-[12px]" :src="imgBlob" alt="" />
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
import { useUpload } from '../reusables/upload'
const { imgBlob, handleProfileUpload } = useUpload()

const fileInput: Ref<HTMLButtonElement | null> = ref(null)
const file = ref<any>(null)

const openFile = () => {
  fileInput.value?.click()
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

          imgBlob.value = URL.createObjectURL(file.value)

          handleProfileUpload(file.value)
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

.profile__blur{
  background:linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,0.6)) ;
  height: 170px;
  width: 198px;
}
.img-uploader img {
  height: 170px;
  width: 198px;
  object-fit: cover;
}
</style>
<!-- https://cloud.appwrite.io/v1/storage/buckets/65257a701e5a7462fb3f/files/6531235eb574b2d870b2/view?project=6511b0b49d56ea13646b&mode=admin 


https://cloud.appwrite.io/v1/storage/buckets/65257a701e5a7462fb3f/files/6531235eb574b2d870b2/view?project=6511b0b49d56ea13646b&mode=admin
-->