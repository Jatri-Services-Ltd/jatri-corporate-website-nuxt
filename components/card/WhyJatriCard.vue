<script setup>

</script>

<template>
    <section class="py-10 md:py-20 xl:py-[100px]">
        <div class="custom-container">
            <h2 class="text-dark text-[28px] leading-9 lg:text-[44px] lg:leading-[60px] xl:text-[57px] xl:leading-[64px] font-medium sm:font-semibold text-center capitalize">{{ $t('card-why-header') }}</h2>
            <div class="mt-6 sm:mt-10 lg:mt-12 flex flex-col md:flex-row gap-4 lg:gap-8 justify-between">
                <div class="p-6 md:px-2 md:py-6 lg:px-5 xl:px-6 xl:py-8 2xl:px-12 border border-[#EDEDED] rounded-3xl text-center grow md:basis-[392px]">
                    <img class="w-12 sm:w-16 lg:w-20 xl:w-auto m-auto" src="~/assets/images/jatri-card/card-icon.png" alt="Card icon">
                    <h4 class="mt-6 xl:mt-8 mb-2 md:mb-4 text-dark text-xl md:text-lg xl:text-[28px] xl:leading-9 font-semibold">{{ $t('card-why-subHeader1') }}</h4>
                    <p class="text-secondaryDark text-sm xl:text-base">{{ $t('card-why-content1') }}</p>
                </div>

                <div class="p-6 md:px-2 md:py-6 lg:px-5 xl:px-6 xl:py-8 2xl:px-12 border border-[#EDEDED] rounded-3xl text-center grow md:basis-[392px]">
                    <img class="w-12 sm:w-16 lg:w-20 xl:w-auto m-auto" src="~/assets/images/jatri-card/cash-icon.png" alt="Cash icon">
                    <h4 class="mt-6 xl:mt-8 mb-2 md:mb-4 text-dark text-xl md:text-lg xl:text-[28px] xl:leading-9 font-semibold">{{ $t('card-why-subHeader2') }}</h4>
                    <p class="text-secondaryDark text-sm xl:text-base">{{ $t('card-why-content2') }}</p>
                </div>

                <div class="py-6 px-9 md:px-2 md:py-6 lg:px-5 xl:px-6 xl:py-8 2xl:px-12 border border-[#EDEDED] rounded-3xl text-center grow md:basis-[392px]">
                    <img class="w-12 sm:w-16 lg:w-20 xl:w-auto m-auto" src="~/assets/images/jatri-card/travel-icon.png" alt="Travel icon">
                    <h4 class="mt-6 xl:mt-8 mb-2 md:mb-4 text-dark text-xl md:text-lg xl:text-[28px] xl:leading-9 font-semibold">{{ $t('card-why-subHeader3') }}</h4>
                    <p class="text-secondaryDark text-sm xl:text-base">{{ $t('card-why-content3') }}</p>
                </div>
            </div>
        </div>
    </section>
</template>