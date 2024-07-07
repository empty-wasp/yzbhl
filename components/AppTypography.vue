<template>
  <div :class="ui.wrapper">
    <h1 :class="ui.title">
      <slot name="title">
        {{ title }}
      </slot>
    </h1>

    <div v-if="features?.length || $slots.features" :class="ui.features">
      <slot name="links">
        <ul :class="ui.items">
          <li v-for="(item, index) of features" :key="index" :class="ui.item">
            <!-- <UIcon :name="item.icon" :class="ui.icon" /> -->
            <div>{{ item.name }}</div>
          </li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  features: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
});

const ui = {
  wrapper: "w-full h-full py-8",
  title: "text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight pb-6",
  features: "",
  items: "list-disc ps-6 color-red",
  item: "list-disc  items-center",
  icon: "",
};
</script>
