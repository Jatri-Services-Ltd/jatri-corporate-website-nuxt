<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper';
import { ref } from 'vue';
const modules = [Navigation, FreeMode];

const featureSlider = ref([
  {
    id: 1,
    img:'/images/home/nikkei-asia-img.png',
    title:'Bangladesh-based public transportation platform Jatri has raised fresh funds in a...',
    logoImg: '/images/home/nikkei-asia-logo.png',
    published: 'Published in Nikkei Asia',
    link: 'https://asia.nikkei.com/Spotlight/DealStreetAsia/Bangladesh-transport-startup-Jatri-obtains-Series-A-funding'
  },
  {
    id: 2,
    img:'/images/home/daily-star-img.png',
    title:'Jatri, a transportation and mobility startup based in Bangladesh, has announced...',
    logoImg: '/images/home/daily-star-logo.png',
    published: 'Published in The Daily Star',
    link: 'https://www.thedailystar.net/business/economy/news/jatri-raises-series-round-led-sbk-tech-3298666'
  },
  {
    id: 3,
    img:'/images/home/prothom-alo-img.png',
    title:'গণপরিবহন খাতের মানোন্নয়নে কাজ করার জন্য প্রযুক্তিভিত্তিক উদ্ভাবনী উদ্যোগ (স্টার্টআপ) ‘যাত্রী’ এ পর্যন্ত...',
    logoImg: '/images/home/prothom-alo-logo.png',
    published: 'Published in Pratham Alo',
    link: 'https://www.prothomalo.com/technology/4v8vifykdh'
  },
  {
    id: 4,
    img:'/images/home/daily-star-img-2.png',
    title:'Bus owners association announce Jatri as Dhaka’s e-ticketing partner',
    logoImg: '/images/home/daily-star-logo.png',
    published: 'Published in The Daily Star',
    link: 'https://www.thedailystar.net/business/news/bus-owners-announce-jatri-dhakas-e-ticketing-partner-3170171'
  }
]);

</script>

<template>
  <section class="custom-swiper-slider relative overflow-hidden py-12 md:py-20 xl:py-[120px]">
    <div class="custom-container">
      <div class="flex justify-between items-end pb-0 md:pb-[28px]">
        <div>
          <h2 class="text-[28px] lg:text-[57px] text-dark font-semibold leading-9 lg:leading-[64px] pr-[200px] md:pr-0">{{ $t('n-got-featured') }}</h2>
        </div>
      </div>
    </div>
    <div class="full-width pl-4 md:pl-12 lg:pl-[60px] xl:pl-[100px] 2xl:pl-[200px]">
      <swiper
          :breakpoints="{
                  320: {
                    slidesPerView: 1.1,
                    spaceBetween: 15
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
                    spaceBetween: 20
                  },
                  1441: {
                    slidesPerView: 3.3,
                    spaceBetween: 32
                  },
                }"
          :navigation="true"
          :spaceBetween="30"
          :freeMode="true"
          :modules="modules"
          class="mySwiper"
      >
        <swiper-slide v-for="slider in featureSlider" :key="slider.id" class="mt-5 sm:mt-8">
          <nuxt-link :to="slider.link" target="_blank" class="flex flex-col justify-between min-h-[500px] bg-[#FEF2F0] rounded-2xl py-6 px-6 feature-slider-card h-full">
            <div>
              <div class="mb-4 slider-img">
                <img class="rounded-2xl" :src="slider.img" alt="Feature Slider">
              </div>
              <h3 class="text-dark font-medium text-xl xl:text-2xl leading-7 xl:leading-8">{{ slider.title }}</h3>
            </div>
            <div class="mt-12">
              <div class="flex justify-between items-end">
                <div>
                  <img class="mb-2 " :src="slider.logoImg" alt="Company Logo">
                  <p class="text-base leading-6 text-[#4D4D4F]">{{ slider.published }}</p>
                </div>
                <div class="hover-content">
                  <img src="~/assets/images/home/arrow-next.svg" alt="Next Arrow">
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
.slider-img img {
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