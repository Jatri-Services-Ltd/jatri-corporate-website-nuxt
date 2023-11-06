<script setup>
import careerFormSubmitValidator from "../../validators/careerFormSubmitValidator";
import CareerSuccess from "./CareerSuccessModal"
import CareerError from "./CareerErrorModal"

const applicationSubmitForm = inject("applicationSubmitForm")
const uploadFile = inject("uploadFile")
const removeFile = inject("removeFile")
const handleSubmit = inject("handleSubmit")
const isSubmitting = inject("isSubmitting")
const openModal = inject("openModal")
const {v$} = careerFormSubmitValidator(applicationSubmitForm)
const success = inject("success")
const error = inject("error")
const submitForm = (e) => {
  e.preventDefault()
  v$.value.$touch()
  if (v$.value.$invalid) return
  handleSubmit()
}

</script>

<template>


  <div class="">

    <CareerSuccess v-show="success"></CareerSuccess>
    <CareerError v-show="error"></CareerError>
    <div class="px-4 md:px-6 pt-4 md:pt-6" v-if="!success && !error">
      <div>
        <div class="w-full flex justify-between items-center pt-6 pb-4 md:pb-6">
          <p class="text-xl md:text-[32px] font-medium">Apply now  {{error}}</p>
          <button @click="openModal = !openModal"><img src="/images/career/close-icon.svg" alt="Close Modal"></button>
        </div>
      </div>
      <div>
        <div class="h-[400px] md:h-auto overflow-y-scroll pb-24 md:pb-0">
          <p class="text-sm md:text-2xl font-medium mb-4 md:mb-6 uppercase">Personal information</p>
          <div class="block sm:flex gap-0 sm:gap-8">
            <div class="w-full">
              <label class="text-base font-medium text-dark pb-[10px] block" for="">Full name</label>
              <input v-model="v$.name.$model"
                     @blur="v$.name.$touch()" type="text"
                     class="w-full p-4 bg-[#F7F7F7] placeholder:text-sm placeholder:text-[#676769]"
                     placeholder="Enter full name">
              <div class="text-red-500 text-xs" v-if="v$.name.$errors.length">
                <div class="flex gap-x-2 items-center mt-2">
                   <img src="~/assets/images/job_circular/exceed.svg" alt="">
                   <p> {{ v$.name.$errors[0].$message }}</p>
                </div>
              </div>
            </div>
            <div class="w-full">
              <label class="text-base font-medium text-dark pb-[10px] block" for="">Email address</label>
              <input
                  v-model="v$.email.$model"
                  @blur="v$.email.$touch()"
                  type="email"
                  class="w-full p-4 bg-[#F7F7F7] placeholder:text-sm placeholder:text-[#676769]"
                  placeholder="Enter email address">
              <div class="text-red-500 text-xs" v-if="v$.email.$errors.length">
                <div class="flex gap-x-2 items-center mt-2">
                  <img src="~/assets/images/job_circular/exceed.svg" alt="">
                  <p> {{ v$.email.$errors[0].$message }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="block sm:flex gap-0 sm:gap-8 mt-6">
            <div class="w-full">
              <label class="text-base font-medium text-dark pb-[10px] block" for="">Mobile number</label>
              <input
                  v-model="v$.mobile_number.$model"
                  @blur="v$.mobile_number.$touch()"
                  type="text"
                  class="w-full p-4 bg-[#F7F7F7] placeholder:text-sm placeholder:text-[#676769]"
                  placeholder="Enter mobile number">
              <div class="text-red-500 text-xs" v-if="v$.mobile_number.$errors.length">
                <div class="flex gap-x-2 items-center mt-2">
                  <img src="~/assets/images/job_circular/exceed.svg" alt="">
                  <p> {{ v$.mobile_number.$errors[0].$message }}</p>
                </div>
              </div>
            </div>
            <div class="w-full">
              <label class="text-base font-medium text-dark pb-[10px] block" for="">LinkedIn profile</label>
              <input
                  v-model="v$.linkedin_profile.$model"
                  @blur="v$.linkedin_profile.$touch()" type="text"
                  class="w-full p-4 bg-[#F7F7F7] placeholder:text-sm placeholder:text-[#676769]"
                  placeholder="Enter linkedin profile link">
              <div class="text-red-500 text-xs" v-if="v$.linkedin_profile.$errors.length">
                <div class="flex gap-x-2 items-center mt-2">
                  <img src="~/assets/images/job_circular/exceed.svg" alt="">
                  <p>{{ v$.linkedin_profile.$errors[0].$message }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8">
            <p class="text-sm md:text-2xl text-[#676769] md:text-dark font-medium mb-4 md:mb-6">Resume / CV</p>
            <label class="text-base font-medium text-dark pb-[10px] block" for="">Resume / CV</label>
            <div class="relative overflow-hidden">
              <button class="w-full border border-[#1E88E5] border-dashed py-[22px] px-5 text-start rounded-[4px]">
                <div v-if="applicationSubmitForm.resume">
                  <div class="flex gap-5 py-[10px]">
                    <div class="flex gap-2 justify-between items-center w-full">
                      <div class="flex">
                        <img class="" src="/images/career/upload-icon.svg" alt="Upload file">
                        <div class="flex items-center gap-x-2">
                          <p class="text-sm font-medium">{{ applicationSubmitForm?.resume?.name }}</p>
                          <button @click="removeFile" class="pt-1"><img src="/images/career/remove-file-icon.svg"
                                                                        alt="Remove cv"></button>
                        </div>
                      </div>
                      <div>
                        <input @change="uploadFile($event)" type="file" class="hidden" id="replace">
                        <label class="text-red-700 border-b border-red-700 cursor-pointer" for="replace">replace</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-4" :class="applicationSubmitForm.resume ? 'hidden' : ''">
                  <img src="/images/career/upload-icon.svg" alt="Upload file">
                  <div>
                    <p class="text-[#1E88E5] text-base font-medium mb-1">Upload resume / cv</p>
                    <p class="text-xs">File format should be <b>PDF</b> and not more than <b>5MB</b></p>
                  </div>
                </div>
              </button>
              <input
                  v-if="applicationSubmitForm.resume === ''"
                  @change="uploadFile($event)" type="file"
                  name="myfile"
                  accept="application/pdf"
                  class="absolute left-0 top-0 opacity-0 w-full h-full cursor-pointer"
              />
              <div class="text-red-500 text-xs" v-if="v$.resume.$errors.length">
                <div class="flex gap-x-2 items-center mt-2">
                  <img src="~/assets/images/job_circular/exceed.svg" alt="">
                  <p> {{ v$.resume.$errors[0].$message }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="small-device-bottom-section">
          <div class="mt-4 md:mt-12 mb-4 flex justify-center px-4">
            <button
                :disabled="isSubmitting"
                @click="submitForm"
                :class="isSubmitting ? 'opacity-20 cursor-not-allowed': ''"
                class="h-10 md:h-[60px] w-full md:w-[300px] flex justify-center items-center bg-corporate text-white rounded-full text-sm md:text-xl font-medium">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>