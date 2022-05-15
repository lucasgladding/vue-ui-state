<template>
  <Layout>
    <Button
      label="BASIC"
      @click="create(message)"
    />
    <Button
      label="SUCCESS"
      @click="create(message, MessageType.Success)"
    />
    <Button
      label="ERROR"
      @click="create(message, MessageType.Error)"
    />
  </Layout>
</template>

<script setup lang="ts">
import { MessageType, useMessageState } from '@/composables/useMessageState'
import Button from '@/components/Button.vue'
import Layout from '@/components/Layout.vue'

const { create } = useMessageState()

const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel nunc condimentum, dapibus nibh eu, euismod risus.'
</script>
