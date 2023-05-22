
<script setup>

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
    <OurProducts />
    <User />
  </div>
</template>