<template>
    <div class="sticky top-24">
        <p class="pb-2 border-b border-[#DBDBDB] text-base font-medium">Table of contents</p>
        <a 
            @click="isActive = 'terms-conditions'" 
            href="#terms-and-conditions" 
            class="mt-4 block w-full leading-5 text-sm font-medium p-2 rounded transition-all duration-150 ease-out delay-75"
            :class="isActive ==='terms-conditions' ? 'bg-[#1E88E5] text-white' : 'bg-transparent text-dark'">
            Terms &amp; Conditions
        </a>
        <a 
            @click="isActive = 'privacy-policy'" 
            href="#privacy-policy" 
            class="mt-4 block w-full leading-5 text-sm font-medium p-2 rounded transition-all duration-150 ease-out delay-75"
            :class="isActive==='privacy-policy' ? 'bg-[#1E88E5] text-white' : 'bg-transparent text-dark'">
            Privacy Policy
        </a>
        <a 
            @click="isActive = 'return-refund'" 
            href="#return-and-refund-policy" 
            class="mt-4 block w-full leading-5 text-sm font-medium p-2 rounded transition-all duration-150 ease-out delay-75"
            :class="isActive==='return-refund' ? 'bg-[#1E88E5] text-white' : 'bg-transparent text-dark'">
            Return &amp; Refund Policies
        </a>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const isActive = ref('terms-conditions')
</script>

<style scoped>

</style>