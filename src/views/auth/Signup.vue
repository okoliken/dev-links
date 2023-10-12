<script setup lang="ts">
import DevInput from '../../components/form-elements/DevInput.vue'
import DevButton from '../../components/form-elements/DevButton.vue'

import { Form } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { signUpSchema, getSubmitRegFn } from '../../formSchema'

import { useAuthorize } from '../../reusables/auth'
const formSchema = toTypedSchema(signUpSchema)

const {loading, register} = useAuthorize()


const submit = getSubmitRegFn(signUpSchema, async (values) => {
  // await register(values?.email, values?.password)
})
</script>

<template>
  <div class="bg-white p-[40px] w-full max-w-[30rem] rounded-[8px] md:mb-6">
    <div>
      <h1 class="text-brandDarkGrey text-[24px] lg:text-[32px] font-bold leading-[150%] mb-2">
        Create account
      </h1>
      <p class="text-brandSoftGrey text-[16px] !font-light leading-[150%]">
        Let’s get you started sharing your links!
      </p>

      <Form
        v-slot="{ errorBag, errors }"
        class="mt-7"
        :validation-schema="formSchema"
        @submit="submit"
      >
        <div class="mt-5">
          <label
            :class="[errorBag?.email?.length ? 'text-brandSoftRed' : null]"
            class="!mb-2 text-[#333] text-[12px]"
            >Email address</label
          >
          <DevInput
            name="email"
            type="email"
            placeholder="e.g. alex@email.com"
            icon="ri-mail-line"
          />
        </div>

        <div class="mt-5">
          <label
            :class="[errorBag?.password?.length ? 'text-brandSoftRed' : null]"
            class="!mb-2 text-[#333] text-[12px]"
            >Create password</label
          >
          <DevInput
            name="password"
            type="password"
            placeholder="At least 8 characters"
            icon="ri-lock-2-fill"
          />
        </div>
        <div class="mt-5">
          <label
            :class="[errorBag?.confirm_password?.length ? 'text-brandSoftRed' : null]"
            class="!mb-2 text-[#333] text-[12px]"
            >Confirm password</label
          >
          <DevInput
            name="confirm_password"
            type="password"
            placeholder="At least 8 characters"
            icon="ri-lock-2-fill"
          />
        </div>
        <p class="my-2 text-brandSoftGrey text-[12px] capitalize">
          Password must contain at least 8 characters
        </p>
        <DevButton
          :disabled="Object.keys(errors).length"
          :is-loading="loading"
          type="filled"
          class="w-full my-8"
        >
          Create new account
        </DevButton>

        <p class="mt-5 mb-7 text-center text-brandSoftGrey font-light">
          Already have an account?
          <span class="text-brandPurple hover:underline"
            ><router-link to="/auth/login"> Login</router-link></span
          >
        </p>
      </Form>
    </div>
  </div>
</template>
