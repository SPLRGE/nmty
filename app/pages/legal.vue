<script setup lang="ts">
const { getSingletonItem } = useDirectusItems()

interface LegalPage {
  title: string
  content: string
  date_updated: string
}

const { data } = await useAsyncData(
  'legal',
  () => {
    return getSingletonItem<LegalPage>({
      collection: 'legal',
    })
  },
  {
    transform: data => {
      return {
        ...data,
        date_updated: new Date(data.date_updated).toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      }
    },
  }
)
</script>

<template>
  <div class="py-12">
    <h1 class="my-12 text-center font-changa-one text-4xl lg:text-6xl">{{ data?.title }}</h1>
    <div class="mx-auto lg:w-1/2" v-html="data?.content"/>
    <p class="mt-8 text-center">Dernière mise à jour le {{ data?.date_updated }}</p>
  </div>
</template>

<style scoped></style>
