<script setup>

</script>
<template>
  <div class="relative">
    <div class="custom-container py-0 md:py-[120px] join-team-wrapper">
      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-6 bg-corporate rounded-none lg:rounded-[32px] lg:rounded-tr-none lg:rounded-br-none relative order-2 lg:order-1 -mt-[76px] md:-mt-[30px] lg:-mt-0">
          <div class="hidden lg:block">
            <div class="curve">
              <svg height="100%" viewBox="0 0 144 572" fill="none" preserveAspectRatio="xMinYMin" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 571.995C13.9853 561.628 27.2718 550.188 39.73 537.73C106.493 470.967 144 380.417 144 286C144 191.583 106.493 101.033 39.73 34.27C27.2718 21.8118 13.9853 10.3723 0 0.00514693V571.995Z" fill="#f04935"></path>
              </svg>
            </div>
          </div>
          <div class="block lg:hidden">

            <div class="curve-mobile">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="100%" height="" preserveAspectRatio="none" viewBox="0 0 1440 804">
                <g mask="url(&quot;#SvgjsMask1030&quot;)" fill="none">

                  <path d="M 0,748 C 144,703 432,531.8 720,523 C 1008,514.2 1296,667.8 1440,704L1440 804L0 804z" fill="#f04935"></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="absolute right-[-106px] hidden lg:block">
            <img src="~/assets/images/svg/yellow-ellipse.svg" alt="Jatri Career">
          </div>
          <div class="absolute top-[-58px] left-0 block lg:hidden">
            <img src="~/assets/images/svg/small-device-yellow-curve.svg" alt="Jatri Career">
          </div>
          <div class="absolute bottom-0 left-0 hidden lg:block">
            <img class="rounded-bl-[32px]" src="~/assets/images/svg/red-ellipse.svg" alt="Jatri Career">
          </div>
          <div class="absolute bottom-0 right-0 block lg:hidden">
            <img class="rounded-bl-[32px]" src="~/assets/images/svg/small-device-bottom-ellipse.svg" alt="Jatri Career">
          </div>
          <div class="flex items-center justify-center text-white h-full mx-6 lg:mx-0 pl-0 lg:pl-10 xl:pl-20 pt-5 lg:pt-0 pb-14 lg:pb-0">
            <div class="relative">
              <h3 class="text-2xl md:text-[40px] xl:text-[45px] font-semibold leading-8 lg:leading-[52px] mb-4 lg:mb-6">Join the winning team!</h3>
              <p class="text-sm lg:text-[16px] leading-5 lg:leading-6 font-medium">Join our exciting team in the quest of empowering Bangladesh to travel better!</p>
              <div class="mt-6 lg:mt-12">
                <router-link class="bg-white text-corporate text-sm lg:text-[16px] font-medium h-[40px] lg:h-[46px] w-[133px] lg:w-[145px] flex justify-center items-center rounded-full" to="#">Join Jatri</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6 career-img order-1 lg:order-2">
          <img class="hidden lg:block rounded-[32px] rounded-tl-none rounded-bl-none" src="~/assets/images/svg/career-banner.svg" alt="Jatri Career">
          <img class="block lg:hidden" src="~/assets/images/svg/career-banner.jpg" alt="Jatri Career">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
}
.career-img{
  height: 440px !important;
  width: auto;
}
.career-img img{
  height: 100% !important;
  width: 100%;
  object-fit: cover;
}
.curve{
  display: block;
  height: 100%;
  width: auto;
  position: absolute;
  right: 1px;
  top: 0;
  -webkit-transform: translateX(100%);
}
.curve-mobile{
  height: auto;
  width: 100%;
  position: absolute;
  right: 0;
  top: 1px;
  -webkit-transform: translateY(-99%);
}
@media(max-width:767px){
  .join-team-wrapper{
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}

</style>