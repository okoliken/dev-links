import './style.css'
import 'animate.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Vue3ProgressPlugin} from '@marcoschulte/vue3-progress';

const app = createApp(App)

app.use(router)
app.use(Vue3ProgressPlugin)
app.mount('#app')
