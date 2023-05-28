<template>
  <section class="custom-container lg:!pr-0 relative my-12 lg:my-[120px]">
    <div class="grid lg:grid-cols-2 gap-20">
      <div class="py-16">
        <h3 class="text-dark text-[32px] leading-10 font-medium">More profit in a few<br> simple steps</h3>
        <div class="pt-5 divide-y space-y-6 pt-5">
          <div class="accordion-box">
            <input type="radio" name="radioBtnAccordion" value="1" id="accordion1" checked />
            <label class="accordion-title" for="accordion1">Open app & select “Ride”</label>
            <div class="accordion-content">
              <div class="accordion-content-img">
                <img src="~/assets/images/test/partner-accodion/partner-accordion1.png" alt="Phone image">
              </div>
              <p class="text-secondaryDark text-xl">Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
              </p>
            </div>
          </div>

          <div class="accordion-box">
            <input type="radio" name="radioBtnAccordion" value="2" id="accordion2" />
            <label class="accordion-title" for="accordion2">Choose your driver</label>
            <div class="accordion-content">
              <div class="accordion-content-img">
                <img src="~/assets/images/test/partner-testimonial/nav3.png" alt="Phone image">
              </div>
              <p class="text-secondaryDark text-xl">Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
              </p>
            </div>
          </div>

          <div class="accordion-box">
            <input type="radio" name="radioBtnAccordion" value="3" id="accordion3" />
            <label class="accordion-title" for="accordion3">Set your destination</label>
            <div class="accordion-content">
              <div class="accordion-content-img">
                <img src="~/assets/images/test/partner-accodion/partner-accordion1.png" alt="Phone image">
              </div>
              <p class="text-secondaryDark text-xl">Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
              </p>
            </div>
          </div>

          <div class="accordion-box">
            <input type="radio" name="radioBtnAccordion" value="4" id="accordion4" />
            <label class="accordion-title" for="accordion4">Enjoy your ride</label>
            <div class="accordion-content">
              <div class="accordion-content-img">
                <img src="~/assets/images/test/partner-accodion/partner-accordion1.png" alt="Phone image">
              </div>
              <p class="text-secondaryDark text-xl">Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-secondary "></div>
    </div>
  </section>
</template>

<style scoped>
input[type="radio"] {
  @apply absolute opacity-0 transition-all
}
label {
  @apply text-[#8D8D8F] block pt-6 z-10 text-2xl font-medium cursor-pointer transition-all
}
input[type="radio"]:checked + label {
  @apply text-dark
}
.accordion-content {
  @apply max-h-0 overflow-hidden transition-all
}
.accordion-content-img {
  @apply bg-secondary py-7 lg:py-0 mb-4 lg:mb-0 grid place-content-center
}
.accordion-content-img img {
  @apply lg:absolute lg:top-[15%] lg:right-[16%] opacity-0 transition
}

input[type="radio"]:checked ~ .accordion-content {
  @apply pt-4 max-h-max overflow-auto
}
input[type="radio"]:checked ~ .accordion-content .accordion-content-img img {
  @apply opacity-100
}
</style>
