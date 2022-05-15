import { createApp } from 'vue'
import App from '@/App'
import { pinia, store } from '@/store'

createApp(App).use(pinia).use(store).mount('#app')
