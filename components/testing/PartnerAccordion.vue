<template>
  <section class="custom-container py-12 lg:py-[120px]">
    <div class="grid grid-cols-2">
      <div>
        <h3 class="text-dark text-[32px] leading-10 font-medium">More profit in a few simple steps</h3>

        <div class="pt-11">
          <div class="accordion-box">
            <input type="radio" name="radioBtnAccordion" value="1" id="accordion1" checked />
            <label class="accordion-title" for="accordion1">Open app & select “Ride”</label>
            <div class="accordion-content">
              <p>Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
              </p>
            </div>
          </div>

          <div class="accordion-box">
            <input type="radio" name="radioBtnAccordion" value="2" id="accordion2" />
            <label class="accordion-title" for="accordion2">Open app & select “Ride”</label>
            <div class="accordion-content">
              <p>Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
              </p>
            </div>
          </div>

          <div class="accordion-box">
            <input type="radio" name="radioBtnAccordion" value="3" id="accordion3" />
            <label class="accordion-title" for="accordion3">Open app & select “Ride”</label>
            <div class="accordion-content">
              <p>Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
              </p>
            </div>
          </div>
        </div>

      </div>

      <div class="text-right">Right content</div>
    </div>
  </section>
</template>

<style scoped>
input[type="radio"] {
  @apply absolute opacity-0 transition-all
}
label {
  @apply cursor-pointer block py-4 z-10
}
input[type="radio"]:checked + label {
  @apply text-primary
}


#accordion1:checked ~ .accordion-content:first-child,
#accordion2:checked ~ .accordion-content:nth-child(2),
#accordion3:checked ~ .accordion-content:nth-child(3) {
  @apply max-h-max overflow-auto
}

#accordion1:checked ~ .accordion-content:nth-child(2),
#accordion1:checked ~ .accordion-content:nth-child(3) {
  @apply max-h-0 overflow-hidden
}

#accordion2:checked ~ .accordion-content:first-child,
#accordion2:checked ~ .accordion-content:nth-child(3) {
  @apply max-h-0 overflow-hidden
}

#accordion3:checked ~ .accordion-content:first-child,
#accordion3:checked ~ .accordion-content:nth-child(2) {
  @apply max-h-0 overflow-hidden
}
</style>
