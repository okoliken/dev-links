<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import RootLayout from './layouts/RootLayout.vue'

import type { ProgressFinisher } from '@marcoschulte/vue3-progress'
import { useProgress } from '@marcoschulte/vue3-progress'
import { useLink } from './reusables/links'

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


</script>

<template>
  <vue3-progress-bar></vue3-progress-bar>
  <RootLayout>
    <RouterView />
  </RootLayout>
</template>

