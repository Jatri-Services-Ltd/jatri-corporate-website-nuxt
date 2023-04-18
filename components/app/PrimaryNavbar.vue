<template>
  <nav class="custom-container">
    <div class="flex items-center justify-between">
      <nuxt-link :to="localePath('/')" class="lg:hidden"><img alt="jatri logo" class="h-8 w-16" src="@/assets/images/svg/jatri-logo.svg"/></nuxt-link>

      <div class="hidden lg:flex gap-x-6 lg:gap-x-12 py-5">
        <nuxt-link :to="localePath('/')"><img alt="jatri logo" class="h-10 w-[81px]" src="@/assets/images/svg/jatri-logo.svg"/></nuxt-link>
        <div class="hidden md:flex gap-x-6 lg-gap-x-8 xl:gap-x-10 items-center w-full">
          <nuxt-link :to="localePath('/')" active-class="active-menu" class="text-[16px] leading-6 font-medium text-black inline-block text-center relative">Home</nuxt-link>
          <nuxt-link :to="localePath('/about-us')" active-class="active-menu" class="text-[16px] leading-6 font-medium text-black text-center inline-block relative">About us</nuxt-link>
          <nuxt-link :to="localePath('/career')" active-class="active-menu" class="text-[16px] leading-6 font-medium text-black text-center inline-block relative">Career</nuxt-link>
          <nuxt-link :to="localePath('/blog')" active-class="active-menu" class="text-[16px] leading-6 font-medium text-black text-center inline-block relative">Blogs</nuxt-link>
          <nuxt-link :to="localePath('/contact-us')" active-class="active-menu" class="text-[16px] leading-6 font-medium text-black text-center inline-block relative">Contact us</nuxt-link>
        </div>
      </div>
      <div class="hidden lg:flex gap-x-2 lg:gap-x-6 items-center">
        <div class="relative inline-block text-left min-w-[80px] z-50">
          <div>
            <button  @click="isOpen = !isOpen" id="menu-button" aria-expanded="true" aria-haspopup="true" class="flex items-center gap-2 text-sm font-medium focus:outline-none" type="button">
              <span>{{ locale === "bn" ? "বাংলা" : "English" }}</span>
              <div><img alt="" src="~/assets/images/svg/bottom-arrow.svg"/></div>
            </button>
          </div>
          <div v-if="isOpen" aria-labelledby="menu-button" aria-orientation="vertical" class="absolute left-0 z-10 min-w-[120px] origin-top-right rounded-md bg-white focus:outline-none dropdown-box custom-shadow mt-6" role="menu" tabindex="-1">
            <nuxt-link :to="switchLocalePath('en')" @click="isOpen = !isOpen">
              <div class="text-gray-500 px-3 transition ease-out duration-200 cursor-pointer" role="none">
                <span class="tracking-widest border-b my-2 block py-2 text-sm capitalize">English</span>
              </div>
            </nuxt-link>
            <nuxt-link :to="switchLocalePath('bn')" @click="isOpen = !isOpen">
              <div class="text-gray-500 px-3 transition ease-out duration-200 cursor-pointer" role="none">
                <span class="tracking-widest my-2 block py-2 text-sm capitalize">বাংলা</span>
              </div>
            </nuxt-link>
          </div>
        </div>

        <a class="flex gap-x-2 items-center text-[16px] leading-6 font-medium rounded-full border border-[#EDEDED] px-4 py-2 lg:py-3" href="https://rental.jatri.co/" target="_blank"><img alt="" src="@/assets/images/svg/car-svg.svg"/>Rental</a>
        <a class="bg-corporate text-white flex gap-x-2 items-center text-[16px] leading-6 font-medium rounded-full border border-[#EDEDED] pl-4 pr-6 py-2 lg:py-3" href="https://ticket.jatri.co/" target="_blank">
          <img alt="" src="@/assets/images/svg/ticket.svg"/> Ticket</a>
      </div>
      <div class="flex gap-x-4 lg:hidden py-4">
        <a class="flex gap-x-2 justify-center items-center text-xs leading-6 font-medium rounded-full border border-[#EDEDED] px-4 py-3 w-[100px] h-9" href="https://rental.jatri.co/" target="_blank">
          <img alt="" src="@/assets/images/svg/car-svg.svg"/> Rental</a>
        <a class="bg-corporate text-white flex justify-center gap-x-2 items-center text-xs leading-6 font-medium rounded-full border border-[#EDEDED] w-[100px] h-9" href="https://ticket.jatri.co/" target="_blank">
          <img alt="" src="@/assets/images/svg/ticket.svg"/> Ticket</a>
        <button @click="sidebarOpen = !sidebarOpen">
          <img alt="" src="@/assets/images/svg/3bar-icon.svg"/>
        </button>
      </div>

      <!--      mobile menu item-->
      <div v-if="sidebarOpen" :class="sidebarOpen ? 'absolute  z-50 translate-x-0 transition delay-300 duration-300' : '' " class="bg-white absolute inset-y-0 right-0 -translate-x-[300px] slide">
        <div class="h-screen w-[300px] gap-y-10">
          <div class="flex justify-between items-center border-b border-[#EDEDED] py-4">
            <p class="font-medium text-sm text-black pl-2">Menu</p>
            <button class="pr-2" @click="sidebarOpen = false">
              <img alt="" src="@/assets/images/svg/cross-icon.svg"/>
            </button>
          </div>
          <div class="flex flex-col gap-y-2 px-2">
            <nuxt-link :to="localePath('/about-us')" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] py-4" @click="sidebarOpen = false">About us</nuxt-link>
            <nuxt-link :to="localePath('/career')" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] py-4" @click="sidebarOpen = false">Career</nuxt-link>
            <nuxt-link :to="localePath('/blog')" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] py-4" @click="sidebarOpen = false">Blogs</nuxt-link>
            <nuxt-link :to="localePath('/contact-us')" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] py-4" @click="sidebarOpen = false">Contact us</nuxt-link>
            <div>
              <div class="relative inline-block text-left min-w-[80px] z-50">
                <div>
                  <button id="menu-button" aria-expanded="true" aria-haspopup="true" class="flex items-center gap-2 text-sm font-medium focus:outline-none" type="button" @click="isOpen = !isOpen">
                    <span>{{ locale === "bn" ? "বাংলা" : "English" }}</span>
                    <div><img alt="" src="~/assets/images/svg/bottom-arrow.svg"/></div>
                  </button>
                </div>
                <div v-if="isOpen" aria-labelledby="menu-button" aria-orientation="vertical" class="absolute left-0 z-10 min-w-[120px] origin-top-right rounded-md bg-white focus:outline-none dropdown-box custom-shadow mt-6" role="menu" tabindex="-1">
                  <nuxt-link :to="switchLocalePath('en')" @click="isOpen = !isOpen">
                    <div class="text-gray-500 px-3 transition ease-out duration-200 cursor-pointer" role="none">
                      <span class="tracking-widest border-b my-2 block py-2 text-sm capitalize">English</span>
                    </div>
                  </nuxt-link>
                  <nuxt-link :to="switchLocalePath('bn')" @click="isOpen = !isOpen">
                    <div class="text-gray-500 px-3 transition ease-out duration-200 cursor-pointer" role="none">
                      <span class="tracking-widest my-2 block py-2 text-sm capitalize">বাংলা</span>
                    </div>
                  </nuxt-link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div
          v-if="sidebarOpen"
          class="fixed inset-0 z-30 bg-black bg-opacity-30 h-full w-full cursor-default transition duration-300 ease-in-out"
          @click="sidebarOpen = false"
      ></div>
      <div v-if="isOpen" @click="isOpen = false"
           class="fixed inset-0 z-30 h-full w-full cursor-default transition duration-300 ease-in-out">
      </div>
    </div>
  </nav>
</template>

<script setup>
import {ref} from "vue";

const sidebarOpen = ref(false);

const isOpen = ref(false);
const {locale} = useI18n();
const switchLocalePath = useSwitchLocalePath();

const selectLanguage = (lang) => {
  selectedLanguage.value = lang;
  isOpen.value = false;
};
</script>

<style>
.active-menu::after {
  position: absolute;
  left: 0;
  bottom: -4px;
  content: "";
  width: 100%;
  height: 4px;
  background-color: #151414;
  transition: all 0.5s ease;
}

.slide {
  position: absolute;
  right: -50%;
  animation: slide 0.5s forwards;
}

.arrow-up {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}

.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
}

.dropdown-box::before {
  content: "";
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
  position: absolute;
  left: 15px;
  top: -10px;
}

@keyframes slide {
  100% {
    right: 0;
  }
}
</style>
