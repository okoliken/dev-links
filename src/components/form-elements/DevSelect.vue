<script setup lang="ts">
import type { DevSelect, SelectOptions } from './types'
import { Icon } from '@iconify/vue';
import dropdownIcon from '../icons/dropdown-icon.vue'
import { ref, onMounted } from 'vue'
const open = ref(false)

const emptyText = 'e.g. https://www.github.com/johnappleseed'
const { options = [] } = defineProps<DevSelect>()
const emit = defineEmits(['selected'])
const selected = ref<SelectOptions | any>(options.length > 0 ? options[0] : emptyText)

const selectOption = (option: SelectOptions) => {
  selected.value = option

  console.log(selected.value)
  open.value = false
  emit('selected', selected.value)
}



// onMounted(() => emit('selected', selected.value))
</script>

<template>
  <div class="relative">
    <div
      class="py-[12px] px-[16px] border transition-all active:duration-50 duration-50 ease-linear border-[#D9D9D9] rounded-[8px] cursor-pointer flex items-center justify-between bg-white"
      tabindex="1"
      :class="{ 'border-brandPurple shadow-brandShadowDark': open }"
      @click="open = !open"
      @blur="open = false"
    >
      <div class=" text-[16px] leading-[150%] flex items-center gap-x-3">
        <Icon class="text-[17px] text-[#737373]" :icon="selected.icon" />
        <!-- <i class="text-[17px] text-[#737373]" :class="selected.icon"></i> -->
        <span class="text-[#333]"> {{ selected.title }}</span>
      </div>
      <dropdownIcon class="transform transition-all" :class="[open ? ' rotate-180' : '']" />
    </div>

    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOut"
      mode="in-out"
    >
      <div
        class="py-[18x] px-[16px] shadow-optionShadow mt-4 border border-[D9D9D9]
         rounded-[8px] absolute sheet w-full bg-white h-[350px] overflow-hidden overflow-y-scroll"
        v-show="open"
      >
        <div
          :class="{
            'border-b border-[#D9D9D9]': options?.length - 1 !== i,
            'text-brandPurple': selected === option
          }"
          class="text-[16px] p-3 text-[#737373] cursor-pointer hover:text-brandPurple w-full bg-white flex items-center gap-x-3"
          v-for="(option, i) of options"
          :key="i"
          @mousedown="selectOption(option)"
        >
          <div class="flex items-center gap-x-3 elements">
            <Icon class="text-[17px] text-[#737373]" :class="[selected === option ? 'text-brandPurple': null]" :icon="option.icon" />
           
            <span class="text-[16px]">{{ option.title }}</span>
          </div>
          <!-- <span v-if="selected === option" class="text-brandPurple ml-px text-base">(Selected)</span> -->
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.elements:hover svg{
  color:#633CFF;
}
.elements:hover p{
  color:#633CFF;
}

.elements p{
  color: #333;
}

.sheet{
  z-index: 1000000;
}
</style>