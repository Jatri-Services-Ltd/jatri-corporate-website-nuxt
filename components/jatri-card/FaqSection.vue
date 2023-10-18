<script setup>

</script>

<template>
  <div class="custom-container pt-10 lg:pt-[100px] pb-10 lg:pb-[100px]">
      <div class="flex flex-col lg:flex-row justify-center">
        <div class="w-full lg:w-[40%]">
          <p class="text-[#676769] font-medium text-base lg:text-[20px] leading-6 lg:leading-7">FAQs</p>
          <p class="mt-2 text-black font-medium text-2xl lg:text-[32px] leading-8 lg:leading-12">Have a question? We have
            <br class="hidden xl:block">
            the answers.</p>
          <div class="flex gap-x-2 items-baseline">
            <p class="mt-4 text-[#4D4D4F] text-sm leading-5 font-normal">Still need help?</p>
            <a href="/contact-us" class="text-xs block text-primary font-normal lg:font-medium underline flex">Contact us
              <img src="~/assets/images/common/right-arrow.svg" alt="right sided arrow">
            </a>
          </div>
        </div>
        <div class="w-full lg:w-[60%]">
          <div class="flex items-center justify-center">
            <div class="flex flex-col">
              <button class="group focus:outline-none border-b border-[#EDEDED] py-3 lg:py-6">
                <div class="flex  items-center justify-between">
                  <p class="faq-question">How can I get Dmoney Jatri card?</p>
                  <img class="arrow" src="~/assets/images/common/down_arrow.svg" alt="down arrow">
                </div>
                <div class="h-0 overflow-hidden duration-300 group-focus:h-[120px] lg:group-focus:h-[60px] transition-all ease-in-out delay-75">
                  <span class="faq-answer">For getting card firstly, have to have a verified Dmoney wallet. And you can get through Dmoney & Jatri. You can apply through app or activation booth/bus Counter.</span>
                </div>
              </button>
              <button class="group focus:outline-none border-b border-[#EDEDED] py-3 lg:py-6">
                <div class="flex items-center justify-between">
                  <p class="faq-question">How can I recharge my card?</p>
                  <img class="arrow" src="~/assets/images/common/down_arrow.svg" alt="down arrow">
                </div>
                <div class="h-0 overflow-hidden duration-300 group-focus:h-[120px] lg:group-focus:h-[70px]">
                  <span class="faq-answer">You can recharge from your bank account/debit or credit card. Add money from bank is totally free and for VISA and Mastercard the gateway charge is 2.1% and for Amex card the gateway charge is 3.7%</span>
                </div>
              </button>
              <button class="group focus:outline-none border-b border-[#EDEDED] py-3 lg:py-6">
                <div class="flex items-center justify-between">
                  <p class="text-base text-start lg:text-2xl font-medium leading-6 lg:leading-8 text-start">Is there any option to get multiple tickets through card
                    <br class="hidden xl:block"> payment?</p>
                  <img class="arrow" src="~/assets/images/common/down_arrow.svg" alt="down arrow">
                </div>
                <div class="h-0 overflow-hidden duration-300 group-focus:h-[60px]">
                  <span class="faq-answer">No! Passengers have to collect tickets one by one.</span>
                </div>
              </button>
              <button class="group focus:outline-none border-b border-[#EDEDED] py-3 lg:py-6">
                <div class="flex items-center justify-between">
                  <p class="faq-question">How can I check my card balance ?</p>
                  <img class="arrow" src="~/assets/images/common/down_arrow.svg" alt="down arrow">
                </div>
                <div class="h-0 overflow-hidden duration-300 group-focus:h-[60px]">
                  <span class="faq-answer">Through Dmoney app.</span>
                </div>
              </button>
              <button class="group focus:outline-none border-b border-[#EDEDED] py-3 lg:py-6">
                <div class="flex items-center justify-between">
                  <p class="faq-question">How can I apply for a card?</p>
                  <img class="arrow" src="~/assets/images/common/down_arrow.svg" alt="down arrow">
                </div>
                <div class="h-0 overflow-hidden duration-300 group-focus:h-[60px]">
                  <span class="faq-answer">You can apply through app or activation booth/bus counter.</span>
                </div>
              </button>
              <button class="group focus:outline-none border-b border-[#EDEDED] py-3 lg:py-6">
                <div class="flex items-center justify-between">
                  <p class="faq-question">What about card expiry date?</p>
                  <img class="arrow" src="~/assets/images/common/down_arrow.svg" alt="down arrow">
                </div>
                <div class="h-0 overflow-hidden duration-300 group-focus:h-[60px]">
                  <span class="faq-answer">Validity date will be printed on the card.</span>
                </div>
              </button>
              <button class="group focus:outline-none py-6">
                <div class="flex items-center justify-between">
                  <p class="faq-question">Where to use the Card & accessibility of card?</p>
                  <img class="arrow" src="~/assets/images/common/down_arrow.svg" alt="down arrow">
                </div>
                <div class="h-0 overflow-hidden duration-300 group-focus:h-[60px]">
                  <span class="faq-answer">Card is useable at all the UnionPay enabled ATM booth, POS machine as well as the Jatri ticket purchase agents across the nation.</span>
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
      @apply flex items-center text-start text-[#4D4D4F] text-sm lg:text-[20px] h-full
    }
</style>