<script setup>
import {onBeforeMount, onMounted, onUnmounted, ref} from 'vue'
const { locale } = useI18n();

const sliderItems = ref([
  {
    "id": 0,
    "message": "“Jatri's e-ticketing has helped us immensely to revolutionize  the bus industry.”",
    "bnMessage": "“গণপরিবহন খাতকে আরো উন্নত ও গতিশীল করতে যাত্রী'র 'ই-টিকিটিং' সিস্টেম ভীষণ কার্যকর ভূমিকা রাখছে।”",
    "img": "/images/enayet.jpg",
    "name": 'Khandaker Enayet Ullah',
    "bnName": 'খন্দকার এনায়েত উল্লাহ',
    "userType": "Secretary General (DSPMS)",
    "bnUserType": "সাধারণ সম্পাদক (ডি.এস.পি.এম.এস)",
    "bg": "#FEF2F0"
  },
  {
    "id": 1,
    "message": "“Jatri is the go-to rental solution for my family on vacations. Finding a trustworthy rental car within an hour definitely helps to speed up our plans!”",
    "bnMessage": "“ছুটিতে পরিবার নিয়ে ঘুরতে যেতে, যাত্রী হবে আপনার গাড়ি ভাড়া নেয়ার তাৎক্ষণিক সমাধান। আর বেস্ট প্রাইসে মুহূর্তের মধ্যেই গাড়ি পেয়ে যাওয়া, আমাদের ভ্রমণকে আরো আরামদায়ক ও নিরাপদ করে তোলে।”",
    "img": "/images/mitu.jpg",
    "name": "Israt Mitu",
    "bnName": 'ইসরাত মিতু',
    "userType": "User",
    "bnUserType": "সেবা গ্রাহক",
    "bg": "#EFF7FD"
  },
  {
    "id": 2,
    "message": "“I really appreciate the expansion opportunity Jatri has provided for my rental car service. I've managed to organically boost my income and grow my rental business.”",
    "bnMessage": "“রেন্ট-এ-কার ব্যবসায়ের পরিধি বাড়ানোর জন্য \"যাত্রী পার্টনার\" অ্যাপের মাধ্যমে রেন্ট-এ-কার ব্যবসা আগের চেয়ে আরো অনেক ভালোভাবে পরিচালনা করতে পারছি। যাত্রীকে ধন্যবাদ জানাতে চাই, এমন সুযোগ করে দেয়ার জন্য।”",
    "img": "/images/jakir.jpg",
    "name": "Jakir Hossain",
    "bnName": 'জাকির হোসেইন',
    "userType": "Rental Partner",
    "bnUserType": "রেন্টাল পার্টনার",
    "bg": "#F1F9F1"
  }
])
const tempSliderItems = ref([])
onBeforeMount(() => tempSliderItems.value = [...sliderItems.value])
const currentSlide = ref({})
const autoSlideInterVal = ref(null)
// const sliderInterval = ref(null)
// const activeProgress = ref(0)

const nextSlide = () => {
  clearInterval(autoSlideInterVal.value)
  if (tempSliderItems.value.length > 0) {
    currentSlide.value = tempSliderItems.value[0].id
    tempSliderItems.value.shift();
  }
  if (tempSliderItems.value.length === 0) {
    tempSliderItems.value = [...sliderItems.value]
    currentSlide.value = 0;
  }
  startInterval()
}

const prevSlide = () => {
  // clearInterval(sliderInterval.value)
  clearInterval(autoSlideInterVal.value)
  const imidiatePrev = sliderItems.value.find(s => s.id === tempSliderItems.value[0].id - 1);
  tempSliderItems.value = [imidiatePrev, ...tempSliderItems.value]
  currentSlide.value = tempSliderItems.value[0].id
  startInterval()
}

const startInterval = () => {
  autoSlideInterVal.value = setInterval(() => {
    nextSlide()
  }, 3000)
}

onMounted(() => {
  startInterval()

  window.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState === "visible") {
      console.log("Active", autoSlideInterVal.value)
      startInterval()
    } else {
      console.log("InActive", autoSlideInterVal.value)
      clearInterval(autoSlideInterVal.value)
    }
  });
})
onUnmounted(() => clearInterval(autoSlideInterVal.value))
</script>

