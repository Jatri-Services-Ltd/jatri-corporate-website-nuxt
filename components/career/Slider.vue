<script setup>
import MovingSlide from '../slider/MovingSlide.vue'
const config = useRuntimeConfig();
const bannerImages = inject("bannerImages")
const chunkSize = 5;

const chunkBannerImages = {
  firstSlider: bannerImages.slice(0, chunkSize),
  secondSlider: bannerImages.slice(chunkSize),
}
</script>

<template>
  <div id="explore-jatri" class="bg-grey py-10 lg:py-[60px] relative">
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
        <div class="slider-items2">
          <div class="slide-item" v-for="slideImage in chunkBannerImages.secondSlider" :key="slideImage">
            <img :src="'https://sgp1.digitaloceanspaces.com/storage.jatri.co/' + slideImage">
          </div>
        </div>
      </MovingSlide>
    </div>

  </div>
</template>

<style scoped> .slide-items,
 .slider-items2 {
   @apply flex gap-x-4 md:gap-x-8
 }

 .slide-items .slide-item,
 .slider-items2 .slide-item {
   @apply w-[604px] h-[200px] sm:h-[300px]
 }

 .slide-items .slide-item:nth-child(2),
 .slider-items2 .slide-item:last-child {
   @apply w-[286px]
 }

 .slide-items .slide-item:nth-child(3),
 .slide-items .slide-item:last-child,
 .slider-items2 .slide-item:first-child {
   @apply w-[498px]
 }

 .slide-items .slide-item:nth-child(4),
 .slider-items2 .slide-item:nth-child(3) {
   @apply w-[392px]
 }

 .slide-item img {
   @apply w-full h-full rounded-3xl object-cover
 }

 /* Left to right slider */
 /* .slider-items2 .slide-item {
   @apply w-[604px] h-[200px] sm:h-[300px]
 } */

 /* .slider-items2 .slide-item:first-child {
   @apply w-[498px]
 } */

 /* .slider-items2 .slide-item:nth-child(3) {
   @apply w-[392px]
 } */
/* 
 .slider-items2 .slide-item:last-child {
   @apply w-[286px]
 } */
</style>