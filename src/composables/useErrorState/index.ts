import {MessageType} from './ErrorState'
// import {useErrorState as pinia} from './pinia'
import {useErrorState as vuex} from './vuex'

export {
    MessageType,
    vuex as useErrorState
}
