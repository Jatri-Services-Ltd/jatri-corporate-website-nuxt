
<script setup>
import Banner from "~/components/our-products/Banner.vue";
import User from "~/components/our-products/User.vue";
import DriversPartners from "~/components/our-products/DriversPartners.vue";
import BusinessSolutions from "~/components/our-products/BusinessSolutions.vue";
import CallToAction from "~/components/app/CallToAction.vue";
</script>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
}
body {
  @apply text-body
}
</style>

<template>
  <div>
    <Banner />
    <User />
    <DriversPartners />
    <BusinessSolutions />
    <CallToAction />
  </div>
</template>