<script setup lang="ts">
import { computed } from 'vue'
interface Link {
  links: {
    title: string
    link: string
    color: string
  }
}

const { links } = defineProps<Link>()

const bgColor = computed(() => {
  return links.color
})
</script>

<template>
  <a :href="links.link || '#'" :target="links.link ? '_blank' : null">
    <div :style="`background-color: ${bgColor}`"
      class="p-[16px] w-full rounded-[8px] flex items-center justify-between mb-6">
      <div class="flex items-center">
      
       
        <!-- <i class="ri-github-fill text-[14px] text-white"></i> -->
        <p class="text-white text-[16px]">{{ links.title }}</p>
      </div>

      <i class="ri-arrow-right-line text-white text-[16px] font-medium"></i>
    </div>
  </a>
</template>
