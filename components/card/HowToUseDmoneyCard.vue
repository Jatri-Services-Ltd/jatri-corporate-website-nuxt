<template>
  <!--  slider-->
  <section class="bg-[#FEF2F0]  use-dmoney-swipper-container">
    <div class="custom-container">
      <div class="max-w-[1440px] 3xl:max-w-full flex flex-col md:flex-row gap-0 md:gap-5 lg:gap-16 xl:gap-20">
        <div class="flex-grow self-center md:max-w-[420px] lg:max-w-[520px] xl:max-w-[640px] order-2 md:order-1">
          <div class="hidden md:block">
            <p class="text-[#676769] text-base lg:text-xl font-medium mb-4 lg:mb-2 xl:mb-4">
              {{ $t('how-to-use-jatricard-subheading') }}</p>
            <h2 class="content-title">{{ $t('how-to-use-jatricard-heading1') }}<br>{{ $t('how-to-use-jatricard-heading2') }}<br>{{ $t('how-to-use-jatricard-heading3') }}</h2>
          </div>
          <div class="mt-8 md:mt-6 xl:mt-20 md:space-y-4 lg:space-y-8 xl:space-y-14 content-height">
            <div :class="isMobile && (activeSlideIndex === 0 ? 'block' : 'hidden')">
              <p class="content-sub-title" :class="activeSlideIndex === 0 ? 'text-corporate ' : 'text-[#808080]'">
                {{ $t('how-to-use-jatricard-step1-title') }}</p>
              <p class="content-detail" :class="activeSlideIndex === 0 ? 'text-dark' : 'text-[#808080]'">
                {{ $t('how-to-use-jatricard-step1-content') }}</p>
            </div>
            <div :class="isMobile && (activeSlideIndex === 1 ? 'block' : 'hidden')">
              <p class="content-sub-title" :class="activeSlideIndex === 1 ? 'text-corporate ' : 'text-[#808080]'">
                {{ $t('how-to-use-jatricard-step2-title') }}</p>
              <p class="content-detail" :class="activeSlideIndex === 1 ? 'text-dark' : 'text-[#808080]'">
                {{ $t('how-to-use-jatricard-step2-content') }}</p>
            </div>
            <div :class="isMobile && (activeSlideIndex === 2 ? 'block' : 'hidden')">
              <p class="content-sub-title" :class="activeSlideIndex === 2 ? 'text-corporate ' : 'text-[#808080]'">
                {{ $t('how-to-use-jatricard-step3-title') }}</p>
              <p class="content-detail" :class="activeSlideIndex === 2 ? 'text-dark' : 'text-[#808080]'">
                {{ $t('how-to-use-jatricard-step3-content') }}</p>
            </div>
          </div>
        </div>
        <div class="flex-grow flex flex-col lg:flex-row justify-start lg:justify-end order-1 md:order-2">
          <div class="block md:hidden pt-10">
            <p class="text-[#676769] text-base lg:text-xl font-medium mb-4">{{ $t('how-to-use-jatricard-subheading') }}</p>
            <h2 class="content-title">{{ $t('how-to-use-jatricard-heading1') }}<br>{{ $t('how-to-use-jatricard-heading2') }}<br>{{ $t('how-to-use-jatricard-heading3') }}</h2>
          </div>
          <div>

            <div class=" mt-10 md:mt-20">
              <swiper :direction="isMobile ? 'horizontal' : 'vertical'" :slidesPerView="1.3" :breakpoints="{
                1024: {
                  spaceBetween: 40
                },
                768: {
                  spaceBetween: 30
                },
                320: {
                  spaceBetween: 30
                }
                }"
                :autoplay="{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }" :pagination="{
                  clickable: true,
                }" :modules="modules" class="mySwiper" @swiper="onSwiper" @slideChange="changeSlide">
                <swiper-slide>
                  <div class="slider-img-wrapper">
                    <img class="h-full w-full object-cover" src="~/assets/images/jatri-card/account-open.jpg" alt="">
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="slider-img-wrapper">
                    <img class="h-full w-full object-cover" src="~/assets/images/jatri-card/recharge.png" alt="">
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="slider-img-wrapper">
                    <img class="h-full w-full object-cover" src="~/assets/images/jatri-card/use_card.png" alt="">
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Navigation, Autoplay, } from 'swiper';
import { onMounted, ref } from "vue";

const modules = [Navigation, FreeMode, Autoplay];

let swiperInstance = null;

const onSwiper = (swiper) => {
  swiperInstance = swiper;
  swiperInstance.on('touchStart', () => {
    swiperInstance.autoplay.stop();
  });

  swiperInstance.on('touchEnd', () => {
    swiperInstance.autoplay.start();
  });

  document.addEventListener('focusin', (event) => {
    if (swiperInstance.el.contains(event.target)) {
      swiperInstance.autoplay.stop();
    }
  });

  document.addEventListener('focusout', (event) => {
    if (swiperInstance.el.contains(event.target)) {
      swiperInstance.autoplay.start();
    }
  });
};

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
.slider-img-wrapper {
  @apply max-h-[389px] md:max-h-[544px] xl:max-h-[674px] max-w-[300px] md:max-w-[390px] xl:max-w-[520px]
}

.content-title {
  @apply text-dark text-[28px] lg:text-[35px] xl:text-[57px] leading-9 lg:leading-[44px] xl:leading-[64px] font-medium sm:font-semibold
}

.content-sub-title {
  @apply text-xl lg:text-2xl xl:text-[32px] xl:leading-[40px] font-medium mb-5
}

.content-detail {
  @apply text-base md:text-sm lg:text-base xl:text-xl xl:leading-[30px]
}

.use-dmoney-swipper-container .swiper-wrapper {
  height: 920px !important;
}

.use-dmoney-swipper-container .swiper-slide {
  height: 674px;
}


@media(max-width:1279px) {
  .use-dmoney-swipper-container .swiper-wrapper {
    height: 730px !important;
  }
}

@media(max-width:1024px) {
  .use-dmoney-swipper-container .swiper-wrapper {
    height: 650px !important;
  }
}

@media(max-width:768px) {
  .use-dmoney-swipper-container .swiper-wrapper {
    height: 500px !important;
  }
}

@media(max-width:767px) {
  .use-dmoney-swipper-container .swiper-wrapper {
    height: 380px !important;
  }
  /* .use-dmoney-swipper-container .swiper-slide {
    width: 300px !important;
  } */
  .content-height {
    min-height: 160px;
  }
}

@media(max-width:412px) {
  .content-height {
    min-height: 210px;
  }
}

@media(max-width:411px) {
  .use-dmoney-swipper-container .swiper-wrapper {
    height: 350px !important;
  }
}
</style>