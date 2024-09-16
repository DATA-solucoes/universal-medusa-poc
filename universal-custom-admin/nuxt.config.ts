// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-medusa',
    '@pinia/nuxt'
  ],
  shadcn: {
    componentDir: './components/ui'
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  alias: {
  }
})