<template>
    <div class="custom-container mx-auto text-center py-10 lg:py-[100px]">
        <h1 class="text-[28px] md:text-5xl lg:text-[57px] leading-9 md:leading-[64px] text-dark mb-2 lg:mb-6 font-semibold">{{ $t('our-core-values') }}</h1>
        <p class="text-sm md:text-base w-full lg:w-1/2 mx-auto text-secondaryDark">{{ $t('core-values-subtitle') }}</p>
        <div class="mt-6 lg:mt-12 grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-5 md:gap-y-8">
            <div class="border border-lightGrey rounded-3xl p-4 md:p-8 bg-white text-start">
                <img class="h-10 lg:h-20 w-10 lg:w-20 mb-4 lg:mb-12" src="/images/career/stand-for-safety.svg" :alt="$t('core-value-card1-title')">
                <h3 class="text-xl lg:text-[28px] leading-7 lg:leading-9 font-medium md:font-semibold mb-2">{{ $t('core-value-card1-title') }}</h3>
                <p class="text-sm md:text-base">{{ $t('core-value-card1-detail') }}</p>
            </div>
            <div class="border border-lightGrey rounded-3xl p-4 md:p-8 bg-white text-start">
                <img class="h-10 lg:h-20 w-10 lg:w-20 mb-4 lg:mb-12" src="/images/career/strong-together.svg" :alt="$t('core-value-card2-title')">
                <h3 class="text-xl lg:text-[28px] leading-7 lg:leading-9 font-medium md:font-semibold mb-2">{{ $t('core-value-card2-title') }}</h3>
                <p class="text-sm md:text-base">{{ $t('core-value-card2-detail') }}</p>
            </div>
            <div class="border border-lightGrey rounded-3xl p-4 md:p-8 bg-white text-start">
                <img class="h-10 lg:h-20 w-10 lg:w-20 mb-4 lg:mb-12" src="/images/career/build-with-heart.svg" :alt="$t('core-value-card3-title')">
                <h3 class="text-xl lg:text-[28px] leading-7 lg:leading-9 font-medium md:font-semibold mb-2">{{ $t('core-value-card3-title') }}</h3>
                <p class="text-sm md:text-base">{{ $t('core-value-card3-detail') }}</p>
            </div>
            <div class="border border-lightGrey rounded-3xl p-4 md:p-8 bg-white text-start">
                <img class="h-10 lg:h-20 w-10 lg:w-20 mb-4 lg:mb-12" src="/images/career/diversity-equity-inclusion.svg" :alt="$t('core-value-card4-title')">
                <h3 class="text-xl lg:text-[28px] leading-7 lg:leading-9 font-medium md:font-semibold mb-2">{{ $t('core-value-card4-title') }}</h3>
                <p class="text-sm md:text-base">{{ $t('core-value-card4-detail') }}</p>
            </div>
            <div class="border border-lightGrey rounded-3xl p-4 md:p-8 bg-white text-start">
                <img class="h-10 lg:h-20 w-10 lg:w-20 mb-4 lg:mb-12" src="/images/career/be-positive.svg" :alt="$t('core-value-card5-title')">
                <h3 class="text-xl lg:text-[28px] leading-7 lg:leading-9 font-medium md:font-semibold mb-2">{{ $t('core-value-card5-title') }}</h3>
                <p class="text-sm md:text-base">{{ $t('core-value-card5-detail') }}</p>
            </div>
            <div class="border border-lightGrey rounded-3xl p-4 md:p-8 bg-white text-start">
                <img class="h-10 lg:h-20 w-10 lg:w-20 mb-4 lg:mb-12" src="/images/career/celebrate-progress.svg" :alt="$t('core-value-card6-title')">
                <h3 class="text-xl lg:text-[28px] leading-7 lg:leading-9 font-medium md:font-semibold mb-2">{{ $t('core-value-card6-title') }}</h3>
                <p class="text-sm md:text-base">{{ $t('core-value-card6-detail') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>