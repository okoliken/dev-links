<script setup lang="ts">
import DevInput from '../../components/form-elements/DevInput.vue'
import DevButton from '../../components/form-elements/DevButton.vue'
import { Form } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { loginSchema, getSubmitFn } from '../../formSchema'
import { useAuthorize } from '../../reusables/auth'
import {ref} from 'vue'
const { loading, login } = useAuthorize()
const submit = getSubmitFn(loginSchema, async (values) => {
  await login(values?.email, values?.password)
})


const email = ref('')
const password = ref('')
const formSchema = toTypedSchema(loginSchema)
</script>

<template>
  <div class="bg-white p-[40px] w-full max-w-[30rem] rounded-[8px] md:mb-6">
    <div>
      <h1 class="text-brandDarkGrey text-[24px] lg:text-[32px] font-bold leading-[150%] mb-2">
        Login
      </h1>
      <p class="text-brandSoftGrey text-[16px] !font-light leading-[150%]">
        Add your details below to get back into the app
      </p>

      <Form
        @submit="submit"
        v-slot="{ errorBag, errors }"
        class="mt-7"
        :validation-schema="formSchema"
      >
        <div class="mt-5">
          <label
            :class="[errorBag?.email?.length ? 'text-brandSoftRed' : null]"
            class="!mb-2 text-[#333] text-[12px]"
            >Email address</label
          >
          <DevInput
            name="email"
            v-model="email"
            type="email"
            placeholder="e.g. alex@email.com"
            icon="ri-mail-line"
          />
        </div>

        <div class="mt-5">
          <label
            :class="[errorBag?.password?.length ? 'text-brandSoftRed' : null]"
            class="!mb-2 text-[#333] text-[12px]"
            >Password</label
          >
          <DevInput
          v-model="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            icon="ri-lock-2-fill"
          />
        </div>
        <DevButton
          :disabled="Object.keys(errors).length"
          :is-loading="loading"
          type="filled"
          class="w-full my-8"
        >
          Login
        </DevButton>

        <p class="mt-5 mb-7 text-center text-[16px] text-brandSoftGrey font-light">
          Don’t have an account?
          <span class="text-brandPurple hover:underline">
            <br class="block lg:hidden" />
            <router-link to="/auth/create-account"> Create account</router-link></span
          >
        </p>
      </Form>
    </div>
  </div>
</template>
