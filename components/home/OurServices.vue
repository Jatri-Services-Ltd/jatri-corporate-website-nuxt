<script setup>

</script>

<template>
    <section> 
        <div class="custom-container">
            <div class="grid md:grid-cols-3 gap-4 lg:gap-8">
                <div class="border border-[#EDEDED] rounded-2xl">
                    <img class="w-full h-[160px] sm:h-[200px] 3xl:h-[300px] object-cover rounded-t-2xl" src="~/assets/images/home/intercity.jpg" alt="Bus image">
                    <div class="p-4 lg:px-4 lg:py-6 flex md:flex-col justify-between md:justify-start items-center md:items-start gap-1 md:gap-4">
                        <h3 class="text-2xl font-medium text-dark">{{ $t('n-services-item1-title') }}</h3>
                        <div class="inline-block">
                            <a href="https://ticket.jatri.co/" class="flex justify-center items-center gap-2 rounded-full bg-primary px-4 py-2.5 cursor-pointer">
                                <span data-v-35b889ec="" class="text-sm lg:text-base font-medium text-white">{{ $t('n-services-buy-ticket-button') }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.8842 9.99987L6.75916 5.87487L7.93749 4.69653L13.2408 9.99987L7.93749 15.3032L6.75916 14.1249L10.8842 9.99987Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="border border-[#EDEDED] rounded-2xl">
                    <img class="w-full h-[160px] sm:h-[200px] 3xl:h-[300px] object-cover rounded-t-2xl" src="~/assets/images/home/launch.jpg" alt="Bus image">
                    <div class="p-4 lg:px-4 lg:py-6 flex md:flex-col justify-between md:justify-start items-center md:items-start gap-1 md:gap-4">
                        <h3 class="text-2xl font-medium text-dark">{{ $t('n-services-item2-title') }}</h3>
                        <div class="inline-block">
                            <a href="https://ticket.jatri.co/" class="flex justify-center items-center gap-2 rounded-full bg-primary px-4 py-2.5 cursor-pointer">
                                <span data-v-35b889ec="" class="text-sm lg:text-base font-medium text-white">{{ $t('n-services-buy-ticket-button') }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.8842 9.99987L6.75916 5.87487L7.93749 4.69653L13.2408 9.99987L7.93749 15.3032L6.75916 14.1249L10.8842 9.99987Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="border border-[#EDEDED] rounded-2xl">
                    <img class="w-full h-[160px] sm:h-[200px] 3xl:h-[300px] object-cover rounded-t-2xl" src="~/assets/images/home/rental.jpg" alt="Bus image">
                    <div class="p-4 lg:px-4 lg:py-6 flex md:flex-col justify-between md:justify-start items-center md:items-start gap-1 md:gap-4">
                        <h3 class="text-2xl font-medium text-dark">{{ $t('n-services-item3-title') }}</h3>
                        <div class="inline-block">
                            <a href="https://ticket.jatri.co/" class="flex justify-center items-center gap-2 rounded-full bg-primary px-4 py-2.5 cursor-pointer">
                                <span data-v-35b889ec="" class="text-sm lg:text-base font-medium text-white">{{ $t('n-services-book-now-button') }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
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