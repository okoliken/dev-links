<script setup lang="ts">
import DevNavigator from '../components/DevNavigator.vue'
import FrameOne from '../components/FrameOne.vue'
import FrameTwo from '../components/FrameTwo.vue'
import ProfileFrame from '../components/ProfileFrame.vue'
import { onMounted } from 'vue'
import { useLink } from '../reusables/links'
import { useDbActions } from '../reusables/dbActions'
import { Server } from '../utils/config'

const { createLink } = useLink()
import { useUpload } from '../reusables/upload'
const { imgBlob, sterilizeData } = useUpload()



onMounted(async () => {
  try {
    const data = await useDbActions.getLinks(Server.collectionID)

    if (data?.documents) {
      createLink.value = data?.documents as any
    } else createLink.value = []
  } catch (error) {
    return
  }

  try {
    const file = await useDbActions.getFiles()
    if (file.files) {
      imgBlob.value = sterilizeData(file.files)
    }
  } catch (error) {
    return
  }
})
</script>

<template>
  <div class="bg-brandGrey min-h-screen relaive">
    <div class="w-full mb-4 sm:mb-0 md:p-4 fixed z-50 bg-brandGrey">
      <DevNavigator />
    </div>

    <div class="flex items-center justify-center flex-col px-6">
      <div class="grid grid-cols-12 min-h-screen w-full lg:gap-x-6 mb-4 mt-28">
        <div
          class="col-span-12 hidden md:col-span-5 w-full bg-white rounded-[12px] p-[40px] lg:flex align-center justify-center"
        >
          <div
            class="relative h-full transform md:-translate-y-8 flex items-center justify-center flex-col"
          >
            <FrameOne class="relative" />
            <FrameTwo class="absolute left-3" />
            <ProfileFrame class="absolute w-full" />
          </div>
        </div>

        <div
          class="col-span-12 md:col-span-12 lg:col-span-7 w-full bg-white rounded-[12px] relative"
        >
          <div class="p-[24px] md:p-[40px]">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<!-- 

  update machanism:

  Feat: any object that has $databaseId should be filtered out in a computed prop, while those not having should be filtered out as well

  1. computed prop to filter ones coming from db with $databaseId, then update them instead.
  2. computed prop to filter new ones coming from app, then create them.
 -->