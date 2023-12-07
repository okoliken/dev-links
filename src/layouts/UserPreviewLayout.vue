<template>
  <div>
    <div
      class="bg-white md:bg-brandPurple min-h-[230px] lg:min-h-[357px] w-full hero md:py-5 md:px-5"
    ></div>
    <div
      class="flex items-center justify-center w-full transform -translate-y-44 md:-translate-y-32"
    >
      <slot></slot>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { onMounted } from 'vue'
import { useAuthorize } from '../reusables/auth'
import { useUpload } from '../reusables/upload'
import { useDbActions } from '../reusables/dbActions'
import { Server } from '../utils/config'
import { useLink } from '../reusables/links'

const { createLink } = useLink()
const { imgBlob, sterilizeData } = useUpload()
const { getUser } = useAuthorize()



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


</script>

<style scoped>
.hero {
  border-radius: 0px 0px 32px 32px;
}

.hero .navigator {
  padding: 16px 16px 16px 24px;
}
</style>
