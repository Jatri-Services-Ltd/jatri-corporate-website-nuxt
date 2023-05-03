<script setup>

</script>

<template>
  <section class="custom-container">
    <div class="bg-[#F7F7F7] rounded-3xl">
      <div class="flex flex-wrap flex-row-reverse md:flex-row w-full justify-between items-stretch">
        <div class="self-center w-full md:w-[60%] px-5 lg:px-14 xl:px-[106px] pt-6 pb-5 lg:py-10 xl:py-20 order-2 md:order-1">
          <p class="uppercase text-body text-[16px] leading-6 font-medium">{{ $t('n-download-partner-app') }}</p>
          <h3 class="text-dark text-2xl lg:text-3xl leading-[24px] font-medium mt-2 mb-4">{{ $t('n-download-app-title') }}</h3>
          <p class="text-secondaryDark text-sm lg:text-[16px] leading-6">{{ $t('n-download-app-description') }}</p>
          <div class="mt-4 lg:mt-6 2xl:mt-12 flex gap-4 lg:gap-6">
            <a href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en&gl=US" target="_blank" class="bg-[#EDEDED] h-[46px] w-[158px] flex justify-center items-center text-dark md:text-sm lg:text-[16px] leading-6 font-medium rounded-full">{{ $t('n-download-app') }}</a>
            <a target="_blank" href="https://rental.jatri.co/drive-with-jatri" class="bg-[#EDEDED] h-[46px] w-[135px] flex justify-center items-center text-dark md:text-sm lg:text-[16px] leading-6 font-medium rounded-full">{{ $t('n-learn-more') }}</a>
          </div>
        </div>
        <div class="w-full md:w-[40%] order-1 md:order-2">
          <img class="h-[200px] sm:h-80 md:h-full w-full object-cover rounded-3xl rounded-tl-3xl md:rounded-tl-none rounded-bl-none rounded-tr-3xl rounded-br-none md:rounded-br-3xl" src="~/assets/images/svg/partner-app.svg" alt="Jatri Partner App">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
}
</style>