<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, FreeMode } from 'swiper';
const modules = [FreeMode, Pagination];

</script>
<template>
    <div class="px-[100px] py-28">
        <div class="mb-[48px]">
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
                <div class="">
                  <div class="flex flex-col justify-end items-center text-center relative">
                    <div class="min-h-[120px] flex justify-center items-end">
                        <img src="~/assets/images/home/counter-1.png"  alt="Counter" class="" >
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-slide">
                  <div class="flex flex-col justify-end items-center text-center relative">
                    <div class="min-h-[120px] flex justify-center items-end">
                        <img src="~/assets/images/home/counter-2.png"  alt="Counter" class="" >
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-slide">
                  <div class="flex flex-col justify-end items-center text-center relative">
                    <div class="min-h-[120px] flex justify-center items-end">
                        <img src="~/assets/images/home/counter-3.png"  alt="Counter" class="" >
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
        </div>
        <div class="grid grid-cols-3 z-20 relative">
            <div class="text-center">
                <p class="text-dark text-[38px] xl:text-[45px] font-bold mb-[8px]">300K+</p>
                <p class="text-body text-[18px] xl:text-[20px] font-medium">Registered users</p>
            </div>
            <div class="text-center">
                <p class="text-dark text-[38px] xl:text-[45px] font-bold mb-[8px]">100 millions+</p>
                <p class="text-body text-[18px] xl:text-[20px] font-medium">Tickets served</p>
            </div>
            <div class="text-center">
                <p class="text-dark text-[38px] xl:text-[45px] font-bold mb-[8px]">100K+</p>
                <p class="text-body text-[18px] xl:text-[20px] font-medium">Rental partners</p>
            </div>
        </div>
        <div class="gray-shape-bg w-full z-10">
            <img src="~/assets/images/home/gray-shape-bg-2.svg" class="w-full object-contain" alt="">
            <!-- <div><img src="~/assets/images/home/star.svg" class="h-[71px]" alt=""></div> -->
            <!-- <div class="w-full h-[70px]"><img src="~/assets/images/home/gray-shape-bg.svg" class="w-full h-[90px] object-cover" alt=""></div> -->
            <!-- <div><img src="~/assets/images/home/double-star.svg" class="h-[65px]" alt=""></div> -->
        </div>
    </div>
</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
}
.gray-shape-bg{
    margin-top: -65px;
}
</style>