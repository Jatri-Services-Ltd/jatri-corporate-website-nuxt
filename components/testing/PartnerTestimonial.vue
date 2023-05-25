<template>
  <section class="custom-container pt-8 lg:pt-[60px] pb-[60px] bg-[#EFF7FD]">
    <div class="relative pb-12 sm:pb-[90px]">
      <p class="pb-5 text-[#8D8D8F] text-sm sm:text-base lg:text-2xl font-medium">What partners say about us</p>

      <div>
        <input type="radio" name="radioBtnSlider" value="1" id="nav1" checked />
        <input type="radio" name="radioBtnSlider" value="2" id="nav2" />
        <input type="radio" name="radioBtnSlider" value="3" id="nav3" />
        <input type="radio" name="radioBtnSlider" value="4" id="nav4" />

        <div class="radio-nav-items z-50">
          <label for="nav1">
            <img src="~/assets/images/test/partner-testimonial/nav2.png" alt="enayet">
          </label>
          <label for="nav2">
            <img src="~/assets/images/test/partner-testimonial/nav3.png" alt="enayet">
          </label>
          <label for="nav3">
            <img src="~/assets/images/test/partner-testimonial/nav4.png" alt="enayet">
          </label>
          <label for="nav4">
            <img src="~/assets/images/test/partner-testimonial/nav2.png" alt="enayet">
          </label>
        </div>

        <div class="slider-items pt-6 lg:pt-10 pb-[110px] lg:pb-10 border-y border-info/20">
          <div class="slider-item relative flex justify-between flex-wrap lg:flex-nowrap">
            <div class="left-content w-full lg:w-3/5">
              <p class="user-review text-dark text-2xl xl:text-4xl">This platform helped me digitize my rental car business. The app is convenient and simple, it's really helpful for booking trips from home!</p>
              <p class="user-review text-dark text-2xl xl:text-4xl">This platform helped me digitize my rental car business. The app is convenient and simple, it's really helpful for booking trips from home!</p>
              <p class="user-review text-dark text-2xl xl:text-4xl">This platform helped me digitize my rental car business. The app is convenient and simple, it's really helpful for booking trips from home!</p>
              <p class="user-review text-dark text-2xl xl:text-4xl">This platform helped me digitize my rental car business. The app is convenient and simple, it's really helpful for booking trips from home!</p>
            </div>
            <div class="right-content w-full lg:w-2/5">
              <div class="user-names relative text-left lg:text-right">
                <p class="user-name text-dark text-xl xl:text-2xl font-medium">Abdul Mohaimen</p>
                <p class="user-name text-dark text-xl xl:text-2xl font-medium">Akil Jawad</p>
                <p class="user-name text-dark text-xl xl:text-2xl font-medium">Shahed Ahmed</p>
                <p class="user-name text-dark text-xl xl:text-2xl font-medium">Khalid Hossain</p>
              </div>

              <div class="user-designations relative text-left lg:text-right">
                <p class="user-designation text-[#8D8D8F] text-base">Hot Boss</p>
                <p class="user-designation text-[#8D8D8F] text-base">API Bro</p>
                <p class="user-designation text-[#8D8D8F] text-base">** Somrat</p>
                <p class="user-designation text-[#8D8D8F] text-base">Scammer</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
input[type="radio"] {
  @apply absolute right-0 bottom-0 opacity-0 transition-all
}
label {
  @apply cursor-pointer
}
label img {
  @apply w-[54px] sm:w-20 md:w-[100px] h-[54px] sm:h-20 md:h-[100px] rounded-full border-[5px] sm:border-8 border-transparent transition-all
}
.radio-nav-items {
  @apply w-full pt-5 flex justify-start md:justify-end gap-4 absolute right-0 -bottom-7
}
#nav1:checked ~ .radio-nav-items label:first-child img,
#nav2:checked ~ .radio-nav-items label:nth-child(2) img,
#nav3:checked ~ .radio-nav-items label:nth-child(3) img,
#nav4:checked ~ .radio-nav-items label:last-child img {
  @apply border-[#8FC4F2]
}

.user-review,
.user-name,
.user-designation {
  @apply opacity-0 h-0 translate-y-24 transition-all duration-500
}
.user-name,
.user-designation {
  @apply lg:right-0 absolute w-1/2 mt-8 lg:mt-0
}
.user-designation {
  @apply top-8
}

#nav1:checked ~ .slider-items .slider-item .left-content .user-review:first-child,
#nav2:checked ~ .slider-items .slider-item .left-content .user-review:nth-child(2),
#nav3:checked ~ .slider-items .slider-item .left-content .user-review:nth-child(3),
#nav4:checked ~ .slider-items .slider-item .left-content .user-review:last-child,

#nav1:checked ~ .slider-items .slider-item .right-content .user-names .user-name:first-child,
#nav2:checked ~ .slider-items .slider-item .right-content .user-names .user-name:nth-child(2),
#nav3:checked ~ .slider-items .slider-item .right-content .user-names .user-name:nth-child(3),
#nav4:checked ~ .slider-items .slider-item .right-content .user-names .user-name:last-child,

#nav1:checked ~ .slider-items .slider-item .right-content .user-designations .user-designation:first-child,
#nav2:checked ~ .slider-items .slider-item .right-content .user-designations .user-designation:nth-child(2),
#nav3:checked ~ .slider-items .slider-item .right-content .user-designations .user-designation:nth-child(3),
#nav4:checked ~ .slider-items .slider-item .right-content .user-designations .user-designation:last-child  {
  @apply opacity-100 h-auto translate-y-0
}
</style>