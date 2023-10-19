<template>
  <!--  slider-->
  <section class="bg-[#FEF2F0]  use-dmoney-swipper-container">
    <div class="custom-container">
      <div class="max-w-[1440px] flex flex-col md:flex-row gap-0 md:gap-5 lg:gap-16 xl:gap-20">
        <div class="flex-grow md:max-w-[420px] lg:max-w-[520px] xl:max-w-[640px] pb-10 lg:pb-5 order-2 md:order-1">
          <div class="hidden md:block  pt-10 lg:pt-16 xl:pt-[100px]">
            <p class="text-[#676769] text-base lg:text-xl font-medium mb-4 lg:mb-2 xl:mb-4">HOW TO USE DMONEY JATRI
              CARD</p>
            <h2 class="content-title">Make your&nbsp;</h2>
            <h2 class="content-title">everyday commute&nbsp;</h2>
            <h2 class="content-title">hassle free</h2>
          </div>
          <div class="mt-8 md:mt-6 xl:mt-20 md:space-y-4 lg:space-y-8 xl:space-y-14">
            <div :class="isMobile && (activeSlideIndex === 0 ? 'block': 'hidden')">
              <p class="content-sub-title" :class="activeSlideIndex === 0 ? 'text-corporate ' : 'text-[#808080]'">01. Open account and apply for card</p>
              <p class="text-dark content-detail">Install <span class="font-medium">“Dmoney App”</span> --> verify
                number --> complete eKYC with your NID --> apply for <span
                    class="font-medium">“Get Dmoney Jatri Card”</span> --> collect your
                card at doorstep --> Remember the <span class="font-medium">PIN.</span></p>
            </div>
            <div :class="isMobile && (activeSlideIndex === 1 ? 'block': 'hidden')">
              <p class="content-sub-title" :class="activeSlideIndex === 1 ? 'text-corporate ' : 'text-[#808080]'">02. Recharge your card</p>
              <p class="text-[#808080] content-detail">Go to Dmoney app tap on <span
                  class="font-medium">“Add money”</span> --> select card --> enter minimum <span class="font-medium">10BDT</span>
                amount and necessary info tap <span class="font-medium">“Submit”</span> --> You are ready to use your
                Dmoney <span class="font-medium">Jatri Card!</span></p>
            </div>
            <div :class="isMobile && (activeSlideIndex === 2 ? 'block': 'hidden')">
              <p class="content-sub-title" :class="activeSlideIndex === 2 ? 'text-corporate ' : 'text-[#808080]'">03. Use card to buy tickets and more</p>
              <p class="text-[#808080] content-detail"><span class="font-medium">“Carry”</span>our Dmoney Jatri card
                with you --> use Dmoney Jatri card to buy your day to day bus tickets in <span class="font-medium">seconds</span>
                with one tap --> you can also use the card for other payments and cash withdrawal.</p>
            </div>
          </div>
        </div>
        <div class="flex-grow flex flex-col lg:flex-row justify-start lg:justify-end order-1 md:order-2">
          <div class="block md:hidden">
            <p class="text-[#676769] text-base lg:text-xl font-medium mb-2 xl:mb-4">HOW TO USE DMONEY JATRI CARD</p>
            <h2 class="content-title">Make your&nbsp;</h2>
            <h2 class="content-title">everyday commute&nbsp;</h2>
            <h2 class="content-title">hassle free</h2>
          </div>
          <div>

            <swiper
                :direction="isMobile ? 'horizontal' : 'vertical'"
                :slidesPerView="1.3"
                :spaceBetween="20"
                :autoplay="{
                  delay: 2500,
                  disableOnInteraction: false,
                }"
                :pagination="{
                      clickable: true,
                    }"
                :modules="modules"
                class="mySwiper"
                @slideChange="changeSlide"
            >
              <swiper-slide class="lg:mt-20">
                <div
                    class="max-h-[674px] max-w-[250px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[520px] mb-0 lg:mb-[65px] xl:mb-10 mx-auto mt-10 lg:mt-0">
                  <img class="h-full w-full object-cover" src="~/assets/images/jatri-card/1.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div
                    class="max-h-[674px] max-w-[250px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[520px] mb-0 lg:mb-[65px] xl:mb-10 mx-auto mt-10 lg:mt-0">
                  <img class="h-full w-full object-cover" src="~/assets/images/jatri-card/1.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div
                    class="max-h-[674px] max-w-[250px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[520px] mb-0 lg:mb-[65px] xl:mb-10 mx-auto mt-10 lg:mt-0">
                  <img class="h-full w-full object-cover" src="~/assets/images/jatri-card/1.png" alt="">
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import {FreeMode, Navigation, Autoplay, } from 'swiper';
import {onMounted, ref} from "vue";

const modules = [Navigation, FreeMode, Autoplay];

const activeSlideIndex = ref(0)
const changeSlide = (e) => {
  activeSlideIndex.value = e.activeIndex
}
let isMobile = ref(false)
const getWindowSize = () => {
  isMobile.value = window.outerWidth <= 767
}

onMounted(() => {
  window.addEventListener("resize", getWindowSize)
  getWindowSize()
})

</script>

<style>
.content-title {
  @apply text-dark text-[28px] lg:text-[35px] xl:text-[57px] leading-9 lg:leading-[44px] xl:leading-[64px] font-semibold
}

.content-sub-title {
  @apply text-xl xl:text-4xl xl:leading-[44px] font-medium mb-2 xl:mb-5
}

.content-detail {
  @apply text-base md:text-sm xl:text-xl
}

.use-dmoney-swipper-container .swiper-wrapper{
  height: 977px !important;
}

@media(max-width:1024px){
  .use-dmoney-swipper-container .swiper-wrapper{
  height: 600px !important;
}
}
@media(max-width:767px){
  .use-dmoney-swipper-container .swiper-wrapper{
  height: 420px !important;
}
}
@media(max-width:411px){
  .use-dmoney-swipper-container .swiper-wrapper{
  height: 350px !important;
}
}

.use-dmoney-swipper-container .swiper-slide{
  height: 674px;
}

</style>