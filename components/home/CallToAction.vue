<template>
    <section class="mt-4 md:mt-8">
        <div class="custom-container">
            <div class="bg-secondary rounded-3xl p-4 md:px-5 xl:px-14 sm:py-5 md:py-7 lg:py-8 xl:py-10 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
                <div>
                    <h4 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-dark mb-2">{{ $t('n-call-to-action-title') }}</h4>
                    <p class="text-sm lg:text-base">{{ $t('n-call-to-action-des') }}</p>
                </div>
                <div class="inline-block">
                    <nuxt-link :to="localePath('/about-us')" class="w-max flex justify-center items-center gap-2 rounded-full bg-[#FDE5E2] px-4 xl:px-10 py-[11px] cursor-pointer">
                        <span data-v-35b889ec="" class="text-sm lg:text-base font-medium text-[#D42410]">{{ $t('n-call-to-action-button') }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10.8842 9.99987L6.75916 5.87487L7.93749 4.69653L13.2408 9.99987L7.93749 15.3032L6.75916 14.1249L10.8842 9.99987Z" fill="#D42410"/>
                        </svg>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>