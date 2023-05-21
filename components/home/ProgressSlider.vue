<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
const modules = [Pagination, Navigation];

const swiperIndex = ref(0);
const progressYear = ref(2019)

const swiperCarousel = ref(true)

const onSwiper = (swiper) => {
    swiperCarousel.value = swiper
    swiperIndex.value = swiper.activeIndex
    console.log(swiper, 'swiper');

  };

onMounted(() => {
  swiperCarousel.value.on('slideNextTransitionEnd',()=>{
    let progressBarFill = document.querySelector('.fill-color-bar');
    let yearProgressWrap = document.querySelector('.year-progress-wrap');
    let yearProgress = document.querySelector('.year-progress');
 
    let progressBarWidth = swiperIndex.value += 1
    if(progressBarWidth <= 4){
      progressBarFill.style.width = `${(25 * progressBarWidth)}%`
      yearProgress.style.width = `${((25 * progressBarWidth) + 3.5)}%`
      yearProgressWrap.style.margin = '0 24px'
      progressYear.value = progressYear.value += 1
    }
    let nodeElement = document.getElementsByClassName('circle-wrap')[0]
    let circle = nodeElement.children[progressBarWidth - 1]
    circle.classList.add('change-color')

  });

  swiperCarousel.value.on('slidePrevTransitionEnd',()=>{
    let progressBarFill = document.querySelector('.fill-color-bar');
    let yearProgressWrap = document.querySelector('.year-progress-wrap');
    let yearProgress = document.querySelector('.year-progress');

    let progressBarWidth = swiperIndex.value -= 1
    progressYear.value = progressYear.value -= 1
    if(progressBarWidth >= 0 && progressBarWidth <= 4){
      progressBarFill.style.width = `${(25 * progressBarWidth)}%`
      if(progressBarWidth === 0){
        yearProgress.style.width = '90px'
        yearProgressWrap.style.margin = '0'
      }else{
        yearProgress.style.width = `${((25 * progressBarWidth) + 3.5)}%`
      }
    }
    let nodeElement = document.getElementsByClassName('circle-wrap')[0]
    let circle = nodeElement.children[progressBarWidth]
    circle.classList.remove('change-color')
  });
})
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
        :pagination="true"
        :navigation="true"
        @swiper="onSwiper"
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
        <swiper-slide>
          <div class="py-20">Slide content 5</div>
        </swiper-slide>
      </swiper>

<div>
  <div class="mt-20 relative">
        <div class="year-progress-wrap">
          <div class="year-progress flex justify-end">
            <div>
              <div class="bg-[#F04935] text-white rounded-full font-semibold w-[90px] h-[44px] flex justify-center items-center">{{ progressYear }}</div>
              <div class="flex justify-center"><img src="/images/about-us/fill-arrow-down.svg" alt=""></div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2 relative">
        <div class="mx-6">
          <div class="progress-bar relative h-4 w-full bg-[#FDE5E2] rounded-[15px]">
            <div class="circle-wrap flex h-4 ">
              <div class="w-1/4"></div>
              <div class="w-1/4"></div>
              <div class="w-1/4"></div>
              <div class="w-1/4"></div>
            </div>
            <div class="fill-color-bar"></div>
          </div>
        </div>
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

/* --------------- */
:root {
  --progressbar-width: 0%;
}

.year-progress{
width: 90px;
transition: all 0.2s ease;
margin-left: -15px;
}

.circle-wrap div {
  position: relative;
  z-index: 2;
  transition: color .3s ease-in-out;
}

.circle-wrap div:first-child::before, 
.circle-wrap div:nth-child(2)::before, 
.circle-wrap div:nth-child(3)::before, 
.circle-wrap div:last-child::before{
  content: "";
  position: absolute;
  z-index: -1;
  background: #d1170356;
  transition: .3s ease-in-out;
  border-radius: 2rem;
  height: 16px;
  width: 16px;
  right: 0;
}
.circle-wrap div:first-child::after{
  content: "";
  position: absolute;
  z-index: -1;
  background: #F04935;
  transition: .3s ease-in-out;
  border-radius: 2rem;
  height: 16px;
  width: 16px;
  left: 0;
}
.change-color::before{
  content: "";
  position: absolute;
  z-index: -1;
  height: 100%;
  transition: .3s ease-in-out;
  border-radius: 2rem;
  height: 16px;
  width: 16px;
  right: 0;
  background-color: #D42410 !important;
}
.fill-color-bar{
    position: absolute;
    background-color: rgba(240, 73, 53, 0.7);
    width: 16px;
    height: 16px;
    border-radius: 15px;
    transition: all 0.2s ease;
    top: 0;
    /* animation: progres 4s linear;     */
}

</style>