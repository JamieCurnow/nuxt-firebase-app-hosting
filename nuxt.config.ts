// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['nuxt-doppler'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      hello: ''
    }
  },
  doppler: {
    // your Doppler service token
    serviceToken: process.env.DOPPLER_SERVICE_TOKEN,
    // your Doppler project name
    project: 'jamie-test-app-hosting',
    // your Doppler config name
    config: process.env.ENV
  }
})
