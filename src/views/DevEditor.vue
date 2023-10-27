<script setup lang="ts">
import { useDbActions } from '../reusables/dbActions'
import { userDetails } from '../reusables/userInfo'
import { Server } from '../utils/config'
// @ts-ignore
import DevButton from '../components/form-elements/DevButton.vue'
import { onUpdated, ref, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
// @ts-ignore
import emptyState from '../components/empty-state.vue'
// @ts-ignore
import CreateLink from '../components/create-link/CreateLink.vue'
import { Form } from 'vee-validate'
// @ts-ignore
import DevInput from '../components/form-elements/DevInput.vue'
// @ts-ignore
import DevSelect from '../components/form-elements/DevSelect.vue'
import draggable from 'vuedraggable'
import { validateUrl } from '../formSchema'
import { toTypedSchema } from '@vee-validate/zod'
import { useLink } from '../reusables/links'
import { useAuthorize } from '../reusables/auth'
import { Icon } from '@iconify/vue'
const { selectOptions, createLink } = useLink()
const { logout } = useAuthorize()
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

const selected = ref('')
const color = ref('')
const icon = ref('')
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
      @click="
        createLink.push({ ...formField, title: selected, color: color, icon: icon, id: uuidv4() })
      "
      type="outlined"
      class="w-full mt-10 font-semibold add-links"
      >+ Add new link
    </DevButton>

    <div id="linkContainer" class="h-[70vh] overflow-hidden overflow-y-scroll mb-24">
      <emptyState v-if="createLink.length <= 0" />
      <draggable v-model="createLink" item-key="id" v-else>
        <template #item="{ element, index }">
          <CreateLink :index="index" @remove="createLink.shift()">
            <Form :validation-schema="formSchema">
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
    </div>
  </main>
</template>



