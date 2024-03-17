<script setup lang="ts">
const colorMode = useColorMode()
function openSecret() {
  useRouter().push('/manuscrit-7')
}
</script>

<template>
  <NuxtImg
    :src="colorMode.value == 'dark' ? '/book-white.png' : '/book-black.png'"
    alt="Book"
    class="w-1/3"
    @click="openSecret"
  />
</template>

<style scoped></style>
