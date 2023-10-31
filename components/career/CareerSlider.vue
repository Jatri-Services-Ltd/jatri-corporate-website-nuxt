<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Autoplay } from 'swiper';

const modules = [ FreeMode, Autoplay ];

const config = useRuntimeConfig();
const {data} = await useFetch(config.public.apiURL + '/api/v1/get-career-banners')
console.log(data.value.data)

const bannerImages = data.value.data;
const chunkSize = 5;
const slicedImages = [];

const chunkBannerImages = {
  firstSlider: data.value.data.slice(0, chunkSize),
  secondSlider: data.value.data.slice(chunkSize),
}

</script>

<template>
  <div class="bg-[#F7F7F7] py-10 lg:py-[60px] relative">
    <div class="sample-slider">
      <swiper
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 32
          }
        }"
        :spaceBetween="30"
        :freeMode="{
          enabled: true,
          freeModeMomentum: false
        }"
        :loop="true"
        :speed=4000
        :autoplay="{
          enabled: true,
          delay: 0,
          stopOnLastSlide: false,
          waitForTransition: true
        }"
    
        :modules="modules"
        class="mySwiper"
    >
          <swiper-slide v-for="slideImage in chunkBannerImages.firstSlider">
            <div class="career-slider-img">
              <img :src="'https://sgp1.digitaloceanspaces.com/storage.jatri.co/'+slideImage" alt="image">
            </div>
          </swiper-slide>
      </swiper>
    </div>
    <div class="sample-slider mt-4 md:mt-8">
      <swiper
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 32
          }
        }"
        :spaceBetween="30"
        :freeMode="{
          enabled: true,
          freeModeMomentum: false
        }"
        :loop="true"
        :speed=4000
        :autoplay="{
          enabled: true,
          delay: 0,
          disableOnInteraction: true,
          reverseDirection: true,
          stopOnLastSlide: false,
          waitForTransition: true
        }"
    
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide v-for="slideImage in chunkBannerImages.secondSlider">
          <div class="career-slider-img">

            <img :src="'https://sgp1.digitaloceanspaces.com/storage.jatri.co/'+slideImage" alt="image">
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <h2 style="text-shadow: 0px 0px 26px rgba(0, 0, 0, 0.24);" class="text-white absolute text-[60px] lg:text-[120px] leading-[64px] font-[700] transform -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] z-40">#Life@Jatri</h2>
  </div>
</template>

<style>
.sample-slider .swiper-wrapper{
    transition-timing-function: linear;
}
/*.sample-slider .swiper-wrapper .swiper-slide,*/
/*.sample-slider .swiper-wrapper .swiper-slide img {*/
/*    height: 300px !important;*/
/*    !*width: auto !important;*!*/
/*}*/
.career-slider-img img{
  @apply rounded-3xl
}

@media (max-width: 767px){
  .career-slider-img img{
    @apply h-[200px]
  }
  .sample-slider .swiper-wrapper .swiper-slide{
    height: 200px !important;
}
}
</style>