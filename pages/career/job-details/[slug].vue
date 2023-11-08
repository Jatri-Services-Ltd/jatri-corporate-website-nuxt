<script setup>
import { reactive, ref } from 'vue';
import axios from "axios";
import careerFormSubmitValidator from "../../../validators/careerFormSubmitValidator";
import CareerApplicationForm from "../../../components/career/CareerApplicationForm"
import CareerSuccessModal from "../../../components/career/CareerSuccessModal";

const { $successToast, $errorToast } = useNuxtApp();
const route = useRoute();
const applicant_job_id = route.params.slug

const isModalOpen = ref(false);
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;

  if (process.client) {
    const getBody = document.getElementsByTagName('body')[0];

    if (isModalOpen.value) {
      getBody.style.overflow = 'hidden';
    } else {
      getBody.style.overflow = 'auto';
    }
  }
}

const initialState = {
  name: '',
  email: '',
  mobile_number: '',
  linkedin_profile: '',
  resume: '',
  career_job_id: applicant_job_id
}
const applicationSubmitForm = reactive({ ...initialState })

const config = useRuntimeConfig();
const { data } = await useFetch(config.public.apiURL + '/api/v1/career-job-details/' + applicant_job_id)

const isSubmitting = ref(false)
const uploadFile = (e) => {
  applicationSubmitForm.resume = e.target.files[0]
}
const removeFile = () => {
  applicationSubmitForm.resume = ''
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

provide("applicationSubmitForm", applicationSubmitForm)
provide("uploadFile", uploadFile)
provide("removeFile", removeFile)
provide("handleSubmit", handleSubmit)
provide("isSubmitting", isSubmitting)
provide("success", success)
provide("error", error)
provide("toggleModal", toggleModal)
</script>

<template>
  <div class="careerDetails relative">
    <div id="top" class="job-details-header text-white py-5 lg:py-8">
      <div class="custom-container">
        <div class="flex items-center gap-3">
          <nuxt-link :to="localePath('/career')" class="text-xs sm:text-sm">Career</nuxt-link>
          <div class="relative">
            <div class="right-arrow absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
          </div>
          <p class="text-xs sm:text-sm ml-2 md:ml-3">Open roles</p>
          <div class="relative">
            <div class="right-arrow absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
          </div>
          <p class="text-xs sm:text-sm ml-2 md:ml-3">{{ data.data.title }}</p>
        </div>
        <h1 class="my-1 md:mt-2.5 md:mb-2 text-2xl lg:text-4xl lg:leading-[44px] font-medium">{{ data.data.title }}</h1>
        <h2 class="text-sm lg:text-xl leading-[24px] font-medium flex items-center"> <span class="pr-2">Department:
          </span> {{ data.data.department }}</h2>
      </div>
    </div>
    <div class="custom-container pt-4 sm:pt-10 pb-10 md:pb-[120px]">
      <div class="grid grid-cols-12 gap-4 lg:gap-12">
        <div class="col-span-12 md:col-span-5 lg:col-span-4">
          <div class="border border-lightGrey rounded-2xl px-4 md:px-5 py-5">
            <div class="flex items-center gap-5">
              <div><img class="h-6 w-6" src="/images/career/job-nature-icon.png" alt="Job nature"></div>
              <div>
                <p class="text-sm lg:text-base text-secondaryDark mb-1">Salary range</p>
                <p class="text-base lg:text-xl font-medium text-dark">{{ data.data.salary_range }}</p>
              </div>
            </div>
            <div class="border-b ml-10 pt-4"></div>
            <div class="flex items-center gap-5 pt-4">
              <div><img class="h-6 w-6" src="/images/career/salary-range-icon.png" alt="Salary range"></div>
              <div>
                <p class="text-sm lg:text-base text-secondaryDark mb-1 font-inter">Employment status</p>
                <p class="text-base lg:text-xl font-medium text-dark font-inter">
                  {{ data.data.employment_status.replaceAll('_', ' ').replaceAll('-', ' ') }}</p>
              </div>
            </div>
            <div class="border-b ml-10 pt-4"></div>
            <div class="flex items-center gap-5 pt-4">
              <div><img class="h-6 w-6" src="/images/career/job-location-icon.png" alt="Job location"></div>
              <div>
                <p class="text-sm lg:text-base text-secondaryDark mb-1">Job location</p>
                <p class="text-base lg:text-xl font-medium text-dark">{{ data.data.location }}</p>
              </div>
            </div>
            <div class="border-b ml-10 pt-4"></div>
            <div class="flex items-center gap-5 pt-4">
              <div><img class="h-6 w-6" src="/images/career/deadline-icon.png" alt="Application deadline"></div>
              <div>
                <p class="text-sm lg:text-base text-secondaryDark mb-1">Application deadline</p>
                <!--                          v-html="jobDetails.deadline"-->
                <p class="text-base lg:text-xl font-medium text-dark">
                  {{ $dayjs(data.data.deadline).format('D MMM, YYYY') }}
                </p>
              </div>
            </div>
            <div class="border-b ml-10 pt-4"></div>
            <div class="flex items-center gap-5 pt-4">
              <div><img class="h-6 w-6" src="/images/career/vacancy-icon.png" alt="Vacancy"></div>
              <div>
                <p class="text-sm lg:text-base text-secondaryDark mb-1">Vacancy</p>
                <p class="text-base lg:text-xl font-medium text-dark">{{ data.data.no_of_vacancy }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-7 lg:col-span-8">
          <!--              v-html="jobDetails.description"-->
          <div class="job-des" v-html="data.data.job_details"></div>
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
                Feel free to send us your resume at <a href="mailto:careers@jatri.co"
                  class="sm:underline text-info">careers@jatri.co</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div
      :class="[success || error ? '' : '', isModalOpen ? 'modalOpen' : 'modal-hidden']"
      class="modal" v-if="isModalOpen">

      <div>
        <!--      Component here-->
        <ClientOnly>
          <CareerApplicationForm ></CareerApplicationForm>
        </ClientOnly>
      </div>

    </div>
    <div @click="toggleModal" class="overlay" :class="isModalOpen ? '' : 'modal-hidden'"></div>
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

 .modalOpen {
   z-index: 60;
   opacity: 1;
   visibility: visible;
   transition: all 0.3s ease-in-out;
 }

 .modal {
  @apply w-full h-screen absolute top-[27%] sm:top-[33%] md:top-[29%] lg:top-[36%] xl:top-[40%] 2xl:top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999];
}

 .overlay {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh !important;
   background-color: rgba(0, 0, 0, 0.6);
   backdrop-filter: blur(3px);
   z-index: 999;
 }

 /* @media (max-width: 767px) {
   .small-device-bottom-section {
     position: fixed;
     bottom: 0;
     left: 0;
     right: 0;
     background-color: white;
     box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
     border-radius: 0 0 16px 16px;
   }

   .modal {
     top: 70%;
   }
 } */
</style>