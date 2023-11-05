
<template>
  <div>
    <div class="bg-white md:bg-brandPurple min-h-[357px] w-full hero md:py-5 md:px-5"></div>
    <div
      class="flex items-center justify-center w-full transform -translate-y-44 md:-translate-y-32"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.hero {
  border-radius: 0px 0px 32px 32px;
}

.hero .navigator {
  padding: 16px 16px 16px 24px;
}
</style>
