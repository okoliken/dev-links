<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import RootLayout from './layouts/RootLayout.vue'
import { useDbActions } from './reusables/dbActions'
import { Server } from './utils/config'
import type { ProgressFinisher } from '@marcoschulte/vue3-progress'
import { useProgress } from '@marcoschulte/vue3-progress'
import { useLink } from './reusables/links'
import { useUpload } from './reusables/upload'
const { selectOptions, createLink } = useLink()
const { sterilizeData, imgBlob } = useUpload()
const progresses = [] as ProgressFinisher[]
const router = useRouter()

router.beforeEach((to, from, next) => {
  progresses.push(useProgress().start())

  next()
})

router.afterEach(() => {
  progresses.pop()?.finish()
})

onMounted(() => {
  document.documentElement.style.setProperty('--animate-duration', '.67s')
})

onMounted(async () => {
  try {
    const data = await useDbActions.getLinks(Server.collectionID)
    if (data?.documents) {
      createLink.value = data?.documents as any
    } else createLink.value = []
  } catch (error) {}

  try {
    const file = await useDbActions.getFiles()
    if (file.files) {
      imgBlob.value = sterilizeData(file.files)
    }
  } catch (error) {}
})
</script>

<template>
  <vue3-progress-bar></vue3-progress-bar>
  <RootLayout>
    <RouterView />
  </RootLayout>
</template>

