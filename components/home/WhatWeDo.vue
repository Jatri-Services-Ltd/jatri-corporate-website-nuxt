<script setup>

</script>
<template>
  <section class="bg-[url('~/assets/images/svg/what-we-do-bg.svg')] bg-no-repeat bg-cover py-10 md:py-14 xl:py-20">
    <div class="custom-container">
      <h2 class="text-white text-[28px] md:text-[50px] lg:text-[57px] leading-[36px] md:leading-[64px] font-medium lg:font-semibold mb-2 lg:mb-4">What we do</h2>
      <p class="text-white text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[28px] ml-0 md:ml-2">We will go the extra mile for you</p>
      <div class="mt-10 lg:mt-14 grid grid-cols-12 gap-4 md:gap-5 xl:gap-8 2xl:gap-10">
        <div class="col-span-6 lg:col-span-4 bg-white rounded-3xl">
          <div class="">
            <div class="bg-[#FEF2F0] flex justify-center pt-10 rounded-3xl rounded-b-none">
              <img src="~/assets/images/svg/card-car.svg" alt="Car Rental" class="h-[70px] md:h-[100px] xl:h-[155px]">
            </div>
            <div class="px-3 md:px-8 pt-6 xl:pt-10 pb-8">
              <h3 class="text-dark text-[16px] md:text-[26px] xl:text-[36px] font-medium leading-[24px] md:leading-[35px] xl:leading-[44px] mb-2 md:mb-4">Car rental</h3>
              <p class="text-dark text-[14px] md:text-[16px] xl:text-[20px]">Enjoy unbeatable prices with on-demand car rental service</p>
            </div>
          </div>
        </div>
        <div class="col-span-6 lg:col-span-4 bg-white rounded-3xl">
          <div class="">
            <div class="bg-[#FEF2F0] flex justify-center pt-10 rounded-3xl rounded-b-none">
              <img src="~/assets/images/svg/bus.svg" alt="Bus Ticketing" class="h-[70px] md:h-[100px] xl:h-[155px]">
            </div>
            <div class="px-3 md:px-8 pt-6 xl:pt-10 pb-8">
              <h3 class="text-dark text-[16px] md:text-[26px] xl:text-[36px] font-medium leading-[24px] md:leading-[35px] xl:leading-[44px] mb-2 md:mb-4">Online bus ticketing</h3>
              <p class="text-dark text-[14px] md:text-[16px] xl:text-[20px]">Book  bus tickets of your preferred destination conveniently</p>
            </div>
          </div>
        </div>
        <div class="col-span-6 lg:col-span-4 bg-white rounded-3xl">
          <div class="">
            <div class="bg-[#FEF2F0] flex justify-center pt-10 rounded-3xl rounded-b-none">
              <img src="~/assets/images/svg/ticketing.svg" alt="b2b ticketing" class="h-[70px] md:h-[100px] xl:h-[155px]">
            </div>
            <div class="px-3 md:px-8 pt-6 xl:pt-10 pb-8">
              <h3 class="text-dark text-[16px] md:text-[26px] xl:text-[36px] font-medium leading-[24px] md:leading-[35px] xl:leading-[44px] mb-2 md:mb-4">B2B ticketing solution</h3>
              <p class="text-dark text-[14px] md:text-[16px] xl:text-[20px]">We empower organizations to function seamlessly</p>
            </div>
          </div>
        </div>
        <div class="col-span-6 lg:col-span-12 bg-white rounded-3xl">
          <div class="h-full">
            <div class="flex flex-col lg:flex-row items-center justify-between h-full gap-4 px-3 md:px-8 xl:px-14 py-6 xl:py-10">
              <div>
                <h3 class="text-dark text-[16px] md:text-[26px] xl:text-[45px] font-medium lg:font-semibold leading-[24px] md:leading-[35px] xl:leading-[44px] xl:leading-[52px] mb-2 md:mb-3">We built a better way to travel</h3>
                <p class="text-[#8D8D8F] text-[14px] md:text-[16px] xl:text-[20px]">Our various services are designed to make the everyday commute of people hassle free</p>
              </div>
              <div class="">
                <router-link to="#" class="h-[36px] md:h-[50px] xl:h-[60px] w-[120px] md:w-[200px] xl:w-[230px] border border-dark rounded-full flex justify-center items-center gap-2">
                  <p class="text-dark text-[12px] md:text-[16px] xl:text-[20px] leading-[16px] md:leading-[28px] font-medium">About us</p>
                  <img src="~/assets/images/svg/right-arrow-1.svg" class="h-[14px] md:h-[24px]" alt="About Us">
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>