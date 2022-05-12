import {computed} from 'vue';
import {useErrorsStore} from '@/store/pinia/errors';
import {ErrorState, MessageType} from './ErrorState';

export const useErrorState: () => ErrorState = () => {
    const store = useErrorsStore()

    const messages = computed(() => store.messages)

    const create = async (text: string, type: MessageType = MessageType.Success) => {
        await store.append({
            id: Math.random().toString(),
            text,
            type,
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
        remove,
    }
}
