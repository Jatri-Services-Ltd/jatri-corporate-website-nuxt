<script setup>
import HeroSection from '~~/components/jatri-card/HeroSection.vue';
import DmoneyForm from '~~/components/jatri-card/DmoneyForm.vue'
import FaqSection from '~~/components/jatri-card/FaqSection.vue'
import WhyJatriCard from '~~/components/jatri-card/WhyJatriCard.vue';
import PaymentsSection from '~~/components/jatri-card/PaymentsSection.vue';
import GetDmoneyJatriCard from '~~/components/jatri-card/GetDmoneyJatriCard.vue';
</script>

<template>
    <HeroSection />
    <WhyJatriCard />
    <PaymentsSection />
    <GetDmoneyJatriCard />
    <DmoneyForm />
    <FaqSection />
</template>


<style scoped>
* {
    font-family: 'Inter', sans-serif;
}
</style>