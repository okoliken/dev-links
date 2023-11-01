import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid';
export interface Link {
  link: string
  title: string
  color: string
  id: string
  icon: string;
  $databaseId?: string
  $id?:string
}
interface Options {
  icon: string
  title: string
  color: string
}
const createLink = ref<Link[]>([])

export const useLink = () => {
  const selectOptions = ref<Options[]>([
    {
      icon: 'teenyicons:github-solid',
      title: 'GitHub',
      color: '#1A1A1A',
    
    },
    {
      icon: 'ri:youtube-fill',
      title: 'YouTube',
      color: '#EE3939',
     
    },
    {
      icon: 'simple-icons:frontendmentor',
      title: 'Frontend Mentor',
      color: '#FFF',
    },
    {
      icon: 'ant-design:twitter-outlined',
      title: 'Twitter',
      color: '#43B7E9',
    },
    {
      icon: 'prime:linkedin',
      title: 'LinkedIn',
      color: '#2D68FF',
    },
    {
      icon: 'ic:round-facebook',
      title: 'Facebook',
      color: '#2442AC',
    },
    {
      icon: 'mdi:twitch',
      title: 'Twitch',
      color: '#EE3FC8',
    },
    {
      icon: 'mdi:dev-to',
      title: 'Dev.to',
      color: '#333333',
    },
    {
      icon: 'cib:codewars',
      title: 'Codewars',
      color: '#8A1A50',
    },
    {
      icon: 'simple-icons:freecodecamp',
      title: 'freeCodeCamp',
      color: '#302267',
    },
    {
      icon: 'ri:gitlab-fill',
      title: 'GitLab',
      color: '#EB4925',
    },
    {
      icon: 'simple-icons:hashnode',
      title: 'Hashnode',
      color: '#0330D1',
    },
    {
      icon: 'cib:stackoverflow',
      title: 'Stack Overflow',
      color: '#EC7100',
    }
  ])

  return {
    selectOptions,
    createLink
  }
}
