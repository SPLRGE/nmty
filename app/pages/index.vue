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

useSeoMeta({
  title: data.value?.title,
  description: data.value?.sub_title,
  applicationName: 'NMTY',
  keywords: 'NMTY, nmty, manga, anime, streaming, vostfr, vf, gratuit, illimité, livre, application, japon, france',
})
</script>

<template>
  <HeroLanding>
    <template #left>
      <HeroText :title="data?.title ?? 'NMTY'" :text="data?.sub_title ?? 'Bienvenue sur NMTY.'" />
    </template>
    <template #right>
      <HomeBook class="hidden xl:block" />
    </template>
  </HeroLanding>
</template>

<style scoped></style>
