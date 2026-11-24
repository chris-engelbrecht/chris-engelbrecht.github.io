// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/eslint'],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  ui: {
    theme: {
      colors: ['primary', 'secondary', 'blue', 'slate', 'amber', 'green']
    }
  },

  routeRules: {
    '/': { static: true }
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    preset: 'github_pages'
  }
})
