<template>
  <footer>
    <div class="hidden md:block">
      <img src="~/assets/images/footer/footer-top-img.png" alt="Footer img" width="100%">
    </div>

    <div class="w-full mx-auto lg:px-[60px] xl:px-[100px] 2xl:px-[200px] bg-[#f04935] pt-6 lg:pt-12 pb-6 lg:pb-8 divide-y divide-[#F6958A] space-y-6">

      <div class="px-4 lg:px-0 flex flex-wrap gap-4 justify-between">
        <div>
          <nuxt-link :to="localePath('/')">
            <img src="~/assets/images/footer/footer-white-logo.svg" alt="Jatri Logo">
          </nuxt-link>
          <p class="text-sm font-normal text-white mt-3">{{ $t('n-footer-tagline') }}</p>
        </div>
        <div class="mt-4 md:mt-0">
          <p class="text-white text-base font-medium mb-2">{{ $t('n-footer-download-app') }}</p>
          <a href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en&gl=" target="_blank">
            <img src="~/assets/images/footer/google-play-icon.png" alt="Google play icon">
          </a>
        </div>
      </div>

      <div class="px-4 lg:px-0 grid grid-cols-2 lg:grid-cols-4 lg:justify-between gap-4 pt-6">
        <div>
          <h4 class="text-white text-xl font-medium mb-6">{{ $t('n-about-us') }}</h4>
          <ul class="grid gap-4">
            <li>
              <nuxt-link :to="localePath('/about-us')" class="text-white font-normal text-base">{{ $t('n-about-us') }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/career')" class="text-white font-normal text-base">{{ $t('n-footer-career') }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/blog')" class="text-white font-normal text-base">{{ $t('n-footer-blog') }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/contact-us')" class="text-white font-normal text-base">{{ $t('n-contact-us') }}</nuxt-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white text-xl font-medium mb-6">{{ $t('n-footer-services') }}</h4>
          <ul class="grid gap-4">
            <li>
              <a href="https://rental.jatri.co/" target="_blank" class="text-white text-base">{{ $t('n-footer-rental') }}</a>
            </li>
            <li>
              <a href="https://ticket.jatri.co/bus" target="_blank" class="text-white text-base">{{ $t('n-footer-bus-ticketing') }}</a>
            </li>
            <li>
              <a href="https://ticket.jatri.co/launch" target="_blank" class="text-white text-base">{{ $t('n-footer-launch-ticketing') }}</a>
            </li>
          </ul>
        </div>

        <div class="mt-2 lg:mt-0">
          <h4 class="text-white text-xl font-medium mb-6">{{ $t('n-footer-others') }}</h4>
          <ul class="grid gap-4">
            <li>
              <nuxt-link :to="localePath('/ride-sharing-guideline')" class="text-white font-normal text-base">{{ $t('n-footer-others-1') }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/enlistment-certificate')" class="text-white font-normal text-base">{{ $t('n-footer-others-2') }}</nuxt-link>
            </li>
            <li>
              <a href="https://corona.gov.bd/" target="_blank" class="text-white font-normal text-base">{{ $t('n-footer-others-3') }}</a>
            </li>
          </ul>
        </div>

        <div class="mt-2 lg:mt-0">
          <h4 class="text-white text-xl font-medium mb-6">Contacts</h4>
          <ul class="grid gap-4">
            <li class="flex items-center gap-2">
              <img class="w-4" src="~/assets/images/footer/question-white-icon.svg" alt="Question icon">
              <a class="text-white font-normal text-base" href="mailto:support@jatri.co">support@jatri.co</a>
            </li>
            <li class="flex items-center gap-2">
              <img class="w-4" src="~/assets/images/footer/phone-white-icon.svg" alt="Question icon">
              <a class="text-white font-normal text-base" href="tel:09642080808">{{ $t('n-footer-phone') }}</a>
            </li>
            <li class="flex items-center gap-2">
              <img class="w-4" src="~/assets/images/footer/map-white-icon.svg" alt="Map icon">
              <a class="text-white font-normal text-base" href="https://goo.gl/maps/EBDpA4TyPkzsF4mH8" target="_blank" >{{ $t('n-footer-address') }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center lg:justify-between lg:items-center gap-2 pt-6">
        <div class="px-4 lg:px-0 pt-4 lg:pt-0 flex justify-center gap-2.5 order-1 lg:order-none">
          <img class="w-5" src="~/assets/images/footer/copyright-white-icon.svg" alt="">
          <p class="text-white text-sm font-medium">{{ $t('n-footer-copyright') }}</p>
        </div>

        <div class="px-4 lg:px-0 pb-4 lg:pb-0 flex justify-center gap-3 xl:gap-8 divide-x divide-[#F6958A] lg:divide-x-0">
          <nuxt-link :to="localePath('/user/term-and-condition')" class="text-white font-medium text-sm underline text-center">{{ $t('n-footer-terms-conditions') }}</nuxt-link>
          <nuxt-link :to="localePath('/user/refund-policy-of-jatri')" class="text-white font-medium text-sm underline text-center pl-4 lg:pl-0">{{ $t('n-footer-return-refund') }}</nuxt-link>
          <nuxt-link :to="localePath('/user/privacy-policy')" class="text-white font-medium text-sm underline text-center pl-4 lg:pl-0">{{ $t('n-footer-privacy-policy') }}</nuxt-link>
        </div>

        <div class="px-4 lg:px-0 flex justify-center lg:justify-end items-center gap-9 lg:gap-3 xl:gap-9 border-y border-[#F6958A] lg:border-y-0 py-4 lg:py-0 w-full">
          <a class="w-8" href="https://www.facebook.com/JatriApp/" target="_blank"><img src="~/assets/images/footer/facebook-white.svg" alt="Facebook icon"></a>
          <a class="w-8" href="https://www.youtube.com/@JATRIAPP" target="_blank"><img src="~/assets/images/footer/youtube-white.svg" alt="Youtube icon"></a>
          <a class="w-8" href="https://ca.linkedin.com/company/jatri-app" target="_blank"><img src="~/assets/images/footer/linkedin-white.svg" alt="Linkedin icon"></a>
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
}
</style>