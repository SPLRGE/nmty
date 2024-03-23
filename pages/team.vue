<script setup lang="ts">
const { getItems } = useDirectusItems()
const { getThumbnail } = useDirectusFiles()

interface Member {
  id: number
  name: string
  avatar?: string
  role: string
}

const { data: team } = await useAsyncData('team', () => {
  return getItems<Member>({
    collection: 'team',
  })
})

const getAvatar = (fileId: string | undefined) => {
  return fileId ? getThumbnail(fileId) : '/avatar-placeholder.png'
}

useSeoMeta({
  title: 'Notre équipe',
  description: 'Découvrez les membres de nmty',
})
</script>

<template>
  <div class="py-12 text-center">
    <h1 class="font-changa-one text-4xl md:text-6xl">Notre équipe</h1>
    <div class="mx-auto my-12 flex flex-wrap justify-center gap-4">
      <div v-for="member in team" :key="member.id"
        class="rounded-md group bg-gray-100 p-10 shadow-md dark:bg-zinc-800 hover:cursor-pointer relative box-border">
        <div class="absolute -m-10 w-full h-full bg-black opacity-0 group-hover:opacity-80 rounded-md"></div>
        <NuxtImg :src="getAvatar(member.avatar)" :alt="member.name"
          class="mx-auto h-[100px] w-[100px] rounded-full md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] group-hover:scale-105 transition-transform transition-duration-300" />
        <div class="pt-2 flex flex-row justify-between items-center">
          <p class="w text-right pr-2">{{ member.name }}</p>
          <div class="w-1 h-1 bg-gray-400 rounded-full"></div>
          <p class=" pl-2">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped></style>
