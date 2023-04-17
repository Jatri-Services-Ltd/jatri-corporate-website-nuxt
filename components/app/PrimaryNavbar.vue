<template>
    <div class="flex items-center justify-between px-4 lg:px-28">
      <nuxt-link :to="localePath('/')" class="md:hidden"><img class="h-8 w-16" src="@/assets/images/svg/jatri-logo.svg" alt="jatri logo"></nuxt-link>
      
        <div class="hidden md:flex gap-x-6 lg:gap-x-10 xl:gap-x-12 py-5">
           <nuxt-link :to="localePath('/')"><img class="h-10 w-[81px]" src="@/assets/images/svg/jatri-logo.svg" alt="jatri logo"></nuxt-link>
          <div class="hidden md:flex gap-x-4 lg-gap-x-8 xl:gap-x-10 items-center w-full">
              <nuxt-link :to="localePath('/')" class="text-[16px] leading-6 font-medium text-black inline-block text-center relative" active-class="active-menu">Home</nuxt-link>
              <nuxt-link :to="localePath('/about-us')" class="text-[16px] leading-6 font-medium text-black text-center inline-block relative" active-class="active-menu">About us</nuxt-link>
              <nuxt-link :to="localePath('/career')" class="text-[16px] leading-6 font-medium text-black text-center inline-block relative" active-class="active-menu">Career</nuxt-link>
              <nuxt-link :to="localePath('/blog')" class="text-[16px] leading-6 font-medium text-black text-center inline-block relative" active-class="active-menu">Blogs</nuxt-link>
              <nuxt-link :to="localePath('/contact-us')" class="text-[16px] leading-6 font-medium text-black text-center inline-block relative" active-class="active-menu">Contact us</nuxt-link>
          </div>
        </div>

      <div class="hidden md:flex gap-x-2 lg:gap-x-6 items-center">
        <select class="focus:outline-none text-[12px]" name="language" id="">
          <option value="English">English</option>
          <option value="Bangla">Bangla</option>
        </select>

        <a href="https://rental.jatri.co/" target="_blank" class="flex gap-x-2 items-center text-[16px] leading-6 font-medium rounded-full border border-[#EDEDED] px-4 py-2 lg:py-3"><img src="@/assets/images/svg/car-svg.svg" alt=""> Rental</a>
        <a href="https://ticket.jatri.co/" target="_blank" class="bg-corporate text-white flex gap-x-2 items-center text-[16px] leading-6 font-medium rounded-full border border-[#EDEDED] pl-4 pr-6 py-2 lg:py-3"><img src="@/assets/images/svg/ticket.svg" alt=""> Ticket</a>
      </div>

      <div class="flex gap-x-2 md:hidden py-4">
        <a href="https://rental.jatri.co/" target="_blank" class="flex gap-x-2 justify-center items-center text-xs leading-6 font-medium rounded-full border border-[#EDEDED] px-4 py-3 w-[100px] h-9"><img src="@/assets/images/svg/car-svg.svg" alt=""> Rental</a>
        <a href="https://ticket.jatri.co/" target="_blank" class="bg-corporate text-white flex justify-center gap-x-2 items-center text-xs leading-6 font-medium rounded-full border border-[#EDEDED] w-[100px] h-9"><img src="@/assets/images/svg/ticket.svg" alt=""> Ticket</a>
        <button @click="sidebarOpen = !sidebarOpen"><img src="@/assets/images/svg/3bar-icon.svg" alt=""></button>
      </div>


<!--      mobile menu item-->
      <div v-if="sidebarOpen" class="bg-white absolute inset-y-0 right-0 -translate-x-[300px] slide" :class="sidebarOpen ? 'absolute  z-50 translate-x-0 transition delay-300 duration-300' : ''">
        <div class="h-screen w-[300px] gap-y-10">
          <div class="flex justify-between items-center border-b border-[#EDEDED] py-4">
            <p class="font-medium text-sm text-black pl-2">Menu</p>
            <button @click="sidebarOpen = false" class="pr-2"><img src="@/assets/images/svg/cross-icon.svg" alt=""></button>
          </div>
          <div class="flex flex-col gap-y-2 px-2">
            <nuxt-link :to="localePath('/about-us')" @click="sidebarOpen = false" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] py-4">About us</nuxt-link>
            <nuxt-link :to="localePath('/career')" @click="sidebarOpen = false" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] py-4">Career</nuxt-link>
            <nuxt-link :to="localePath('/blog')" @click="sidebarOpen = false" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] py-4">Blogs</nuxt-link>
            <nuxt-link :to="localePath('/contact-us')" @click="sidebarOpen = false" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] py-4">Contact us</nuxt-link>
            <select class="focus:outline-none py-4" name="language" id="">
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
            </select>
          </div>
        </div>
      </div>
      <div v-if="sidebarOpen" @click="sidebarOpen = false" class="fixed inset-0 z-30 bg-black bg-opacity-30 h-full w-full cursor-default transition duration-300 ease-in-out"></div>
    </div>
</template>

<script setup>
import {ref} from "vue";
const sidebarOpen = ref(false)
</script>

<style>
.active-menu::after{
  position: absolute;
  left: 0;
  bottom: -4px;
  content: "";
  width: 100%;
  height: 4px;
  background-color: #151414;
  transition: all 0.5s ease;
}
.slide{
  position: absolute;
  right: -50%;
  animation: slide 0.5s forwards;
}
@keyframes slide {
  100% {
    right: 0;
  }
}

</style>