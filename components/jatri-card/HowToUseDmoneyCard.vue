<template>
    <section class="bg-[#FEF2F0] pt-10 md:pt-16 xl:pt-[100px]">
        <div class="custom-container">
          <div class="max-w-[1440px] flex flex-col lg:flex-row gap-0 lg:gap-16 xl:gap-20">
            <div class="flex-grow lg:max-w-[520px] xl:max-w-[640px] pb-10 lg:pb-5 order-2 lg:order-1">
              <div class="hidden lg:block">
                <p class="text-[#676769] text-base lg:text-xl font-medium mb-4 lg:mb-2 xl:mb-4">HOW TO USE DMONEY JATRI CARD</p>
                <h2 class="content-title">Make your&nbsp;</h2>
                <h2 class="content-title">everyday commute&nbsp;</h2>
                <h2 class="content-title">hassle free</h2>
              </div>
              <div class="mt-8 lg:mt-6 xl:mt-20 space-y-8 xl:space-y-14">
                <div>
                  <p class="text-corporate content-sub-title">01. Open account and apply for card</p>
                  <p class="text-dark content-detail">Install <span class="font-medium">“Dmoney App”</span> --> verify number --> complete eKYC with your NID --> apply for <span class="font-medium">“Get Dmoney Jatri Card”</span> --> collect your
card at doorstep --> Remember the <span class="font-medium">PIN.</span></p>
                </div>
                <div>
                  <p class="text-[#808080] content-sub-title">02. Recharge your card</p>
                  <p class="text-[#808080] content-detail">Go to Dmoney app tap on <span class="font-medium">“Add money”</span> --> select card --> enter minimum <span class="font-medium">10BDT</span> amount and necessary info tap <span class="font-medium">“Submit”</span> --> You are ready to use your Dmoney <span class="font-medium">Jatri Card!</span></p>
                </div>
                <div>
                  <p class="text-[#808080] content-sub-title">03. Use card to buy tickets and more</p>
                  <p class="text-[#808080] content-detail"><span class="font-medium">“Carry”</span>our Dmoney Jatri card with you --> use Dmoney Jatri card to buy your day to day bus tickets in <span class="font-medium">seconds</span> with one tap --> you can also use the card for other payments and cash withdrawal.</p>
                </div>
              </div>
            </div>
            <div class="flex-grow flex flex-col lg:flex-row justify-start lg:justify-end order-1 lg:order-2">
              <div class="block lg:hidden">
                <p class="text-[#676769] text-base lg:text-xl font-medium mb-2 xl:mb-4">HOW TO USE DMONEY JATRI CARD</p>
                <h2 class="content-title">Make your&nbsp;</h2>
                <h2 class="content-title">everyday commute&nbsp;</h2>
                <h2 class="content-title">hassle free</h2>
              </div>
              <div>
                <div class="max-h-[674px] max-w-[300px] md:max-w-[350px] lg:max-w-[520px] mb-0 lg:mb-[65px] xl:mb-10 mx-auto mt-10 lg:mt-0"><img class="h-full w-full object-cover" src="~/assets/images/jatri-card/1.png" alt=""></div>
                <div class="max-h-[674px] max-w-[520px] mx-auto hidden lg:block"><img class="h-full w-full object-cover" src="~/assets/images/jatri-card/2.png" alt=""></div>
              </div>
            </div>
          </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.content-title{
  @apply text-dark text-[28px] lg:text-[45px] xl:text-[57px] leading-9 lg:leading-[54px] xl:leading-[64px] font-semibold
}
.content-sub-title{
  @apply text-xl md:text-2xl xl:text-4xl xl:leading-[44px] font-medium mb-2 xl:mb-5 
}
.content-detail{
  @apply text-base xl:text-xl
}
</style>