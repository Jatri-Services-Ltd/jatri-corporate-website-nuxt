<script setup>
</script>

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
        
        <div class="w-full lg:w-[60%] mt-8 sm:mt-8 lg:mt-0">
          <div class="divide-y divide-lightGrey space-y-4 lg:space-y-6">
            <div class="accordion-box">
              <input type="radio" name="radioBtnAccordion" value="1" id="accordion1" checked />
              <label class="accordion-title !pt-0" for="accordion1">
                <span>{{ $t('card-faq-question1') }}</span>
                <img src="~/assets/images/common/down_arrow.svg" alt="Down arrow">
              </label>
              <div class="accordion-content">
                <p class="text-secondaryDark text-sm lg:text-xl">{{ $t('card-faq-answer1') }}</p>
              </div>
            </div>
            <div class="accordion-box">
              <input type="radio" name="radioBtnAccordion" value="2" id="accordion2" />
              <label class="accordion-title" for="accordion2">
                <span>{{ $t('card-faq-question2') }}</span>
                <img src="~/assets/images/common/down_arrow.svg" alt="Down arrow">
              </label>
              <div class="accordion-content">
                <p class="text-secondaryDark text-sm lg:text-xl">{{ $t('card-faq-answer2') }}</p>
              </div>
            </div>
            <div class="accordion-box">
              <input type="radio" name="radioBtnAccordion" value="3" id="accordion3" />
              <label class="accordion-title" for="accordion3">
                <span>{{ $t('card-faq-question3') }}</span>
                <img src="~/assets/images/common/down_arrow.svg" alt="Down arrow">
              </label>
              <div class="accordion-content">
                <p class="text-secondaryDark text-sm lg:text-xl">{{ $t('card-faq-answer3') }}</p>
              </div>
            </div>
            <div class="accordion-box">
              <input type="radio" name="radioBtnAccordion" value="4" id="accordion4" />
              <label class="accordion-title" for="accordion4">
                <span>{{ $t('card-faq-question4') }}</span>
                <img src="~/assets/images/common/down_arrow.svg" alt="Down arrow">
              </label>
              <div class="accordion-content">
                <p class="text-secondaryDark text-sm lg:text-xl">{{ $t('card-faq-answer4') }}</p>
              </div>
            </div>
            <div class="accordion-box">
              <input type="radio" name="radioBtnAccordion" value="5" id="accordion5" />
              <label class="accordion-title" for="accordion5">
                <span>{{ $t('card-faq-question5') }}</span>
                <img src="~/assets/images/common/down_arrow.svg" alt="Down arrow">
              </label>
              <div class="accordion-content">
                <p class="text-secondaryDark text-sm lg:text-xl">{{ $t('card-faq-answer5') }}</p>
              </div>
            </div>
            <div class="accordion-box">
              <input type="radio" name="radioBtnAccordion" value="6" id="accordion6" />
              <label class="accordion-title" for="accordion6">
                <span>{{ $t('card-faq-question6') }}</span>
                <img src="~/assets/images/common/down_arrow.svg" alt="Down arrow">
              </label>
              <div class="accordion-content">
                <p class="text-secondaryDark text-sm lg:text-xl">{{ $t('card-faq-answer6') }}</p>
              </div>
            </div>
            <div class="accordion-box">
              <input type="radio" name="radioBtnAccordion" value="7" id="accordion7" />
              <label class="accordion-title" for="accordion7">
                <span>{{ $t('card-faq-question7') }}</span>
                <img src="~/assets/images/common/down_arrow.svg" alt="Down arrow">
              </label>
              <div class="accordion-content">
                <p class="text-secondaryDark text-sm lg:text-xl">{{ $t('card-faq-answer7') }}</p>
              </div>
            </div>
            <div class="accordion-box">
              <input type="radio" name="radioBtnAccordion" value="8" id="accordion8" />
              <label class="accordion-title" for="accordion8">
                <span>{{ $t('card-faq-question8') }}</span>
                <img src="~/assets/images/common/down_arrow.svg" alt="Down arrow">
              </label>
              <div class="accordion-content">
                <p class="text-secondaryDark text-sm lg:text-xl">{{ $t('card-faq-answer8') }}</p>
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
  @apply flex justify-between items-center gap-5 pt-4 lg:pt-6 cursor-pointer transition-all text-base lg:text-2xl text-dark font-medium
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

input[type="radio"]:checked~.accordion-content {
  @apply pt-2 lg:pt-4 max-h-max overflow-auto
}
</style>