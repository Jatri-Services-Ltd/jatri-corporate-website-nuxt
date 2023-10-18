<script setup>

</script>

<template>
    <section class="mt-4 sm:mt-10 lg:pt-[112px]">
        <div class="custom-container">
            <div class="relative h-[280px] lg:h-[446px] rounded-3xl bg-[linear-gradient(98deg,_#F04935_1.78%,_#887CF5_98.84%)] flex items-center">
                <div class="custom-padding z-10 lg:w-[60%] pl-4 lg:pl-10 xl:pl-20">
                    <h1 class="w-[252px] sm:w-10/12 lg:w-auto text-2xl sm:text-3xl lg:text-[39px] lg:leading-[50px] xl:text-[57px] xl:leading-[64px] font-semibold text-white">
                        {{ $t('n-home-dmoney-jatricard-title') }}
                    </h1>
                    <p class="w-[220px] sm:w-auto text-white text-sm lg:text-base font-medium mt-1 lg:mt-4 mb-6 lg:mb-12">{{ $t('n-home-dmoney-jatricard-des') }}</p>
                    <div class="flex flex-col sm:flex-row items-start lg:items-center gap-4 lg:gap-6">
                        <router-link to="/jatri-card" class="bg-white border border-white rounded-full inline-block px-6 py-2.5 lg:py-[11px] text-xs md:text-sm lg:text-base font-medium text-primary">
                            {{ $t('n-home-dmoney-jatricard-getcard-button') }}
                        </router-link>
                        <router-link to="/jatri-card" class="flex items-center gap-2 border border-white rounded-full px-6 py-2.5 lg:py-[11px] text-xs md:text-sm lg:text-base font-medium text-white">
                           <span>{{ $t('n-home-dmoney-jatricard-learnmore-button') }}</span>
                           <img src="~/assets/images/jatri-card/right-arrow.png" alt=">">
                        </router-link>
                    </div>
                </div>

                <img class="w-[192px] sm:w-[250px] lg:w-auto absolute -right-3 xl:right-24 2xl:right-5 3xl:right-24 bottom-0" src="~/assets/images/jatri-card/girl-with-card.png" alt="Jatri Card Image">
            </div>
        </div>
    </section>
</template>

<style scoped>
@media only screen and (min-width: 1280px) and (max-width: 1431px) {
    .custom-padding {
        @apply pl-14
    }
}

/* @media only screen and (min-width: 640px) {
    .banner-title br {
        @apply hidden
    }
} */
</style>