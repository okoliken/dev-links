<script setup lang="ts">
import { DevSelect } from './types'
import dropdownIcon from '../icons/dropdown-icon.vue'
import { ref } from 'vue'
const open = ref(false)

const emptyText = 'e.g. https://www.github.com/johnappleseed'
const { options = [] } = defineProps<DevSelect>()
const emit = defineEmits(['selected'])
const selected = ref(options.length > 0 ? options[0] : emptyText)

const selectOption = (option: string) => {
  selected.value = option
  open.value = false
  emit('selected', option)
}
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
      <div class="text-[#333] text-[16px] leading-[150%]">
        {{ selected }}
      </div>
      <dropdownIcon class="transform transition-all" :class="[open ? ' rotate-180' : '']" />
    </div>

    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp"
    >
      <div
        class="py-[18x] px-[16px] shadow-optionShadow mt-4 border border-[D9D9D9] rounded-[8px] absolute z-50 w-full bg-white"
        v-show="open"
      >
        <div
          :class="{
            'border-b border-[#D9D9D9]': options?.length - 1 !== i,
            'text-brandPurple': selected === option
          }"
          class="text-[16px] p-2 text-[#333] cursor-pointer hover:text-brandPurple w-full bg-white"
          v-for="(option, i) of options"
          :key="i"
          @mousedown="selectOption(option)"
        >
          {{ option }}
          <span v-if="selected === option" class="text-brandPurple ml-px">(Selected)</span>
        </div>
      </div>
    </Transition>
  </div>
</template>
