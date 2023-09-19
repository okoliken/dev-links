<script lang="ts" setup></script>

<template>
  <Teleport to="body">
    <div class="fixed bottom-12 flex items-center justify-center w-full animate__animated animate__bounceInUp">
    <div class="toast-dev bg-opacity-40">
      <p class="text-brandGrey text-[16px] font-medium">Your changes have been successfully saved!</p>
    </div>
  </div>
  </Teleport>
</template>

<style  scoped>
.toast-dev {
  border-radius: 12px;
  background: #333;
  padding: 16px 24px;
  /* shadow */
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.1);
}
</style>
