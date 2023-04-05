<script setup>
import PrimaryIconButton from "~/components/buttons/PrimaryIconButton";
</script>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
}
p {
    @apply text-body
}
</style>

<template>
    <!-- Hero Section -->
    <div class="h-[431px] xl:h-[800px] relative w-full bg-[url('~/assets/images/svg/hero-bg.svg')] bg-no-repeat bg-cover bg-bottom">
        <!-- <img src="~/assets/images/svg/hero-bg.svg" alt="Hero bg img" class="w-full absolute -z-10"> -->

        <div class="pt-12 xl:pt-[120px] px-4 text-center">
            <h1 class="w-full xl:w-[780px] block m-auto text-[32px] leading-10 xl:text-[64px] xl:leading-[72px] font-bold">Empowering Bangladesh to travel better!</h1>
            <p class="w-full xl:w-[572px] block m-auto pt-6 pb-8 text-secondaryBlack text-sm xl:text-xl">Lorem ipsum dolor sit amet consectetur. Suspendisse cras arcu est et dignissim non lacus neque sit.</p>
            <div class="inline-block m-auto">
                <PrimaryIconButton />
            </div>
        </div>
    </div>
</template>