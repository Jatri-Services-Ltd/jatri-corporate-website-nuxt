<script setup>
import {onMounted, onUnmounted, ref} from "vue";

const activeTab = ref(0)
const autoSlideInterVal = ref(null)
var round = 0;
const switchTab = (n, click=false) => {
  if(n === 2 &&  click) {
    round = 2
  } else {
    round = n
  }
  clearInterval(autoSlideInterVal.value)
  activeTab.value = n
  let nodeElement = document.getElementsByClassName('radio_wrap')[0]
  let tabPane = document.querySelector('.radio_wrap')
  let totalWidth = 0;
  for (let i = 0; i < n; i++) {
    totalWidth += nodeElement.children[i].clientWidth
  }
  let tabWith = nodeElement.children[n].clientWidth
  tabPane.style.setProperty("--left", `${totalWidth}px`);
  tabPane.style.setProperty("--tabWidth", `${tabWith}px`);
  startInterval()
}

onMounted(() => {
  let box = document.querySelector('.radio_wrap')
  box.style.setProperty("--left", `0px`);
  //box.style.setProperty("--tabWidth", `84px`);

  startInterval()
})

const startInterval = () => {
  autoSlideInterVal.value = setInterval( () => {
    round += 1
    if(round === 3) {
      round = 0
    }
    switchTab(round)
  }, 3000)

}
onUnmounted(() => {
  clearInterval(autoSlideInterVal.value)
})

</script>

<template>
  <section class="custom-container pt-20 pb-52 border-b border-gray">
    <h3 class="text-dark text-[28px] leading-9 lg:text-[57px] lg:leading-[64px] font-semibold text-center">{{ $t('n-our-products') }}</h3>

    <div class="mt-10 mb-14">
      <input type="radio" id="radio1" name="radio1" value="0" v-model="activeTab">
      <input type="radio" id="radio2" name="radio2" value="1" v-model="activeTab">
      <div class="radio_wrap_container">
        <div class="radio_wrap" :style="{'--i': activeTab}">
          <label @click="switchTab(0, true)" for="radio1" data-i="0">left</label>
          <label @click="switchTab(1, true)" for="radio2" data-i="1">right</label>
        </div>
      </div>

      <div class="panels">
        <div class="panel bg-[url('~/assets/images/home/category-card-user.png')]" @mouseover="switchTab(0, true)" id="panel-one">
          <div class="panel-content">
            <h5 class="title">{{ $t('n-our-products-tab1-heading') }}</h5>
            <p class="description">{{ $t('n-our-products-tab1-des') }}</p>
          </div>

          <div class="panel-hidden-content bg-primary">
            <div class="flex items-center gap-4">
              <div class="bg-[#E82711] h-10 w-10 p-2 leading-10 rounded-full grid place-content-center">
                <img src="~/assets/images/home/jatri-white-icon.svg" alt="jatri icon">
              </div>
              <p class="text-white text-2xl lg:text-base xl:text-2xl font-medium">{{ $t('n-our-products-tab1-category1') }}</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="bg-[#E82711] h-10 w-10 p-2 leading-10 rounded-full grid place-content-center">
                <img src="~/assets/images/home/jatri-white-icon.svg" alt="jatri icon">
              </div>
              <p class="text-white text-2xl lg:text-base xl:text-2xl font-medium">{{ $t('n-our-products-tab1-category2') }}</p>
            </div>
          </div>
        </div>

        <div class="panel bg-[url('~/assets/images/home/category-card-partner.png')]" @mouseover="switchTab(1, true)" id="panel-two">
          <div class="panel-content">
            <h5 class="title">{{ $t('n-our-products-tab2-heading') }}</h5>
            <p class="description">{{ $t('n-our-products-tab2-des') }}</p>
          </div>

          <div class="panel-hidden-content bg-info">
            <div class="flex items-center gap-4">
              <div class="bg-[#1775C8] h-10 w-10 p-2 leading-10 rounded-full grid place-content-center">
                <img src="~/assets/images/home/jatri-white-icon.svg" alt="jatri icon">
              </div>
              <p class="text-white text-2xl lg:text-base xl:text-2xl font-medium">{{ $t('n-our-products-tab2-category1') }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about-us-slider-pagination bg-[#FDE5E2] h-4 rounded-full mt-64">
          <div class="about-us-pagination-items flex justify-between ">
            <div class="about-us-pagination-item h-4 w-4 bg-[#D42410] rounded-full" id="about-us-slider-pagination1"></div>
            <div class="about-us-pagination-item h-4 w-4 bg-[#D42410] opacity-30 rounded-full" id="about-us-slider-pagination2"></div>
            <div class="about-us-pagination-item h-4 w-4 bg-[#D42410] opacity-30 rounded-full" id="about-us-slider-pagination3"></div>
            <div class="about-us-pagination-item h-4 w-4 bg-[#D42410] opacity-30 rounded-full" id="about-us-slider-pagination4"></div>
            <div class="about-us-pagination-item h-4 w-4 bg-[#D42410] opacity-30 rounded-full" id="about-us-slider-pagination5"></div>
          </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/*Pagination*/
#radio1:checked ~ .about-us-slider-pagination .about-us-pagination-items #about-us-slider-pagination1,
#radio2:checked ~ .about-us-slider-pagination .about-us-pagination-items #about-us-slider-pagination2 {
  @apply opacity-100
}
.about-us-pagination-items {
  @apply relative overflow-hidden z-0
}
.about-us-pagination-items:before {
  @apply content-[""] w-0 h-full bg-primary rounded-full z-[-1] absolute top-0 left-0 transition-[0.3s] ease-in-out
}
#radio2:checked ~ .about-us-slider-pagination .about-us-pagination-items:before {
  @apply w-[390px]
}




