
<template>
  <section class="custom-container">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        <div class="row-span-3 md:col-span-2 lg:col-span-1 w-full bg-grey rounded-3xl pt-14 px-14 overflow-hidden h-[480px] lg:h-[754px] xl:h-[824px]">
          <img src="~/assets/images/home/screen1.png" alt="screen img" class="screen-move block m-auto">
          <img src="~/assets/images/home/screen2.png" alt="screen img" class="screen-move block m-auto">
          <img src="~/assets/images/home/screen3.png" alt="screen img" class="screen-move block m-auto">
          <img src="~/assets/images/home/screen4.png" alt="screen img" class="screen-move block m-auto">
          <img src="~/assets/images/home/screen5.png" alt="screen img" class="screen-move block m-auto">
          <img src="~/assets/images/home/screen6.png" alt="screen img" class="screen-move block m-auto">
        </div>

        <div class="lg:row-span-2 bg-grey rounded-3xl px-6 md:px-8 xl:px-4 grid grid-cols-2 md:grid-cols-1 sm:justify-center items-center gap-4 sm:gap-8 md:gap-0">
          <div class="md:pt-11 md:pb-1">
            <img src="~/assets/images/home/green-user.svg" alt="screen img" class="w-7 sm:w-auto block md:m-auto">
            <p class="mt-[18px] text-dark text-base sm:text-2xl font-medium md:text-center">{{ $t('n-screen-scrolling-heading1') }}</p>
          </div>

          <div class="flex justify-end md:justify-center self-end">
            <img src="~/assets/images/home/bidding-ongoing1.png" alt="Bidding Ongoing Img" class="pt-7">
          </div>
        </div>

        <div class="relative lg:row-span-2 bg-grey rounded-3xl px-6 md:px-8 xl:px-4 grid grid-cols-2 md:grid-cols-1 sm:justify-center items-center gap-4 sm:gap-8 md:gap-0">
          <div class="md:pt-11 md:pb-1">
            <img src="~/assets/images/home/security-blue.svg" alt="screen img" class="w-7 sm:w-auto block md:m-auto">
            <p class="mt-[18px] text-dark text-base sm:text-2xl font-medium md:text-center">{{ $t('n-screen-scrolling-heading2') }}</p>
          </div>

          <div class="flex justify-end md:justify-center self-end">
            <img src="~/assets/images/home/safety-share-img.png" alt="Safety Share Img" class="pt-7">
          </div>
        </div>

        <div class="md:col-span-2 bg-grey rounded-3xl p-6 lg:p-12 overflow-hidden">
          <p class="text-base sm:text-xl lg:text-2xl text-[#8D8D8F]">{{ $t('n-screen-scrolling-subheading') }}</p>
          <h3 class="custom-heading text-dark text-[28px] leading-9 sm:text-5xl lg:text-4xl xl:text-[40px] font-semibold mt-2 mb-6">{{ $t('n-screen-scrolling-heading3') }}</h3>
          <div class="flex gap-2 sm:gap-6">
            <a href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en&gl=US" target="_blank" class="small-device-btn flex justify-center items-center gap-1.5 sm:gap-2.5 rounded-full bg-success border border-success pr-6 sm:pr-8 pl-5 sm:pl-[26px] py-3.5 cursor-pointer">
              <img src="~/assets/images/home/google-play-icon-white.svg" alt="Google play icon">
              <span class="text-sm lg:text-base font-medium text-white">{{ $t('n-play-store') }}</span>
            </a>
            <a class="small-device-btn flex justify-center items-center gap-1.5 sm:gap-2.5 rounded-full bg-transparent border border-[#8D8D8F] pr-6 sm:pr-8 pl-5 sm:pl-[26px] py-3.5 cursor-pointer">
              <img src="~/assets/images/home/apple-gray-icon.svg" alt="Apple play icon">
              <span class="text-sm lg:text-base font-medium text-[#8D8D8F]">{{ $t('n-coming-soon') }}</span>
            </a>
          </div>
        </div>
      </div>
  </section>
</template>

<style scoped>
.screen-move {
  animation: screenMove 25s linear infinite 1s;
  will-change: transform;
}

@media only screen and (min-width: 1440px) {
  .custom-heading {
    font-size: 57px;
    line-height: 64px;
  }
}

@keyframes screenMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-3500px);
  }
}

@media only screen and (max-width: 375px) {
  .small-device-btn {
    @apply px-4
  }
  .small-device-btn span {
    @apply text-xs
  }
}

@media only screen and (max-width: 1279px) {
  @keyframes screenMove {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-1300px);
    }
  }
}
</style>