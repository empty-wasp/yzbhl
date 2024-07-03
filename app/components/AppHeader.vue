<script setup lang="ts">
import type { NavItem } from "@nuxt/content";

// const navigation = inject<Ref<NavItem[]>>("navigation", ref([]));
const { setLocale, t } = useI18n();

const langs = ["中文", "English"];
const linkMap = reactive([
  {
    label: computed(() => t("header.menu.about")), // t("header.menu.about")
    to: "/",
  },
  {
    label: computed(() => t("header.menu.detector")),
    to: "/pricing",
  },
  {
    label: computed(() => t("header.menu.millingCutter")),
    to: "/docs",
  },
]);
const links = ref<any>(linkMap);

const setLocaleFn = (v: string) => {
  const langMap = { ["中文"]: "zh", ["English"]: "en" };
  setLocale(langMap[v]);
  links.value = linkMap;
};
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <UAvatar size="lg" src="/logo1.png" alt="Logo" />
      <!-- <span class="text-4xl">BHL</span> -->
    </template>

    <template #right>
      <USelect
        size="xl"
        :options="langs"
        variant="none"
        @change="setLocaleFn"
      />
      <UButton
        :label="$t('header.contact')"
        trailing
        to="/signup"
        class="hidden lg:flex"
      />
    </template>
  </UHeader>
</template>
