import {createApp} from 'vue';
import {useErrorState} from '@/composables/useErrorState2';

import {pinia, store} from '@/store'

function withSetup<T>(composable: () => T): [T, any] {
    let result: T
    const app = createApp({
        setup() {
            result = composable()
            return () => {}
        }
    })
    app.use(store).use(pinia).mount(document.createElement('div'))
    return [result!, app]
}

describe('useErrorState', () => {
    const [result] = withSetup(() => useErrorState())

    afterEach(async () => {
        await result.clear()
    })

    it('can append success messages', async () => {
        const text = 'message text'
        await result.success(text)
        expect(result.messages.value).toHaveLength(1)
    })

    it('can append error messages', async () => {
        const text = 'message text'
        await result.error(text)
        expect(result.messages.value).toHaveLength(1)
    })
})