<template>
    <section class="mt-48 mb-12 md:my-20 xl:my-[120px] sm:pt-36 lg:pt-[210px] pl-4 md:pl-[50px] lg:pl-[60px] xl:pl-[100px] 2xl:pl-[200px] flex justify-between flex-wrap lg:flex-nowrap gap-8 xl:gap-12">
        <div class="w-full lg:w-2/5 pr-4 lg:pr-0 flex lg:flex-col gap-5 justify-between lg:justify-center">
            <h4 class="primary-heading">{{ $t('n-testimonial-title') }}</h4>
            <div class="flex items-center gap-4 xl:gap-6">
              <button
                  v-if="tempSliderItems.length === sliderItems.length"
                  class="rounded-full border border-[#DBDBDB] w-[46px] lg:w-[60px] h-[46px] lg:h-[60px] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" class="w-4 lg:w-[22px] transform rotate-0">
                  <path d="M5.43734 9.66673H21.6667V12.3334H5.43734L12.5893 19.4854L10.704 21.3707L0.333336 11.0001L10.704 0.629395L12.5893 2.51473L5.43734 9.66673Z" fill="#8D8D8F"/>
                </svg>
              </button>
                <button
                    v-else
                    @click="prevSlide()"
                    style="transform: rotate(180deg)"
                    class="rounded-full border border-[#DBDBDB] w-[46px] lg:w-[60px] h-[46px] lg:h-[60px] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" class="w-4 lg:w-[22px] transform rotate-180">
                      <path d="M5.43734 9.66673H21.6667V12.3334H5.43734L12.5893 19.4854L10.704 21.3707L0.333336 11.0001L10.704 0.629395L12.5893 2.51473L5.43734 9.66673Z" fill="#151414"/>
                    </svg>
                </button>

                <button
                    @click="nextSlide()" class="rounded-full border border-[#DBDBDB] w-[46px] lg:w-[60px] h-[46px] lg:h-[60px] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" class="w-4 lg:w-[22px] transform rotate-180">
                        <path d="M5.43734 9.66673H21.6667V12.3334H5.43734L12.5893 19.4854L10.704 21.3707L0.333336 11.0001L10.704 0.629395L12.5893 2.51473L5.43734 9.66673Z" fill="#151414"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="w-full lg:w-3/5 overflow-x-hidden flex gap-6 xl:gap-10">
            <div class="w-full flex gap-6 xl:gap-10">
              <transition-group name="slide">
                <div
                    v-for="(item, index) in tempSliderItems" :key="item.id"
                    class="testimonial-slider-item"
                    :style="{'background-color': item.bg}">
                    <div>
                        <div class="h-24 w-24">
                          <img :src="item.img" :alt="item.name" class="h-full w-full object-cover rounded-full">
                        </div>
                        <p class="mt-6 xl:mt-8 text-xl xl:text-2xl font-semibold text-secondaryDark">
                          {{locale === 'bn' ? item.bnMessage : item.message}}
                        </p>
                    </div>
                    <div>
                        <h5 class="text-base font-semibold capitalize">{{locale === 'bn' ? item.bnName : item.name}}</h5>
                        <p class="text-sm text-secondaryDark mt-1 capitalize">{{locale === 'bn' ? item.bnUserType : item.userType}}</p>
                    </div>
                </div>
              </transition-group>
            </div>
        </div>
    </section>
</template>

<style scoped>
.testimonial-slider-item {
  @apply w-[348px] lg:w-[400px] rounded-3xl p-6 xl:p-8 flex flex-col justify-between flex-shrink-0 gap-8 xl:gap-10
}

.slide-enter {
  opacity: 0;
}

.slide-move {
  transition: transform 1s;
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
  /*transition: opacity 0.5s;*/
}

.slide-leave-active {
  position: absolute;
  /*width: 100%;*/
  animation: slide-out 0.5s ease-out forwards;
  transition: opacity 0.5s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    opacity: 50%;
    transform: translateX(100px) scale(0.5);
  }
  80%  {
    opacity: 90%;
  }
  to {
    opacity: 100%;
    transform: scale(1);
  }
}

@keyframes slide-out {
  from {
    transform: scale(1);
    opacity: 80%;

  }
  /*25%  {*/
  /*  transform: scale(.95);*/
  /*  opacity: 80%;*/
  /*}*/
  /*50%  {*/
  /*  transform: scale(.8);*/
  /*  opacity: 60%;*/
  /*}*/
  /*75%  {*/
  /*  transform: scale(.7);*/
  /*  opacity: 50%;*/
  /*}*/
  to {
    opacity: 50%;
    transform: scale(.8);
  }
}
</style>