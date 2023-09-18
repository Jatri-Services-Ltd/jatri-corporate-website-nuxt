<template>
  <footer>
    <div class="hidden md:block">
        <img src="~/assets/images/footer/footer-top-img.png" alt="Footer img" width="100%">
    </div>

    <div class="custom-container bg-[#f04935] pt-6 lg:pt-12 pb-6 lg:pb-8 divide-y divide-[#F6958A] space-y-6">

      <div class="flex justify-between">
        <div>
          <nuxt-link :to="localePath('/')" class="h-10 w-[81px]" >
            <img src="~/assets/images/footer/footer-white-logo.svg" alt="Jatri Logo">
          </nuxt-link>
          <p class="text-sm text-white mt-3">Jatri is a digital platform to make your daily commuting better.</p>
        </div>
        <div>
          <p class="text-base text-white font-medium mb-2">{{ $t('n-footer-download-app') }}</p>
          <a href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en&gl=" target="_blank">
            <img src="~/assets/images/footer/google-play-icon.png" alt="Google play badge">
          </a>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 lg:justify-between pt-6">
        <div>
          <h4 class="text-white text-xl font-medium mb-4 lg:mb-6">{{ $t('n-about-us') }}</h4>
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
          <h4 class="text-white text-xl font-medium mb-4 lg:mb-6">Services</h4>
          <ul class="grid gap-4">
            <li>
              <a class="text-white text-base">Rental</a>
            </li>
            <li>
              <a class="text-white text-base">Bus ticketing</a>
            </li>
            <li>
              <a class="text-white text-base">Launch ticketing</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white text-xl font-medium mb-4 lg:mb-6">{{ $t('n-footer-others') }}</h4>
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

        <div>
          <h4 class="text-white text-xl font-medium mb-4 lg:mb-6">Contacts</h4>
          <ul class="grid gap-4">
            <li class="flex items-center gap-2">
              <img class="w-4" src="~/assets/images/footer/question-white-icon.svg" alt="Question icon">
              <a class="text-white  font-normal text-base" href="mailto:support@jatri.co">support@jatri.co</a>
            </li>
            <li class="flex items-center gap-2">
              <img class="w-4" src="~/assets/images/footer/phone-white-icon.svg" alt="Question icon">
              <a class="text-white  font-normal text-base" href="tel:09642080808">{{ $t('n-footer-phone') }}</a>
            </li>
            <li class="flex items-center gap-2">
              <img class="w-4" src="~/assets/images/footer/map-white-icon.svg" alt="Map icon">
              <a class="text-white  font-normal text-base" href="https://goo.gl/maps/EBDpA4TyPkzsF4mH8" target="_blank" >{{ $t('n-footer-address') }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex justify-between items-center pt-6">
        <div class="flex justify-center lg:justify-start items-start md:items-center gap-2 md:gap-2.5">
          <img class="w-5" src="~/assets/images/footer/copyright-white-icon.svg" alt="">
          <p class="text-white text-sm font-medium">{{ $t('n-footer-copyright') }}</p>
        </div>

        <div class="flex gap-8">
          <nuxt-link :to="localePath('/user/term-and-condition')" class="text-white font-medium text-sm underline">{{ $t('n-footer-terms-conditions') }}</nuxt-link>
          <nuxt-link :to="localePath('/user/refund-policy-of-jatri')" class="text-white font-medium text-sm underline">{{ $t('n-footer-return-refund') }}</nuxt-link>
          <nuxt-link :to="localePath('/user/privacy-policy')" class="text-white font-medium text-sm underline">{{ $t('n-footer-privacy-policy') }}</nuxt-link>
        </div>

        <div class="flex items-center gap-9">
          <a class="w-8" href="https://www.facebook.com/JatriApp/" target="_blank"><img src="~/assets/images/footer/facebook-white.svg" alt="Facebook icon"></a>
          <a class="w-8" href="https://www.youtube.com/@jatriapp2325" target="_blank"><img src="~/assets/images/footer/youtube-white.svg" alt="Youtube icon"></a>
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