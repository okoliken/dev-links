import { ref, reactive } from 'vue'
import { useDbActions } from '../reusables/dbActions'
import { notify } from '../reusables/auth'
import { Server } from '../utils/config'

const imgBlob = ref<any>(null)

interface file {
  $id: string
  bucketId: string
}

const userInfo = reactive({
  email: '',
  first_name:'',
  last_name:'',
})


export const useUpload = () => {
  const handleProfileUpload = async (img: File) => {
    try {
      await useDbActions.uploader(img)
    } catch (error: any) {
      notify(error)
    }
  }

  const sterilizeData = (file: file[]) => {
    if (file.length > 0) {
      const data = file[0]
      return `https://cloud.appwrite.io/v1/storage/buckets/${data.bucketId}/files/${data.$id}/view?project=${Server.project}`
    } else return null
  }

  return {
    imgBlob,
    handleProfileUpload,
    sterilizeData,
    userInfo
  }
}
