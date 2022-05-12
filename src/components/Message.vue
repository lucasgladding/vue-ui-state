<template>
  <div class="border p-4 rounded-md">{{text}}</div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

defineProps<{
  text: string,
}>()
</script>
