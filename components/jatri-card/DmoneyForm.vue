<script setup>
import {reactive} from 'vue'
const initialState = {
  name: '',
  phone: '',
  city: '',
  occupation: ''
}

const cardSubmitForm = reactive({...initialState})

const handleSubmit = ()=>{
  console.log("======>",cardSubmitForm)
  //Object.assign(cardSubmitForm, {...initialState});
}
const { locale } = useI18n();
</script>

<template>
  <div class="custom-container pt-10 lg:pt-[100px]">
    {{cardSubmitForm}}
    <div class="flex justify-center items-center">
      <div class="flex flex-col lg:flex-row justify-center bg-white rounded-xl w-full" style="box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);">
        <div class="background">
          <div class="pt-10 lg:pt-[60px] px-3 lg:px-12">
              <p class="w-4/5 lg:w-2/3 text-[28px] font-semibold leading-9 lg:text-[45px] lg:leading-[52px] text-white">{{ $t('card-fromLeft-header') }}</p>
            <p class="w-full lg:w-[60%] text-xs font-medium leading-4 mt-2 lg:mt-3 lg:text-base lg:font-normal lg:leading-6 text-white">{{ $t('card-fromLeft-content') }}</p>
          </div>
        </div>
        <div class="w-full lg:w-[620px] xl:w-full">
          <div class="px-6 py-6 lg:py-[60px] lg:px-12">
            <p class="text-[24px] lg:text-[36px] font-medium lg:leading-12 text-black">{{ $t('card-form-title') }}</p>
            <p class="mt-4 text-xs lg:text-[20px] font-medium leading-4 lg:leading-7 text-[#676769]">{{ $t('card-form-content') }}</p>

            <form @submit.prevent="handleSubmit">
              <div class="mt-5">
                <small class="text-black font-medium text-base leading-6">{{ $t('card-form-name') }}</small>
                <input v-model="cardSubmitForm.name" type="text" class="mt-[10px] w-full bg-[#F7F7F7] rounded-lg p-4 focus:outline-none placeholder:text-[#67676] placeholder:text-sm placeholder:font-normal" :placeholder="locale === 'en' ? 'Enter your name' : 'নাম লিখুন'">
              </div>
              <div class="mt-5">
                <small class="text-black font-medium text-base leading-6">{{ $t('card-form-mobile') }}</small>
                <input v-model="cardSubmitForm.phone" type="text" class="mt-[10px] w-full bg-[#F7F7F7] rounded-lg p-4 focus:outline-none placeholder:text-[#67676] placeholder:text-sm placeholder:font-normal" :placeholder="locale === 'en' ? '+880' : '+880'">
              </div>
              <div class="mt-5">
                <small class="text-black font-medium text-base leading-6">{{ $t('card-form-city') }}</small>
                <input v-model="cardSubmitForm.city" type="text" class="mt-[10px] w-full bg-[#F7F7F7] rounded-lg p-4 focus:outline-none placeholder:text-[#67676] placeholder:text-sm placeholder:font-normal" :placeholder="locale === 'en' ? 'Enter your city' : 'শহরের নাম লিখুন'">
              </div>
              <div class="mt-5">
                <div class="text-black font-medium text-base leading-6 flex justify-between w-full"><span class="block">{{ $t('card-form-profession') }}</span>
                  <span class="block text-[#676769] text-xs">{{ $t('card-form-optional') }}</span>
                </div>
                <input v-model="cardSubmitForm.occupation" type="text" class="mt-[10px] w-full bg-[#F7F7F7] rounded-lg p-4 focus:outline-none placeholder:text-[#67676] placeholder:text-sm placeholder:font-normal" :placeholder="locale === 'en' ? 'Enter your profession' : 'পেশার নাম লিখুন'">
              </div>
              <div class="flex justify-center lg:justify-end">
                <button type="submit" class="mt-8 flex gap-x-2 justify-center items-center bg-corporate w-full lg:w-[160px] py-3 text-white text-base font-medium rounded-full">
                  <img src="~/assets/images/common/check.svg" alt="check icon">
                  {{ $t('card-form-submit') }}</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped>
    .background{
      @apply bg-[url('~~/assets/images/background/dmoney-mobile-card-bg.png')] lg:bg-[url('~~/assets/images/background/dmoney-card-bg.png')] bg-cover bg-no-repeat bg-left w-full h-[280px] lg:w-[620px] xl:w-full lg:h-[782px] rounded-t-xl lg:rounded-t-none lg:rounded-tl-xl lg:rounded-bl-xl
    }

</style>