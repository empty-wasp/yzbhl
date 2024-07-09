<script setup lang="ts">
const items = ["images/banner1.png", "images/banner2.png"];
const { t } = useI18n();

const sections = reactive<any[]>([
  {
    title: computed(() => t("about.title")),
    description: computed(() => t("about.description")),
    align: "left",
  },
]);
</script>
<template>
  <div>
    <AppSwiper
      v-slot="{ item }"
      ref="carouselRef"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="overflow-hidden h-full max-h-168"
    >
      <img :src="item" class="w-full" draggable="false" />
    </AppSwiper>

    <AppLandingSection
      :title="t('home.about')"
      :description="t('home.description')"
      align="left"
    >
      <ImagePlaceholder />
    </AppLandingSection>
  </div>
</template>
<style scoped></style>
