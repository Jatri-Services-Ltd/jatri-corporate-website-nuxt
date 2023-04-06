<style scoped>
.testimonial-slider-item {
    @apply w-[348px] lg:w-[400px] rounded-3xl p-6 xl:p-8 flex flex-col justify-between flex-shrink-0 gap-8 xl:gap-10
}
</style>


<template>
    <section class="my-20 pl-4 md:pl-20 lg:pl-[100px] flex justify-between flex-wrap lg:flex-nowrap gap-8 xl:gap-16">
        <div class="w-full lg:w-2/5 pr-4 lg:pr-0 flex xl:flex-col gap-5 justify-between lg:justify-center">
            <h4 class="primary-heading">Don’t just believe our words</h4>
            <div class="flex items-center gap-4 xl:gap-6">
                <button class="rounded-full border border-[#DBDBDB] w-[46px] lg:w-[60px] h-[46px] lg:h-[60px] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" class="w-4 lg:w-[22px] transform rotate-0">
                        <path d="M5.43734 9.66673H21.6667V12.3334H5.43734L12.5893 19.4854L10.704 21.3707L0.333336 11.0001L10.704 0.629395L12.5893 2.51473L5.43734 9.66673Z" fill="#8D8D8F"/>
                    </svg>
                </button>

                <button class="rounded-full border border-[#DBDBDB] w-[46px] lg:w-[60px] h-[46px] lg:h-[60px] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" class="w-4 lg:w-[22px] transform rotate-180">
                        <path d="M5.43734 9.66673H21.6667V12.3334H5.43734L12.5893 19.4854L10.704 21.3707L0.333336 11.0001L10.704 0.629395L12.5893 2.51473L5.43734 9.66673Z" fill="#151414"/>
                    </svg>
                </button>
            </div>
        </div>

        <div class="w-full lg:w-3/5 overflow-x-scroll flex gap-6 xl:gap-10">
            <div class="w-full flex gap-6 xl:gap-10">
                <div class="testimonial-slider-item bg-secondary">
                    <div>
                        <img src="~/assets/images/svg/rasel-shuvo.svg" alt="Rasel Shuvo img" class="border-8 border-[#FCD7D3] rounded-full">
                        <p class="mt-6 xl:mt-8 text-xl xl:text-2xl font-semibold text-secondaryDark">Our products and services enables organizations to run their businesses seamlessly</p>
                    </div>
                    <div>
                        <h5 class="text-base font-semibold">Khandaker Enayet Ullah</h5>
                        <p class="text-sm text-secondaryDark mt-1">Secretary General (DSPMS)</p>
                    </div>
                </div>

                <div class="testimonial-slider-item bg-[#EFF7FD]">
                    <div>
                        <img src="~/assets/images/svg/rasel-shuvo.svg" alt="Rasel Shuvo img" class="border-8 border-[#DFEEFB] rounded-full">
                        <p class="mt-6 xl:mt-8 text-xl xl:text-2xl font-semibold text-secondaryDark">Jatri is the go-to rental solution for my family on vacations. Finding a trustworthy rental car within an hour definitely helps to speed up our plans!</p>
                    </div>
                    <div>
                        <h5 class="text-base font-semibold">Rasel Shuvo</h5>
                        <p class="text-sm text-secondaryDark mt-1">User</p>
                    </div>
                </div>

                <div class="testimonial-slider-item bg-secondary">
                    <div>
                        <img src="~/assets/images/svg/rasel-shuvo.svg" alt="Rasel Shuvo img" class="border-8 border-[#FCD7D3] rounded-full">
                        <p class="mt-6 xl:mt-8 text-xl xl:text-2xl font-semibold text-secondaryDark">Our products and services enables organizations to run their businesses seamlessly</p>
                    </div>
                    <div>
                        <h5 class="text-base font-semibold">Khandaker Enayet Ullah</h5>
                        <p class="text-sm text-secondaryDark mt-1">Secretary General (DSPMS)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>