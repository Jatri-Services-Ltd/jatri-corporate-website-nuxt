<script setup>
import careerFormSubmitValidator from "../../validators/careerFormSubmitValidator";
import CareerSuccess from "./CareerSuccessModal"
import CareerError from "./CareerErrorModal"

const applicationSubmitForm = inject("applicationSubmitForm")
const uploadFile = inject("uploadFile")
const removeFile = inject("removeFile")
const handleSubmit = inject("handleSubmit")
const isSubmitting = inject("isSubmitting")
const toggleModal = inject("toggleModal")
const { v$ } = careerFormSubmitValidator(applicationSubmitForm)
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
  <div>
    <CareerSuccess v-if="success"></CareerSuccess>
    <CareerError v-if="error"></CareerError>

    <div v-if="!success && !error" class="mx-4 md:w-[700px] bg-white rounded-md shadow-xl"
      style="box-shadow: 0 12px 28px #0003, 0 2px 4px #0000001a, inset 0 0 0 1px #ffffff0d;">
      <div class="flex justify-between items-center p-4 xl:p-6 border-b border-b-[#DBDBDB]">
        <p class="text-xl md:text-[32px] md:leading-10 font-medium text-dark">Apply now</p>
        <button @click="toggleModal"><img src="/images/career/close-icon.svg" alt="Close Modal"></button>
      </div>

      <div class="modal-content p-4 md:p-6 !pb-0 overflow-y-auto">
        <p class="text-sm md:text-2xl font-medium mb-4 md:mb-6 text-[#676769] md:text-black uppercase md:normal-case">
          Personal information</p>
        <div class="flex flex-col md:flex-row gap-4 md:gap-8">
          <div class="w-full">
            <label class="text-base font-medium text-dark pb-2.5 block" for="">Full name</label>
            <input v-model="v$.name.$model" @blur="v$.name.$touch()" type="text"
              class="w-full px-4 h-10 md:h-14 bg-[#F7F7F7] placeholder:text-sm placeholder:text-[#676769] focus:outline-none rounded"
              placeholder="Enter full name" :class="{ 'bg-[#FDF0F1] border border-[#E0293B]': v$?.name?.$errors.length }">
            <div v-if="v$.name.$errors.length">
              <div class="flex gap-x-2 items-center mt-2">
                <img src="~/assets/images/job_circular/exceed.svg" alt="">
                <p class="text-dark text-sm"> {{ v$.name.$errors[0].$message }}</p>
              </div>
            </div>
          </div>
          <div class="w-full">
            <label class="text-base font-medium text-dark pb-2.5 block" for="">Email address</label>
            <input v-model="v$.email.$model" @blur="v$.email.$touch()" type="email"
              class="w-full px-4 h-10 md:h-14 bg-[#F7F7F7] placeholder:text-sm placeholder:text-[#676769] focus:outline-none rounded"
              placeholder="Enter email address"
              :class="{ 'bg-[#FDF0F1] border border-[#E0293B]': v$?.email?.$errors.length }">
            <div v-if="v$.email.$errors.length">
              <div class="flex gap-x-2 items-center mt-2">
                <img src="~/assets/images/job_circular/exceed.svg" alt="">
                <p class="text-dark text-sm"> {{ v$.email.$errors[0].$message }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-6">
          <div class="w-full">
            <label class="text-base font-medium text-dark pb-2.5 block" for="">Mobile number</label>
            <input v-model="v$.mobile_number.$model" @blur="v$.mobile_number.$touch()" type="text"
              class="w-full px-4 h-10 md:h-14 bg-[#F7F7F7] placeholder:text-sm placeholder:text-[#676769] focus:outline-none rounded"
              placeholder="Enter mobile number"
              :class="{ 'bg-[#FDF0F1] border border-[#E0293B]': v$?.mobile_number?.$errors.length }">
            <div v-if="v$.mobile_number.$errors.length">
              <div class="flex gap-x-2 items-center mt-2">
                <img src="~/assets/images/job_circular/exceed.svg" alt="">
                <p class="text-dark text-sm"> {{ v$.mobile_number.$errors[0].$message }}</p>
              </div>
            </div>
          </div>
          <div class="w-full">
            <label class="text-base font-medium text-dark pb-2.5 block" for="">LinkedIn profile</label>
            <input v-model="v$.linkedin_profile.$model" @blur="v$.linkedin_profile.$touch()" type="text"
              class="w-full px-4 h-10 md:h-14 bg-[#F7F7F7] placeholder:text-sm placeholder:text-[#676769] focus:outline-none rounded"
              placeholder="Enter linkedin profile link"
              :class="{ 'bg-[#FDF0F1] border border-[#E0293B]': v$?.linkedin_profile?.$errors.length }">
            <div v-if="v$.linkedin_profile.$errors.length">
              <div class="flex gap-x-2 items-center mt-2">
                <img src="~/assets/images/job_circular/exceed.svg" alt="">
                <p class="text-dark text-sm">{{ v$.linkedin_profile.$errors[0].$message }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 md:mt-8">
          <p class="text-xs md:text-2xl font-medium text-[#676769] md:text-black uppercase md:normal-case">Resume / CV
          </p>
          <label class="text-base font-medium text-dark mt-4 md:mt-6 pb-2.5 block" for="">Resume / CV</label>
          <div class="relative overflow-hidden">
            <button
              :class="v$?.resume?.$errors?.length ? 'border border-dashed border-[#E0293B]' : 'border border-info border-dashed'"
              class="w-full md:h-[84px] p-4 md:px-5 text-start rounded-2xl">
              <div v-if="applicationSubmitForm.resume">
                <div class="flex gap-5">
                  <div class="flex gap-2 justify-between items-center w-full">
                    <div class="flex gap-x-2 md:gap-x-4">
                      <img class="" src="/images/career/upload-icon.svg" alt="Upload file">
                      <div class="flex items-center gap-x-2">
                        <p class="text-sm font-medium break-all max-w-[160px] sm:max-w-[350px] lg:max-w-[400px]">{{
                          applicationSubmitForm?.resume?.name }}</p>
                        <button @click="removeFile" class="pt-1"><img src="/images/career/remove-file-icon.svg"
                            alt="Remove cv"></button>
                      </div>
                    </div>
                    <div>
                      <input @change="uploadFile($event)" type="file" class="hidden" id="replace">
                      <label
                        class="text-primary md:text-[#E0293B] md:border-b md:border-b-[#E0293B] text-xs md:text-sm font-medium cursor-pointer"
                        for="replace">Replace</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-x-2 md:gap-x-4" :class="applicationSubmitForm.resume ? 'hidden' : ''">
                <img class="w-6 md:w-auto" src="/images/career/upload-icon.svg" alt="Upload file">
                <div>
                  <p class="text-info text-base font-medium mb-1">Upload resume / cv</p>
                  <p class="text-xs text-dark">File format should be <span class="font-semibold">PDF</span> and not more
                    than <span class="font-semibold">5MB</span></p>
                </div>
              </div>
            </button>
            <input @blur="v$.resume.$touch()" v-if="applicationSubmitForm.resume === ''" @change="uploadFile($event)"
              type="file" name="myfile" accept="application/pdf"
              class="absolute left-0 top-0 opacity-0 w-full h-full cursor-pointer" />
            <div v-if="v$.resume.$errors.length">
              <div class="flex gap-x-2 items-center mt-2">
                <img src="~/assets/images/job_circular/exceed.svg" alt="">
                <p class="text-dark text-sm"> {{ v$.resume.$errors[0].$message }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="pt-4 xl:pt-12 pb-4 xl:pb-10 flex justify-center px-4">
          <button :disabled="isSubmitting" @click="submitForm"
            :class="isSubmitting ? 'opacity-20 cursor-not-allowed' : ''"
            class="w-full md:w-[300px] py-2.5 md:py-4 bg-corporate text-white rounded-full text-sm md:text-xl font-medium">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 390px) {
  .modal-content {
    @apply max-h-[350px]
  }
}

@media (min-width: 391px) and (max-width: 599px) {
  .modal-content {
    @apply max-h-[532px]
  }
}

@media (min-width: 600px) and (max-width: 1439px) {
  .modal-content {
    @apply max-h-[350px]
  }
}

@media (min-width: 1440px) {
  .modal-content {
    @apply max-h-[700px]
  }
}
</style>