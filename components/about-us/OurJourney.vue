<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";
import { FreeMode, Navigation, EffectFade} from 'swiper';
import { onMounted, ref } from 'vue';
const modules = [FreeMode, Navigation, EffectFade];

const readMoreSlider = ref([
  {
    id: 1,
    year: 19,
    img:'/images/read-more-slide1.png',
    title:'London Express and Jatri Ticket Website are Together Now!',
    details: 'Lorem ipsum dolor sit amet consectetur. Sodales vel sollicitudin at faucibus. Imperdiet semper venenatis sem iaculis. Vitae justo nulla justo faucibus.'
  },
  {
    id: 2,
    year: 20,
    img:'/images/read-more-slide2.png',
    title:'Jeddah Express Jatri Ticket Website and are Together Now!',
    details: 'Lorem ipsum dolor sit amet consectetur. Sodales vel sollicitudin at faucibus. Imperdiet semper venenatis sem iaculis. Vitae justo nulla justo faucibus.'
  },
  {
    id: 3,
    year: 21,
    img:'/images/read-more-slide3.png',
    title:'Green Line Jatri Ticket Website and Jeddah Express are Together Now!',
    details: 'Lorem ipsum dolor sit amet consectetur. Sodales vel sollicitudin at faucibus. Imperdiet semper venenatis sem iaculis. Vitae justo nulla justo faucibus.'
  },
  {
    id: 4,
    year: 22,
    img:'/images/read-more-slide4.png',
    title:'যাত্রী পার্টনার অ্যাপ: রেন্ট-এ-কার ব্যবসা খাতে নতুন সংযোজন !',
    details: 'Lorem ipsum dolor sit amet consectetur. Sodales vel sollicitudin at faucibus. Imperdiet semper venenatis sem iaculis. Vitae justo nulla justo faucibus.'
  },
  {
    id: 5,
    year: 23,
    img:'/images/read-more-slide2.png',
    title:'Jeddah Express Jatri Ticket Website and are Together Now!',
    details: 'Lorem ipsum dolor sit amet consectetur. Sodales vel sollicitudin at faucibus. Imperdiet semper venenatis sem iaculis. Vitae justo nulla justo faucibus.'
  }
]);


const swiperIndex = ref(0);
const progressYear = ref(2019)

const swiperCarousel = ref(true)

const onSwiper = (swiper) => {
    swiperCarousel.value = swiper
    swiperIndex.value = swiper.activeIndex
  };

onMounted(() => {
  swiperCarousel.value.on('slideNextTransitionEnd',()=>{
    let progressBarFill = document.querySelector('.fill-color-bar');
    let yearProgressWrap = document.querySelector('.year-progress-wrap');
    let yearProgress = document.querySelector('.year-progress');
 
    let progressBarWidth = swiperIndex.value += 1
    if(progressBarWidth <= 4){
      progressBarFill.style.width = `${(25 * progressBarWidth)}%`
      yearProgressWrap.style.width = `${(25 * progressBarWidth)}%`
      yearProgress.dataset.content = progressYear.value += 1
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
    if(progressBarWidth >= 0 && progressBarWidth <= 4){
      progressBarFill.style.width = `${(25 * progressBarWidth)}%`
      yearProgressWrap.style.width = `${(25 * progressBarWidth)}%`
      yearProgress.dataset.content = progressYear.value -= 1
      if(progressBarWidth === 0){
        yearProgressWrap.style.width = '16px'
      }
    }
    let nodeElement = document.getElementsByClassName('circle-wrap')[0]
    let circle = nodeElement.children[progressBarWidth]
    circle.classList.remove('change-color')
  });
})

</script>
<template> 
    <div class="bg-[#082743] py-[60px] text-white relative overflow-hidden our-journey-slider">
      <div class="custom-container">
        <h1 class="text-[28px] md:text-4xl font-medium leading-9 md:leading-[44px]">A bumpy <br>yet enjoyable ride</h1>
          <div class="mt-8 md:mt-14">
            <div class="">
              <swiper
                :allowTouchMove="false"
                :effect="'fade'"
                :navigation="true"
                :modules="modules"
                @swiper="onSwiper"
                class="mySwiper"
              >
                <swiper-slide v-for="slider in readMoreSlider" :key="slider.id" class="h-auto bg-[#082743]">
                  <div class="block md:flex md:gap-4 lg:gap-0 justify-between items-center h-full">
                    <div class="w-full lg:w-1/2 2xl:w-1/3">
                      <p class="text-[45px] md:text-[57px] font-bold md:font-semibold">'{{ slider.year }}</p>
                      <p class="text-xl md:text-2xl py-4 font-medium">{{ slider.title }}</p>
                      <p class="text-base">{{ slider.details }}</p>
                    </div>
                    <div class="flex justify-center md:mt-0 mt-6">
                      <div class="h-[260px] w-[260px] rounded-full object-cover bg-gray-300">
                        <img class="h-full w-full rounded-full" :src="slider.img" alt="Journey of Jatri">
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>

      <div class="mt-20 md:mt-[104px] relative mx-6">
        <div class="year-progress-wrap w-[16px]">
          <div class="flex justify-end w-full">
            <div data-content="2019" class="year-progress">
              <!-- <div class="bg-[#F04935] text-white rounded-full font-semibold w-[90px] h-[44px] flex justify-center items-center">{{ progressYear }}</div> -->
              <div class=""><img src="/images/about-us/fill-arrow-down.svg" alt=""></div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2 relative">
        <div class="mx-6">
          <div class="progress-bar relative h-3 md:h-4 w-full bg-[#FDE5E2] rounded-[15px]">
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
</template>

<style>

:root {
  --progressbar-width: 0%;
}
.year-progress-wrap{
  transition: all 0.3s ease;
}
.year-progress{
/* width: 90px; */
transition: all 0.3s ease;
/* margin-left: -15px; */
position: relative;
}

.year-progress::before{
    content: attr(data-content);
    position: absolute;
    height: 44px;
    width: 90px;
    background-color: #F04935;
    border-radius: 30px;
    top: -44px;
    left: -36px;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
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
  transition-duration: 0ms;
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
  transition-duration: 0ms;
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
  transition: all 5s ease;
  transition-duration: 0ms;
  border-radius: 2rem;
  height: 16px;
  width: 16px;
  right: 0;
  background-color: #D42410 !important;
}

/* ------------------------------ */

* {
    font-family: 'Inter', sans-serif;
}
.slider-img {
  height: 220px;
  width: 100%;
}
.slider-img img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.fill-color-bar{
    position: absolute;
    background-color: rgba(240, 73, 53, 0.7);
    width: 16px;
    height: 16px;
    border-radius: 15px;
    transition: all 0.3s ease;
    top: 0;
}
@media (max-width: 767px){
.year-progress::before{
    height: 36px;
    width: 68px;
    left: -26px;
    top: -36px;
  }
.circle-wrap div:first-child::before, 
.circle-wrap div:nth-child(2)::before, 
.circle-wrap div:nth-child(3)::before, 
.circle-wrap div:last-child::before{
  height: 12px;
  width: 12px;
}
.circle-wrap div:first-child::after{
  height: 12px;
  width: 12px;
}
.change-color::before{
  height: 12px;
  width: 12px;
}
.fill-color-bar{
  height: 12px;
  width: 12px;
}

}

</style>