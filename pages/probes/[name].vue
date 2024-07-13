<template>
  <div v-if="result" :class="ui.wrapper">
    <UiPageHeader :title="result.name" />
    <div :class="ui.image.wrapper">
      <img :src="result.image" :alt="result.name" :class="ui.image.base" />
    </div>

    <UContainer :class="ui.introduce">
      <UiIntroduceGrid>
        <UiIntroduceCard
          v-for="(item, index) in result.introduces"
          :key="index"
          v-bind="item"
        />
      </UiIntroduceGrid>
    </UContainer>

    <div :class="ui.table.wrapper">
      <div :class="ui.table.title">{{ $t("probe.detail.attachments") }}</div>
      <UCard>
        <UTable
          :rows="result.attachments.items"
          :columns="result.attachments.columns"
        />
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { name }: any = route.params;

import zh_400mini from "@/content/probes/zh/400mini.json";
import zh_400ms from "@/content/probes/zh/400ms.json";

import en_400mini from "@/content/probes/en/400mini.json";
import en_400ms from "@/content/probes/en/400ms.json";

const lang: any = useCookie("lang");

const data: any = { zh_400mini, zh_400ms, en_400mini, en_400ms };
const result = ref(data[`${lang.value}_${name}`]);

// const { result }: any = await useAsyncConfig("probes", name);

const ui = {
  wrapper: "mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl", // flex flex-col items-center
  image: {
    wrapper:
      "mx-auto ring-1 my-6 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-10/12 sm:w-7/12 rounded-lg pointer-events-none",
    base: "object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105",
  },
  introduce: "py-20 sm:py-16 lg:py-24",
  table: {
    wrapper: "px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24",
    title: "pb-6 font-semibold",
  },
};
</script>

<style scoped></style>
