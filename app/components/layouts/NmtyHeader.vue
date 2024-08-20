<script setup lang="ts">
const colorMode = useColorMode()
const showMenu = ref(false)

// Close menu on route change
const router = useRouter().currentRoute
watch(router, () => {
  showMenu.value = false
})
</script>

<template>
  <div>
    <header class="hidden flex-row items-center justify-between px-8 py-4 font-changa-one md:flex">
      <div>
        <NmtyLogo />
      </div>
      <div class="space-x-4">
        <NuxtLink to="/" class="link">Accueil</NuxtLink>
        <NuxtLink to="/team" class="link">Notre équipe</NuxtLink>
      </div>
      <div class="space-x-4">
        <button
          class="h-12 w-12 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800"
          @click="
            () => {
              colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
            }
          "
        >
          <Icon
            :name="
              colorMode.value === 'dark'
                ? 'material-symbols:sunny-outline-rounded'
                : 'material-symbols:dark-mode-outline'
            "
            class="text-2xl"
          />
        </button>
        <NuxtLink to="/login" class="button">Connexion</NuxtLink>
        <NuxtLink to="/register" class="button bg-black text-white dark:bg-white dark:text-black">Inscription</NuxtLink>
      </div>
    </header>

    <!-- Header mobile with burger -->
    <header class="flex flex-row items-center justify-between px-8 py-4 font-changa-one md:hidden">
      <div>
        <NmtyLogo />
      </div>
      <button class="h-12 w-12 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800">
        <Icon :name="showMenu ? 'mdi:close' : 'mdi:menu'" class="text-2xl" @click="showMenu = !showMenu" />
      </button>
    </header>

    <!-- Mobile menu -->
    <div v-if="showMenu" class="flex flex-col items-center justify-center space-y-4 md:hidden">
      <NuxtLink to="/" class="link">Accueil</NuxtLink>
      <NuxtLink to="/team" class="link">Notre équipe</NuxtLink>
      <NuxtLink to="/legal" class="link">CGU/CGV</NuxtLink>
      <NuxtLink to="/login" class="link">Connexion</NuxtLink>
      <NuxtLink to="/register" class="link">Inscription</NuxtLink>
      <button
        class="h-12 w-12 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800"
        @click="
          () => {
            colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
          }
        "
      >
        <Icon
          :name="
            colorMode.value === 'dark' ? 'material-symbols:sunny-outline-rounded' : 'material-symbols:dark-mode-outline'
          "
          class="text-2xl"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.link:hover {
  @apply text-red-orange-500 underline;
}
.button {
  @apply rounded-lg border-4 border-black px-3 py-2 ease-in-out dark:border-white;
}
.button:hover {
  @apply border-red-orange-500 bg-red-orange-500 text-white;
}
</style>
