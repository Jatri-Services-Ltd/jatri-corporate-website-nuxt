<template>
    <div class="pt-12 lg:pt-[125px] pb-12 md:pb-20">
        <div class="custom-container mx-auto flex justify-center items-center">
            <div class="relative text-center">
                <div class="hidden lg:block">
                    <div class="developer-badge absolute bg-[#48A43F] text-white px-4 py-[6px] rounded-full text-xs font-medium left-12 -top-3">Developer</div>
                    <div class="marketing-badge absolute bg-[#1E88E5] text-white px-4 py-[6px] rounded-full text-xs font-medium right-[40px] -top-8">Marketing</div>
                    <div class="product-badge absolute bg-[#4633F0] text-white px-4 py-[6px] rounded-full text-xs font-medium left-[120px] bottom-[54px]">Product</div>
                    <div class="business-badge absolute bg-[#F04935] text-white px-4 py-[6px] rounded-full text-xs font-medium right-[110px] bottom-[110px]">Business</div>
                </div>
                <h1 class="text-2xl md:text-[57px] leading-8 md:leading-[64px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E73C2A] to-[#FFB728] mb-4 md:mb-6">Want to help people <br> travel better?</h1>
                <p class="text-sm md:text-base text-[#4d4d4f] mb-8 md:mb-10 w-full lg:w-1/2 mx-auto">Lorem ipsum dolor sit amet consectetur. Nec eget dolor bibendum sit nam. Nec consequat faucibus quam eu proin egestas.</p>
                <div class="flex justify-center items-center mx-auto gap-4">
                    <router-link to="#" class="h-[40px] md:h-[46px] w-[155px] md:w-[171px] flex justify-center items-center border border-black rounded-full text-sm md:text-base font-medium text-white bg-black">View open roles</router-link>
                    <router-link to="#" class="h-[40px] md:h-[46px] w-[155px] md:w-[171px] flex justify-center items-center gap-3 border border-black rounded-full text-sm md:text-base font-medium text-black">
                    <span class="inline-block">Explore Jatri</span>
                    <span class="inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7.83355 10.4766L12.3036 6.00658L13.4819 7.18492L7.00022 13.6666L0.518555 7.18492L1.69689 6.00658L6.16689 10.4766V0.333252H7.83355V10.4766Z" fill="#151414"/>
                        </svg>
                    </span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.developer-badge::before{
    position: absolute;
    content: url('/images/career/developer-arrow.svg');
    right: -14px;
    bottom: -17px;
}
.marketing-badge::before{
    position: absolute;
    content: url('/images/career/marketing-arrow.svg');
    left: -14px;
    bottom: -17px;
}
.product-badge::before{
    position: absolute;
    content: url('/images/career/product-arrow.svg');
    right: -13px;
    top: -13px;
}
.business-badge::before{
    position: absolute;
    content: url('/images/career/business-arrow.svg');
    left: -13px;
    top: -13px;
}
</style>