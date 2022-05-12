<template>
  <button @click="emit('click')" class="bg-black border p-4 rounded-md text-white">{{label}}</button>
</template>

<script setup lang="ts">
import {defineEmits, defineProps} from 'vue';

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (event: 'click'): void
}>()

defineProps<{
  label: string,
}>()
</script>
