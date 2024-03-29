<script setup>
import { reactive, ref } from 'vue';
import axios from "axios";
import CareerApplicationForm from "../../../components/career/CareerApplicationForm"

const { $successToast, $errorToast } = useNuxtApp();
const route = useRoute();
const applicant_job_id = route.params.slug;
const config = useRuntimeConfig();


const initialState = {
  name: '',
  email: '',
  mobile_number: '',
  linkedin_profile: '',
  resume: '',
  career_job_id: applicant_job_id
}
const applicationSubmitForm = reactive({ ...initialState })

const job = ref({})

if (process.client) {
  const getJob = () => {
    axios.get(config.public.apiURL + '/api/v1/career-job-details/' + applicant_job_id)
        .then(res => {
          job.value = res?.data?.data
        })
        .catch(err => {
          $errorToast(err ? err : "Something went wrong")
        })
  }
  onMounted( () => {
    getJob()
  })
}




const isSubmitting = ref(false)
const uploadFile = (e) => {
  applicationSubmitForm.resume = e.target.files[0]
}
const removeFile = () => {
  applicationSubmitForm.resume = ''
}

const generateText = (str) => {
  str = str.toLowerCase()
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const success = ref(false)
const error = ref(false)
const handleSubmit = () => {
  isSubmitting.value = true
  let applicationSubmitFormData = new FormData()
  applicationSubmitFormData.append("name", applicationSubmitForm.name)
  applicationSubmitFormData.append("email", applicationSubmitForm.email)
  applicationSubmitFormData.append("mobile_number", applicationSubmitForm.mobile_number)
  applicationSubmitFormData.append("linkedin_profile", applicationSubmitForm.linkedin_profile)
  applicationSubmitFormData.append("resume", applicationSubmitForm.resume)
  applicationSubmitFormData.append("career_job_id", applicationSubmitForm.career_job_id)

  axios.post(config.public.apiURL + '/api/v1/career-application', applicationSubmitFormData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((res) => {
    Object.assign(applicationSubmitForm, { ...initialState });
    success.value = true
  }).catch((e) => {
    error.value = true
  })
    .finally(() => isSubmitting.value = false)
}

const isModalOpen = ref(false);
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
  if (process.client) {
    if (success.value){
      success.value = false
    } else if (error.value){
      error.value = false
    }

    const getBody = document.getElementsByTagName('body')[0];
    if (isModalOpen.value) {
      getBody.style.overflow = 'hidden';
    } else {
      getBody.style.overflow = 'auto';
      Object.assign(applicationSubmitForm, { ...initialState });
    }
  }
}

provide("applicationSubmitForm", applicationSubmitForm)
provide("uploadFile", uploadFile)
provide("removeFile", removeFile)
provide("handleSubmit", handleSubmit)
provide("isSubmitting", isSubmitting)
provide("toggleModal", toggleModal)
provide("isModalOpen", isModalOpen)
provide("success", success)
provide("error", error)
</script>

<template>
  <div class="careerDetails relative">
    <ClientOnly>
      <div id="top" class="job-details-header text-white py-5 lg:py-8">
        <div class="custom-container">
          <div class="flex items-center gap-3">
            <nuxt-link :to="localePath('/career')" class="text-xs sm:text-sm">Career</nuxt-link>
            <div class="relative">
              <div class="right-arrow absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
            </div>
            <nuxt-link :to="`${localePath('/career')}`+'/#job-opening'" class="text-xs sm:text-sm ml-2 md:ml-3">Open roles</nuxt-link>
            <div class="relative">
              <div class="right-arrow absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
            </div>
            <p class="text-xs sm:text-sm ml-2 md:ml-3">{{ job.title }}</p>
          </div>
          <h1 class="my-1 md:mt-2.5 md:mb-2 text-2xl lg:text-4xl lg:leading-[44px] font-medium">{{ job.title }}</h1>
          <h2 class="text-sm lg:text-xl leading-[24px] font-medium flex items-center"> <span class="pr-2">Department:
          </span> {{ job.department }}</h2>
        </div>
      </div>
      <div class="custom-container mt-4 sm:mt-10 mb-10 md:mb-[120px]">
        <div class="grid grid-cols-12 gap-4 lg:gap-12">
          <div class="col-span-12 md:col-span-5 lg:col-span-4">
            <div class="border border-lightGrey rounded-2xl px-4 md:px-5 py-5">
              <div class="flex items-center gap-5">
                <div><img class="h-6 w-6" src="/images/career/job-nature-icon.png" alt="Job nature"></div>
                <div>
                  <p class="text-sm lg:text-base text-secondaryDark mb-1">Salary range</p>
                  <p class="text-base lg:text-xl font-medium text-dark">{{ job.salary_range }}</p>
                </div>
              </div>
              <div class="border-b ml-10 pt-2 md:pt-4"></div>
              <div class="flex items-center gap-5 pt-2 md:pt-4">
                <div><img class="h-6 w-6" src="/images/career/salary-range-icon.png" alt="Salary range"></div>
                <div>
                  <p class="text-sm lg:text-base text-secondaryDark mb-1 font-inter">Employment status</p>
                  <p v-if="job?.employment_status" class="text-base lg:text-xl font-medium text-dark font-inter">
                    {{ generateText(job.employment_status.replaceAll('_', ' ').replaceAll('-', ' ')) }}</p>
                </div>
              </div>
              <div class="border-b ml-10 pt-2 md:pt-4"></div>
              <div class="flex items-center gap-5 pt-2 md:pt-4">
                <div><img class="h-6 w-6" src="/images/career/job-location-icon.png" alt="Job location"></div>
                <div>
                  <p class="text-sm lg:text-base text-secondaryDark mb-1">Job location</p>
                  <p class="text-base lg:text-xl font-medium text-dark">{{ job.location }}</p>
                </div>
              </div>
              <div class="border-b ml-10 pt-2 md:pt-4"></div>
              <div class="flex items-center gap-5 pt-2 md:pt-4">
                <div><img class="h-6 w-6" src="/images/career/deadline-icon.png" alt="Application deadline"></div>
                <div>
                  <p class="text-sm lg:text-base text-secondaryDark mb-1">Application deadline</p>
                  <p class="text-base lg:text-xl font-medium text-dark">
                    {{ $dayjs(job.deadline).format('D MMM, YYYY') }}
                  </p>
                </div>
              </div>
              <div class="border-b ml-10 pt-2 md:pt-4"></div>
              <div class="flex items-center gap-5 pt-2 md:pt-4">
                <div><img class="h-6 w-6" src="/images/career/vacancy-icon.png" alt="Vacancy"></div>
                <div>
                  <p class="text-sm lg:text-base text-secondaryDark mb-1">Vacancy</p>
                  <p class="text-base lg:text-xl font-medium text-dark">{{ job.no_of_vacancy }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-7 lg:col-span-8">
            <div class="job-des" v-html="job.job_details"></div>
            <div class="mt-6 md:mt-12 mb-8 md:mb-12">
              <a href="#top" @click="toggleModal"
                 class="bg-corporate text-white w-full md:w-[240px] py-[11px] md:py-4 rounded-full inline-block text-center font-medium text-base md:text-xl">
                Apply Now</a>
            </div>
            <div class="border border-lightGrey rounded-2xl sm:rounded-2xl p-4 sm:px-6 sm:py-5">
              <div class="flex gap-5 items-center w-full">
                <img src="/images/career/having-trouble-icon.png" alt="Jatri career">
                <p class="text-secondaryDark font-medium text-base md:text-xl">
                  Having trouble locating the perfect role?<br class="hidden sm:block">
                  Feel free to send us your resume at <a href="mailto:career@jatri.co"
                                                         class="sm:underline text-info">career@jatri.co</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </ClientOnly>



    <div v-if="isModalOpen" class="fixed inset-0 z-[999] flex items-center justify-center">
      <div class="w-full h-full bg-dark/50 absolute inset-0 -z-10" @click="toggleModal"></div>
      <ClientOnly>
        <CareerApplicationForm></CareerApplicationForm>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped> * {
   font-family: 'Inter', sans-serif;
 }

 .job-details-header {
   background-image: url('/images/career/job-details-bg.png');
   background-repeat: no-repeat;
   background-size: cover;
   background-position: top right;
 }

 .right-arrow {
   height: 0px;
   width: 0px;
   border: 3.8px solid;
   border-color: white white transparent transparent;
   transform: rotate(45deg);
 }
</style>