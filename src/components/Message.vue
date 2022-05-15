<template>
  <div :class="[classes.container, 'flex overflow-clip rounded-md']">
    <div
      :class="[classes.button, 'cursor-pointer p-4']"
      @click="emit('remove')"
    >
      <XCircleIcon class="w-10" />
    </div>
    <div :class="[classes.content, 'flex flex-1 items-center p-4']">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue'
import { XCircleIcon } from '@heroicons/vue/solid'
import { MessageType } from '@/composables/useMessageState'

type Colors = {
  container: string,
  button: string,
  content: string,
}

const theme: Record<string, Colors> = {
  [MessageType.Basic]: {
    container: 'border-2 border-black',
    button: 'bg-black text-white',
    content: ''
  },
  [MessageType.Error]: {
    container: 'border-2 border-red-500',
    button: 'bg-red-500 text-white',
    content: 'bg-red-400 text-white'
  },
  [MessageType.Success]: {
    container: 'border-2 border-green-500',
    button: 'bg-green-500 text-white',
    content: 'bg-green-400 text-white'
  }
}

const emit = defineEmits<{
  (event: 'remove'): void
}>()

const props = defineProps<{
  text: string,
  type?: MessageType
}>()

const classes = computed<Colors>(() => {
  return theme[props.type] ?? theme[MessageType.Basic]
})
</script>
