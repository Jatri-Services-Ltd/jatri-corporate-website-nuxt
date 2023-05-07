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
    img:'/images/svg/featured-slider1.png',
    title:'Bangladeshi transport app secures $1.2m to fuel national expansion',
    logoImg: '/images/tech-in-asia-logo.svg',
    published: 'Published in Tech In Asia',
    link: 'https://www.techinasia.com/jatri-pre-series-a-funding'
  },
  {
    id: 2,
    img:'/images/svg/featured-slider4.jpg',
    title:'Bus owners association announce Jatri as Dhaka’s e-ticketing partner',
    logoImg: '/images/daily-star-logo.svg',
    published: 'Published in The Daily Star',
    link: 'https://www.thedailystar.net/business/news/bus-owners-announce-jatri-dhakas-e-ticketing-partner-3170171'
  },
  {
    id: 3,
    img:'/images/svg/featured-slider3.png',
    title:'E-ticketing for all Mirpur route buses from today',
    logoImg: '/images/financial-express-logo.svg',
    published: 'Published in The Financial Express',
    link: 'https://today.thefinancialexpress.com.bd/metro-news/e-ticketing-for-all-mirpur-route-buses-from-today-1668268482?amp=true'
  },
  {
    id: 4,
    img:'/images/svg/featured-slider4.png',
    title:'Bus owners association and Jatri to bring more bus companies under the e-ticketing system.',
    logoImg: '/images/dhaka-tribune-logo.svg',
    published: 'Published in Dhaka tribune',
    link: 'https://www.dhakatribune.com/business/2023/01/10/bus-owners-association-and-jatri-to-bring-more-bus-companies-under-e-ticketing-system'
  }
]);

const swiperCarousel = ref(true)
const firstElement = ref(false);
const lastElement = ref(false);
const onSwiper = (swiper) => {
  swiperCarousel.value = swiper
};

const slideNext = () => {
  swiperCarousel.value.slideTo(swiperCarousel.value.realIndex + 1)
  if(swiperCarousel.value.isEnd === true){
    lastElement.value = true
    firstElement.value = false
  }
}
const slidePrev = () => {
  swiperCarousel.value.slideTo(swiperCarousel.value.realIndex - 1)
  if(swiperCarousel.value.realIndex === 0){
    firstElement.value = true
    lastElement.value = false
  }
}
</script>
<template>
  <section class="py-12 md:py-20 xl:py-[120px]">
    <div class="custom-container">
      <div class="flex justify-between items-end pb-[28px]">
        <div>
          <h2 class="text-[28px] md:text-[45px] xl:text-[57px] text-dark font-semibold leading-9 lg:leading-[64px]">{{ $t('n-got-featured') }}</h2>
        </div>
        <div>
          <div class="flex gap-6 lg:gap-8 items-center">
            <button @click="slidePrev" class="h-[46px] lg:h-[60px] w-[46px] lg:w-[60px] flex justify-center items-center border border-[#DBDBDB] rounded-full">
              <img :class="firstElement ? 'opacity-30' : 'opacity-100'" class="h-[20px] w-[21px]" src="~/assets/images/svg/arrow-prev.svg" alt="Previous Arrow">
            </button>
            <button @click="slideNext" class="h-[46px] lg:h-[60px] w-[46px] lg:w-[60px] flex justify-center items-center border border-[#DBDBDB] rounded-full">
              <img :class="lastElement ? 'opacity-30' : 'opacity-100'"  class="h-[20px] w-[21px]" src="~/assets/images/svg/arrow-next.svg" alt="Next Arrow">
            </button>
          </div>
        </div>
      </div>
    </div>
      <div class="full-width pl-4 md:pl-12 lg:pl-[60px] xl:pl-[100px] 2xl:pl-[200px]">
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
                    spaceBetween: 32
                  },
                  1441: {
                    slidesPerView: 3.3,
                    spaceBetween: 32
                  },
                }"
            :spaceBetween="30"
            :freeMode="true"
            :modules="modules"
            @swiper="onSwiper"
            class="mySwiper"
        >
          <swiper-slide v-for="slider in featureSlider" :key="slider.id" class="mt-8">
            <nuxt-link :to="slider.link" target="_blank" class="flex flex-col justify-between min-h-[500px] bg-[#FEF2F0] rounded-2xl py-6 px-6 feature-slider-card">
              <div>
                <div class="flex justify-center mb-4 slider-img">
                  <img class="rounded-2xl" :src="slider.img" alt="Feature Slider">
                </div>
                <h3 class="text-dark font-medium text-xl xl:text-2xl leading-7 xl:leading-8">{{ slider.title }}</h3>
              </div>
              <div>
                <div class="flex justify-between items-end">
                  <div>
                    <img class="mb-2 " :src="slider.logoImg" alt="Company Logo">
                    <p class="text-base leading-6 text-[#4D4D4F]">{{ slider.published }}</p>
                  </div>
                  <div class="hover-content">
                    <img src="~/assets/images/svg/arrow-next.svg" alt="Next Arrow">
                  </div>
                </div>
              </div>
            </nuxt-link>
          </swiper-slide>
        </swiper>
      </div>
  </section>
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
.hover-content{
  opacity: 0;
}
.feature-slider-card{
  transition: all 0.3s ease;
}
.feature-slider-card:hover{
  transform: translateY(-15px);
}
.feature-slider-card:hover .hover-content{
  opacity: 1;
  transition: all 0.3s ease;
}
</style>