<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'
import type { DevInput } from './types'
import { computed } from 'vue'


const emit = defineEmits(['sendvalue', 'update:modelValue'])

const paddingLeft = computed(() => {
  return icon !== '' ? 'pl-[40px] pr-[16px]' : 'pl-[20px] pr-[16px]'
})

const { name = 'text', type = 'text', icon = '', placeholder, modelValue } = defineProps<DevInput>()

const sendValues = (val: any) => {
  emit('sendvalue', val.target.value)
}

function onInput(e:any) {
  emit('update:modelValue', e.target.value)
}

</script>

<template>
  <div class="relative">
    <i
      v-if="icon"
      :class="icon"
      class="absolute left-4 transform translate-y-[0.843rem] text-[16px] text-brandSoftGrey"
    ></i>
    <Field :value="modelValue" :name="name" v-slot="{ field, meta, errorMessage }" placeholder="e.g. alex@email.com">
      <input
        class="
          py-[12px]
          rounded-[8px]
          border border-[#D9D9D9]
          outline-none
          appearance-none
          focus-within:border-brandPurple focus-within:shadow-brandShadowDark
          transition-all
          active:duration-50
          duration-50
          ease-linear
          caret-brandPurple
          placeholder:text-[16px]
          !w-full
        "
        
        value="modelValue"
        v-bind="field"
        :class="[
          !meta.valid && errorMessage
            ? 'border-brandSoftRed focus-within:border-brandSoftRed focus-within:shadow-none transition-all active:duration-50 duration-50 ease-linear'
            : null,
          paddingLeft
        ]"
        :name="name"
        :type="type"
        @input="(e) => (sendValues(e), onInput(e))"
        autocomplete="off"
        :placeholder="placeholder"
      />
    </Field>
    <ErrorMessage
      class="absolute right-4 top-4 text-brandRed text-[12px] animate__animated animate__wobble"
      :name="name"
    />
  </div>
</template>

<style scoped>
input {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
</style>

