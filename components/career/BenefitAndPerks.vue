<template>
    <div class="custom-container bg-[#FEF2F0] mb-[120px]">
        <div class="mx-auto pt-[100px] pb-20">
            <div class="w-1/3">
                <h1 class="text-[57px] leading-[64px] text-dark font-semibold benefit-header relative inline-block mb-6">Benefits & Perks</h1>
                <p class="text-base">Doing your best work requires being your better versions. To assist you, we provide a variety of advantages and perks to enhance your health and well-being.</p>
            </div>
            <div class="mt-16 grid grid-cols-4 gap-8">
                <div>
                    <img class="h-10 w-10" src="/images/career/wallet.svg" alt="Wallet">
                    <p class="mt-6 mb-4 text-2xl font-medium">Competitive salary</p>
                    <p class="text-base">Lorem ipsum dolor sit amet consecte. Neque lacinia at dignissim fusce.</p>
                </div>
                <div>
                    <img class="h-10 w-10" src="/images/career/restaurent.svg" alt="Restaurent">
                    <p class="mt-6 mb-4 text-2xl font-medium">Subsidized lunch</p>
                    <p class="text-base">Lorem ipsum dolor sit amet consecte. Neque lacinia at dignissim fusce.</p>
                </div>
                <div>
                    <img class="h-10 w-10" src="/images/career/gift.svg" alt="Gift">
                    <p class="mt-6 mb-4 text-2xl font-medium">Festival bonus</p>
                    <p class="text-base">Lorem ipsum dolor sit amet consecte. Neque lacinia at dignissim fusce.</p>
                </div>
                <div>
                    <img class="h-10 w-10" src="/images/career/heart.svg" alt="Heart">
                    <p class="mt-6 mb-4 text-2xl font-medium">Health & Wellness</p>
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
</style>