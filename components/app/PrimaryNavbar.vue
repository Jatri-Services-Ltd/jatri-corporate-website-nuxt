<template>
  <div class="flex items-center justify-between px-2 py-4 lg:px-28 lg:py-4">
    <img class="h-8 w-16 md:hidden" src="@/assets/images/svg/jatri-logo.svg" alt="">
    <div class="hidden md:flex gap-x-12">
      <img class="h-20 w-28" src="@/assets/images/svg/jatri-logo.svg" alt="">
      <div class="hidden md:flex gap-x-10 items-center w-full">
        <nuxt-link to="/" class="text-sm font-medium text-black border-b-4 border-black inline-block text-center">Home</nuxt-link>
        <nuxt-link to="/" class="text-sm font-medium text-black text-center inline-block">About us</nuxt-link>
        <nuxt-link to="/" class="text-sm font-medium text-black text-center inline-block">Career</nuxt-link>
        <nuxt-link to="/" class="text-sm font-medium text-black text-center inline-block">Blogs</nuxt-link>
        <nuxt-link to="/" class="text-sm font-medium text-black text-center inline-block">Contact us</nuxt-link>
      </div>
    </div>

    <div class="hidden md:flex gap-x-6 items-center">
      <select class="focus:outline-none" name="language" id="">
        <option value="English">English</option>
        <option value="Bangla">Bangla</option>
      </select>

      <a href="https://rental.jatri.co/" target="_blank" class="flex gap-x-2 items-center text-lg leading-6 font-medium rounded-full border border-[#EDEDED] px-4 py-3"> Rental</a>
      <a href="https://ticket.jatri.co/" target="_blank" class="bg-corporate text-white flex gap-x-2 items-center text-lg leading-6 font-medium rounded-full border border-[#EDEDED] pl-4 pr-6 py-3"><img src="@/assets/images/svg/ticket.svg" alt=""> Ticket</a>
    </div>

    <div class="flex gap-x-2 md:hidden">
      <a href="https://rental.jatri.co/" target="_blank" class="flex gap-x-2 justify-center items-center text-xs leading-6 font-medium rounded-full border border-[#EDEDED] px-4 py-3 w-[100px] h-9">Rental</a>
      <a href="https://ticket.jatri.co/" target="_blank" class="bg-corporate text-white flex justify-center gap-x-2 items-center text-xs leading-6 font-medium rounded-full border border-[#EDEDED] w-[100px] h-9"><img src="@/assets/images/svg/ticket.svg" alt=""> Ticket</a>
      <button @click="sidebarOpen = !sidebarOpen"><img src="@/assets/images/svg/3bar-icon.svg" alt=""></button>
    </div>


    <!--      mobile menu item-->
    <div v-if="sidebarOpen" class="bg-white absolute inset-y-0 right-0 -translate-x-[300px]" :class="sidebarOpen ? 'absolute slide-in  z-50 translate-x-0 transition delay-300 duration-300' : ''">
      <div class="h-screen w-[300px] gap-y-10">
        <div class="flex justify-between items-center border-b border-[#EDEDED] py-4">
          <p class="font-medium text-sm text-black pl-2">Menu</p>
          <button @click="sidebarOpen = false" class="pr-2"><img src="@/assets/images/svg/cross-icon.svg" alt=""></button>
        </div>
        <div class="flex flex-col gap-y-2 px-2">
          <nuxt-link to="/" @click="sidebarOpen = false" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] py-4">About us</nuxt-link>
          <nuxt-link to="/" @click="sidebarOpen = false" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] py-4">Career</nuxt-link>
          <nuxt-link to="/" @click="sidebarOpen = false" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] py-4">Blogs</nuxt-link>
          <nuxt-link to="/" @click="sidebarOpen = false" class="text-sm font-medium text-black text-left block border-b border-[#EDEDED] py-4">Contact us</nuxt-link>
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
.slide-in{
  position: absolute;
  right: -50%;
  animation: slide-in 0.5s forwards;
}

@keyframes slide-in {
  100% {
    right: 0;
  }

}

</style>