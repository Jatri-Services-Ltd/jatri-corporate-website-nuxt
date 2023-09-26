<script setup>
import {ref} from "vue";
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

const isOpen = ref(false);
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

// const selectLanguage = (lang) => {
//   selectedLanguage.value = lang;
//   isOpen.value = false;
// };
</script>

<template>
  <div class="sticky top-0 left-0 z-[999] w-full bg-white border-b border-[#EDEDED]">
      <div class="custom-container">
        <div class="flex justify-between items-center py-3">
            <div class="flex justify-between md:justify-start items-center gap-x-2 md:gap-x-8 w-full">
              <nuxt-link :to="('/')"><img class="min-w-[50px] h-[26px] lg:h-9 lg:w-[74px]" src="~/assets/images/header/jatri-logo.svg" alt="jatri logo"></nuxt-link>
                  <div class="bg-[#FEF2F0] rounded-full px-1 lg:px-3 py-1">
                      <div class="flex gap-x-2 justify-center items-center">
                            <div class="px-2 lg:px-3 py-2 lg:py-1 rounded-full">
<!--                              if you need active menu use invert in img class and use activeMenu class in parent div-->
                              <a href="https://rental.jatri.co/" class="linkItem"><img class="w-3 lg:w-5" src="~/assets/images/header/car-svg.svg" alt="">{{ $t('n-rental') }}</a>
                            </div>
                          <div class="px-2 lg:px-3 py-2 lg:py-1 rounded-full">
                            <a href="https://ticket.jatri.co/" class="linkItem"><img class="w-3 lg:w-5" src="~/assets/images/header/bus_2.svg" alt="">{{ $t('n-bus') }}</a>
                          </div>
                        <div class="px-2 lg:px-3 py-2 lg:py-1 rounded-full">
                          <a href="https://ticket.jatri.co/launch" class="linkItem"><img class="w-3 lg:w-5" src="~/assets/images/header/Ship.svg" alt="">{{ $t('n-launch') }}</a>
                        </div>
                      </div>
                  </div>
            </div>
          <div class="hidden md:block relative inline-block text-left">
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
                  <p class="text-xs font-medium">{{ locale === "bn" ? "BN" : "EN" }}</p>
                </div>
                <img src="~/assets/images/header/black_arrow.png" alt="arrow" class="transition h-4 w-4" :class="isOpen ? 'transform rotate-180' : 'transform rotate-0'" />
              </button>
            </div>

            <div
                class="mt-[18px] divide-y divide-[#EDEDED] absolute right-1 z-50 w-[120px] origin-top-right rounded bg-white focus:outline-none drop-shadow-[0px_3px_18px_rgba(50,50,50,0.24)]"
                v-if="isOpen"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
            >
              <nuxt-link :to="switchLocalePath('en')" @click="isOpen = !isOpen" class="block pl-2 pr-2.5 py-2.5">
                <div class="transition ease-out duration-200 cursor-pointer flex items-center justify-between" role="none">
                  <p class="text-dark text-sm font-medium">English</p>
                  <img src="~/assets/images/header/check.png" alt="check icon" class="transition" :class="locale === 'en' ? 'opacity-100' : 'opacity-0'" />
                </div>
              </nuxt-link>
              <nuxt-link :to="switchLocalePath('bn')" @click="isOpen = !isOpen" class="block pl-2 pr-2.5 py-2.5">
                <div class="transition ease-out duration-200 cursor-pointer flex items-center justify-between" role="none">
                  <p class="text-dark text-sm font-medium">বাংলা</p>
                  <img src="~/assets/images/header/check.png" alt="check icon" class="transition" :class="locale === 'bn' ? 'opacity-100' : 'opacity-0'" />
                </div>
              </nuxt-link>
            </div>

          </div>
          <div class="flex gap-x-4 md:hidden py-4 ml-2">
            <button @click="toggleModal"><img class="w-6 h-6" src="~/assets/images/header/3bar-icon.svg" alt=""></button>
          </div>
          <div v-if="sidebarOpen" class="bg-white absolute inset-y-0 right-0 -translate-x-[300px] slide" :class="sidebarOpen ? 'absolute  z-50 translate-x-0 transition delay-300 duration-300' : ''">
            <div class="h-screen w-[300px] bg-white gap-y-10">
              <div class="flex justify-between items-center border-b border-[#EDEDED] px-4 py-5">
                <p class="font-medium text-xl text-dark capitalize">{{ $t('n-menu') }}</p>
                <button @click="closeModal" class=""><img src="~/assets/images/header/cross-icon.svg" alt="X"></button>
              </div>
              <div class="p-4 divide-y divide-[#EDEDED] space-y-4">
                <nuxt-link :to="switchLocalePath('en')" @click="isOpen = !isOpen" class="block">
                  <div class="transition ease-out duration-200 cursor-pointer flex items-center justify-between" role="none">
                    <div class="flex items-center gap-2">
                      <img src="~/assets/images/header/globe.png" alt="Globe icon"/>
                      <p class="text-dark text-base font-medium">English</p>
                    </div>
                    <img src="~/assets/images/header/check.png" alt="check icon" class="transition" :class="locale === 'en' ? 'opacity-100' : 'opacity-0'" />
                  </div>
                </nuxt-link>
                <nuxt-link :to="switchLocalePath('bn')" @click="isOpen = !isOpen" class="block pt-4">
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
          <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 z-30 h-full w-full cursor-default transition duration-300 ease-in-out"></div>
        </div>

      </div>
  </div>
</template>

<style>
.linkItem{
  @apply flex justify-center items-center gap-x-2 text-xs lg:text-lg font-medium
}
.slide {
  @apply absolute animate-[slide_0.5s_forwards] -right-2/4;
}
.active-menu::after {
  @apply absolute content-[""] w-full h-1 bg-[#151414] transition-all duration-[0.5s] ease-[ease] left-0 -bottom-2;
}
.activeMenu{
   @apply bg-[#f04935] text-white
}
@keyframes slide {
  100% {
    right: 0;
  }
}

@media only screen and (max-width: 1023px) {
  .active-menu::after {
    @apply bottom-0 h-[1px];
  }
}
</style>