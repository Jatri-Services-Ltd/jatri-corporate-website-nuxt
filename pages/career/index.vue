<script setup>
import axios from "axios";

const config = useRuntimeConfig();
const {$errorToast} = useNuxtApp();
const settings = ref([])
const loading = ref(true)
if (process.client) {
  const getSettings = () => {
    settings.value = []
    axios.get(config.public.apiURL + '/api/v1/get-settings')
        .then(res => {
          settings.value = res.data?.data
          loading.value = false
        })
        .catch(err => {
          loading.value = false
          $errorToast(err ? err : "Something went wrong")
        })
  }
  onMounted(() => getSettings())
}




// if (typeof window !== 'undefined') {
//   const { data } = await useFetch(config.public.apiURL + '/api/v1/get-settings')
//   provide("bannerImages", data.value.data.career_banners)
//   provide("youtubeLink", data.value.data.career_youtube_url)
// }

</script>

<template>
  <div>
    <CareerHeader />
    <ClientOnly>
      <CareerSlider v-if="settings?.career_banners" :career_banners="settings?.career_banners" />
    </ClientOnly>
    <CareerOurCoreValues />
    <CareerBenefitAndPerks />
    <ClientOnly>
      <CareerVideo v-if="settings?.career_youtube_url" :career_youtube_url="settings?.career_youtube_url"  />
    </ClientOnly>
    <CareerWorkplaceLikeHome />
    <div id="openRoles">
      <ClientOnly>
        <CareerCurrentOpenRoles />
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
}
</style>
