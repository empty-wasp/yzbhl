<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  titleTemplate: "",
  title: t("companyName"),
});

const items = ["images/banner1.png", "images/banner2.png"];

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
      <!-- <ImagePlaceholder /> -->
       <NuxtImg src="/images/bg.png" class="rounded-2xl" />
    </AppLandingSection>
  </div>
</template>
<style scoped></style>
