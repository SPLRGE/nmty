<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <p class="font-changa-one text-6xl font-bold uppercase lg:text-8xl">{{ title }}</p>
    <p class="w-4/5">{{ text }}</p>
  </div>
</template>
