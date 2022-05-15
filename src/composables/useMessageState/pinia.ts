import { computed } from 'vue'
import { useMessageStore } from '@/store/messages/pinia'
import { MessageState, MessageType } from '@/composables/useMessageState/MessageState'

export const useMessageState: () => MessageState = () => {
    const store = useMessageStore()

    const messages = computed(() => store.messages)

    const create = async (text: string, type: MessageType = MessageType.Basic) => {
        await store.append({
            id: Math.random().toString(),
            text,
            type
        })
    }

    const clear = async () => {
        await store.clear()
    }

    const remove = async (id: string) => {
        await store.remove(id)
    }

    return {
        messages,
        create,
        clear,
        remove
    }
}
