<script setup>

</script>

<template>
  <div class="custom-container pt-10 lg:pt-[100px]">
    <div class="flex justify-center items-center">
      <div class="flex flex-col lg:flex-row justify-center bg-white rounded-xl w-full" style="box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);">
        <div class="background">
          <div class="pt-10 lg:pt-[60px] px-3 lg:px-12">
              <p class="text-[28px] font-semibold leading-9 lg:text-[45px] lg:leading-[52px] text-white">It’s time to go
                <br>
                cashless</p>
            <p class="text-xs font-medium leading-4 mt-2 lg:mt-3 lg:text-[16px] lg:font-normal lg:leading-6 text-white">Commuting is more comfortable with Dmoney Jatri
              <br class="hidden lg:block"> card. Get your card to enjoy the hassle free ride.</p>
          </div>
        </div>
        <div class="w-full lg:w-[620px] xl:w-full">
          <div class="px-6 py-6 lg:py-[60px] lg:px-12">
            <p class="text-[24px] lg:text-[36px] font-medium lg:leading-12 text-black">Need help to get Card?</p>
            <p class="mt-4 text-xs lg:text-[20px] font-medium leading-4 lg:leading-7 text-[#676769]">Our customer service will reach you out and will help you step by step to get a card</p>

            <form>
              <div class="mt-5">
                <small class="text-black font-medium text-[16px] leading-6">Name</small>
                <input type="text" class="mt-[10px] w-full bg-[#F7F7F7] rounded-2 p-4 focus:outline-none placeholder:text-[#67676] placeholder:text-sm placeholder:font-normal" placeholder="Enter your name">
              </div>
              <div class="mt-5">
                <small class="text-black font-medium text-[16px] leading-6">Mobile number</small>
                <input type="text" class="mt-[10px] w-full bg-[#F7F7F7] rounded-2 p-4 focus:outline-none placeholder:text-[#67676] placeholder:text-sm placeholder:font-normal" placeholder="+880">
              </div>
              <div class="mt-5">
                <small class="text-black font-medium text-[16px] leading-6">City</small>
                <input type="text" class="mt-[10px] w-full bg-[#F7F7F7] rounded-2 p-4 focus:outline-none placeholder:text-[#67676] placeholder:text-sm placeholder:font-normal" placeholder="Enter your city">
              </div>
              <div class="mt-5">
                <div class="text-black font-medium text-[16px] leading-6 flex justify-between w-full"><span class="block">Profession</span>
                  <span class="block text-[#676769] text-xs">Optional</span>
                </div>
                <input type="text" class="mt-[10px] w-full bg-[#F7F7F7] rounded-2 p-4 focus:outline-none placeholder:text-[#67676] placeholder:text-sm placeholder:font-normal" placeholder="Profession">
              </div>
              <div class="flex justify-center lg:justify-end">
                <button type="submit" class="mt-8 flex gap-x-2 justify-center items-center bg-corporate w-full lg:w-[160px] py-3 text-white text-[16px] font-medium rounded-full">
                  <img src="~/assets/images/common/check.svg" alt="check icon">
                  Submit</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped>
    .background{
      @apply bg-[url('~~/assets/images/background/dmoney-mobile-card-bg.png')] lg:bg-[url('~~/assets/images/background/dmoney-card-bg.png')] bg-cover bg-no-repeat bg-left w-full h-[280px] lg:w-[620px] xl:w-full lg:h-[782px] rounded-t-xl lg:rounded-t-none lg:rounded-tl-xl lg:rounded-bl-xl
    }

</style>