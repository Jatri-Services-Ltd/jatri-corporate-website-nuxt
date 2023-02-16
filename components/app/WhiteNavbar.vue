<script setup>
import { ref } from "vue";
const profileDropDown = ref(false)

</script>


<template>
  <div class="bg-gray-50 text-gray-900 z-10 shadow fixed top-0 left-0 right-0">
    <nav class="py-2 md:py-4 px-5 sm:px-10 2xl:container 2xl:mx-auto flex items-center justify-between flex-wrap">
      <div class="flex items-center flex-shrink-0 mr-6">
        <a href="#" class="font-semibold text-xl tracking-tight">
          <img src="~/assets/images/logo/logo.svg" alt="" class="w-28">
        </a>
      </div>

      <label
          class="block lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded border-teal-400 hover:corporate_color hover:border-gray-400"
          for="menu-toggle">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle"/>

      <div class="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="menu">
        <div class="text-sm lg:flex-grow">

          <a href="./why-us" class="block mt-4 lg:inline-block lg:mt-0 mr-4 body_text">Why Us</a>
          <a href="./about-us" class="block mt-4 lg:inline-block lg:mt-0 mr-4 body_text">About Us</a>
          <a href="./career" class="block mt-4 lg:inline-block lg:mt-0 mr-4 body_text">Career</a>
          <a href="./blog" class="block mt-4 lg:inline-block lg:mt-0 mr-4 body_text">Blog</a>
          <a href="./contact-us" class="block mt-4 lg:inline-block lg:mt-0 mr-4 body_text">Contact Us</a>
          <a href="https://rental.jatri.co/"
             class="mt-4 lg:inline-block lg:mt-0 mr-4 bg-corporate py-1 px-2 rounded-md text-white flex justify-center items-center gap-x-4"><i
              class="fas fa-car"></i> Rental</a>
          <a href="https://ticket.jatri.co/"
             class="lg:inline-block mt-4 lg:mt-0 mr-4 bg-corporate py-1 px-2 rounded-md text-white flex justify-center items-center gap-x-4"><i
              class="fas fa-bus"></i> Bus Ticket</a>
        </div>

          <div class="relative mt-4 lg:mt-0">
            <div @click="profileDropDown = !profileDropDown" class="flex justify-between lg:justify-center items-center cursor-pointer">

              <div class=" text-sm font-normal text-black">Others</div>
              <img :class="profileDropDown ? 'rotate-180 ease-in-out duration-300' : ''" src="~/assets/images/logo/down.png" alt="">
            </div>
            <button v-if="profileDropDown" @click="profileDropDown = false" class="fixed inset-0 bg-transparent h-full w-full cursor-default"></button>
            <div v-if="profileDropDown" class="">
              <div class="bg-corporate h-3 w-3 rotate-45 absolute left-10  lg:right-2 top-7">

              </div>
                <div class="absolute top-8 right-20 lg:right-0 bg-corporate z-10 lg:w-[150px] p-2 border border-corporate">
                  <nuxt-link to="" class="text-white py-4 px-2 shadow-md transition-all ease-in-out block text-sm cursor-pointer hover:bg-white hover:text-corporate text-sm font-medium"> RIDE SHARING GUIDELINE</nuxt-link>
                  <nuxt-link to=""  class="text-white py-4 px-2 shadow-md transition-all ease-in-out block text-sm cursor-pointer hover:bg-white hover:text-corporate text-sm font-medium">  ENLISTMENT CERTIFICATE</nuxt-link>
                  <nuxt-link to="" class="text-white py-4 px-2 shadow-md transition-all ease-in-out block text-sm cursor-pointer hover:bg-white hover:text-corporate text-sm font-medium"> JATRI PARTNER APP</nuxt-link>
                  <nuxt-link to="" class="text-white py-4 px-2 shadow-md transition-all ease-in-out block text-sm cursor-pointer hover:bg-white hover:text-corporate text-sm font-medium">COVID-19 INFO</nuxt-link>
                </div>
            </div>
          </div>
      </div>
    </nav>
  </div>
</template>