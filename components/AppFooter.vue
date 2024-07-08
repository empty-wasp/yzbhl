<script setup lang="ts">
const links = [
  {
    label: "关于BHL",
    children: [
      {
        label: "公司简介",
      },
      {
        label: "发展历程",
      },
      {
        label: "荣誉资质",
      },
    ],
  },
  {
    label: "BHL制造",
    children: [
      {
        label: "核心技术",
      },
      {
        label: "服务领域",
      },
      {
        label: "方案案例",
      },
    ],
  },
  {
    label: "联系我们",
    children: [
      {
        label: "电话：86-17715249752",
      },
      {
        label: "邮箱：206674576@163.com",
      },
      {
        label: "公司地址：江苏省苏州市昆山城北玉杨路777号13房",
      },
    ],
  },
];

const toast = useToast();

const email = ref("");
const loading = ref(false);

function onSubmit() {
  loading.value = true;

  setTimeout(() => {
    toast.add({
      title: "Subscribed!",
      description: "You've been subscribed to our newsletter.",
    });

    loading.value = false;
  }, 1000);
}
</script>

<template>
  <UiFooter>
    <template #top>
      <UiFooterColumns :links="links" :ui="{ center: 'auto-cols-auto' }">
        <template #left>
          <NuxtImg class="w-36" src="images/logo@2.png" />
        </template>
      </UiFooterColumns>
    </template>

    <template #center>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        <span
          >Copyright © {{ new Date().getFullYear() }}
          {{ $t("footer.copyright") }}</span
        >
        <NuxtLink
          class="hover:text-primary-500"
          target="_blank"
          to="https://beian.miit.gov.cn"
        >
          湘ICP备2023027925号-1</NuxtLink
        >
      </p>
    </template>
  </UiFooter>
</template>
