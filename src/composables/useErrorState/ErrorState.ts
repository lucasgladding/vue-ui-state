import {Ref} from 'vue';

export enum MessageType {
    Success,
    Error,
}

export type Message = {
    id: string,
    text: string,
    type: MessageType,
}

export type Listener = (message: Message) => void

export interface ErrorState {
    messages: Ref<Message[]>
    success: (text: string) => Promise<void>
    error: (text: string) => Promise<void>
    clear: () => Promise<void>
    listen: (listener: Listener) => Promise<void>
}