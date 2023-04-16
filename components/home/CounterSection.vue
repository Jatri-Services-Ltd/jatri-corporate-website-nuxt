<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, FreeMode } from 'swiper';
const modules = [FreeMode, Pagination];

</script>
<template>
    <div class="custom-container counter-section py-12 sm:pt-20 lg:pt-[120px] sm:pb-14 lg:pb-[82px]">
      <swiper
          :breakpoints="{
                320: {
                  slidesPerView: 1
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
              }"
          :spaceBetween="30"
          :freeMode="true"
          :pagination="{
                clickable: true,
              }"
          :modules="modules"
          class="mySwiper"
      >
        <swiper-slide>
          <div class="flex justify-center">
            <div>
              <div class="min-h-[120px] flex justify-center items-end">
                <img src="~/assets/images/svg/counter-1.svg"  alt="Counter">
              </div>
              <div class="mt-6 block lg:hidden">
                <div class="text-center relative z-20">
                  <p class="text-dark text-[28px] lg:text-[38px] xl:text-[45px] font-bold mb-[2px] leading-[36px]">300K+</p>
                  <p class="text-body text-[16px] xl:text-[20px] font-medium leading-[24px]">Registered users</p>
                </div>
                <img src="~/assets/images/svg/small-device-gray-shape-bg.svg" class="small-device-gray-shape-img z-10" alt="">
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <div>
              <div class="min-h-[120px] flex justify-center items-end">
                <img src="~/assets/images/svg/counter-2.svg"  alt="Counter" class="" >
              </div>
              <div class="mt-6 block lg:hidden">
                <div class="text-center relative z-20">
                  <p class="text-dark text-[28px] lg:text-[38px] xl:text-[45px] font-bold mb-[2px] xl:mb-[8px] leading-[36px]">100 millions+</p>
                  <p class="text-body text-[16px] xl:text-[20px] font-medium leading-[24px] lg:leading-[28px]">Tickets served</p>
                </div>
                <img src="~/assets/images/svg/small-device-gray-shape-bg.svg" class="small-device-gray-shape-img z-10" alt="">
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <div>
              <div class="min-h-[120px] flex justify-center items-end">
                <img src="~/assets/images/svg/counter-3.svg"  alt="Counter" class="" >
              </div>
              <div class="mt-6 block lg:hidden">
                <div class="text-center relative z-20">
                  <p class="text-dark text-[28px] lg:text-[38px] xl:text-[45px] font-bold mb-[2px] xl:mb-[8px] leading-[36px] lg:leading-[52px]">100K+</p>
                  <p class="text-body text-[16px] xl:text-[20px] font-medium leading-[24px] lg:leading-[28px]">Rental partners</p>
                </div>
                <img src="~/assets/images/svg/small-device-gray-shape-bg.svg" class="small-device-gray-shape-img z-10" alt="">
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
        <div class="hidden lg:block">
          <div class="grid grid-cols-3 z-20 relative mt-8">
            <div class="text-center">
              <p class="text-dark text-[30px] lg:text-[38px] xl:text-[45px] font-bold mb-[2px] xl:mb-[8px] leading-[52px]">300K+</p>
              <p class="text-body text-[18px] xl:text-[20px] font-medium leading-[28px]">Registered users</p>
            </div>
            <div class="text-center">
              <p class="text-dark text-[30px] lg:text-[38px] xl:text-[45px] font-bold mb-[2px] xl:mb-[8px] leading-[52px]">100 millions+</p>
              <p class="text-body text-[18px] xl:text-[20px] font-medium leading-[28px]">Tickets served</p>
            </div>
            <div class="text-center">
              <p class="text-dark text-[30px] lg:text-[38px] xl:text-[45px] font-bold mb-[2px] xl:mb-[8px] leading-[52px]">100K+</p>
              <p class="text-body text-[18px] xl:text-[20px] font-medium leading-[28px]">Rental partners</p>
            </div>
          </div>
          <div class="gray-shape-bg w-full z-10">
            <img src="~/assets/images/svg/gray-shape-bg.svg" class="w-full object-contain" alt="">
          </div>
        </div>
    </div>
</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
}
.gray-shape-bg{
    margin-top: -55px;
}
.small-device-gray-shape{
  margin-top: -40px;
}
.small-device-gray-shape-img{
  height: 75px !important;
  width: 390px !important;
  margin-top: -40px;
}

@media(max-width:1280px){
  .gray-shape-bg{
    margin-top: -50px;
  }
}
/*@media(max-width:1024px){*/
/*  .gray-shape-bg{*/
/*    margin-top: -50px;*/
/*  }*/
/*}*/
</style>