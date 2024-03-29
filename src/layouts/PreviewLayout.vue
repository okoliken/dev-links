<template>
  <div>
    <div class="bg-white md:bg-brandPurple min-h-[357px] w-full hero md:py-5 md:px-5">
      <div class="bg-white flex items-center justify-between navigator rounded-[12px]">
        <DevButton @click="goBack" type="outlined" width="100%"> Back to Editor </DevButton>
        <DevButton
          @click="readTextFromClipboard(`${base_url}/preview/${user_name()?.name}`)"
          type="filled"
          width="100%"
        >
          Share Link
        </DevButton>
      </div>
    </div>
    <div
      class="flex items-center justify-center w-full transform -translate-y-44 md:-translate-y-32"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DevButton from '../components/form-elements/DevButton.vue'
import { showToast } from '../useToast'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useAuthorize } from '../reusables/auth'
import { useUpload } from '../reusables/upload'
import { useDbActions } from '../reusables/dbActions'
import { Server } from '../utils/config'
import { useLink } from '../reusables/links'

const { createLink } = useLink()
const { imgBlob, sterilizeData } = useUpload()
const { getUser } = useAuthorize()

const user_name = () => {
  const user = sessionStorage.getItem('user')
  if (user !== null) {
    return JSON.parse(user)
  } else return null
}

onMounted(async () => {
  await getUser()
  try {
    const data = await useDbActions.getLinks(Server.collectionID)

    if (data?.documents) {
      createLink.value = data?.documents as any
    } else createLink.value = []
  } catch (error) {
    return
  }

  try {
    const file = await useDbActions.getFiles()
    if (file.files) {
      imgBlob.value = sterilizeData(file.files)
    }
  } catch (error) {
    return
  }
})
const navigate = useRouter()

const base_url = ref(window.location.origin)

const goBack = () => {
  navigate.push('/')
}

const readTextFromClipboard = async (url: string) => {
  try {
    await navigator.clipboard.writeText(url)
    showToast(true, 'The link has been copied to your clipboard!')
  } catch (error) {
    showToast(true, 'Failed to copy text')
  }
}
</script>

<style scoped>
.hero {
  border-radius: 0px 0px 32px 32px;
}

.hero .navigator {
  padding: 16px 16px 16px 24px;
}
</style>
