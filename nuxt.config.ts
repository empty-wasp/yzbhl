// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },

  // ssr: false,

  modules: [
    "@nuxt/ui",
    "nuxt-swiper",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxt/content",
  ],

  css: ["~/assets/css/main.scss"],

  // app: {
  //   baseURL: "/yzbhl/",
  // },

  // 压缩
  // nitro: {
  //   compressPublicAssets: true,
  // },
  // content: {
  //   api: {
  //     baseURL: "/api/content",
  //   },
  // },
  experimental: {
    payloadExtraction: false,
  },
});
