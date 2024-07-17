// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  app: {
    head: {
      // title: "苏州博惠莱精密机械有限公司",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", href: "/favicon.ico" }],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "苏州博惠莱精密机械有限公司-秉承服务第一、品质第一、效率第一",
        },
        {
          name: "keywords",
          content:
            "博惠莱,测头,铣刀,机床,测头维修,探头,马波斯,雷尼绍,机床专用测头,测量,三坐标检测",
        },
      ],
    },
  },
  devtools: {
    enabled: false,
  },

  modules: ["@nuxt/ui", "nuxt-swiper", "@nuxtjs/i18n", "@nuxt/content", "@nuxt/image"],

  css: ["~/assets/css/main.scss"],

  // 压缩
  nitro: {
    compressPublicAssets: true,
  },
  experimental: {
    payloadExtraction: false,
  },
});