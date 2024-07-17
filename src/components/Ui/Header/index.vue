<template>
  <header :class="ui.wrapper" v-bind="attrs">
    <UContainer :class="ui.container">
      <div :class="ui.left">
        <slot name="left">
          <NuxtLink :to="to" :class="ui.logo">
            <slot name="logo"> {{ title }} </slot>
          </NuxtLink>
        </slot>
      </div>

      <slot name="center">
        <!-- <UHorizontalNavigation :links="links" :class="ui.center" /> -->
        <UiHeaderLinks :links="links" :class="ui.center" />
      </slot>

      <div :class="ui.right">
        <slot name="right" />

        <slot name="panel-button" :open="open">
          <UButton
            v-if="links.length || $slots.panel"
            class="lg:hidden"
            :icon="open ? ui.button.icon.close : ui.button.icon.open"
            @click="open = !open"
          />
        </slot>
      </div>
    </UContainer>

    <USlideover
      :ui="{ width: 'w-screen max-w-full' }"
      :overlay="false"
      class="lg:hidden"
      side="left"
      v-model="open"
    >
      <div :class="ui.wrapper">
        <UContainer :class="ui.container">
          <div :class="ui.left">
            <NuxtLink :to="to" :class="ui.logo">
              <slot name="logo">
                {{ title || "Nuxt UI Pro" }}
              </slot>
            </NuxtLink>
          </div>
          <div :class="ui.left">
            <UButton
              v-if="links.length"
              class="lg:hidden"
              :icon="open ? ui.button.icon.close : ui.button.icon.open"
              @click="open = !open"
            />
          </div>
        </UContainer>
      </div>
      <UVerticalNavigation
        :ui="{ wrapper: 'p-2', active: 'text-primary ' }"
        :links="links"
      >
      </UVerticalNavigation>
    </USlideover>
  </header>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const appConfig = useAppConfig();
// backdrop-blur
const config = computed(() => ({
  wrapper:
    "bg-background/75 bg-white border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50",
  container: "flex items-center justify-between gap-3 h-[--header-height]",
  left: "lg:flex-1 flex items-center gap-1.5",
  center: "hidden lg:flex w-auto",
  right: "flex items-center justify-end lg:flex-1 gap-1.5",
  logo: "flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5",
  panel: {
    wrapper: "fixed inset-0 z-50 overflow-y-auto bg-background lg:hidden",
    header: "px-4 sm:px-6",
    body: "px-4 sm:px-6 pt-3 pb-6",
  },
  button: {
    base: "lg:hidden",
    icon: {
      open: appConfig.ui.icons.menu,
      close: appConfig.ui.icons.close,
    },
  },
}));

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  to: {
    type: String,
    default: "/",
  },
  title: {
    type: String,
    default: undefined,
  },
  links: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined,
  },
  ui: {
    type: Object as PropType<Partial<typeof config.value>>,
    default: () => ({}),
  },
});

const route = useRoute();
const slots = useSlots();
const open = ref(false);
const { ui, attrs } = useUI(
  "header",
  toRef(props, "ui"),
  config,
  toRef(props, "class"),
  true
);

watch(
  () => route.fullPath,
  () => {
    open.value = false;
  }
);
</script>
