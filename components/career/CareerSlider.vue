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
        <swiper-slide>
        <div class="career-slider-img">
          <img src="/images/career/top-slider-1.jpg" alt="">
        </div>
        </swiper-slide>
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/top-slider-2.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/top-slider-3.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/top-slider-4.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/top-slider-1.jpg" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/top-slider-2.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/top-slider-3.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/top-slider-4.png" alt="">
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
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/bottom-slider-1.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/bottom-slider-2.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/bottom-slider-3.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/bottom-slider-4.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/top-slider-1.jpg" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/top-slider-2.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/top-slider-3.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="career-slider-img">
            <img src="/images/career/top-slider-4.png" alt="">
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <h2 style="text-shadow: 0px 0px 26px rgba(0, 0, 0, 0.24);" class="text-white absolute text-[60px] lg:text-[120px] leading-[64px] font-[700] transform -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] z-40">#Life@Jatri</h2>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Autoplay } from 'swiper';

const modules = [ FreeMode, Autoplay ];
</script>

<style>
.sample-slider .swiper-wrapper{
    transition-timing-function: linear;
}
/* .sample-slider .swiper-wrapper .swiper-slide{
    height: 300px !important;
    width: auto !important;
}  */
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