<template>
    <div class="border-b border-lightGrey py-6 lg:py-10">
        <div class="custom-container">
            <p class="text-dark text-[28px] lg:text-[57px] leading-9 lg:leading-[64px] font-semibold">Our terms & policies</p>
            <div class="flex gap-3 md:gap-4 items-center justify-center xs:justify-start mt-4 md:mt-6">
                <button 
                    @click="isActive='ride'" 
                    :class="isActive==='ride' ? 'bg-dark text-white border-dark' : ''" 
                    class="border border-lightGrey rounded-full py-[11px] px-5 sm:px-6 text-dark text-xs md:text-base font-medium">
                    Jatri Ride
                </button>
                <button 
                    @click="isActive='rental'" 
                    :class="isActive==='rental' ? 'bg-dark text-white border-dark' : ''" 
                    class="border border-lightGrey rounded-full py-[11px] px-5 sm:px-6 text-dark text-xs md:text-base font-medium">
                    Jatri Rental
                </button>
                <button 
                    @click="isActive='ticket'" 
                    :class="isActive==='ticket' ? 'bg-dark text-white border-dark' : ''" 
                    class="border border-lightGrey rounded-full py-[11px] px-5 sm:px-6 text-dark text-xs md:text-base font-medium">
                    Jatri Ticket
                </button>
            </div>
        </div>
    </div>
    <template v-if="isActive==='ride'">
        <RideTermsPolicies />
    </template>
    <template v-if="isActive==='rental'">
        <RentalTermsPolicies />
    </template>
    <template v-if="isActive==='ticket'">
        <TicketTermsPolicies />
    </template>
</template>

<script setup>
import { ref } from 'vue'
import RideTermsPolicies from './ride-terms-policies.vue';
import RentalTermsPolicies from './rental-terms-policies.vue';
import TicketTermsPolicies from './ticket-terms-policies.vue';
const isActive = ref('ride')
</script>

<style scoped>

</style>