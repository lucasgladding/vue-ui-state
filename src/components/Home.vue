<template>
  <div>
    <h1>Home</h1>
    <button @click="success('success')">SUCCESS</button>
    <button @click="error('error')">ERROR</button>
    <button @click="clear">CLEAR</button>
  </div>
</template>

<script setup>
import {useErrorState} from '@/composables/useErrorState';

const {success, error, clear} = useErrorState()
</script>
