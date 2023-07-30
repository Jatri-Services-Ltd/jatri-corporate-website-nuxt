<template>
    <div class="py-20 custom-container mx-auto">
        <div class="angry-grid">
          <div id="item-0" class="pr-10 xl:pr-14">
            <img src="/images/blog/blog-1.jpg" alt="Jatri Blog" class="rounded-xl w-full mb-5">
            <nuxt-link to="#" class="text-[32px] leading-10 font-medium mb-2">Rediscovering the beauty of Bangladesh: A one day trip</nuxt-link>
            <p class="text-base text-[#676769]">Author name / 12 Feb 2023</p>
          </div>
          <div id="item-1">
            <swiper
                    :breakpoints="{
                        320: {
                        slidesPerView: 1.2,
                        spaceBetween: 10
                        },
                        640: {
                        slidesPerView: 1,
                        spaceBetween: 10
                        }
                    }"
                    :freeMode="true"
                    :autoplay="{
                            delay: 3500,
                            disableOnInteraction: false,
                            }"  
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide v-for="slider in sliderData" :key="slider.id">
                    <nuxt-link to="#" class="bg-white rounded-2xl h-full">
                        <img class="rounded-2xl w-full" :src="slider.img" alt="Blog Slider">
                    </nuxt-link>
                    </swiper-slide>
                    </swiper>
          </div>
          <div id="item-2">
            <div class="flex gap-6 w-full mt-6">
                    <img class="h-[100px] w-[100px] object-cover rounded-md" src="/images/blog/blog-2.jpg" alt="Jatri Blog">
                    <div class="">
                        <nuxt-link to="#" class="text-2xl font-medium">Rediscovering the beauty of Bangladesh: A one day trip</nuxt-link>
                        <p class="text-sm text-[#676769]">Author name / 12 Feb 2023</p>
                    </div>
                </div>
                <div class="flex gap-6 mt-6">
                    <img class="h-[100px] w-[100px] object-cover rounded-md" src="/images/blog/blog-2.jpg" alt="Jatri Blog">
                    <div class="">
                        <nuxt-link to="#" class="text-2xl font-medium">Rediscovering the beauty of Bangladesh: A one day trip</nuxt-link>
                        <p class="text-sm text-[#676769]">Author name / 12 Feb 2023</p>
                    </div>
                </div>
                <div class="flex gap-6 mt-6">
                    <img class="h-[100px] w-[100px] object-cover rounded-md" src="/images/blog/blog-3.jpg" alt="Jatri Blog">
                    <div class="">
                        <nuxt-link to="#" class="text-2xl font-medium">Rediscovering the beauty of Bangladesh: A one day trip</nuxt-link>
                        <p class="text-sm text-[#676769]">Author name / 12 Feb 2023</p>
                    </div>
                </div>
          </div>
        </div>
        

        <!-- ------------------------ -->
        <div class="grid grid-cols-12 gap-14">
            <div class="col-span-12 md:col-span-7 order-2 md:order-1">
                <img src="/images/blog/blog-1.jpg" alt="Jatri Blog" class="rounded-xl w-full mb-5">
                <nuxt-link to="#" class="text-[32px] leading-10 font-medium mb-2">Rediscovering the beauty of Bangladesh: A one day trip</nuxt-link>
                <p class="text-base text-[#676769]">Author name / 12 Feb 2023</p>
            </div>
            <div class="col-span-12 md:col-span-5 order-1 md:order-2">
                <div>
                    <swiper
                    :breakpoints="{
                        320: {
                        slidesPerView: 1.2,
                        spaceBetween: 10
                        },
                        640: {
                        slidesPerView: 1,
                        spaceBetween: 10
                        }
                    }"
                    :freeMode="true"
                    :autoplay="{
                            delay: 3500,
                            disableOnInteraction: false,
                            }"  
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide v-for="slider in sliderData" :key="slider.id">
                    <nuxt-link to="#" class="bg-white rounded-2xl h-full">
                        <div class="mb-4">
                            <img class="rounded-2xl w-full" :src="slider.img" alt="Blog Slider">
                        </div>
                    </nuxt-link>
                    </swiper-slide>
                    </swiper>
                </div>
                <div class="flex gap-6 mt-6">
                    <img class="h-[100px] w-[100px] object-cover rounded-md" src="/images/blog/blog-2.jpg" alt="Jatri Blog">
                    <div class="">
                        <nuxt-link to="#" class="text-2xl font-medium">Rediscovering the beauty of Bangladesh: A one day trip</nuxt-link>
                        <p class="text-sm text-[#676769]">Author name / 12 Feb 2023</p>
                    </div>
                </div>
                <div class="flex gap-6 mt-6">
                    <img class="h-[100px] w-[100px] object-cover rounded-md" src="/images/blog/blog-2.jpg" alt="Jatri Blog">
                    <div class="">
                        <nuxt-link to="#" class="text-2xl font-medium">Rediscovering the beauty of Bangladesh: A one day trip</nuxt-link>
                        <p class="text-sm text-[#676769]">Author name / 12 Feb 2023</p>
                    </div>
                </div>
                <div class="flex gap-6 mt-6">
                    <img class="h-[100px] w-[100px] object-cover rounded-md" src="/images/blog/blog-3.jpg" alt="Jatri Blog">
                    <div class="">
                        <nuxt-link to="#" class="text-2xl font-medium">Rediscovering the beauty of Bangladesh: A one day trip</nuxt-link>
                        <p class="text-sm text-[#676769]">Author name / 12 Feb 2023</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { FreeMode, Autoplay } from 'swiper';
const modules = [FreeMode, Autoplay];

const sliderData = ref([
    {
        id: 1,
        img: '/images/blog/blog-slider-1.jpg'
    },
    {
        id: 2,
        img: '/images/blog/blog-slider-2.jpg'
    },
    {
        id: 3,
        img: '/images/blog/blog-slider-1.jpg'
    },
    {
        id: 4,
        img: '/images/blog/blog-slider-2.jpg'
    }
])
</script>
<style>
.angry-grid {
           display: grid; 
           grid-template-rows: 1fr 1fr 1fr;
           grid-template-columns: 1fr 1fr 0.8fr 1fr 1fr;
           height: 100%;
        }
          
#item-0 { 
    grid-row: 1/3;
    grid-column: 1/4;
}
#item-1 {
    grid-row: 1/2;
    grid-column: 4/6;
    align-content: start;
}
#item-2 { 
    grid-row: 2/4;
    grid-column: 4/6;
}

@media(max-width:1034px){
    .angry-grid {
           grid-template-rows: 0.6fr 1fr 1fr;
           grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
}
@media(max-width:767px){
    .angry-grid {
           grid-template-rows: 0.5fr 1fr 1fr;
           grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
           height: 100%;
        }
#item-0 {
    grid-row: 2/3;
    grid-column: 1/6;
}
#item-1 {
    grid-row: 1;
    grid-column: 1/6;
    align-self: start;
}
#item-2 {
    grid-row: 3/4;
    grid-column: 1/6;
}
}

</style>