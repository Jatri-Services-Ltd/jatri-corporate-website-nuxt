<script setup>
import {ref} from 'vue';
import axios from 'axios'
import { useToast } from 'vue-toastification'
import NoData from '~~/components/app/NoData.vue'
const { locale } = useI18n();
const toast = useToast()
const config = useRuntimeConfig();
const allCitiesData = ref([])
const activeCounter = ref({})
const getAllCounters = async ()=>{
  await axios.get(config.public.apiURL +'/api/v1/get-division-wise-counters')
      .then((res) => {
        allCitiesData.value = res.data.data
        activeCounter.value = res.data?.data[0]
      }).catch((e) => {
        toast.error("Something went wrong")
      })
}
getAllCounters()

const selectedCitiesCounter = (cityId)=>{
  return allCitiesData.value.find((city)=>{
    if(city.id === cityId){
      return activeCounter.value = city
    }
  })
}

</script>

<template>
  <div v-if="allCitiesData.length" class="custom-container pt-4 md:pt-10 pb-[100px]">
    <h1 class="text-dark text-2xl md:text-[57px] leading-8 md:leading-[64px] font-semibold mb-3 md:mb-6">{{ $t('available-counter-heading') }}</h1>
    <p class="text-[#676769] text-xs md:text-xl mb-6 md:mb-10">{{ $t('available-counter-content') }}</p>
    <div>
    <div  class="w-full flex flex-wrap gap-3 md:gap-4">
      <button v-for="allCities in allCitiesData" class="district-tab-btn" :class="activeCounter.id === allCities.id ? 'border-dark bg-dark text-white' : 'border-[#DBDBDB] bg-white text-dark'" @click="selectedCitiesCounter(allCities.id)">
        {{ locale === 'en' ? allCities.name : allCities.name_in_bangla }}
      </button>
    </div>

    <div class="mt-8">
      <div class="border border-[#EDEDED] rounded-2xl bg-white overflow-hidden relative active-counter-wrapper">
        <div v-for="area in activeCounter.areas">
          <div class="bg-[#EDEDED] py-4 px-3"><span class="text-dark font-medium text-base md:text-xl">{{locale === 'en' ? area.name : area.name_in_bangla}}</span></div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border items-center content-wrapper relative">
            <div v-for="counter in area.counters" class="table-content">{{ locale === 'en' ? counter.name : counter.name_in_bangla }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div v-else>
      <NoData/>
  </div>
</template>


<style scoped>
* {
    font-family: 'Inter', sans-serif;
}
.district-tab-btn{
  @apply border rounded-full px-4 md:px-6 py-[10px] md:py-[11px] text-xs md:text-base font-medium capitalize hover:border-dark hover:bg-dark hover:text-white transition-all ease-in-out duration-300
}
.table-content{
  @apply text-[12px] md:text-base font-medium px-3 min-h-[48px] md:min-h-[72px] border-l border-b border-[#EDEDED] flex items-center
}
.content-wrapper::before{
  content: '';
  position: absolute;
  height: 100%;
  width: 2px;
  left: -1px;
  background-color: white;
}
.content-wrapper::after{
  content: '';
  position: absolute;
  height: 100%;
  width: 2px;
  right: -1px;
  background-color: white;
}
.active-counter-wrapper::after{
  content: '';
  position: absolute;
  height: 5px;
  width: 100%;
  bottom: -3px;
  background-color: white;

}



/* The notification itself */
.Vue-Toastification__toast.custom {
  @apply min-w-0 px-6 py-3 border-2 shadow-none select-none rounded-xl bg-dark;
}

/* Success variant of the notification */
.Vue-Toastification__toast--success.custom {
  @apply border-success text-success;
}

/* etc */
.Vue-Toastification__toast--error.custom {
  @apply border-danger text-danger;
}

/* The icon which i'm replacing with a component vue-material-icons (more on how to do this in the docs) */
.Vue-Toastification__toast.custom .Vue-Toastification__icon {
  @apply h-auto;
}

/* The content - use this to override the default font styling etc */
.Vue-Toastification__toast-body.custom {
  @apply self-center font-sans text-base font-bold leading-relaxed;
}
</style>