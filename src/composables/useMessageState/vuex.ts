import { computed } from 'vue'
import { useStore } from 'vuex'
import { MessageState, MessageType } from '@/composables/useMessageState/MessageState'

export const useMessageState: () => MessageState = () => {
    const store = useStore()

    const messages = computed(() => store.state.errors.messages)

    const create = async (text: string, type: MessageType = MessageType.Basic) => {
        await store.dispatch('append', {
            id: Math.random().toString(),
            text,
            type
        })
    }

    const clear = async () => {
        await store.dispatch('clear')
    }

    const remove = async (id: string) => {
        await store.dispatch('remove', id)
    }

    return {
        messages,
        create,
        clear,
        remove
    }
}
