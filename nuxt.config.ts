// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2025-07-15',
//   devtools: { enabled: true },
//   css: ["~/assets/css/main.css"],

//   modules: ['v-gsap-nuxt', '@nuxtjs/tailwindcss', '@nuxt/ui'],
// });

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ['v-gsap-nuxt', '@nuxt/ui', '@nuxt/image'],
  runtimeConfig: {
    public: {
      formSpreeKey: process.env.FORM_SPREE_KEY, // Exposes the key to the client side
    }
  },
  app: {
    head: {
      title: 'Hahn Built', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    },
    plugins: [
      tailwindcss()
    ],
  },
  typescript: {
    strict: false
  },
  colorMode: {
    dataValue: 'theme',
    classSuffix: '', // Important for Tailwind CSS integration
  }
})