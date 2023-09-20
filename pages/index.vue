
<script setup>
import HeroSection from "~/components/home/HeroSection";
import CounterSection from "~/components/home/CounterSection";
import HeroProducts from "~/components/home/HeroProducts.vue";
import ScrollingScreenSection from "~/components/home/ScrollingScreenSection";
import OurProductsSection from "~/components/home/OurProductsSection";
import TestimonialSection from "~/components/home/TestimonialSection";
import OurServices from "~~/components/home/OurServices.vue";
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
        <CounterSection />
        <OurServices />
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

