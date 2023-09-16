<script setup lang="ts">
import DevButton from '../components/form-elements/DevButton.vue'
import { ref, onUpdated } from 'vue'
// @ts-ignore
import emptyState from '../components/empty-state.vue'
import CreateLink from '../components/create-link/container.vue'
import { Form } from 'vee-validate'
import DevInput from '../components/form-elements/DevInput.vue'
import DevSelect from '../components/form-elements/DevSelect.vue'

const formField = {
  title: '',
  link: ''
}

const createLink = ref([])

// scroll to bottom on update
const scrollTo = () => {
  var height = document.getElementById('linkContainer')
  height.scrollTo(0, height.scrollHeight)
}
onUpdated(() => scrollTo())
// end
</script>

<template>
  <main>
    <div>
      <h1 class="text-[32px] font-bold leading-[150%]">Customize your links</h1>
      <p class="text-brandSoftGrey text-[16px] font-light leading-[150%]">
        Add/edit/remove links below and then share all your profiles with the world!
      </p>
    </div>
    <DevButton @click="createLink.push(formField)" type="outlined" class="w-full mt-10 font-bold"
      >+ Add new link
    </DevButton>

    <section id="linkContainer" class="h-[70vh] overflow-hidden overflow-y-scroll mb-24">
      <emptyState v-if="createLink.length <= 0" />
      <CreateLink
        @remove="createLink.shift()"
        :index="index"
        v-else
        :key="index"
        v-for="(values, index) in createLink"
      >
        <Form>
          <div class="my-3">
            <label class="text-brandDarkGrey text-[12px]">Platform</label>
            <DevSelect :options="['Go', 'TypeScript', 'Css', 'Svelte']" />
          </div>
          <div class="my-3">
            <label class="text-brandDarkGrey text-[12px]">Link</label>
            <DevInput
              name="link"
              type="text"
              placeholder="e.g. https://www.github.com/johnappleseed"
              icon="ri-links-fill"
            />
          </div>
        </Form>
      </CreateLink>
    </section>

    <!--   -->
  </main>
</template>
