<template>
  <section class="custom-container h-[560px] py-[60px] bg-[#EFF7FD]">
    <p class="pb-5 border-b border-info/20 text-[#8D8D8F] text-2xl font-medium">What partners say about us</p>

    <div class="relative h-full">
      <input type="radio" name="radioBtnSlider" value="1" id="nav1" checked />
      <input type="radio" name="radioBtnSlider" value="2" id="nav2" />
      <input type="radio" name="radioBtnSlider" value="3" id="nav3" />
      <input type="radio" name="radioBtnSlider" value="4" id="nav4" />

      <div class="radio-nav-items">
        <label for="nav1">
          <img src="~/assets/images/home/car.svg" alt="enayet">
        </label>
        <label for="nav2">
          <img src="~/assets/images/home/bus.svg" alt="enayet">
        </label>
        <label for="nav3">
          <img src="~/assets/images/home/car.svg" alt="enayet">
        </label>
        <label for="nav4">
          <img src="~/assets/images/home/bus.svg" alt="enayet">
        </label>
      </div>

      <div class="slider-items h-full py-10">
        <div class="slider-item relative h-full grid grid-cols-2">
          <div class="left-content">
            <p class="user-review text-dark text-4xl">This platform helped me digitize my rental car business. The app is convenient and simple, it's really helpful for booking trips from home!</p>
            <p class="user-review text-dark text-4xl">The app is convenient and simple, it's really helpful for booking trips from home!</p>
            <p class="user-review text-dark text-4xl">This platform helped me digitize my rental car business.</p>
            <p class="user-review text-dark text-4xl">The app is convenient and simple, it's really helpful for booking trips from home!</p>
          </div>
          <div class="right-content">
            <div class="user-names relative text-right">
              <p class="user-name text-dark text-2xl font-medium">Abdul Mohaimen</p>
              <p class="user-name text-dark text-2xl font-medium">Akil Jawad</p>
              <p class="user-name text-dark text-2xl font-medium">Shahed Ahmed</p>
              <p class="user-name text-dark text-2xl font-medium">Khalid Hossain</p>
            </div>

            <div class="user-designations relative text-right">
              <p class="user-designation mt-1 text-[#8D8D8F] text-base">Hot Boss</p>
              <p class="user-designation mt-1 text-[#8D8D8F] text-base">API Bro</p>
              <p class="user-designation mt-1 text-[#8D8D8F] text-base">** Somrat</p>
              <p class="user-designation mt-1 text-[#8D8D8F] text-base">Scammer</p>
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
  @apply w-20 h-20 rounded-full border-8 border-transparent transition-all
}
.radio-nav-items {
  @apply w-full pt-5 flex justify-end gap-4 border-t border-info/20 absolute right-0 bottom-0
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
  @apply opacity-0 absolute w-1/2 transition-opacity
}
.user-name,
.user-designation {
  @apply right-0
}
.user-designation {
  @apply mt-8
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
  @apply opacity-100
}
</style>