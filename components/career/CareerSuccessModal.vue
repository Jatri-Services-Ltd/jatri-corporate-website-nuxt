<script setup>
const success = inject("success")
const openModal = inject("openModal")
const closeModal = () => {
  success.value = false
  openModal.value = false
}

</script>

<template>
  <div class="modal-inner w-[380px] mx-auto flex justify-center items-center">
    <div class="bg-white rounded-2xl">
      <div class="px-4 py-6 pb-4 text-center">
        <img class="mx-auto" src="~/assets/images/job_circular/success.svg" alt="">
        <div class="my-6">
          <p class="mb-2 text-dark text-xl font-medium">Application submitted</p>
          <p class="text-[#676769] text-sm">
            Your application has been submitted successfully. We appreciate your interest.
            We will get back to you for further procedures. 
          </p>
        </div>
        <button @click="closeModal" class="w-full px-6 py-2.5 bg-corporate rounded-full font-medium text-white text-sm">Okay</button>
      </div>
    </div>
  </div>
</template>