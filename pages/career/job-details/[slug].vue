<script setup>
import {ref} from 'vue';
const route = useRoute();

const openModal = ref(false)
const fileName = ref('')

const id = route.params.slug
console.log("id",id)
const config = useRuntimeConfig();
const {data} = await useFetch(config.public.apiURL + '/api/v1/career-job-details/'+id)
const uploadFile = (e) => {
  fileName.value = e.target.files[0].name
}

const removeFile = () => {
  fileName.value = ''
}
</script>

<template>
    <div id="top" class="job-details-header text-white py-8">
        <div class="custom-container">
            <div class="flex items-center gap-3">
                <p class="text-xs sm:text-sm">Career</p>
                <div class="relative">
                    <div class="right-arrow absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
                </div>
                <p class="text-xs sm:text-sm ml-2 md:ml-3">Open roles</p>
                <div class="relative">
                    <div class="right-arrow absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
                </div>
                <p class="text-xs sm:text-sm ml-2 md:ml-3">{{data.data.title}}</p>
            </div>
            <h1 class="mt-2 text-[28px] lg:text-4xl leading-[44px] font-medium">{{data.data.title}}</h1>
        </div>
    </div>
    <div class="custom-container mt-10 mb-[120px]">
        <div class="grid grid-cols-12 gap-8 lg:gap-12">
            <div class="col-span-12 md:col-span-5 lg:col-span-4">
                <div class="border border-lightGrey rounded-2xl p-5">
                    <div class="flex items-center gap-5">
                        <div><img class="h-6 w-6" src="/images/career/job-nature-icon.svg" alt="Job nature"></div>
                        <div>
                            <p class="text-sm lg:text-base text-secondaryDark mb-1">Job nature</p>
                            <p class="text-base lg:text-xl font-medium text-dark">{{data.data.employment_status}}</p>
                        </div>
                    </div>
                    <div class="border-b ml-10 pt-4"></div>
                    <div class="flex items-center gap-5 pt-4">
                        <div><img class="h-6 w-6" src="/images/career/salary-range-icon.svg" alt="Salary range"></div>
                        <div>
                            <p class="text-sm lg:text-base text-secondaryDark mb-1">Salary range</p>
                            <p class="text-base lg:text-xl font-medium text-dark">{{data.data.salary_range}}</p>
                        </div>
                    </div>
                    <div class="border-b ml-10 pt-4"></div>
                    <div class="flex items-center gap-5 pt-4">
                        <div><img class="h-6 w-6" src="/images/career/job-location-icon.svg" alt="Job location"></div>
                        <div>
                            <p class="text-sm lg:text-base text-secondaryDark mb-1">Job location</p>
                            <p class="text-base lg:text-xl font-medium text-dark">{{data.data.location}}</p>
                        </div>
                    </div>                    <div class="border-b ml-10 pt-4"></div>
                    <div class="flex items-center gap-5 pt-4">
                        <div><img class="h-6 w-6" src="/images/career/deadline-icon.svg" alt="Application deadline"></div>
                        <div>
                            <p class="text-sm lg:text-base text-secondaryDark mb-1">Application deadline</p>
