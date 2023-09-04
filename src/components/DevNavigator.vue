


<script setup lang="ts">
import DevButton from './form-elements/DevButton.vue';
</script>


<template>
    <div class="bg-white pt-[16px] pr-[16px] pb-[16px] pl-[24px] rounded-[12px]">

       <div class="flex items-center justify-between">
          <RouterLink to="/"> <img src="../assets/logo.svg"  class="w-[146px] h-[32px]" alt="logo"></RouterLink>
          <div class="flex items-center gap-x-5">
            <p>hello</p>
            <p>hello</p>
          </div>
         <DevButton type="outlined">Preview</DevButton> 
       </div>
    </div>
</template>




