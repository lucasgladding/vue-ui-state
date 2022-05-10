import {computed} from 'vue';
import {useStore} from 'vuex';
import {ErrorState, MessageType} from '@/composables/ErrorState';

type UseErrorState = () => ErrorState

export const useErrorState: UseErrorState = () => {
    const store = useStore()

    const messages = computed(() => store.state.ui.messages)

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
