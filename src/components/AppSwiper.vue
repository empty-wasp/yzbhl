<script setup lang="ts">
defineProps({
  items: {
    type: Array<string>,
    default: () => [],
  },
  indicators: {
    type: Boolean,
    default: false,
  },
});

const autoplay = reactive<any>({
  delay: 3000,
  disableOnInteraction: true,
});

const pagination = reactive<any>({
  clickable: true,
});
</script>

<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperPagination]"
    :loop="true"
    :autoplay="autoplay"
    :pagination="pagination"
  >
    <SwiperSlide v-for="(item, index) in items" :key="index">
      <img :src="item" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss"></style>
