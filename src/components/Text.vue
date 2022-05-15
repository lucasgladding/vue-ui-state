<template>
  <div class="text-2xl">
    {{ content }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  content: string
}>()
</script>
