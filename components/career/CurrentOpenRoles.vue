<template>
    <div class="pb-10 md:pb-14 xl:pb-20">
        <div class="custom-container">
            <h2 class="text-[28px] md:text-4xl font-medium mb-8 md:mb-10">Current open roles</h2>
            <div v-if="openedRoles && openedRoles.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div v-for="role in openedRoles" :key="role.id" class="p-6 rounded-2xl border border-1-[#DBDBDB]">
                    <div class="lg:flex items-center justify-between">
                        <div>
                            <p class="text-xl font-semibold">{{ role.title }}</p>
                            <div class="my-2 flex gap-2 items-center">
                                <p class="text-base font-medium text-[#4D4D4F]">Salary: <span>{{ role.salary }}</span></p>
                                <div class="h-[6px] w-[6px] bg-[#DBDBDB] rounded-full"></div>
                                <p class="text-base font-medium text-[#4D4D4F]">{{ role.employment_type }}</p>
                            </div>
                            <p class="text-base font-medium text-[#4D4D4F]">Application deadline: <span v-html="role.deadline"></span></p>
                        </div>
                        <div class="lg:pt-0 pt-4">
                            <router-link :to="'/career/job-details/'+ role.slug" class="flex justify-center items-center gap-2 h-10 w-[130px] rounded-full border border-[#DBDBDB] bg-[#DBDBDB] lg:bg-white">
                                <span class="inline-block text-sm leading-5 font-medium">View details</span>
                                <div><img src="/images/career/arrow-right.svg" alt=""></div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="border border-[#DBDBDB] rounded-2xl py-16 ">
                <div class="flex justify-center">
                    <img src="/images/career/no-opening.png" class="h-[120px] w-40 object-cover" alt="Jatri Career">
                </div>
                <p class="text-center text-base md:text-xl font-medium text-dark mt-6 w-full md:w-2/3 xl:w-1/2 2xl:w-1/3 mx-auto px-4">We don't have any openings right now. Keep an eye here to receive updates.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import careerData from '../../dataStore/career.js';
const openedRoles = ref([])

onMounted(() => {
    openedRoles.value = careerData
})

</script>

<style scoped>

</style>