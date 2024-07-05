// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "nuxt-swiper", "@nuxtjs/i18n"],
  app: {
    baseURL: "/yzbhl/",
    // buildAssetsDir: "nuxt_assets",
  },
  // experimental: {
  //   payloadExtraction: false,
  // },
});
