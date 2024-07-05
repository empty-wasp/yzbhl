<script setup lang="ts">
const items = ["images/banner1.png", "images/banner2.png"];

const sections: any = [
  {
    title: "The power of our service",
    description:
      "Aliqua labore laboris fugiat. Reprehenderit exercitation eu commodo. Officia nostrud sit et aliqua ea ex sunt minim incididunt sunt.",
    id: "features",
    align: "left",
    features: [
      {
        name: "Easy to use",
        description: "Id laborum laboris duis nostrud excepteur ut velit.",
        icon: "i-heroicons-cog",
      },
      {
        name: "Reliable",
        description:
          "Magna Lorem ex cillum fugiat ad enim aute irure sit duis minim.",
        icon: "i-heroicons-check",
      },
      {
        name: "Secure",
        description:
          "Proident nostrud excepteur sint ut culpa consectetur aute adipisicing.",
        icon: "i-heroicons-lock-closed",
      },
    ],
    links: [
      {
        label: "Explore components",
        to: "/pro/components",
        color: "gray",
        icon: "i-heroicons-arrow-right-20-solid",
        trailing: true,
        size: "md",
        class: "ml-8",
      },
    ],
  },
  {
    title: "The power of our service",
    description:
      "Aliqua labore laboris fugiat. Reprehenderit exercitation eu commodo. Officia nostrud sit et aliqua ea ex sunt minim incididunt sunt.",
    id: "features",
    align: "right",
    features: [
      {
        name: "Easy to use",
        description: "Id laborum laboris duis nostrud excepteur ut velit.",
        icon: "i-heroicons-cog",
      },
      {
        name: "Reliable",
        description:
          "Magna Lorem ex cillum fugiat ad enim aute irure sit duis minim.",
        icon: "i-heroicons-check",
      },
      {
        name: "Secure",
        description:
          "Proident nostrud excepteur sint ut culpa consectetur aute adipisicing.",
        icon: "i-heroicons-lock-closed",
      },
    ],
    links: [
      {
        label: "Explore components",
        to: "/pro/components",
        color: "gray",
        icon: "i-heroicons-arrow-right-20-solid",
        trailing: true,
        size: "md",
        class: "ml-8",
      },
    ],
  },
];
</script>
<template>
  <div>
    <AppSwiper
      v-slot="{ item }"
      ref="carouselRef"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="overflow-hidden h-full max-h-168"
    >
      <img :src="item" class="w-full" draggable="false" />
    </AppSwiper>
    <AppLandingSection
      v-for="(section, index) in sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :align="section.align"
      :features="section.features"
    >
      <ImagePlaceholder />
    </AppLandingSection>
  </div>
</template>
<style scoped></style>
