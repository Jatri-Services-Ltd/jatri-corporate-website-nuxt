
<template>
    <!-- Hero Section -->
    <section class="relative custom-container mt-5">
      <img src="~/assets/images/home/hero-banner.svg" alt="Hero bg img" class="w-full rounded-[32px] relative hidden sm:block">
      <img src="~/assets/images/home/hero-bg-mobile.svg" alt="Hero bg img" class="w-full rounded-[32px] relative sm:hidden">

      <div class="w-full lg:max-w-[870px] px-4 text-center absolute top-14 lg:top-[60px] xl:top-[140px] left-1/2 transform -translate-x-1/2">
        <h1 class="hidden lg:block text-[32px] leading-10 lg:text-[64px] lg:leading-[72px] font-bold">{{ $t('n-hero-title') }}</h1>
        <h1 class="block lg:hidden text-[32px] leading-10 lg:text-[64px] lg:leading-[72px] font-bold">{{ $t('n-mob-hero-title1') }} <br> {{ $t('n-mob-hero-title2') }} <br> {{ $t('n-mob-hero-title3') }}</h1>
          <div class="inline-block m-auto mt-[30px] lg:mt-10">
            <a href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en&gl=" target="_blank" class="flex justify-center items-center gap-2.5 rounded-full bg-primary px-8 py-3 xl:py-4 cursor-pointer">
              <img src="~/assets/images/home/download-white.svg" alt="Download icon">
              <span class="text-base xl:text-xl font-medium text-white">{{ $t('n-download-app') }}</span>
            </a>
          </div>
      </div>
    </section>
</template>