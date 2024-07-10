<script setup lang="ts">
const { t } = useI18n();

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  // htmlAttrs: { lang: "zh" },
});

const companyName = computed(() => t("companyName"));
useSeoMeta({
  titleTemplate: "%s - " + companyName.value,
});
</script>
<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
