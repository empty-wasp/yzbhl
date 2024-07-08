<template>
  <div :class="ui.wrapper">
    <UiPageHeader :title="probe.title" />
    <div :class="ui.image.wrapper">
      <NuxtImg :src="probe.image" :alt="probe.title" :class="ui.image.base" />
    </div>

    <UContainer :class="ui.introduce">
      <UiIntroduceGrid>
        <UiIntroduceCard
          v-for="(item, index) in introduceList"
          :key="index"
          v-bind="item"
        />
      </UiIntroduceGrid>
    </UContainer>

    <div :class="ui.table.wrapper">
      <div :class="ui.table.title">{{ $t("probe.detail.attachments") }}</div>
      <UCard>
        <UTable :rows="tables.items" :columns="tables.columns" />
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { probes, introduces, attachments } from "@/lang/probes";
const route = useRoute();
const { locale } = useI18n();

const probe: any = ref({});
const introduceList: any = ref([]);
const tables: any = ref({});
watch(
  () => locale.value,
  (v: string) => {
    const { id }: any = route.params;
    const _probes = probes[v];
    probe.value = _probes[+id - 1];
    introduceList.value = introduces[+id - 1][v];
    tables.value = attachments[v];
  },
  { immediate: true }
);

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
