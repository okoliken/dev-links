<script setup lang="ts">
import { Icon } from '@iconify/vue';
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

const checkIfLinkIsFrontEndMentor = computed(() => {
  if (links.title === 'Frontend Mentor') {
    return 'text-[#333333] border border-[#D9D9D9]'
  } else return ''
})
</script>

<template>

  <a :href="links.link || '#'" :target="links.link ? '_blank' : undefined">
    <div :style="`background-color: ${bgColor}`"
      class="px-[16px] py-[11px]  w-full rounded-[8px] min-h-[50px] flex items-center justify-between mb-6">
      <div class="flex items-center gap-x-3">
      
       <Icon class="text-[20px] text-white" :icon="links.icon" />
        <!-- <i class="ri-github-fill text-[14px] text-white"></i> -->
        <p class="text-white text-[12px] font-light">{{ links.title }}</p>
      </div>

      <i  class="ri-arrow-right-line text-white text-[16px] font-semibold"></i>
    </div>
  </a>
</template>
