
<script setup>
import HeroSection from "~/components/home/HeroSection";
import JatriRentalSection from "~/components/home/JatriRentalSection";
import ScrollingScreenSection from "~/components/home/ScrollingScreenSection";
import OurProductsSection from "~/components/home/OurProductsSection";
import TestimonialSection from "~/components/home/TestimonialSection";
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
        <HeroSection />
<!--        <homeCounterSection />-->
<!--        <homeWhatWeDo />-->
        <JatriRentalSection />
        <ScrollingScreenSection />
<!--        <OurProductsSection />-->
<!--        <TestimonialSection />-->
<!--        <homeDownloadAppSection />-->
<!--        <homeWeGotFeaturedSlider />-->

        <OurProductsSection />
        <TestimonialSection />

    </div>
</template>

