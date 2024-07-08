<template>
  <div :class="ui.wrapper">
    <AppLandingSection
      :title="$t('companyName')"
      :description="$t('about.description')"
    >
      <ImagePlaceholder />
    </AppLandingSection>

    <AppTimeline />

    <AppLandingSection :title="$t('patent.title')">
      <UiPageColumns class="xl:columns-4">
        <div
          v-for="(testimonial, index) in [1, 2, 3, 4, 5, 6, 7]"
          :key="index"
          class="break-inside-avoid"
        >
          <div class="bg-gray-100/50 dark:bg-gray-800/50"></div>
          <UCard>
            <NuxtImg src="images/1.png" alt="123" />
          </UCard>
        </div>
      </UiPageColumns>
    </AppLandingSection>
  </div>
</template>

<script setup lang="ts">
const ui = {
  wrapper: "mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl",
  image: {
    wrapper:
      "ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none",
    base: "object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105",
  },
};
</script>
