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
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Calistoga&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet'
        }
      ]
    }
  },
  css: [
    '~/assets/styles/main.css', // Reference your global CSS file here
    '~/assets/css/tailwind.css', // Reference your global CSS file here

  ],
})