// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  app: {
    pageTransition: { name: 'fader', mode: 'out-in' },
    head: {
      title: 'Tomix',
      charset: 'utf-8',
      link:  [
        { rel: 'icon', type: 'image/x-icon', href: '/TOMIX.png' },
      ]
    }
  },
  css: [
    '~/assets/styles/main.css' // Reference your global CSS file here
  ],
})