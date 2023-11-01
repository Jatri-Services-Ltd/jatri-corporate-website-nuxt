<script setup></script>

<template>
  <section class="py-10 md:py-20 xl:py-[100px]">
    <div class="custom-container">
      <div class="flex flex-col lg:flex-row justify-center">
        <div class="w-full lg:w-[40%]">
          <p class="text-[#676769] font-medium text-base lg:text-[20px] leading-6 lg:leading-7">{{ $t('card-faq-header')
          }}</p>
          <p class="mt-2 w-4/5 lg:w-[85%] text-dark font-medium text-2xl lg:text-[32px] leading-8 lg:leading-10">{{
            $t('card-faq-content') }}</p>
          <div class="flex gap-x-2 items-baseline">
            <p class="mt-4 text-[#4D4D4F] text-sm leading-5 font-normal">{{ $t('card-faq-sub-content') }}</p>
            <nuxt-link :to="localePath('/contact-us')"
              class="text-xs block text-primary font-normal lg:font-medium underline flex">{{
                $t('card-faq-contact') }}
              <img src="~/assets/images/common/right-arrow.svg" alt="right sided arrow">
            </nuxt-link>
          </div>
        </div>
        <div class="w-full lg:w-[60%] mt-6 sm:mt-8 lg:mt-0">
          <div class="lg:pt-5 divide-y space-y-4 lg:space-y-6">
            <div class="accordion-box">
              <input type="radio" name="radioBtnAccordion" value="1" id="accordion1" checked />
              <label class="accordion-title" for="accordion1">
                <span>Open app & select “Ride”</span>
                <img src="~/assets/images/common/down_arrow.svg" alt="Down arrow">
              </label>
              <div class="accordion-content">

                <p class="text-secondaryDark text-base lg:text-xl">Lorem ipsum dolor sit amet consectetur. Supendisse cras
                  arcu est et dignissim.
                  Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                </p>
              </div>
            </div>

            <div class="accordion-box">
              <input type="radio" name="radioBtnAccordion" value="2" id="accordion2" />
              <label class="accordion-title" for="accordion2">
                <span>Choose your driver</span>
                <img src="~/assets/images/common/down_arrow.svg" alt="Down arrow">
              </label>
              <div class="accordion-content">

                <p class="text-secondaryDark text-base lg:text-xl">Lorem ipsum dolor sit amet consectetur. Supendisse cras
                  arcu est et dignissim.
                  Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                </p>
              </div>
            </div>

            <div class="accordion-box">
              <input type="radio" name="radioBtnAccordion" value="3" id="accordion3" />
              <label class="accordion-title" for="accordion3">
                <span>Set your destination</span>
                <img src="~/assets/images/common/down_arrow.svg" alt="Down arrow">
              </label>
              <div class="accordion-content">

                <p class="text-secondaryDark text-base lg:text-xl">Lorem ipsum dolor sit amet consectetur. Supendisse cras
                  arcu est et dignissim.
                  Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                </p>
              </div>
            </div>

            <div class="accordion-box">
              <input type="radio" name="radioBtnAccordion" value="4" id="accordion4" />
              <label class="accordion-title" for="accordion4">
                <span>Enjoy your ride</span>
                <img src="~/assets/images/common/down_arrow.svg" alt="Down arrow">
              </label>
              <div class="accordion-content">

                <p class="text-secondaryDark text-base lg:text-xl">Lorem ipsum dolor sit amet consectetur.
                  Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                </p>
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
  @apply absolute opacity-0 transition-all
}

.accordion-title {
  @apply text-[#8D8D8F] flex justify-between items-center pt-4 lg:pt-6 z-10 text-xl lg:text-2xl font-medium cursor-pointer transition-all
}

input[type="radio"]:checked+.accordion-title {
  @apply text-dark
}

.accordion-title img {
  @apply transform rotate-0 transition-transform
}

input[type="radio"]:checked+.accordion-title img {
  @apply transform rotate-180
}

.accordion-content {
  @apply max-h-0 overflow-hidden transition-all
}

/* .accordion-content-img {
      @apply bg-secondary py-3 lg:py-0 mb-4 lg:mb-0 grid place-content-center
  }
  .accordion-content-img img {
      @apply lg:absolute lg:top-12 xl:top-10 3xl:top-6 lg:right-[8%] xl:right-[10%] 2xl:right-[11%] 3xl:right-[13%] opacity-0 transition
  } */
input[type="radio"]:checked~.accordion-content {
  @apply pt-4 max-h-max overflow-auto
}

/* input[type="radio"]:checked ~ .accordion-content .accordion-content-img img {
      @apply opacity-100
  }
  @media (width > 1439px) and (width < 1536px) {
      .accordion-content-img img {
          @apply right-[10.5%]
      }
  } */</style>