<!--                          v-html="jobDetails.deadline"-->
                            <p class="text-base lg:text-xl font-medium text-dark" >{{data.data.deadline}}</p>
                        </div>
                    </div>
                    <div class="border-b ml-10 pt-4"></div>
                    <div class="flex items-center gap-5 pt-4">
                        <div><img class="h-6 w-6" src="/images/career/vacancy-icon.svg" alt="Vacancy"></div>
                        <div>
                            <p class="text-sm lg:text-base text-secondaryDark mb-1">Vacancy</p>
                            <p class="text-base lg:text-xl font-medium text-dark">{{data.data.no_of_vacancy}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-7 lg:col-span-8">
<!--              v-html="jobDetails.description"-->
                <div v-html="data.data.job_details"></div>
                <div class="mt-6 md:mt-12 mb-8 md:mb-12">
                    <a href="#top" @click="openModal = !openModal" class="bg-corporate text-white h-[46px] md:h-[60px] w-full md:w-[240px] rounded-full flex justify-center items-center font-medium text-base md:text-xl">Apply Now</a>
                </div>
                <div class="border rounded-[10px] px-6 py-5">
                    <div class="flex gap-2 items-center w-full">
                        <div class="w-[10%]"><img class="h-11 w-full" src="/images/career/having-trouble-icon.svg" alt="Jatri career"></div>
                        <div class="w-[90%]">
                            <p class="text-dark text-base md:text-xl font-medium mb-2">Having a trouble with applying?</p>
                            <p class="text-sm md:text-base pr-0 lg:pr-64">Send you CV or Resume at "<a class="text-[#1E88E5]" href="mailto:career@jatri.co">career@jatri.co</a>", do not forget to mention the post name in the subject of the mail.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal w-[90%] md:w-[700px] rounded-2xl relative" :class="openModal ? 'modalOpen' : 'modal-hidden'">
        <div class="px-4 md:px-6 pt-4 md:pt-6 border-b">
            <div class="w-full flex justify-between items-center pb-4 md:pb-6">
                <p class="text-xl md:text-[32px] font-medium">Apply now</p>
                <button @click="openModal = !openModal"><img src="/images/career/close-icon.svg" alt="Close Modal"></button>
            </div>
        </div>
        <div class="p-4 md:p-6">
            <div class="h-[400px] md:h-auto overflow-y-scroll pb-24 md:pb-0">
                <p class="text-sm md:text-2xl font-medium mb-4 md:mb-6 uppercase">Personal information</p>
                <div class="block sm:flex gap-0 sm:gap-8">
                    <div class="w-full">
                        <label class="text-base font-medium text-dark pb-[10px] block" for="">Full name</label>
                        <input type="text" class="w-full p-4 bg-[#F7F7F7] placeholder:text-sm placeholder:text-[#676769]" placeholder="Enter full name">
                    </div>
                    <div class="w-full">
                        <label class="text-base font-medium text-dark pb-[10px] block" for="">Email address</label>
                        <input type="text" class="w-full p-4 bg-[#F7F7F7] placeholder:text-sm placeholder:text-[#676769]" placeholder="Enter email address">
                    </div>
                </div>
                <div class="block sm:flex gap-0 sm:gap-8 mt-6">
                    <div class="w-full">
                        <label class="text-base font-medium text-dark pb-[10px] block" for="">Mobile number</label>
                        <input type="text" class="w-full p-4 bg-[#F7F7F7] placeholder:text-sm placeholder:text-[#676769]" placeholder="Enter mobile number">
                    </div>
                    <div class="w-full">
                        <label class="text-base font-medium text-dark pb-[10px] block" for="">LinkedIn profile</label>
                        <input type="text" class="w-full p-4 bg-[#F7F7F7] placeholder:text-sm placeholder:text-[#676769]" placeholder="Enter linkedin profile link">
                    </div>
                </div>
                <div class="mt-8">
                    <p class="text-sm md:text-2xl text-[#676769] md:text-dark font-medium mb-4 md:mb-6">Resume / CV</p>
                    <label class="text-base font-medium text-dark pb-[10px] block" for="">Resume / CV</label>
                    <div class="relative overflow-hidden">
                        <button class="w-full border border-[#1E88E5] border-dashed py-[22px] px-5 text-start rounded-[4px]">
                            <div v-if="fileName">
                                <div class="flex gap-5 py-[10px]">
                                    <div class="flex gap-2 items-center">
                                        <p class="text-sm font-medium">{{ fileName }}</p>
                                        <button @click="removeFile" class="pt-1"><img src="/images/career/remove-file-icon.svg" alt="Remove cv"></button>
                                    </div>
                                    <div class="relative">
                                        <button @click="removeFile" class="text-corporate text-sm font-medium underline z-20 relative">Replace</button>
                                        <img class="absolute top-3 z-10" src="/images/career/upload-icon.svg" alt="Upload file">
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center gap-4" :class="fileName ? 'hidden' : ''">
                                <img src="/images/career/upload-icon.svg" alt="Upload file">
                                <div>
                                    <p class="text-[#1E88E5] text-base font-medium mb-1">Upload resume / cv</p>
                                    <p class="text-xs">File format should be <b>PDF</b> and not more than <b>5MB</b></p>
                                </div>
                            </div>
                        </button>
                        <input v-if="!fileName" @change="uploadFile" type="file" name="myfile" class="absolute left-0 top-0 opacity-0 w-full h-full cursor-pointer" />
                    </div>
                </div>
            </div>
            <div class="small-device-bottom-section">
                <div class="mt-4 md:mt-12 mb-4 flex justify-center px-4">
                    <button class="h-10 md:h-[60px] w-full md:w-[300px] flex justify-center items-center bg-corporate text-white rounded-full text-sm md:text-xl font-medium">Submit</button>
                </div>
            </div>
        </div>
    </div>
<div @click="openModal = !openModal" class="overlay" :class="openModal ? '' : 'modal-hidden'"></div>
</template>

<style scoped>
.job-details-header{
    background-image: url('/images/career/job-details-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right;
}
.right-arrow {
	height: 0px; 
    width: 0px;
	border: 3.8px solid;
	border-color: 
		white
		white
		transparent
		transparent;
	transform: rotate(45deg);
}

/* modal css */
.show-modal {
    font-size: 2rem;
    font-weight: 600;
    padding: 1.75rem 3.5rem;
    margin: 5rem 2rem;
    border: none;
    background-color: #fff;
    color: #444;
    border-radius: 10rem;
    cursor: pointer;
}

.close-modal {
    position: absolute;
    top: 1.2rem;
    right: 2rem;
    font-size: 5rem;
    color: #333;
    cursor: pointer;
    border: none;
    background: none;
}

.modal-hidden {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
}
.modalOpen{
    z-index: 60;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease-in-out;
}

.modal {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 999;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh !important;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    z-index: 5;
}

@media(max-width:767px) {
    .small-device-bottom-section{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    border-radius: 0 0 16px 16px;
}

}
</style>