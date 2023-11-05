<script setup>
import MovingSlide from '../slider/MovingSlide.vue'
const config = useRuntimeConfig();
const { data } = await useFetch(config.public.apiURL + '/api/v1/get-career-banners')

const chunkSize = 5;

const chunkBannerImages = {
  firstSlider: data.value.data.slice(0, chunkSize),
  secondSlider: data.value.data.slice(chunkSize),
}
</script>

<template>
  <div class="bg-[#F7F7F7] py-10 lg:py-[60px] relative">
    <div>
      <MovingSlide>
        <div class="slide-items">
          <div class="slide-item" v-for="slideImage in chunkBannerImages.firstSlider" :key="slideImage">
            <img :src="'https://sgp1.digitaloceanspaces.com/storage.jatri.co/' + slideImage">
          </div>
        </div>
      </MovingSlide>
    </div>

    <div class="mt-4 md:mt-8">
      <MovingSlide direction="reverse">
        <div class="slide-items">
          <div class="slide-item" v-for="slideImage in chunkBannerImages.secondSlider" :key="slideImage">
            <img :src="'https://sgp1.digitaloceanspaces.com/storage.jatri.co/' + slideImage">
          </div>
        </div>
      </MovingSlide>
    </div>

    <h2 style="text-shadow: 0px 0px 26px rgba(0, 0, 0, 0.24);"
      class="text-white text-[60px] lg:text-[120px] leading-[64px] lg:leading-[146px] font-bold absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-40">
      #Life@Jatri</h2>
  </div>
</template>

<style scoped> 
 .slide-items {
   @apply flex gap-x-4 md:gap-x-8
 }

 .slide-item {
   @apply w-[604px] h-[200px] sm:h-[300px]
 }

 .slide-item:nth-child(2) {
   @apply w-[286px]
 }

 .slide-item:nth-child(3) {
   @apply w-[498px]
 }

 .slide-item:nth-child(4) {
   @apply w-[392px]
 }

 .slide-item img {
   @apply w-full h-full rounded-3xl object-cover
 }
</style>