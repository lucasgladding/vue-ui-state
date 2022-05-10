import {computed} from 'vue';
import {useErrorsStore} from '@/store/pinia/errors';
import {ErrorState, Listener, MessageType} from './ErrorState';

export const useErrorState: () => ErrorState = () => {
    const store = useErrorsStore()

    const messages = computed(() => store.messages)

    const success = async (text: string) => {
        await store.broadcast({
            id: Math.random().toString(),
            text,
            type: MessageType.Success,
        })
    }

    const error = async (text: string) => {
        await store.broadcast({
            id: Math.random().toString(),
            text,
            type: MessageType.Error,
        })
    }

    const clear = async () => {
        await store.clear()
    }

    const listen = async (listener: Listener) => {
        await store.listen(listener)
    }

    return {
        messages,
        success,
        error,
        clear,
        listen,
    }
}
