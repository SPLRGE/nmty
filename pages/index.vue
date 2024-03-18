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
  title: `${data.value?.title ?? 'Accueil'} - NMTY`,
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
