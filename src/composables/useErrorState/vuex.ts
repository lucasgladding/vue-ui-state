import {computed} from 'vue';
import {useStore} from 'vuex';
import {ErrorState, MessageType} from './ErrorState';

export const useErrorState: () => ErrorState = () => {
    const store = useStore()

    const messages = computed(() => store.state.errors.messages)

    const success = async (text: string) => {
        await store.dispatch('append', {
            id: Math.random().toString(),
            text,
            type: MessageType.Success,
        })
    }

    const error = async (text: string) => {
        await store.dispatch('append', {
            id: Math.random().toString(),
            text,
            type: MessageType.Error,
        })
    }

    const clear = async () => {
        await store.dispatch('clear')
    }

    return {
        messages,
        success,
        error,
        clear,
    }
}
