<script setup lang="ts">
const utilityLinks = [
  {
    text: 'Accueil',
    href: '/',
  },
  {
    text: 'Notre Equipe',
    href: '/team',
  },
  {
    text: 'CGU/CGV',
    href: '/legal',
  },
  {
    text: 'Se connecter',
    href: '/login',
  },
  {
    text: "S'inscrire",
    href: '/register',
  },
]

const socialNetworks = [
  {
    text: 'Discord',
    href: 'https://nmty.fr/gg',
    icon: 'ic:baseline-discord',
    external: true,
  },
  {
    text: 'Instagram',
    href: '#',
    icon: 'mdi:instagram',
    external: true,
  },
]
</script>

<template>
  <div class="flex flex-col items-start justify-between p-8 md:space-x-12 md:p-12 lg:flex-row">
    <div class="flex flex-col items-start">
      <NmtyLogo />
      <p class="font-lalezar">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus
      </p>
    </div>

    <div class="flex w-full items-start list-outside list-none flex-col justify-around pl-0 space-y-0 md:flex-row lg:pl-12">
      <NmtyList title="Liens utiles" :links="utilityLinks" />
      <NmtyList title="Réseaux sociaux" :links="socialNetworks" />
    </div>
  </div>
</template>

<style scoped></style>
