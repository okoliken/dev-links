import { ref } from 'vue'

interface Link { link: string; title: string; color: string }

const createLink = ref<Link[]>([])

export const useLink = () => {
  const selectOptions = ref<{ icon: string; title: string; color: string }[]>([
    {
      icon: 'ri-github-fill',
      title: 'GitHub',
      color: '#1A1A1A'
    },
    {
      icon: 'ri-youtube-fill',
      title: 'YouTube',
      color: '#EE3939'
    },
    {
      icon: 'ri-linkedin-box-fill',
      title: 'LinkedIn',
      color: '#2D68FF'
    },
    {
      icon: 'ri-facebook-circle-fill',
      title: 'FaceBook',
      color: '#2442AC'
    }
  ])

  return {
    selectOptions,
    createLink
  }
}
