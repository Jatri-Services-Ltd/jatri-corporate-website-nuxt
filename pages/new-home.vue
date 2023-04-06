
<script setup>
import HeroSection from "~/components/home/HeroSection";
import JatriRentalSection from "~/components/home/JatriRentalSection";
</script>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
}
p {
    @apply text-body
}
</style>

<template>
    <div>
        <HeroSection />
        <homeCounterSection />
        <homeWhatWeDo />
        <JatriRentalSection />
    </div>
</template>

