<template>
    <div>
      <CareerHeader />
      
        <div class="">
          <CareerSlider />
          <!-- <CareerSliderTest /> -->
          <div class="flex justify-center items-center">
          
              <!-- <div class="slider pl-[26px]">
                  <div class="slider-row"></div>
              </div> -->
              <!-- <h2 class="text-white absolute text-[57px] leading-[64px] font-medium">#Life@Jatri</h2> -->
          </div>
        </div>
        <CareerOurCoreValues />
        <CareerBenefitAndPerks />
        <div class="custom-container mx-auto py-10 lg:py-[100px]">
          <img class="w-full" src="/images/career/career-video.png" alt="">
        </div>
        <CareerWorkplaceLikeHome />
        <div id="openRoles">
          <CareerCurrentOpenRoles />
        </div>
    </div>
</template>

<script setup>
import CareerSlider from '~~/components/career/CareerSlider.vue';
import CareerSliderTest from '~~/components/career/CareerSliderTest.vue';
</script>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
}
/* .slider {
  width: 100%;
  overflow: hidden;
  height: 500px;
}

.slider-row {
    height: 500px;
    background-repeat: no-repeat;
    background-image: url('/images/career/life-at-jatri.png');
    animation: slide 25s linear infinite;
  }

@keyframes slide {
  from { background-position-x: 0; }
  to   { background-position-x: -2200px; }
} */
</style>
