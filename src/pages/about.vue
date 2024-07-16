<template>
  <div :class="ui.wrapper">
    <AppLandingSection
      id="description"
      :ui="{ description: 'text-left whitespace-pre-wrap' }"
      :title="$t('companyName')"
      :description="$t('about.description')"
    >
      <img src="/images/bg.png" class="rounded-2xl" />
    </AppLandingSection>

    <AppLandingSection id="timeline" :title="$t('about.timeline')">
      <div class="lg:px-24">
        <AppTimeline :timelines="result.timeline" />
      </div>
    </AppLandingSection>

    <AppLandingSection id="patent" :title="$t('about.patent')">
      <UiPageColumns class="xl:columns-4">
        <div
          v-for="(i, index) in patentList"
          :key="index"
          class="break-inside-avoid"
        >
          <div class="bg-gray-100/50 dark:bg-gray-800/50"></div>
          <UCard>
            <img :src="`/images/patent/patent${i}.png`" />
          </UCard>
        </div>
      </UiPageColumns>
    </AppLandingSection>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "关于BHL" });

import zh from "@/content/about/zh.json";
import en from "@/content/about/en.json";

const { language } = useLanguage();

const data: any = { zh, en };
const result = ref(data[language.value]);

const patentList = Array.from(Array(12).keys(), (n) => n + 1);
const ui = {
  wrapper: "mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl",
  image: {
    wrapper:
      "ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none",
    base: "object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105",
  },
};
</script>
