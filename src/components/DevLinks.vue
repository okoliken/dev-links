<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue'
interface Link {
  links: {
    title: string
    link: string
    color: string
    icon:string
  }
}

const { links } = defineProps<Link>()

const bgColor = computed(() => {
  return links.color
})

const checkIfLinkIsFrontEndMentor = computed(() => {
  if (links.title === 'Frontend Mentor' || !links.title) {
    return 'border border-[#D9D9D9]'
  } else return null
})
</script>

<template>

  <a :href="links.link || '#'" :target="links.link ? '_blank' : undefined">
    <div :class="checkIfLinkIsFrontEndMentor" :style="`background-color: ${bgColor}`"
      class="px-[16px] py-[11px]  w-full rounded-[8px] min-h-[50px] flex items-center justify-between mb-5">
      <div class="flex items-center gap-x-3">
      
       <Icon :class="checkIfLinkIsFrontEndMentor ? 'text-[#333333]' : 'text-white' " class="text-[20px]" :icon="links.icon" />
        <!-- <i class="ri-github-fill text-[14px] text-white"></i> -->
        <p :class="checkIfLinkIsFrontEndMentor ? 'text-[#333333]' : 'text-white' " class=" text-[12px] font-light">{{ links.title }}</p>
      </div>

      <i :class="checkIfLinkIsFrontEndMentor ? 'text-[#333333]' : 'text-white' " class="ri-arrow-right-line text-[16px] font-semibold"></i>
    </div>
  </a>
</template>
