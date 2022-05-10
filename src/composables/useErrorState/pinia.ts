import {computed} from 'vue';
import {useErrorsStore} from '@/store/pinia/errors';
import {ErrorState, MessageType} from './ErrorState';

export const useErrorState: () => ErrorState = () => {
    const store = useErrorsStore()

    const messages = computed(() => store.messages)

    const success = async (text: string) => {
        await store.append({
            id: Math.random().toString(),
            text,
            type: MessageType.Success,
        })
    }

    const error = async (text: string) => {
        await store.append({
            id: Math.random().toString(),
            text,
            type: MessageType.Error,
        })
    }

    const clear = async () => {
        await store.clear()
    }

    return {
        messages,
        success,
        error,
        clear,
    }
}
