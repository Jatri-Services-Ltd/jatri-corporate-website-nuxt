
<script setup>
import PartnerTestimonial from "~/components/testing/PartnerTestimonial.vue";
import PartnerAccordion from "~/components/testing/PartnerAccordion.vue";
import PressCenterTabs from "~/components/testing/PressCenterTabs.vue";
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
    <PressCenterTabs />
    <PartnerAccordion />
    <PartnerTestimonial />
  </div>
</template>