.radio_wrap_container {
  @apply bg-[#FDE5E2] flex justify-center w-max mx-auto my-0 p-1 rounded-[2rem]
}
.radio_wrap {
  @apply relative overflow-hidden z-0 flex justify-center
}
.radio_wrap {
  --i: 0;
}

input {
  @apply absolute opacity-0;
}

.radio_wrap::before {
  @apply bg-primary content-[""] absolute z-[-1] w-[var(--tabWidth)] left-[var(--left)] h-full transition-[0.3s] ease-in-out rounded-[2rem]
}
label {
  @apply relative z-[2] text-center text-black text-sm transition-[color] duration-[0.3s] ease-in-out flex justify-center items-center h-10 cursor-pointer
}
label:first-child {
  @apply w-[84px];
}
label:nth-child(2) {
  @apply w-[105px];
}
label:last-child {
  @apply w-[191px];
}

.panels {
  @apply pt-6 lg:pt-14 w-full flex justify-center space-x-0 lg:space-x-10 overflow-visible relative h-[350px]
}
.panels .panel {
  @apply h-[460px] lg:h-[430px] xl:h-[460px] w-[340px] lg:w-[290px] xl:w-[340px] overflow-hidden flex-shrink-0 rounded-3xl flex flex-col justify-center transform scale-100 duration-1000 transition-transform
}
.panel-content {
  @apply px-8 py-6 flex flex-col justify-center items-center  text-center transition-transform duration-700
}
.panel-content .title {
  @apply text-white text-[45px] leading-[52px] lg:text-4xl xl:text-[45px] xl:leading-[52px] font-semibold transition-[font-size] duration-500
}
.panel-content .description {
  @apply text-white text-base mt-2 transition-[font-size] duration-500
}

.panel-hidden-content {
  @apply shadow-[0_0_24px_rgba(116,19,9,0.3)] rounded-3xl px-5 py-6 space-y-6 md:space-y-4 lg:space-y-3 xl:space-y-6 transform translate-y-56 h-0 transition-[transform,height] duration-700
}

input[type="radio"]:checked + label {
  @apply !text-white
}

#radio1:checked ~ .panels #panel-one,
#radio2:checked ~ .panels #panel-two,
#radio3:checked ~ .panels #panel-three {
  @apply lg:scale-110
}

#radio1:checked ~ .panels #panel-one .panel-content,
#radio2:checked ~ .panels #panel-two .panel-content,
#radio3:checked ~ .panels #panel-three .panel-content {
  @apply items-start text-left
}

#radio1:checked ~ .panels #panel-one .panel-content .title,
#radio2:checked ~ .panels #panel-two .panel-content .title,
#radio3:checked ~ .panels #panel-three .panel-content .title {
  @apply text-xl
}
#radio1:checked ~ .panels #panel-one .panel-content .description,
#radio2:checked ~ .panels #panel-two .panel-content .description,
#radio3:checked ~ .panels #panel-three .panel-content .description {
  @apply text-sm
}

#radio1:checked ~ .panels #panel-one .panel-hidden-content ,
#radio2:checked ~ .panels #panel-two .panel-hidden-content ,
#radio3:checked ~ .panels #panel-three .panel-hidden-content  {
  @apply translate-y-0 h-full
}

#radio1:checked ~ .radio_wrap_container .radio_wrap label:first-child,
#radio2:checked ~ .radio_wrap_container .radio_wrap label:nth-child(2),
#radio3:checked ~ .radio_wrap_container .radio_wrap label:last-child {
  @apply text-white
}

@media only screen and (max-width: 1023px) {
  .panels .panel {
    @apply absolute left-1/2 -translate-x-1/2 opacity-0
  }

  #radio1:checked ~ .panels #panel-one,
  #radio2:checked ~ .panels #panel-two,
  #radio3:checked ~ .panels #panel-three {
    @apply opacity-100
  }
}

@media only screen and (max-width: 412px) {
  label:first-child {
    @apply w-16;
  }
  label:nth-child(2) {
    @apply w-[85px];
  }
  label:last-child {
    @apply w-[171px];
  }
}
</style>

