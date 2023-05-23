
<script setup>
import Banner from "~/components/our-products/Banner.vue";
import User from "~/components/our-products/User.vue";
import DriversPartners from "~/components/our-products/DriversPartners.vue";
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
  </div>
</template>