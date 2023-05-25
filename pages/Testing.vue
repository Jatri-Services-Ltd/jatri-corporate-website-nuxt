
<script setup>
import PartnerTestimonial from "~/components/testing/PartnerTestimonial.vue";
import PartnerAccordion from "~/components/testing/PartnerAccordion.vue";
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
    <PartnerAccordion />
    <PartnerTestimonial />
  </div>
</template>

