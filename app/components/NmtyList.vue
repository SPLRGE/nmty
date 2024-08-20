<script setup lang="ts">
defineProps<{
  title: string
  links: { text: string; href: string; icon?: string; external?: boolean }[]
}>()
</script>

<template>
  <div>
    <p class="font-changa-one text-red-orange-500">{{ title }}</p>
    <ul class="font-changa">
      <li v-for="link in links" :key="link.href">
        <NuxtLink
          class="hover:text-red-orange-500 hover:underline"
          :href="link.href"
          :external="link.external ?? false"
        >
          <Icon v-if="link.icon" :name="link.icon" />
          {{ link.text }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
