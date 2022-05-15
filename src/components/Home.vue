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
import {MessageType, useErrorState} from '@/composables/useErrorState'
import Button from '@/components/Button'
import Layout from '@/components/Layout'

const {create, clear} = useErrorState()

const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel nunc condimentum, dapibus nibh eu, euismod risus.'
</script>
