import { createApp } from 'vue'
import { pinia, store } from '@/store'
import { MessageState } from '@/composables/useMessageState/MessageState'
import { useMessageState as useErrorStatePinia } from '@/composables/useMessageState/pinia'
import { useMessageState as useErrorStateVueX } from '@/composables/useMessageState/vuex'

function withSetup<T>(composable: () => T): [T, any] {
    let result: T
    const app = createApp({
        setup() {
            result = composable()
            return () => {}
        }
    })
    app
        .use(pinia)
        .use(store)
        .mount(document.createElement('div'))
    return [result!, app]
}

type Case = [string, () => MessageState]

const cases: Case[] = [
    ['pinia', useErrorStatePinia],
    ['vuex', useErrorStateVueX]
]

describe.each(cases)('useMessageState using %s store', (name, composable) => {
    const [result] = withSetup(() => composable())

    afterEach(async () => {
        await result.clear()
    })

    it('can create messages', async () => {
        const text = 'message text'
        await result.create(text)
        expect(result.messages.value).toHaveLength(1)
    })

    it('can remove messages', async () => {
        const text = 'message text'
        await result.create(text)
        expect(result.messages.value).toHaveLength(1)
        const id = result.messages.value[0].id
        await result.remove(id)
        expect(result.messages.value).toHaveLength(0)
    })
})
