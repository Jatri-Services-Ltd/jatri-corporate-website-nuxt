<template>
  <section class="custom-container lg:!pr-0 relative my-12 lg:my-[120px]">
    <div class="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-20">
      <div class="lg:py-16">
        <h3 class="text-dark text-[28px] lg:text-[32px] leading-9 lg:leading-10 font-medium">More profit in a few<br> simple steps</h3>
        <div class="lg:pt-5 divide-y space-y-4 lg:space-y-6">
          <div class="accordion-box">
            <input type="radio" name="radioBtnAccordion" value="1" id="accordion1" checked />
            <label class="accordion-title" for="accordion1">
              <span>Open app & select “Ride”</span>
              <img src="~/assets/images/test/partner-accodion/down-arrow.png" alt="Down arrow">
            </label>
            <div class="accordion-content">
              <div class="accordion-content-img">
                <img src="~/assets/images/test/partner-accodion/partner-accordion-1.png" alt="Phone image">
              </div>
              <p class="text-secondaryDark text-base lg:text-xl">Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
              </p>
            </div>
          </div>

          <div class="accordion-box">
            <input type="radio" name="radioBtnAccordion" value="2" id="accordion2" />
            <label class="accordion-title" for="accordion2">
              <span>Choose your driver</span>
              <img src="~/assets/images/test/partner-accodion/down-arrow.png" alt="Down arrow">
            </label>
            <div class="accordion-content">
              <div class="accordion-content-img">
                <img src="~/assets/images/test/partner-accodion/partner-accordion-1.png" alt="Phone image">
              </div>
              <p class="text-secondaryDark text-base lg:text-xl">Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
              </p>
            </div>
          </div>

          <div class="accordion-box">
            <input type="radio" name="radioBtnAccordion" value="3" id="accordion3" />
            <label class="accordion-title" for="accordion3">
              <span>Set your destination</span>
              <img src="~/assets/images/test/partner-accodion/down-arrow.png" alt="Down arrow">
            </label>
            <div class="accordion-content">
              <div class="accordion-content-img">
                <img src="~/assets/images/test/partner-accodion/partner-accordion-1.png" alt="Phone image">
              </div>
              <p class="text-secondaryDark text-base lg:text-xl">Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
              </p>
            </div>
          </div>

          <div class="accordion-box">
            <input type="radio" name="radioBtnAccordion" value="4" id="accordion4" />
            <label class="accordion-title" for="accordion4">
              <span>Enjoy your ride</span>
              <img src="~/assets/images/test/partner-accodion/down-arrow.png" alt="Down arrow">
            </label>
            <div class="accordion-content">
              <div class="accordion-content-img">
                <img src="~/assets/images/test/partner-accodion/partner-accordion-1.png" alt="Phone image">
              </div>
              <p class="text-secondaryDark text-base lg:text-xl">Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-secondary hidden lg:block"></div>
    </div>
  </section>
</template>

<style scoped>
input[type="radio"] {
  @apply absolute opacity-0 transition-all
}
.accordion-title {
  @apply text-[#8D8D8F] flex justify-between items-center pt-4 lg:pt-6 z-10 text-xl lg:text-2xl font-medium cursor-pointer transition-all
}
input[type="radio"]:checked + .accordion-title {
  @apply text-dark
}
.accordion-title img {
  @apply transform rotate-0 transition-transform
}
input[type="radio"]:checked + .accordion-title img {
  @apply transform rotate-180
}
.accordion-content {
  @apply max-h-0 overflow-hidden transition-all
}
.accordion-content-img {
  @apply bg-secondary py-3 lg:py-0 mb-4 lg:mb-0 grid place-content-center
}
.accordion-content-img img {
  @apply lg:absolute lg:top-12 xl:top-10 3xl:top-6 lg:right-[8%] xl:right-[10%] 2xl:right-[11%] 3xl:right-[13%] opacity-0 transition
}
input[type="radio"]:checked ~ .accordion-content {
  @apply pt-4 max-h-max overflow-auto
}
input[type="radio"]:checked ~ .accordion-content .accordion-content-img img {
  @apply opacity-100
}
@media screen and (width > 1439px) and (width < 1536px) {
  .accordion-content-img img {
    @apply right-[10.5%]
  }
}
</style>
