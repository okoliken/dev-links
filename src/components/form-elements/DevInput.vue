<script setup lang="ts">
import { Field } from 'vee-validate';
</script>

<template>
    <div class="relative inline">
        <Field
            class="py-[12px] pl-[40px] pr-[16px] rounded-[8px] border border-[#D9D9D9] outline-none appearance-none focus-within:border-brandPurple 
            focus-within:shadow-brandShadowDark transition-all active:duration-50 duration-50 ease-linear caret-brandPurple placeholder:text-[16px]"
            placeholder="e.g. alex@email.com" />
        <i class="ri-lock-2-fill absolute left-4 transform translate-y-[0.843rem] text-[16px] text-brandSoftGrey"></i>
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