<template>
  <div class="bg-white font-changa text-xl text-black dark:bg-black dark:text-white">
    <NuxtLayout>
      <NuxtPage class="bg-gallery-100 dark:bg-zinc-900" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: '%s - NMTY',
})
</script>
