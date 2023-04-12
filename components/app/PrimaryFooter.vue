<template>
    <footer class="mt-10">
      <div class="hidden md:block">
        <img src="~/assets/images/svg/footer-img.svg" alt="Footer img" width="100%">
      </div>

      <div class="custom-container bg-primary pt-6 md:pt-12 pb-6 md:pb-8">
        <div class="grid md:grid-cols-4 md:justify-between">
          <div class="md:col-span-1 row-span-1 border-b border-[#F6958A] md:border-0 pb-6 md:pb-0 mb-6 md:mb-0">
            <div class="flex justify-between items-center md:block">
              <img src="~/assets/images/svg/footer-white-logo.svg" alt="Jatri Logo">
              <div class="flex items-center gap-10 md:gap-14 md:mt-8">
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

          <div class="md:col-span-3 row-span-2">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0 pb-6">
              <div class="md:px-12 md:border-x border-x-[#F6958A]">
                <h4 class="text-white text-xl md:text-2xl font-medium mb-4 md:mb-6">Products</h4>
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

              <div class="md:px-12 row-span-2 md:row-span-1">
                <h4 class="text-white text-xl md:text-2xl font-medium mb-4 md:mb-6">About us</h4>
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
                  <li>
                    <a class="text-white font-normal text-base" href="#">Jatri press</a>
                  </li>
                </ul>
              </div>

              <div class="mt-2 md:mt-0 md:px-12 md:border-x border-x-[#F6958A]">
                <h4 class="text-white text-xl md:text-2xl font-medium mb-4 md:mb-6">Others</h4>
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

            <div class="py-0 md:py-6 border-t border-[#F6958A] grid grid-cols-1 md:grid-cols-3 divide-y divide-[#F6958A] md:divide-y-0 md:divide-x">
              <div class="py-4 flex md:justify-center items-center gap-3.5">
                <img src="~/assets/images/svg/question-white-icon.svg" alt="Question icon">
                <a class="text-white font-medium text-base" href="mailto:support@jatri.co">support@jatri.co</a>
              </div>
              <div class="py-4 flex md:justify-center items-center gap-3.5">
                <img src="~/assets/images/svg/phone-white-icon.svg" alt="Question icon">
                <a class="text-white font-medium text-base" href="tel:09642080808">09642080808</a>
              </div>
              <div class="py-4 flex md:justify-center items-center gap-3.5">
                <img src="~/assets/images/svg/map-white-icon.svg" alt="Map icon">
                <a class="text-white font-medium text-base" href="">Road 24, House 15, Gulshan-02, Dhaka 1212</a>
              </div>
            </div>
          </div>

        </div>

        <div class="border-t border-[#F6958A] grid md:grid-cols-2">
          <div class="pt-6 order-2 md:order-1 flex justify-center md:justify-start items-center gap-3.5">
            <img src="~/assets/images/svg/copyright-white-icon.svg" alt="">
            <p class="text-white text-base font-medium">All rights reserved @Jatri 2023</p>
          </div>

          <div class="order-1 md:order-2 place-self-center md:place-self-end border-b border-b-[#F6958A] md:border-b-0 py-6 md:pb-0 grid grid-cols-3 md:flex items-center md:gap-8 text-center md:text-right">
            <a class="text-white font-medium text-sm underline" href="#">Terms and condition</a>
            <a class="text-white font-medium text-sm underline border-x border-[#F6958A] md:border-x-0 px-4 md:px-0" href="#">Return & refund policy</a>
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