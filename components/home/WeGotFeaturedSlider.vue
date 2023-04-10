<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode} from 'swiper';
import { ref } from 'vue';
const modules = [FreeMode];

const featureSlider = ref([
  {
    id: 1,
    img:'/images/slider-img-1.svg',
    title:'Bangladeshi transport app secures $1.2m to fuel national expansion',
    logoImg: '/images/tech-in-asia-logo.svg',
    published: 'Published in Tech In Asia'
  },
  {
    id: 2,
    img:'/images/slider-img-2.svg',
    title:'Bus owners association announce Jatri as Dhaka’s e-ticketing partner',
    logoImg: '/images/daily-star-logo.svg',
    published: 'Published in The Daily Star'
  },
  {
    id: 3,
    img:'/images/slider-img-3.svg',
    title:'E-ticketing for all Mirpur route buses from today',
    logoImg: '/images/financial-express-logo.svg',
    published: 'Published in The Financial Express'
  },
  {
    id: 4,
    img:'/images/slider-img-4.svg',
    title:'Bus owners association and Jatri to bring more bus companies under the e-ticketing system.',
    logoImg: '/images/dhaka-tribune-logo.svg',
    published: 'Published in Dhaka tribune'
  }
]);

const swiperBtn = ref(true)

const onSwiper = (swiper) => {
  swiperBtn.value = swiper
};

const slideNext = () => {
  swiperBtn.value.slideTo(swiperBtn.value.realIndex + 1)
}
const slidePrev = () => {
  swiperBtn.value.slideTo(swiperBtn.value.realIndex - 1)
}
</script>
<template>
  <div class="custom-container pt-10">
    <div class="flex justify-between items-end mb-8">
      <div>
        <h2 class="text-[28px] lg:text-[57px] text-dark font-semibold leading-9 lg:leading-[64px]">We got featured</h2>
      </div>
      <div>
        <div class="flex gap-6 lg:gap-8 items-center">
          <button @click="slidePrev" class="h-[46px] lg:h-[60px] w-[46px] lg:w-[60px] flex justify-center items-center border border-[#DBDBDB] rounded-full">
            <img class="h-[20px] w-[21px]" src="~/assets/images/svg/arrow-prev.svg" alt="Previous Arrow">
          </button>
          <button @click="slideNext" class="h-[46px] lg:h-[60px] w-[46px] lg:w-[60px] flex justify-center items-center border border-[#DBDBDB] rounded-full">
            <img class="h-[20px] w-[21px]" src="~/assets/images/svg/arrow-next.svg" alt="Previous Arrow">
          </button>
        </div>
      </div>
    </div>
    <div class="mb-0 lg:mb-[48px] counter-section">

      <div class="full-width">
        <swiper
            :breakpoints="{
                  320: {
                    slidesPerView: 1.2,
                    spaceBetween: 20
                  },
                  640: {
                    slidesPerView: 2.3,
                    spaceBetween: 10
                  },
                  1024: {
                    slidesPerView: 3.3,
                    spaceBetween: 10
                  },
                  1280: {
                    slidesPerView: 3.3,
                    spaceBetween: 30
                  }
                }"
            :spaceBetween="30"
            :freeMode="true"
            :modules="modules"
            @swiper="onSwiper"
            class="mySwiper"
        >
          <swiper-slide v-for="slider in featureSlider" :key="slider.id">
            <div class="flex flex-col justify-between min-h-[500px] bg-[#FEF2F0] rounded-2xl py-6 px-6">
              <div>
                <div class="flex justify-center mb-4 slider-img">
                  <img class="rounded-2xl" :src="slider.img" alt="Feature Slider">
                </div>
                <h3 class="text-dark font-medium text-[20px] xl:text-2xl leading-7 xl:leading-8">{{ slider.title }}</h3>
              </div>
              <div>
                <img class="mb-2 " :src="slider.logoImg" alt="Company Logo">
                <p class="text-[16px] leading-[24px] text-[#4D4D4F]">{{ slider.published }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
}
.slider-img {
  height: 220px;
  width: 100%;
}
.slider-img img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>