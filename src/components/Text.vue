<template>
<h1 class="text-2xl">{{content}}</h1>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

defineProps<{
  content: string
}>()
</script>
