<template>
  <BaseHeader :links="links">
    <template #logo>
      <div class="flex items-center">
        <img src="/images/logo.png" alt="">
        <UAvatar size="lg" src="/images/logo.png" alt="Logo" />
        <!-- <span class="text-2xl">BHL</span> -->
      </div>
    </template>
    <template #right>
      <USelect
        size="sm"
        :options="langs"
        variant="none"
        @change="setLocaleFn"
      />
      <UButton
        :label="$t('header.contact')"
        trailing
        to="/about"
        class="hidden lg:flex"
      />
    </template>
  </BaseHeader>
</template>

<script setup lang="ts">
const { setLocale, t } = useI18n();

const langs = ["中文", "English"];
const linkMap = reactive<any[]>([
  {
    label: computed(() => t("header.menu.about")), // t("header.menu.about")
    to: "/about",
  },
  {
    label: computed(() => t("header.menu.product")),
    to: "/product",
  },
  {
    label: computed(() => t("header.menu.join")),
    to: "/join",
  },
]);
const links = ref<any>(linkMap);

const setLocaleFn = (v: string) => {
  const langMap: any = { ["中文"]: "zh", ["English"]: "en" };
  setLocale(langMap[v]);
  links.value = linkMap;
};
</script>

<style scoped></style>
