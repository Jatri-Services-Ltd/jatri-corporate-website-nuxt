<script setup></script>

<template>
    <section class="py-4 sm:pt-10 lg:pt-[116px] pb-8">
        <div class="custom-container">
            <nuxt-link :to="localePath('/card')">
                <div
                    class="relative h-[280px] lg:h-[446px] rounded-3xl bg-[linear-gradient(98deg,_#F04935_1.78%,_#887CF5_98.84%)] flex items-center">
                    <div class="custom-padding z-10 lg:w-[60%] pl-4 lg:pl-10 xl:pl-20">
                        <h1
                            class="w-[252px] sm:w-[60%] lg:w-[90%] text-2xl sm:text-3xl lg:text-[39px] lg:leading-[50px] xl:text-[57px] xl:leading-[64px] font-semibold text-white">
                            {{ $t('n-home-dmoney-jatricard-title') }}
                        </h1>
                        <p class="w-[190px] sm:w-auto text-white text-xs md:text-sm lg:text-base mt-1 sm:mt-2 lg:mt-4 mb-6 lg:mb-12">{{
                            $t('n-home-dmoney-jatricard-des') }}</p>
                        <div class="flex flex-col sm:flex-row items-start lg:items-center gap-4 lg:gap-6">
                            <nuxt-link :to="`${localePath('/card')}`+'/#get-dmoney-card'"
                                class="w-[165px] sm:w-auto bg-white border border-white rounded-full inline-block sm:px-6 py-2.5 lg:py-[11px] text-center text-xs md:text-sm lg:text-base font-medium text-primary">
                                {{ $t('n-home-dmoney-jatricard-getcard-button') }}
                            </nuxt-link>
                            <nuxt-link :to="localePath('/card')"
                                class="w-[165px] sm:w-auto flex items-center justify-center gap-2 border border-white rounded-full pl-6 pr-4 py-2.5 lg:py-[11px] text-center text-xs md:text-sm lg:text-base font-medium text-white">
                                <span>{{ $t('n-home-dmoney-jatricard-learnmore-button') }}</span>
                                <img class="w-4 md:w-auto" src="~/assets/images/jatri-card/right-arrow.png" alt=">">
                            </nuxt-link>
                        </div>
                    </div>

                    <img class="custom-position w-[250px] lg:w-auto absolute -right-3 xl:right-24 2xl:right-5 3xl:right-24 bottom-0 hidden sm:block"
                        src="~/assets/images/jatri-card/girl-with-card.png" alt="Jatri Card Image">
                    <img class="absolute -right-3 bottom-0 sm:hidden"
                        src="~/assets/images/jatri-card/girl-with-card-small.png" alt="Jatri Card Image">
                </div>
            </nuxt-link>
        </div>
    </section>
</template>

<style scoped>
@media only screen and (min-width: 1280px) and (max-width: 1431px) {
    .custom-padding {
        @apply pl-14
    }

    .custom-position {
        @apply right-10
    }
}
</style>