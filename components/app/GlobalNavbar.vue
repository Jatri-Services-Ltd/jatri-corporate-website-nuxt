<script setup>
import {onMounted, ref} from "vue";
const sidebarOpen = ref(false)

const closeModal = ()=>{
  let getBody = document.getElementsByTagName('body')[0];
  sidebarOpen.value = false
  getBody.style.overflow = 'auto';
}
const toggleModal = () => {
  sidebarOpen.value = true;
  let getBody = document.getElementsByTagName('body')[0];
  if(sidebarOpen.value) {
    getBody.style.overflow = 'hidden';
  }
}
const route = useRoute();
const languageSwitcher = ref(false)
const routesToHideSwitcher = 'career/job-details';
const langSwitcherShow = computed( () => route.path.includes(routesToHideSwitcher))
const isOpen = ref(false);
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

let isMobile = ref(false)
const getWindowSize = () => {
  isMobile.value = window.outerWidth <= 767
}

onMounted(() => {
  window.addEventListener("resize", getWindowSize)
  getWindowSize()
})

// const selectLanguage = (lang) => {
//   selectedLanguage.value = lang;
//   isOpen.value = false;
// };
</script>

<template>
  <div class="sticky top-0 left-0 z-[999] w-full bg-white border-b border-lightGrey">
      <div class="custom-container">
        <div class="flex justify-between items-center py-[14px] lg:py-4">
            <div class="flex justify-between md:justify-start items-center gap-x-2 md:gap-x-8 w-full">
              <nuxt-link :to="localePath('/')"><img class="w-[50px] h-[26px] lg:h-9 lg:w-[74px]" src="~/assets/images/header/jatri-logo.svg" alt="jatri logo"></nuxt-link>
              <div class="bg-[#FEF2F0] rounded-full p-1">
                <div class="flex gap-x-1 lg:gap-x-2 justify-center items-center">
                    <div class="py-1 px-2 lg:px-3 rounded-full">
                      <a href="https://rental.jatri.co/" class="linkItem"><img class="w-3 lg:w-5" src="~/assets/images/header/car-svg.svg" alt="">
                      <span class="text-sm lg:text-base text-dark">{{ $t('n-rental') }}</span>
                      </a>
                    </div>
                    <div class="py-1 px-2 lg:px-3 rounded-full">
                      <a href="https://ticket.jatri.co/" class="linkItem"><img class="w-3 lg:w-5" src="~/assets/images/header/bus_2.svg" alt="">
                        <span class="text-sm lg:text-base text-dark">{{ $t('n-bus') }}</span>
                      </a>
                    </div>
                  <div class="py-1 px-2 lg:px-3 rounded-full">
                    <a href="https://ticket.jatri.co/launch" class="linkItem"><img class="w-3 lg:w-5" src="~/assets/images/header/Ship.svg" alt="">
                      <span class="text-sm lg:text-base text-dark">{{ $t('n-launch') }}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          <div :class="[langSwitcherShow ? 'hidden' : 'md:block', isMobile ? 'hidden' : '']"  class="relative inline-block text-left">
            <div>
              <button
                  @click="isOpen = !isOpen"
                  type="button"
                  class="w-full flex justify-between items-center gap-1 text-base font-medium focus:outline-none bg-[#F7F7F7] px-3 py-2 rounded-full"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
              >
                <div class="flex items-center gap-1">
                  <p class="text-dark text-xs font-medium">{{ locale === "bn" ? "BN" : "EN" }}</p>
                </div>
                <img src="~/assets/images/header/black_arrow.png" alt="arrow" class="transition h-4 w-4" :class="isOpen ? 'transform rotate-180' : 'transform rotate-0'" />
              </button>
            </div>

            <div
                class="mt-[18px] divide-y divide-lightGrey absolute right-1 z-50 w-[120px] origin-top-right rounded bg-white focus:outline-none drop-shadow-[0px_3px_18px_rgba(50,50,50,0.24)]"
                v-if="isOpen"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
            >
              <nuxt-link :to="switchLocalePath('en')" @click="isOpen = !isOpen" class="block pl-2 pr-2.5 py-2.5">
                <div class="transition ease-out duration-200 cursor-pointer flex items-center justify-between" role="none">
                  <p class="text-dark text-xs font-medium">English</p>
                  <img src="~/assets/images/header/check.png" alt="check icon" class="transition w-4" :class="locale === 'en' ? 'opacity-100' : 'opacity-0'" />
                </div>
              </nuxt-link>
              <nuxt-link :to="switchLocalePath('bn')" @click="isOpen = !isOpen" class="block pl-2 pr-2.5 py-2.5">
                <div class="transition ease-out duration-200 cursor-pointer flex items-center justify-between" role="none">
                  <p class="text-dark text-xs font-medium">বাংলা</p>
                  <img src="~/assets/images/header/check.png" alt="check icon" class="transition w-4" :class="locale === 'bn' ? 'opacity-100' : 'opacity-0'" />
                </div>
              </nuxt-link>
            </div>
          </div>

          <div class="flex items-center md:hidden ml-4">
            <button @click="toggleModal"><img class="w-6 h-6" src="~/assets/images/header/3bar-icon.svg" alt=""></button>
          </div>
          <div v-if="sidebarOpen" class="bg-white absolute inset-y-0 right-0 -translate-x-[300px] slide" :class="sidebarOpen ? 'absolute  z-50 translate-x-0 transition delay-300 duration-300' : ''">
            <div class="h-screen w-[300px] bg-white gap-y-10">
              <div class="flex justify-between items-center border-b border-lightGrey px-4 py-5">
                <p class="font-medium text-xl text-dark capitalize">{{ $t('n-menu') }}</p>
                <button @click="closeModal" class=""><img src="~/assets/images/header/cross-icon.svg" alt="X"></button>
              </div>
              <div class="p-4 divide-y divide-lightGrey space-y-4">
                <nuxt-link :to="switchLocalePath('en')" @click="isOpen = !isOpen" class="block">
                  <div class="transition ease-out duration-200 cursor-pointer flex items-center justify-between" role="none">
                    <div class="flex items-center gap-2">
                      <img src="~/assets/images/header/globe.png" alt="Globe icon"/>
                      <p class="text-dark text-base font-medium">English</p>
                    </div>
                    <img src="~/assets/images/header/check.png" alt="check icon" class="transition" :class="locale === 'en' ? 'opacity-100' : 'opacity-0'" />
                  </div>
                </nuxt-link>
                <nuxt-link v-show="!langSwitcherShow" :to="switchLocalePath('bn')" @click="isOpen = !isOpen" class="block pt-4">
                  <div class="transition ease-out duration-200 cursor-pointer flex items-center justify-between" role="none">
                    <div class="flex items-center gap-2">
                      <img src="~/assets/images/header/globe.png" alt="Globe icon"/>
                      <p class="text-dark text-base font-medium">বাংলা</p>
                    </div>
                    <img src="~/assets/images/header/check.png" alt="check icon" class="transition" :class="locale === 'bn' ? 'opacity-100' : 'opacity-0'" />
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div v-if="sidebarOpen" @click="closeModal" class="fixed inset-0 z-30 bg-black bg-opacity-30 h-full w-full cursor-default transition duration-300 ease-in-out"></div>
          <div v-if="isOpen && !isMobile" @click="isOpen = false" class="fixed inset-0 z-30 h-full w-full cursor-default transition duration-300 ease-in-out"></div>
        </div>

      </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Inter', sans-serif !important;
}

.linkItem{
  @apply flex justify-center items-center gap-x-1 lg:gap-x-2 text-xs lg:text-base font-normal
}
.slide {
  @apply absolute animate-[slide_0.5s_forwards] -right-2/4;
}
@keyframes slide {
  100% {
    right: 0;
  }
}
</style>