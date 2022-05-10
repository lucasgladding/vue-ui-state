import { Module } from 'vuex'
import {Message} from '@/composables/ErrorState';

interface State {
    messages: Message[],
}

export const errors: Module<State, any> = {
    state: {
        messages: []
    },
    mutations: {
        append(state: State, message: Message) {
            state.messages = [...state.messages, message]
        },
        clear(state: State) {
            state.messages = []
        }
    },
    actions: {
        append({commit}, message: Message) {
            commit('append', message)
        },
        clear({commit}) {
            commit('clear')
        }
    }
}
