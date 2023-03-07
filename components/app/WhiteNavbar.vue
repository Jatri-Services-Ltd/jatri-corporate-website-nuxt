<script setup>
import {onMounted, ref, watch} from "vue";
const profileDropDown = ref(false)
import Cookies from 'js-cookie'
const { locale } = useI18n();
watch(() => locale.value, () => {
  Cookies.set('j_lang', locale.value)
})

onMounted(() => {
  locale.value = Cookies.get('j_lang') ?? 'en'
})

</script>


<template>
  <div class="bg-gray-50 text-gray-900 z-10 shadow sticky top-0 left-0 right-0">
    <nav class="py-2 md:py-4 px-5 sm:px-10 2xl:container 2xl:mx-auto flex items-center justify-between flex-wrap">
      <div class="flex items-center flex-shrink-0 mr-6">
        <nuxt-link :to="localePath('/')" class="font-semibold text-xl tracking-tight">
          <img src="~/assets/images/logo/logo.svg" alt="" class="w-28">
        </nuxt-link>
      </div>
      <div class="block lg:hidden flex justify-center items-center">
        <div>
          <input value="bn" v-model="locale" id="a" type="radio" class="hidden">
          <label for="a" :class="locale === 'bn' ?  'bg-corporate text-white' : ''" class="cursor-pointer w-[60px] leading-[20px] text-xs border border-[#DBDBDB] border-r-0 flex justify-center items-center font-semibold h-[32px] rounded-l-[4px]">বাংলা</label>
        </div>
        <div>
          <input value="en" v-model="locale" id="b" type="radio" class="hidden">
          <label for="b" :class="locale === 'en' ? 'bg-corporate text-white' : ''" class="cursor-pointer w-[60px] leading-[20px] text-xs border border-[#DBDBDB] flex justify-center items-center font-semibold text-black h-[32px] rounded-r-[4px]">English</label>
        </div>
      </div>
<!--      {{i18n.locales}}-->

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

          <nuxt-link :to="localePath('/why-us')" class="block mt-4 lg:inline-block lg:mt-0 mr-4 body_text">{{ $t('why_us') }}</nuxt-link>
          <nuxt-link :to="localePath('/about-us')" class="block mt-4 lg:inline-block lg:mt-0 mr-4 body_text">{{ $t('about_us') }}</nuxt-link>
          <nuxt-link :to="localePath('/career')" class="block mt-4 lg:inline-block lg:mt-0 mr-4 body_text">{{ $t('career') }}</nuxt-link>
          <nuxt-link :to="localePath('/blog')" class="block mt-4 lg:inline-block lg:mt-0 mr-4 body_text">{{ $t('blog') }}</nuxt-link>
          <nuxt-link :to="localePath('/contact-us')" class="block mt-4 lg:inline-block lg:mt-0 mr-4 body_text">{{ $t('contact_us') }}</nuxt-link>
          <a href="https://rental.jatri.co/"
             target="_blank"
             class="mt-4 lg:inline-block lg:mt-0 mr-4 bg-corporate py-1 px-2 rounded-md text-white flex justify-center items-center gap-x-4">
            <i class="fas fa-car"></i> {{ $t('rental') }}
          </a>
          <a href="https://ticket.jatri.co/"
             target="_blank"
             class="lg:inline-block mt-4 lg:mt-0 mr-4 bg-corporate py-1 px-2 rounded-md text-white flex justify-center items-center gap-x-4"><i
              class="fas fa-bus"></i> {{ $t('bus_ticket') }}</a>
        </div>

        <div class="hidden  lg:flex justify-center items-center mt-4 lg:mt-0">
          <div>
            <input value="bn" v-model="locale" id="a" type="radio" class="hidden">
            <label for="a" :class="locale === 'bn' ? 'bg-corporate text-white' : ''" class="cursor-pointer w-[60px] leading-[20px] text-[12px] border border-[#DBDBDB] border-r-0 flex justify-center items-center font-semibold h-[32px] rounded-l-[4px]">বাংলা</label>
          </div>
          <div>
            <input value="en" v-model="locale" id="b" type="radio" class="hidden">
            <label for="b" :class="locale === 'en' ? 'bg-corporate text-white' : ''" class="cursor-pointer w-[60px] leading-[20px] text-[12px] border border-[#DBDBDB] flex justify-center items-center font-semibold text-black h-[32px] rounded-r-[4px]">English</label>
          </div>
        </div>

          <div class="relative mt-4 lg:mt-0 ml-4">
            <div @click="profileDropDown = !profileDropDown" class="flex justify-between lg:justify-center items-center cursor-pointer">

              <div class="text-sm font-medium text-black">{{ $t('others') }}</div>
              <img :class="profileDropDown ? 'rotate-180 ease-in-out duration-300' : ''" src="~/assets/images/logo/down.png" alt="">
            </div>
            <button v-if="profileDropDown" @click="profileDropDown = false" class="fixed inset-0 bg-transparent h-full w-full cursor-default"></button>
            <div v-if="profileDropDown" class="">
              <div class="bg-corporate h-3 w-3 rotate-45 absolute left-10  lg:right-2 top-7">

              </div>
                <div class="absolute top-8 right-20 lg:right-0 bg-corporate z-10 lg:w-[150px] p-2 border border-corporate">
                  <nuxt-link :to="localePath('/ride-sharing-guideline')" class="text-white py-4 px-2 shadow-md transition-all ease-in-out block text-sm cursor-pointer hover:bg-white hover:text-corporate text-sm font-medium">{{ $t('ride-sharing-guideline') }}</nuxt-link>
                  <nuxt-link :to="localePath('/enlistment-certificate')"  class="text-white py-4 px-2 shadow-md transition-all ease-in-out block text-sm cursor-pointer hover:bg-white hover:text-corporate text-sm font-medium">{{ $t('enlistment-certificate') }}</nuxt-link>
                  <nuxt-link :to="localePath('/jatri-partner-app-manual')" class="text-white py-4 px-2 shadow-md transition-all ease-in-out block text-sm cursor-pointer hover:bg-white hover:text-corporate text-sm font-medium">{{ $t('jatri-partner-app') }}</nuxt-link>
                  <a href="https://corona.gov.bd/" target="_blank" class="text-white py-4 px-2 shadow-md transition-all ease-in-out block text-sm cursor-pointer hover:bg-white hover:text-corporate text-sm font-medium">{{ $t('covid-19-info') }}</a>
                </div>
            </div>
          </div>
      </div>
    </nav>
  </div>
</template>
