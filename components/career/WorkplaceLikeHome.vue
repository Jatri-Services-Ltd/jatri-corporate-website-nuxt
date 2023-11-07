<script setup>
const { locale } = useI18n();
</script>

<template>
    <div class="custom-container mx-auto pb-10 lg:pb-[100px] border-b border-lightGrey">
        <div class="block lg:flex">
            <div class="w-full lg:w-2/3 xl:w-1/2 mt-0 md:mt-[30px]">
                <h2 class="text-[28px] md:text-4xl text-dark leading-9 md:leading-[44px] font-medium">
                    {{ $t('location-title1') }}<br :class="locale === 'bn' ? 'hidden sm:block' : ''">{{ $t('location-title2') }}
                </h2>
                <p class="text-sm md:text-base text-secondaryDark pb-8 border-b mr-0 md:mr-24 mt-4">{{ $t('location-subtitle') }}</p>
                <p class="uppercase text-sm text-[#8D8D8F] font-medium mb-5 mt-8">{{ $t('our-location') }}</p>
                <div class="grid grid-cols-2">
                    <div>
                        <div class="flex items-center gap-3 mb-6 md:mb-8">
                            <img class="h-5 w-5" src="/images/career/map.svg" alt="Location">
                            <p class="text-dark text-base md:text-xl font-medium">{{ $t('location-one') }}</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <img class="h-5 w-5" src="/images/career/map.svg" alt="Location">
                            <p class="text-dark text-base md:text-xl font-medium">{{ $t('location-three') }}</p>
                        </div>
                    </div>
                    <div class="">
                        <div class="flex items-center gap-3 mb-6 md:mb-8">
                            <img class="h-5 w-5" src="/images/career/map.svg" alt="Location">
                            <p class="text-dark text-base md:text-xl font-medium">{{ $t('location-two') }}</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <img class="h-5 w-5" src="/images/career/map.svg" alt="Location">
                            <p class="text-dark text-base md:text-xl font-medium">{{ $t('location-four') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[312px] lg:w-1/3 xl:w-1/2 mx-auto flex justify-center lg:justify-end mt-6 lg:mt-0">
                <img src="/images/career/workplace.png" alt="Jatri Career">
            </div>
        </div>
    </div>
</template>