<script setup>
import { ref } from 'vue';
import NoData from '~~/components/app/NoData.vue'
const { locale } = useI18n();
const {$errorToast} = useNuxtApp();

const config = useRuntimeConfig();

const {data, pending} = await useFetch(config.public.apiURL + '/api/v1/get-division-wise-counters')
const activeCity = ref(data.value && data.value.data?.length ? data.value?.data[0].id: [])
const selectedCitiesCounter = computed(() => {
   return data.value?.data?.find(city => city.id === activeCity.value)
})

</script>

<template> 

  <div v-if="pending" class="min-h-[50vh] flex justify-center items-center">
    <div class='fixed inset-0 bg-white z-50 overflow-hidden' style='background: #e4e4e4bd'>
      <div class='flex flex-col justify-center items-center h-screen'>
        <div class=loader-container>
          <img src="/loader-icon.png" alt="loader" id="breathing-button" />
          <div class="loader"></div>
          <h5 class='loading-text'>Please wait...</h5>
        </div>
      </div>
    </div>
  </div>
  <div v-if="data?.data?.length && !pending" class="custom-container pt-4 md:pt-10 pb-[100px]">
    <h1 class="text-dark text-xl md:text-[57px] leading-8 md:leading-[64px] font-semibold mb-3 md:mb-6">{{
      $t('available-counter-heading') }}</h1>
    <p class="text-[#676769] text-xs md:text-xl mb-6 md:mb-10">{{ $t('available-counter-content') }}</p>
    <div>
      <div class="w-full flex flex-wrap gap-3 md:gap-4">
        <button v-for="city in data.data" :key="city.id" class="district-tab-btn"
          :class="activeCity === city.id ? 'border-dark bg-dark text-white' : 'border-[#DBDBDB] bg-white text-dark'"
          @click="activeCity=city.id"
        >
          {{ locale === 'en' ? city.name : city.name_in_bangla }}
        </button>
      </div>

      <div class="mt-8 min-h-[50vh]">
        <div class="border border-[#EDEDED] rounded-2xl bg-white overflow-hidden relative active-counter-wrapper">
          <div v-if="selectedCitiesCounter?.areas.length === 0" class="p-5">
            {{ $t('no-data-found') }}
          </div>
          <div v-for="area in selectedCitiesCounter.areas" :key="area.id">
            <div class="bg-grey py-4 px-3"><span class="text-dark font-medium text-base md:text-xl capitalize">{{ locale ===
              'en'
              ? area.name : area.name_in_bangla }}</span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border items-center content-wrapper relative">
              <div v-for="counter in area.counters" :key="counter.id" class="table-content">{{ locale === 'en' ?
                counter.name :
                counter.name_in_bangla }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <NoData />
  </div>
</template>


<style scoped>
* {
  font-family: 'Inter', sans-serif;
}

.district-tab-btn {
  @apply border rounded-full px-4 md:px-6 py-[10px] md:py-[11px] text-xs md:text-base font-medium capitalize hover:border-dark hover:bg-dark hover:text-white transition-all ease-in-out duration-300
}

.table-content {
  @apply text-[12px] md:text-base font-medium px-3 min-h-[48px] md:min-h-[72px] border-l border-b last:border-r border-[#EDEDED] flex items-center
}

.content-wrapper::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 2px;
  left: -1px;
  background-color: white;
}

.content-wrapper::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 2px;
  right: -1px;
  background-color: white;
}

.active-counter-wrapper::after {
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
}</style>