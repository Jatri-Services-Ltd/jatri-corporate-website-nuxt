<script setup>
import InfiniteSlideBar from '../slider/InfiniteSlideBar.vue'
const config = useRuntimeConfig();
const { data } = await useFetch(config.public.apiURL + '/api/v1/get-career-banners')

const chunkSize = 4;

const chunkBannerImages = {
  firstSlider: data.value.data.slice(0, chunkSize),
  secondSlider: data.value.data.slice(chunkSize),
}
</script>

<template>
  <InfiniteSlideBar direction="reverse">
    <div class="items">
      <div class="slider-img" v-for="slideImage in chunkBannerImages.firstSlider" :key="slideImage">
        <img :src="'https://sgp1.digitaloceanspaces.com/storage.jatri.co/' + slideImage">
      </div>
    </div>
  </InfiniteSlideBar>
</template>

<style> .items {
   display: flex;
   column-gap: 32px;
 }

 .vifnslb-bar .slider-img {
   width: 604px;
   height: 300px;
 }

 .vifnslb-bar .slider-img {
   width: 604px;
 }

 .vifnslb-bar .slider-img:nth-child(2) {
   width: 286px;
 }

 .vifnslb-bar .slider-img:nth-child(3) {
   width: 498px;
 }

 .vifnslb-bar .slider-img:nth-child(4) {
   width: 392px;
 }

 .slider-img img {
   width: 100%;
   height: 100%;
   border-radius: 24px;
   object-fit: cover;
 }
</style>