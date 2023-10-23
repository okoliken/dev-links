<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import DevNavigator from '../components/DevNavigator.vue'
import FrameOne from '../components/FrameOne.vue'
import FrameTwo from '../components/FrameTwo.vue'
import DevButton from '../components/form-elements/DevButton.vue'
import ProfileFrame from '../components/ProfileFrame.vue'
import { useLink } from '../reusables/links'
import { userDetails } from '../reusables/userInfo'
import { useDbActions } from '../reusables/dbActions'
import { Server } from '../utils/config'
import { showToast } from '../useToast'
const { createLink } = useLink()
import type { Link } from '../reusables/dbActions'
import { useUpload } from '../reusables/upload'
const { userInfo } = useUpload()

const loading = ref(false)
const btnState = ref(false)
const route = useRoute()

const action_type = computed(() => {
  if (route.name === 'Editor') {
    return route.name
  } else if (route.name === 'Profile Details') {
    return route.name
  } else return
})

const save = async (devInfo: Link[]) => {
  try {
    if (devInfo.length < 0) {
      loading.value = true
      const createLinkPromises = devInfo.map((info) => {
        return useDbActions.createLink(Server.collectionID, info, userDetails.value?.$id)
      })

      await Promise.all(createLinkPromises)

      loading.value = false
      showToast(5000, true, ' Your changes have been successfully saved!')
    } else if (devInfo.length > 0) {
      return
    } else return
  } catch (error) {
    loading.value = false
  }
}

const updateUserInfo = async () => {
  if (userInfo.first_name && userInfo.last_name) {
     loading.value = true
    await useDbActions.updateInfo(`${userInfo.first_name} ${userInfo.last_name}`)
    showToast(5000, true, `Your changes have been successfully saved!`)
     loading.value = false
  } else return
}
</script>

<template>
  <div class="bg-brandGrey min-h-screen">
    <div class="w-full mb-4 sm:mb-0 md:p-4 fixed z-50 bg-brandGrey">
      <DevNavigator />
    </div>

    <div class="flex items-center justify-center flex-col px-6">
      <div class="grid grid-cols-12 min-h-screen w-full lg:gap-x-6 mb-4 mt-28">
        <div
          class="
            col-span-12
            hidden
            md:col-span-5
            w-full
            bg-white
            rounded-[12px]
            p-[40px]
            lg:flex
            align-center
            justify-center
          "
        >
          <div
            class="
              relative
              h-full
              transform
              md:-translate-y-8
              flex
              items-center
              justify-center
              flex-col
            "
          >
            <FrameOne class="relative" />
            <FrameTwo class="absolute left-3" />
            <ProfileFrame class="absolute w-full" />
          </div>
        </div>

        <div
          class="col-span-12 md:col-span-12 lg:col-span-7 w-full bg-white rounded-[12px] relative"
        >
          <div class="p-[24px] md:p-[40px]">
            <slot></slot>
          </div>

          <div
            class="
              p-[16px]
              md:p-[25px]
              flex
              items-end
              justify-end
              border-t border-brandBorder
              absolute
              w-full
              bottom-0
              bg-white
            "
          >
            <DevButton
              :disabled="btnState"
              @click="action_type === 'Editor' ? save(createLink) : updateUserInfo()"
              :isLoading="loading"
              class="md:mr-4 w-full md:w-auto"
              type="filled"
              >Save</DevButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
