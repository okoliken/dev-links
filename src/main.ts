import './style.css'
import 'animate.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Vue3ProgressPlugin} from '@marcoschulte/vue3-progress';
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const app = createApp(App)

app.use(Vue3Toasity, {
    autoClose: 8000,
  } as ToastContainerOptions)
  
app.use(router)
app.use(Vue3ProgressPlugin)
app.mount('#app')
