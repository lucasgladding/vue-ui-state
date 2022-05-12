import {createApp} from 'vue';
import {pinia, store} from '@/store'
import {ErrorState} from './ErrorState';
import {useErrorState as useErrorStatePinia} from './pinia';
import {useErrorState as useErrorStateVueX} from './vuex';

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

type Case = [string, () => ErrorState]

const cases: Case[] = [
    ['pinia', useErrorStatePinia],
    ['vuex', useErrorStateVueX],
]

describe.each(cases)('useErrorState using %s store', (name, composable) => {
    const [result] = withSetup(() => composable())

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

    it('can remove messages', async () => {
        const text = 'message text'
        await result.success(text)
        expect(result.messages.value).toHaveLength(1)
        const id = result.messages.value[0].id
        await result.remove(id)
        expect(result.messages.value).toHaveLength(0)
    })
})
