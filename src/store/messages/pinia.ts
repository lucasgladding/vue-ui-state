import { defineStore } from 'pinia'
import { Message } from '@/composables/useMessageState/MessageState'

type State = {
    messages: Message[]
}

interface Actions {
    append(message: Message): Promise<void>
    clear(): Promise<void>
    remove(id: string): Promise<void>
}

export const useMessageStore = defineStore<'errors', State, {}, Actions>('errors', {
    state() {
        return {
            messages: []
        }
    },
    actions: {
        async append(message: Message) {
            this.messages = [...this.messages, message]
        },
        async clear() {
            this.messages = []
        },
        async remove(id: string) {
            this.messages = this.messages.filter(message => message.id !== id)
        }
    }
})
