<template>
  <nav class="custom-container">
    <div class="flex items-center justify-between">
      <nuxt-link :to="localePath('/')" class="lg:hidden"><img class="h-8 w-16" src="~/assets/images/header/jatri-logo.svg" alt="jatri logo"></nuxt-link>

      <div class="hidden lg:flex gap-x-6 lg:gap-x-12 py-5">
        <nuxt-link :to="localePath('/')"><img class="h-10 w-[81px]" src="~/assets/images/header/jatri-logo.svg" alt="jatri logo"></nuxt-link>
        <div class="hidden md:flex gap-x-6 lg-gap-x-8 xl:gap-x-10 items-center w-full">
          <nuxt-link :to="localePath('/')" class="text-[16px] leading-6 font-medium text-black inline-block text-center relative" active-class="active-menu">{{ $t('n-home') }}</nuxt-link>
          <nuxt-link :to="localePath('/about-us')" class="text-[16px] leading-6 font-medium text-black text-center inline-block relative" active-class="active-menu">{{ $t('n-about-us') }}</nuxt-link>
          <nuxt-link :to="localePath('/career')" class="text-[16px] leading-6 font-medium text-black text-center inline-block relative" active-class="active-menu">{{ $t('n-career') }}</nuxt-link>
          <nuxt-link :to="localePath('/blog')" class="text-[16px] leading-6 font-medium text-black text-center inline-block relative" active-class="active-menu">{{ $t('n-blogs') }}</nuxt-link>
          <nuxt-link :to="localePath('/contact-us')" class="text-[16px] leading-6 font-medium text-black text-center inline-block relative" active-class="active-menu">{{ $t('n-contact-us') }}</nuxt-link>
        </div>
      </div>


      <div class="hidden lg:flex gap-x-2 lg:gap-x-6 items-center">
        <div class="relative inline-block z-50 text-left min-w-[80px]">
          <div>
            <button
                @click="isOpen = !isOpen"
                type="button"
                class="flex items-center gap-2 text-sm font-medium focus:outline-none"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
            >
              <span>{{ locale === "bn" ? "বাংলা" : "English" }}</span>
              <div><img src="~/assets/images/header/bottom-arrow.svg" alt="" /></div>
            </button>
          </div>
          <div
              v-if="isOpen"
              class="absolute left-0 z-10 min-w-[120px] origin-top-right rounded-md bg-white focus:outline-none dropdown-box custom-shadow mt-6"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
          >
            <nuxt-link :to="switchLocalePath('en')" @click="isOpen = !isOpen">
              <div
                  class="text-gray-500 px-3 transition ease-out duration-200 cursor-pointer"
                  role="none"
              >
        <span class="tracking-widest border-b my-2 block py-2 text-sm capitalize"
        >English</span
        >
              </div>
            </nuxt-link>
            <nuxt-link :to="switchLocalePath('bn')" @click="isOpen = !isOpen">
              <div
                  class="text-gray-500 px-3 transition ease-out duration-200 cursor-pointer"
                  role="none"
              >
        <span class="tracking-widest my-2 block py-2 text-sm capitalize"
        >বাংলা</span
        >
              </div>
            </nuxt-link>
          </div>
        </div>
        <a href="https://rental.jatri.co/" target="_blank" class="flex gap-x-2 items-center text-[16px] leading-6 font-medium rounded-full border border-[#EDEDED] px-4 py-2 lg:py-3 capitalize"><img src="~/assets/images/header/car-svg.svg" alt="">{{ $t('n-rental') }}</a>
        <a href="https://ticket.jatri.co/" target="_blank" class="bg-corporate text-white flex gap-x-2 items-center text-[16px] leading-6 font-medium rounded-full border border-[#EDEDED] pl-4 pr-6 py-2 lg:py-3 capitalize"><img src="~/assets/images/header/ticket.svg" alt="">{{ $t('n-ticket') }}</a>
      </div>

      <div class="flex gap-x-4 lg:hidden py-4">
        <a href="https://rental.jatri.co/" target="_blank" class="flex gap-x-2 justify-center items-center text-xs leading-6 font-medium rounded-full border border-[#EDEDED] px-4 py-3 w-[100px] h-9 capitalize"><img src="~/assets/images/header/car-svg.svg" alt="">{{ $t('n-rental') }}</a>
        <a href="https://ticket.jatri.co/" target="_blank" class="bg-corporate text-white flex justify-center gap-x-2 items-center text-xs leading-6 font-medium rounded-full border border-[#EDEDED] w-[100px] h-9 capitalize"><img src="~/assets/images/header/ticket.svg" alt="">{{ $t('n-ticket') }}</a>
        <button @click="toggleModal"><img src="~/assets/images/header/3bar-icon.svg" alt=""></button>
      </div>


      <!--      mobile menu item-->
      <div v-if="sidebarOpen" class="bg-white absolute inset-y-0 right-0 -translate-x-[300px] slide" :class="sidebarOpen ? 'absolute  z-50 translate-x-0 transition delay-300 duration-300' : ''">
        <div class="h-screen w-[300px] gap-y-10">
          <div class="flex justify-between items-center border-b border-[#EDEDED] p-5">
            <p class="font-medium text-sm text-black uppercase">{{ $t('n-menu') }}</p>
            <button @click="closeModal" class=""><img src="~/assets/images/header/cross-icon.svg" alt=""></button>
          </div>
          <div class="flex flex-col px-2">
            <nuxt-link :to="localePath('/')" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] p-4" active-class="active-menu" @click="sidebarOpen = false">{{ $t('n-home') }}</nuxt-link>
            <nuxt-link :to="localePath('/about-us')" @click="sidebarOpen = false" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] p-4">{{ $t('n-about-us') }}</nuxt-link>
            <nuxt-link :to="localePath('/career')" @click="sidebarOpen = false" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] p-4">{{ $t('n-career')}}</nuxt-link>
            <nuxt-link :to="localePath('/blog')" @click="sidebarOpen = false" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] p-4">{{ $t('n-blogs') }}</nuxt-link>
            <nuxt-link :to="localePath('/contact-us')" @click="sidebarOpen = false" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] p-4">{{ $t('n-contact-us') }}</nuxt-link>
            <div class="p-4 relative inline-block text-left min-w-[80px]">
              <div>
                <button
                    @click="isOpen = !isOpen"
                    type="button"
                    class="flex items-center gap-2 text-sm font-medium focus:outline-none"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                >
                  <span>{{ locale === "bn" ? "বাংলা" : "English" }}</span>
                  <div><img src="~/assets/images/header/bottom-arrow.svg" alt="" /></div>
                </button>
              </div>
              <div
                  v-if="isOpen"
                  class="absolute left-0 z-10 min-w-[120px] origin-top-right rounded-md bg-white focus:outline-none dropdown-box custom-shadow mt-6"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
              >
                <nuxt-link :to="switchLocalePath('en')" @click="isOpen = !isOpen">
                  <div
                      class="text-gray-500 px-3 transition ease-out duration-200 cursor-pointer"
                      role="none"
                  >
        <span class="tracking-widest border-b my-2 block py-2 text-sm capitalize"
        >English</span
        >
                  </div>
                </nuxt-link>
                <nuxt-link :to="switchLocalePath('bn')" @click="isOpen = !isOpen">
                  <div
                      class="text-gray-500 px-3 transition ease-out duration-200 cursor-pointer"
                      role="none"
                  >
        <span class="tracking-widest my-2 block py-2 text-sm capitalize"
        >বাংলা</span
        >
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="sidebarOpen" @click="closeModal" class="fixed inset-0 z-30 bg-black bg-opacity-30 h-full w-full cursor-default transition duration-300 ease-in-out"></div>
    </div>

    <div v-if="isOpen" @click="isOpen = false"
         class="fixed inset-0 z-30 h-full w-full cursor-default transition duration-300 ease-in-out">
    </div>
  </nav>

</template>

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

const selectLanguage = (lang) => {
  selectedLanguage.value = lang;
  isOpen.value = false;
};
</script>

<style scoped>
.active-menu::after {
  @apply absolute content-[""] w-full h-1 bg-[#151414] transition-all duration-[0.5s] ease-[ease] left-0 -bottom-1;
}
.slide {
  @apply absolute animate-[slide_0.5s_forwards] -right-2/4;
}
.arrow-up {
  @apply border-b-[10px] border-b-[white] border-x-[10px] border-x-transparent border-solid;
}
.custom-shadow {
  @apply shadow-[rgba(0,0,0,0.15)_0px_5px_15px];
}
.dropdown-box::before {
  @apply content-[""] absolute border-b-[10px] border-b-white border-x-[10px] border-x-transparent border-solid left-[15px] -top-2.5;
}
@keyframes slide {
  100% {
    right: 0;
  }
}
</style>