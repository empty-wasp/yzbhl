<template>
  <div>
    <!-- <AppHeader v-if="result" :menus="result.menus" /> -->
    <AppMain><slot /></AppMain>

    <!-- <AppFooter v-if="result" :blogroll="result.blogroll" /> -->

    <UNotifications />
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("/", () => queryContent("/").findOne());
console.log(data);

// const { result }: any = await useAsyncConfig("layout");
</script>

<style scoped></style>
