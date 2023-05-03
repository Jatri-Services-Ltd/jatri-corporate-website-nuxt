<template>
    <footer>
      <div class="hidden md:block bg-primary pt-12">
          <img src="~/assets/images/svg/footer-top-img.svg" alt="Footer img" width="100%">
      </div>

      <div class="custom-container bg-primary pt-6 lg:pt-12 pb-6 lg:pb-8">
        <div class="grid lg:grid-cols-4 lg:justify-between">
          <div class="lg:col-span-1 row-span-1 border-b border-[#F6958A] lg:border-0 pb-6 lg:pb-0 mb-6 lg:mb-0">
            <div class="flex justify-between items-center lg:block">
              <img src="~/assets/images/svg/footer-white-logo.svg" alt="Jatri Logo">
              <div class="flex items-center gap-10 xl:gap-14 lg:mt-8">
                <a href="https://www.facebook.com/JatriApp/" target="_blank"><img src="~/assets/images/svg/facebook-white.svg" alt="Facebook icon"></a>
                <a href="https://www.youtube.com/@jatriapp2325" target="_blank"><img src="~/assets/images/svg/youtube-white.svg" alt="Youtube icon"></a>
                <a href="https://ca.linkedin.com/company/jatri-app" target="_blank"><img src="~/assets/images/svg/linkedin-white.svg" alt="Linkedin icon"></a>
              </div>
            </div>

            <div class="mt-6 md:mt-8">
              <p class="text-base text-white font-medium mb-4">{{ $t('n-footer-download-app') }}</p>
              <a href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en&gl=US" target="_blank">
                <img src="~/assets/images/svg/google-play-badge.svg" alt="Google play badge">
              </a>
            </div>
          </div>

          <div class="lg:col-span-3 row-span-2">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-0 pb-6">
              <div class="lg:px-12 lg:border-x border-x-[#F6958A]">
                <h4 class="text-white text-xl lg:text-2xl font-medium mb-4 lg:mb-6">{{ $t('n-footer-products-title') }}</h4>
                <ul class="grid gap-4">
                  <li>
                    <a class="text-white font-normal text-base" href="#">{{ $t('n-footer-products-1') }}</a>
                  </li>
                  <li>
                    <a href="https://rental.jatri.co/"
                       target="_blank"
                       class="text-white font-normal text-base">
                      {{ $t('n-footer-products-2') }}
                    </a>
                  </li>
                  <li>
                    <a class="text-white font-normal text-base" href="https://ticket.jatri.co/" target="_blank">{{ $t('n-footer-products-3') }}</a>
                  </li>
                </ul>
              </div>

              <div class="lg:px-12 row-span-2 lg:row-span-1">
                <h4 class="text-white text-xl lg:text-2xl font-medium mb-4 lg:mb-6 capitalize">{{ $t('n-about-us') }}</h4>
                <ul class="grid gap-4">
                  <li>
                    <nuxt-link :to="localePath('/about-us')" class="text-white font-normal text-base capitalize">{{ $t('n-about-us') }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/career')" class="text-white font-normal text-base">{{ $t('n-footer-career') }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/blog')" class="text-white font-normal text-base">{{ $t('n-footer-blog') }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/contact-us')" class="text-white font-normal text-base capitalize">{{ $t('n-contact-us') }}</nuxt-link>
                  </li>
                </ul>
              </div>

              <div class="mt-2 lg:mt-0 lg:px-12 lg:border-x border-x-[#F6958A]">
                <h4 class="text-white text-xl lg:text-2xl font-medium mb-4 lg:mb-6">{{ $t('n-footer-others') }}</h4>
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
            </div>

            <div class="py-0 lg:py-6 border-t border-[#F6958A] grid grid-cols-1 lg:grid-cols-3 divide-y divide-[#F6958A] lg:divide-y-0 lg:divide-x">
              <div class="py-4 flex items-center gap-3.5 pl-0 lg:pl-5 xl:pl-12">
                <img src="~/assets/images/svg/question-white-icon.svg" alt="Question icon">
                <a class="text-white font-medium text-base" href="mailto:support@jatri.co">support@jatri.co</a>
              </div>
              <div class="py-4 flex lg:justify-center items-center gap-3.5">
                <img src="~/assets/images/svg/phone-white-icon.svg" alt="Question icon">
                <a class="text-white font-medium text-base" href="tel:09642080808">{{ $t('n-footer-phone') }}</a>
              </div>
              <div class="py-4 flex items-center gap-3.5 pl-0 lg:pl-5 pr-0 lg:pr-5 xl:pr-12">
                <img src="~/assets/images/svg/map-white-icon.svg" alt="Map icon">
                <a class="text-white font-medium text-base" href="https://goo.gl/maps/EBDpA4TyPkzsF4mH8" target="_blank" >{{ $t('n-footer-address') }}</a>
              </div>
            </div>
          </div>

        </div>

        <div class="border-t border-[#F6958A] grid lg:grid-cols-2">
          <div class="pt-6 order-2 lg:order-1 flex justify-center lg:justify-start items-center gap-2.5">
            <img src="~/assets/images/svg/copyright-white-icon.svg" alt="">
            <p class="text-white text-base font-medium">{{ $t('n-footer-copyright1') }} @{{ $t('n-footer-copyright2') }}</p>
          </div>

          <div class="order-1 lg:order-2 place-self-initial lg:place-self-end border-b border-b-[#F6958A] lg:border-b-0 py-6 lg:pb-0 grid grid-cols-3 lg:flex items-center lg:gap-8 text-center lg:text-right">
            <nuxt-link :to="localePath('/user/term-and-condition')" class="text-white font-medium text-sm underline">{{ $t('n-footer-terms-conditions') }}</nuxt-link>
            <nuxt-link :to="localePath('/user/refund-policy-of-jatri')" class="text-white font-medium text-sm underline border-x border-[#F6958A] lg:border-x-0 px-4 sm:px-8 lg:px-0">{{ $t('n-footer-return-refund') }}</nuxt-link>
            <nuxt-link :to="localePath('/user/privacy-policy')" class="text-white font-medium text-sm underline">{{ $t('n-footer-privacy-policy') }}</nuxt-link>
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