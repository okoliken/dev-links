<script setup lang="ts">
import DevButton from '../components/form-elements/DevButton.vue'
// @ts-ignore
import EmptyState from '../assets/empty-state.png'
</script>

<template>
  <main>
    <div>
      <h1 class="text-[32px] font-bold leading-[150%]">Customize your links</h1>
      <p class="text-brandSoftGrey text-[16px] font-light leading-[150%]">
        Add/edit/remove links below and then share all your profiles with the world!
      </p>
    </div>
    <DevButton type="outlined" class="w-full mt-10 font-bold">+ Add new link</DevButton>
    <section class="flex items-center justify-center bg-brandGrey w-full rounded-[12px] px-[20px] py-[40px] mt-7">
      <div class="flex items-center justify-center flex-col">
        <img class="w-[249.533px] h-[160px] my-5" v-bind:src="EmptyState" alt="empty state" />

        <h2 class="text-[32px] font-bold leading-[150%] text-brandDarkGrey text-center my-3">Let’s get you started</h2>

        <p class="text-brandSoftGrey leading-[150%] text-[16px] font-normal text-center my-4">
          Use the “Add new link” button to get started. Once you have more <br/> than one link, you can
          reorder and edit them. We’re here to help <br/> you share your profiles with everyone!
        </p>
      </div>
    </section>
  </main>
</template>
