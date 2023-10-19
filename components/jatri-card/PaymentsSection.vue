<script setup>

</script>

<template>
    <section class="pb-10 md:pb-20 xl:pb-[100px]">
        <div class="custom-container">
            <div class="flex flex-col md:flex-row justify-between gap-4">
                <div class="md:w-[392px]">
                    <h3 class="custom-title text-dark text-[28px] leading-9 lg:text-[44px] lg:leading-[60px] xl:text-[57px] xl:leading-[64px] font-semibold">{{ $t('card-payment-title') }}</h3>
                </div>

                <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 lg:gap-6 md:w-[700px]">
                    <div class="bg-[#F4F8FB] p-4 xl:p-6 rounded-2xl">
                        <img class="w-auto lg:w-8 xl:w-auto" src="~/assets/images/jatri-card/bus-ticket-icon.png" alt="Bus ticket icon">
                        <h4 class="mt-6 md:mt-4 xl:mt-6 text-dark text-2xl lg:text-xl xl:text-[28px] xl:leading-9 font-medium">{{ $t('card-payment-tickets') }}</h4>
                    </div>

                    <div class="bg-[#F4F8FB] p-4 xl:p-6 rounded-2xl">
                        <div class="flex justify-between items-start gap-1">
                            <img class="w-auto lg:w-8 xl:w-auto" src="~/assets/images/jatri-card/toll-booth-icon.png" alt="Bus ticket icon">
                            <p class="py-1 px-2 lg:px-2 border border-[#CFE6F9] rounded-full inline-block text-xs lg:text-xs text-[#6FB3EE]">{{ $t('card-payment-comingSoon') }}</p>
                        </div>
                        <h4 class="mt-6 md:mt-4 xl:mt-6 text-dark text-2xl lg:text-xl xl:text-[28px] xl:leading-9 font-medium">{{ $t('card-payment-toll') }}</h4>
                    </div>

                    <div class="bg-[#F4F8FB] p-4 xl:p-6 rounded-2xl">
                        <div class="flex justify-between items-start gap-1">
                            <img class="w-auto lg:w-8 xl:w-auto" src="~/assets/images/jatri-card/car-icon.png" alt="Bus ticket icon">
                            <p class="py-1 px-2 lg:px-2 border border-[#CFE6F9] rounded-full inline-block text-xs lg:text-xs text-[#6FB3EE]">{{ $t('card-payment-comingSoon') }}</p>
                        </div>
                        <h4 class="mt-6 md:mt-4 xl:mt-6 text-dark text-2xl lg:text-xl xl:text-[28px] xl:leading-9 font-medium">{{ $t('card-payment-parking') }}</h4>
                    </div>

                    <div class="bg-[#F4F8FB] p-4 xl:p-6 rounded-2xl">
                        <img class="w-auto lg:w-8 xl:w-auto" src="~/assets/images/jatri-card/pos-icon.png" alt="Bus ticket icon">
                        <h4 class="mt-6 md:mt-4 xl:mt-6 text-dark text-2xl lg:text-xl xl:text-[28px] xl:leading-9 font-medium">{{ $t('card-payment-pos') }}</h4>
                    </div>

                    <div class="bg-[#F4F8FB] p-4 xl:p-6 rounded-2xl">
                        <img class="w-auto lg:w-8 xl:w-auto" src="~/assets/images/jatri-card/atm-icon.png" alt="Bus ticket icon">
                        <h4 class="mt-6 md:mt-4 xl:mt-6 text-dark text-2xl lg:text-xl xl:text-[28px] xl:leading-9 font-medium">{{ $t('card-payment-atm') }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@media only screen and (min-width: 1280px) and (max-width: 1431px) {
    .custom-title {
        @apply text-[50px] leading-[66px]
    }
}
</style>