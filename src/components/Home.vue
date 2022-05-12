<template>
  <Layout>
    <Button @click="create('basic')" label="BASIC" />
    <Button @click="create('success', MessageType.Success)" label="SUCCESS" />
    <Button @click="create('error', MessageType.Error)" label="ERROR" />
  </Layout>
</template>

<script setup lang="ts">
import {MessageType, useErrorState} from '@/composables/useErrorState'
import Button from '@/components/Button'
import Layout from '@/components/Layout'

const {create, clear} = useErrorState()
</script>
