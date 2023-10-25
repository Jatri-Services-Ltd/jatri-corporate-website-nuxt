<script setup>
import HeroSection from '~~/components/card/HeroSection.vue';
import DmoneyForm from '~~/components/card/DmoneyForm.vue'
import FaqSection from '~~/components/card/FaqSection.vue'
import WhyJatriCard from '~~/components/card/WhyJatriCard.vue';
import PaymentsSection from '~~/components/card/PaymentsSection.vue';
import GetDmoneyJatriCard from '~~/components/card/GetDmoneyJatriCard.vue';
import HowToUseDmoneyCard from '~~/components/card/HowToUseDmoneyCard.vue';
</script>

<template>
    <HeroSection />
    <WhyJatriCard />
    <PaymentsSection />
    <HowToUseDmoneyCard />
    <GetDmoneyJatriCard />
    <DmoneyForm />
    <FaqSection />
</template>


<style scoped>
* {
    font-family: 'Inter', sans-serif;
}
</style>