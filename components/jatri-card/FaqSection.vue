<script setup>

</script>

<template>
  <div class="custom-container pt-10 lg:pt-[100px] pb-10 lg:pb-[100px]">
      <div class="flex flex-col lg:flex-row justify-center">
        <div class="w-full lg:w-[40%]">
          <p class="text-[#676769] font-medium text-base lg:text-[20px] leading-6 lg:leading-7">{{ $t('card-faq-header') }}</p>
          <p class="mt-2 w-4/5 lg:w-2/3 text-black font-medium text-2xl lg:text-[32px] leading-8 lg:leading-12">{{ $t('card-faq-content') }}</p>
          <div class="flex gap-x-2 items-baseline">
            <p class="mt-4 text-[#4D4D4F] text-sm leading-5 font-normal">{{ $t('card-faq-sub-content') }}</p>
            <a href="/contact-us" class="text-xs block text-primary font-normal lg:font-medium underline flex">{{ $t('card-faq-contact') }}
              <img src="~/assets/images/common/right-arrow.svg" alt="right sided arrow">
            </a>
          </div>
        </div>
        <div class="w-full lg:w-[60%] mt-4 lg:mt-0">
          <div class="flex items-center justify-center">
            <div class="flex flex-col">
              <button class="group focus:outline-none border-b border-[#EDEDED] py-3 lg:py-6">
                <div class="flex  items-center justify-between">
                  <p class="faq-question">{{ $t('card-faq-question1') }}</p>
                  <img class="arrow" src="~/assets/images/common/down_arrow.svg" alt="down arrow">
                </div>
                <div class="h-0 overflow-hidden duration-300 group-focus:h-[80px] md:group-focus:h-[120px] xl:group-focus:h-[90px] transition-all ease-in-out delay-75">
                  <span class="faq-answer">{{ $t('card-faq-answer1') }}</span>
                </div>
              </button>
              <button class="group focus:outline-none border-b border-[#EDEDED] py-3 lg:py-6">
                <div class="flex items-center justify-between">
                  <p class="faq-question">{{ $t('card-faq-question2') }}</p>
                  <img class="arrow" src="~/assets/images/common/down_arrow.svg" alt="down arrow">
                </div>
                <div class="h-0 overflow-hidden duration-300 group-focus:h-[80px] md:group-focus:h-[120px] xl:group-focus:h-[90px]">
                  <span class="faq-answer">{{ $t('card-faq-answer2') }}</span>
                </div>
              </button>
              <button class="group focus:outline-none border-b border-[#EDEDED] py-3 lg:py-6">
                <div class="flex items-center justify-between">
                  <p class="text-base text-start lg:text-2xl font-medium leading-6 lg:leading-8 text-start">{{ $t('card-faq-question3') }}</p>
                  <img class="arrow" src="~/assets/images/common/down_arrow.svg" alt="down arrow">
                </div>
                <div class="h-0 overflow-hidden duration-300 group-focus:h-[60px]">
                  <span class="faq-answer">{{ $t('card-faq-answer3') }}</span>
                </div>
              </button>
              <button class="group focus:outline-none border-b border-[#EDEDED] py-3 lg:py-6">
                <div class="flex items-center justify-between">
                  <p class="faq-question">{{ $t('card-faq-question4') }}</p>
                  <img class="arrow" src="~/assets/images/common/down_arrow.svg" alt="down arrow">
                </div>
                <div class="h-0 overflow-hidden duration-300 group-focus:h-[60px]">
                  <span class="faq-answer">{{ $t('card-faq-answer4') }}</span>
                </div>
              </button>
              <button class="group focus:outline-none border-b border-[#EDEDED] py-3 lg:py-6">
                <div class="flex items-center justify-between">
                  <p class="faq-question">{{ $t('card-faq-question5') }}</p>
                  <img class="arrow" src="~/assets/images/common/down_arrow.svg" alt="down arrow">
                </div>
                <div class="h-0 overflow-hidden duration-300 group-focus:h-[60px]">
                  <span class="faq-answer">{{ $t('card-faq-answer5') }}</span>
                </div>
              </button>
              <button class="group focus:outline-none border-b border-[#EDEDED] py-3 lg:py-6">
                <div class="flex items-center justify-between">
                  <p class="faq-question">{{ $t('card-faq-question6') }}</p>
                  <img class="arrow" src="~/assets/images/common/down_arrow.svg" alt="down arrow">
                </div>
                <div class="h-0 overflow-hidden duration-300 group-focus:h-[60px]">
                  <span class="faq-answer">{{ $t('card-faq-answer6') }}</span>
                </div>
              </button>
              <button class="group focus:outline-none py-6">
                <div class="flex items-center justify-between">
                  <p class="faq-question">{{ $t('card-faq-question7') }}</p>
                  <img class="arrow" src="~/assets/images/common/down_arrow.svg" alt="down arrow">
                </div>
                <div class="h-0 overflow-hidden duration-300 group-focus:h-[80px] md:group-focus:h-[100px] xl:group-focus:h-[90px]">
                  <span class="faq-answer">{{ $t('card-faq-answer7') }}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>

</template>

<style scoped>
    .arrow{
      @apply h-4 w-4 group-focus:rotate-180 h-6 w-6 transition-all ease-in-out duration-300
    }
    .faq-question{
      @apply text-base lg:text-2xl text-black font-medium leading-6 lg:leading-8 text-start
    }
    .faq-answer{
      @apply flex items-center text-start text-[#4D4D4F] text-sm lg:text-[20px] h-full leading-4 lg:leading-7
    }
</style>