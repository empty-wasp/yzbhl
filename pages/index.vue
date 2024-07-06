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
      :title="t('about.title')"
      :description="t('about.description')"
      align="left"
    >
      <ImagePlaceholder />
    </AppLandingSection>

    <AppLandingSection :title="$t('patent.title')">
      <BasePageColumns class="xl:columns-4">
        <div
          v-for="(testimonial, index) in [1, 2, 3, 4, 5, 6, 7]"
          :key="index"
          class="break-inside-avoid"
        >
          <div class="bg-gray-100/50 dark:bg-gray-800/50"></div>
          <UCard>
            <NuxtImg src="images/banner1.png" alt="123" />
          </UCard>
        </div>
      </BasePageColumns>
    </AppLandingSection>
  </div>
</template>
<style scoped></style>
