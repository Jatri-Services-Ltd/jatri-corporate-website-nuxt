<template>
  <section class="relative">
    <div class="custom-container pt-[34px] pb-12 lg:py-20 xl:py-[120px] join-team-wrapper">
      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-6 bg-corporate rounded-none lg:rounded-[32px] lg:rounded-tr-none lg:rounded-br-none relative order-2 lg:order-1 mobile-top-margin">
          <div class="hidden lg:block">
            <div class="curve">
              <svg height="100%" viewBox="0 0 144 572" fill="none" preserveAspectRatio="xMinYMin" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 571.995C13.9853 561.628 27.2718 550.188 39.73 537.73C106.493 470.967 144 380.417 144 286C144 191.583 106.493 101.033 39.73 34.27C27.2718 21.8118 13.9853 10.3723 0 0.00514693V571.995Z" fill="#f04935"></path>
              </svg>
            </div>
          </div>
          <div class="block lg:hidden">
            <div class="curve-mobile">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="76.000000pt" viewBox="0 0 412.000000 76.000000" preserveAspectRatio="none">
                <metadata>
                  Created by potrace 1.16, written by Peter Selinger 2001-2019
                </metadata>
                <g transform="translate(0.000000,76.000000) scale(0.100000,-0.100000)" fill="#f04935" stroke="none">
                  <path d="M1842 744 c-527 -57 -1035 -220 -1477 -474 -162 -93 -365 -233 -365 -252 0 -17 99 -18 2060 -18 l2061 0 -3 131 -3 132 -80 45 c-416 233 -952 395 -1465 441 -156 15 -577 12 -728 -5z"/>
                </g>
              </svg>
            </div>
          </div>
          <div class="absolute right-[-106px] hidden lg:block">
            <img src="~/assets/images/home/yellow-ellipse.svg" alt="Jatri Career">
          </div>
          <div class="absolute top-[-58px] left-0 block lg:hidden">
            <img src="~/assets/images/home/small-device-yellow-curve.svg" alt="Jatri Career">
          </div>
          <div class="absolute bottom-0 left-0 hidden lg:block">
            <img class="rounded-bl-[32px]" src="~/assets/images/home/red-ellipse.svg" alt="Jatri Career">
          </div>
          <div class="absolute bottom-0 right-0 block lg:hidden">
            <img class="rounded-bl-[32px]" src="~/assets/images/home/small-device-bottom-ellipse.svg" alt="Jatri Career">
          </div>
          <div class="flex items-center justify-start sm:justify-center lg:justify-start text-white h-full mx-6 lg:mx-0 pl-0 lg:pl-10 xl:pl-20 pt-5 lg:pt-0 pb-14 lg:pb-0">
            <div class="relative md:py-5 lg:py-20">
              <h3 class="text-2xl md:text-[40px] xl:text-[45px] font-semibold leading-8 lg:leading-[52px] mb-4 lg:mb-6">{{ $t('n-join-team-title') }}</h3>
              <p class="text-sm lg:text-[16px] leading-5 lg:leading-6 font-medium">{{ $t('n-join-team-description-1') }}<br/> {{ $t('n-join-team-description-2') }}</p>
              <div class="mt-6 lg:mt-12">
                <router-link class="bg-white text-corporate text-sm lg:text-[16px] font-medium h-[40px] lg:h-[46px] w-[133px] lg:w-[145px] flex justify-center items-center rounded-full" :to="localePath('/career')">{{ $t('n-join-jatri') }}</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6 career-img order-1 lg:order-2">
          <img class="hidden lg:block rounded-[32px] rounded-tl-none rounded-bl-none" src="~/assets/images/home/career-banner.jpg" alt="Jatri Career">
          <img class="block lg:hidden" src="~/assets/images/home/career-banner.jpg" alt="Jatri Career">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
@media(max-width:1024px){

}

@media(max-width:1023px){
  .mobile-top-margin{
    margin-top: -50px;
  }
  .career-img{
    height: auto !important;
  }
  .join-team-wrapper{
    padding-top: 0 !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}
@media(max-width:675px){
  .mobile-top-margin{
    margin-top: -40px;
  }
}
@media(max-width:550px){
  .mobile-top-margin{
    margin-top: 10px;
  }
}
@media(max-width:411px){
  .mobile-top-margin{
    margin-top: 10px;
  }
  .curve-mobile{
    top: 22px;
  }
}
</style>