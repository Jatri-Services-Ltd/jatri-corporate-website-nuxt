<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, FreeMode } from 'swiper';
const modules = [FreeMode, Pagination];

</script>
<template>
    <section class="custom-container counter-section py-12 sm:pt-20 lg:pt-[120px] sm:pb-14 lg:pb-[82px]">
      <swiper
          :breakpoints="{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30
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
                <img src="~/assets/images/home/counter-1.png"  alt="Counter">
              </div>
              <div class="mt-6 block lg:hidden">
                <div class="text-center relative z-20">
                  <p class="text-dark text-[28px] lg:text-[38px] xl:text-[45px] font-bold mb-1 leading-9">{{ $t('n-counter-300') }}</p>
                  <p class="text-body text-base xl:text-xl font-medium leading-[24px]">{{ $t('n-counter-registered-user') }}</p>
                </div>
                <img src="~/assets/images/home/small-device-gray-shape-bg.svg" class="small-device-gray-shape-img z-10" alt="Jatri">
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <div>
              <div class="min-h-[120px] flex justify-center items-end">
                <img src="~/assets/images/home/counter-2.png"  alt="Counter" >
              </div>
              <div class="mt-6 block lg:hidden">
                <div class="text-center relative z-20">
                  <p class="text-dark text-[28px] lg:text-[38px] xl:text-[45px] font-bold mb-1 leading-9">{{ $t('n-counter-million') }}</p>
                  <p class="text-body text-base xl:text-xl font-medium leading-[24px] lg:leading-[28px]">{{ $t('n-counter-tickets-served') }}</p>
                </div>
                <img src="~/assets/images/home/small-device-gray-shape-bg.svg" class="small-device-gray-shape-img z-10" alt="Jatri">
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center">
            <div>
              <div class="min-h-[120px] flex justify-center items-end">
                <img src="~/assets/images/home/counter-3.png"  alt="Counter">
              </div>
              <div class="mt-6 block lg:hidden">
                <div class="text-center relative z-20">
                  <p class="text-dark text-[28px] lg:text-[38px] xl:text-[45px] font-bold mb-1 leading-9 lg:leading-[52px]">{{ $t('n-counter-100') }}</p>
                  <p class="text-body text-base xl:text-xl font-medium leading-[24px] lg:leading-[28px]">{{ $t('n-counter-rental-partners') }}</p>
                </div>
                <img src="~/assets/images/home/small-device-gray-shape-bg.svg" class="small-device-gray-shape-img z-10" alt="Jatri">
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
        <div class="hidden lg:block">
          <div class="grid grid-cols-3 z-20 relative mt-10">
            <div class="text-center">
              <p class="text-dark text-3xl lg:text-[38px] xl:text-[45px] font-bold mb-1 xl:mb-2 leading-[52px]">{{ $t('n-counter-300') }}</p>
              <p class="text-body text-[18px] xl:text-xl font-medium leading-7">{{ $t('n-counter-registered-user') }}</p>
            </div>
            <div class="text-center">
              <p class="text-dark text-3xl lg:text-[38px] xl:text-[45px] font-bold mb-1 xl:mb-2 leading-[52px]">{{ $t('n-counter-million') }}</p>
              <p class="text-body text-[18px] xl:text-xl font-medium leading-7">{{ $t('n-counter-tickets-served') }}</p>
            </div>
            <div class="text-center">
              <p class="text-dark text-3xl lg:text-[38px] xl:text-[45px] font-bold mb-1 xl:mb-2 leading-[52px]">{{ $t('n-counter-100') }}</p>
              <p class="text-body text-[18px] xl:text-xl font-medium leading-7">{{ $t('n-counter-rental-partners') }}</p>
            </div>
          </div>
          <div class="gray-shape-bg w-full z-10">
            <img src="~/assets/images/home/gray-shape-bg.png" class="w-full object-contain" alt="Jatri">
          </div>
        </div>
    </section>
</template>

<style scoped>
.gray-shape-bg {
  @apply mt-[-55px] xl:mt-[-50px]
}
.small-device-gray-shape-img {
  @apply h-[75px] w-[390px] mt-[-43px]
}
</style>