<template>
  <div :class="ui.wrapper">
    <UiPageHeader
      :title="$t('product.header.title')"
      :description="$t('product.header.description')"
    />
    <AppProductCard
      v-for="(item, index) in sections"
      :key="index"
      :to="item.to"
      :title="item.title"
      :align="item.align"
      :features="item.features"
      class="group"
    >
      <div :class="ui.image.wrapper">
        <NuxtImg :src="item.image" :alt="item.title" :class="ui.image.base" />
      </div>
      <!-- <ImagePlaceholder /> -->
    </AppProductCard>
  </div>
</template>

<script setup lang="ts">
import { probes } from "@/lang/probes";
const { locale } = useI18n();
const sections: any = ref([]);
watch(
  () => locale.value,
  (v: string) => {
    sections.value = probes[v];
  },
  { immediate: true }
);

const ui = {
  wrapper: "mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl",
  image: {
    wrapper:
      "ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none",
    base: "object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105",
  },
};
</script>

<style scoped></style>
