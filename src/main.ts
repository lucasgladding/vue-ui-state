import {createApp} from 'vue'
import App from './App.vue'
import {pinia, store} from '@/store'

createApp(App).use(pinia).use(store).mount('#app')
