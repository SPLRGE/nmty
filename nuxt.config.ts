// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
    'nuxt-directus',
    "@nuxt/eslint"
  ],

  directus: {
    url: 'https://cms.nmty.fr/',
  },

  fonts: {
    families: [
      { name: 'Changa One', provider: 'google' },
      { name: 'Changa', provider: 'google' },
      { name: 'Lalezar', provider: 'google' },
    ],
  },

  routeRules: {
    '/**': { swr: true },
    '/admin': { redirect: 'https://cms.nmty.fr' },
  },

  colorMode: {
    classSuffix: '',
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  compatibilityDate: '2024-08-20',

  future: {
    compatibilityVersion: 4
  }
})