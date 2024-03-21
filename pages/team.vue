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
    <div class="mx-auto my-12 flex flex-wrap justify-center gap-4">
      <div v-for="member in team" :key="member.id"
        class="rounded-md group bg-gray-100 p-10 shadow-md dark:bg-zinc-800 hover:cursor-pointer">
        <NuxtImg :src="getThumbnail(member.avatar)" :alt="member.name"
          class="mx-auto h-[100px] w-[100px] rounded-full md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] group-hover:scale-105 transition-transform" />
        <p class="pt-2">{{ member.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
