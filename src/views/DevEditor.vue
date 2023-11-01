<script setup lang="ts">
import DevButton from '../components/form-elements/DevButton.vue'
import emptyState from '../components/empty-state.vue'
import CreateLink from '../components/create-link/CreateLink.vue'
import DevInput from '../components/form-elements/DevInput.vue'
import DevSelect from '../components/form-elements/DevSelect.vue'
import draggable from 'vuedraggable'

import { onUpdated, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { Link } from '../reusables/dbActions'
import { Form } from 'vee-validate'
import { validateUrl } from '../formSchema'
import { toTypedSchema } from '@vee-validate/zod'
import { useLink } from '../reusables/links'

import { useUpload } from '../reusables/upload'
import { useAuthorize } from '../reusables/auth'
import { Icon } from '@iconify/vue'
import { notify } from '../reusables/auth'
const { selectOptions, createLink } = useLink()
const { logout } = useAuthorize()

const { save, loading, update } = useUpload()
// dragging elements

const formField = {
  title: '',
  link: '',
  color: '',
  id: ''
}

// scroll to bottom on update
const scrollTo = () => {
  var height = document.getElementById('linkContainer')
  height?.scrollTo(0, height.scrollHeight)
}
onUpdated(() => scrollTo())
// end

const formSchema = toTypedSchema(validateUrl)
const form = ref()
const selected = ref('')
const color = ref('')
const icon = ref('')

const addLink = (links: Link) => {
  createLink.value.push(links)
}

const submit = async () => {
  console.log(form.value)
  if (!form.value?.validate()) {
    return
  } else {
    try {
      loading.value = true

      await update()
      await save()
    } catch (error:any) {
      notify(error)
      loading.value = false
    }
  }
}
</script>

<template>
  <main>
    <div
      @click="logout"
      class="fixed right-0 flex items-center gap-x-1 cursor-pointer bg-white h-12 py-1 px-2 rounded shadow-md z-50"
    >
      <Icon class="text-[20px] text-gray-500 font-semibold" icon="ic:twotone-logout" />
      <p class="mr-4 text-gray-500">Logout</p>
    </div>
    <div>
      <h1 class="text-[24px] lg:text-[32px] font-bold leading-[150%] mb-2 md:mb-3">
        Customize your links
      </h1>
      <p class="text-brandSoftGrey text-[16px] font-light leading-[150%]">
        Add/edit/remove links below and then share all your profiles with the world!
      </p>
    </div>

    <DevButton
      @click="addLink({ ...formField, title: selected, color: color, icon: icon, id: uuidv4() })"
      type="outlined"
      class="w-full mt-10 font-semibold add-links"
      >+ Add new link
    </DevButton>

    <div id="linkContainer" class="h-[70vh] overflow-hidden overflow-y-scroll mb-24">
      <emptyState v-if="createLink.length <= 0" />
      <draggable v-model="createLink" item-key="id" v-else>
        <template #item="{ element, index }">
          <CreateLink :index="index" @remove="createLink.shift()">
            <Form ref="form" :validation-schema="formSchema">
              <div class="my-3">
                <label class="text-brandDarkGrey text-[13px]">Platform</label>
                <DevSelect
                  @selected="
                    (e) => (
                      (element.title = e.title), (element.color = e.color), (element.icon = e.icon)
                    )
                  "
                  :options="selectOptions"
                  :value="element"
                />
              </div>
              <div class="my-3">
                <label class="text-brandDarkGrey text-[12px]">Link</label>
                <DevInput
                  name="url_link"
                  type="text"
                  v-model="element.link"
                  @sendvalue="(e) => (element.link = e)"
                  placeholder="e.g. https://www.github.com/johnappleseed"
                  icon="ri-links-fill"
                />
              </div>
            </Form>
          </CreateLink>
        </template>
      </draggable>

      <div
        
        class="p-[16px] md:p-[25px] flex items-end justify-end border-t 
        border-brandBorder absolute w-full bottom-0 bg-white left-0"
      >
        <DevButton
          :isLoading="loading"
          @click="submit"
          class="md:mr-4 w-full md:w-auto"
          type="filled"
          >Save</DevButton
        >
      </div>
    </div>
  </main>
</template>
