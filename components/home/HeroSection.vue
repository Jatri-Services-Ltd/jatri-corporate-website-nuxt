
<template>
    <!-- Hero Section -->
    <section class="relative custom-container mt-5">
      <img src="~/assets/images/home/hero-banner.png" alt="Hero bg img" class="w-full relative hidden sm:block">
      <img src="~/assets/images/home/hero-bg-mobile.svg" alt="Hero bg img" class="w-full rounded-[32px] relative sm:hidden">

      <div class="mobile-res-position w-full lg:max-w-[870px] px-8 text-center absolute top-12 sm:top-8 lg:top-[60px] xl:top-[88px] left-1/2 transform -translate-x-1/2">
        <h1 class="text-[32px] leading-10 md:text-[40px] md:leading-[50px] lg:text-[57px] lg:leading-[64px] xl:text-[64px] xl:leading-[88px] font-bold">{{ $t('n-hero-title') }}</h1>
        <!-- <h1 class="mobile-res-font block lg:hidden text-[30px] leading-10 font-bold">{{ $t('n-hero-title') }}</h1> -->
        <div class="mobile-res-margin inline-block m-auto mt-[30px] sm:mt-5 lg:mt-10">
          <a href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en&gl=" target="_blank" class="flex justify-center items-center gap-2.5 rounded-full bg-primary px-8 py-3 xl:py-4 cursor-pointer">
            <img src="~/assets/images/home/download-white.svg" alt="Download icon">
            <span class="text-base xl:text-xl font-medium text-white">{{ $t('n-download-app') }}</span>
          </a>
        </div>
      </div>
    </section>
</template>

<style scoped>
@media only screen and (max-width: 352px) {
  .mobile-res-position {
    @apply top-8
  }
  .mobile-res-font {
    @apply text-[26px]
  }
  .mobile-res-margin {
    @apply mt-4
  }
}
</style>