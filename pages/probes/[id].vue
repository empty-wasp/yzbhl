<template>
  <div :class="ui.wrapper">
    <UiPageHeader :title="probe.title" />
    <div :class="ui.image.wrapper">
      <NuxtImg :src="probe.image" :alt="probe.title" :class="ui.image.base" />
    </div>
    <UContainer class="py-8">
      <UiIntroduceGrid>
        <UiIntroduceCard
          v-for="(item, index) in introduceList"
          :key="index"
          v-bind="item"
        />
      </UiIntroduceGrid>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { probes, introduces } from "@/lang/probes";
const route = useRoute();
const { locale } = useI18n();

const probe: any = ref({});
const introduceList: any = ref([]);
watch(
  () => locale.value,
  (v: string) => {
    const { id }: any = route.params;
    const _probes = probes[v];
    probe.value = _probes[+id - 1];
    console.log(introduces[+id - 1][v]);

    introduceList.value = introduces[+id - 1][v];
  },
  { immediate: true }
);

// const probe = computed(() => {
//   const { id }: any = route.params;
//   return sections.value[+id - 1];
// });

// const introduceList = computed(() => {
//   const { id }: any = route.params;
//   return sections.value[+id - 1];
// });

const ui = {
  wrapper: "flex flex-col items-center",
  image: {
    wrapper:
      "mx-auto ring-1 my-8 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-8/12 rounded-lg pointer-events-none",
    base: "object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105",
  },
};
</script>

<style scoped></style>
