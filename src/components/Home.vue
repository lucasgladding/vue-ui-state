<template>
  <div>
    <h1>Home</h1>
    <button @click="success('success')">SUCCESS</button>
    <button @click="error('error')">ERROR</button>
  </div>
</template>

<script setup>
import {useErrorState} from '@/composables/useErrorState2';

const {success, error} = useErrorState()
</script>
