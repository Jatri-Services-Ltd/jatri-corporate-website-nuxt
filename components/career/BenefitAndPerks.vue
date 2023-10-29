<template>
    <div class="bg-[#FEF2F0]">
        <div class="custom-container py-10 md:py-[60px] mx-auto">
            <div class="">
                <h1 class="text-3xl md:text-[57px] leading-9 md:leading-[64px] text-dark font-medium md:font-semibold benefit-header relative inline-block mb-1 md:mb-6">Benefits & Perks</h1>
                <p class="text-sm md:text-base w-full md:w-1/2 2xl:w-1/3 text-[#4D4D4F]">Embrace self-improvement by shattering barriers, reaching significant milestones, and driving positive change. Let’s bring change together!!</p>
            </div>
            <div class="mt-8 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <div>
                    <img class="h-8 md:h-10 w-8 md:w-10" src="/images/career/wallet.svg" alt="Wallet">
                    <p class="mt-4 md:mt-6 mb-2 md:mb-4 text-xl md:text-2xl font-medium">Competitive salary</p>
                    <p class="text-sm md:text-base text-[#4D4D4F]">Our company offers a competitive salary package to ensure that our employees are fairly compensated for their skills and contributions. We believe in recognizing and rewarding excellence.</p>
                </div>
                <div>
                    <img class="h-8 md:h-10 w-8 md:w-10" src="/images/career/restaurent.svg" alt="Restaurent">
                    <p class="mt-4 md:mt-6 mb-2 md:mb-4 text-xl md:text-2xl font-medium">Lunch & snack</p>
                    <p class="text-sm md:text-base text-[#4D4D4F]">We understand the importance of well-balanced meals and energizing snacks during the workday. That's why we offer daily lunch options and a variety of snacks to keep our team fueled and focused.</p>
                </div>
                <div>
                    <img class="h-8 md:h-10 w-8 md:w-10" src="/images/career/gift.svg" alt="Gift">
                    <p class="mt-4 md:mt-6 mb-2 md:mb-4 text-xl md:text-2xl font-medium">Festival bonus</p>
                    <p class="text-sm md:text-base text-[#4D4D4F]">In celebration of special occasions and festivals, we provide a festival bonus as a token of appreciation to our employees. It's our way of sharing in the joy and festivities with our team.</p>
                </div>
                <div>
                    <img class="h-8 md:h-10 w-8 md:w-10" src="/images/career/heart.svg" alt="Heart">
                    <p class="mt-4 md:mt-6 mb-2 md:mb-4 text-xl md:text-2xl font-medium">Paternity & maternity leave</p>
                    <p class="text-sm md:text-base text-[#4D4D4F]">We prioritize work-life balance and family well-being. Our comprehensive paternity and maternity leave policies ensure that employees can take time off to welcome and care for new additions to their families.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.benefit-header::before{
    content: url('/images/career/perks.svg');
    position: absolute;
    top: -20px;
    right: -45px;
}

@media(max-width:767px){
    .benefit-header::before{
        content: url('/images/career/perks-small.svg');
        top: -14px;
        right: -28px;
    }
}
</style>