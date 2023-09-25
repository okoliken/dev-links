<script setup lang="ts">
// @ts-ignore
import emptyState from '../assets/empty-state.png'
</script>
<template>
  <section
    class="flex items-center justify-center bg-brandGrey w-full rounded-[12px] px-[20px] py-[40px] mt-7"
  >
    <div class="flex items-center justify-center flex-col">
      <img class="w-[249.533px] h-[160px] my-5 object-cover" v-bind:src="emptyState" alt="empty state" />

      <h2 class="text-[24px] md:text-[32px] font-bold leading-[150%] text-brandDarkGrey text-center my-3">
        Let’s get you started
      </h2>

      <p class="text-brandSoftGrey leading-[150%] text-[16px] font-normal text-center my-4">
        Use the “Add new link” button to get started. Once you have more <br  class="hidden md:block"/>
        than one link, you can reorder and edit them. We’re here to help <br class="hidden md:block"/>
        you share your profiles with everyone!
      </p>
    </div>
  </section>
</template>
