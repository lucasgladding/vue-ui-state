<template>
  <div>
    <Button
      label="CLEAR"
      @click="clear()"
    />
    <TransitionGroup
      name="messages"
      tag="ul"
      class="border-t border-black mt-2"
    >
      <li
        v-for="message in messages"
        :key="message.id"
      >
        <Message
          :text="message.text"
          :type="message.type"
          class="my-2"
          @remove="remove(message.id)"
        />
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
import Message from '@/components/Message.vue'
import { useMessageState } from '@/composables/useMessageState'

const { messages, clear, remove } = useMessageState()
</script>

<style scoped>
.messages-enter-active, .messages-leave-active {
  transition: all 0.5s ease;
}
.messages-enter-from, .messages-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
</style>
