<template>
  <div class="custom-container pt-4 md:pt-10 pb-[100px]">
    <h1 class="text-dark text-2xl md:text-[57px] leading-8 md:leading-[64px] font-semibold mb-3 md:mb-6">Available activation counters</h1>
    <p class="text-[#676769] text-xs md:text-xl mb-6 md:mb-10">You can avail a card from our designated activation counters. Simply visit the counter in your preferred area and open an account to receive your card instantly. All you need is your National ID (NID) and phone number.</p>
    <div>
    <div class="w-full flex flex-wrap gap-3 md:gap-4">
      <button @click="activeDistrict = 'dhaka'" class="district-tab-btn" :class="activeDistrict === 'dhaka' ? 'border-dark bg-dark text-white' : 'border-[#DBDBDB] bg-white text-dark'">Dhaka</button>
      <button @click="activeDistrict = 'chittagong'" class="district-tab-btn" :class="activeDistrict === 'chittagong' ? 'border-dark bg-dark text-white' : 'border-[#DBDBDB] bg-white text-dark'">Chittagong</button>
      <button @click="activeDistrict = 'sylhet'" class="district-tab-btn" :class="activeDistrict === 'sylhet' ? 'border-dark bg-dark text-white' : 'border-[#DBDBDB] bg-white text-dark'">Sylhet</button>
      <button @click="activeDistrict = 'mymensingh'" class="district-tab-btn" :class="activeDistrict === 'mymensingh' ? 'border-dark bg-dark text-white' : 'border-[#DBDBDB] bg-white text-dark'">Mymensingh</button>
      <button @click="activeDistrict = 'rajshahi'" class="district-tab-btn" :class="activeDistrict === 'rajshahi' ? 'border-dark bg-dark text-white' : 'border-[#DBDBDB] bg-white text-dark'">Rajshahi</button>
      <button @click="activeDistrict = 'khulna'" class="district-tab-btn" :class="activeDistrict === 'khulna' ? 'border-dark bg-dark text-white' : 'border-[#DBDBDB] bg-white text-dark'">Khulna</button>
      <button @click="activeDistrict = 'rangpur'" class="district-tab-btn" :class="activeDistrict === 'rangpur' ? 'border-dark bg-dark text-white' : 'border-[#DBDBDB] bg-white text-dark'">Rangpur</button>
      <button @click="activeDistrict = 'barishal'" class="district-tab-btn" :class="activeDistrict === 'barishal' ? 'border-dark bg-dark text-white' : 'border-[#DBDBDB] bg-white text-dark'">Barishal</button>
    </div>

    <div class="mt-8">
      <div class="border border-[#EDEDED] rounded-2xl bg-white overflow-hidden relative active-counter-wrapper">
        <div>
          <div class="bg-[#EDEDED] py-4 px-3"><span class="text-dark font-medium text-base md:text-xl">Tejgaon</span></div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border items-center content-wrapper relative">
            <div class="table-content">GMG mor</div>
            <div class="table-content">Shanta tower</div>
          </div>
        </div>

        <div>
          <div class="bg-[#EDEDED] py-4 px-3"><span class="text-dark font-medium text-base md:text-xl">Gulshan 1</span></div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border items-center content-wrapper relative">
            <div class="table-content">Police plaza counter</div>
            <div class="table-content">Gulshan 1 circle</div>
            <div class="table-content">3.Shooting club</div>
            <div class="table-content">4.Agora</div>
            <div class="table-content">5.Bottola</div>
            <div class="table-content">Jabbar tower</div>
          </div>
        </div>

        <div>
          <div class="bg-[#EDEDED] py-4 px-3"><span class="text-dark font-medium text-base md:text-xl">Gulshan 2</span></div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full items-center content-wrapper relative">
            <div class="table-content">Mannabar</div>
            <div class="table-content">Lab Aid counter</div>
            <div class="table-content">DCC Market counter</div>
          </div>
        </div>

        <div>
          <div class="bg-[#EDEDED] py-4 px-3"><span class="text-dark font-medium text-base md:text-xl">Banani</span></div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full items-center content-wrapper relative">
            <div class="table-content">Banani kacha bazar</div>
            <div class="table-content">Kakoli</div>
          </div>
        </div>

        <div>
          <div class="bg-[#EDEDED] py-4 px-3"><span class="text-dark font-medium text-base md:text-xl">Natun Bazar</span></div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full items-center content-wrapper relative">
            <div class="table-content">Embassy more</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const activeDistrict = ref('dhaka')
</script>

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