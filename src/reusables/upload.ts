import { ref, reactive, computed } from 'vue'
import { useDbActions } from '../reusables/dbActions'
import { notify } from '../reusables/auth'
import { Server } from '../utils/config'
import { userDetails } from '../reusables/userInfo'
import { showToast } from '../useToast'
import { useLink } from '../reusables/links'

const { createLink } = useLink()
const imgBlob = ref<any>(null)
const loading = ref(false)
const btnState = ref(false)
const logs = ref([])
const fileId = ref('')

interface file {
  $id: string
  bucketId: string
}

const userInfo = reactive({
  email: '',
  first_name: '',
  last_name: ''
})

export const useUpload = () => {
  const handleProfileUpload = async (img: File) => {
    if (imgBlob.value === null) {
      try {
        await useDbActions.uploader(img)
      } catch (error: any) {
        notify(error)
      }
    } else {
      try {
        await useDbActions.deleteImage(fileId.value)
      } catch (error: any) {
        notify(error)
      }
      try {
        await useDbActions.uploader(img)
      } catch (error: any) {
        notify(error)
      }
    }
  }

  const sterilizeData = (file: file[]) => {
    if (file.length > 0) {
      fileId.value = file[0].$id
      const data = file[0]
      return `https://cloud.appwrite.io/v1/storage/buckets/${data.bucketId}/files/${data.$id}/view?project=${Server.project}`
    } else return null
  }

  const oldDataFromDb = computed(() => {
    if (createLink.value.length > 0) {
      const val = createLink.value.filter((links) => {
        if (links.$databaseId) {
          return {
            color: links.color,
            link: links.link,
            title: links.title,
            icon: links.icon,
            id: links.id,
            $id: links.$id
          }
        }
      })

      return val
    } else return []
  })
  const newDataFromApp = computed(() => {
    if (createLink.value.length > 0) {
      const val = createLink.value.filter((links) => {
        if (!links.$databaseId) {
          return links
        }
      })

      return val
    } else return []
  })

  const save = async () => {
    if (newDataFromApp.value.length) {
      try {
        loading.value = true
        const createLinkPromises = newDataFromApp.value.map((info) => {
          return useDbActions.createLink(Server.collectionID, info, userDetails.value?.$id)
        })

        await Promise.all(createLinkPromises)
        loading.value = false
        showToast(true, ' Your changes have been successfully saved!')
      } catch (error) {
        loading.value = false
      }
    } else return
  }

  const update = async () => {
    try {
      if (oldDataFromDb.value.length > 0) {
        loading.value = true

        const updateLinkPromises = oldDataFromDb.value.map((info) => {
          return useDbActions.updateLinks(Server.collectionID, String(info.$id), {
            color: info.color,
            link: info.link,
            title: info.title,
            icon: info.icon,
            id: info.id
          })
        })

        await Promise.all(updateLinkPromises)
        loading.value = false
      } else return
    } catch (error) {
      loading.value = false
    }
  }

  const updateUserInfo = async () => {
    if (userInfo.first_name && userInfo.last_name) {
      loading.value = true
      await useDbActions.updateInfo(`${userInfo.first_name} ${userInfo.last_name}`)
      showToast(true, `Your changes have been successfully saved!`)
      loading.value = false
    } else return
  }

  return {
    imgBlob,
    handleProfileUpload,
    sterilizeData,
    userInfo,
    save,
    updateUserInfo,
    btnState,
    loading,
    update,
    logs
  }
}
