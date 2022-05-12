<template>
  <Layout>
    <Button @click="success('success')" label="SUCCESS" />
    <Button @click="error('error')" label="ERROR" />
  </Layout>
</template>

<script setup lang="ts">
import {useErrorState} from '@/composables/useErrorState'
import Button from '@/components/Button'
import Layout from '@/components/Layout'

const {success, error, clear} = useErrorState()
</script>
