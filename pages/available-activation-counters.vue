<script setup>
import {onBeforeMount, onMounted, ref, watch, computed} from 'vue';
import axios from 'axios'
// import { useToast } from 'vue-toastification'
import { useToast } from 'vue-toastification'

const toast = useToast()
const allCitiesData = ref([])
const activeCounter = ref({})
const getAllCounters = async ()=>{
  await axios.get('http://159.89.202.153:9300/api/v1/get-counters')
      .then((res) => {
        allCitiesData.value = res.data.data
        activeCounter.value = res.data.data[0]
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
  <div class="custom-container pt-4 md:pt-10 pb-[100px]">
    <h1 class="text-dark text-2xl md:text-[57px] leading-8 md:leading-[64px] font-semibold mb-3 md:mb-6">Available activation counters</h1>
    <p class="text-[#676769] text-xs md:text-xl mb-6 md:mb-10">You can avail a card from our designated activation counters. Simply visit the counter in your preferred area and open an account to receive your card instantly. All you need is your National ID (NID) and phone number.</p>
    <div>
    <div  class="w-full flex flex-wrap gap-3 md:gap-4">
      <button v-for="allCities in allCitiesData" class="district-tab-btn" :class="activeCounter.id === allCities.id ? 'border-dark bg-dark text-white' : 'border-[#DBDBDB] bg-white text-dark'" @click="selectedCitiesCounter(allCities.id)">
        {{allCities.name}}
      </button>
    </div>

    <div class="mt-8">
      <div class="border border-[#EDEDED] rounded-2xl bg-white overflow-hidden relative active-counter-wrapper">
        <div v-for="area in activeCounter.areas">
          <div class="bg-[#EDEDED] py-4 px-3"><span class="text-dark font-medium text-base md:text-xl">{{area.name}}</span></div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border items-center content-wrapper relative">
            <div v-for="counter in area.counters" class="table-content">{{counter.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>


<style scoped>
* {
    font-family: 'Inter', sans-serif;
}
.district-tab-btn{
  @apply border rounded-full px-4 md:px-6 py-[10px] md:py-[11px] text-xs md:text-base font-medium capitalize hover:border-dark hover:bg-dark hover:text-white transition-all delay-75 ease-in-out duration-300
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
</style>