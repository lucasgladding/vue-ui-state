<template>
  <div>
    <Text content="Messages" />
    <TransitionGroup name="messages" tag="ul">
      <li v-for="message in messages" :key="message.id">
        <Message :text="message.text" @remove="remove(message.id)" class="my-2" />
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import Message from '@/components/Message'
import Text from '@/components/Text'
import {useErrorState} from '@/composables/useErrorState';

const {messages, remove} = useErrorState()
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
