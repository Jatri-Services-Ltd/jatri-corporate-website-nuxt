<script setup>
import InfiniteSlideBar from '../slider/InfiniteSlideBar.vue'
const config = useRuntimeConfig();
const { data } = await useFetch(config.public.apiURL + '/api/v1/get-career-banners')

const bannerImages = data.value.data;
const chunkSize = Math.round(bannerImages.length / 2);
const slicedImages = [];

const chunkBannerImages = {
  firstSlider: data.value.data.slice(0, chunkSize),
  secondSlider: data.value.data.slice(chunkSize),
}
</script>

<template>
  <InfiniteSlideBar>
    <div class="items">
  
        <div class="f-left pd-t-8px mg-r-10px slider-img"  v-for="slideImage in chunkBannerImages.firstSlider" :key="slideImage">
          <img :src="'https://sgp1.digitaloceanspaces.com/storage.jatri.co/' + slideImage">
        </div>
        <!-- <div class="f-left">
            <div class="f-w-bold">{{coin.name}}</div>
            <div>
              {{coin.price}}
              <span :class="{ 'cl-success': coin.change > 0, 'cl-danger': coin.change < 0 }">({{coin.change}}%)</span>
            </div>
          </div> -->
    </div>
  </InfiniteSlideBar>
</template>


<style> .items {
   display: flex;
   /* justify-content: space-around; */
   column-gap: 32px;
 }

 .slider-img {
   flex: 0 0 604px;
   height: 300px;
 }

 .slider-img:nth-child(2),
 .slider-img:nth-child(6) {
   flex-basis: 286px;
 }

 .slider-img:nth-child(3),
 .slider-img:nth-child(7) {
   flex-basis: 498px;
 }

 .slider-img:nth-child(4),
 .slider-img:last-child {
   flex-basis: 392px;
 }

 .slider-img img {
  width: 100%;
 }
</style>
