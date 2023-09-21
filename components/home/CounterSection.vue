<template>
  <section class="custom-container relative -mt-14 sm:-mt-5 md:-mt-10 xl:-mt-[72px] mb-10 sm:mb-12 lg:mb-[100px]">
    <div class="bg-white shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] rounded-[20px] mx-4 sm:mx-10 lg:mx-12 xl:mx-[100px] px-3 sm:px-8 xl:px-14 py-3 md:py-6 xl:py-8 flex justify-between sm:items-center gap-2">
      <div class="flex justify-center lg:justify-start text-center lg:text-left items-start lg:items-center flex-wrap xl:flex-nowrap gap-3 xl:gap-6">
        <img src="~/assets/images/home/counter-user-icon.png" alt="User icon" class="w-10 sm:w-14 lg:w-16 xl:w-auto">
        <div>
          <h4 class="text-base sm:text-xl lg:text-2xl xl:text-4xl 2xl:text-3xl 3xl:text-4xl	font-bold text-dark">{{ $t('n-counter-item1-amount') }}</h4>
          <p class="mt-1.5 text-xs md:text-sm xl:text-base font-medium text-[#676769]">{{ $t('n-counter-item1-title') }}</p>
        </div>
      </div>

      <div class="flex justify-center lg:justify-start text-center lg:text-left items-start lg:items-center flex-wrap xl:flex-nowrap gap-3 xl:gap-6">
        <img src="~/assets/images/home/counter-ticket-icon.png" alt="Ticket icon" class="w-10 sm:w-14 lg:w-16 xl:w-auto">
        <div>
          <h4 class="text-xl lg:text-2xl xl:text-4xl 2xl:text-3xl 3xl:text-4xl	font-bold text-dark hidden sm:block">{{ $t('n-counter-item2-amount') }}</h4>
          <h4 class="text-base font-bold text-dark sm:hidden">{{ $t('n-counter-item2-amount-mobile') }}</h4>
          <p class="mt-1.5 text-xs md:text-sm xl:text-base font-medium text-[#676769]">{{ $t('n-counter-item2-title') }}</p>
        </div>
      </div>

      <div class="flex justify-center lg:justify-start text-center lg:text-left items-start lg:items-center flex-wrap xl:flex-nowrap gap-3 xl:gap-6">
        <img src="~/assets/images/home/counter-partner-icon.png" alt="Partner icon" class="w-10 sm:w-14 lg:w-16 xl:w-auto">
        <div>
          <h4 class="text-base sm:text-xl lg:text-2xl xl:text-4xl 2xl:text-3xl 3xl:text-4xl	font-bold text-dark">{{ $t('n-counter-item3-amount') }}</h4>
          <p class="mt-1.5 text-xs md:text-sm xl:text-base font-medium text-[#676769]">{{ $t('n-counter-item3-title') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media only screen and (min-width: 1280px) and (max-width: 1399px) {
  .custom-container {
    @apply p-8
  }
}
</style>