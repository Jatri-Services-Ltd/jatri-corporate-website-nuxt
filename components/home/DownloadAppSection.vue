<script setup>

</script>

<template>
  <div class="custom-container mt-8">
    <div class="bg-[#F7F7F7] rounded-3xl">
      <div class="grid grid-cols-12 items-center">
        <div class="col-span-12 md:col-span-7 lg:col-span-8 order-2 md:order-1 px-4 lg:px-10 xl:px-[106px] py-5 md:py-0">
          <p class="uppercase text-body text-[16px] leading-6 font-medium mb-1">jatri Partner App</p>
          <h3 class="text-dark text-2xl lg:text-3xl leading-[24px] font-medium mb-4">Drive forward with Jatri</h3>
          <p class="text-[#4D4D4F] text-sm lg:text-[16px] leading-6 pr-0 lg:pr-20 xl:pr-36 2xl:pr-72">Add a new dimension to your car or microbus rental business by digitizing every trip. With exciting trip deals, flexible bookings and competitive pricing, you'll never go back to the old manual rental system again</p>
          <div class="mt-4 lg:mt-6 flex gap-4">
            <nuxt-link to="#" class="bg-[#EDEDED] h-[46px] w-[158px] flex justify-center items-center text-dark md:text-sm lg:text-[16px] leading-6 font-medium rounded-full">Download app</nuxt-link>
            <nuxt-link to="#" class="bg-[#EDEDED] h-[46px] w-[135px] flex justify-center items-center text-dark md:text-sm lg:text-[16px] leading-6 font-medium rounded-full">Learn more</nuxt-link>
          </div>
        </div>
        <div class="col-span-12 md:col-span-5 lg:col-span-4 order-1 md:order-2 place-self-auto md:place-self-end">
          <div class="jatri-partner-img">
            <img class="" src="~/assets/images/svg/partner-app.svg" alt="Jatri Partner App">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
}
.jatri-partner-img{
  min-height: 420px;
  min-width: 520px;
}
.jatri-partner-img img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 0 24px 24px 0;
}

@media(max-width:1439px){
  .jatri-partner-img{
    min-height: 360px !important;
    min-width: 460px !important;
  }
}
@media(max-width:1279px){
  .jatri-partner-img{
    min-height: 280px !important;
    min-width: 380px !important;
  }
}
@media(max-width:991px){
  .jatri-partner-img{
    min-height: 210px !important;
    min-width: 310px !important;
  }
}
@media(max-width:768px){
  .jatri-partner-img{
    min-height: 210px !important;
    min-width: 310px !important;
  }
}
@media(max-width:767px){
  .jatri-partner-img{
    height: 200px !important;
    max-width: 100% !important;
  }

  .jatri-partner-img img{
    border-radius: 24px 24px 0 0;
  }
}
@media(max-width:344px){
  /* .jatri-partner-img img{
    width: 93%;
  } */
}

</style>