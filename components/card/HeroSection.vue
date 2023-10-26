
<template>
    <section class="mt-4">
        <div class="custom-container">
            <div class="relative h-[344px] lg:h-auto rounded-3xl bg-[linear-gradient(98deg,_#F04935_1.78%,_#887CF5_98.84%)] flex flex-col lg:flex-row justify-start lg:justify-between items-center gap-4 overflow-hidden">
                <div class="z-10 px-4 md:px-8 lg:pr-0 lg:pl-12 xl:pl-20 pt-8 lg:pt-0 text-center lg:text-left">
                    <h1 class="banner-title 2xl:w-[729px] mb-6 text-[28px] leading-9 sm:text-4xl sm:leading-[50px] lg:text-[44px] xl:text-[64px] lg:leading-[56px] xl:leading-[80px] 2xl:text-[56px] 2xl:leading-[72px] 3xl:text-[64px] 3xl:leading-[80px] font-bold text-white">
                      {{ $t('card-hero-header') }}
                    </h1>
                    <nuxt-link to="#get-dmoney-card" class="bg-white rounded-full inline-block px-8 py-[11px] lg:py-4 text-base lg:text-lg xl:text-xl font-medium text-primary">{{ $t('card-hero-btn') }}</nuxt-link>
                </div>

                <img class="hidden lg:block w-[464px] h-[372px] object-cover" src="~/assets/images/jatri-card/jatri-card-banner-img.png" alt="Jatri Card Image">
                <img class="lg:hidden absolute right-0 bottom-0 z-0" src="~/assets/images/jatri-card/jatri-card-banner-img-small.png" alt="Jatri Card Image">
            </div>
        </div>
    </section>
</template>

<style scoped>
@media only screen and (min-width: 1280px) and (max-width: 1431px) {
    .banner-title {
        @apply text-[50px] leading-[66px]
    }
}

@media only screen and (min-width: 640px) {
    .banner-title br {
        @apply hidden
    }
}
</style>