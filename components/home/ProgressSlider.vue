<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
const modules = [Pagination, Navigation];



</script>

<template>
  <section class="custom-swiper-slider py-12 md:py-20 xl:py-[120px] overflow-hidden">
    <div class="custom-container">
      <div class="flex justify-between items-end pb-[28px]">
        <div>
          <h2 class="text-[28px] md:text-[45px] xl:text-[57px] text-dark font-semibold leading-9 lg:leading-[64px]">{{ $t('n-got-featured') }}</h2>
        </div>
      </div>
    </div>

    <div class="full-width mx-4 md:mx-12 lg:mx-[60px] xl:mx-[100px] 2xl:mx-[200px]">
      <swiper
        :pagination="{
          type: 'progressbar',
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper !z-0"
      >
        <swiper-slide>
          <div class="py-20">Slide content 1</div>
        </swiper-slide>
        <swiper-slide>
          <div class="py-20">Slide content 2</div>
        </swiper-slide>
        <swiper-slide>
          <div class="py-20">Slide content 2</div>
        </swiper-slide>
        <swiper-slide>
          <div class="py-20">Slide content 4</div>
        </swiper-slide>
      </swiper>
      <div class="about-us-pagination-items flex w-auto -mt-4 mx-[37px] z-[9]">
        <div class="w-1/5 z-0 grid place-content-end">
          <div class="about-us-pagination-item h-4 w-4 z-0 transition-[background-color] duration-[0.3s] ease-in-out bg-[#D42410] rounded-full" id="about-us-slider-pagination1"></div>
        </div>
        <div class="w-1/5 z-0 grid place-content-end">
          <div class="about-us-pagination-item h-4 w-4 z-0 transition-[background-color] duration-[0.3s] ease-in-out bg-[#D42410] opacity-30 rounded-full" id="about-us-slider-pagination2"></div>
        </div>
        <div class="w-1/5 z-0 grid place-content-end">
          <div class="about-us-pagination-item h-4 w-4 z-0 transition-[background-color] duration-[0.3s] ease-in-out bg-[#D42410] opacity-30 rounded-full" id="about-us-slider-pagination3"></div>
        </div>
        <div class="w-1/5 z-0 grid place-content-end">
          <div class="about-us-pagination-item h-4 w-4 z-0 transition-[background-color] duration-[0.3s] ease-in-out bg-[#D42410] opacity-30 rounded-full" id="about-us-slider-pagination4"></div>
        </div>
        <div class="w-1/5 z-0 grid place-content-end">
          <div class="about-us-pagination-item h-4 w-4 z-0 transition-[background-color] duration-[0.3s] ease-in-out bg-[#D42410] opacity-30 rounded-full" id="about-us-slider-pagination5"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.custom-swiper-slider .swiper-pagination-progressbar {
  background: #fde5e2;
}
.custom-swiper-slider .swiper-horizontal>.swiper-pagination-progressbar,
.custom-swiper-slider .swiper-pagination-progressbar.swiper-pagination-horizontal {
  height: 16px;
  border-radius: 50px;
  margin: 0 37px;
  width: auto;
}
.custom-swiper-slider .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: #f16251;
  border-radius: 50px;
  transform: scale(1) !important;
  width: 20%;
}

</style>