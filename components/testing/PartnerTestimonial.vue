<template>
  <section class="custom-container py-20">
    <div class="mt-10 mb-14">
      <input type="radio" id="radio1" name="radio1">
      <input type="radio" id="radio2" name="radio2">
      <input type="radio" id="radio3" name="radio3">
      <div class="radio_wrap_container">
        <div class="radio_wrap">
          <label for="radio1">
            <img src="~/public/images/enayet.jpg" alt="enayet">
          </label>
          <label for="radio2">
            <img src="~/public/images/jakir.jpg" alt="enayet">
          </label>
          <label for="radio3">
            <img src="~/public/images/mitu.jpg" alt="enayet">
          </label>
        </div>
      </div>

      <div class="custom-testimonial-slider relative py-10">
        <div class="slider-item grid grid-cols-2 justify-between">
          <div class="left-content">
            <p class="user-review text-dark text-4xl" id="user-review1">This platform helped me digitize my rental car business. The app is convenient and simple, it's really helpful for booking trips from home!</p>
            <p class="user-review text-dark text-4xl" id="user-review2">This platform helped me digitize my rental car business. The app is convenient and simple, it's really helpful for booking trips from home!</p>
            <p class="user-review text-dark text-4xl" id="user-review3">This platform helped me digitize my rental car business. The app is convenient and simple, it's really helpful for booking trips from home!</p>
          </div>
          <div class="right-content text-right">
            <p class="user-name text-dark text-2xl font-medium">Abdul Karim</p>
            <p class="user-name text-dark text-2xl font-medium">Khalid Hossain</p>
            <p class="user-name text-dark text-2xl font-medium">Shahed Ahmed</p>

            <p class="user-designation mt-1 text-[#8D8D8F] text-base">Businessman</p>
            <p class="user-designation mt-1 text-[#8D8D8F] text-base">Scammer</p>
            <p class="user-designation mt-1 text-[#8D8D8F] text-base">** Somrat</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.radio_wrap {
  @apply relative overflow-hidden z-0 flex justify-center gap-10
}
input {
  @apply absolute opacity-0
}
label {
   @apply cursor-pointer
}
label img {
  @apply w-20 h-20 rounded-full border-8 border-transparent
}
#radio1:checked ~ .radio_wrap_container .radio_wrap label:first-child img,
#radio2:checked ~ .radio_wrap_container .radio_wrap label:nth-child(2) img,
#radio3:checked ~ .radio_wrap_container .radio_wrap label:last-child img {
  @apply border-[#8FC4F2]
}

</style>

