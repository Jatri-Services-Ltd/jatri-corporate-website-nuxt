<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper';
import { ref } from 'vue';
const modules = [Navigation, FreeMode];

const readMoreSlider = ref([
  {
    id: 1,
    img:'/images/read-more-slide1.png',
    title:'London Express and Jatri Ticket Website are Together...',
    publishedAt: '12 Feb 2023',
    link: '#'
  },
  {
    id: 2,
    img:'/images/read-more-slide2.png',
    title:'Jeddah Express Jatri Ticket Website and are Together...',
    publishedAt: '12 Feb 2023',
    link: '#'
  },
  {
    id: 3,
    img:'/images/read-more-slide3.png',
    title:'Green Line Jatri Ticket Website and Jeddah Expres...',
    publishedAt: '12 Feb 2023',
    link: '#'
  },
  {
    id: 4,
    img:'/images/read-more-slide4.png',
    title:'যাত্রী পার্টনার অ্যাপ: রেন্ট-এ-কার ব্যবসা খাতে নতুন সংযোজন !',
    publishedAt: '20 Jan 2022',
    link: '#'
  }
]);
</script>

<template>
  <section class="custom-swiper-slider read-more-swiper-slider relative overflow-hidden bg-grey py-8 md:py-[60px]">
    <div class="custom-container">
      <div class="flex justify-between items-center lg:items-end mb-10 lg:mb-[60px]">
        <div>
          <h2 class="text-[28px] lg:text-[57px] text-dark font-semibold leading-9 lg:leading-[64px]">{{ $t('n-read-more-about-us') }}</h2>
        </div>
      </div>
    </div>
    <div class="full-width pl-4 md:pl-12 lg:pl-[60px] xl:pl-[100px] 2xl:pl-[200px]">
        <div class="full-width">
          <swiper
              :breakpoints="{
                    320: {
                      slidesPerView: 1.2,
                      spaceBetween: 20
                    },
                    640: {
                      slidesPerView: 2.8,
                      spaceBetween: 20
                    },
                    1024: {
                      slidesPerView: 3.3,
                      spaceBetween: 20
                    },
                    1280: {
                      slidesPerView: 3.9,
                      spaceBetween: 32
                    }
              }"
              :navigation="true"
              :spaceBetween="30"
              :freeMode="true"
              :modules="modules"
              class="mySwiper"
          >
            <swiper-slide v-for="slider in readMoreSlider" :key="slider.id">
              <nuxt-link to="#" class="flex flex-col justify-between min-h-[342px] bg-white rounded-2xl py-4 px-4 h-full">
                <div>
                  <div class="mb-4 slider-img">
                    <img class="rounded-2xl" :src="slider.img" alt="Feature Slider">
                  </div>
                  <p class="text-[#4D4D4F] text-sm leading-5 font-medium mb-2">{{ slider.publishedAt }}</p>
                  <h3 class="text-dark font-medium text-[20px] leading-7">{{ slider.title }}</h3>
                </div>
                <div>
                </div>
              </nuxt-link>
            </swiper-slide>
          </swiper>
        </div>
      </div>
  </section>
</template>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
}
.slider-img img{
  width: 100%;
}
</style>