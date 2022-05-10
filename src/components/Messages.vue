<template>
  <div>
    <h1>Messages</h1>
    <div>
      <div v-for="message in messages" :key="message.id">
        <p>{{message.text}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useErrorState} from '@/composables/useErrorState';

const {messages} = useErrorState()
</script>
