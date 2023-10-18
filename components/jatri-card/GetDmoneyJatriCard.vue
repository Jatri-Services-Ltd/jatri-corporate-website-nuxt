<script setup>

</script>

<template>
    <section class=" py-10 md:py-20 xl:pt-[92px]">
        <div class="custom-container">
            <div class="flex flex-col md:flex-row justify-between gap-10">
                <div class="flex flex-col justify-between">
                    <div>
                        <h3 class="text-dark text-[28px] leading-9 lg:text-[44px] lg:leading-[60px] xl:text-[57px] xl:leading-[64px] font-semibold">
                            How to get Dmoney Jatri card
                        </h3>
                        <p class="text-secondaryDark text-xl mt-6">Install “Dmoney” app in your phone to open account and apply for card.</p>
                    </div>

                    <div class="flex justify-between gap-4">
                        <div class="p-4 bg-grey rounded-2xl">
                            <img class="mb-6" src="~/assets/images/jatri-card/jatri-logo-small.png" alt="Jatri logo">
                            <router-link to="" class="flex items-center gap-1 px-3 py-2 bg-white rounded-full">
                                <img src="~/assets/images/jatri-card/google-play-icon.png" alt="Google play icon">
                                <p class="text-dark text-sm font-medium">Play Store</p>
                            </router-link>
                        </div>
                        <div class="p-4 bg-grey rounded-2xl">
                            <img class="mb-6" src="~/assets/images/jatri-card/dmoney-logo-small.png" alt="Dmoney logo">
                            <div class="flex gap-2">
                                <router-link to="" class="flex items-center gap-1 px-3 py-2 bg-white rounded-full">
                                    <img src="~/assets/images/jatri-card/apple-logo-small.png" alt="Google play icon">
                                    <p class="text-dark text-sm font-medium">App Store</p>
                                </router-link>
                                <router-link to="" class="flex items-center gap-1 px-3 py-2 bg-white rounded-full">
                                    <img src="~/assets/images/jatri-card/google-play-icon.png" alt="Google play icon">
                                    <p class="text-dark text-sm font-medium">Play Store</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex gap-6">
                    <div class="border border-[#EDEDED] bg-white rounded-3xl">
                        <div class="bg-secondary p-10 grid place-content-center rounded-t-3xl">
                            <img src="~/assets/images/jatri-card/document-icon.png" alt="Document icon">
                        </div>
                        <div class="p-6">
                            <h5 class="text-dark text-2xl font-medium mb-6">Get online</h5>
                            <ul class="grid gap-4 text-base text-dark">
                                <li>Open Dmoney account</li>
                                <li>Apply for “Dmoney Jatri card” and order</li>
                                <li>Get your Dmoney Jatri card at your doorstep</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* @media only screen and (min-width: 1280px) and (max-width: 1431px) {
    .custom-title {
        @apply text-[50px] leading-[66px]
    }
} */

ul {
    list-style-image:url("~/assets/images/jatri-card/arrow-right-icon.png");
    list-style-position: inside;
}
</style>