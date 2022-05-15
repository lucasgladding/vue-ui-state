import {createPinia} from 'pinia';
import { createStore } from 'vuex'
import {errors} from './errors/vuex'

export const pinia = createPinia()

export const store = createStore({
  modules: {
    errors,
  }
})
