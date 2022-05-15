<template>
  <button
    class="bg-black border p-4 rounded-md text-white"
    @click="emit('click')"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import {defineEmits, defineProps} from 'vue'

const emit = defineEmits<{
  (event: 'click'): void
}>()

defineProps<{
  label: string,
}>()
</script>
