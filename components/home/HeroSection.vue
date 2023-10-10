
<template>
    <!-- Hero Section -->
    <section class="relative custom-container mt-5">
      <img src="~/assets/images/home/hero-banner.png" alt="Hero bg img" class="w-full relative rounded-[20px] hidden sm:block">
      <img src="~/assets/images/home/hero-banner-mobile.png" alt="Hero bg img" class="w-full rounded-2xl relative sm:hidden">

      <div class="mobile-res-position w-full lg:max-w-[900px] px-8 sm:px-20 md:px-16 lg:px-8 text-center absolute top-12 sm:top-8 lg:top-[60px] xl:top-[88px] left-1/2 transform -translate-x-1/2">
        <h1 class="text-[32px] sm:leading-10 md:text-[40px] md:leading-[54px] lg:text-[48px] lg:leading-[64px] xl:text-[64px] xl:leading-[88px] font-bold">
          {{ $t('n-hero-title1') }} <br> {{ $t('n-hero-title2') }}
        </h1>
        <div class="mobile-res-margin inline-block m-auto mt-8 sm:mt-5 lg:mt-10">
          <a href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en&gl=" target="_blank" class="flex justify-center items-center gap-2 rounded-full bg-primary pl-6 pr-8 py-[11px] xl:py-4 cursor-pointer">
            <img class="w-5 lg:w-auto" src="~/assets/images/home/download-white.svg" alt="Download icon">
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