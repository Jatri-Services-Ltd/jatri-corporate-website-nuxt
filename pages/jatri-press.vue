<template>
    <div class="border-b border-lightGrey py-6 lg:py-10">
        <div class="custom-container">
            <p class="text-dark text-[28px] lg:text-[57px] leading-9 lg:leading-[64px] font-semibold">Press center</p>
            <div class="flex gap-3 md:gap-4 items-center justify-center xs:justify-start mt-4 md:mt-6">
                <button 
                    @click="isActive='release'" 
                    :class="isActive==='release' ? 'bg-dark text-white border-dark' : ''" 
                    class="border border-lightGrey rounded-full py-[11px] px-5 xs:px-6 text-dark text-xs md:text-base font-medium">
                    Press release
                </button>
                <button 
                    @click="isActive='kit'" 
                    :class="isActive==='kit' ? 'bg-dark text-white border-dark' : ''" 
                    class="border border-lightGrey rounded-full py-[11px] px-5 xs:px-6 text-dark text-xs md:text-base font-medium">
                    Press kit
                </button>
                <button 
                    @click="isActive='inquires'" 
                    :class="isActive==='inquires' ? 'bg-dark text-white border-dark' : ''" 
                    class="border border-lightGrey rounded-full py-[11px] px-5 xs:px-6 text-dark text-xs md:text-base font-medium">
                    Press inquires
                </button>
            </div>
        </div>
    </div>
    <template v-if="isActive==='release'">
        <PressRelease />
    </template>
    <template v-if="isActive==='kit'">
        <PressKit />
    </template>
    <template v-if="isActive==='inquires'">
        <PressInquires />
    </template>
</template>

<script setup>
import { ref } from 'vue'
const isActive = ref('release')

</script>

<style scoped>

</style>