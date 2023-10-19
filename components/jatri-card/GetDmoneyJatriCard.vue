<script setup>

</script>

<template>
    <section class=" py-10 md:py-20 xl:pt-[92px]">
        <div class="custom-container">
            <div class="flex flex-col xl:flex-row justify-between gap-6 sm:gap-10">
                <div class="custom-width flex flex-col justify-between xl:w-[464px] 2xl:w-[600px]">
                    <div>
                        <h3
                            class="text-dark text-[28px] leading-9 lg:text-[44px] lg:leading-[60px] xl:text-[57px] xl:leading-[64px] font-semibold text-center sm:text-left px-10 sm:px-0">
                            How to get Dmoney Jatri card
                        </h3>
                        <p class="hidden sm:block text-secondaryDark text-base lg:text-lg xl:text-xl mt-6">Install “Dmoney”
                            app in your phone to open account and apply for card.</p>
                    </div>

                    <div class="hidden sm:flex gap-4 mt-6">
                        <div class="p-4 bg-grey rounded-2xl xl:grow">
                            <img class="mb-6" src="~/assets/images/jatri-card/jatri-logo-small.png" alt="Jatri logo">
                            <div class="inline-block">
                                <router-link to="" class="flex items-center gap-1 px-3 py-2 bg-white rounded-full">
                                    <img src="~/assets/images/jatri-card/google-play-icon.png" alt="Google play icon">
                                    <p class="text-dark text-sm font-medium">Play Store</p>
                                </router-link>
                            </div>
                        </div>
                        <div class="p-4 bg-grey rounded-2xl xl:grow">
                            <img class="mb-6" src="~/assets/images/jatri-card/dmoney-logo-small.png" alt="Dmoney logo">
                            <div class="flex justify-between 2xl:justify-start gap-2 2xl:gap-5">
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

                <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div class="border border-[#EDEDED] bg-white rounded-3xl grow">
                        <div class="bg-secondary p-10 grid place-content-center rounded-t-3xl">
                            <img src="~/assets/images/jatri-card/document-icon.png" alt="Document icon">
                        </div>
                        <div class="p-6 sm:p-4 md:p-6">
                            <h5 class="text-dark text-2xl sm:text-xl lg:text-2xl font-medium mb-6">Get online</h5>
                            <ul class="grid gap-4 text-base sm:text-sm lg:text-base text-dark">
                                <li>Open Dmoney account</li>
                                <li>Apply for “Dmoney Jatri card” and order</li>
                                <li>Get your Dmoney Jatri card at your doorstep</li>
                            </ul>
                        </div>
                    </div>

                    <div class="border border-[#EFF7FD] bg-white rounded-3xl grow">
                        <div class="bg-[#EFF7FD] p-10 grid place-content-center rounded-t-3xl">
                            <img src="~/assets/images/jatri-card/bus-icon.png" alt="Document icon">
                        </div>
                        <div class="p-6 sm:p-4 md:p-6">
                            <h5 class="text-dark text-2xl sm:text-xl lg:text-2xl font-medium mb-6">Nearest bus counter</h5>
                            <ul class="grid gap-4 text-base sm:text-sm lg:text-base text-dark">
                                <li>Go to your nearest <router-link to="" class="text-info underline">available counter</router-link></li>
                                <li>Fill up info & open account with NID</li>
                                <li>Get your card instantly</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sm:hidden mt-6">
                <p class="text-secondaryDark text-base">Install “Dmoney” app in your phone to open account and apply for card.</p>
                <div class="flex gap-4 mt-4">
                    <div class="p-3 bg-grey rounded-2xl">
                        <img class="mb-5" src="~/assets/images/jatri-card/jatri-logo-small.png" alt="Jatri logo">
                        <div class="inline-block">
                            <router-link to="" class="flex items-center gap-1 px-3 py-2 bg-white rounded-full">
                                <img src="~/assets/images/jatri-card/google-play-icon.png" alt="Google play icon">
                                <p class="text-dark text-xs font-medium">Play Store</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="p-3 bg-grey rounded-2xl">
                        <img class="mb-5" src="~/assets/images/jatri-card/dmoney-logo-small.png" alt="Dmoney logo">
                        <div class="flex justify-between gap-2">
                            <router-link to="" class="flex items-center gap-1 px-3 py-2 bg-white rounded-full">
                                <img src="~/assets/images/jatri-card/apple-logo-small.png" alt="Google play icon">
                                <p class="text-dark text-xs font-medium">App Store</p>
                            </router-link>
                            <router-link to="" class="flex items-center gap-1 px-3 py-2 bg-white rounded-full">
                                <img src="~/assets/images/jatri-card/google-play-icon.png" alt="Google play icon">
                                <p class="text-dark text-xs font-medium">Play Store</p>
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
        @apply w-[600px]
    }
}

li {
    @apply flex gap-1
}

ul li::before {
    content: "";
    background-image: url(~/assets/images/jatri-card/arrow-right-icon.png);
    background-repeat: no-repeat;
    display: inline-block;
    width: 24px;
    height: 100%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
</style>