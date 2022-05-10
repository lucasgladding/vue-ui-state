import { Module } from 'vuex'
import {Listener, Message} from '@/composables/useErrorState/ErrorState'

interface State {
    listeners: Listener[],
    messages: Message[],
}

export const errors: Module<State, any> = {
    state: {
        listeners: [],
        messages: [],
    },
    mutations: {
        append(state: State, message: Message) {
            state.messages = [...state.messages, message]
        },
        clear(state: State) {
            state.messages = []
        },
        listen(state: State, listener: Listener) {
            state.listeners = [...state.listeners, listener]
        },
    },
    actions: {
        broadcast({commit, state}, message: Message) {
            commit('append', message)
            state.listeners.forEach((listener) => {
                listener(message)
            })
        },
        clear({commit}) {
            commit('clear')
        },
        listen({commit}, listener: Listener) {
            commit('listen', listener)
        },
    }
}
