<template>
  <div>
    <AppHeader :menus="result.menus" />
    <AppMain><slot /></AppMain>

    <AppFooter :blogroll="result.blogroll" />

    <UNotifications />
  </div>
</template>

<script setup lang="ts">
const { result }: any = await useAsyncConfig("layout");
</script>

<style scoped></style>
