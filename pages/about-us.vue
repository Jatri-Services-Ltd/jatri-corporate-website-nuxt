<script setup>
import Banner from "~/components/about-us/Banner.vue";

useHead({
  title: 'Jatri | About us',
  meta: [
    {
      name: 'description', 
      content: 'We work equally with bus operators, drivers and regulators of Bangladesh to solve transportation problems from the very core.'
    },
  ]
});
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
  <Banner />
</template>