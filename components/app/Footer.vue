<template>
  <footer class="footer-1 corporate_bg_color py-8 sm:py-12">
    <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto">
      <div class="sm:flex sm:flex-wrap 2xl:-mx-4 md:py-4">

        <!-- footer part:1/3 -->
        <div class="w-full md:w-1/3 xl:w-1/3">
          <p class="text-sm uppercase mb-2 text-white body_text font-light"><span
              class="font-bold text-white">JATRI:</span> Empowering Bangladesh to travel better</p>

          <!-- Footer Menu -->
          <div class="flex mb-6">
            <div class="w-1/2">
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <nuxt-link to="/about-us" class="footer_bnt body_text">about us</nuxt-link>
                </li>
                <li class="mb-2">
                  <nuxt-link to="#" class="footer_bnt body_text">newsletter</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="w-1/2">
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <nuxt-link to="/blog" class="footer_bnt body_text">blog</nuxt-link>
                </li>
                <li class="mb-2">
                  <nuxt-link to="/career" class="footer_bnt body_text">career</nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <!-- Social contact -->
          <div class="flex justify-start">
            <a href="https://facebook.com/profile.php?id=836022770089201&ref=content_filter" target="_blank"
               class="footer_social_btn hover:text-blue-600 hover:corporate_bg_color">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/jatriapp?lang=en" target="_blank"
               class="footer_social_btn hover:text-blue-400 hover:corporate_bg_color">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com/channel/UCOCwyP-pg5lJodKLvKmcWeQ" target="_blank"
               class="footer_social_btn hover:text-red-600 hover:corporate_bg_color">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/company/jatri-app" target="_blank"
               class="footer_social_btn hover:text-black hover:corporate_bg_color">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>

        </div>

        <!-- footer part:2/3 -->
        <div class="w-full md:w-1/3 xl:w-1/3"></div>

        <!-- footer part:3/3 -->
        <div class="w-full md:w-1/3 sm:mx-auto mt-5 xl:mt-0 xl:ml-auto">

          <div class="sm:flex md:flex-col md:items-start justify-between md:justify-start gap-6">
            <!-- <div class="flex flex-col justify-center items-center md:items-start md:justify-start"> -->
            <img src="~/assets/images/others/stand.png" alt="" class="w-64 my-4">

            <div class="flex flex-col items-start justify-start">
              <div class="mt-5">
                <h5 class="mb-2 text-white font-semibold body_text">Newsletter</h5>
                <p class="text-white body_text">Subscribe for get new update at current time</p>
              </div>

              <!-- Subscribe form -->
              <div class="mt-2 lg:flex justify-between">
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 mr-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" placeholder="Your Email">
                <button
                    class="bg-white hover:bg-black text-black hover:text-white font-light mt-2 lg:mt-0 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Footer copyright section -->
      <div class="flex flex-wrap justify-center lg:justify-start -mx-4 mt-3 sm:mt-0 md:py-4 items-center body_text">
        <p class="footer_bottom_menu"> &copy; Copyright | <span class="uppercase">jatri <span id="year"></span> all right reserved</span>
        </p>
        <p class="footer_bottom_menu"><nuxt-link to="/user/term-and-condition">Terms & Conditions</nuxt-link></p>
        <p class="footer_bottom_menu"><nuxt-link to="/user/privacy-policy">Privacy Policy</nuxt-link></p>
        <div class="flex mt-4 lg:mt-0">
          <a href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser"><img
              src="~/assets/images/logo/play-store.png" alt="" class="footer_app_link"></a>
        </div>
      </div>
    </div>
  </footer>
</template>