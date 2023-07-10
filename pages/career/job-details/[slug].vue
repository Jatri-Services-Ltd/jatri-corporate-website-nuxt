<template>
    <div class="job-details-header text-white py-8">
        <div class="custom-container">
            <div class="flex items-center gap-3">
                <p class="text-sm">Career</p>
                <div class="relative">
                    <div class="right-arrow absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
                </div>
                <p class="text-sm ml-3">Open roles</p>
                <div class="relative">
                    <div class="right-arrow absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
                </div>
                <p class="text-sm ml-3">{{ jobDetails.title }}</p>
            </div>
            <h1 class="mt-2 text-4xl leading-[44px] font-medium">Software Engineer (Backend)</h1>
        </div>
    </div>
    <div class="custom-container mt-10 mb-[120px]">
        <div class="grid grid-cols-12 gap-12">
            <div class="col-span-3">
                <div class="border border-[#EDEDED] rounded-2xl p-5">
                    <div class="flex items-center gap-5">
                        <div><img class="h-6 w-6" src="/images/career/job-nature-icon.svg" alt="Job nature"></div>
                        <div>
                            <p class="text-base text-secondaryDark mb-1">Job nature</p>
                            <p class="text-xl font-medium text-dark">{{ jobDetails.employment_type }}</p>
                        </div>
                    </div>
                    <div class="border-b ml-10 pt-4"></div>
                    <div class="flex items-center gap-5 pt-4">
                        <div><img class="h-6 w-6" src="/images/career/salary-range-icon.svg" alt="Salary range"></div>
                        <div>
                            <p class="text-base text-secondaryDark mb-1">Salary range</p>
                            <p class="text-xl font-medium text-dark">{{ jobDetails.salary }}</p>
                        </div>
                    </div>
                    <div class="border-b ml-10 pt-4"></div>
                    <div class="flex items-center gap-5 pt-4">
                        <div><img class="h-6 w-6" src="/images/career/job-location-icon.svg" alt="Job location"></div>
                        <div>
                            <p class="text-base text-secondaryDark mb-1">Job location</p>
                            <p class="text-xl font-medium text-dark">{{ jobDetails.location }}</p>
                        </div>
                    </div>                    <div class="border-b ml-10 pt-4"></div>
                    <div class="flex items-center gap-5 pt-4">
                        <div><img class="h-6 w-6" src="/images/career/deadline-icon.svg" alt="Application deadline"></div>
                        <div>
                            <p class="text-base text-secondaryDark mb-1">Application deadline</p>
                            <p class="text-xl font-medium text-dark" v-html="jobDetails.deadline"></p>
                        </div>
                    </div>
                    <div class="border-b ml-10 pt-4"></div>
                    <div class="flex items-center gap-5 pt-4">
                        <div><img class="h-6 w-6" src="/images/career/vacancy-icon.svg" alt="Vacancy"></div>
                        <div>
                            <p class="text-base text-secondaryDark mb-1">Vacancy</p>
                            <p class="text-xl font-medium text-dark">2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-9">
                <div v-html="jobDetails.description"></div>
                <div class="my-12">
                    <button class="bg-corporate text-white h-[60px] w-[240px] rounded-full flex justify-center items-center font-medium text-xl">Apply Now</button>
                </div>
                <div class="border rounded-[10px] px-6 py-5">
                    <div class="flex gap-4 items-center">
                        <div class="w-11"><img class="h-11 w-11" src="/images/career/having-trouble-icon.svg" alt="Jatri career"></div>
                        <div>
                            <p class="text-dark text-xl font-medium mb-2">Having a trouble with applying?</p>
                            <p class="text-base pr-0 lg:pr-64">Send you CV or Resume at "<a href="mailto:career@jatri.co">career@jatri.co</a>", do not forget to mention the post name in the subject of the mail.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import careerData from "~/dataStore/career.js";
const route = useRoute();

const jobDetails = ref({})

onMounted(() => {
    jobDetails.value = careerData.find(data => data.slug === route.params.slug)
})
</script>

<style scoped>
.job-details-header{
    background-image: url('/images/career/job-details-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right;
}
.right-arrow {
	height: 0px; width: 0px;
	border: 3.8px solid;
	border-color: 
		white
		white
		transparent
		transparent;
	transform: rotate(45deg);
}
</style>