<template>
  <div class="flex items-start p-4">
    <Home class="flex-1 mb-8" />
    <Messages class="messages" />
  </div>
</template>

<script setup>
import Home from '@/components/Home'
import Messages from '@/components/Messages'
</script>

<style scoped>
.messages {
  width: 25%;
}
</style>
