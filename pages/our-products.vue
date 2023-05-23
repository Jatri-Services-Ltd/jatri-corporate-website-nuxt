
<script setup>
import Banner from "~/components/our-products/Banner.vue";
import User from "~/components/our-products/User.vue";
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
  </div>
</template>