<template>
    <section class="mt-4 md:mt-8">
        <div class="custom-container">
            <div class="bg-secondary rounded-3xl p-4 md:px-5 xl:px-14 sm:py-5 md:py-7 lg:py-8 xl:py-10 flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-4">
                <div>
                    <h4 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl xl:leading-[44px] font-semibold text-dark mb-2">{{ $t('n-call-to-action-title') }}</h4>
                    <p class="text-sm lg:text-base">{{ $t('n-call-to-action-des') }}</p>
                </div>
                <div class="inline-block">
                    <nuxt-link :to="localePath('/about-us')" class="flex justify-center items-center gap-2 rounded-full bg-[#FDE5E2] pl-6 p-4 xl:px-10 py-2.5 xl:py-[11px]">
                        <p class="text-sm lg:text-base font-medium text-[#D42410]">{{ $t('n-call-to-action-button') }}</p>
                        <img src="~/assets/images/home/primary-right-arrow.png" alt="Arrow icon" class="w-4 lg:w-auto">
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>