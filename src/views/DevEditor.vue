<script setup lang="ts">
import DevButton from '../components/form-elements/DevButton.vue'
import { onUpdated, ref } from 'vue'
// @ts-ignore
import emptyState from '../components/empty-state.vue'
import CreateLink from '../components/create-link/CreateLink.vue'
import { Form } from 'vee-validate'
import DevInput from '../components/form-elements/DevInput.vue'
import DevSelect from '../components/form-elements/DevSelect.vue'
import { VueDraggableNext as draggable } from 'vue-draggable-next'
import { validateUrl } from '../formSchema'
import { toTypedSchema } from '@vee-validate/zod'
import { useLink } from '../reusables/links'

const { selectOptions, createLink } = useLink()
// dragging elements
interface MovedObject {
  moved: {
    element: {
      title: string
      link: string
    }
    oldIndex: number
    newIndex: number
  }
}

const formField = {
  title: 'Github',
  link: '',
  color:'#1A1A1A'
}



const log = (event: MovedObject) => {
  const oldIndex = event.moved.oldIndex
  const newIndex = event.moved.newIndex

  // Remove the element from the old position
  const removedElement = createLink.value.splice(oldIndex, 1)[0]
  console.log(removedElement)

  // Insert the element at the new position
  console.log(createLink.value.splice(newIndex, 0, removedElement))
}

//

// scroll to bottom on update
const scrollTo = () => {
  var height = document.getElementById('linkContainer')
  height.scrollTo(0, height.scrollHeight)
}
onUpdated(() => scrollTo())
// end

const formSchema = toTypedSchema(validateUrl)


const selected = ref('GitHub')
const color = ref('#1A1A1A')
</script>

<template>
  <main>
    <div>
      <h1 class="text-[24px] lg:text-[32px] font-bold leading-[150%] mb-2 md:mb-0">
        Customize your links
      </h1>
      <p class="text-brandSoftGrey text-[16px] font-light leading-[150%]">
        Add/edit/remove links below and then share all your profiles with the world!
      </p>
    </div>
    <DevButton @click="createLink.push({ ...formField, title: selected, color: color })" type="outlined" class="w-full mt-10 font-bold"
      >+ Add new link
    </DevButton>

    <div id="linkContainer" class="h-[70vh] overflow-hidden overflow-y-scroll mb-24">
      <emptyState v-if="createLink.length <= 0" />
      <draggable v-else class="list-group" @change="log" >
        <CreateLink
          @remove="createLink.shift()"
          :index="index"
          class="list-group-item"
          :key="index"
          v-for="(values, index) in createLink"
        >
          <Form :validation-schema="formSchema">
            <div class="my-3">
              <label class="text-brandDarkGrey text-[13px]">Platform</label>
              <DevSelect @selected="(e) => (values.title = e.title, values.color = e.color)" :options="selectOptions" />
            </div>
            <div class="my-3">
              <label class="text-brandDarkGrey text-[12px]">Link</label>
              <DevInput
                name="url_link"
                type="text"
                @sendvalue="(e) => values.link = e"
                placeholder="e.g. https://www.github.com/johnappleseed"
                icon="ri-links-fill"
              />
            </div>
          </Form>
        </CreateLink>
      </draggable>
    </div>
  </main>
</template>
