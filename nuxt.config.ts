// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir:'src/',
  devtools: {
    enabled: false,
  },

  modules: [
    "@nuxt/ui",
    "nuxt-swiper",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxt/content",
  ],

  css: ["~/assets/css/main.scss"],

  // 压缩
  nitro: {
    compressPublicAssets: true,
  },
  experimental: {
    payloadExtraction: false,
  },
});
