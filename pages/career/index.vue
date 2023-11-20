<script setup>
const config = useRuntimeConfig();
const { data } = await useFetch(config.public.apiURL + '/api/v1/get-settings')
provide("bannerImages", data.value.data.career_banners)
provide("youtubeLink", data.value.data.career_youtube_url)
</script>

<template>
  <div>
    <CareerHeader />
    <CareerSlider />
    <CareerOurCoreValues />
    <CareerBenefitAndPerks />
    <CareerVideo />
    <CareerWorkplaceLikeHome />
    <div id="openRoles">
      <CareerCurrentOpenRoles />
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
}
</style>
