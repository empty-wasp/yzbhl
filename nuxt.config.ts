// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  // ssr: false,
  // spaLoadingTemplate: true,

  modules: [
    "@nuxt/ui",
    "nuxt-swiper",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxt/content",
  ],

  // "~/assets/css/reset.css",
  css: ["~/assets/css/main.scss"],

  // app: {
  //   baseURL: "/yzbhl/",
  // },
  // nitro: {
  //   compressPublicAssets: true,
  // },
  content: {
    api: {
      baseURL: "/api/content",
    },
  },
});
