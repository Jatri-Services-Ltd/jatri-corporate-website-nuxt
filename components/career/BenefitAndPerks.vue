<template>
    <div class="bg-[#FEF2F0]">
        <div class="custom-container py-10 md:py-[60px] mx-auto">
            <div class="">
                <h1 class="text-3xl md:text-5xl lg:text-[57px] leading-9 md:leading-[64px] text-dark font-medium md:font-semibold benefit-header relative inline-block mb-1 md:mb-6">{{ $t('benefits-perks-title') }}</h1>
                <p class="text-sm md:text-base w-full md:w-1/2 xl:w-[498px] text-secondaryDark">{{ $t('benefits-perks-subtitle') }}</p>
            </div>
            <div class="mt-8 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <div>
                    <img class="h-8 md:h-10 w-8 md:w-10" src="/images/career/wallet.svg" alt="Wallet">
                    <h4 class="mt-4 md:mt-6 mb-2 md:mb-4 text-xl md:text-2xl font-medium text-dark">{{ $t('benefits-perks-card1-title') }}</h4>
                    <p class="text-sm md:text-base text-secondaryDark">{{ $t('benefits-perks-card1-detail') }}</p>
                </div>
                <div>
                    <img class="h-8 md:h-10 w-8 md:w-10" src="/images/career/restaurent.svg" alt="Restaurent">
                    <h4 class="mt-4 md:mt-6 mb-2 md:mb-4 text-xl md:text-2xl font-medium text-dark">{{ $t('benefits-perks-card2-title') }}</h4>
                    <p class="text-sm md:text-base text-secondaryDark">{{ $t('benefits-perks-card2-detail') }}</p>
                </div>
                <div>
                    <img class="h-8 md:h-10 w-8 md:w-10" src="/images/career/gift.svg" alt="Gift">
                    <h4 class="mt-4 md:mt-6 mb-2 md:mb-4 text-xl md:text-2xl font-medium text-dark">{{ $t('benefits-perks-card3-title') }}</h4>
                    <p class="text-sm md:text-base text-secondaryDark">{{ $t('benefits-perks-card3-detail') }}</p>
                </div>
                <div>
                    <img class="h-8 md:h-10 w-8 md:w-10" src="/images/career/heart.svg" alt="Heart">
                    <h4 class="mt-4 md:mt-6 mb-2 md:mb-4 text-xl md:text-2xl font-medium text-dark">{{ $t('benefits-perks-card4-title') }}</h4>
                    <p class="text-sm md:text-base text-secondaryDark">{{ $t('benefits-perks-card4-detail') }}</p>
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