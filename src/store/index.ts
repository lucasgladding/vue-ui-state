import {createPinia} from 'pinia';
import { createStore } from 'vuex'
import {errors} from './vuex/errors'

export const pinia = createPinia()

export const store = createStore({
  modules: {
    errors,
  }
})
