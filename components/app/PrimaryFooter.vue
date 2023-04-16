<template>
    <footer class="mt-10">
      <div class="hidden md:block">
        <a href="#">
          <img src="~/assets/images/svg/footer-img.svg" alt="Footer img" width="100%">
        </a>
      </div>

      <div class="custom-container bg-primary pt-6 lg:pt-12 pb-6 lg:pb-8">
        <div class="grid lg:grid-cols-4 lg:justify-between">
          <div class="lg:col-span-1 row-span-1 border-b border-[#F6958A] lg:border-0 pb-6 lg:pb-0 mb-6 lg:mb-0">
            <div class="flex justify-between items-center lg:block">
              <img src="~/assets/images/svg/footer-white-logo.svg" alt="Jatri Logo">
              <div class="flex items-center gap-10 xl:gap-14 lg:mt-8">
                <img src="~/assets/images/svg/facebook-white.svg" alt="Facebook icon">
                <img src="~/assets/images/svg/youtube-white.svg" alt="Youtube icon">
                <img src="~/assets/images/svg/linkedin-white.svg" alt="Linkedin icon">
              </div>
            </div>

            <div class="mt-8">
              <p class="text-base text-white font-medium mb-4">Download our app</p>
              <img src="~/assets/images/svg/google-play-badge.svg" alt="Google play badge">
            </div>
          </div>

          <div class="lg:col-span-3 row-span-2">
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0 pb-6">
              <div class="lg:px-12 lg:border-x border-x-[#F6958A]">
                <h4 class="text-white text-xl lg:text-2xl font-medium mb-4 lg:mb-6">Products</h4>
                <ul class="grid gap-4">
                  <li>
                    <a class="text-white font-normal text-base" href="#">Jatri Business</a>
                  </li>
                  <li>
                    <a class="text-white font-normal text-base" href="#">Jatri Rentals</a>
                  </li>
                  <li>
                    <a class="text-white font-normal text-base" href="#">Jatri Ticket</a>
                  </li>
                </ul>
              </div>

              <div class="lg:px-12 row-span-2 lg:row-span-1">
                <h4 class="text-white text-xl lg:text-2xl font-medium mb-4 lg:mb-6">About us</h4>
                <ul class="grid gap-4">
                  <li>
                    <a class="text-white font-normal text-base" href="#">About us</a>
                  </li>
                  <li>
                    <a class="text-white font-normal text-base" href="#">Career</a>
                  </li>
                  <li>
                    <a class="text-white font-normal text-base" href="#">Blogs</a>
                  </li>
                  <li>
                    <a class="text-white font-normal text-base" href="#">Contact us</a>
                  </li>
                </ul>
              </div>

              <div class="mt-2 lg:mt-0 lg:px-12 lg:border-x border-x-[#F6958A]">
                <h4 class="text-white text-xl lg:text-2xl font-medium mb-4 lg:mb-6">Others</h4>
                <ul class="grid gap-4">
                  <li>
                    <a class="text-white font-normal text-base" href="#">Ride sharing guideline</a>
                  </li>
                  <li>
                    <a class="text-white font-normal text-base" href="#">Enlistment certificate</a>
                  </li>
                  <li>
                    <a class="text-white font-normal text-base" href="#">COVID-19 info</a>
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
                <a class="text-white font-medium text-base" href="tel:09642080808">09642080808</a>
              </div>
              <div class="py-4 flex items-center gap-3.5 pl-0 lg:pl-5 pr-0 lg:pr-5 xl:pr-12">
                <img src="~/assets/images/svg/map-white-icon.svg" alt="Map icon">
                <a class="text-white font-medium text-base" href="">Road 24, House 15, Gulshan-02, Dhaka 1212</a>
              </div>
            </div>
          </div>

        </div>

        <div class="border-t border-[#F6958A] grid lg:grid-cols-2">
          <div class="pt-6 order-2 lg:order-1 flex justify-center lg:justify-start items-center gap-2.5">
            <img src="~/assets/images/svg/copyright-white-icon.svg" alt="">
            <p class="text-white text-base font-medium">All rights reserved @Jatri 2023</p>
          </div>

          <div class="order-1 lg:order-2 place-self-center lg:place-self-end border-b border-b-[#F6958A] lg:border-b-0 py-6 lg:pb-0 grid grid-cols-3 lg:flex items-center lg:gap-8 text-center lg:text-right">
            <a class="text-white font-medium text-sm underline" href="#">Terms and condition</a>
            <a class="text-white font-medium text-sm underline border-x border-[#F6958A] lg:border-x-0 px-4 sm:px-8 lg:px-0" href="#">Return & refund policy</a>
            <a class="text-white font-medium text-sm underline" href="#">Privacy policy</a>
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