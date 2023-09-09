<script setup lang="ts">
import { type DevButton } from './types'
import { computed } from 'vue'
const { disabled, type = 'filled', isLoading, width = 'none' } = defineProps<DevButton>()

const filed =
  'transition-all active:duration-50 duration-50 ease-linear  active:scale-95 active:bg-[#BEADFF] disabled:opacity-[0.25] disabled:cursor-not-allowed hover:bg-[#BEADFF] hover:shadow-brandShadowDark'
const outlined =
  'transition-all active:duration-50 duration-50 ease-in-out  active:scale-95 active:bg-[#EFEBFF] hover:bg-[#EFEBFF] disabled:opacity-[0.25] disabled:cursor-not-allowed'

const _buttonType = computed(() => {
  return type === 'filled'
    ? `bg-brandPurple !text-white w-[${width}] ${filed}`
    : `border-brandPurple bg-transparent border !text-brandPurple ${outlined} w-[${width}]`
})

const _loaderColor = computed(() => {
  return type === 'filled' ? 'filled' : 'outlined'
})
</script>

<template>
  <button
    :disabled="disabled || isLoading"
    :class="_buttonType"
    v-bind="$attrs"
    class="py-[11px] px-[27px] rounded-[8px] text-[16px] flex items-center justify-center flex-col"
  >
    <p v-if="isLoading" :class="_loaderColor" class="loader inline-block"></p>
    <slot v-else></slot>
  </button>
</template>

<style scoped>
.loader.filled {
  width: 28px;
  height: 28px;
  border: 5px solid;
  border-color: #fff transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  transform: translateY(2px);
}
.loader.outlined {
  width: 28px;
  height: 28px;
  border: 5px solid;
  border-color: #633cff transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  transform: translateY(2px);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

button:disabled,
button[disabled] {
  opacity: 0.25;
  cursor: not-allowed;
}
</style>
