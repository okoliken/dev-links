<script setup lang="ts">
import profileUploader from '../components/profile-uploader.vue'
import { Form as UpdateProfileForm } from 'vee-validate'
import DevInput from '../components/form-elements/DevInput.vue'
</script>

<template>
  <div >
    <div>
      <h1 class="text-[32px] font-bold leading-[150%]">Profile Details</h1>
      <p class="text-brandSoftGrey text-[16px] font-light leading-[150%]">
        Add your details to create a personal touch to your profile.
      </p>
    </div>

    <div class="bg-brandGrey p-[20px] my-8 rounded-[12px] flex items-center justify-between">
      <p class="text-brandSoftGrey text-[16px] font-light">Profile picture</p>
      <div class="flex items-center gap-x-6">
        <profileUploader />
        <p class="text-brandSoftGrey text-[14px] font-light">
          Image must be below 1024x1024px. <br />
          Use PNG or JPG format.
        </p>
      </div>
    </div>
    <div
      class="bg-brandGrey p-[20px] my-8 rounded-[12px] flex items-center justify-between w-full overflow-hidden overflow-y-scroll mb-24"
    >
      <UpdateProfileForm class="!w-full transform translate-y-2">
        <div class="mb-6 flex items-center justify-between w-full">
          <label class="text-brandSoftGrey text-[16px] font-light">First name*</label>
          <DevInput
            name="link"
            type="text"
            class="w-full max-w-sm"
            placeholder="e.g. John"
            icon=""
          />
        </div>
        <div class="mb-6 flex items-center justify-between w-full">
          <label class="text-brandSoftGrey text-[16px] font-light">Last name*</label>
          <DevInput
            name="text"
            class="w-full max-w-sm"
            type="text"
            placeholder="e.g. Appleseed"
            icon=""
          />
        </div>
        <div class="mb-6 flex items-center justify-between w-full">
          <label class="text-brandSoftGrey text-[16px] font-light">Email</label>
          <DevInput
            name="email"
            type="email"
            class="w-full max-w-sm"
            placeholder="e.g. email@example.com"
            icon=""
          />
        </div>
      </UpdateProfileForm>
    </div>
  </div>
</template>
