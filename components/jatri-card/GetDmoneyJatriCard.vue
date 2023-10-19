<script setup>
const { locale } = useI18n();
</script>

<template>
    <section class="py-10 md:py-20 xl:py-[100px]">
        <div class="custom-container">
            <div class="flex flex-col xl:flex-row justify-between gap-6 sm:gap-10">
                <div class="custom-width xl:w-[465px] flex flex-col justify-between">
                    <div>
                        <h3
                            class="sm:w-auto m-auto text-dark text-[28px] leading-9 lg:text-[44px] lg:leading-[60px] xl:text-[57px] xl:leading-[64px] font-medium sm:font-semibold text-center sm:text-left"
                            :class="locale == 'en' ? 'w-[300px]' : 'w-[232px]'">
                           {{ $t('get-card-title') }}
                        </h3>
                        <p class="hidden sm:block pr-5 text-secondaryDark text-base lg:text-lg xl:text-xl mt-6">{{ $t('get-card-content') }}</p>
                    </div>

                    <div class="hidden sm:flex gap-4 mt-6">
                        <div class="p-4 bg-grey rounded-2xl">
                            <img class="mb-6" src="~/assets/images/jatri-card/jatri-logo-small.png" alt="Jatri logo">
                            <div class="inline-block">
                                <router-link to="" class="flex items-center gap-1 px-3 py-2 bg-white rounded-full">
                                    <img src="~/assets/images/jatri-card/google-play-icon.png" alt="Google play icon">
                                    <p class="text-dark text-sm font-medium">{{$t('get-card-play-store')}}</p>
                                </router-link>
                            </div>
                        </div>
                        <div class="p-4 bg-grey rounded-2xl xl:grow">
                            <img class="mb-6" src="~/assets/images/jatri-card/dmoney-logo-small.png" alt="Dmoney logo">
                            <div class="flex justify-between xl:justify-start gap-2 2xl:gap-5">
                                <router-link to="" class="flex items-center gap-1 px-3 py-2 bg-white rounded-full">
                                    <img src="~/assets/images/jatri-card/apple-logo-small.png" alt="Google play icon">
                                    <p class="text-dark text-sm font-medium">{{$t('get-card-app-store')}}</p>
                                </router-link>
                                <router-link to="" class="flex items-center gap-1 px-3 py-2 bg-white rounded-full">
                                    <img src="~/assets/images/jatri-card/google-play-icon.png" alt="Google play icon">
                                    <p class="text-dark text-sm font-medium">{{$t('get-card-play-store')}}</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div class="sm:w-1/2 border border-[#EDEDED] bg-white rounded-3xl">
                        <div class="bg-secondary p-10 grid place-content-center rounded-t-3xl">
                            <img src="~/assets/images/jatri-card/document-icon.png" alt="Document icon">
                        </div>
                        <div class="p-6 sm:p-4 md:p-6">
                            <h5 class="text-dark text-2xl sm:text-xl lg:text-2xl font-medium mb-6">{{$t('get-card-card1-title')}}</h5>
                            <ul class="grid gap-4 text-base sm:text-sm lg:text-base text-dark">
                                <li>
                                    <img src="~/assets/images/jatri-card/arrow-right-icon.png" alt="right arrow">
                                    <span>{{$t('get-card-card1-content1')}}</span>
                                </li>
                                <li>
                                    <img src="~/assets/images/jatri-card/arrow-right-icon.png" alt="right arrow">
                                    <span>{{$t('get-card-card1-content2')}}</span>
                                </li>
                                <li>
                                    <img src="~/assets/images/jatri-card/arrow-right-icon.png" alt="right arrow">
                                    <span>{{$t('get-card-card1-content3')}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="sm:w-1/2 border border-[#EDEDED] bg-white rounded-3xl">
                        <div class="bg-[#EFF7FD] p-10 grid place-content-center rounded-t-3xl">
                            <img src="~/assets/images/jatri-card/bus-icon.png" alt="Document icon">
                        </div>
                        <div class="p-6 sm:p-4 md:p-6">
                            <h5 class="text-dark text-2xl sm:text-xl lg:text-2xl font-medium mb-6">{{$t('get-card-card2-title')}}</h5>
                            <ul class="grid gap-4 text-base sm:text-sm lg:text-base text-dark">
                                <li v-if="locale === 'en'">
                                    <img src="~/assets/images/jatri-card/arrow-right-icon.png" alt="right arrow">
                                    <span>Go to your nearest <router-link to="/available-activation-counters" class="text-info font-medium underline">available counter</router-link></span>
                                </li>
                                <li v-if="locale === 'bn'">
                                    <img src="~/assets/images/jatri-card/arrow-right-icon.png" alt="right arrow">
                                    <span>আপনার <router-link to="/available-activation-counters" class="text-info font-medium underline">নিকটস্থ কাউন্টার</router-link> এ যান</span>
                                </li>
                                <li>
                                    <img src="~/assets/images/jatri-card/arrow-right-icon.png" alt="right arrow">
                                    <span>{{$t('get-card-card2-content2')}}</span>
                                </li>
                                <li>
                                    <img src="~/assets/images/jatri-card/arrow-right-icon.png" alt="right arrow">
                                    <span>{{$t('get-card-card2-content3')}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sm:hidden mt-6">
                <p class="text-secondaryDark text-base">{{ $t('get-card-content') }}</p>
                <div class="flex gap-4 mt-4">
                    <div class="p-3 bg-grey rounded-2xl">
                        <img class="mb-5" src="~/assets/images/jatri-card/jatri-logo-small.png" alt="Jatri logo">
                        <div class="inline-block">
                            <router-link to="" class="flex items-center gap-1 px-3 py-2 bg-white rounded-full">
                                <img src="~/assets/images/jatri-card/google-play-icon.png" alt="Google play icon">
                                <p class="text-dark text-xs font-medium">{{$t('get-card-play-store')}}</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="p-3 bg-grey rounded-2xl">
                        <img class="mb-5" src="~/assets/images/jatri-card/dmoney-logo-small.png" alt="Dmoney logo">
                        <div class="flex justify-between gap-2">
                            <router-link to="" class="flex items-center gap-1 px-3 py-2 bg-white rounded-full">
                                <img src="~/assets/images/jatri-card/apple-logo-small.png" alt="Google play icon">
                                <p class="text-dark text-xs font-medium">{{$t('get-card-app-store')}}</p>
                            </router-link>
                            <router-link to="" class="flex items-center gap-1 px-3 py-2 bg-white rounded-full">
                                <img src="~/assets/images/jatri-card/google-play-icon.png" alt="Google play icon">
                                <p class="text-dark text-xs font-medium">{{$t('get-card-play-store')}}</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@media only screen and (min-width: 1280px) and (max-width: 1431px) {
    .custom-width {
        @apply w-[540px]
    }
}

li {
    @apply flex items-center gap-1
}

/* ul li::before {
    content: "";
    background-image: url(~/assets/images/jatri-card/arrow-right-icon.png);
    background-repeat: no-repeat;
    display: inline-block;
    width: 24px;
    height: 100%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
} */
</style>