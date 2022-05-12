<template>
  <div class="border flex rounded-md">
    <div @click="emit('remove')" class="bg-black cursor-pointer p-4 text-white">REMOVE</div>
    <div class="p-4">{{text}}</div>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps} from 'vue'

const emit = defineEmits<{
  (event: 'remove'): void
}>()

defineProps<{
  text: string,
}>()
</script>
