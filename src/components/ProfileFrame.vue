<script setup lang="ts">
import { computed } from 'vue'
import DevLinks from './DevLinks.vue'
import { useLink } from '../reusables/links'
import { userDetails } from '../reusables/userInfo'
import { useUpload } from '../reusables/upload'

const { imgBlob } = useUpload()

const { createLink } = useLink()

const elementLength = computed(() => {
  if (createLink.value.length && createLink.value.length <= 4) {
    return 4 - createLink.value.length
  } else if (createLink.value.length >= 4) {
    return
  } else return 4
})
</script>
<template>
  <div class="flex items-center justify-center flex-col">
    <!-- profile -->
    <div class="mt-7">
      <div v-if="!imgBlob" class="w-[96px] h-[96px] bg-[#EEEEEE] rounded-full"></div>

      <div v-else>
        <img
          loading="lazy"
          class="w-[98px] h-[98px] rounded-full border-4 border-brandPurple object-cover"
          v-bind:src="imgBlob"
          alt="profile"
        />
      </div>
    </div>
    <!-- end -->

    <!-- title -->
    <div
      v-if="!userDetails?.name"
      class="bg-[#EEEEEE] rounded-[104px] w-[160px] h-[16px] mt-6"
    ></div>
    <h3 class="mt-7 font-semibold capitalize text-[18px] details" v-else>{{ userDetails.name }}</h3>
    <!-- end -->

    <!-- email -->
    <div
      v-if="!userDetails?.email"
      class="bg-[#EEEEEE] rounded-[104px] w-[72px] h-[8px] mt-6"
    ></div>
    <p v-else class="mt-3 text-[14px] font-light text-brandSoftGrey details">
      {{ userDetails.email }}
    </p>
    <!-- end -->

    <!-- links -->
    <div class="mt-12 w-[230px] h-[300px] overflow-hidden overflow-y-scroll links-section">
      <DevLinks :links="links" v-for="links in createLink" :key="links.id" />
      <div
        v-for="i in elementLength"
        :key="i"
        class="bg-[#EEEEEE] rounded-[8px] h-[44px] w-full mb-4"
      ></div>
    </div>
    <!-- end -->
  </div>
</template>

<style scoped>
.links-section {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
}

.links-section::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.details {
  font-family: Instrument Sans;
}
</style>
