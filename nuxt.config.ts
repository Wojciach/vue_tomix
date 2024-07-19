// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", '@nuxtjs/sitemap'],
  site: {
    url: 'https://tomix.polbiz.net/'
  },
  app: {
    pageTransition: { name: 'fader', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'pl',
      },
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=G-WF7PFB8HY0`,
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WF7PFB8HY0');
          `,
          type: 'text/javascript',
        },
      ],
      title: 'Tomix Elewacje Lubin',
      charset: 'utf-8',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'TOMIX Elewacje - Renowacje elewacji budynków - Kładzenie gładzi natryskowych. Malowanie natryskowe. Zapraszamy do zapoznania się z naszymi usługami!' },
        { name: 'keywords', content: 'TOMIX, elewacje, renowacje, gładzie natryskowe, malowanie natryskowe, hydroizolacja, impregnacja hydrofobowa' },
        { name: 'author', content: 'TOMIX' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Renowacje elewacji budynków' },
        { property: 'og:description', content: 'TOMIX Elewacje - Renowacje elewacji budynków - Kładzenie gładzi natryskowych. Malowanie natryskowe. Zapraszamy do zapoznania się z naszymi usługami!' },
        { property: 'og:image', content: 'https://tomix.polbiz.net/logo/TOMIX.png' },
        { property: 'og:url', content: 'https://tomix.polbiz.net/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'TOMIX Elewacje - Renowacje elewacji budynków - Kładzenie gładzi natryskowych. Malowanie natryskowe. Zapraszamy do zapoznania się z naszymi usługami!' },
        { name: 'twitter:description', content: 'TOMIX Elewacje - Renowacje elewacji budynków - Kładzenie gładzi natryskowych. Malowanie natryskowe. Zapraszamy do zapoznania się z naszymi usługami!' },
        { name: 'twitter:image', content: 'https://tomix.polbiz.net/logo/TOMIX.png' },
        { name: 'geo.placename', content: 'Lubin, Poland' },
        { name: 'geo.region', content: 'PL-DS' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Elewacje Lubin' },
        
        
        // Add more meta tags as needed
      ],
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