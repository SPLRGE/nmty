<script setup lang="ts">
const { getSingletonItem } = useDirectusItems()

interface LandingPage {
  title: string
  sub_title: string
}
const { data } = await useAsyncData('landing_page', () => {
  return getSingletonItem<LandingPage>({
    collection: 'landing_page',
  })
})

definePageMeta({
  title: () => `${data.value?.title} - NMTY`,
})
</script>

<template>
  <div class="flex flex-col items-center justify-around px-4 py-48 font-changa lg:flex-row lg:px-60 xl:px-72">
    <div class="flex flex-col">
      <p class="font-changa-one text-6xl font-bold uppercase lg:text-8xl">{{ data?.title }}</p>
      <p class="w-4/5">{{ data?.sub_title }}</p>
    </div>
    <HomeBook class="hidden xl:block" />
  </div>
</template>

<style scoped></style>
