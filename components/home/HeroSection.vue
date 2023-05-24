
<!--<template>-->
<!--    &lt;!&ndash; Hero Section &ndash;&gt;-->
<!--    <section class="relative">-->
<!--      <img src="~/assets/images/home/hero-banner.svg" alt="Hero bg img" class="w-full relative hidden sm:block">-->
<!--      <img src="~/assets/images/home/hero-bg-mobile.svg" alt="Hero bg img" class="w-full relative sm:hidden">-->

<!--      <div class="w-full lg:max-w-[870px] px-4 text-center absolute top-14 lg:top-[60px] xl:top-[140px] left-1/2 transform -translate-x-1/2">-->
<!--        <h1 class="hidden lg:block text-[32px] leading-10 lg:text-[64px] lg:leading-[72px] font-bold">{{ $t('n-hero-title') }}</h1>-->
<!--        <h1 class="block lg:hidden text-[32px] leading-10 lg:text-[64px] lg:leading-[72px] font-bold">{{ $t('n-mob-hero-title1') }} <br> {{ $t('n-mob-hero-title2') }} <br> {{ $t('n-mob-hero-title3') }}</h1>-->
<!--          <div class="inline-block m-auto mt-[30px] lg:mt-10">-->
<!--            <a href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en&gl=" target="_blank" class="flex justify-center items-center gap-2.5 rounded-full bg-primary px-8 py-3 xl:py-4 cursor-pointer">-->
<!--              <img src="~/assets/images/home/download-white.svg" alt="Download icon">-->
<!--              <span class="text-base xl:text-xl font-medium text-white">{{ $t('n-download-app') }}</span>-->
<!--            </a>-->
<!--          </div>-->
<!--      </div>-->
<!--    </section>-->
<!--</template>-->

<style scoped>
.car-wheel {
  @apply animate-[carWheel_1s_linear_infinite] will-change-transform absolute top-8 left-[9px] w-5
}
.bus-wheel {
  @apply animate-[busWheel_1s_linear_infinite] will-change-transform absolute top-8 left-[9px] w-5
}

.car-wheel-right {
  @apply left-auto right-11
}
.bus-wheel-left {
  @apply top-auto bottom-1 left-[59px]
}
.bus-wheel-right {
  @apply top-auto bottom-1 left-auto right-[17px]
}

.car-back-wheel {
  @apply animate-[carWheel_1s_linear_infinite] will-change-transform absolute top-8 right-[100px]
}

@keyframes carWheel {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes busWheel {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.svg-car-wheel {
  @apply animate-[svgCarWheel_1s_linear_infinite] will-change-transform
}
@keyframes svgCarWheel {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.road-move {
  @apply animate-[road-move_2s_linear_infinite_1s] will-change-transform
}

.highway
{
  height: 4px;
  margin-top: 30px;
  width: 500%;
  display: block;
  background-image: url(~/assets/images/test/banner-bottom-lines.png);
  z-index: 1;
  background-repeat: repeat-x;
}
@keyframes highway
{
  100%
  {
    transform: translateX(-3400px);
  }
}

.banner-city {
  height: 287px;
  width: 500%;
  background-image: url('~/assets/images/test/banner-city.png');
  background-color: #FEF2F0;
  display: block;
  z-index: 1;
  animation: city 100s linear infinite;
}
@keyframes city
{
  100%
  {
    transform: translateX(-1400px);
  }
}

.banner-sky {
  height: 175px;
  width: 500%;
  background-image: url('~/assets/images/test/banner-sky.png');
  background-color: #FEF2F0;
  display: block;
  z-index: 1;
  background-repeat: repeat-x;
  animation: sky 40s linear infinite;
}
@keyframes sky
{
  100%
  {
    transform: translateX(-1400px);
  }
}


@keyframes road-move {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-200px);
  }
}
</style>


<template>
  <!-- Hero Section -->
  <section class="relative">
    <!--    <img src="~/assets/images/home/hero-banner.svg" alt="Hero bg img" class="w-full relative hidden sm:block">-->
    <!--    <img src="~/assets/images/home/hero-bg-mobile.svg" alt="Hero bg img" class="w-full relative sm:hidden">-->

    <img src="~/assets/images/test/banner-bg-color.png" alt="Hero bg img" class="w-full h-[200px] relative">
    <div class="banner-sky"></div>
    <div class="banner-city"></div>

    <img src="~/assets/images/test/banner-man.png" alt="" class="z-50 absolute bottom-[78px] left-[240px]">
    <img src="~/assets/images/test/man-bottom-bg.png" alt="" class="z-40 absolute bottom-[76px] left-[240px]">

    <img src="~/assets/images/test/banner-people.png" alt="" class="z-50 absolute bottom-[90px] right-[316px]">
    <img src="~/assets/images/test/banner-bus-stop.png" alt="" class="z-40 absolute bottom-[88px] right-[240px]">
    <img src="~/assets/images/test/banner-bus-stop-bottom-shape.png" alt="" class="z-40 absolute bottom-[88px] right-[260px]">

    <div class="bg-[#FCD7D3] h-11"></div>
    <div class="w-full flex justify-between items-center pl-20 pr-11 absolute bottom-12">
      <div class="relative">
        <img src="~/assets/images/test/banner-car.png" alt="" class="z-50">
        <img src="~/assets/images/test/banner-car-wheel.png" alt="" class="car-wheel">
        <img src="~/assets/images/test/banner-car-wheel.png" alt="" class="car-wheel car-wheel-right">
        <!--        <img src="~/assets/images/test/back-wheel.png" alt="" class="car-back-wheel car-back-wheel">-->
        <!--        <img src="~/assets/images/test/back-wheel.png" alt="" class="car-back-wheel car-back-wheel-right">-->
      </div>

      <div class="relative">
        <img src="~/assets/images/test/banner-bus.png" alt="" class="z-50">
        <img src="~/assets/images/test/banner-car-wheel.png" alt="" class="bus-wheel bus-wheel-left">
        <img src="~/assets/images/test/banner-car-wheel.png" alt="" class="bus-wheel bus-wheel-right">
      </div>
    </div>

    <div class="bg-[#F7A299] h-16 px-11 w-full overflow-hidden">
      <!--      <img src="~/assets/images/test/banner-bottom-lines.png" alt="" class="w-full">-->
      <div class="highway"></div>
    </div>






    <div class="w-full lg:max-w-[870px] px-4 text-center absolute top-14 lg:top-[60px] xl:top-[140px] left-1/2 transform -translate-x-1/2">
      <h1 class="hidden lg:block text-[32px] leading-10 lg:text-[64px] lg:leading-[72px] font-bold">{{ $t('n-hero-title') }}</h1>
      <h1 class="block lg:hidden text-[32px] leading-10 lg:text-[64px] lg:leading-[72px] font-bold">{{ $t('n-mob-hero-title1') }} <br> {{ $t('n-mob-hero-title2') }} <br> {{ $t('n-mob-hero-title3') }}</h1>
      <div class="inline-block m-auto mt-[30px] lg:mt-10">
        <a href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en&gl=US" target="_blank" class="flex justify-center items-center gap-2.5 rounded-full bg-primary px-8 py-3 xl:py-4 cursor-pointer">
          <img src="~/assets/images/home/download-white.svg" alt="Download icon">
          <span class="text-base xl:text-xl font-medium text-white">{{ $t('n-download-app') }}</span>
        </a>
      </div>
    </div>
  </section>
</template>