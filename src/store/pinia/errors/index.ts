import {defineStore} from 'pinia';
import {Listener, Message} from '@/composables/useErrorState/ErrorState'

type State = {
    listeners: Listener[]
    messages: Message[]
}

interface Actions {
    broadcast(message: Message): Promise<void>
    clear(): Promise<void>
    listen(listener: Listener): Promise<void>
}

export const useErrorsStore = defineStore<'errors', State, {}, Actions>('errors', {
    state() {
        return {
            messages: [],
            listeners: [],
        }
    },
    actions: {
        async broadcast(message: Message) {
            this.messages = [...this.messages, message]
            this.listeners.forEach((listener) => {
                listener(message)
            })
        },
        async clear() {
            this.messages = []
        },
        async listen(listener: Listener) {
            this.listeners = [...this.listeners, listener]
        },
    }
})
