<template>
  <div>
    <Button @click="clear()" label="CLEAR" />
    <TransitionGroup name="messages" tag="ul" class="border-t border-black mt-2">
      <li v-for="message in messages" :key="message.id">
        <Message :text="message.text" @remove="remove(message.id)" class="my-2" />
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button'
import Message from '@/components/Message'
import {useErrorState} from '@/composables/useErrorState';

const {messages, clear, remove} = useErrorState()
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
