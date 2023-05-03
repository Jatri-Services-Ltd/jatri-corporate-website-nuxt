
<script setup>
import HeroSection from "~/components/home/HeroSection";
import HeroProducts from "~/components/home/HeroProducts.vue";
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
        <homeCounterSection />
        <homeWhatWeDo />
        <HeroProducts />
        <ScrollingScreenSection />
         <OurProductsSection />
        <TestimonialSection />
        <homeDownloadAppSection />
        <homeWeGotFeaturedSlider />
        <homeReadMoreAboutUsSlider />
        <homeJoinTeamSection />
    </div>
</template>

