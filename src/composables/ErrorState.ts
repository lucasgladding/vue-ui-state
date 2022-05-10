import {ComputedRef} from 'vue';

export enum MessageType {
    Success,
    Error,
}

export type Message = {
    id: string,
    text: string,
    type: MessageType,
}

export interface ErrorState {
    messages: ComputedRef<Message[]>
    success: (text: string) => Promise<void>
    error: (text: string) => Promise<void>
    clear: () => Promise<void>
}
