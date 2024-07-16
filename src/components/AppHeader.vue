<template>
  <UiHeader :links="menus">
    <template #logo>
      <div class="flex items-center">
        <img src="/images/logo.png" alt="Logo" class="w-12" />
        <!-- <span class="text-2xl">BHL</span> -->
      </div>
    </template>
    <template #right>
      <USelect
        class="font-semibold"
        size="sm"
        v-model="language"
        :options="options"
        variant="none"
        @change="setLanguage"
      />
      <UButton
        :label="$t('header.contact')"
        trailing
        to="/about"
        class="hidden lg:flex"
      />
    </template>
  </UiHeader>
</template>

<script setup lang="ts">
const props = defineProps({
  menus: {
    type: Array<any>,
    default: () => [],
  },
});

const { setLanguage, language, options } = useLanguage();
</script>

<style scoped></style>
