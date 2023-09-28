<script setup lang="ts">
import {computed} from 'vue'
interface Link {
  links: {
    title: string
    link: string
    color: string
  }
}

const { links } = defineProps<Link>()

const bgColor = computed(() => {
  return `bg-[${links.color}]`
})
</script>

<template>
  <a :href="links.link" target="_blank">
    <div
     :class="bgColor"
      class="p-[16px] bg-[#1A1A1A] w-full rounded-[8px] flex items-center justify-between mb-6"
    >
      <div class="flex items-center">
        <!-- <i class="ri-github-line"></i> -->
        <p class="text-white text-[16px]">{{ links.title }}</p>
      </div>

      <i class="ri-arrow-right-line text-white text-[16px]"></i>
    </div>
  </a>
</template>
