<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
const modules = [Pagination];

const swiperCarousel = ref(true)
const firstElement = ref(true);
const lastElement = ref(false);

const onSwiper = (swiper) => {
  swiperCarousel.value = swiper
};
// let nodeProgressBarElement = document.getElementsByClassName('swiper-pagination-progressbar-fill')[0]
// let progressBar = document.querySelector('.swiper-pagination-progressbar-fill')

const slideNext = () => {
  let progressBarFill = document.querySelector('.swiper-pagination-progressbar-fill');
  swiperCarousel.value.slideTo(swiperCarousel.value.realIndex + 1)
  if(swiperCarousel.value.isEnd === true){
    lastElement.value = true
    firstElement.value = false
  }
  for (let i = 0; i <= 5; i++) {
    if (swiperCarousel.value.realIndex === i) {
      progressBarFill.style.width = `calc(var(--progressbar-width) + ${25 * i}%)`;
      console.log(typeof progressBarFill.style.width);
      console.log(parseFloat(progressBarFill.style.width));
    }
  }
  // progressBarFill.style.width = `calc(var(--progressbar-width) + 25%)`;
  progressBarFill.style.transform = `scaleX(1)`;
}

const slidePrev = () => {
  let progressBarFill = document.querySelector('.swiper-pagination-progressbar-fill');
  swiperCarousel.value.slideTo(swiperCarousel.value.realIndex - 1)
  if(swiperCarousel.value.realIndex === 0){
    firstElement.value = true
    lastElement.value = false
  }
  for (let i = 0; i < 5; i++) {
    if (swiperCarousel.value.realIndex === i) {
      progressBarFill.style.width = `calc(var(--progressbar-width) - ${25 * i}%)`;
      console.log(typeof progressBarFill.style.width);
      console.log(parseFloat(progressBarFill.style.width));
    }
  }
  // progressBarFill.style.width = `calc(var(--progressbar-width) - 25%)`;
  progressBarFill.style.transform = `scaleX(1)`;
}
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
      <div class="flex gap-6 lg:gap-8 items-center">
        <button @click="slidePrev" class="h-[46px] lg:h-[60px] w-[46px] lg:w-[60px] flex justify-center items-center border border-[#DBDBDB] rounded-full">
          <img :class="firstElement ? 'opacity-30' : 'opacity-100'" class="h-[20px] w-[21px]" src="~/assets/images/home/arrow-prev.svg" alt="Previous Arrow">
        </button>
        <button @click="slideNext" class="h-[46px] lg:h-[60px] w-[46px] lg:w-[60px] flex justify-center items-center border border-[#DBDBDB] rounded-full">
          <img :class="lastElement ? 'opacity-30' : 'opacity-100'" class="h-[20px] w-[21px]" src="~/assets/images/home/arrow-next.svg" alt="Previous Arrow">
        </button>
      </div>
      <swiper
        :pagination="{
          type: 'progressbar',
        }"
        :modules="modules"
        @swiper="onSwiper"
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
:root {
  --progressbar-width: 0%;
}
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
}

</style>