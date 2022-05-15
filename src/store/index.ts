import { createPinia } from 'pinia'
import { createStore } from 'vuex'
import { messages } from '@/store/messages/vuex'

export const pinia = createPinia()

export const store = createStore({
  modules: {
    errors: messages
  }
})
