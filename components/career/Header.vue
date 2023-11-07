<script setup>
const { locale } = useI18n();
</script>

<template>
    <div class="pt-[32px] md:pt-16 lg:pt-[132px] pb-10 md:pb-16 lg:pb-[100px]">
        <div class="custom-container mx-auto flex justify-center items-center">
            <div class="relative text-center">
                <div class="hidden lg:block">
                    <div
                        class="developer-badge w-[101px] absolute bg-success text-white py-1.5 rounded-full text-xs font-medium -left-14 -top-10">
                        {{ $t('development') }}</div>
                    <div
                        class="marketing-badge w-[90px] absolute bg-info text-white py-1.5 rounded-full text-xs font-medium -right-14 -top-10">
                        {{ $t('marketing') }}</div>
                    <div
                        class="product-badge w-[86px] absolute bg-[#4633F0] text-white py-1.5 rounded-full text-xs font-medium -left-16 bottom-16">
                        {{ $t('product') }}</div>
                    <div
                        class="business-badge w-[73px] absolute bg-primary text-white py-1.5 rounded-full text-xs font-medium -right-28 bottom-[70px]">
                        {{ $t('business') }}</div>
                </div>
                <div>
                    <h1 class="header-title">{{ $t('career-header-title-1') }}</h1>
                    <h1 class="header-title">{{ $t('career-header-title-2') }}</h1>
                    <h1 class="header-title">{{ $t('career-header-title-3') }}</h1>
                    <p class="text-sm md:text-base font-medium text-secondaryDark mb-8 md:mb-10 mx-auto mt-4 lg:mt-6" :class="locale === 'bn' ? 'w-[90%] sm:w-full' : ''">{{
                        $t('career-header-subtitle') }}</p>
                    <div class="flex justify-center items-center mx-auto gap-4 md:gap-6">
                        <router-link to="#job-opening"
                            class="py-2.5 sm:py-[11px] px-6 border border-dark rounded-full text-sm md:text-base font-medium text-white bg-dark">{{
                                $t('header-btn-one') }}</router-link>
                        <router-link to="#explore-jatri"
                            class="py-2.5 sm:py-[11px] pl-6 pr-4 flex justify-center items-center gap-2 border border-dark rounded-full text-sm md:text-base font-medium text-dark">
                            <span class="inline-block">{{ $t('header-btn-two') }}</span>
                            <span class="inline-block">
                                <img class="w-4 h-4 object-cover md:w-auto" src="/images/career/down-arrow.png" alt="Down arrow">
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header-title {
    @apply pt-2 text-[32px] md:text-5xl lg:text-[57px] leading-10 lg:leading-[64px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E73C2A] to-[#FFB728] text-center
}

.developer-badge::before {
    width: 20px;
    height: 20px;
    position: absolute;
    content: url('/images/career/developer-arrow.png');
    right: -14px;
    bottom: -17px;
}

.marketing-badge::before {
    width: 20px;
    height: 20px;
    position: absolute;
    content: url('/images/career/marketing-arrow.png');
    left: -14px;
    bottom: -17px;
}

.product-badge::before {
    width: 20px;
    height: 20px;
    position: absolute;
    content: url('/images/career/product-arrow.png');
    right: -14px;
    top: -17px;
}

.business-badge::before {
    width: 20px;
    height: 20px;
    position: absolute;
    content: url('/images/career/business-arrow.png');
    left: -14px;
    top: -17px;
}
</style>