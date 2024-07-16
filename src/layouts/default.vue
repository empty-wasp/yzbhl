<template>
  <div>
    <AppHeader :menus="result.menus" />
    <AppMain><slot /></AppMain>

    <AppFooter :blogroll="result.blogroll" />

    <UNotifications />
  </div>
</template>

<script setup lang="ts">
import zh from "@/content/layout/zh.json";
import en from "@/content/layout/en.json";

const lang: any = useCookie("lang");
const data: any = { zh, en };
const result = ref(data[lang.value]);
</script>

<style scoped></style>
