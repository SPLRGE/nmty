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
      <div
v-for="member in team" :key="member.id"
        class="group relative box-border rounded-md bg-gray-100 p-10 shadow-md hover:cursor-pointer dark:bg-zinc-800">
        <div class="absolute -m-10 size-full rounded-md bg-black opacity-0 group-hover:opacity-80"/>
        <NuxtImg
:src="getAvatar(member.avatar)" :alt="member.name"
          class="transition-duration-300 mx-auto size-[100px] rounded-full transition-transform group-hover:scale-105 md:size-[150px] lg:size-[200px]" />
        <div class="flex flex-row items-center justify-between pt-2">
          <p class="w pr-2 text-right">{{ member.name }}</p>
          <div class="size-1 rounded-full bg-gray-400"/>
          <p class=" pl-2">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped></style>
