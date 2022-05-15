import { Module } from 'vuex'
import { Message } from '@/composables/useMessageState/MessageState'

interface State {
    messages: Message[],
}

export const messages: Module<State, any> = {
    state: {
        messages: []
    },
    mutations: {
        append(state: State, message: Message) {
            state.messages = [...state.messages, message]
        },
        clear(state: State) {
            state.messages = []
        },
        remove(state: State, id: string) {
            state.messages = state.messages.filter(message => message.id !== id)
        }
    },
    actions: {
        append({ commit }, message: Message) {
            commit('append', message)
        },
        clear({ commit }) {
            commit('clear')
        },
        remove({ commit }, id: string) {
            commit('remove', id)
        }
    }
}
