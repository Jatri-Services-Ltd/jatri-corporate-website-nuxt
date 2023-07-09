<template>
    <div class="custom-container bg-[#FEF2F0]">
        <div class="mx-auto pt-10 md:pt-[100px] pb-10 md:pb-20">
            <div class="">
                <h1 class="text-3xl md:text-[57px] leading-9 md:leading-[64px] text-dark font-medium md:font-semibold benefit-header relative inline-block mb-1 md:mb-6">Benefits & Perks</h1>
                <p class="text-base w-full md:w-1/2 2xl:w-1/3">Doing your best work requires being your better versions. To assist you, we provide a variety of advantages and perks to enhance your health and well-being.</p>
            </div>
            <div class="mt-8 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <div>
                    <img class="h-8 md:h-10 w-8 md:w-10" src="/images/career/wallet.svg" alt="Wallet">
                    <p class="mt-4 md:mt-6 mb-2 md:mb-4 text-xl md:text-2xl font-medium">Competitive salary</p>
                    <p class="text-base">Lorem ipsum dolor sit amet consecte. Neque lacinia at dignissim fusce.</p>
                </div>
                <div>
                    <img class="h-8 md:h-10 w-8 md:w-10" src="/images/career/restaurent.svg" alt="Restaurent">
                    <p class="mt-4 md:mt-6 mb-2 md:mb-4 text-xl md:text-2xl font-medium">Subsidized lunch</p>
                    <p class="text-base">Lorem ipsum dolor sit amet consecte. Neque lacinia at dignissim fusce.</p>
                </div>
                <div>
                    <img class="h-8 md:h-10 w-8 md:w-10" src="/images/career/gift.svg" alt="Gift">
                    <p class="mt-4 md:mt-6 mb-2 md:mb-4 text-xl md:text-2xl font-medium">Festival bonus</p>
                    <p class="text-base">Lorem ipsum dolor sit amet consecte. Neque lacinia at dignissim fusce.</p>
                </div>
                <div>
                    <img class="h-8 md:h-10 w-8 md:w-10" src="/images/career/heart.svg" alt="Heart">
                    <p class="mt-4 md:mt-6 mb-2 md:mb-4 text-xl md:text-2xl font-medium">Health & Wellness</p>
                    <p class="text-base">Lorem ipsum dolor sit amet consecte. Neque lacinia at dignissim fusce.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.benefit-header::before{
    content: url('/images/career/perks.svg');
    position: absolute;
    top: -20px;
    right: -45px;
}

@media(max-width:767px){
    .benefit-header::before{
        content: url('/images/career/perks-small.svg');
        top: -14px;
        right: -28px;
    }
}
</style>