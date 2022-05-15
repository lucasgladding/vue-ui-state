import { Ref } from 'vue'

export enum MessageType {
    Basic = 'basic',
    Error = 'error',
    Success = 'success',
}

export type Message = {
    id: string,
    text: string,
    type: MessageType,
}

export interface MessageState {
    messages: Ref<Message[]>
    create: (text: string, type?: MessageType) => Promise<void>
    clear: () => Promise<void>
    remove: (id: string) => Promise<void>
}
