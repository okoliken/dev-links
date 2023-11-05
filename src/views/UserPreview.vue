<script setup lang="ts">
import { onMounted } from 'vue'
import DevLinks from '../components/DevLinks.vue'
import { useLink } from '../reusables/links'
import { userDetails } from '../reusables/userInfo'
import { useUpload } from '../reusables/upload'
import { useDbActions } from '../reusables/dbActions'
import { Server } from '../utils/config'
import { useAuthorize } from '../reusables/auth'
const { getUser } = useAuthorize()

const { createLink } = useLink()
const { imgBlob, sterilizeData } = useUpload()

sessionStorage.setItem(
  'user',
  JSON.stringify({
    $id: '',
    email: '',
    name: ''
  })
)

onMounted(async () => {
    try {
        await getUser()
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

<template>
    <div class="!w-full max-w-[350px] profile flex items-center justify-center flex-col">
        <div class="border-4 border-brandPurple w-[104px] h-[104px] rounded-full">
            <div v-if="!imgBlob" class="w-[96px] h-[96px] bg-[#EEEEEE] rounded-full"></div>
            <img v-else class="w-[104px] h-[96px] rounded-full object-cover" :src="imgBlob" alt="user image" />
        </div>
        <div class="flex items-center justify-center flex-col gap-y-2 mt-6">
            <h2 class="text-brandDarkGrey text-[32px] font-bold leading-[150%]">
                {{ userDetails.name }}
            </h2>
            <p class="text-brandSoftGrey text-[16px] font-light">{{ userDetails.email }}</p>
        </div>
        <div class="w-full mt-12">
            <DevLinks :links="links" v-for="links in createLink" :key="links.id" />
        </div>
    </div>
</template>

<style scoped>
.profile {
    border-radius: 24px;
    background: #fff;
    padding: 48px 56px;
    /* shadow */
    box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.1) !important;
}
</style>
