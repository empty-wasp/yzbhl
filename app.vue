<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const companyName = computed(() => t("companyName"));
useHead({ title: companyName.value });
</script>
