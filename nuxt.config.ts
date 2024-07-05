// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "nuxt-swiper", "@nuxtjs/i18n"],
  vite: {
    base: "/yzbhl/",
  },
  app: {
    baseURL: "/yzbhl/",
  },
});
