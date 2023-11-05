<template>
    <div class="pt-[32px] md:pt-16 lg:pt-[132px] pb-10 md:pb-16 lg:pb-[100px]">
        <div class="custom-container mx-auto flex justify-center items-center">
            <div class="relative text-center">
                <div class="hidden lg:block">
                    <div class="developer-badge absolute bg-[#48A43F] text-white px-4 py-[6px] rounded-full text-xs font-medium -left-14 -top-10">{{ $t('development') }}</div>
                    <div class="marketing-badge absolute bg-[#1E88E5] text-white px-4 py-[6px] rounded-full text-xs font-medium -right-14 -top-10">{{ $t('marketing') }}</div>
                    <div class="product-badge absolute bg-[#4633F0] text-white px-4 py-[6px] rounded-full text-xs font-medium -left-16 bottom-16">{{ $t('product') }}</div>
                    <div class="business-badge absolute bg-[#F04935] text-white px-4 py-[6px] rounded-full text-xs font-medium -right-28 bottom-[70px]">{{ $t('business') }}</div>
                </div>
                <div class="">
                    <h1 class="header-title">{{ $t('career-header-title-1') }}</h1>
                    <h1 class="header-title">{{ $t('career-header-title-2') }}</h1>
                    <h1 class="header-title">{{ $t('career-header-title-3') }}</h1>
                    <p class="text-sm md:text-base text-[#4d4d4f] mb-8 md:mb-10 mx-auto mt-4 lg:mt-6">{{ $t('career-header-subtitle') }}</p>
                    <div class="flex justify-center items-center mx-auto gap-4">
                        <router-link to="#job-opening" class="h-[40px] md:h-[46px] w-[155px] md:w-[180px] flex justify-center items-center border border-black rounded-full text-sm md:text-base font-medium text-white bg-black">{{ $t('header-btn-one') }}</router-link>
                        <router-link to="#" class="h-[40px] md:h-[46px] w-[155px] md:w-[193px] flex justify-center items-center gap-3 border border-black rounded-full text-sm md:text-base font-medium text-black">
                        <span class="inline-block">{{ $t('header-btn-two') }}</span>
                        <span class="inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7.83355 10.4766L12.3036 6.00658L13.4819 7.18492L7.00022 13.6666L0.518555 7.18492L1.69689 6.00658L6.16689 10.4766V0.333252H7.83355V10.4766Z" fill="#151414"/>
                            </svg>
                        </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.header-title{
    @apply pt-2 text-[32px] md:text-5xl lg:text-[57px] leading-10 lg:leading-[64px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E73C2A] to-[#FFB728] text-center
}
.developer-badge::before{
    position: absolute;
    content: url('/images/career/developer-arrow.svg');
    right: -14px;
    bottom: -17px;
}
.marketing-badge::before{
    position: absolute;
    content: url('/images/career/marketing-arrow.svg');
    left: -14px;
    bottom: -17px;
}
.product-badge::before{
    position: absolute;
    content: url('/images/career/product-arrow.svg');
    right: -13px;
    top: -13px;
}
.business-badge::before{
    position: absolute;
    content: url('/images/career/business-arrow.svg');
    left: -13px;
    top: -13px;
}
</style>