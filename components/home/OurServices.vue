<script setup>

</script>

<template>
    <section> 
        <div class="custom-container">
            <div class="grid md:grid-cols-3 gap-4 lg:gap-8">
                <div class="border border-lightGrey rounded-2xl">
                    <img class="hidden sm:block w-full rounded-t-2xl" src="~/assets/images/home/bus-ticket.png" alt="Bus image">
                    <img class="sm:hidden w-full rounded-t-2xl" src="~/assets/images/home/bus-ticketing-mobile.png" alt="Bus image">
                    <div class="p-4 lg:px-4 lg:py-6 flex md:flex-col justify-between md:justify-start items-center md:items-start gap-1 md:gap-4">
                        <h3 class="text-2xl font-medium text-dark">{{ $t('n-services-item1-title') }}</h3>
                        <div class="inline-block">
                            <a href="https://ticket.jatri.co/" class="flex justify-center items-center gap-2 rounded-full bg-primary pl-6 pr-4 lg:px-6 py-2.5 cursor-pointer">
                                <span data-v-35b889ec="" class="text-sm font-medium capitalize text-white">{{ $t('n-services-buy-ticket-button') }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.8842 9.99987L6.75916 5.87487L7.93749 4.69653L13.2408 9.99987L7.93749 15.3032L6.75916 14.1249L10.8842 9.99987Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="border border-lightGrey rounded-2xl">
                    <img class="hidden sm:block w-full rounded-t-2xl" src="~/assets/images/home/launch-ticket.png" alt="Bus image">
                    <img class="sm:hidden w-full rounded-t-2xl" src="~/assets/images/home/launch-ticket-mobile.png" alt="Bus image">
                    <div class="p-4 lg:px-4 lg:py-6 flex md:flex-col justify-between md:justify-start items-center md:items-start gap-1 md:gap-4">
                        <h3 class="text-2xl font-medium text-dark">{{ $t('n-services-item2-title') }}</h3>
                        <div class="inline-block">
                            <a href="https://ticket.jatri.co/launch" class="flex justify-center items-center gap-2 rounded-full bg-primary pl-6 pr-4 lg:px-6 py-2.5 cursor-pointer">
                                <span data-v-35b889ec="" class="text-sm font-medium capitalize text-white">{{ $t('n-services-buy-ticket-button') }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.8842 9.99987L6.75916 5.87487L7.93749 4.69653L13.2408 9.99987L7.93749 15.3032L6.75916 14.1249L10.8842 9.99987Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="border border-lightGrey rounded-2xl">
                    <img class="hidden sm:block w-full rounded-t-2xl" src="~/assets/images/home/rental.png" alt="Bus image">
                    <img class="sm:hidden w-full rounded-t-2xl" src="~/assets/images/home/rental-mobile.png" alt="Bus image">
                    <div class="p-4 lg:px-4 lg:py-6 flex md:flex-col justify-between md:justify-start items-center md:items-start gap-1 md:gap-4">
                        <h3 class="text-2xl font-medium text-dark">{{ $t('n-services-item3-title') }}</h3>
                        <div class="inline-block">
                            <a href="https://rental.jatri.co/" class="flex justify-center items-center gap-2 rounded-full bg-primary pl-6 pr-4 lg:px-6 py-2.5 cursor-pointer">
                                <span data-v-35b889ec="" class="text-sm font-medium capitalize text-white">{{ $t('n-services-book-now-button') }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.8842 9.99987L6.75916 5.87487L7.93749 4.69653L13.2408 9.99987L7.93749 15.3032L6.75916 14.1249L10.8842 9.99987Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>