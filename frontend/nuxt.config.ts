// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      // Se cambia API_URL por NUXT_PUBLIC_API_BASE para que coincida con la variable de Railway
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3000'
    }
  },
  devServer: {
    port: 3001
  }
})
