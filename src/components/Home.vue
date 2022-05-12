<template>
  <div>
    <h1 class="text-2xl">Home</h1>
    <Layout>
      <Button @click="success('success')" label="SUCCESS" />
      <Button @click="error('error')" label="ERROR" />
      <Button @click="clear()" label="CLEAR" />
    </Layout>
  </div>
</template>

<script setup lang="ts">
import {useErrorState} from '@/composables/useErrorState';
import Button from '@/components/Button.vue';
import Layout from '@/components/Layout.vue'

const {success, error, clear} = useErrorState()
</script>
