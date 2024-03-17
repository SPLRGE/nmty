<script setup lang="ts">
const { getItems } = useDirectusItems()
const { getThumbnail } = useDirectusFiles()

interface Member {
  id: number
  name: string
  avatar: string
}

const { data: team } = await useAsyncData('team', () => {
  return getItems<Member>({
    collection: 'team',
  })
})
</script>

<template>
  <div class="py-12 text-center">
    <h1 class="font-changa-one text-4xl md:text-6xl">Notre équipe</h1>
    <div class="mx-auto my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <div v-for="member in team" :key="member.id" class="rounded-md bg-gray-100 p-4 shadow-md dark:bg-zinc-800">
        <NuxtImg
          :src="getThumbnail(member.avatar)"
          :alt="member.name"
          class="mx-auto h-[100px] w-[100px] rounded-full md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px]"
        />
        <p class="pt-2">{{ member.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
