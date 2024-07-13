<script setup lang="ts">

const props = defineProps({
  blogroll: {
    type: Array<any>,
    default: () => [],
  },
});

</script>

<template>
  <UiFooter>
    <template #top>
      <UiFooterColumns :links="blogroll" :ui="{ center: 'auto-cols-auto' }">
        <template #left>
          <img class="w-36" src="/images/logo@2.png" />
        </template>
      </UiFooterColumns>
    </template>

    <template #center>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        <span
          >Copyright © {{ new Date().getFullYear() }}
          {{ $t("footer.copyright") }}</span
        >
        <NuxtLink
          class="hover:text-primary-500"
          target="_blank"
          to="https://beian.miit.gov.cn"
        >
          湘ICP备2023027925号-1</NuxtLink
        >
      </p>
    </template>
  </UiFooter>
</template>
