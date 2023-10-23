<script setup lang="ts">
// @ts-ignore
import profileUploader from '../components/profile-uploader.vue'
import { reactive, onMounted } from 'vue'
import { userDetails } from '../reusables/userInfo'
import { useUpload } from '../reusables/upload'
import { Form as UpdateProfileForm } from 'vee-validate'
import { profileSchema } from '../formSchema'
import { toTypedSchema } from '@vee-validate/zod'
const { userInfo } = useUpload()
// @ts-ignore
import DevInput from '../components/form-elements/DevInput.vue'

onMounted(() => {
  if (userDetails.value) {
    userInfo.email = userDetails.value?.email
  }
})
const formSchema = toTypedSchema(profileSchema)
</script>

<template>
  <div>
    <div>
      <h1 class="text-[24px] md:text-[32px] font-bold leading-[150%] mb-2 md:mb-0">
        Profile Details
      </h1>
      <p class="text-brandSoftGrey text-[16px] font-light leading-[150%]">
        Add your details to create a personal touch to your profile.
      </p>
    </div>

    <div
      class="
        bg-brandGrey
        p-[20px]
        my-8
        rounded-[12px]
        flex
        items-start
        flex-col
        justify-start
        md:flex-row md:items-center md:justify-between
      "
    >
      <p class="text-brandSoftGrey text-[16px] font-light">Profile picture</p>
      <div class="flex flex-col md:flex-row md:items-center md:gap-x-6">
        <profileUploader class="my-3 md:my-0" />
        <p class="text-brandDarkGrey text-[14px] font-light mt-4 md:mt-0">
          Image must be below 1024x1024px. <br class="hidden md:block" />
          Use PNG or JPG format.
        </p>
      </div>
    </div>
    <div
      class="
        bg-brandGrey
        p-[20px]
        my-8
        rounded-[12px]
        flex
        items-center
        lg:justify-between
        w-full
        overflow-hidden overflow-y-scroll
        mb-24
      "
    >
      <UpdateProfileForm :validation-schema="formSchema" class="!w-full transform translate-y-2">
        <div
          class="
            mb-6
            flex
            items-start
            flex-col
            md:flex-row md:items-center md:justify-between
            w-full
          "
        >
          <label class="text-brandSoftGrey text-[12px] mb-1 md:mb-0 md:text-[16px] font-light"
            >First name*</label
          >
          <DevInput
            v-model="userInfo.first_name"
            name="first_name"
            type="text"
            class="w-full max-w-sm"
            placeholder="e.g. John"
          />
        </div>
        <div
          class="
            mb-6
            flex
            items-start
            flex-col
            md:flex-row md:items-center md:justify-between
            w-full
          "
        >
          <label class="text-brandSoftGrey text-[12px] mb-1 md:mb-0 md:text-[16px] font-light"
            >Last name*</label
          >
          <DevInput
            v-model="userInfo.last_name"
            name="last_name"
            class="w-full max-w-sm"
            type="text"
            placeholder="e.g. Appleseed"
          />
        </div>
        <div
          class="
            mb-6
            flex
            items-start
            flex-col
            md:flex-row md:items-center md:justify-between
            w-full
          "
        >
          <label class="text-brandSoftGrey text-[12px] mb-1 md:mb-0 md:text-[16px] font-light"
            >Email</label
          >
          <DevInput
            :disabled="true"
            name="email"
            type="email"
            v-model="userInfo.email"
            class="w-full max-w-sm !cursor-not-allowed"
            placeholder="e.g. email@example.com"
          />
        </div>
      </UpdateProfileForm>
    </div>
  </div>
</template>
