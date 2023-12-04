<template>
  <div  class="bg-brandGrey rounded-[12px] p-[20px] mt-7">
    <header class="flex items-center justify-between">
      <div class="flex items-center gap-x-2 cursor-grab">
        <span class="w-[12px] text-brandSoftGrey">=</span>
        <h4 class="text-brandSoftGrey font-bold leading-[150%]">Link #{{ index + 1 }}</h4>
      </div>
      <p
        @click="emit('remove', { id: id, docId: docId })"
        class="text-brandSoftGrey font-light text-[16px] cursor-pointer hover:cursor-pointer"
      >
        Remove
      </p>
    </header>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const { index = 1, id } = defineProps(['index', 'id', 'docId'])
const emit = defineEmits(['remove'])
</script>
